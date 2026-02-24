import { WishlistItemSource } from '../constants/wishlist-item-sourse.constants'

export interface WishlistItem {
  productId: string
  addedAt: Date
  source?: WishlistItemSource
  note?: string
}
