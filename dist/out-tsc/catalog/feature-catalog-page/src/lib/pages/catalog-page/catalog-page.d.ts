import { ProductsPageFacade } from '@marketplace/frontend-catalog-data-access';
import { TableBestPriceInterface } from '@marketplace/frontend-catalog-util';
export declare class CatalogPage {
    private readonly wishListFacade;
    private readonly authState;
    readonly productFacade: ProductsPageFacade;
    private readonly route;
    readonly products: import("@angular/core").Signal<import("@marketplace/frontend-shared-types").ProductInterface[]>;
    readonly filters: import("@ngrx/signals").DeepSignal<import("@marketplace/frontend-catalog-util").CatalogSelectedFiltersInterface>;
    readonly title: import("@angular/core").Signal<string>;
    readonly titleSuffix: import("@angular/core").Signal<"Style" | "Clothing">;
    private readonly queryParams;
    constructor();
    isInWishlist(productId: string): boolean;
    toggleWishlist(productId: string): void;
    readonly itemsTableBestPrice: TableBestPriceInterface[];
}
//# sourceMappingURL=catalog-page.d.ts.map