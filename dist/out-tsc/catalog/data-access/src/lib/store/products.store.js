import { HttpErrorResponse } from '@angular/common/http';
import { computed, effect, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState, } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { ProductsService } from '../data-access/products.service';
const initialState = {
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
};
export const ProductStore = signalStore({ providedIn: 'root' }, withState(initialState), withComputed((store) => ({
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
    facetsBrands: computed(() => store.facets()?.brands ?? []),
    facetsProductTypes: computed(() => store.facets()?.productTypes ?? []),
    facetsDressStyles: computed(() => store.facets()?.dressStyles ?? []),
    facetsSizes: computed(() => store.facets()?.sizes ?? []),
    facetsColors: computed(() => store.facets()?.colors ?? []),
    facetsBrandValues: computed(() => (store.facets()?.brands ?? []).map((x) => x.value)),
    facetsProductTypeValues: computed(() => (store.facets()?.productTypes ?? []).map((x) => x.value)),
    facetsDressStyleValues: computed(() => (store.facets()?.dressStyles ?? []).map((x) => x.value)),
    facetsSizeValues: computed(() => (store.facets()?.sizes ?? []).map((x) => x.value)),
    facetsColorValues: computed(() => (store.facets()?.colors ?? []).map((x) => x.value)),
})), withMethods((store, productService = inject(ProductsService)) => {
    const setPending = () => patchState(store, { isLoading: true, error: null });
    const stop = () => patchState(store, { isLoading: false });
    const setFailure = (message) => patchState(store, { error: message });
    const getErrorMessage = (error) => {
        if (!(error instanceof HttpErrorResponse))
            return 'Произошла ошибка';
        const apiMessage = error.error?.message;
        if (typeof apiMessage === 'string')
            return apiMessage;
        if (Array.isArray(apiMessage))
            return apiMessage.join(' ');
        return error.message ?? `Request failed with status ${error.status}.`;
    };
    const setProductsSuccess = (response) => {
        patchState(store, {
            products: response.products,
            total: response.total,
            totalPages: response.totalPages,
            facets: response.facets ?? null,
        });
    };
    const setFilters = (filters) => {
        const current = store.filters();
        const base = {
            page: filters.page ?? current.page ?? 1,
            limit: filters.limit ?? current.limit ?? 20,
            sortBy: filters.sortBy ?? current.sortBy ?? 'createdAt',
            order: filters.order ?? current.order ?? 'desc',
        };
        const next = { ...base };
        const assign = (key) => {
            if (key in filters) {
                const value = filters[key];
                if (value !== undefined)
                    next[key] = value;
                // if undefined -> remove (do not copy)
            }
            else if (current[key] !== undefined) {
                next[key] = current[key];
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
        patchState(store, { filters: next });
    };
    const resetFilters = () => patchState(store, { filters: initialState.filters });
    const nextPage = () => {
        const { page = 1 } = store.filters();
        if (page < store.totalPages())
            setFilters({ page: page + 1 });
    };
    const prevPage = () => {
        const { page = 1 } = store.filters();
        if (page > 1)
            setFilters({ page: page - 1 });
    };
    const setPage = (page) => setFilters({ page });
    const setPageSize = (limit) => setFilters({ limit, page: 1 });
    const setSorting = (sortBy, order) => setFilters({ sortBy, order, page: 1 });
    const search = (search) => setFilters({ search, page: 1 });
    const loadProducts = rxMethod(pipe(tap(() => setPending()), switchMap((filters) => productService.getFilteredProducts(filters).pipe(tapResponse({
        next: (response) => setProductsSuccess(response),
        error: (e) => setFailure(getErrorMessage(e)),
        finalize: () => stop(),
    })))));
    return {
        loadProducts,
        setFilters,
        resetFilters,
        nextPage,
        prevPage,
        setPage,
        setPageSize,
        setSorting,
        search,
    };
}), withHooks({
    onInit(store) {
        /**
         * Any change in filters -> API request.
         * Guard first run: don't shoot request immediately with defaults;
         * wait for filters to be restored from URL/facade.
         */
        let isFirstRun = true;
        effect(() => {
            const filters = store.filters();
            if (isFirstRun) {
                isFirstRun = false;
                return;
            }
            store.loadProducts(filters);
        });
    },
}));
