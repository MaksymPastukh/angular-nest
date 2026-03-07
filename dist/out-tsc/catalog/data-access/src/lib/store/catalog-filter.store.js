import { HttpErrorResponse } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState, } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { forkJoin, pipe, switchMap, tap } from 'rxjs';
import { COLOR_MAP, generateColorHex, } from '@marketplace/frontend-catalog-util';
import { ProductsService } from '../data-access/products.service';
const PRICE_DEFAULT = { min: 70, max: 270 };
const COLOR_HEX_CACHE = new Map();
const initialState = {
    filterData: null,
    selected: {
        priceRange: [PRICE_DEFAULT.min, PRICE_DEFAULT.max],
        selectedSizes: [],
        selectedColors: [],
        selectedCategory: null,
        selectedTypeKey: null,
        selectedStyleKey: null,
        searchQuery: '',
    },
    isLoading: false,
    error: null,
    initialized: false,
};
const toggle = (list, value) => list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
const getColorHex = (name) => {
    if (!name || typeof name !== 'string')
        return '#9e9e9e';
    const predefined = COLOR_MAP[name];
    if (predefined)
        return predefined;
    const cached = COLOR_HEX_CACHE.get(name);
    if (cached)
        return cached;
    const hex = generateColorHex(name);
    COLOR_HEX_CACHE.set(name, hex);
    return hex;
};
export const ProductFilterStore = signalStore({ providedIn: 'root' }, withState(initialState), withComputed((store) => ({
    sizes: computed(() => store.filterData()?.sizes ?? []),
    colors: computed(() => (store.filterData()?.colors ?? [])
        .filter((name) => typeof name === 'string' && name.trim().length > 0)
        .map((name) => ({
        name,
        value: getColorHex(name),
    }))),
    brands: computed(() => store.filterData()?.brands ?? []),
    productTypes: computed(() => store.filterData()?.productTypes ?? []),
    dressStyles: computed(() => store.filterData()?.dressStyles ?? []),
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
    const updateSelected = (updater) => {
        patchState(store, { selected: updater(store.selected()) });
    };
    const setPriceRange = (priceRange) => {
        updateSelected((f) => ({ ...f, priceRange }));
    };
    const toggleArrayField = (key, value) => {
        updateSelected((f) => ({ ...f, [key]: toggle(f[key], value) }));
    };
    const toggleSize = (size) => toggleArrayField('selectedSizes', size);
    const toggleColor = (color) => toggleArrayField('selectedColors', color);
    const setCategory = (category) => {
        updateSelected((f) => ({
            ...f,
            selectedCategory: category,
            selectedTypeKey: null,
            selectedStyleKey: null,
        }));
    };
    const toggleType = (type, brand) => {
        const key = `${type}:${brand}`;
        updateSelected((f) => ({
            ...f,
            selectedTypeKey: f.selectedTypeKey === key ? null : key,
            selectedStyleKey: null,
        }));
    };
    const toggleStyle = (type, brand) => {
        const key = `${type}:${brand}`;
        updateSelected((f) => ({
            ...f,
            selectedStyleKey: f.selectedStyleKey === key ? null : key,
            selectedTypeKey: null,
        }));
    };
    const setSearchQuery = (query) => {
        updateSelected((f) => ({ ...f, searchQuery: query }));
    };
    const resetFilters = () => {
        patchState(store, { selected: initialState.selected });
    };
    const loadFilterData = rxMethod(pipe(tap(() => setPending()), switchMap(() => forkJoin({
        categories: productService.getCategories(),
        productTypes: productService.getProductTypes(),
        dressStyles: productService.getDressStyles(),
        brands: productService.getBrands(),
        colors: productService.getColors(),
        sizes: productService.getSizes(),
    }).pipe(tapResponse({
        next: (data) => {
            patchState(store, {
                filterData: data,
                initialized: true,
                error: null,
            });
        },
        error: (e) => setFailure(getErrorMessage(e)),
        finalize: () => stop(),
    })))));
    const ensureLoaded = rxMethod(pipe(tap(() => {
        if (store.initialized() || store.isLoading())
            return;
        loadFilterData();
    })));
    const hydrateSelected = (selected) => {
        patchState(store, { selected });
    };
    return {
        hydrateSelected,
        setPriceRange,
        setCategory,
        toggleColor,
        toggleSize,
        toggleStyle,
        toggleType,
        setSearchQuery,
        resetFilters,
        loadFilterData,
        ensureLoaded,
    };
}), withHooks({
    onInit(store) {
        store.ensureLoaded();
    },
}));
