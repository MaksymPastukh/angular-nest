import { __decorate } from "tslib";
import { Injectable, effect, inject, signal, untracked } from '@angular/core';
import { Router } from '@angular/router';
import { filtersToQueryParams, mapToApiFilters, parseUrlParams, parsedToSelected, } from '@marketplace/frontend-catalog-util';
import { ProductFilterStore } from './catalog-filter.store';
import { ProductStore } from './products.store';
let ProductsPageFacade = class ProductsPageFacade {
    productStore = inject(ProductStore);
    filterStore = inject(ProductFilterStore);
    router = inject(Router);
    isRestoringFromUrl = signal(false);
    lastQueryString = signal('');
    facetsBrands = this.productStore.facetsBrands;
    facetsProductTypes = this.productStore.facetsProductTypes;
    facetsDressStyles = this.productStore.facetsDressStyles;
    facetsSizes = this.productStore.facetsSizes;
    facetsColors = this.productStore.facetsColors;
    constructor() {
        effect(() => {
            const uiFilters = this.filterStore.selected();
            const apiFilters = mapToApiFilters(uiFilters);
            untracked(() => {
                const restoring = this.isRestoringFromUrl();
                this.productStore.setFilters(restoring ? apiFilters : { ...apiFilters, page: 1 });
                this.syncUrlWithFilters(this.productStore.filters());
            });
        });
    }
    syncUrlWithFilters(filters) {
        const queryParams = filtersToQueryParams(filters);
        const next = JSON.stringify(queryParams);
        if (next === this.lastQueryString())
            return;
        this.lastQueryString.set(next);
        void this.router.navigate([], {
            queryParams,
            replaceUrl: true,
        });
    }
    restoreFiltersFromUrl(params) {
        const isEmpty = !params || Object.keys(params).length === 0;
        untracked(() => {
            this.isRestoringFromUrl.set(true);
            if (isEmpty) {
                this.filterStore.resetFilters();
                this.productStore.resetFilters();
                this.lastQueryString.set(JSON.stringify({}));
                this.isRestoringFromUrl.set(false);
                return;
            }
            const parsed = parseUrlParams(params);
            const selected = parsedToSelected(parsed);
            this.filterStore.hydrateSelected(selected);
            this.productStore.setFilters({
                page: parsed.page,
                limit: parsed.limit,
                sortBy: parsed.sortBy,
                order: parsed.order,
            });
            this.lastQueryString.set(JSON.stringify(filtersToQueryParams(this.productStore.filters())));
            this.isRestoringFromUrl.set(false);
        });
    }
    resetFilters() {
        this.filterStore.resetFilters();
        this.productStore.resetFilters();
        this.lastQueryString.set('');
    }
    // Products
    products = this.productStore.products;
    isLoading = this.productStore.isLoading;
    // Filters (UI)
    filters = this.filterStore.selected;
    sizes = this.filterStore.sizes;
    colors = this.filterStore.colors;
};
ProductsPageFacade = __decorate([
    Injectable({ providedIn: 'root' })
], ProductsPageFacade);
export { ProductsPageFacade };
