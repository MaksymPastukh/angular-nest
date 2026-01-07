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
import { switchMap, tap, catchError, of, debounceTime } from 'rxjs';
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
    /* ---------- API ---------- */

    const loadProducts = rxMethod<ProductFilterParams>((source$) =>
      source$.pipe(
        debounceTime(200),
        tap(() => {
          patchState(store, { isLoading: true, error: null });
        }),
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
              patchState(store, {
                products: [],
                isLoading: false,
                error: error?.message ?? 'Failed to load products',
              });
              return of(null);
            })
          );
        })
      )
    );

    /* ---------- FILTERS ---------- */

    /**
     * Устанавливает новые фильтры
     * ВАЖНО: Полностью заменяет фильтры новыми значениями
     * undefined значения означают отсутствие фильтра и не будут добавлены
     */
    function setFilters(filters: Partial<ProductFilterParams>) {
      const currentFilters = store.filters();

      // Создаем новый объект фильтров только с базовыми полями
      const newFilters: ProductFilterParams = {
        page: filters.page ?? 1,
        limit: filters.limit ?? currentFilters.limit ?? 20,
        sortBy: filters.sortBy ?? currentFilters.sortBy ?? 'createdAt',
        order: filters.order ?? currentFilters.order ?? 'desc',
      };

      // Добавляем остальные фильтры только если они определены
      // undefined означает что фильтр НЕ применяется
      if (filters.productType !== undefined) newFilters.productType = filters.productType;
      if (filters.category !== undefined) newFilters.category = filters.category;
      if (filters.dressStyle !== undefined) newFilters.dressStyle = filters.dressStyle;
      if (filters.brand !== undefined) newFilters.brand = filters.brand;
      if (filters.color !== undefined) newFilters.color = filters.color;
      if (filters.size !== undefined) newFilters.size = filters.size;
      if (filters.minPrice !== undefined) newFilters.minPrice = filters.minPrice;
      if (filters.maxPrice !== undefined) newFilters.maxPrice = filters.maxPrice;
      if (filters.minRating !== undefined) newFilters.minRating = filters.minRating;
      if (filters.search !== undefined) newFilters.search = filters.search;

      console.log('📦 ProductStore.setFilters - New state:', newFilters);

      patchState(store, {
        filters: newFilters,
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
       */
      effect(() => {
        const filters = store.filters();
        store.loadProducts(filters);
      });
    },
  })
);
