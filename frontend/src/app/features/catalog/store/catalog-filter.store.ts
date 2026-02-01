import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import type { Params } from '@angular/router'
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { MenuItem } from 'primeng/api'
import { catchError, EMPTY, forkJoin, Observable, switchMap, tap } from 'rxjs'
import { ProductsService } from '../../products/data-access/products.service'
import { CatalogFilterState } from '../domain/interfaces/catalog-filter-state.interface'
import { CatalogSelectedFiltersInterface } from '../domain/interfaces/catalog-selected-filters.interface'
import { ParsedUrlParamsInterface } from '../domain/interfaces/parsed-url-params.interface'
import { COLOR_MAP, generateColorHex } from '../utils/generateColorHex'
import { parseUrlParams } from '../utils/parseUrlParams.util'

const PRICE_DEFAULT = { min: 70, max: 270 } as const
type CompositeFilterKey = 'selectedCategories' | 'selectedStyles'

const initialState: CatalogFilterState = {
  filterData: null,
  selected: {
    priceRange: [PRICE_DEFAULT.min, PRICE_DEFAULT.max],
    selectedSizes: [],
    selectedColors: [],
    selectedCategory: null,
    selectedCategories: [],
    selectedStyles: [],
    searchQuery: '',
  },
  ui: {
    currentCategory: null,
    currentStyle: null,
  },
  isLoading: false,
  error: null,
  initialized: false,
}

const toggle = (list: string[], value: string): string[] => {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

const buildMenu = (
  items: string[],
  brands: string[],
  onSelect: (item: string, brand: string) => void
): MenuItem[] => {
  return items.map((item) => ({
    label: item,
    items: brands.map((brand) => ({
      label: brand,
      command: () => onSelect(item, brand),
    })),
  }))
}

/**
 * Универсальная функция для toggle category/style
 * Избегаем дублирования логики
 */
const createCompositeToggle = (
  key: CompositeFilterKey,
  value: string,
  resetKey: CompositeFilterKey,
  currentState: CatalogSelectedFiltersInterface
): CatalogSelectedFiltersInterface => {
  const prefix = value.split(':')[0]
  const existing = currentState[key].find((item) => item.startsWith(`${prefix}:`))

  // Если кликнули на уже выбранный → снимаем выбор
  if (existing === value) {
    return {
      ...currentState,
      [key]: [],
      [resetKey]: [],
    }
  }

  // Иначе → выбираем (заменяя старый, если был)
  return {
    ...currentState,
    [key]: [value],
    [resetKey]: [],
  }
}

export const ProductFilterStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

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

    const updateSelected = (
      updater: (current: CatalogSelectedFiltersInterface) => CatalogSelectedFiltersInterface
    ) => {
      patchState(store, {
        selected: updater(store.selected()),
      })
    }

    const setPriceRange = (priceRange: number[]) => {
      updateSelected((f) => ({ ...f, priceRange }))
    }

    const toggleArrayField = <K extends keyof CatalogSelectedFiltersInterface>(
      key: K,
      value: string
    ) => {
      updateSelected((f) => ({
        ...f,
        [key]: toggle(f[key] as string[], value),
      }))
    }

    const toggleSize = (size: string) => {
      toggleArrayField('selectedSizes', size)
    }

    const toggleColor = (color: string) => {
      toggleArrayField('selectedColors', color)
    }

    const setCategory = (category: string | null) => {
      updateSelected((f) => ({
        ...f,
        selectedCategory: category,
        selectedCategories: [],
        selectedStyles: [],
      }))
    }

    const toggleCategory = (category: string, brand: string) => {
      const key = `${category}:${brand}`
      updateSelected((f) => createCompositeToggle('selectedCategories', key, 'selectedStyles', f))
    }

    const toggleStyle = (style: string, brand: string) => {
      const key = `${style}:${brand}`
      updateSelected((f) => createCompositeToggle('selectedStyles', key, 'selectedCategories', f))
    }

    const setSearchQuery = (query: string) => {
      updateSelected((f) => ({ ...f, searchQuery: query }))
    }

    const resetFilters = () => {
      patchState(store, {
        selected: initialState.selected,
        ui: initialState.ui,
      })
    }

    const setCurrentCategory = (category: string | null) => {
      patchState(store, {
        ui: { ...store.ui(), currentCategory: category },
      })
    }

    const setCurrentStyle = (style: string | null) => {
      patchState(store, {
        ui: { ...store.ui(), currentStyle: style },
      })
    }

    const restoreFromQueryParams = (params: Params) => {
      const parsed: ParsedUrlParamsInterface = parseUrlParams(params)

      // Формируем полное состояние фильтров
      const selectedCategories: string[] = parsed.productType
        ? [`${parsed.productType}:${parsed.brand ?? ''}`]
        : []

      const selectedStyles: string[] =
        !parsed.productType && parsed.dressStyle
          ? [`${parsed.dressStyle}:${parsed.brand ?? ''}`]
          : []

      // Один детерминированный update
      patchState(store, {
        selected: {
          priceRange: [parsed.minPrice ?? PRICE_DEFAULT.min, parsed.maxPrice ?? PRICE_DEFAULT.max],
          selectedSizes: parsed.sizes,
          selectedColors: parsed.colors,
          selectedCategory: parsed.category ?? null,
          selectedCategories,
          selectedStyles,
          searchQuery: parsed.search ?? '',
        },
      })
    }

    return {
      loadFilterData: rxMethod<void>((source$) =>
        source$.pipe(
          tap(() => setLoading(true)),
          switchMap(() =>
            forkJoin({
              categories: productService.getCategories(),
              productTypes: productService.getProductTypes(),
              dressStyles: productService.getDressStyles(),
              brands: productService.getBrands(),
              colors: productService.getColors(),
              sizes: productService.getSizes(),
            }).pipe(
              tap((data) =>
                patchState(store, {
                  filterData: data,
                  isLoading: false,
                  initialized: true,
                })
              ),
              catchError((error: HttpErrorResponse): Observable<never> => {
                handleHttpError(error)
                return EMPTY
              })
            )
          )
        )
      ),
      setPriceRange,
      toggleSize,
      toggleColor,
      setCategory,
      toggleCategory,
      toggleStyle,
      setSearchQuery,
      resetFilters,
      restoreFromQueryParams,

      setCurrentCategory,
      setCurrentStyle,
    }
  }),

  withComputed((store) => {
    const { toggleCategory } = store
    const { toggleStyle } = store

    return {
      sizes: computed(() => store.filterData()?.sizes ?? []),

      colors: computed(() =>
        (store.filterData()?.colors ?? []).map((name: string) => ({
          name,
          value: COLOR_MAP[name] ?? generateColorHex(name),
        }))
      ),

      categoryNames: computed(() => store.filterData()?.productTypes ?? []),

      styleNames: computed(() => store.filterData()?.dressStyles ?? []),

      brandsMenuForCurrentCategory: computed<MenuItem[]>(() => {
        const data = store.filterData()
        const { currentCategory } = store.ui()

        if (!data || !currentCategory) return []

        return data.brands.map((brand: string) => ({
          label: brand,
          command: () => toggleCategory(currentCategory, brand),
        }))
      }),

      brandsMenuForCurrentStyle: computed<MenuItem[]>(() => {
        const data = store.filterData()
        const { currentStyle } = store.ui()

        if (!data || !currentStyle) return []

        return data.brands.map((brand: string) => ({
          label: brand,
          command: () => toggleStyle(currentStyle, brand),
        }))
      }),

      currentCategory: computed(
        () => store.selected().selectedCategories[0]?.split(':')[0] ?? null
      ),

      currentStyle: computed(() => store.selected().selectedStyles[0]?.split(':')[0] ?? null),

      subCategoryMenu: computed<MenuItem[]>(() => {
        const data = store.filterData()
        if (!data) return []
        return buildMenu(data.productTypes, data.brands, toggleCategory)
      }),

      selectedFilters: computed(() => store.selected()),
    }
  }),

  withHooks({
    onInit(store) {
      store.loadFilterData()
    },
  })
)

export type ProductFilterStoreType = InstanceType<typeof ProductFilterStore>
