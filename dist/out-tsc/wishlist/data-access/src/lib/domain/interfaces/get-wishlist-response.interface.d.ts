import { EnrichedWishlistItem } from './enriched-wishlist-item.interface';
export interface GetWishlistResponse {
    items: EnrichedWishlistItem[];
    nextCursor: string | null;
    hasMore: boolean;
    total: number;
}
//# sourceMappingURL=get-wishlist-response.interface.d.ts.map