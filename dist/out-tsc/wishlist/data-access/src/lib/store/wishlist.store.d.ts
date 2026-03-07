import { RxMethod } from '@ngrx/signals/rxjs-interop';
import { WishlistItemSource } from '../domain/constants/wishlist-item-sourse.constants';
import { EnrichedWishlistItem } from '../domain/interfaces/enriched-wishlist-item.interface';
export declare const WishListStore: import("@angular/core").Type<{
    items: import("@angular/core").Signal<EnrichedWishlistItem[]>;
    nextCursor: import("@angular/core").Signal<string | null>;
    hasMore: import("@angular/core").Signal<boolean>;
    total: import("@angular/core").Signal<number>;
    itemsMap: import("@angular/core").Signal<Record<string, boolean>>;
    isLoading: import("@angular/core").Signal<boolean>;
    isSubmitting?: import("@angular/core").Signal<boolean | undefined> | undefined;
    submittingIds: import("@angular/core").Signal<Record<string, boolean>>;
    isLoadingMy?: import("@angular/core").Signal<boolean | undefined> | undefined;
    error: import("@angular/core").Signal<{
        message: string;
    } | null>;
    count: import("@angular/core").Signal<number>;
    isEmpty: import("@angular/core").Signal<boolean>;
    isInWishlist: import("@angular/core").Signal<(productId: string) => boolean>;
    availableItems: import("@angular/core").Signal<EnrichedWishlistItem[]>;
    canLoadMore: import("@angular/core").Signal<boolean>;
    isSubmittingItem: import("@angular/core").Signal<(productId: string) => boolean>;
    load: RxMethod<{
        cursor?: string;
        reset?: boolean;
    }>;
    loadMore: () => void;
    addItem: RxMethod<{
        productId: string;
        source?: WishlistItemSource;
        note?: string;
    }>;
    removeItem: RxMethod<string>;
    clear: RxMethod<void>;
    syncContains: RxMethod<string[]>;
    loadCount: RxMethod<void>;
} & import("@ngrx/signals").StateSource<{
    items: EnrichedWishlistItem[];
    nextCursor: string | null;
    hasMore: boolean;
    total: number;
    itemsMap: Record<string, boolean>;
    isLoading: boolean;
    isSubmitting?: boolean | undefined;
    submittingIds: Record<string, boolean>;
    isLoadingMy?: boolean | undefined;
    error: {
        message: string;
    } | null;
}>>;
//# sourceMappingURL=wishlist.store.d.ts.map