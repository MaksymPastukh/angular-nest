import { WishlistItemSource } from '../domain/constants/wishlist-item-sourse.constants';
export declare class WishlistFacade {
    private readonly store;
    readonly items: import("@angular/core").Signal<import("../..").EnrichedWishlistItem[]>;
    readonly nextCursor: import("@angular/core").Signal<string | null>;
    readonly hasMore: import("@angular/core").Signal<boolean>;
    readonly total: import("@angular/core").Signal<number>;
    readonly itemMap: import("@angular/core").Signal<Record<string, boolean>>;
    readonly isLoading: import("@angular/core").Signal<boolean>;
    readonly isSubmitting: import("@angular/core").Signal<boolean | undefined> | undefined;
    readonly error: import("@angular/core").Signal<{
        message: string;
    } | null>;
    readonly count: import("@angular/core").Signal<number>;
    readonly isEmpty: import("@angular/core").Signal<boolean>;
    readonly availableItems: import("@angular/core").Signal<import("../..").EnrichedWishlistItem[]>;
    readonly canLoadMore: import("@angular/core").Signal<boolean>;
    private lastContainsKey;
    readonly isInWishList: import("@angular/core").Signal<(productId: string) => boolean>;
    load(params?: {
        cursor?: string;
        reset?: boolean;
    }): void;
    loadMore(): void;
    addItem(input: {
        productId: string;
        source?: WishlistItemSource;
        note?: string;
    }): void;
    removeItem(productId: string): void;
    clear(): void;
    syncContains(productIds: string[]): void;
    loadCount(): void;
    toggleLikeProduct(productId: string, source?: WishlistItemSource, note?: string): void;
}
//# sourceMappingURL=wishlist.facade.d.ts.map