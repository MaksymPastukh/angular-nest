import { HttpErrorResponse } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs';
import { ProductsService } from '../data-access/products.service';
const initialState = {
    activeKey: null,
    brands: null,
    isLoading: false,
    error: null,
};
export const CatalogFacetsStore = signalStore({ providedIn: 'root' }, withState(initialState), withComputed((store) => ({
    hasBrands: computed(() => (store.brands()?.length ?? 0) > 0),
    brandsSafe: computed(() => store.brands() ?? []),
})), withMethods((store, productsService = inject(ProductsService)) => {
    const CACHE = new Map();
    const setPending = () => {
        patchState(store, { isLoading: true, error: null });
    };
    const stop = () => {
        patchState(store, { isLoading: false });
    };
    const setFailure = (message) => {
        patchState(store, { error: message });
    };
    const setBrands = (brands) => {
        patchState(store, { brands });
    };
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
    const buildPreviewParams = (req) => {
        const base = req.params ?? {};
        if ('previewProductType' in req) {
            return { ...base, previewProductType: req.previewProductType };
        }
        return { ...base, previewDressStyle: req.previewDressStyle };
    };
    const clear = () => {
        patchState(store, { activeKey: null, brands: null, isLoading: false, error: null });
    };
    const begin = (activeKey) => {
        patchState(store, { activeKey, brands: null, isLoading: true, error: null });
    };
    const loadPreviewBrands = rxMethod((source$) => source$.pipe(map((req) => {
        const finalParams = buildPreviewParams(req);
        const cacheKey = JSON.stringify(finalParams);
        return { req, finalParams, cacheKey };
    }), distinctUntilChanged((a, b) => a.cacheKey === b.cacheKey), tap(({ req, cacheKey }) => {
        patchState(store, { activeKey: req.activeKey });
        setPending();
        setBrands(null);
        const cached = CACHE.get(cacheKey);
        if (cached) {
            setBrands(cached);
            stop();
        }
    }), switchMap(({ finalParams, cacheKey }) => {
        const cached = CACHE.get(cacheKey);
        if (cached) {
            return [];
        }
        return productsService.getFacets(finalParams).pipe(map((res) => res.brands ?? []), tapResponse({
            next: (brands) => {
                CACHE.set(cacheKey, brands);
                setBrands(brands);
            },
            error: (e) => setFailure(getErrorMessage(e)),
            finalize: () => stop(),
        }));
    })));
    return { clear, begin, loadPreviewBrands };
}));
