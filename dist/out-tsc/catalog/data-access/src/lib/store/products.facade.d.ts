import { Params } from '@angular/router';
import { CatalogSelectedFiltersInterface } from '@marketplace/frontend-catalog-util';
export declare class ProductsPageFacade {
    private readonly productStore;
    private readonly filterStore;
    private readonly router;
    private readonly isRestoringFromUrl;
    private readonly lastQueryString;
    readonly facetsBrands: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").FacetItemInterface[]>;
    readonly facetsProductTypes: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").FacetItemInterface[]>;
    readonly facetsDressStyles: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").FacetItemInterface[]>;
    readonly facetsSizes: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").FacetItemInterface[]>;
    readonly facetsColors: import("@angular/core").Signal<import("@marketplace/frontend-catalog-util").FacetItemInterface[]>;
    constructor();
    private syncUrlWithFilters;
    restoreFiltersFromUrl(params: Params): void;
    resetFilters(): void;
    readonly products: import("@angular/core").Signal<import("../../../../../shared/types/src").ProductInterface[]>;
    readonly isLoading: import("@angular/core").Signal<boolean>;
    readonly filters: import("@ngrx/signals").DeepSignal<CatalogSelectedFiltersInterface>;
    readonly sizes: import("@angular/core").Signal<string[]>;
    readonly colors: import("@angular/core").Signal<{
        name: string;
        value: string;
    }[]>;
}
//# sourceMappingURL=products.facade.d.ts.map