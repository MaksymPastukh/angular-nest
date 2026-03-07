import { RxMethod } from '@ngrx/signals/rxjs-interop';
import { CatalogSelectedFiltersInterface } from '@marketplace/frontend-catalog-util';
export declare const ProductFilterStore: import("@angular/core").Type<{
    filterData: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").CatalogFilterDataInterface | null>;
    selected: import("@ngrx/signals").DeepSignal<CatalogSelectedFiltersInterface>;
    isLoading: import("@angular/core").Signal<boolean>;
    error: import("@angular/core").Signal<string | null>;
    initialized: import("@angular/core").Signal<boolean>;
    sizes: import("@angular/core").Signal<string[]>;
    colors: import("@angular/core").Signal<{
        name: string;
        value: string;
    }[]>;
    brands: import("@angular/core").Signal<string[]>;
    productTypes: import("@angular/core").Signal<string[]>;
    dressStyles: import("@angular/core").Signal<string[]>;
    hydrateSelected: (selected: CatalogSelectedFiltersInterface) => void;
    setPriceRange: (priceRange: [number, number]) => void;
    setCategory: (category: string | null) => void;
    toggleColor: (color: string) => void;
    toggleSize: (size: string) => void;
    toggleStyle: (type: string, brand: string) => void;
    toggleType: (type: string, brand: string) => void;
    setSearchQuery: (query: string) => void;
    resetFilters: () => void;
    loadFilterData: RxMethod<void>;
    ensureLoaded: RxMethod<void>;
} & import("@ngrx/signals").StateSource<{
    filterData: import("@marketplace/frontend-catalog-util").CatalogFilterDataInterface | null;
    selected: CatalogSelectedFiltersInterface;
    isLoading: boolean;
    error: string | null;
    initialized: boolean;
}>>;
//# sourceMappingURL=catalog-filter.store.d.ts.map