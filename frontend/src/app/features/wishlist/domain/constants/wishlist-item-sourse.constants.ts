export const WISHLIST_ITEM_SOURCE = {
  CATALOG: 'catalog',
  PRODUCT: 'product',
  RECOMMENDATION: 'recommendation',
} as const

export type WishlistItemSource = (typeof WISHLIST_ITEM_SOURCE)[keyof typeof WISHLIST_ITEM_SOURCE]
