import { RxMethod } from '@ngrx/signals/rxjs-interop';
import { CatalogFilterParamsInterface } from '@marketplace/frontend-catalog-util';
export declare const ProductStore: import("@angular/core").Type<{
    products: import("@angular/core").Signal<import("../../../../../shared/types/src").ProductInterface[]>;
    filters: import("@ngrx/signals").DeepSignal<CatalogFilterParamsInterface>;
    isLoading: import("@angular/core").Signal<boolean>;
    error: import("@angular/core").Signal<string | null>;
    total: import("@angular/core").Signal<number>;
    totalPages: import("@angular/core").Signal<number>;
    facets: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").ProductsFacets | null>;
    hasProducts: import("@angular/core").Signal<boolean>;
    productsCount: import("@angular/core").Signal<number>;
    pagination: import("@angular/core").Signal<{
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    }>;
    facetsBrands: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").FacetItemInterface[]>;
    facetsProductTypes: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").FacetItemInterface[]>;
    facetsDressStyles: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").FacetItemInterface[]>;
    facetsSizes: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").FacetItemInterface[]>;
    facetsColors: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").FacetItemInterface[]>;
    facetsBrandValues: import("@angular/core").Signal<string[]>;
    facetsProductTypeValues: import("@angular/core").Signal<string[]>;
    facetsDressStyleValues: import("@angular/core").Signal<string[]>;
    facetsSizeValues: import("@angular/core").Signal<string[]>;
    facetsColorValues: import("@angular/core").Signal<string[]>;
    loadProducts: RxMethod<CatalogFilterParamsInterface>;
    setFilters: (filters: Partial<CatalogFilterParamsInterface>) => void;
    resetFilters: () => void;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (page: number) => void;
    setPageSize: (limit: number) => void;
    setSorting: (sortBy: CatalogFilterParamsInterface["sortBy"], order: "asc" | "desc") => void;
    search: (search: string) => void;
} & import("@ngrx/signals").StateSource<{
    products: import("../../../../../shared/types/src").ProductInterface[];
    filters: CatalogFilterParamsInterface;
    isLoading: boolean;
    error: string | null;
    total: number;
    totalPages: number;
    facets: import("@marketplace/frontend-catalog-util").ProductsFacets | null;
}>>;
//# sourceMappingURL=products.store.d.ts.map