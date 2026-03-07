import { __decorate } from "tslib";
import { computed, inject, Injectable, signal } from '@angular/core';
import { buildBaseFacetsParams } from '@marketplace/frontend-catalog-util';
import { CatalogFacetsStore } from './catalog-faceds-preview.store';
import { ProductFilterStore } from './catalog-filter.store';
let CatalogFilterFacade = class CatalogFilterFacade {
    store = inject(ProductFilterStore);
    catalogFacetsStore = inject(CatalogFacetsStore);
    isLoading = this.store.isLoading;
    error = this.store.error;
    initialized = this.store.initialized;
    sizes = this.store.sizes;
    brands = this.store.brands;
    colors = this.store.colors;
    productTypes = this.store.productTypes;
    dressStyles = this.store.dressStyles;
    selected = this.store.selected;
    previewBrandsSafe = this.catalogFacetsStore.brandsSafe;
    previewIsLoading = this.catalogFacetsStore.isLoading;
    selectedColorSet = computed(() => new Set(this.selected().selectedColors));
    selectedSizesSet = computed(() => new Set(this.selected().selectedSizes));
    isColorsSelected = (name) => this.selectedColorSet().has(name);
    isSizesSelected = (size) => this.selectedSizesSet().has(size);
    _activeCategory = signal(null);
    _activeStyle = signal(null);
    activeCategory = this._activeCategory.asReadonly();
    activeStyle = this._activeStyle.asReadonly();
    setActiveCategory(category) {
        this._activeCategory.set(category);
        this._activeStyle.set(null);
        if (!category) {
            this.catalogFacetsStore.clear();
            return;
        }
        const activeKey = `productType:${category}`;
        const params = buildBaseFacetsParams(this.store.selected());
        this.catalogFacetsStore.begin(activeKey);
        this.catalogFacetsStore.loadPreviewBrands({
            activeKey,
            params,
            previewProductType: category,
        });
    }
    setActiveStyle(style) {
        this._activeStyle.set(style);
        this._activeCategory.set(null);
        if (!style) {
            this.catalogFacetsStore.clear();
            return;
        }
        const activeKey = `dressStyle:${style}`;
        const params = buildBaseFacetsParams(this.store.selected());
        this.catalogFacetsStore.begin(activeKey);
        this.catalogFacetsStore.loadPreviewBrands({
            activeKey,
            params,
            previewDressStyle: style,
        });
    }
    categoryBrandsMenu = computed(() => {
        const category = this._activeCategory();
        if (!category)
            return [];
        const brands = this.catalogFacetsStore.brandsSafe();
        const isLoading = this.catalogFacetsStore.isLoading();
        if (isLoading) {
            return [{ label: 'Loading...', disabled: true }];
        }
        if (brands.length === 0) {
            return [{ label: 'Нет брендов', disabled: true }];
        }
        const sorted = [...brands].sort((a, b) => b.count - a.count);
        return sorted.map((b) => ({
            label: b.value.trim(),
            disabled: b.count === 0,
            command: () => this.store.toggleType(category, b.value),
        }));
    });
    styleBrandsMenu = computed(() => {
        const style = this._activeStyle();
        if (!style)
            return [];
        const brands = this.catalogFacetsStore.brandsSafe();
        const isLoading = this.catalogFacetsStore.isLoading();
        if (isLoading) {
            return [{ label: 'Loading...', disabled: true }];
        }
        if (brands.length === 0) {
            return [{ label: 'Нет брендов', disabled: true }];
        }
        const sorted = [...brands].sort((a, b) => b.count - a.count);
        return sorted.map((b) => ({
            label: b.value.trim(),
            disabled: b.count === 0,
            command: () => this.store.toggleStyle(style, b.value),
        }));
    });
    ensureLoaded() {
        this.store.ensureLoaded();
    }
    reloadFilterData() {
        this.store.loadFilterData();
    }
    setPriceRange(range) {
        this.store.setPriceRange(range);
    }
    toggleSize(size) {
        this.store.toggleSize(size);
    }
    toggleColor(color) {
        this.store.toggleColor(color);
    }
    toggleType(productType, brand) {
        this.store.toggleType(productType, brand);
    }
    toggleStyle(dressStyle, brand) {
        this.store.toggleStyle(dressStyle, brand);
    }
    setCategory(category) {
        this._activeCategory.set(null);
        this._activeStyle.set(null);
        this.catalogFacetsStore.clear();
        this.store.setCategory(category);
    }
    setSearchQuery(query) {
        this.store.setSearchQuery(query);
    }
    resetFilters() {
        this._activeCategory.set(null);
        this._activeStyle.set(null);
        this.catalogFacetsStore.clear();
        this.store.resetFilters();
    }
};
CatalogFilterFacade = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CatalogFilterFacade);
export { CatalogFilterFacade };
