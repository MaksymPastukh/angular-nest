import { Router } from '@angular/router';
import { ProductInterface } from '@marketplace/frontend-shared-types';
export declare class ProductCardComponent {
    readonly product: import("@angular/core").InputSignal<ProductInterface>;
    readonly inWishlist: import("@angular/core").InputSignal<boolean>;
    readonly wishlistLoading: import("@angular/core").InputSignal<boolean>;
    readonly wishlistDisabled: import("@angular/core").InputSignal<boolean>;
    readonly toggleWishlist: import("@angular/core").OutputEmitterRef<void>;
    readonly router: Router;
    private readonly imageErrorHandled;
    readonly wishlistIcon: import("@angular/core").Signal<"pi pi-heart-fill" | "pi pi-heart">;
    readonly wishlistAriaLabel: import("@angular/core").Signal<"Remove from wishlist" | "Add to wishlist">;
    onToggleWishlist(event: Event): void;
    onImageError(event: Event): void;
    navigateToDetail(): void;
}
//# sourceMappingURL=product-card.d.ts.map