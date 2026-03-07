import {
  AuthState
} from "./chunk-Q4357RD3.js";
import {
  FRONTEND_CONFIG,
  patchState,
  rxMethod,
  signalStore,
  tapResponse,
  withComputed,
  withMethods,
  withState
} from "./chunk-XI24UWMS.js";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "./chunk-VRGFCTSI.js";
import {
  Injectable,
  catchError,
  computed,
  concatMap,
  effect,
  exhaustMap,
  filter,
  inject,
  map,
  of,
  pipe,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  ɵɵdefineInjectable
} from "./chunk-SMFOV6AR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// libs/frontend/product/data-access/src/lib/reviews/data-access/reviews.service.ts
var ReviewsService = class _ReviewsService {
  http = inject(HttpClient);
  baseUrl = `${FRONTEND_CONFIG.api}reviews`;
  getReviews(option) {
    let params = new HttpParams().set("productId", option.productId).set("page", option.page).set("pageSize", option.pageSize).set("sortBy", option.sortBy);
    if (option.rating)
      params = params.set("rating", option.rating);
    return this.http.get(this.baseUrl, { params });
  }
  getMyReview(productId) {
    return this.http.get(`${this.baseUrl}/user/product/${productId}`);
  }
  create(dto) {
    return this.http.post(this.baseUrl, dto);
  }
  update(id, dto) {
    return this.http.patch(`${this.baseUrl}/${id}`, dto);
  }
  remove(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  toggleLike(id) {
    return this.http.post(`${this.baseUrl}/${id}/like`, {});
  }
  static \u0275fac = function ReviewsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewsService, factory: _ReviewsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// libs/frontend/product/data-access/src/lib/reviews/store/reviews.store.ts
var initialState = {
  productId: null,
  items: [],
  total: 0,
  page: 1,
  pageSize: 10,
  sortBy: "newest",
  ratingFilter: null,
  summary: null,
  myReview: null,
  isLoading: false,
  isSubmitting: false,
  isLoadingMy: false,
  error: null
};
var ReviewsStore = signalStore({ providedIn: "root" }, withState(initialState), withComputed((store) => ({
  hasProduct: computed(() => !!store.productId()),
  hasMore: computed(() => store.items().length < store.total()),
  canLoadMore: computed(() => !!store.productId() && !store.isLoading() && store.items().length < store.total()),
  isEmpty: computed(() => !store.isLoading() && store.items().length === 0),
  avg: computed(() => store.summary()?.avg ?? 0),
  count: computed(() => store.summary()?.count ?? 0),
  distribution: computed(() => store.summary()?.distribution ?? {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0
  })
})), withMethods((store, reviewsService = inject(ReviewsService)) => {
  const setPending = (kind = "list") => {
    if (kind === "list")
      patchState(store, { isLoading: true, error: null });
    if (kind === "submit")
      patchState(store, { isSubmitting: true, error: null });
    if (kind === "my")
      patchState(store, { isLoadingMy: true });
  };
  const stop = (kind = "list") => {
    if (kind === "list")
      patchState(store, { isLoading: false });
    if (kind === "submit")
      patchState(store, { isSubmitting: false });
    if (kind === "my")
      patchState(store, { isLoadingMy: false });
  };
  const setListSuccess = (response, mode) => {
    patchState(store, {
      items: mode === "replace" ? response.items : [...store.items(), ...response.items],
      total: response.total,
      page: response.page,
      pageSize: response.pageSize,
      summary: response.summary,
      error: null
    });
  };
  const setMySuccess = (myReview) => {
    patchState(store, { myReview });
  };
  const setFailure = (message) => {
    patchState(store, { error: { message } });
  };
  const getErrorMessage = (error) => {
    if (!(error instanceof HttpErrorResponse))
      return `An unknown error occurred.`;
    const apiMessage = error.error?.message;
    if (typeof apiMessage === "string")
      return apiMessage;
    if (Array.isArray(apiMessage))
      return apiMessage.join(" ");
    return error.message ?? `Request failed with status ${error.status}.`;
  };
  const hasProductId = (x) => typeof x.productId === "string" && x.productId.length > 0;
  const requireProductId = () => pipe(map((data) => ({ data, productId: store.productId() })), tap((x) => {
    if (!x.productId)
      setFailure("productId is missing");
  }), filter(hasProductId));
  const load = rxMethod(pipe(requireProductId(), tap(() => setPending("list")), switchMap(({ productId }) => reviewsService.getReviews({
    productId,
    page: 1,
    pageSize: store.pageSize(),
    sortBy: store.sortBy(),
    rating: store.ratingFilter() ?? void 0
  }).pipe(tapResponse({
    next: (response) => setListSuccess(response, "replace"),
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("list")
  })))));
  const loadMore = rxMethod(pipe(requireProductId(), filter(() => store.canLoadMore()), tap(() => setPending("list")), switchMap(({ productId }) => reviewsService.getReviews({
    productId,
    page: store.page() + 1,
    pageSize: store.pageSize(),
    sortBy: store.sortBy(),
    rating: store.ratingFilter() ?? void 0
  }).pipe(tapResponse({
    next: (response) => setListSuccess(response, "append"),
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("list")
  })))));
  const loadMyReview = rxMethod(pipe(requireProductId(), tap(() => setPending("my")), switchMap(({ productId }) => reviewsService.getMyReview(productId).pipe(catchError(() => of(null)), tapResponse({
    next: setMySuccess,
    error: () => void 0,
    finalize: () => stop("my")
  })))));
  const goToPage = rxMethod(pipe(requireProductId(), tap(({ data }) => {
    patchState(store, { page: data.page, pageSize: data.pageSize });
    setPending("list");
  }), switchMap(({ data, productId }) => reviewsService.getReviews({
    productId,
    page: data.page,
    pageSize: data.pageSize,
    sortBy: store.sortBy(),
    rating: store.ratingFilter() ?? void 0
  }).pipe(tapResponse({
    next: (response) => setListSuccess(response, "replace"),
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("list")
  })))));
  const createReview = rxMethod(pipe(requireProductId(), tap(() => setPending("submit")), exhaustMap(({ data, productId }) => reviewsService.create({ productId, rating: data.rating, text: data.text }).pipe(tapResponse({
    next: () => {
      patchState(store, { page: 1 });
      load();
      loadMyReview();
    },
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("submit")
  })))));
  const updateReview = rxMethod(pipe(requireProductId(), tap(() => setPending("submit")), exhaustMap(({ data }) => reviewsService.update(data.id, { rating: data.rating, text: data.text }).pipe(tapResponse({
    next: () => {
      patchState(store, { page: 1 });
      load();
      loadMyReview();
    },
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("submit")
  })))));
  const remove = rxMethod(pipe(requireProductId(), tap(() => setPending("submit")), exhaustMap(({ data }) => reviewsService.remove(data.id).pipe(tapResponse({
    next: () => {
      patchState(store, { myReview: null, page: 1 });
      load();
    },
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("submit")
  })))));
  const toggleLike = rxMethod(pipe(
    // toggleLike does not strictly need productId; if you want to prevent usage without context,
    // keep requireProductId. It also ensures consistent "product must be set" behavior.
    requireProductId(),
    concatMap(({ data }) => reviewsService.toggleLike(data.id).pipe(tapResponse({
      next: (updated) => {
        patchState(store, {
          items: store.items().map((r) => r.id === updated.id ? updated : r),
          myReview: store.myReview()?.id === updated.id ? updated : store.myReview()
        });
      },
      error: () => void 0
    })))
  ));
  const setContext = (params) => {
    patchState(store, {
      productId: params.productId,
      items: [],
      total: 0,
      page: 1,
      error: null,
      summary: params.initialSummary ?? store.summary()
    });
  };
  const setSortBy = (sortBy) => {
    patchState(store, { sortBy, page: 1 });
    goToPage({ page: 1, pageSize: store.pageSize() });
  };
  const setRatingFilter = (rating) => {
    patchState(store, { ratingFilter: rating, page: 1 });
    goToPage({ page: 1, pageSize: store.pageSize() });
  };
  return {
    setContext,
    setSortBy,
    setRatingFilter,
    load,
    loadMore,
    loadMyReview,
    createReview,
    updateReview,
    remove,
    toggleLike,
    goToPage
  };
}));

// libs/frontend/product/data-access/src/lib/product-detail/data-access/product-detail.service.ts
var ProductsDetailService = class _ProductsDetailService {
  http = inject(HttpClient);
  apiUrl = `${FRONTEND_CONFIG.api}products`;
  getProductById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function ProductsDetailService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductsDetailService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductsDetailService, factory: _ProductsDetailService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductsDetailService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/frontend/product/data-access/src/lib/product-detail/store/product-detail.store.ts
var initialState2 = {
  product: null,
  isLoading: false,
  error: null,
  selectedSize: null,
  selectedColor: null,
  quantity: 1,
  activeImageIndex: 0
};
var ProductDetailStore = signalStore({ providedIn: "root" }, withState(initialState2), withComputed((store) => {
  const reviewsStore = inject(ReviewsStore);
  const emptyDistribution = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0
  };
  const ratingStats = computed(() => {
    const product = store.product();
    if (!product)
      return null;
    const base = product.ratingStats ?? {
      avg: product.rating ?? 0,
      count: 0,
      distribution: emptyDistribution,
      updatedAt: null
    };
    const summary = reviewsStore.summary();
    const reviewsProductId = reviewsStore.productId();
    if (summary && reviewsProductId === product.id) {
      return __spreadProps(__spreadValues({}, base), {
        avg: summary.avg,
        count: summary.count,
        distribution: summary.distribution ?? emptyDistribution,
        updatedAt: null
      });
    }
    return __spreadProps(__spreadValues({}, base), {
      distribution: base.distribution ?? emptyDistribution
    });
  }, ...ngDevMode ? [{ debugName: "ratingStats" }] : []);
  const galleryImages = computed(() => {
    const product = store.product();
    if (!product?.images?.length)
      return [];
    return product.images.map((image) => ({ image, alt: product.title }));
  }, ...ngDevMode ? [{ debugName: "galleryImages" }] : []);
  const activeImage = computed(() => galleryImages()[store.activeImageIndex()] ?? null, ...ngDevMode ? [{ debugName: "activeImage" }] : []);
  const availableColors = computed(() => store.product()?.colors ?? [], ...ngDevMode ? [{ debugName: "availableColors" }] : []);
  const hasMultipleColors = computed(() => availableColors().length > 1, ...ngDevMode ? [{ debugName: "hasMultipleColors" }] : []);
  return {
    hasProduct: computed(() => !!store.product()),
    productTitle: computed(() => store.product()?.title ?? ""),
    availableSizes: computed(() => store.product()?.sizes ?? []),
    ratingAvg: computed(() => ratingStats()?.avg ?? 0),
    ratingCount: computed(() => ratingStats()?.count ?? 0),
    ratingDistribution: computed(() => ratingStats()?.distribution ?? emptyDistribution),
    canAddToCart: computed(() => {
      const sizes = store.product()?.sizes ?? [];
      const needSize = sizes.length > 0;
      const needColor = hasMultipleColors();
      return (!needSize || !!store.selectedSize()) && (!needColor || !!store.selectedColor());
    }),
    galleryImages,
    activeImage,
    availableColors,
    hasMultipleColors
  };
}), withMethods((store, productDetailService = inject(ProductsDetailService)) => {
  const setPending = () => {
    patchState(store, { isLoading: true, error: null, activeImageIndex: 0 });
  };
  const stop = () => {
    patchState(store, { isLoading: false });
  };
  const setFailure = (message) => {
    patchState(store, { error: message });
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
  const setSuccess = (product) => {
    const defaultColor = product.colors.length === 1 ? product.colors[0] : null;
    patchState(store, {
      product,
      error: null,
      selectedSize: null,
      selectedColor: defaultColor,
      quantity: 1,
      activeImageIndex: 0
    });
  };
  const loadProduct = rxMethod(pipe(tap(() => setPending()), switchMap((id) => productDetailService.getProductById(id).pipe(tapResponse({
    next: (product) => setSuccess(product),
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop()
  })))));
  const selectSize = (size) => patchState(store, { selectedSize: size });
  const selectColor = (color) => patchState(store, { selectedColor: color });
  const setQuantity = (quantity) => patchState(store, { quantity: Math.max(1, quantity) });
  const incQty = () => patchState(store, { quantity: store.quantity() + 1 });
  const decQty = () => patchState(store, { quantity: Math.max(1, store.quantity() - 1) });
  const selectImage = (index) => patchState(store, { activeImageIndex: Math.max(0, index) });
  const reset = () => patchState(store, initialState2);
  return {
    loadProduct,
    selectSize,
    selectColor,
    setQuantity,
    incQty,
    decQty,
    selectImage,
    reset
  };
}));

// libs/frontend/product/data-access/src/lib/product-detail/store/product-detail.facade.ts
var ProductDetailFacade = class _ProductDetailFacade {
  store = inject(ProductDetailStore);
  product = this.store.product;
  isLoading = this.store.isLoading;
  error = this.store.error;
  hasProduct = this.store.hasProduct;
  productTitle = this.store.productTitle;
  availableSizes = this.store.availableSizes;
  canAddToCart = this.store.canAddToCart;
  galleryImages = this.store.galleryImages;
  activeImage = this.store.activeImage;
  activeImageIndex = this.store.activeImageIndex;
  selectedSize = this.store.selectedSize;
  quantity = this.store.quantity;
  availableColors = this.store.availableColors;
  hasMultipleColors = this.store.hasMultipleColors;
  selectedColor = this.store.selectedColor;
  rantingAvg = this.store.ratingAvg;
  rantingCount = this.store.ratingCount;
  load(id) {
    this.store.loadProduct(id);
  }
  reset() {
    this.store.reset();
  }
  selectImage(index) {
    this.store.selectImage(index);
  }
  selectSize(size) {
    this.store.selectSize(size);
  }
  selectColor(color) {
    this.store.selectColor(color);
  }
  setQuantity(quantity) {
    this.store.setQuantity(quantity);
  }
  incQty() {
    this.store.incQty();
  }
  decQty() {
    this.store.decQty();
  }
  prevImage() {
    const images = this.galleryImages();
    if (!images.length)
      return;
    const idx = this.activeImageIndex();
    this.selectImage(idx === 0 ? images.length - 1 : idx - 1);
  }
  nextImage() {
    const images = this.galleryImages();
    if (!images.length)
      return;
    const idx = this.activeImageIndex();
    this.selectImage(idx === images.length - 1 ? 0 : idx + 1);
  }
  addToCart() {
    if (!this.canAddToCart())
      return;
    const product = this.product();
    if (!product)
      return;
    console.warn("[ADD_TO_CART stub]", {
      productId: product.id,
      title: product.title,
      price: product.price,
      qty: this.quantity(),
      size: this.selectedSize(),
      color: this.selectedColor()
    });
  }
  static \u0275fac = function ProductDetailFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetailFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductDetailFacade, factory: _ProductDetailFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetailFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/frontend/product/data-access/src/lib/product-questions/data-access/product-questions.service.ts
var ProductQuestionService = class _ProductQuestionService {
  http = inject(HttpClient);
  apiUrl = `${FRONTEND_CONFIG.api}questions`;
  createQuestion(body) {
    return this.http.post(`${this.apiUrl}`, body);
  }
  getAllQuestions(params) {
    return this.http.get(`${this.apiUrl}`, { params });
  }
  getMyQuestion(productId) {
    return this.http.get(`${this.apiUrl}/user/product/${productId}`);
  }
  removeQuestion(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function ProductQuestionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductQuestionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductQuestionService, factory: _ProductQuestionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductQuestionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// libs/frontend/product/data-access/src/lib/product-questions/store/product-questions.store.ts
var initialState3 = {
  productId: null,
  items: [],
  total: 0,
  page: 1,
  pageSize: 10,
  myQuestion: null,
  isLoading: false,
  isLoadingMy: false,
  isSubmitting: false,
  error: null,
  existingQuestionId: null
};
var ProductQuestionStore = signalStore({ providedIn: "root" }, withState(initialState3), withComputed((store) => ({
  hasProduct: computed(() => !!store.productId()),
  isEmpty: computed(() => !store.isLoading() && store.items().length === 0),
  hasMore: computed(() => store.items().length < store.total()),
  totalPages: computed(() => Math.max(1, Math.ceil(store.total() / store.pageSize()))),
  hasMyQuestion: computed(() => store.myQuestion() !== null),
  myStatus: computed(() => store.myQuestion()?.status ?? null)
})), withMethods((store, questionService = inject(ProductQuestionService)) => {
  const setPending = (kind = "list") => {
    if (kind === "list")
      patchState(store, { isLoading: true, error: null });
    if (kind === "my")
      patchState(store, { isLoadingMy: true });
    if (kind === "submit")
      patchState(store, { isSubmitting: true, error: null, existingQuestionId: null });
  };
  const stop = (kind = "list") => {
    if (kind === "list")
      patchState(store, { isLoading: false });
    if (kind === "my")
      patchState(store, { isLoadingMy: false });
    if (kind === "submit")
      patchState(store, { isSubmitting: false });
  };
  const setMySuccess = (myQuestion) => {
    patchState(store, { myQuestion });
  };
  const setListSuccess = (response) => {
    patchState(store, {
      items: response.items,
      total: response.total,
      page: response.page,
      pageSize: response.pageSize,
      error: null
    });
  };
  const setFailure = (message) => {
    patchState(store, { error: { message } });
  };
  const getErrorMessage = (error) => {
    if (!(error instanceof HttpErrorResponse))
      return `An unknown error occurred.`;
    const apiMessage = error.error?.message;
    if (typeof apiMessage === "string")
      return apiMessage;
    if (Array.isArray(apiMessage))
      return apiMessage.join(" ");
    return error.message ?? `Request failed with status ${error.status}.`;
  };
  const getErrorCode = (error) => {
    if (!(error instanceof HttpErrorResponse))
      return null;
    const code = error.error?.code;
    return typeof code === "string" ? code : null;
  };
  const getExistingQuestionId = (error) => {
    if (!(error instanceof HttpErrorResponse))
      return null;
    const id = error.error?.existingQuestionId;
    return typeof id === "string" ? id : null;
  };
  const hasProductId = (x) => typeof x.productId === "string" && x.productId.length > 0;
  const requireProductId = () => pipe(map((data) => ({ data, productId: store.productId() })), tap((x) => {
    if (!x.productId)
      setFailure("productId is missing");
  }), filter(hasProductId));
  const load = rxMethod(pipe(requireProductId(), tap(() => setPending("list")), switchMap(({ productId }) => questionService.getAllQuestions({ productId, page: store.page(), pageSize: store.pageSize() }).pipe(tapResponse({
    next: setListSuccess,
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("list")
  })))));
  const goToPage = rxMethod(pipe(requireProductId(), tap(({ data }) => {
    patchState(store, { page: data.page, pageSize: data.pageSize });
    setPending("list");
  }), switchMap(({ data, productId }) => questionService.getAllQuestions({ productId, page: data.page, pageSize: data.pageSize }).pipe(tapResponse({
    next: setListSuccess,
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("list")
  })))));
  const loadMy = rxMethod(pipe(requireProductId(), tap(() => setPending("my")), switchMap(({ productId }) => questionService.getMyQuestion(productId).pipe(catchError(() => of(null)), tapResponse({
    next: setMySuccess,
    error: () => void 0,
    // error is converted to null already
    finalize: () => stop("my")
  })))));
  const createQuestion = rxMethod(pipe(requireProductId(), tap(() => setPending("submit")), exhaustMap(({ data, productId }) => questionService.createQuestion({ productId, question: data.question }).pipe(tapResponse({
    next: () => {
      patchState(store, { page: 1 });
      goToPage({ page: 1, pageSize: store.pageSize() });
      loadMy();
    },
    error: (error) => {
      if (getErrorCode(error) === "QUESTION_ALREADY_EXISTS") {
        patchState(store, {
          existingQuestionId: getExistingQuestionId(error),
          error: { message: getErrorMessage(error) }
        });
        loadMy();
        return;
      }
      setFailure(getErrorMessage(error));
    },
    finalize: () => stop("submit")
  })))));
  const remove = rxMethod(pipe(requireProductId(), tap(() => setPending("submit")), exhaustMap(({ data }) => questionService.removeQuestion(data.id).pipe(tapResponse({
    next: () => {
      patchState(store, { myQuestion: null, page: 1 });
      goToPage({ page: 1, pageSize: store.pageSize() });
      loadMy();
    },
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("submit")
  })))));
  const setContext = (params) => {
    patchState(store, {
      productId: params.productId,
      items: [],
      total: 0,
      page: 1,
      error: null,
      existingQuestionId: null,
      myQuestion: null
    });
  };
  const setPageSize = (pageSize) => {
    patchState(store, { pageSize, page: 1 });
    goToPage({ page: 1, pageSize });
  };
  return { setContext, load, goToPage, setPageSize, loadMy, createQuestion, remove };
}));

// libs/frontend/product/data-access/src/lib/product-questions/store/product-questions.facade.ts
var ProductQuestionFacade = class _ProductQuestionFacade {
  store = inject(ProductQuestionStore);
  productId = this.store.productId;
  items = this.store.items;
  total = this.store.total;
  page = this.store.page;
  pageSize = this.store.pageSize;
  totalPages = this.store.totalPages;
  myQuestion = this.store.myQuestion;
  myStatus = this.store.myStatus;
  isLoading = this.store.isLoading;
  isLoadingMy = this.store.isLoadingMy;
  isSubmitting = this.store.isSubmitting;
  error = this.store.error;
  existingQuestionId = this.store.existingQuestionId;
  hasMyQuestion = computed(() => this.myQuestion() !== null, ...ngDevMode ? [{ debugName: "hasMyQuestion" }] : []);
  setContext(productId) {
    this.store.setContext({ productId });
  }
  load() {
    this.store.load();
  }
  loadMy() {
    this.store.loadMy();
  }
  goToPage(change) {
    this.store.goToPage(change);
  }
  changePageFromPrime(event) {
    const page0 = event.page ?? 0;
    const rows = event.rows ?? this.pageSize();
    this.goToPage({ page: page0 + 1, pageSize: rows });
  }
  setPageSize(pageSize) {
    this.store.setPageSize(pageSize);
  }
  createQuestion(question, productId) {
    const payload = { question, productId };
    this.store.createQuestion(payload);
  }
  removeQuestion(id) {
    this.store.remove({ id });
  }
  static \u0275fac = function ProductQuestionFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductQuestionFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductQuestionFacade, factory: _ProductQuestionFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductQuestionFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/frontend/product/data-access/src/lib/reviews/store/reviews.facade.ts
var ReviewsFacade = class _ReviewsFacade {
  store = inject(ReviewsStore);
  authState = inject(AuthState);
  productId = this.store.productId;
  items = this.store.items;
  total = this.store.total;
  page = this.store.page;
  pageSize = this.store.pageSize;
  sortBy = this.store.sortBy;
  ratingFilter = this.store.ratingFilter;
  summary = this.store.summary;
  myReview = this.store.myReview;
  isLoading = this.store.isLoading;
  isSubmitting = this.store.isSubmitting;
  isLoadingMy = this.store.isLoadingMy;
  error = computed(() => this.store.error()?.message ?? null, ...ngDevMode ? [{ debugName: "error" }] : []);
  hasProduct = this.store.hasProduct;
  hasMore = this.store.hasMore;
  isEmpty = this.store.isEmpty;
  avg = this.store.avg;
  count = this.store.count;
  distribution = this.store.distribution;
  isAuthenticated = this.authState.isAuthenticated;
  isAdmin = this.authState.isAdmin;
  lastMyReviewPid = signal(null, ...ngDevMode ? [{ debugName: "lastMyReviewPid" }] : []);
  constructor() {
    effect(() => {
      if (!this.authState.isAuthenticated())
        return;
      const prodId = this.store.productId();
      if (!prodId)
        return;
      if (this.lastMyReviewPid() === prodId)
        return;
      this.lastMyReviewPid.set(prodId);
      this.store.loadMyReview();
    });
  }
  init(params) {
    this.store.setContext(params);
    this.store.goToPage({ page: 1, pageSize: this.store.pageSize() });
  }
  goToPage(params) {
    this.store.goToPage(params);
  }
  loadMore() {
    if (!this.store.canLoadMore())
      return;
    this.store.loadMore();
  }
  setSortBy(sortBy) {
    this.store.setSortBy(sortBy);
  }
  setRatingFilter(rating) {
    this.store.setRatingFilter(rating);
  }
  createReview(data) {
    this.store.createReview(data);
  }
  updateReview(data) {
    this.store.updateReview(data);
  }
  removeReview(id) {
    this.store.remove({ id });
  }
  toggleLike(id) {
    this.store.toggleLike({ id });
  }
  static \u0275fac = function ReviewsFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewsFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewsFacade, factory: _ReviewsFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewsFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ProductDetailFacade,
  ProductQuestionFacade,
  ReviewsFacade
};
//# sourceMappingURL=chunk-EUJ5DNMC.js.map
