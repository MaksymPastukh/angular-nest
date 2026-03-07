import { RxMethod } from '@ngrx/signals/rxjs-interop';
import { FacetItemInterface, FacetsPreviewRequest } from '@marketplace/frontend-catalog-util';
export declare const CatalogFacetsStore: import("@angular/core").Type<{
    activeKey: import("@angular/core").Signal<string | null>;
    brands: import("@angular/core").Signal<FacetItemInterface[] | null>;
    isLoading: import("@angular/core").Signal<boolean>;
    error: import("@angular/core").Signal<string | null>;
    hasBrands: import("@angular/core").Signal<boolean>;
    brandsSafe: import("@angular/core").Signal<FacetItemInterface[]>;
    clear: () => void;
    begin: (activeKey: string) => void;
    loadPreviewBrands: RxMethod<FacetsPreviewRequest>;
} & import("@ngrx/signals").StateSource<{
    activeKey: string | null;
    brands: FacetItemInterface[] | null;
    isLoading: boolean;
    error: string | null;
}>>;
//# sourceMappingURL=catalog-faceds-preview.store.d.ts.map