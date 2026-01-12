 import { computed, effect, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap, tap, catchError, of } from 'rxjs';
import { ProductService } from '../services/product.service';
import type { ProductType, ProductFilterParams } from '../../views/types/product.type';

/* =======================
   STATE
======================= */

interface ProductState {
  products: ProductType[];

  filters: ProductFilterParams;

  isLoading: boolean;
  error: string | null;

  total: number;
  totalPages: number;
}

/* =======================
   INITIAL STATE
======================= */

const initialState: ProductState = {
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
};

/* =======================
   STORE
======================= */

export const ProductStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  /* =======================
     COMPUTED
  ======================= */

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
  })),

  /* =======================
     METHODS
  ======================= */

  withMethods((store, productService = inject(ProductService)) => {
    /* ---------- HELPERS ---------- */

    /**
     * Устанавливает состояние загрузки
     */
    function setLoading(isLoading: boolean) {
      patchState(store, { isLoading, error: isLoading ? null : store.error() });
    }

    /**
     * Устанавливает ошибку
     */
    function setError(error: string) {
      patchState(store, { isLoading: false, error });
    }

    /* ---------- API ---------- */

    const loadProducts = rxMethod<ProductFilterParams>((source$) =>
      source$.pipe(
        tap(() => setLoading(true)),
        switchMap((filters) => {
          return productService.getFilteredProducts(filters).pipe(
            tap((response) => {
              patchState(store, {
                products: response.products,
                total: response.total,
                totalPages: response.totalPages,
                isLoading: false,
              });
            }),
            catchError((error) => {
              console.error('[ProductStore] Failed to load products:', error);

              patchState(store, {
                products: [],
              });

              setError(error?.message ?? 'Failed to load products');
              return of(null);
            })
          );
        })
      )
    );

    /* ---------- FILTERS ---------- */

    /**
     * Устанавливает новые фильтры
     *
     * Семантика:
     * - Если ключ передан и значение !== undefined → устанавливаем
     * - Если ключ передан и значение === undefined → удаляем (не копируем в next)
     * - Если ключ НЕ передан → сохраняем текущее значение
     *
     * Это делает API явным и предсказуемым
     */
    function setFilters(filters: Partial<ProductFilterParams>) {
      const current = store.filters();

      // Базовые поля с дефолтами
      const base: ProductFilterParams = {
        page: filters.page ?? current.page ?? 1,
        limit: filters.limit ?? current.limit ?? 20,
        sortBy: filters.sortBy ?? current.sortBy ?? 'createdAt',
        order: filters.order ?? current.order ?? 'desc',
      };

      const next: ProductFilterParams = { ...base };

      /**
       * Helper для явного присваивания:
       * - key in filters && value !== undefined → записываем
       * - key in filters && value === undefined → не записываем (удаляем)
       * - key not in filters → копируем из current (сохраняем)
       */
      const assign = <K extends keyof ProductFilterParams>(key: K) => {
        if (key in filters) {
          const value = filters[key];
          if (value !== undefined) {
            (next as any)[key] = value;
          }
          // Если undefined — не копируем, тем самым удаляем
        } else if (current[key] !== undefined) {
          // Ключ не передан — оставляем текущее значение
          (next as any)[key] = current[key];
        }
      };

      assign('productType');
      assign('category');
      assign('dressStyle');
      assign('brand');
      assign('color');
      assign('size');
      assign('minPrice');
      assign('maxPrice');
      assign('minRating');
      assign('search');

      patchState(store, {
        filters: next,
      });
    }

    function resetFilters() {
      patchState(store, {
        filters: initialState.filters,
      });
    }

    /* ---------- PAGINATION ---------- */

    function nextPage() {
      const { page = 1 } = store.filters();
      if (page < store.totalPages()) {
        setFilters({ page: page + 1 });
      }
    }

    function prevPage() {
      const { page = 1 } = store.filters();
      if (page > 1) {
        setFilters({ page: page - 1 });
      }
    }

    function setPage(page: number) {
      setFilters({ page });
    }

    function setPageSize(limit: number) {
      setFilters({ limit, page: 1 });
    }

    /* ---------- SORTING ---------- */

    function setSorting(
      sortBy: ProductFilterParams['sortBy'],
      order: 'asc' | 'desc'
    ) {
      setFilters({ sortBy, order, page: 1 });
    }

    /* ---------- SEARCH ---------- */

    function search(search: string) {
      setFilters({ search, page: 1 });
    }

    return {
      /* API */
      loadProducts,

      /* Filters */
      setFilters,
      resetFilters,

      /* Pagination */
      nextPage,
      prevPage,
      setPage,
      setPageSize,

      /* Sorting */
      setSorting,

      /* Search */
      search,
    };
  }),

  /* =======================
     HOOKS
  ======================= */

  withHooks({
    onInit(store) {
      /**
       * 🔥 ГЛАВНАЯ ФИШКА
       * Любое изменение filters → автоматический API запрос
       *
       * Защита от первого вызова: не стреляем запросом сразу при инициализации,
       * ждем пока фильтры будут восстановлены из URL/Facade
       */
      let isFirstRun = true;

      effect(() => {
        const filters = store.filters();

        if (isFirstRun) {
          isFirstRun = false;
          // Пропускаем первый запрос с дефолтными фильтрами
          // Фасад сам вызовет setFilters после восстановления из URL
          // После этого effect сработает снова и сделает запрос
          return;
        }

        // Все последующие изменения фильтров → запрос на сервер
        store.loadProducts(filters);
      });
    },
  })
);
