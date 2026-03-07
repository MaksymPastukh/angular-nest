import { WishlistItem } from './washlist-item.interface';
import { WishlistProductData } from './wishlist-product-data.interface';
export interface EnrichedWishlistItem extends WishlistItem {
    product: WishlistProductData | null;
    status: 'available' | 'deleted_or_hidden';
}
//# sourceMappingURL=enriched-wishlist-item.interface.d.ts.map