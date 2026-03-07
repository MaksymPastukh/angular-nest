import { MenuItem } from 'primeng/api';
export declare class CatalogFilterFacade {
    private readonly store;
    private readonly catalogFacetsStore;
    readonly isLoading: import("@angular/core").Signal<boolean>;
    readonly error: import("@angular/core").Signal<string | null>;
    readonly initialized: import("@angular/core").Signal<boolean>;
    readonly sizes: import("@angular/core").Signal<string[]>;
    readonly brands: import("@angular/core").Signal<string[]>;
    readonly colors: import("@angular/core").Signal<{
        name: string;
        value: string;
    }[]>;
    readonly productTypes: import("@angular/core").Signal<string[]>;
    readonly dressStyles: import("@angular/core").Signal<string[]>;
    readonly selected: import("@ngrx/signals").DeepSignal<import("@marketplace/frontend-catalog-util").CatalogSelectedFiltersInterface>;
    readonly previewBrandsSafe: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").FacetItemInterface[]>;
    readonly previewIsLoading: import("@angular/core").Signal<boolean>;
    readonly selectedColorSet: import("@angular/core").Signal<Set<string>>;
    readonly selectedSizesSet: import("@angular/core").Signal<Set<string>>;
    isColorsSelected: (name: string) => boolean;
    isSizesSelected: (size: string) => boolean;
    private readonly _activeCategory;
    private readonly _activeStyle;
    readonly activeCategory: import("@angular/core").Signal<string | null>;
    readonly activeStyle: import("@angular/core").Signal<string | null>;
    setActiveCategory(category: string | null): void;
    setActiveStyle(style: string | null): void;
    readonly categoryBrandsMenu: import("@angular/core").Signal<MenuItem[]>;
    readonly styleBrandsMenu: import("@angular/core").Signal<MenuItem[]>;
    ensureLoaded(): void;
    reloadFilterData(): void;
    setPriceRange(range: [number, number]): void;
    toggleSize(size: string): void;
    toggleColor(color: string): void;
    toggleType(productType: string, brand: string): void;
    toggleStyle(dressStyle: string, brand: string): void;
    setCategory(category: string | null): void;
    setSearchQuery(query: string): void;
    resetFilters(): void;
}
//# sourceMappingURL=catalog-filter.facade.d.ts.map