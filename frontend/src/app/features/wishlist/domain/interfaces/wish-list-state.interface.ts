import { EnrichedWishlistItem } from './enriched-wishlist-item.interface'

export interface WishListStateInterface {
  items: EnrichedWishlistItem[]
  nextCursor: string | null
  hasMore: boolean
  total: number
  itemsMap: Record<string, boolean>
  isLoading: boolean
  isSubmitting?: boolean
  isLoadingMy?: boolean
  error: { message: string } | null
}
