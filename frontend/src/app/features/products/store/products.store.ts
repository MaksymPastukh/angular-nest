import { HttpErrorResponse } from '@angular/common/http'
import { computed, effect, inject } from '@angular/core'
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, EMPTY, switchMap, tap } from 'rxjs'
import { CatalogFilterParamsInterface } from '../../catalog/domain/interfaces/catalog-filter-params.interface'
import { ProductsService } from '../data-access/products.service'
import { ProductsResponseInterface } from '../domain/interfaces/products-response.interface'
import { ShopStateInterface } from '../domain/interfaces/products-state.interface'

const initialState: ShopStateInterface = {
  products: [],
  filters: {
    page: 1,
    limit: 20,
    sortBy: 'createdAt',
    order: 'desc',
  },
  isLoading: false,
  error: null,
  total: 0,
  totalPages: 0,
  facets: null,
}

export const ProductStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => ({
    hasProducts: computed(() => store.products().length > 0),

    productsCount: computed(() => store.products().length),

    pagination: computed(() => ({
      page: store.filters().page ?? 1,
      limit: store.filters().limit ?? 20,
      total: store.total(),
      totalPages: store.totalPages(),
      hasNext: (store.filters().page ?? 1) < store.totalPages(),
      hasPrev: (store.filters().page ?? 1) > 1,
    })),

    facets: computed(() => store.facets()),

    facetsBrands: computed(() => store.facets()?.brands ?? []),
    facetsProductTypes: computed(() => store.facets()?.productTypes ?? []),
    facetsDressStyles: computed(() => store.facets()?.dressStyles ?? []),
    facetsSizes: computed(() => store.facets()?.sizes ?? []),
    facetsColors: computed(() => store.facets()?.colors ?? []),

    // Если где-то нужны только строки:
    facetsBrandValues: computed(() => (store.facets()?.brands ?? []).map((x) => x.value)),
    facetsProductTypeValues: computed(() =>
      (store.facets()?.productTypes ?? []).map((x) => x.value)
    ),
    facetsDressStyleValues: computed(() => (store.facets()?.dressStyles ?? []).map((x) => x.value)),
    facetsSizeValues: computed(() => (store.facets()?.sizes ?? []).map((x) => x.value)),
    facetsColorValues: computed(() => (store.facets()?.colors ?? []).map((x) => x.value)),
  })),

  withMethods((store, productService = inject(ProductsService)) => {
    const setLoading = (isLoading: boolean) =>
      patchState(store, { isLoading, error: isLoading ? null : store.error() })

    const setError = (error: string) =>
      patchState(store, {
        isLoading: false,
        error,
      })

    const handleHttpError = (error: HttpErrorResponse) => {
      const message =
        (error.error as { message?: string })?.message ?? error.message ?? 'Произошла ошибка'

      setError(String(message))
    }

    const setFilters = (filters: Partial<CatalogFilterParamsInterface>) => {
      const current = store.filters()

      const base: CatalogFilterParamsInterface = {
        page: filters.page ?? current.page ?? 1,
        limit: filters.limit ?? current.limit ?? 20,
        sortBy: filters.sortBy ?? current.sortBy ?? 'createdAt',
        order: filters.order ?? current.order ?? 'desc',
      }

      const next: CatalogFilterParamsInterface = { ...base }

      const assign = <K extends keyof CatalogFilterParamsInterface>(key: K) => {
        if (key in filters) {
          const value = filters[key]
          if (value !== undefined) {
            next[key] = value
          }
          // Если undefined — не копируем, тем самым удаляем
        } else if (current[key] !== undefined) {
          // Ключ не передан — оставляем текущее значение
          next[key] = current[key] as CatalogFilterParamsInterface[K]
        }
      }

      assign('productType')
      assign('category')
      assign('dressStyle')
      assign('brand')
      assign('color')
      assign('size')
      assign('minPrice')
      assign('maxPrice')
      assign('minRating')
      assign('search')

      patchState(store, {
        filters: next,
      })
    }

    const resetFilters = () => {
      patchState(store, {
        filters: initialState.filters,
      })
    }

    const nextPage = () => {
      const { page = 1 } = store.filters()
      if (page < store.totalPages()) {
        setFilters({ page: page + 1 })
      }
    }

    const prevPage = () => {
      const { page = 1 } = store.filters()
      if (page > 1) {
        setFilters({ page: page - 1 })
      }
    }

    const setPage = (page: number) => {
      setFilters({ page })
    }

    const setPageSize = (limit: number) => {
      setFilters({ limit, page: 1 })
    }

    const setSorting = (sortBy: CatalogFilterParamsInterface['sortBy'], order: 'asc' | 'desc') => {
      setFilters({ sortBy, order, page: 1 })
    }

    const search = (search: string) => {
      setFilters({ search, page: 1 })
    }

    return {
      loadProducts: rxMethod<CatalogFilterParamsInterface>((source$) =>
        source$.pipe(
          tap(() => setLoading(true)),
          switchMap((filters) => {
            return productService.getFilteredProducts(filters).pipe(
              tap((response: ProductsResponseInterface) => {
                patchState(store, {
                  products: response?.products,
                  total: response.total,
                  totalPages: response.totalPages,
                  facets: response.facets ?? null,
                  isLoading: false,
                })
              }),
              catchError((error: HttpErrorResponse) => {
                handleHttpError(error)
                return EMPTY
              })
            )
          })
        )
      ),
      setFilters,
      resetFilters,
      nextPage,
      prevPage,
      setPage,
      setPageSize,
      setSorting,
      search,
    }
  }),
  withHooks({
    onInit(store) {
      /**
       * Любое изменение filters → автоматический API запрос
       * Защита от первого вызова: не стреляем запросом сразу при инициализации,
       * ждем пока фильтры будут восстановлены из URL/Facade
       */
      let isFirstRun = true

      effect(() => {
        const filters = store.filters()

        if (isFirstRun) {
          isFirstRun = false
          // Пропускаем первый запрос с дефолтными фильтрами
          // Фасад сам вызовет setFilters после восстановления из URL
          // После этого effect сработает снова и сделает запрос
          return
        }

        // Все последующие изменения фильтров → запрос на сервер
        store.loadProducts(filters)
      })
    },
  })
)
