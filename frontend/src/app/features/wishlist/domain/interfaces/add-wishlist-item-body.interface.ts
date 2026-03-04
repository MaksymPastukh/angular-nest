import { WishlistItemSource } from '../constants/wishlist-item-sourse.constants'

export interface AddWishlistItemBody {
  source?: WishlistItemSource
  note?: string
}
