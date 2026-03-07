import { __decorate } from "tslib";
import { computed, inject, Injectable } from '@angular/core';
import { WISHLIST_ITEM_SOURCE, } from '../domain/constants/wishlist-item-sourse.constants';
import { WishListStore } from './wishlist.store';
let WishlistFacade = class WishlistFacade {
    store = inject(WishListStore);
    items = this.store.items;
    nextCursor = this.store.nextCursor;
    hasMore = this.store.hasMore;
    total = this.store.total;
    itemMap = this.store.itemsMap;
    isLoading = this.store.isLoading;
    isSubmitting = this.store.isSubmitting;
    error = this.store.error;
    count = this.store.count;
    isEmpty = this.store.isEmpty;
    availableItems = this.store.availableItems;
    canLoadMore = this.store.canLoadMore;
    lastContainsKey = '';
    isInWishList = computed(() => {
        const fn = this.store.isInWishlist();
        return (productId) => fn(productId);
    });
    load(params = { reset: true }) {
        this.store.load(params);
    }
    loadMore() {
        this.store.loadMore();
    }
    addItem(input) {
        this.store.addItem(input);
    }
    removeItem(productId) {
        this.store.removeItem(productId);
    }
    clear() {
        this.store.clear();
    }
    syncContains(productIds) {
        const ids = productIds.filter(Boolean).slice(0, 200);
        const key = ids.join(',');
        if (!ids.length || key === this.lastContainsKey)
            return;
        this.lastContainsKey = key;
        this.store.syncContains(ids);
    }
    loadCount() {
        this.store.loadCount();
    }
    toggleLikeProduct(productId, source = WISHLIST_ITEM_SOURCE.CATALOG, note) {
        const inWishList = this.store.itemsMap()[productId] === true;
        if (inWishList)
            this.removeItem(productId);
        else
            this.addItem({ productId, source, note });
    }
};
WishlistFacade = __decorate([
    Injectable({ providedIn: 'root' })
], WishlistFacade);
export { WishlistFacade };
