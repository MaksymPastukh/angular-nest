import {
  patchState,
  rxMethod,
  signalStore,
  tapResponse,
  withComputed,
  withMethods,
  withState
} from "./chunk-CH46WUXX.js";
import {
  FRONTEND_CONFIG
} from "./chunk-SXE3IDZP.js";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "./chunk-SJAIUEWT.js";
import {
  EMPTY,
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  map,
  pipe,
  setClassMetadata,
  switchMap,
  tap,
  ɵɵdefineInjectable
} from "./chunk-2WGIEBYO.js";

// libs/frontend/wishlist/data-access/src/lib/domain/constants/wishlist-item-sourse.constants.ts
var WISHLIST_ITEM_SOURCE = {
  CATALOG: "catalog",
  PRODUCT: "product",
  RECOMMENDATION: "recommendation"
};

// libs/frontend/wishlist/data-access/src/lib/data-access/wishlist.service.ts
var WishlistService = class _WishlistService {
  http = inject(HttpClient);
  baseUrl = `${FRONTEND_CONFIG.api}wishlist`;
  getWishlist(params = {}) {
    const limit = params.limit ?? 20;
    let httpParams = new HttpParams().set("limit", String(limit));
    if (params.cursor)
      httpParams = httpParams.set("cursor", params.cursor);
    return this.http.get(this.baseUrl, { params: httpParams }).pipe(map((res) => __spreadProps(__spreadValues({}, res), {
      items: res.items.map((i) => __spreadProps(__spreadValues({}, i), {
        addedAt: new Date(i.addedAt)
      }))
    })));
  }
  addItem(productId, body = {}) {
    return this.http.put(`${this.baseUrl}/items/${productId}`, body).pipe(map((res) => __spreadProps(__spreadValues({}, res), {
      addedAt: new Date(res.addedAt)
    })));
  }
  removeItem(productId) {
    return this.http.delete(`${this.baseUrl}/items/${productId}`);
  }
  clear() {
    return this.http.delete(this.baseUrl);
  }
  contains(productIds) {
    const ids = productIds.slice(0, 200);
    const params = new HttpParams().set("ids", ids.join(","));
    return this.http.get(`${this.baseUrl}/contains`, { params });
  }
  count() {
    return this.http.get(`${this.baseUrl}/count`);
  }
  static \u0275fac = function WishlistService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WishlistService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WishlistService, factory: _WishlistService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/frontend/wishlist/data-access/src/lib/store/wishlist.store.ts
var initialState = {
  items: [],
  nextCursor: null,
  hasMore: false,
  total: 0,
  isLoading: false,
  isSubmitting: false,
  submittingIds: {},
  error: null,
  itemsMap: {}
};
var WishListStore = signalStore({ providedIn: "root" }, withState(initialState), withComputed((store) => ({
  count: computed(() => store.total()),
  isEmpty: computed(() => store.total() === 0),
  isInWishlist: computed(() => (productId) => store.itemsMap()[productId] ?? false),
  availableItems: computed(() => store.items().filter((x) => x.status === "available")),
  canLoadMore: computed(() => store.hasMore() && !store.isLoading()),
  isSubmittingItem: computed(() => (productId) => store.submittingIds()[productId] ?? false)
})), withMethods((store, wishListService = inject(WishlistService)) => {
  const setPending = (kind = "list") => {
    if (kind === "list")
      patchState(store, { isLoading: true, error: null });
    if (kind === "submit")
      patchState(store, { isSubmitting: true, error: null });
  };
  const stop = (kind = "list") => {
    if (kind === "list")
      patchState(store, { isLoading: false });
    if (kind === "submit")
      patchState(store, { isSubmitting: false });
  };
  const setFailure = (message) => {
    patchState(store, { error: { message } });
  };
  const getErrorMessage = (error) => {
    if (!(error instanceof HttpErrorResponse))
      return "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430";
    const apiMessage = error.error?.message;
    if (typeof apiMessage === "string")
      return apiMessage;
    if (Array.isArray(apiMessage))
      return apiMessage.join(" ");
    return error.message ?? `Request failed with status ${error.status}.`;
  };
  const rebuildItemsMap = (items) => {
    const map2 = {};
    for (const i of items) {
      map2[i.productId] = true;
    }
    return map2;
  };
  const applyListResponse = (res) => {
    patchState(store, {
      items: res.items,
      nextCursor: res.nextCursor,
      hasMore: res.hasMore,
      total: res.total,
      itemsMap: rebuildItemsMap(res.items)
    });
  };
  const markSubmitting = (productId, value) => {
    const next = __spreadValues({}, store.submittingIds());
    if (value)
      next[productId] = true;
    else
      delete next[productId];
    patchState(store, { submittingIds: next });
  };
  const load = rxMethod(pipe(tap(({ reset }) => {
    setPending("list");
    if (reset) {
      patchState(store, {
        items: [],
        itemsMap: {},
        nextCursor: null,
        hasMore: false,
        total: 0
      });
    }
  }), switchMap(({ cursor }) => wishListService.getWishlist({ cursor, limit: 20 }).pipe(tapResponse({
    next: (res) => {
      const items = cursor ? [...store.items(), ...res.items] : res.items;
      const itemsMap = cursor ? __spreadValues(__spreadValues({}, store.itemsMap()), rebuildItemsMap(res.items)) : rebuildItemsMap(res.items);
      patchState(store, {
        items,
        nextCursor: res.nextCursor,
        hasMore: res.hasMore,
        total: res.total,
        itemsMap
      });
    },
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("list")
  })))));
  const loadMore = () => {
    const cursor = store.nextCursor();
    if (!cursor || store.isLoading())
      return;
    load({ cursor });
  };
  const addItem = rxMethod(pipe(tap(({ productId }) => {
    markSubmitting(productId, true);
  }), switchMap(({ productId, source, note }) => wishListService.addItem(productId, { source, note }).pipe(switchMap(() => wishListService.getWishlist({ limit: 20 })), tapResponse({
    next: (res) => applyListResponse(res),
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => {
      markSubmitting(productId, false);
    }
  })))));
  const removeItem = rxMethod(pipe(tap((productId) => {
    markSubmitting(productId, true);
  }), switchMap((productId) => wishListService.removeItem(productId).pipe(switchMap(() => wishListService.getWishlist({ limit: 20 })), tapResponse({
    next: (res) => applyListResponse(res),
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => {
      markSubmitting(productId, false);
    }
  })))));
  const clear = rxMethod(pipe(tap(() => {
    setPending("submit");
    patchState(store, { isLoading: true });
  }), switchMap(() => wishListService.clear().pipe(switchMap(() => wishListService.getWishlist({ limit: 20 })), tapResponse({
    next: (res) => applyListResponse(res),
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => {
      stop("submit");
      patchState(store, { isLoading: false });
    }
  })))));
  const syncContains = rxMethod(pipe(switchMap((ids) => {
    const safeIds = ids.filter(Boolean).slice(0, 200);
    if (safeIds.length === 0)
      return EMPTY;
    return wishListService.contains(safeIds).pipe(tapResponse({
      next: (map2) => patchState(store, { itemsMap: __spreadValues(__spreadValues({}, store.itemsMap()), map2) }),
      error: () => void 0
    }));
  })));
  const loadCount = rxMethod(pipe(switchMap(() => wishListService.count().pipe(tapResponse({
    next: ({ count }) => patchState(store, { total: count }),
    error: () => void 0
  })))));
  return {
    load,
    loadMore,
    addItem,
    removeItem,
    clear,
    syncContains,
    loadCount
  };
}));

// libs/frontend/wishlist/data-access/src/lib/store/wishlist.facade.ts
var WishlistFacade = class _WishlistFacade {
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
  lastContainsKey = "";
  isInWishList = computed(() => {
    const fn = this.store.isInWishlist();
    return (productId) => fn(productId);
  }, ...ngDevMode ? [{ debugName: "isInWishList" }] : []);
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
    const key = ids.join(",");
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
  static \u0275fac = function WishlistFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WishlistFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WishlistFacade, factory: _WishlistFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistFacade, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  WISHLIST_ITEM_SOURCE,
  WishlistFacade
};
//# sourceMappingURL=chunk-4GRK4EXP.js.map
