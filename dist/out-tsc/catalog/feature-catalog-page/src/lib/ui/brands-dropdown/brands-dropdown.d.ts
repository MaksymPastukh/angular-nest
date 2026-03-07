import { OnDestroy, TemplateRef } from '@angular/core';
import { FacetItemInterface } from '@marketplace/frontend-catalog-util';
export declare class BrandsDropdownComponent implements OnDestroy {
    private readonly overlay;
    private readonly viewContainerRef;
    dropdownTemplate: TemplateRef<unknown>;
    anchor: import("@angular/core").InputSignal<HTMLElement | null>;
    brands: import("@angular/core").InputSignal<FacetItemInterface[]>;
    isLoading: import("@angular/core").InputSignal<boolean>;
    isOpen: import("@angular/core").InputSignal<boolean>;
    brandSelect: import("@angular/core").OutputEmitterRef<string>;
    dropdownEnter: import("@angular/core").OutputEmitterRef<void>;
    dropdownLeave: import("@angular/core").OutputEmitterRef<void>;
    private overlayRef;
    private currentAnchor;
    private previousBrands;
    private cachedSortedBrands;
    readonly sortedBrands: import("@angular/core").Signal<FacetItemInterface[]>;
    constructor();
    private ensureOverlay;
    private openDropdown;
    private closeDropdown;
    onBrandClick(brand: string): void;
    onDropdownEnter(): void;
    onDropdownLeave(): void;
    ngOnDestroy(): void;
}
//# sourceMappingURL=brands-dropdown.d.ts.map