import { computed, inject, Injectable } from '@angular/core'
import {
  WISHLIST_ITEM_SOURCE,
  WishlistItemSource,
} from '../domain/constants/wishlist-item-sourse.constants'
import { WishListStore } from './wishlist.store'

@Injectable({ providedIn: 'root' })
export class WishListFacade {
  private readonly store = inject(WishListStore)

  readonly items = this.store.items
  readonly nextCursor = this.store.nextCursor
  readonly hasMore = this.store.hasMore
  readonly total = this.store.total
  readonly itemMap = this.store.itemsMap
  readonly isLoading = this.store.isLoading
  readonly isSubmitting = this.store.isSubmitting
  readonly error = this.store.error
  readonly count = this.store.count
  readonly isEmpty = this.store.isEmpty
  readonly availableItems = this.store.availableItems
  readonly canLoadMore = this.store.canLoadMore

  readonly isInWishList = computed(() => {
    const fn = this.store.isInWishlist()
    return (productId: string): boolean => fn(productId)
  })

  load(params: { cursor?: string; reset?: boolean } = { reset: true }): void {
    this.store.load(params)
  }

  loadMore(): void {
    this.store.loadMore()
  }

  addItem(input: { productId: string; source?: WishlistItemSource; note?: string }): void {
    this.store.addItem(input)
  }

  removeItem(productId: string): void {
    this.store.removeItem(productId)
  }

  clear(): void {
    this.store.clear()
  }

  syncContains(productIds: string[]): void {
    this.store.syncContains(productIds)
  }

  loadCount(): void {
    this.store.loadCount()
  }

  toggleLikeProduct(
    productId: string,
    source: WishlistItemSource = WISHLIST_ITEM_SOURCE.CATALOG,
    note?: string
  ): void {
    const inWishList = this.store.itemsMap()[productId] === true
    if (inWishList) this.removeItem(productId)
    else this.addItem({ productId, source, note })
  }
}
