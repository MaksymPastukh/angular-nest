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
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  exhaustMap,
  inject,
  pipe,
  setClassMetadata,
  switchMap,
  tap,
  ɵɵdefineInjectable
} from "./chunk-2WGIEBYO.js";

// libs/frontend/admin/data-access/src/lib/admin-products/domain/constants/create-product.canstants.ts
var CATEGORIES = [
  { label: "Men", value: "Men" },
  { label: "Women", value: "Women" },
  { label: "Combos", value: "Combos" },
  { label: "Joggers", value: "Joggers" }
];
var PRODUCT_TYPES = [
  // Tops
  { label: "T-Shirts", value: "t_shirts" },
  { label: "Printed T-Shirts", value: "printed_t_shirts" },
  { label: "Longsleeves", value: "longsleeves" },
  { label: "Tank Tops", value: "tank_tops" },
  { label: "Polo Shirts", value: "polo_shirts" },
  { label: "Shirts", value: "shirts" },
  { label: "Overshirts", value: "overshirts" },
  { label: "Blouses", value: "blouses" },
  { label: "Bodysuits", value: "bodysuits" },
  { label: "Sweaters", value: "sweaters" },
  { label: "Cardigans", value: "cardigans" },
  { label: "Sweatshirts", value: "sweatshirts" },
  { label: "Hoodies", value: "hoodies" },
  // Outerwear
  { label: "Jackets", value: "jackets" },
  { label: "Denim Jackets", value: "denim_jackets" },
  { label: "Leather Jackets", value: "leather_jackets" },
  { label: "Bomber Jackets", value: "bomber_jackets" },
  { label: "Coats", value: "coats" },
  { label: "Trench Coats", value: "trench_coats" },
  { label: "Puffer Jackets", value: "puffer_jackets" },
  { label: "Vests", value: "vests" },
  // Bottoms
  { label: "Jeans", value: "jeans" },
  { label: "Trousers", value: "trousers" },
  { label: "Chinos", value: "chinos" },
  { label: "Cargo Pants", value: "cargo_pants" },
  { label: "Leggings", value: "leggings" },
  { label: "Joggers", value: "joggers" },
  { label: "Sweatpants", value: "sweatpants" },
  { label: "Shorts", value: "shorts" },
  { label: "Skirts", value: "skirts" },
  // Dresses / One-pieces (взрослые)
  { label: "Dresses", value: "dresses" },
  { label: "Mini Dresses", value: "mini_dresses" },
  { label: "Midi Dresses", value: "midi_dresses" },
  { label: "Maxi Dresses", value: "maxi_dresses" },
  { label: "Jumpsuits", value: "jumpsuits" },
  { label: "Playsuits", value: "playsuits" },
  // Active / Swim
  { label: "Sportswear", value: "sportswear" },
  { label: "Sports Tops", value: "sports_tops" },
  { label: "Sports Bottoms", value: "sports_bottoms" },
  { label: "Swimwear", value: "swimwear" },
  // Underwear / Home
  { label: "Underwear", value: "underwear" },
  { label: "Socks", value: "socks" },
  { label: "Sleepwear", value: "sleepwear" },
  { label: "Loungewear", value: "loungewear" },
  // Tailoring / Sets
  { label: "Suits", value: "suits" },
  { label: "Blazers", value: "blazers" },
  { label: "Waistcoats", value: "waistcoats" },
  { label: "Sets", value: "sets" },
  // Accessories (если это тоже “product type” у тебя в домене)
  { label: "Caps & Hats", value: "caps_hats" },
  { label: "Scarves", value: "scarves" },
  { label: "Gloves", value: "gloves" },
  { label: "Belts", value: "belts" },
  { label: "Bags", value: "bags" }
];
var DRESS_STYLE_GROUPS = {
  core: "Core",
  smart: "Smart",
  street: "Street",
  outdoor: "Outdoor",
  occasion: "Occasion",
  aesthetic: "Aesthetic",
  home: "Home",
  special: "Special"
};
var DRESS_STYLES = [
  // Core
  { group: "core", label: "Casual", value: "casual" },
  { group: "core", label: "Formal", value: "formal" },
  { group: "core", label: "Party", value: "party" },
  { group: "core", label: "Gym", value: "gym" },
  // Smart / Office
  { group: "smart", label: "Smart Casual", value: "smart_casual" },
  { group: "smart", label: "Business", value: "business" },
  { group: "smart", label: "Business Casual", value: "business_casual" },
  { group: "smart", label: "Office", value: "office" },
  // Street / Sport
  { group: "street", label: "Streetwear", value: "streetwear" },
  { group: "street", label: "Sporty", value: "sporty" },
  { group: "street", label: "Athleisure", value: "athleisure" },
  // Outdoor / Seasonal
  { group: "outdoor", label: "Outdoor", value: "outdoor" },
  { group: "outdoor", label: "Hiking", value: "hiking" },
  { group: "outdoor", label: "Ski / Snow", value: "ski_snow" },
  { group: "outdoor", label: "Summer", value: "summer" },
  { group: "outdoor", label: "Winter", value: "winter" },
  // Occasion
  { group: "occasion", label: "Wedding", value: "wedding" },
  { group: "occasion", label: "Cocktail", value: "cocktail" },
  { group: "occasion", label: "Evening", value: "evening" },
  { group: "occasion", label: "Date Night", value: "date_night" },
  // Aesthetic / fashion
  { group: "aesthetic", label: "Minimalist", value: "minimalist" },
  { group: "aesthetic", label: "Classic", value: "classic" },
  { group: "aesthetic", label: "Vintage", value: "vintage" },
  { group: "aesthetic", label: "Retro", value: "retro" },
  { group: "aesthetic", label: "Boho", value: "boho" },
  { group: "aesthetic", label: "Preppy", value: "preppy" },
  { group: "aesthetic", label: "Romantic", value: "romantic" },
  { group: "aesthetic", label: "Glam", value: "glam" },
  { group: "aesthetic", label: "Punk", value: "punk" },
  { group: "aesthetic", label: "Grunge", value: "grunge" },
  // Home
  { group: "home", label: "Homewear", value: "homewear" },
  { group: "home", label: "Loungewear", value: "loungewear" },
  { group: "home", label: "Sleepwear", value: "sleepwear" },
  // Special
  { group: "special", label: "Beach", value: "beach" },
  { group: "special", label: "Travel", value: "travel" }
];
var COLORS = [
  // Neutrals (ядро)
  { id: "black", name: "Black", hex: "#000000" },
  { id: "white", name: "White", hex: "#FFFFFF" },
  { id: "off-white", name: "Off White", hex: "#F5F5F0" },
  { id: "cream", name: "Cream", hex: "#FFF1D6" },
  { id: "beige", name: "Beige", hex: "#F5F5DC" },
  { id: "sand", name: "Sand", hex: "#DCC9A1" },
  { id: "camel", name: "Camel", hex: "#C19A6B" },
  { id: "tan", name: "Tan", hex: "#D2B48C" },
  { id: "brown", name: "Brown", hex: "#6B3F2A" },
  { id: "chocolate", name: "Chocolate", hex: "#3B2417" },
  { id: "gray", name: "Gray", hex: "#808080" },
  { id: "light-gray", name: "Light Gray", hex: "#D3D3D3" },
  { id: "charcoal", name: "Charcoal", hex: "#36454F" },
  { id: "navy", name: "Navy", hex: "#0B1B3A" },
  // Blues
  { id: "blue", name: "Blue", hex: "#1E40AF" },
  { id: "sky-blue", name: "Sky Blue", hex: "#87CEEB" },
  { id: "light-blue", name: "Light Blue", hex: "#A7C7E7" },
  { id: "denim", name: "Denim", hex: "#2B4C7E" },
  { id: "teal", name: "Teal", hex: "#0F766E" },
  { id: "turquoise", name: "Turquoise", hex: "#40E0D0" },
  // Greens
  { id: "green", name: "Green", hex: "#16A34A" },
  { id: "forest", name: "Forest Green", hex: "#0B3D2E" },
  { id: "olive", name: "Olive", hex: "#556B2F" },
  { id: "khaki", name: "Khaki", hex: "#BDB76B" },
  { id: "mint", name: "Mint", hex: "#A8E6CF" },
  // Reds / Oranges / Yellows
  { id: "red", name: "Red", hex: "#DC2626" },
  { id: "burgundy", name: "Burgundy", hex: "#6D0F1B" },
  { id: "maroon", name: "Maroon", hex: "#800000" },
  { id: "rust", name: "Rust", hex: "#B7410E" },
  { id: "orange", name: "Orange", hex: "#F97316" },
  { id: "coral", name: "Coral", hex: "#FF7F50" },
  { id: "mustard", name: "Mustard", hex: "#D4A017" },
  { id: "yellow", name: "Yellow", hex: "#FACC15" },
  // Pinks / Purples
  { id: "pink", name: "Pink", hex: "#EC4899" },
  { id: "blush", name: "Blush", hex: "#F4C2C2" },
  { id: "rose", name: "Rose", hex: "#E11D48" },
  { id: "lavender", name: "Lavender", hex: "#C4B5FD" },
  { id: "purple", name: "Purple", hex: "#7C3AED" },
  { id: "plum", name: "Plum", hex: "#5B2C6F" },
  // “Металлики/прочее” (часто в обуви/аксессуарах)
  { id: "silver", name: "Silver", hex: "#C0C0C0" },
  { id: "gold", name: "Gold", hex: "#D4AF37" }
];
var SIZES = [
  { label: "XS", value: "XS" },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
  { label: "XXL", value: "XXL" }
];

// libs/frontend/admin/data-access/src/lib/admin-products/data-access/admin-shop.service.ts
var AdminShopService = class _AdminShopService {
  http = inject(HttpClient);
  apiUrl = `${FRONTEND_CONFIG.api}products`;
  createProduct(product) {
    return this.http.post(this.apiUrl, product);
  }
  /**
   * Загружает несколько изображений продукта на сервер (до 3 штук)
   * @param files - массив файлов изображений (максимум 3)
   * @returns Observable с массивом путей к загруженным изображениям
   */
  uploadImages(files) {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("images", file);
    });
    return this.http.post(`${this.apiUrl}/upload-images`, formData);
  }
  static \u0275fac = function AdminShopService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminShopService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminShopService, factory: _AdminShopService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminShopService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/frontend/admin/data-access/src/lib/admin-products/store/create-product.store.ts
var initialState = {
  options: {
    categories: CATEGORIES,
    productTypes: PRODUCT_TYPES,
    dressStyles: DRESS_STYLES,
    colors: COLORS,
    sizes: SIZES
  },
  uploadedImagePaths: [],
  isUploadingImages: false,
  isLoading: false,
  error: null,
  success: false,
  event: null
};
var CreateProductStore = signalStore({ providedIn: "root" }, withState(initialState), withMethods((store, productService = inject(AdminShopService)) => {
  const setUploadPending = () => {
    patchState(store, {
      isUploadingImages: true,
      error: null,
      uploadedImagePaths: [],
      event: null
    });
  };
  const stopUpload = () => {
    patchState(store, { isUploadingImages: false });
  };
  const setCreatePending = () => {
    patchState(store, {
      isLoading: true,
      error: null,
      success: false,
      event: null
    });
  };
  const stopCreate = () => {
    patchState(store, { isLoading: false });
  };
  const setFailure = (message) => {
    patchState(store, { error: message });
  };
  const getErrorMessage = (error, fallback) => {
    if (!(error instanceof HttpErrorResponse))
      return fallback;
    const apiMessage = error.error?.message;
    if (typeof apiMessage === "string" && apiMessage.length > 0)
      return apiMessage;
    if (Array.isArray(apiMessage) && apiMessage.length > 0)
      return apiMessage.join(" ");
    return error.message ?? fallback;
  };
  const uploadImages = rxMethod(pipe(tap(() => setUploadPending()), switchMap((files) => productService.uploadImages(files).pipe(tapResponse({
    next: (response) => {
      patchState(store, {
        uploadedImagePaths: response.imagePaths,
        event: {
          type: "imagesUploaded",
          count: response.imagePaths.length
        }
      });
    },
    error: (e) => {
      const message = getErrorMessage(e, "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F");
      patchState(store, {
        uploadedImagePaths: [],
        event: { type: "imagesUploadError", message }
      });
      setFailure(message);
    },
    finalize: () => stopUpload()
  })))));
  const createProduct = rxMethod(pipe(tap(() => setCreatePending()), switchMap((formData) => productService.createProduct(formData).pipe(tapResponse({
    next: (response) => {
      patchState(store, {
        success: true,
        event: {
          type: "productCreated",
          productTitle: response.title
        }
      });
    },
    error: (e) => {
      const message = getErrorMessage(e, "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442");
      patchState(store, {
        success: false,
        event: { type: "productCreateError", message }
      });
      setFailure(message);
    },
    finalize: () => stopCreate()
  })))));
  const resetState = () => {
    patchState(store, {
      uploadedImagePaths: [],
      error: null,
      success: false,
      isLoading: false,
      isUploadingImages: false,
      event: null
    });
  };
  const clearEvent = () => {
    patchState(store, { event: null });
  };
  return {
    uploadImages,
    createProduct,
    resetState,
    clearEvent
  };
}));

// libs/frontend/admin/data-access/src/lib/admin-questions/data-access/admin-questions.service.ts
var AdminQuestionsService = class _AdminQuestionsService {
  http = inject(HttpClient);
  apiUrl = `${FRONTEND_CONFIG.api}questions`;
  getQuestions(params) {
    let httpParams = new HttpParams().set("page", String(params.page)).set("pageSize", String(params.pageSize)).set("status", params.status);
    if (params.productId)
      httpParams = httpParams.set("productId", params.productId);
    return this.http.get(this.apiUrl, {
      params: httpParams
    });
  }
  answerQuestion(id, body) {
    return this.http.patch(`${this.apiUrl}/${id}/answer`, body);
  }
  static \u0275fac = function AdminQuestionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminQuestionsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminQuestionsService, factory: _AdminQuestionsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminQuestionsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// libs/frontend/admin/data-access/src/lib/admin-questions/store/admin-questions.store.ts
var initialState2 = {
  items: [],
  total: 0,
  page: 1,
  pageSize: 20,
  filter: {
    status: "PENDING",
    productId: null
  },
  isLoading: false,
  isSubmitting: false,
  error: null
};
var AdminQuestionsStore = signalStore({ providedIn: "root" }, withState(initialState2), withComputed((store) => ({
  isEmpty: computed(() => !store.isLoading() && store.items().length === 0),
  totalPages: computed(() => Math.max(1, Math.ceil(store.total() / store.pageSize()))),
  hasProductFilter: computed(() => !!store.filter().productId)
})), withMethods((store, questionsService = inject(AdminQuestionsService)) => {
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
  const setListSuccess = (res) => {
    patchState(store, {
      items: res.items,
      total: res.total,
      page: res.page,
      pageSize: res.pageSize,
      error: null
    });
  };
  const setFailure = (message) => {
    patchState(store, { error: { message } });
  };
  const getErrorMessage = (error) => {
    if (!(error instanceof HttpErrorResponse))
      return "An unknown error occurred.";
    const apiMessage = error.error?.message;
    if (typeof apiMessage === "string")
      return apiMessage;
    if (Array.isArray(apiMessage))
      return apiMessage.join(" ");
    return error.message ?? `Request failed with status ${error.status}.`;
  };
  const load = rxMethod(pipe(tap(() => setPending("list")), switchMap(() => questionsService.getQuestions({
    page: store.page(),
    pageSize: store.pageSize(),
    status: store.filter().status,
    productId: store.filter().productId ?? void 0
  }).pipe(tapResponse({
    next: (res) => setListSuccess(res),
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("list")
  })))));
  const goToPage = rxMethod(pipe(tap(({ page, pageSize }) => {
    patchState(store, { page, pageSize });
    setPending("list");
  }), switchMap(({ page, pageSize }) => questionsService.getQuestions({
    page,
    pageSize,
    status: store.filter().status,
    productId: store.filter().productId ?? void 0
  }).pipe(tapResponse({
    next: (res) => setListSuccess(res),
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("list")
  })))));
  const answer = rxMethod(pipe(tap(() => setPending("submit")), exhaustMap(({ id, answer: answer2 }) => questionsService.answerQuestion(id, { answer: answer2 }).pipe(tapResponse({
    next: (updated) => {
      patchState(store, {
        items: store.items().filter((q) => q.id !== updated.id),
        total: Math.max(0, store.total() - 1)
      });
    },
    error: (e) => setFailure(getErrorMessage(e)),
    finalize: () => stop("submit")
  })))));
  const setFilter = (patch) => {
    patchState(store, { filter: __spreadValues(__spreadValues({}, store.filter()), patch), page: 1 });
  };
  const setContext = (ctx) => {
    patchState(store, {
      page: 1,
      filter: __spreadProps(__spreadValues({}, store.filter()), { productId: ctx.productId ?? null }),
      error: null
    });
  };
  return {
    setContext,
    setFilter,
    load,
    goToPage,
    answer
  };
}));

// libs/frontend/admin/data-access/src/lib/admin-questions/store/admin-questions.facade.ts
var AdminQuestionsFacade = class _AdminQuestionsFacade {
  store = inject(AdminQuestionsStore);
  items = this.store.items;
  total = this.store.total;
  page = this.store.page;
  pageSize = this.store.pageSize;
  filter = this.store.filter;
  isLoading = this.store.isLoading;
  isSubmitting = this.store.isSubmitting;
  error = this.store.error;
  isEmpty = this.store.isEmpty;
  setContext(productId) {
    this.store.setContext({ productId });
  }
  setStatus(status) {
    this.store.setFilter({ status });
    this.store.load();
  }
  setProductId(productId) {
    this.store.setFilter({ productId });
    this.store.load();
  }
  load() {
    this.store.load();
  }
  goToPage(change) {
    this.store.goToPage(change);
  }
  answerQuestion(id, answer) {
    this.store.answer({ id, answer });
  }
  changePageFromPrime(event) {
    const pageIndex = event.page ?? 0;
    const rows = event.rows ?? this.pageSize();
    this.goToPage({ page: pageIndex + 1, pageSize: rows });
  }
  static \u0275fac = function AdminQuestionsFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminQuestionsFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminQuestionsFacade, factory: _AdminQuestionsFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminQuestionsFacade, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DRESS_STYLE_GROUPS,
  DRESS_STYLES,
  CreateProductStore,
  AdminQuestionsFacade
};
//# sourceMappingURL=chunk-7TINI7YN.js.map
