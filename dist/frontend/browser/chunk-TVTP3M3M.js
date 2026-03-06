import {
  ProductDetailFacade,
  ReviewsStore
} from "./chunk-WCJ7U5IL.js";
import {
  ChevronLeftIcon
} from "./chunk-KVYMSTMG.js";
import {
  ImageUrlPipe
} from "./chunk-SKS7KXOA.js";
import {
  AuthState
} from "./chunk-7HICPFIX.js";
import {
  FormField,
  form,
  max,
  maxLength,
  min,
  minLength,
  required,
  submit
} from "./chunk-R243DSUS.js";
import {
  toSignal
} from "./chunk-OZMIQDZZ.js";
import {
  ButtonModule
} from "./chunk-VT55VVTS.js";
import {
  UiBreadcrumbComponent,
  UiIconComponent,
  UiRatingComponent
} from "./chunk-CYXE43MA.js";
import {
  ChevronRightIcon,
  Paginator,
  PaginatorModule,
  Ripple,
  RippleModule,
  Select
} from "./chunk-LJIN2HB3.js";
import {
  environment,
  patchState,
  rxMethod,
  signalStore,
  tapResponse,
  withComputed,
  withMethods,
  withState
} from "./chunk-DOCLYP45.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  FormsModule,
  K,
  NgControlStatus,
  NgModel,
  PARENT_INSTANCE,
  Q,
  Rt,
  V,
  bt,
  s,
  v,
  z
} from "./chunk-BEJS4TLU.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-JD54KQF2.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  HttpClient,
  HttpErrorResponse,
  NgTemplateOutlet,
  PrimeTemplate,
  SharedModule,
  isPlatformBrowser,
  k
} from "./chunk-SLVXWW7T.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  ElementRef,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  catchError,
  computed,
  contentChild,
  effect,
  exhaustMap,
  filter,
  forwardRef,
  inject,
  input,
  map,
  model,
  numberAttribute,
  of,
  output,
  pipe,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-IPMWBXXP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/marketplace-web/src/app/features/product-questions/data-access/product-questions.service.ts
var ProductQuestionService = class _ProductQuestionService {
  http = inject(HttpClient);
  apiUrl = `${environment.api}questions`;
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

// apps/marketplace-web/src/app/features/product-questions/store/product-questions.store.ts
var initialState = {
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
var ProductQuestionStore = signalStore({ providedIn: "root" }, withState(initialState), withComputed((store) => ({
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
    error: () => {
    },
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

// apps/marketplace-web/src/app/features/product-questions/store/product-questions.facade.ts
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

// apps/marketplace-web/src/app/features/product-questions/ui/ask-question-form.ts
function AskQuestionForm_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formAsk.question().errors()[0].message);
  }
}
function AskQuestionForm_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AskQuestionForm_Conditional_7_Conditional_0_Template, 2, 1, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.formAsk.question().errors().length > 0 ? 0 : -1);
  }
}
var AskQuestionForm = class _AskQuestionForm {
  isSubmitting = input(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  errorMessage = input(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  submitQuestion = output();
  formModel = signal({ question: "" }, ...ngDevMode ? [{ debugName: "formModel" }] : []);
  formAsk = form(this.formModel, (controlSchema) => {
    required(controlSchema.question, { message: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441" });
    minLength(controlSchema.question, 3, { message: "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430" });
    maxLength(controlSchema.question, 500, { message: "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 500 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" });
  });
  length = computed(() => this.formAsk.question().value().length, ...ngDevMode ? [{ debugName: "length" }] : []);
  onSubmit() {
    const field = this.formAsk.question();
    field.markAsTouched();
    const value = field.value().trim();
    if (value.length < 3)
      return;
    this.submitQuestion.emit(value);
    this.formModel.set({ question: "" });
    this.formAsk.question().reset();
  }
  static \u0275fac = function AskQuestionForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AskQuestionForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AskQuestionForm, selectors: [["app-ask-question-form"]], inputs: { isSubmitting: [1, "isSubmitting"], errorMessage: [1, "errorMessage"] }, outputs: { submitQuestion: "submitQuestion" }, decls: 13, vars: 5, consts: [[1, "rounded-lg", "border", "border-gray-200", "bg-white", "p-6"], [1, "mt-1", "font-family", "text-base", "text-gray-600"], [1, "mt-3"], ["placeholder", "Write you quewstion (3\u2013500 words)", 1, "w-full", "resize-none", "bg-transparent", "text-sm", "text-gray-800", "placeholder:text-gray-400", "focus:outline-none", 3, "rows", "formField"], [1, "mt-2", "flex", "items-center", "justify-between", "text-xs", "text-gray-500"], [1, "mt-3", "flex", "justify-end", "gap-2"], ["type", "submit", 1, "bg-purple-600", "rounded-lg", "cursor-pointer", "font-bold", "text-lg", "px-5", "py-2", "text-sm", "font-medium", "text-white", "transition", "hover:bg-purple-800", "active:scale-95", "disabled:bg-purple-300", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "text-red-600"]], template: function AskQuestionForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
      \u0275\u0275text(2, " You can ask one question about the product. After deteling it, you can create a new one ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275element(4, "textarea", 3);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(5, "div", 4)(6, "div");
      \u0275\u0275conditionalCreate(7, AskQuestionForm_Conditional_7_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "button", 6);
      \u0275\u0275listener("click", function AskQuestionForm_Template_button_click_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(12, " Send ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("rows", 4)("formField", ctx.formAsk.question);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.formAsk.question().touched() && ctx.formAsk.question().invalid() ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.length(), "/500");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSubmitting() || ctx.formAsk.question().invalid());
    }
  }, dependencies: [FormField, ButtonModule], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AskQuestionForm, [{
    type: Component,
    args: [{
      selector: "app-ask-question-form",
      standalone: true,
      imports: [FormField, ButtonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="rounded-lg border border-gray-200 bg-white p-6">
      <p class="mt-1 font-family text-base text-gray-600">
        You can ask one question about the product. After deteling it, you can create a new one
      </p>

      <div class="mt-3">
        <textarea
          [rows]="4"
          class="w-full resize-none bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
          [formField]="formAsk.question"
          placeholder="Write you quewstion (3\u2013500 words)"
        ></textarea>

        <div class="mt-2 flex items-center justify-between text-xs text-gray-500">
          <div>
            @if (formAsk.question().touched() && formAsk.question().invalid()) {
              @if (formAsk.question().errors().length > 0) {
                <span class="text-red-600">{{ formAsk.question().errors()[0].message }}</span>
              }
            }
          </div>

          <div>{{ length() }}/500</div>
        </div>

        <div class="mt-3 flex justify-end gap-2">
          <button
            type="submit"
            [disabled]="isSubmitting() || formAsk.question().invalid()"
            (click)="onSubmit()"
            class="bg-purple-600 rounded-lg cursor-pointer font-bold text-lg px-5 py-2 text-sm font-medium text-white transition hover:bg-purple-800 active:scale-95 disabled:bg-purple-300 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  `
    }]
  }], null, { isSubmitting: [{ type: Input, args: [{ isSignal: true, alias: "isSubmitting", required: false }] }], errorMessage: [{ type: Input, args: [{ isSignal: true, alias: "errorMessage", required: false }] }], submitQuestion: [{ type: Output, args: ["submitQuestion"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AskQuestionForm, { className: "AskQuestionForm", filePath: "apps/marketplace-web/src/app/features/product-questions/ui/ask-question-form.ts", lineNumber: 51 });
})();

// apps/marketplace-web/src/app/features/product-questions/ui/my-question-card.ts
function MyQuestionCardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "p", 7);
    \u0275\u0275text(2, "Answer admin");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 8);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.question().answer);
  }
}
function MyQuestionCardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275text(1, " As soon as the administator responds, you will see the answer here ");
    \u0275\u0275domElementEnd();
  }
}
var MyQuestionCardComponent = class _MyQuestionCardComponent {
  question = input.required(...ngDevMode ? [{ debugName: "question" }] : []);
  isSubmitting = input(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  remove = output();
  statusLabel(status) {
    switch (status) {
      case "PENDING":
        return "awating a response";
      case "ANSWERED":
        return "answered";
      case "HIDDEN":
        return "hiden";
      case "DELETED":
        return "deleted";
      default:
        return status;
    }
  }
  static \u0275fac = function MyQuestionCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyQuestionCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyQuestionCardComponent, selectors: [["app-my-question-card"]], inputs: { question: [1, "question"], isSubmitting: [1, "isSubmitting"] }, outputs: { remove: "remove" }, decls: 19, vars: 8, consts: [[1, "rounded-lg", "border", "border-gray-200", "bg-white", "p-6"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "text-xl", "font-family", "font-semibold"], [1, "mt-1", "font-family", "text-base", "text-gray-600"], [1, "font-medium"], ["type", "submit", 1, "bg-purple-600", "rounded-lg", "cursor-pointer", "font-bold", "text-lg", "px-5", "py-2", "text-sm", "font-medium", "text-white", "transition", "hover:bg-purple-800", "active:scale-95", "disabled:bg-purple-300", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "mt-3", "space-y-3"], [1, "font-family", "text-sm", "text-gray-500"], [1, "mt-1", "whitespace-pre-wrap"], [1, "font-family", "text-sm", "text-gray-600"]], template: function MyQuestionCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h3", 2);
      \u0275\u0275text(4, "Your question");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, " Status: ");
      \u0275\u0275domElementStart(7, "span", 4);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(9, "button", 5);
      \u0275\u0275domListener("click", function MyQuestionCardComponent_Template_button_click_9_listener() {
        return ctx.remove.emit(ctx.question().id);
      });
      \u0275\u0275text(10, " Delete ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "div", 6)(12, "div")(13, "p", 7);
      \u0275\u0275text(14, "Question");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "p", 8);
      \u0275\u0275text(16);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(17, MyQuestionCardComponent_Conditional_17_Template, 5, 1, "div")(18, MyQuestionCardComponent_Conditional_18_Template, 2, 0, "div", 9);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("text-green-700", ctx.question().status === "ANSWERED")("text-amber-700", ctx.question().status === "PENDING");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.statusLabel(ctx.question().status), " ");
      \u0275\u0275advance();
      \u0275\u0275domProperty("disabled", ctx.isSubmitting());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.question().question);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.question().status === "ANSWERED" && ctx.question().answer ? 17 : 18);
    }
  }, dependencies: [ButtonModule], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyQuestionCardComponent, [{
    type: Component,
    args: [{
      selector: "app-my-question-card",
      standalone: true,
      imports: [ButtonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="rounded-lg border border-gray-200 bg-white p-6">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="text-xl font-family font-semibold">Your question</h3>
          <p class="mt-1 font-family text-base text-gray-600">
            Status:
            <span
              class="font-medium "
              [class.text-green-700]="question().status === 'ANSWERED'"
              [class.text-amber-700]="question().status === 'PENDING'"
            >
              {{ statusLabel(question().status) }}
            </span>
          </p>
        </div>

        <button
          type="submit"
          [disabled]="isSubmitting()"
          (click)="remove.emit(question().id)"
          class="bg-purple-600 rounded-lg cursor-pointer font-bold text-lg px-5 py-2 text-sm font-medium text-white transition hover:bg-purple-800 active:scale-95 disabled:bg-purple-300 disabled:cursor-not-allowed"
        >
          Delete
        </button>
      </div>

      <div class="mt-3 space-y-3">
        <div>
          <p class="font-family text-sm text-gray-500">Question</p>
          <p class="mt-1 whitespace-pre-wrap">{{ question().question }}</p>
        </div>

        @if (question().status === 'ANSWERED' && question().answer) {
          <div>
            <p class="font-family text-sm text-gray-500">Answer admin</p>
            <p class="mt-1 whitespace-pre-wrap">{{ question().answer }}</p>
          </div>
        } @else {
          <div class="font-family text-sm text-gray-600">
            As soon as the administator responds, you will see the answer here
          </div>
        }
      </div>
    </div>
  `
    }]
  }], null, { question: [{ type: Input, args: [{ isSignal: true, alias: "question", required: true }] }], isSubmitting: [{ type: Input, args: [{ isSignal: true, alias: "isSubmitting", required: false }] }], remove: [{ type: Output, args: ["remove"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyQuestionCardComponent, { className: "MyQuestionCardComponent", filePath: "apps/marketplace-web/src/app/features/product-questions/ui/my-question-card.ts", lineNumber: 57 });
})();

// node_modules/@primeuix/styles/dist/progressspinner/index.mjs
var style = "\n    .p-progressspinner {\n        position: relative;\n        margin: 0 auto;\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n    }\n\n    .p-progressspinner::before {\n        content: '';\n        display: block;\n        padding-top: 100%;\n    }\n\n    .p-progressspinner-spin {\n        height: 100%;\n        transform-origin: center center;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n        animation: p-progressspinner-rotate 2s linear infinite;\n    }\n\n    .p-progressspinner-circle {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: 0;\n        stroke: dt('progressspinner.colorOne');\n        animation:\n            p-progressspinner-dash 1.5s ease-in-out infinite,\n            p-progressspinner-color 6s ease-in-out infinite;\n        stroke-linecap: round;\n    }\n\n    @keyframes p-progressspinner-rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes p-progressspinner-dash {\n        0% {\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n        }\n        50% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -35px;\n        }\n        100% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -124px;\n        }\n    }\n    @keyframes p-progressspinner-color {\n        100%,\n        0% {\n            stroke: dt('progressspinner.color.one');\n        }\n        40% {\n            stroke: dt('progressspinner.color.two');\n        }\n        66% {\n            stroke: dt('progressspinner.color.three');\n        }\n        80%,\n        90% {\n            stroke: dt('progressspinner.color.four');\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-progressspinner.mjs
var classes = {
  root: () => ["p-progressspinner"],
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
};
var ProgressSpinnerStyle = class _ProgressSpinnerStyle extends BaseStyle {
  name = "progressspinner";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinnerStyle_BaseFactory;
    return function ProgressSpinnerStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinnerStyle_BaseFactory || (\u0275ProgressSpinnerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinnerStyle)))(__ngFactoryType__ || _ProgressSpinnerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressSpinnerStyle,
    factory: _ProgressSpinnerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressSpinnerClasses;
(function(ProgressSpinnerClasses2) {
  ProgressSpinnerClasses2["root"] = "p-progressspinner";
  ProgressSpinnerClasses2["spin"] = "p-progressspinner-spin";
  ProgressSpinnerClasses2["circle"] = "p-progressspinner-circle";
})(ProgressSpinnerClasses || (ProgressSpinnerClasses = {}));
var PROGRESSSPINNER_INSTANCE = new InjectionToken("PROGRESSSPINNER_INSTANCE");
var ProgressSpinner = class _ProgressSpinner extends BaseComponent {
  componentName = "ProgressSpinner";
  $pcProgressSpinner = inject(PROGRESSSPINNER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Width of the circle stroke.
   * @group Props
   */
  strokeWidth = "2";
  /**
   * Color for the background of the circle.
   * @group Props
   */
  fill = "none";
  /**
   * Duration of the rotate animation.
   * @group Props
   */
  animationDuration = "2s";
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(ProgressSpinnerStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinner_BaseFactory;
    return function ProgressSpinner_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinner_BaseFactory || (\u0275ProgressSpinner_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinner)))(__ngFactoryType__ || _ProgressSpinner);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressSpinner,
    selectors: [["p-progressSpinner"], ["p-progress-spinner"], ["p-progressspinner"]],
    hostVars: 5,
    hostBindings: function ProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("role", "progressbar")("aria-busy", true);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      strokeWidth: "strokeWidth",
      fill: "fill",
      animationDuration: "animationDuration",
      ariaLabel: "ariaLabel"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressSpinnerStyle, {
      provide: PROGRESSSPINNER_INSTANCE,
      useExisting: _ProgressSpinner
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ProgressSpinner
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 10,
    consts: [["viewBox", "25 25 50 50", 3, "pBind"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 3, "pBind"]],
    template: function ProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "circle", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("spin"));
        \u0275\u0275styleProp("animation-duration", ctx.animationDuration);
        \u0275\u0275property("pBind", ctx.ptm("spin"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("circle"));
        \u0275\u0275property("pBind", ctx.ptm("circle"));
        \u0275\u0275attribute("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
      }
    },
    dependencies: [CommonModule, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinner, [{
    type: Component,
    args: [{
      selector: "p-progressSpinner, p-progress-spinner, p-progressspinner",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <svg [class]="cx('spin')" [pBind]="ptm('spin')" viewBox="25 25 50 50" [style.animation-duration]="animationDuration">
            <circle [class]="cx('circle')" [pBind]="ptm('circle')" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
        </svg>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressSpinnerStyle, {
        provide: PROGRESSSPINNER_INSTANCE,
        useExisting: ProgressSpinner
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ProgressSpinner
      }],
      host: {
        "[attr.aria-label]": "ariaLabel",
        "[attr.role]": "'progressbar'",
        "[attr.aria-busy]": "true",
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var ProgressSpinnerModule = class _ProgressSpinnerModule {
  static \u0275fac = function ProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressSpinnerModule,
    imports: [ProgressSpinner, SharedModule],
    exports: [ProgressSpinner, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressSpinner, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressSpinner, SharedModule],
      exports: [ProgressSpinner, SharedModule]
    }]
  }], null, null);
})();

// apps/marketplace-web/src/app/features/product-questions/ui/questions-list.ts
var _forTrack0 = ($index, $item) => $item.id;
function QuestionsListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "p-progressSpinner", 4);
    \u0275\u0275elementEnd();
  }
}
function QuestionsListComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "No answers to questions yet.");
    \u0275\u0275elementEnd();
  }
}
function QuestionsListComponent_Conditional_5_Conditional_1_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "\u0432\u0430\u0448");
    \u0275\u0275elementEnd();
  }
}
function QuestionsListComponent_Conditional_5_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7)(1, "div", 9)(2, "div", 10)(3, "p", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, QuestionsListComponent_Conditional_5_Conditional_1_For_2_Conditional_7_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14)(9, "p", 11);
    \u0275\u0275text(10, "Answer admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r1.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r1.question);
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r1.isMine ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(q_r1.answer);
  }
}
function QuestionsListComponent_Conditional_5_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p-paginator", 16);
    \u0275\u0275listener("onPageChange", function QuestionsListComponent_Conditional_5_Conditional_1_Conditional_3_Template_p_paginator_onPageChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onPrimePageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("rows", ctx_r2.pageSize())("totalRecords", ctx_r2.total())("first", (ctx_r2.page() - 1) * ctx_r2.pageSize());
  }
}
function QuestionsListComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6);
    \u0275\u0275repeaterCreate(1, QuestionsListComponent_Conditional_5_Conditional_1_For_2_Template, 13, 4, "li", 7, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, QuestionsListComponent_Conditional_5_Conditional_1_Conditional_3_Template, 2, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.items());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.total() > ctx_r2.pageSize() ? 3 : -1);
  }
}
function QuestionsListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, QuestionsListComponent_Conditional_5_Conditional_0_Template, 2, 0, "div", 5)(1, QuestionsListComponent_Conditional_5_Conditional_1_Template, 4, 1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.items().length === 0 ? 0 : 1);
  }
}
var QuestionsListComponent = class _QuestionsListComponent {
  items = input([], ...ngDevMode ? [{ debugName: "items" }] : []);
  total = input(0, ...ngDevMode ? [{ debugName: "total" }] : []);
  page = input(1, ...ngDevMode ? [{ debugName: "page" }] : []);
  pageSize = input(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  isLoading = input(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  pageChange = output();
  onPrimePageChange(event) {
    const pageIndex = event.page ?? 0;
    const rows = event.rows ?? this.pageSize();
    this.pageChange.emit({ page: pageIndex + 1, pageSize: rows });
  }
  static \u0275fac = function QuestionsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionsListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionsListComponent, selectors: [["app-questions-list"]], inputs: { items: [1, "items"], total: [1, "total"], page: [1, "page"], pageSize: [1, "pageSize"], isLoading: [1, "isLoading"] }, outputs: { pageChange: "pageChange" }, decls: 6, vars: 1, consts: [[1, "rounded-lg", "border", "border-gray-200", "bg-white", "p-6", "mt-3"], [1, "flex", "items-center", "justify-between"], [1, "font-family", "text-xl", "font-semibold"], [1, "flex", "items-center", "justify-center", "py-10"], ["ariaLabel", "loading"], [1, "py-8", "font-family", "text-sm", "text-gray-600"], [1, "mt-4", "space-y-4"], [1, "rounded-lg", "border", "border-gray-200", "bg-white", "p-6"], [1, "mt-4"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0"], [1, "font-family", "text-sm", "text-gray-500"], [1, "font-family", "mt-1", "whitespace-pre-wrap", "font-medium"], [1, "shrink-0", "rounded-full", "bg-blue-100", "px-2", "py-1", "text-xs", "text-blue-700"], [1, "mt-3", "border-l-2", "border-gray-200", "pl-3"], [1, "mt-1", "whitespace-pre-wrap"], [3, "onPageChange", "rows", "totalRecords", "first"]], template: function QuestionsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3, "Answers to questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(4, QuestionsListComponent_Conditional_4_Template, 2, 0, "div", 3)(5, QuestionsListComponent_Conditional_5_Template, 2, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.isLoading() ? 4 : 5);
    }
  }, dependencies: [PaginatorModule, Paginator, ProgressSpinnerModule, ProgressSpinner], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionsListComponent, [{
    type: Component,
    args: [{
      selector: "app-questions-list",
      standalone: true,
      imports: [PaginatorModule, ProgressSpinnerModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="rounded-lg border border-gray-200 bg-white p-6 mt-3">
      <div class="flex items-center justify-between">
        <h3 class="font-family text-xl font-semibold">Answers to questions</h3>
      </div>

      @if (isLoading()) {
        <div class="flex items-center justify-center py-10">
          <p-progressSpinner ariaLabel="loading"></p-progressSpinner>
        </div>
      } @else {
        @if (items().length === 0) {
          <div class="py-8 font-family text-sm text-gray-600">No answers to questions yet.</div>
        } @else {
          <ul class="mt-4 space-y-4">
            @for (q of items(); track q.id) {
              <li class="rounded-lg border border-gray-200 bg-white p-6">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <p class="font-family text-sm text-gray-500">{{ q.userName }}</p>
                    <p class="font-family mt-1 whitespace-pre-wrap font-medium">{{ q.question }}</p>
                  </div>
                  @if (q.isMine) {
                    <span class="shrink-0 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700"
                      >\u0432\u0430\u0448</span
                    >
                  }
                </div>

                <div class="mt-3 border-l-2 border-gray-200 pl-3">
                  <p class="font-family text-sm text-gray-500">Answer admin</p>
                  <p class="mt-1 whitespace-pre-wrap">{{ q.answer }}</p>
                </div>
              </li>
            }
          </ul>

          @if (total() > pageSize()) {
            <div class="mt-4">
              <p-paginator
                [rows]="pageSize()"
                [totalRecords]="total()"
                [first]="(page() - 1) * pageSize()"
                (onPageChange)="onPrimePageChange($event)"
              />
            </div>
          }
        }
      }
    </div>
  `
    }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }], total: [{ type: Input, args: [{ isSignal: true, alias: "total", required: false }] }], page: [{ type: Input, args: [{ isSignal: true, alias: "page", required: false }] }], pageSize: [{ type: Input, args: [{ isSignal: true, alias: "pageSize", required: false }] }], isLoading: [{ type: Input, args: [{ isSignal: true, alias: "isLoading", required: false }] }], pageChange: [{ type: Output, args: ["pageChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionsListComponent, { className: "QuestionsListComponent", filePath: "apps/marketplace-web/src/app/features/product-questions/ui/questions-list.ts", lineNumber: 64 });
})();

// apps/marketplace-web/src/app/features/product-questions/ui/product-questions-section.ts
function ProductQuestionsSectionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-my-question-card", 4);
    \u0275\u0275listener("remove", function ProductQuestionsSectionComponent_Conditional_1_Template_app_my_question_card_remove_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.facade.removeQuestion($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("question", ctx)("isSubmitting", ctx_r1.facade.isSubmitting());
  }
}
function ProductQuestionsSectionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-ask-question-form", 5);
    \u0275\u0275listener("submitQuestion", function ProductQuestionsSectionComponent_Conditional_2_Template_app_ask_question_form_submitQuestion_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.facade.createQuestion($event, ctx_r1.productId()));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("isSubmitting", ctx_r1.facade.isSubmitting())("errorMessage", ((tmp_2_0 = ctx_r1.facade.error()) == null ? null : tmp_2_0.message) ?? null);
  }
}
var ProductQuestionsSectionComponent = class _ProductQuestionsSectionComponent {
  productId = input.required(...ngDevMode ? [{ debugName: "productId" }] : []);
  facade = inject(ProductQuestionFacade);
  constructor() {
    effect(() => {
      const prodId = this.productId();
      if (!prodId)
        return;
      this.facade.setContext(prodId);
      this.facade.load();
      this.facade.loadMy();
    });
  }
  static \u0275fac = function ProductQuestionsSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductQuestionsSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductQuestionsSectionComponent, selectors: [["app-product-questions-section"]], inputs: { productId: [1, "productId"] }, decls: 4, vars: 6, consts: [[1, "mt-8", "space-y-4"], [3, "question", "isSubmitting"], [3, "isSubmitting", "errorMessage"], [3, "pageChange", "items", "total", "page", "pageSize", "isLoading"], [3, "remove", "question", "isSubmitting"], [3, "submitQuestion", "isSubmitting", "errorMessage"]], template: function ProductQuestionsSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275conditionalCreate(1, ProductQuestionsSectionComponent_Conditional_1_Template, 1, 2, "app-my-question-card", 1)(2, ProductQuestionsSectionComponent_Conditional_2_Template, 1, 2, "app-ask-question-form", 2);
      \u0275\u0275elementStart(3, "app-questions-list", 3);
      \u0275\u0275listener("pageChange", function ProductQuestionsSectionComponent_Template_app_questions_list_pageChange_3_listener($event) {
        return ctx.facade.goToPage($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_0_0 = ctx.facade.myQuestion()) ? 1 : 2, tmp_0_0);
      \u0275\u0275advance(2);
      \u0275\u0275property("items", ctx.facade.items())("total", ctx.facade.total())("page", ctx.facade.page())("pageSize", ctx.facade.pageSize())("isLoading", ctx.facade.isLoading());
    }
  }, dependencies: [MyQuestionCardComponent, QuestionsListComponent, AskQuestionForm], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductQuestionsSectionComponent, [{
    type: Component,
    args: [{
      selector: "app-product-questions-section",
      standalone: true,
      imports: [MyQuestionCardComponent, QuestionsListComponent, AskQuestionForm],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <section class="mt-8 space-y-4">
      @if (facade.myQuestion(); as my) {
        <app-my-question-card
          [question]="my"
          [isSubmitting]="facade.isSubmitting()"
          (remove)="facade.removeQuestion($event)"
        />
      } @else {
        <app-ask-question-form
          [isSubmitting]="facade.isSubmitting()"
          [errorMessage]="facade.error()?.message ?? null"
          (submitQuestion)="facade.createQuestion($event, productId())"
        />
      }

      <app-questions-list
        [items]="facade.items()"
        [total]="facade.total()"
        [page]="facade.page()"
        [pageSize]="facade.pageSize()"
        [isLoading]="facade.isLoading()"
        (pageChange)="facade.goToPage($event)"
      />
    </section>
  `
    }]
  }], () => [], { productId: [{ type: Input, args: [{ isSignal: true, alias: "productId", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductQuestionsSectionComponent, { className: "ProductQuestionsSectionComponent", filePath: "apps/marketplace-web/src/app/features/product-questions/ui/product-questions-section.ts", lineNumber: 39 });
})();

// apps/marketplace-web/src/app/features/reviews/store/reviews.facade.ts
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

// apps/marketplace-web/src/app/features/reviews/ui/reviews-form/review-form.ts
function ReviewFormComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.reviewsForm.text().errors()[0].message);
  }
}
function ReviewFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ReviewFormComponent_Conditional_7_Conditional_0_Template, 2, 1, "span", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.reviewsForm.text().errors().length > 0 ? 0 : -1);
  }
}
function ReviewFormComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.reviewsForm.rating().errors()[0].message, " ");
  }
}
function ReviewFormComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ReviewFormComponent_Conditional_16_Conditional_0_Template, 2, 1, "div", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.reviewsForm.rating().errors().length > 0 ? 0 : -1);
  }
}
function ReviewFormComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "Sending\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReviewFormComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Update review ");
  }
}
function ReviewFormComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Post review ");
  }
}
function ReviewFormComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275conditionalCreate(1, ReviewFormComponent_Conditional_19_Conditional_1_Template, 1, 0)(2, ReviewFormComponent_Conditional_19_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isEditMode() ? 1 : 2);
  }
}
var ReviewFormComponent = class _ReviewFormComponent {
  isAuthenticated = input(false, ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
  isSubmitting = input(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  myReview = input(null, ...ngDevMode ? [{ debugName: "myReview" }] : []);
  create = output();
  update = output();
  delete = output();
  isEditMode = computed(() => !!this.myReview(), ...ngDevMode ? [{ debugName: "isEditMode" }] : []);
  reviewsModel = signal({
    text: "",
    rating: 5
  }, ...ngDevMode ? [{ debugName: "reviewsModel" }] : []);
  reviewsForm = form(this.reviewsModel, (controlSchema) => {
    required(controlSchema.text, { message: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D." });
    minLength(controlSchema.text, 3, { message: "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430." });
    maxLength(controlSchema.text, 1e3, { message: "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 1000 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432." });
    required(controlSchema.rating, { message: "\u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0446\u0435\u043D\u043A\u0443 \u043E\u0442 1 \u0434\u043E 5." });
    min(controlSchema.rating, 1, { message: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0446\u0435\u043D\u043A\u0430 - 1." });
    max(controlSchema.rating, 5, { message: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0446\u0435\u043D\u043A\u0430 - 5." });
  });
  setRating(rating) {
    this.reviewsForm.rating().value.set(rating);
    this.reviewsForm.rating().markAsTouched();
  }
  resetRating() {
    this.reviewsForm.rating().value.set(5);
    this.reviewsForm.rating().markAsTouched();
  }
  async submitForm(event) {
    event?.preventDefault();
    if (!this.isAuthenticated() || this.isSubmitting())
      return;
    await submit(this.reviewsForm, (form2) => {
      const value = form2().value();
      const text = value.text.trim();
      const { rating } = value;
      if (this.isEditMode()) {
        const review = this.myReview();
        if (review)
          this.update.emit({ id: review.id, text, rating });
        this.reviewsModel.set({ text: "", rating: 5 });
        this.reviewsForm().reset();
      } else {
        this.create.emit({ text, rating });
        this.reviewsModel.set({ text: "", rating: 5 });
        this.reviewsForm().reset();
      }
      return Promise.resolve(void 0);
    });
  }
  deleteReview() {
    const review = this.myReview();
    if (!review)
      return;
    this.delete.emit(review.id);
  }
  static \u0275fac = function ReviewFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewFormComponent, selectors: [["app-review-ui-form"]], inputs: { isAuthenticated: [1, "isAuthenticated"], isSubmitting: [1, "isSubmitting"], myReview: [1, "myReview"] }, outputs: { create: "create", update: "update", delete: "delete" }, decls: 20, vars: 10, consts: [[1, "mx-auto", "w-full", "max-w-3xl"], [1, "mb-12", 3, "submit"], [1, "rounded-lg", "border", "border-gray-200", "bg-white", "p-6"], [1, "mt-1"], ["placeholder", "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043E\u0442\u0437\u044B\u0432...", "rows", "4", 1, "w-full", "resize-none", "bg-transparent", "text-sm", "text-gray-800", "placeholder:text-gray-400", "focus:outline-none", 3, "formField"], [1, "mt-2", "flex", "items-center", "justify-between", "text-xs", "text-gray-500"], [1, "mt-3", "flex", "justify-between", "font-family", "font-medium", "text-lg"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "flex", "items-end", "gap-3"], [1, "text-gray-600"], [3, "rateCommitted", "cancelCommitted", "value", "stars", "readonly", "disabled"], ["type", "submit", 1, "bg-purple-600", "rounded-lg", "cursor-pointer", "font-bold", "text-lg", "px-5", "py-2", "text-sm", "font-medium", "text-white", "transition", "hover:bg-purple-800", "active:scale-95", "disabled:bg-purple-300", "disabled:cursor-not-allowed", 3, "disabled"], [1, "animate-pulse"], [1, "text-red-600"], [1, "mt-2", "text-xs", "text-red-600"]], template: function ReviewFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
      \u0275\u0275listener("submit", function ReviewFormComponent_Template_form_submit_1_listener($event) {
        return ctx.submitForm($event);
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "textarea", 4);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(5, "div", 5)(6, "div");
      \u0275\u0275conditionalCreate(7, ReviewFormComponent_Conditional_7_Template, 1, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "span", 9);
      \u0275\u0275text(14, "Your review");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "app-ui-rating", 10);
      \u0275\u0275listener("rateCommitted", function ReviewFormComponent_Template_app_ui_rating_rateCommitted_15_listener($event) {
        return ctx.setRating($event ?? 5);
      })("cancelCommitted", function ReviewFormComponent_Template_app_ui_rating_cancelCommitted_15_listener() {
        return ctx.resetRating();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, ReviewFormComponent_Conditional_16_Template, 1, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275conditionalCreate(18, ReviewFormComponent_Conditional_18_Template, 2, 0, "span", 12)(19, ReviewFormComponent_Conditional_19_Template, 3, 1, "span");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("formField", ctx.reviewsForm.text);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.reviewsForm.text().touched() && ctx.reviewsForm.text().invalid() ? 7 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.reviewsForm().value().text.length, "/1000");
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.reviewsForm().value().rating)("stars", 5)("readonly", false)("disabled", !ctx.isAuthenticated() || ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.reviewsForm.rating().touched() && ctx.reviewsForm.rating().invalid() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.isAuthenticated() || ctx.isSubmitting() || ctx.reviewsForm().invalid());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isSubmitting() ? 18 : 19);
    }
  }, dependencies: [UiRatingComponent, FormField], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewFormComponent, [{
    type: Component,
    args: [{ selector: "app-review-ui-form", changeDetection: ChangeDetectionStrategy.OnPush, imports: [UiRatingComponent, FormField], template: '<div class="mx-auto w-full max-w-3xl">\n  <form (submit)="submitForm($event)" class="mb-12">\n    <div class="rounded-lg border border-gray-200 bg-white p-6">\n      <div class="mt-1">\n        <textarea\n          [formField]="reviewsForm.text"\n          placeholder="\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043E\u0442\u0437\u044B\u0432..."\n          class="w-full resize-none bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"\n          rows="4"\n        ></textarea>\n\n        <div class="mt-2 flex items-center justify-between text-xs text-gray-500">\n          <div>\n            @if (reviewsForm.text().touched() && reviewsForm.text().invalid()) {\n              @if (reviewsForm.text().errors().length > 0) {\n                <span class="text-red-600">{{ reviewsForm.text().errors()[0].message }}</span>\n              }\n            }\n          </div>\n\n          <div>{{ reviewsForm().value().text.length }}/1000</div>\n        </div>\n      </div>\n\n      <div class="mt-3 flex justify-between font-family font-medium text-lg">\n        <div class="flex items-start justify-between gap-4">\n          <div class="flex items-end gap-3">\n            <span class="text-gray-600">Your review</span>\n\n            <app-ui-rating\n              [value]="reviewsForm().value().rating"\n              [stars]="5"\n              [readonly]="false"\n              [disabled]="!isAuthenticated() || isSubmitting()"\n              (rateCommitted)="setRating($event ?? 5)"\n              (cancelCommitted)="resetRating()"\n            />\n            @if (reviewsForm.rating().touched() && reviewsForm.rating().invalid()) {\n              @if (reviewsForm.rating().errors().length > 0) {\n                <div class="mt-2 text-xs text-red-600">\n                  {{ reviewsForm.rating().errors()[0].message }}\n                </div>\n              }\n            }\n          </div>\n        </div>\n        <button\n          type="submit"\n          [disabled]="!isAuthenticated() || isSubmitting() || reviewsForm().invalid()"\n          class="bg-purple-600 rounded-lg cursor-pointer font-bold text-lg px-5 py-2 text-sm font-medium text-white transition hover:bg-purple-800 active:scale-95 disabled:bg-purple-300 disabled:cursor-not-allowed"\n        >\n          @if (isSubmitting()) {\n            <span class="animate-pulse">Sending\u2026</span>\n          } @else {\n            <span>\n              @if (isEditMode()) {\n                Update review\n              } @else {\n                Post review\n              }\n            </span>\n          }\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n' }]
  }], null, { isAuthenticated: [{ type: Input, args: [{ isSignal: true, alias: "isAuthenticated", required: false }] }], isSubmitting: [{ type: Input, args: [{ isSignal: true, alias: "isSubmitting", required: false }] }], myReview: [{ type: Input, args: [{ isSignal: true, alias: "myReview", required: false }] }], create: [{ type: Output, args: ["create"] }], update: [{ type: Output, args: ["update"] }], delete: [{ type: Output, args: ["delete"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewFormComponent, { className: "ReviewFormComponent", filePath: "apps/marketplace-web/src/app/features/reviews/ui/reviews-form/review-form.ts", lineNumber: 23 });
})();

// apps/marketplace-web/src/app/features/reviews/ui/reviews/reviews.ts
var _c0 = ["reviewsTop"];
var _c1 = () => [10, 20, 50];
var _forTrack02 = ($index, $item) => $item.id;
function Reviews_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementEnd();
  }
}
function Reviews_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.facade.error(), " ");
  }
}
function Reviews_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p-select", 7);
    \u0275\u0275listener("ngModelChange", function Reviews_Conditional_3_Template_p_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSortChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-select", 8);
    \u0275\u0275listener("ngModelChange", function Reviews_Conditional_3_Template_p_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onRatingFilterChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "app-review-ui-form", 9, 0);
    \u0275\u0275listener("create", function Reviews_Conditional_3_Template_app_review_ui_form_create_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCreateReview($event));
    })("update", function Reviews_Conditional_3_Template_app_review_ui_form_update_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onUpdateReview($event));
    })("delete", function Reviews_Conditional_3_Template_app_review_ui_form_delete_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDeleteReview($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r0.sortOptions)("ngModel", ctx_r0.facade.sortBy());
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r0.ratingFilterOptions)("ngModel", ctx_r0.facade.ratingFilter());
    \u0275\u0275advance();
    \u0275\u0275property("isAuthenticated", ctx_r0.authState.isAuthenticated())("isSubmitting", ctx_r0.facade.isSubmitting())("myReview", ctx_r0.facade.myReview());
  }
}
function Reviews_Conditional_4_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-ui-icon", 22);
  }
}
function Reviews_Conditional_4_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-ui-icon", 23);
  }
}
function Reviews_Conditional_4_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function Reviews_Conditional_4_For_2_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDeleteReview(r_r4.id));
    });
    \u0275\u0275text(1, " Delete review ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.facade.isSubmitting());
  }
}
function Reviews_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-ui-rating", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17)(8, "span", 18);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19)(12, "button", 20);
    \u0275\u0275listener("click", function Reviews_Conditional_4_For_2_Template_button_click_12_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.facade.toggleLike(r_r4.id));
    });
    \u0275\u0275elementStart(13, "span", 21);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, Reviews_Conditional_4_For_2_Conditional_15_Template, 1, 0, "app-ui-icon", 22)(16, Reviews_Conditional_4_For_2_Conditional_16_Template, 1, 0, "app-ui-icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, Reviews_Conditional_4_For_2_Conditional_17_Template, 2, 1, "button", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const r_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.userName);
    \u0275\u0275advance();
    \u0275\u0275property("value", r_r4.rating)("readonly", true)("stars", 5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.text);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 9, r_r4.createdAt, "dd.MM.yyyy"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r4.likesCount);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r4.isLiked ? 15 : 16);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_19_0 = ctx_r0.facade.myReview()) == null ? null : tmp_19_0.id) === r_r4.id || ctx_r0.facade.isAdmin() ? 17 : -1);
  }
}
function Reviews_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "p-paginator", 26);
    \u0275\u0275listener("onPageChange", function Reviews_Conditional_4_Conditional_3_Template_p_paginator_onPageChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onReviewsPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("first", (ctx_r0.facade.page() - 1) * ctx_r0.facade.pageSize())("rows", ctx_r0.facade.pageSize())("totalRecords", ctx_r0.facade.total())("rowsPerPageOptions", \u0275\u0275pureFunction0(4, _c1));
  }
}
function Reviews_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, Reviews_Conditional_4_For_2_Template, 18, 12, "div", 11, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, Reviews_Conditional_4_Conditional_3_Template, 2, 5, "div", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.facade.items());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.facade.total() > ctx_r0.facade.pageSize() ? 3 : -1);
  }
}
function Reviews_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 27);
    \u0275\u0275text(2, "\u041E\u0442\u0437\u044B\u0432\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "\u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C, \u043A\u0442\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u043E\u0442\u0437\u044B\u0432!");
    \u0275\u0275elementEnd()();
  }
}
var Reviews = class _Reviews {
  facade = inject(ReviewsFacade);
  authState = inject(AuthState);
  productId = input.required(...ngDevMode ? [{ debugName: "productId" }] : []);
  initialSummary = input(...ngDevMode ? [void 0, { debugName: "initialSummary" }] : []);
  reviewsTop;
  pendingScroll = signal(false, ...ngDevMode ? [{ debugName: "pendingScroll" }] : []);
  lastProductId = signal(null, ...ngDevMode ? [{ debugName: "lastProductId" }] : []);
  constructor() {
    effect(() => {
      const prodId = this.productId();
      if (!prodId)
        return;
      if (this.lastProductId() === prodId)
        return;
      this.lastProductId.set(prodId);
      this.facade.init({
        productId: prodId,
        initialSummary: this.initialSummary() ?? void 0
      });
    });
    effect(() => {
      if (!this.pendingScroll())
        return;
      if (this.facade.isLoading())
        return;
      this.pendingScroll.set(false);
      this.reviewsTop?.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
  sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Rating: high \u2192 low", value: "rating_desc" },
    { label: "Rating: low \u2192 high", value: "rating_asc" },
    { label: "Most liked", value: "most_liked" }
  ];
  ratingFilterOptions = [
    { label: "All ratings", value: null },
    { label: "5 stars", value: 5 },
    { label: "4 stars", value: 4 },
    { label: "3 stars", value: 3 },
    { label: "2 stars", value: 2 },
    { label: "1 star", value: 1 }
  ];
  onLoadMore() {
    this.facade.loadMore();
  }
  onSortChange(sortBy) {
    this.pendingScroll.set(true);
    this.facade.setSortBy(sortBy);
  }
  onRatingFilterChange(rating) {
    this.pendingScroll.set(true);
    this.facade.setRatingFilter(rating);
  }
  onCreateReview(data) {
    this.facade.createReview(data);
  }
  onUpdateReview(data) {
    this.facade.updateReview(data);
  }
  onReviewsPageChange(event) {
    const pageIndex = event.page ?? 0;
    const rows = event.rows ?? this.facade.pageSize();
    this.facade.goToPage({
      page: pageIndex + 1,
      pageSize: rows
    });
    this.pendingScroll.set(true);
    this.facade.goToPage({ page: pageIndex + 1, pageSize: rows });
  }
  onDeleteReview(reviewId) {
    const myReview = this.facade.myReview();
    const isMyReview = myReview?.id === reviewId;
    const isAdmin = this.facade.isAdmin();
    if (!isMyReview && !isAdmin)
      return;
    this.facade.removeReview(reviewId);
  }
  static \u0275fac = function Reviews_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Reviews)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Reviews, selectors: [["app-ui-reviews"]], viewQuery: function Reviews_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reviewsTop = _t.first);
    }
  }, inputs: { productId: [1, "productId"], initialSummary: [1, "initialSummary"] }, decls: 6, vars: 4, consts: [["reviewsTop", ""], [1, "mx-auto", "w-full", "max-w-3xl", "px-2", "py-2"], [1, "flex", "justify-center", "py-8"], [1, "mb-4", "rounded-lg", "bg-red-50", "p-4", "text-red-800"], [1, "py-12", "text-center", "text-gray-500"], [1, "h-8", "w-8", "animate-spin", "rounded-full", "border-4", "border-purple-600", "border-t-transparent"], [1, "flex", "justify-end", "gap-3", "mb-5"], ["placeholder", "Sort", "optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "options", "ngModel"], ["placeholder", "Rating", "optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "options", "ngModel"], [3, "create", "update", "delete", "isAuthenticated", "isSubmitting", "myReview"], [1, "space-y-4"], [1, "rounded-xl", "border", "border-gray-200", "bg-white", "p-4", "mt-5"], [1, "mt-6", "flex", "justify-center"], [1, "flex", "items-center", "justify-between"], [1, "font-medium", "text-shadow-lg/10", "text-violet-500"], [3, "value", "readonly", "stars"], [1, "mt-2", "text-gray-700"], [1, "mt-3", "flex", "justify-between", "items-end", "gap-3", "text-sm", "text-gray-600"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "flex-col", "items-end"], ["type", "button", 1, "inline-flex", "items-center", "gap-2", "cursor-pointer", 3, "click"], [1, "text-sm", "text-gray-600"], ["name", "thumbs-up-fill", "tone", "default"], ["name", "thumbs-up", "tone", "muted"], ["type", "button", 1, "bg-trasparent", "rounded-lg", "cursor-pointer", "font-bold", "text-lg", "px-2", "py-1", "text-sm", "font-medium", "text-red", "transition", 3, "disabled"], ["type", "button", 1, "bg-trasparent", "rounded-lg", "cursor-pointer", "font-bold", "text-lg", "px-2", "py-1", "text-sm", "font-medium", "text-red", "transition", 3, "click", "disabled"], [3, "onPageChange", "first", "rows", "totalRecords", "rowsPerPageOptions"], [1, "text-lg"], [1, "mt-2", "text-sm"]], template: function Reviews_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, Reviews_Conditional_1_Template, 2, 0, "div", 2);
      \u0275\u0275conditionalCreate(2, Reviews_Conditional_2_Template, 2, 1, "div", 3);
      \u0275\u0275conditionalCreate(3, Reviews_Conditional_3_Template, 5, 7);
      \u0275\u0275conditionalCreate(4, Reviews_Conditional_4_Template, 4, 1)(5, Reviews_Conditional_5_Template, 5, 0, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.facade.isLoading() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.facade.error() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.facade.hasProduct() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.facade.items().length > 0 ? 4 : ctx.facade.isEmpty() ? 5 : -1);
    }
  }, dependencies: [
    ReviewFormComponent,
    UiRatingComponent,
    UiIconComponent,
    Select,
    FormsModule,
    NgControlStatus,
    NgModel,
    Paginator,
    DatePipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Reviews, [{
    type: Component,
    args: [{ selector: "app-ui-reviews", imports: [
      DatePipe,
      ReviewFormComponent,
      UiRatingComponent,
      UiIconComponent,
      Select,
      FormsModule,
      Paginator
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="mx-auto w-full max-w-3xl px-2 py-2">
  @if (facade.isLoading()) {
    <div class="flex justify-center py-8">
      <div
        class="h-8 w-8 animate-spin rounded-full border-4 border-purple-600 border-t-transparent"
      ></div>
    </div>
  }

  @if (facade.error()) {
    <div class="mb-4 rounded-lg bg-red-50 p-4 text-red-800">
      {{ facade.error() }}
    </div>
  }

  @if (facade.hasProduct()) {
    <div class="flex justify-end gap-3 mb-5">
      <p-select
        [options]="sortOptions"
        [ngModel]="facade.sortBy()"
        (ngModelChange)="onSortChange($event)"
        placeholder="Sort"
        optionLabel="label"
        optionValue="value"
      />

      <p-select
        [options]="ratingFilterOptions"
        [ngModel]="facade.ratingFilter()"
        (ngModelChange)="onRatingFilterChange($event)"
        placeholder="Rating"
        optionLabel="label"
        optionValue="value"
      />
    </div>
    <app-review-ui-form
      #reviewsTop
      [isAuthenticated]="authState.isAuthenticated()"
      [isSubmitting]="facade.isSubmitting()"
      [myReview]="facade.myReview()"
      (create)="onCreateReview($event)"
      (update)="onUpdateReview($event)"
      (delete)="onDeleteReview($event)"
    />
  }

  @if (facade.items().length > 0) {
    <div class="space-y-4">
      @for (r of facade.items(); track r.id) {
        <div class="rounded-xl border border-gray-200 bg-white p-4 mt-5">
          <div class="flex items-center justify-between">
            <div class="font-medium text-shadow-lg/10 text-violet-500">{{ r.userName }}</div>
            <app-ui-rating [value]="r.rating" [readonly]="true" [stars]="5" />
          </div>
          <p class="mt-2 text-gray-700">{{ r.text }}</p>

          <div class="mt-3 flex justify-between items-end gap-3 text-sm text-gray-600">
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {{ r.createdAt | date: 'dd.MM.yyyy' }}
            </span>
            <div class="flex flex-col items-end">
              <button
                type="button"
                class="inline-flex items-center gap-2 cursor-pointer"
                (click)="facade.toggleLike(r.id)"
              >
                <span class="text-sm text-gray-600">{{ r.likesCount }}</span>
                @if (r.isLiked) {
                  <app-ui-icon name="thumbs-up-fill" tone="default" />
                } @else {
                  <app-ui-icon name="thumbs-up" tone="muted" />
                }
              </button>
              @if (facade.myReview()?.id === r.id || facade.isAdmin()) {
                <button
                  type="button"
                  (click)="onDeleteReview(r.id)"
                  [disabled]="facade.isSubmitting()"
                  class="bg-trasparent rounded-lg cursor-pointer font-bold text-lg px-2 py-1 text-sm font-medium text-red transition"
                >
                  Delete review
                </button>
              }
            </div>
          </div>
        </div>
      }
    </div>
    @if (facade.total() > facade.pageSize()) {
      <div class="mt-6 flex justify-center">
        <p-paginator
          [first]="(facade.page() - 1) * facade.pageSize()"
          [rows]="facade.pageSize()"
          [totalRecords]="facade.total()"
          [rowsPerPageOptions]="[10, 20, 50]"
          (onPageChange)="onReviewsPageChange($event)"
        />
      </div>
    }
  } @else if (facade.isEmpty()) {
    <div class="py-12 text-center text-gray-500">
      <p class="text-lg">\u041E\u0442\u0437\u044B\u0432\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442</p>
      <p class="mt-2 text-sm">\u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C, \u043A\u0442\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u043E\u0442\u0437\u044B\u0432!</p>
    </div>
  }
</div>
` }]
  }], () => [], { productId: [{ type: Input, args: [{ isSignal: true, alias: "productId", required: true }] }], initialSummary: [{ type: Input, args: [{ isSignal: true, alias: "initialSummary", required: false }] }], reviewsTop: [{
    type: ViewChild,
    args: ["reviewsTop", { read: ElementRef }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Reviews, { className: "Reviews", filePath: "apps/marketplace-web/src/app/features/reviews/ui/reviews/reviews.ts", lineNumber: 38 });
})();

// node_modules/@primeuix/styles/dist/tabs/index.mjs
var style2 = "\n    .p-tabs {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-tablist {\n        display: flex;\n        position: relative;\n        overflow: hidden;\n        background: dt('tabs.tablist.background');\n    }\n\n    .p-tablist-viewport {\n        overflow-x: auto;\n        overflow-y: hidden;\n        scroll-behavior: smooth;\n        scrollbar-width: none;\n        overscroll-behavior: contain auto;\n    }\n\n    .p-tablist-viewport::-webkit-scrollbar {\n        display: none;\n    }\n\n    .p-tablist-tab-list {\n        position: relative;\n        display: flex;\n        border-style: solid;\n        border-color: dt('tabs.tablist.border.color');\n        border-width: dt('tabs.tablist.border.width');\n    }\n\n    .p-tablist-content {\n        flex-grow: 1;\n    }\n\n    .p-tablist-nav-button {\n        all: unset;\n        position: absolute !important;\n        flex-shrink: 0;\n        inset-block-start: 0;\n        z-index: 2;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('tabs.nav.button.background');\n        color: dt('tabs.nav.button.color');\n        width: dt('tabs.nav.button.width');\n        transition:\n            color dt('tabs.transition.duration'),\n            outline-color dt('tabs.transition.duration'),\n            box-shadow dt('tabs.transition.duration');\n        box-shadow: dt('tabs.nav.button.shadow');\n        outline-color: transparent;\n        cursor: pointer;\n    }\n\n    .p-tablist-nav-button:focus-visible {\n        z-index: 1;\n        box-shadow: dt('tabs.nav.button.focus.ring.shadow');\n        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');\n        outline-offset: dt('tabs.nav.button.focus.ring.offset');\n    }\n\n    .p-tablist-nav-button:hover {\n        color: dt('tabs.nav.button.hover.color');\n    }\n\n    .p-tablist-prev-button {\n        inset-inline-start: 0;\n    }\n\n    .p-tablist-next-button {\n        inset-inline-end: 0;\n    }\n\n    .p-tablist-prev-button:dir(rtl),\n    .p-tablist-next-button:dir(rtl) {\n        transform: rotate(180deg);\n    }\n\n    .p-tab {\n        flex-shrink: 0;\n        cursor: pointer;\n        user-select: none;\n        position: relative;\n        border-style: solid;\n        white-space: nowrap;\n        gap: dt('tabs.tab.gap');\n        background: dt('tabs.tab.background');\n        border-width: dt('tabs.tab.border.width');\n        border-color: dt('tabs.tab.border.color');\n        color: dt('tabs.tab.color');\n        padding: dt('tabs.tab.padding');\n        font-weight: dt('tabs.tab.font.weight');\n        transition:\n            background dt('tabs.transition.duration'),\n            border-color dt('tabs.transition.duration'),\n            color dt('tabs.transition.duration'),\n            outline-color dt('tabs.transition.duration'),\n            box-shadow dt('tabs.transition.duration');\n        margin: dt('tabs.tab.margin');\n        outline-color: transparent;\n    }\n\n    .p-tab:not(.p-disabled):focus-visible {\n        z-index: 1;\n        box-shadow: dt('tabs.tab.focus.ring.shadow');\n        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');\n        outline-offset: dt('tabs.tab.focus.ring.offset');\n    }\n\n    .p-tab:not(.p-tab-active):not(.p-disabled):hover {\n        background: dt('tabs.tab.hover.background');\n        border-color: dt('tabs.tab.hover.border.color');\n        color: dt('tabs.tab.hover.color');\n    }\n\n    .p-tab-active {\n        background: dt('tabs.tab.active.background');\n        border-color: dt('tabs.tab.active.border.color');\n        color: dt('tabs.tab.active.color');\n    }\n\n    .p-tabpanels {\n        background: dt('tabs.tabpanel.background');\n        color: dt('tabs.tabpanel.color');\n        padding: dt('tabs.tabpanel.padding');\n        outline: 0 none;\n    }\n\n    .p-tabpanel:focus-visible {\n        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');\n        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');\n        outline-offset: dt('tabs.tabpanel.focus.ring.offset');\n    }\n\n    .p-tablist-active-bar {\n        z-index: 1;\n        display: block;\n        position: absolute;\n        inset-block-end: dt('tabs.active.bar.bottom');\n        height: dt('tabs.active.bar.height');\n        background: dt('tabs.active.bar.background');\n        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);\n    }\n";

// node_modules/primeng/fesm2022/primeng-tabs.mjs
var _c02 = ["*"];
var _c12 = ["previcon"];
var _c2 = ["nexticon"];
var _c3 = ["content"];
var _c4 = ["prevButton"];
var _c5 = ["nextButton"];
var _c6 = ["inkbar"];
var _c7 = ["tabs"];
function TabList_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TabList_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TabList_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.prevIconTemplate || ctx_r1._prevIconTemplate);
  }
}
function TabList_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 10);
  }
}
function TabList_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9, 3);
    \u0275\u0275listener("click", function TabList_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPrevButtonClick());
    });
    \u0275\u0275conditionalCreate(2, TabList_Conditional_0_Conditional_2_Template, 1, 1, "ng-container")(3, TabList_Conditional_0_Conditional_3_Template, 1, 0, ":svg:svg", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("prevButton"));
    \u0275\u0275property("pBind", ctx_r1.ptm("prevButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.prevButtonAriaLabel)("tabindex", ctx_r1.tabindex())("data-pc-group-section", "navigator");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.prevIconTemplate || ctx_r1._prevIconTemplate ? 2 : 3);
  }
}
function TabList_Conditional_8_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TabList_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TabList_Conditional_8_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate);
  }
}
function TabList_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
}
function TabList_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9, 4);
    \u0275\u0275listener("click", function TabList_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNextButtonClick());
    });
    \u0275\u0275conditionalCreate(2, TabList_Conditional_8_Conditional_2_Template, 1, 1, "ng-container")(3, TabList_Conditional_8_Conditional_3_Template, 1, 0, ":svg:svg", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("nextButton"));
    \u0275\u0275property("pBind", ctx_r1.ptm("nextButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.nextButtonAriaLabel)("tabindex", ctx_r1.tabindex())("data-pc-group-section", "navigator");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate ? 2 : 3);
  }
}
function TabPanel_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function TabPanel_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TabPanel_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TabPanel_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultContent_r2 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.content() ? ctx_r0.content() : defaultContent_r2);
  }
}
var classes$4 = {
  root: ({
    instance
  }) => ["p-tabs p-component", {
    "p-tabs-scrollable": instance.scrollable()
  }]
};
var TabsStyle = class _TabsStyle extends BaseStyle {
  name = "tabs";
  style = style2;
  classes = classes$4;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TabsStyle_BaseFactory;
    return function TabsStyle_Factory(__ngFactoryType__) {
      return (\u0275TabsStyle_BaseFactory || (\u0275TabsStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TabsStyle)))(__ngFactoryType__ || _TabsStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TabsStyle,
    factory: _TabsStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsStyle, [{
    type: Injectable
  }], null, null);
})();
var TabsClasses;
(function(TabsClasses2) {
  TabsClasses2["root"] = "p-tabs";
  TabsClasses2["list"] = "p-tablist";
  TabsClasses2["content"] = "p-tablist-content";
  TabsClasses2["tablist"] = "p-tablist-tab-list";
  TabsClasses2["tab"] = "p-tab";
  TabsClasses2["inkbar"] = "p-tablist-active-bar";
  TabsClasses2["button"] = "p-tablist-nav-button";
  TabsClasses2["tabpanels"] = "p-tabpanels";
  TabsClasses2["tabpanel"] = "p-tabs-panel";
})(TabsClasses || (TabsClasses = {}));
var TABS_INSTANCE = new InjectionToken("TABS_INSTANCE");
var Tabs = class _Tabs extends BaseComponent {
  componentName = "Tabs";
  $pcTabs = inject(TABS_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * When specified, enables horizontal and/or vertical scrolling.
   * @type boolean
   * @defaultValue false
   * @group Props
   */
  scrollable = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "scrollable"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * When enabled, tabs are not rendered until activation.
   * @type boolean
   * @defaultValue false
   * @group Props
   */
  lazy = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "lazy"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * When enabled, the focused tab is activated.
   * @type boolean
   * @defaultValue false
   * @group Props
   */
  selectOnFocus = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "selectOnFocus"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * Whether to display navigation buttons in container when scrollable is enabled.
   * @type boolean
   * @defaultValue true
   * @group Props
   */
  showNavigators = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "showNavigators"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * Tabindex of the tab buttons.
   * @type number
   * @defaultValue 0
   * @group Props
   */
  tabindex = input(0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "tabindex"
  } : {}), {
    transform: numberAttribute
  }));
  id = signal(s("pn_id_"), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  _componentStyle = inject(TabsStyle);
  updateValue(newValue) {
    this.value.update(() => newValue);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Tabs_BaseFactory;
    return function Tabs_Factory(__ngFactoryType__) {
      return (\u0275Tabs_BaseFactory || (\u0275Tabs_BaseFactory = \u0275\u0275getInheritedFactory(_Tabs)))(__ngFactoryType__ || _Tabs);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tabs,
    selectors: [["p-tabs"]],
    hostVars: 3,
    hostBindings: function Tabs_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      scrollable: [1, "scrollable"],
      lazy: [1, "lazy"],
      selectOnFocus: [1, "selectOnFocus"],
      showNavigators: [1, "showNavigators"],
      tabindex: [1, "tabindex"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([TabsStyle, {
      provide: TABS_INSTANCE,
      useExisting: _Tabs
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Tabs
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function Tabs_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tabs, [{
    type: Component,
    args: [{
      selector: "p-tabs",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TabsStyle, {
        provide: TABS_INSTANCE,
        useExisting: Tabs
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Tabs
      }],
      host: {
        "[class]": 'cx("root")',
        "[attr.id]": "id()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    scrollable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "scrollable",
        required: false
      }]
    }],
    lazy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "lazy",
        required: false
      }]
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectOnFocus",
        required: false
      }]
    }],
    showNavigators: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showNavigators",
        required: false
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "tabindex",
        required: false
      }]
    }]
  });
})();
var classes$3 = {
  root: ({
    instance
  }) => ["p-tab", {
    "p-tab-active": instance.active(),
    "p-disabled": instance.disabled()
  }]
};
var TabStyle = class _TabStyle extends BaseStyle {
  name = "tab";
  classes = classes$3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TabStyle_BaseFactory;
    return function TabStyle_Factory(__ngFactoryType__) {
      return (\u0275TabStyle_BaseFactory || (\u0275TabStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TabStyle)))(__ngFactoryType__ || _TabStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TabStyle,
    factory: _TabStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabStyle, [{
    type: Injectable
  }], null, null);
})();
var TabClasses;
(function(TabClasses2) {
  TabClasses2["tab"] = "p-tab";
})(TabClasses || (TabClasses = {}));
var classes$2 = {
  root: "p-tablist",
  content: "p-tablist-content p-tablist-viewport",
  tabList: "p-tablist-tab-list",
  activeBar: "p-tablist-active-bar",
  prevButton: "p-tablist-prev-button p-tablist-nav-button",
  nextButton: "p-tablist-next-button p-tablist-nav-button"
};
var TabListStyle = class _TabListStyle extends BaseStyle {
  name = "tablist";
  classes = classes$2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TabListStyle_BaseFactory;
    return function TabListStyle_Factory(__ngFactoryType__) {
      return (\u0275TabListStyle_BaseFactory || (\u0275TabListStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TabListStyle)))(__ngFactoryType__ || _TabListStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TabListStyle,
    factory: _TabListStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabListStyle, [{
    type: Injectable
  }], null, null);
})();
var TabListClasses;
(function(TabListClasses2) {
  TabListClasses2["root"] = "p-tablist";
  TabListClasses2["content"] = "p-tablist-content";
  TabListClasses2["tabList"] = "p-tablist-tab-list";
  TabListClasses2["activeBar"] = "p-tablist-active-bar";
  TabListClasses2["prevButton"] = "p-tablist-prev-button";
  TabListClasses2["nextButton"] = "p-tablist-next-button";
})(TabListClasses || (TabListClasses = {}));
var TABLIST_INSTANCE = new InjectionToken("TABLIST_INSTANCE");
var TabList = class _TabList extends BaseComponent {
  componentName = "TabList";
  $pcTabList = inject(TABLIST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * A template reference variable that represents the previous icon in a UI component.
   * @type {TemplateRef<any> | undefined}
   * @group Templates
   */
  prevIconTemplate;
  /**
   * A template reference variable that represents the next icon in a UI component.
   * @type {TemplateRef<any> | undefined}
   * @group Templates
   */
  nextIconTemplate;
  templates;
  content;
  prevButton;
  nextButton;
  inkbar;
  tabs;
  pcTabs = inject(forwardRef(() => Tabs));
  isPrevButtonEnabled = signal(false, ...ngDevMode ? [{
    debugName: "isPrevButtonEnabled"
  }] : []);
  isNextButtonEnabled = signal(false, ...ngDevMode ? [{
    debugName: "isNextButtonEnabled"
  }] : []);
  resizeObserver;
  showNavigators = computed(() => this.pcTabs.showNavigators(), ...ngDevMode ? [{
    debugName: "showNavigators"
  }] : []);
  tabindex = computed(() => this.pcTabs.tabindex(), ...ngDevMode ? [{
    debugName: "tabindex"
  }] : []);
  scrollable = computed(() => this.pcTabs.scrollable(), ...ngDevMode ? [{
    debugName: "scrollable"
  }] : []);
  _componentStyle = inject(TabListStyle);
  constructor() {
    super();
    effect(() => {
      this.pcTabs.value();
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          this.updateInkBar();
        });
      }
    });
  }
  get prevButtonAriaLabel() {
    return this.config?.translation?.aria?.previous;
  }
  get nextButtonAriaLabel() {
    return this.config?.translation?.aria?.next;
  }
  onAfterViewInit() {
    if (this.showNavigators() && isPlatformBrowser(this.platformId)) {
      this.updateButtonState();
      this.bindResizeObserver();
    }
  }
  _prevIconTemplate;
  _nextIconTemplate;
  onAfterContentInit() {
    this.templates?.forEach((t) => {
      switch (t.getType()) {
        case "previcon":
          this._prevIconTemplate = t.template;
          break;
        case "nexticon":
          this._nextIconTemplate = t.template;
          break;
      }
    });
  }
  onDestroy() {
    this.unbindResizeObserver();
  }
  onScroll(event) {
    this.showNavigators() && this.updateButtonState();
    event.preventDefault();
  }
  onPrevButtonClick() {
    const _content = this.content.nativeElement;
    const width = Rt(_content);
    const pos = Math.abs(_content.scrollLeft) - width;
    const scrollLeft = pos <= 0 ? 0 : pos;
    _content.scrollLeft = V(_content) ? -1 * scrollLeft : scrollLeft;
  }
  onNextButtonClick() {
    const _content = this.content.nativeElement;
    const width = Rt(_content) - this.getVisibleButtonWidths();
    const pos = _content.scrollLeft + width;
    const lastPos = _content.scrollWidth - width;
    const scrollLeft = pos >= lastPos ? lastPos : pos;
    _content.scrollLeft = V(_content) ? -1 * scrollLeft : scrollLeft;
  }
  updateButtonState() {
    const _content = this.content?.nativeElement;
    const _list = this.el?.nativeElement;
    const {
      scrollWidth,
      offsetWidth
    } = _content;
    const scrollLeft = Math.abs(_content.scrollLeft);
    const width = Rt(_content);
    this.isPrevButtonEnabled.set(scrollLeft !== 0);
    this.isNextButtonEnabled.set(_list.offsetWidth >= offsetWidth && Math.abs(scrollLeft - scrollWidth + width) > 1);
  }
  updateInkBar() {
    const _content = this.content?.nativeElement;
    const _inkbar = this.inkbar?.nativeElement;
    const _tabs = this.tabs?.nativeElement;
    const activeTab = z(_content, '[data-pc-name="tab"][data-p-active="true"]');
    if (_inkbar) {
      _inkbar.style.width = v(activeTab) + "px";
      _inkbar.style.left = K(activeTab).left - K(_tabs).left + "px";
    }
  }
  getVisibleButtonWidths() {
    const _prevBtn = this.prevButton?.nativeElement;
    const _nextBtn = this.nextButton?.nativeElement;
    return [_prevBtn, _nextBtn].reduce((acc, el) => el ? acc + Rt(el) : acc, 0);
  }
  bindResizeObserver() {
    this.resizeObserver = new ResizeObserver(() => this.updateButtonState());
    this.resizeObserver.observe(this.el.nativeElement);
  }
  unbindResizeObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.el.nativeElement);
      this.resizeObserver = null;
    }
  }
  static \u0275fac = function TabList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabList,
    selectors: [["p-tablist"]],
    contentQueries: function TabList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c12, 4)(dirIndex, _c2, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.prevIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nextIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TabList_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c3, 5)(_c4, 5)(_c5, 5)(_c6, 5)(_c7, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.prevButton = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nextButton = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inkbar = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabs = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function TabList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([TabListStyle, {
      provide: TABLIST_INSTANCE,
      useExisting: _TabList
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _TabList
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 9,
    vars: 11,
    consts: [["content", ""], ["tabs", ""], ["inkbar", ""], ["prevButton", ""], ["nextButton", ""], ["type", "button", "pRipple", "", 3, "pBind", "class"], [3, "scroll", "pBind"], ["role", "tablist", 3, "pBind"], ["role", "presentation", 3, "pBind"], ["type", "button", "pRipple", "", 3, "click", "pBind"], ["data-p-icon", "chevron-left"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-right"]],
    template: function TabList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, TabList_Conditional_0_Template, 4, 7, "button", 5);
        \u0275\u0275elementStart(1, "div", 6, 0);
        \u0275\u0275listener("scroll", function TabList_Template_div_scroll_1_listener($event) {
          return ctx.onScroll($event);
        });
        \u0275\u0275elementStart(3, "div", 7, 1);
        \u0275\u0275projection(5);
        \u0275\u0275element(6, "span", 8, 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, TabList_Conditional_8_Template, 4, 7, "button", 5);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.showNavigators() && ctx.isPrevButtonEnabled() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("tabList"));
        \u0275\u0275property("pBind", ctx.ptm("tabList"));
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.cx("activeBar"));
        \u0275\u0275property("pBind", ctx.ptm("activeBar"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showNavigators() && ctx.isNextButtonEnabled() ? 8 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, ChevronLeftIcon, ChevronRightIcon, RippleModule, Ripple, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabList, [{
    type: Component,
    args: [{
      selector: "p-tablist",
      standalone: true,
      imports: [CommonModule, ChevronLeftIcon, ChevronRightIcon, RippleModule, SharedModule, BindModule],
      template: `
        @if (showNavigators() && isPrevButtonEnabled()) {
            <button
                type="button"
                #prevButton
                pRipple
                [pBind]="ptm('prevButton')"
                [class]="cx('prevButton')"
                [attr.aria-label]="prevButtonAriaLabel"
                [attr.tabindex]="tabindex()"
                [attr.data-pc-group-section]="'navigator'"
                (click)="onPrevButtonClick()"
            >
                @if (prevIconTemplate || _prevIconTemplate) {
                    <ng-container *ngTemplateOutlet="prevIconTemplate || _prevIconTemplate" />
                } @else {
                    <svg data-p-icon="chevron-left" />
                }
            </button>
        }
        <div #content [pBind]="ptm('content')" [class]="cx('content')" (scroll)="onScroll($event)">
            <div #tabs [pBind]="ptm('tabList')" [class]="cx('tabList')" role="tablist">
                <ng-content />
                <span #inkbar [pBind]="ptm('activeBar')" role="presentation" [class]="cx('activeBar')"></span>
            </div>
        </div>
        @if (showNavigators() && isNextButtonEnabled()) {
            <button
                type="button"
                #nextButton
                pRipple
                [pBind]="ptm('nextButton')"
                [class]="cx('nextButton')"
                [attr.aria-label]="nextButtonAriaLabel"
                [attr.tabindex]="tabindex()"
                [attr.data-pc-group-section]="'navigator'"
                (click)="onNextButtonClick()"
            >
                @if (nextIconTemplate || _nextIconTemplate) {
                    <ng-container *ngTemplateOutlet="nextIconTemplate || _nextIconTemplate" />
                } @else {
                    <svg data-p-icon="chevron-right" />
                }
            </button>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")'
      },
      providers: [TabListStyle, {
        provide: TABLIST_INSTANCE,
        useExisting: TabList
      }, {
        provide: PARENT_INSTANCE,
        useExisting: TabList
      }],
      hostDirectives: [Bind]
    }]
  }], () => [], {
    prevIconTemplate: [{
      type: ContentChild,
      args: ["previcon", {
        descendants: false
      }]
    }],
    nextIconTemplate: [{
      type: ContentChild,
      args: ["nexticon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    prevButton: [{
      type: ViewChild,
      args: ["prevButton"]
    }],
    nextButton: [{
      type: ViewChild,
      args: ["nextButton"]
    }],
    inkbar: [{
      type: ViewChild,
      args: ["inkbar"]
    }],
    tabs: [{
      type: ViewChild,
      args: ["tabs"]
    }]
  });
})();
var TAB_INSTANCE = new InjectionToken("TAB_INSTANCE");
var Tab = class _Tab extends BaseComponent {
  componentName = "Tab";
  $pcTab = inject(TAB_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Value of tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : []);
  /**
   * Whether the tab is disabled.
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: booleanAttribute
  }));
  pcTabs = inject(forwardRef(() => Tabs));
  pcTabList = inject(forwardRef(() => TabList));
  el = inject(ElementRef);
  _componentStyle = inject(TabStyle);
  ripple = computed(() => this.config.ripple(), ...ngDevMode ? [{
    debugName: "ripple"
  }] : []);
  id = computed(() => `${this.pcTabs.id()}_tab_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  ariaControls = computed(() => `${this.pcTabs.id()}_tabpanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : []);
  active = computed(() => k(this.pcTabs.value(), this.value()), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  tabindex = computed(() => this.disabled() ? -1 : this.active() ? this.pcTabs.tabindex() : -1, ...ngDevMode ? [{
    debugName: "tabindex"
  }] : []);
  mutationObserver;
  onFocus(event) {
    if (!this.disabled()) {
      this.pcTabs.selectOnFocus() && this.changeActiveValue();
    }
  }
  onClick(event) {
    if (!this.disabled()) {
      this.changeActiveValue();
    }
  }
  onKeyDown(event) {
    switch (event.code) {
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Enter":
      case "NumpadEnter":
      case "Space":
        this.onEnterKey(event);
        break;
      default:
        break;
    }
    event.stopPropagation();
  }
  onAfterViewInit() {
    this.bindMutationObserver();
  }
  onArrowRightKey(event) {
    const nextTab = this.findNextTab(event.currentTarget);
    nextTab ? this.changeFocusedTab(event, nextTab) : this.onHomeKey(event);
    event.preventDefault();
  }
  onArrowLeftKey(event) {
    const prevTab = this.findPrevTab(event.currentTarget);
    prevTab ? this.changeFocusedTab(event, prevTab) : this.onEndKey(event);
    event.preventDefault();
  }
  onHomeKey(event) {
    const firstTab = this.findFirstTab();
    this.changeFocusedTab(event, firstTab);
    event.preventDefault();
  }
  onEndKey(event) {
    const lastTab = this.findLastTab();
    this.changeFocusedTab(event, lastTab);
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.findLastTab());
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(this.findFirstTab());
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.disabled()) {
      this.changeActiveValue();
    }
    event.preventDefault();
  }
  findNextTab(tabElement, selfCheck = false) {
    const element = selfCheck ? tabElement : tabElement.nextElementSibling;
    return element ? Q(element, "data-p-disabled") || Q(element, "data-pc-section") === "activebar" ? this.findNextTab(element) : element : null;
  }
  findPrevTab(tabElement, selfCheck = false) {
    const element = selfCheck ? tabElement : tabElement.previousElementSibling;
    return element ? Q(element, "data-p-disabled") || Q(element, "data-pc-section") === "activebar" ? this.findPrevTab(element) : element : null;
  }
  findFirstTab() {
    return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild, true);
  }
  findLastTab() {
    return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild, true);
  }
  changeActiveValue() {
    this.pcTabs.updateValue(this.value());
  }
  changeFocusedTab(event, element) {
    bt(element);
    this.scrollInView(element);
  }
  scrollInView(element) {
    element?.scrollIntoView?.({
      block: "nearest"
    });
  }
  bindMutationObserver() {
    if (isPlatformBrowser(this.platformId)) {
      this.mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          if (this.active()) {
            this.pcTabList?.updateInkBar();
          }
        });
      });
      this.mutationObserver.observe(this.el.nativeElement, {
        childList: true,
        characterData: true,
        subtree: true
      });
    }
  }
  unbindMutationObserver() {
    this.mutationObserver?.disconnect();
  }
  onDestroy() {
    if (this.mutationObserver) {
      this.unbindMutationObserver();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Tab_BaseFactory;
    return function Tab_Factory(__ngFactoryType__) {
      return (\u0275Tab_BaseFactory || (\u0275Tab_BaseFactory = \u0275\u0275getInheritedFactory(_Tab)))(__ngFactoryType__ || _Tab);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tab,
    selectors: [["p-tab"]],
    hostVars: 10,
    hostBindings: function Tab_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function Tab_focus_HostBindingHandler($event) {
          return ctx.onFocus($event);
        })("click", function Tab_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown", function Tab_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id())("aria-controls", ctx.ariaControls())("role", "tab")("aria-selected", ctx.active())("aria-disabled", ctx.disabled())("data-p-disabled", ctx.disabled())("data-p-active", ctx.active())("tabindex", ctx.tabindex());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: [1, "value"],
      disabled: [1, "disabled"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([TabStyle, {
      provide: TAB_INSTANCE,
      useExisting: _Tab
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Tab
    }]), \u0275\u0275HostDirectivesFeature([Ripple, Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function Tab_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tab, [{
    type: Component,
    args: [{
      selector: "p-tab",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.id]": "id()",
        "[attr.aria-controls]": "ariaControls()",
        "[attr.role]": '"tab"',
        "[attr.aria-selected]": "active()",
        "[attr.aria-disabled]": "disabled()",
        "[attr.data-p-disabled]": "disabled()",
        "[attr.data-p-active]": "active()",
        "[attr.tabindex]": "tabindex()"
      },
      hostDirectives: [Ripple, Bind],
      providers: [TabStyle, {
        provide: TAB_INSTANCE,
        useExisting: Tab
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Tab
      }]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus", ["$event"]]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var classes$1 = {
  root: ({
    instance
  }) => ["p-tabpanel", {
    "p-tabpanel-active": instance.active()
  }]
};
var TabPanelStyle = class _TabPanelStyle extends BaseStyle {
  name = "tabpanel";
  classes = classes$1;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TabPanelStyle_BaseFactory;
    return function TabPanelStyle_Factory(__ngFactoryType__) {
      return (\u0275TabPanelStyle_BaseFactory || (\u0275TabPanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TabPanelStyle)))(__ngFactoryType__ || _TabPanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TabPanelStyle,
    factory: _TabPanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanelStyle, [{
    type: Injectable
  }], null, null);
})();
var TabPanelClasses;
(function(TabPanelClasses2) {
  TabPanelClasses2["root"] = "p-tabpanel";
})(TabPanelClasses || (TabPanelClasses = {}));
var TABPANEL_INSTANCE = new InjectionToken("TABPANEL_INSTANCE");
var TabPanel = class _TabPanel extends BaseComponent {
  componentName = "TabPanel";
  $pcTabPanel = inject(TABPANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  pcTabs = inject(forwardRef(() => Tabs));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * When enabled, tab is not rendered until activation.
   * @type boolean
   * @defaultValue false
   * @group Props
   */
  lazy = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "lazy"
  } : {}), {
    transform: booleanAttribute
  }));
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * Template for initializing complex content when lazy is enabled.
   * @group Templates
   */
  content = contentChild("content", ...ngDevMode ? [{
    debugName: "content"
  }] : []);
  id = computed(() => `${this.pcTabs.id()}_tabpanel_${this.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  ariaLabelledby = computed(() => `${this.pcTabs.id()}_tab_${this.value()}`, ...ngDevMode ? [{
    debugName: "ariaLabelledby"
  }] : []);
  active = computed(() => k(this.pcTabs.value(), this.value()), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  isLazyEnabled = computed(() => this.pcTabs.lazy() || this.lazy(), ...ngDevMode ? [{
    debugName: "isLazyEnabled"
  }] : []);
  hasBeenRendered = false;
  shouldRender = computed(() => {
    if (!this.isLazyEnabled() || this.hasBeenRendered) {
      return true;
    }
    if (this.active()) {
      this.hasBeenRendered = true;
      return true;
    }
    return false;
  }, ...ngDevMode ? [{
    debugName: "shouldRender"
  }] : []);
  _componentStyle = inject(TabPanelStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TabPanel_BaseFactory;
    return function TabPanel_Factory(__ngFactoryType__) {
      return (\u0275TabPanel_BaseFactory || (\u0275TabPanel_BaseFactory = \u0275\u0275getInheritedFactory(_TabPanel)))(__ngFactoryType__ || _TabPanel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabPanel,
    selectors: [["p-tabpanel"]],
    contentQueries: function TabPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.content, _c3, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    hostVars: 7,
    hostBindings: function TabPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("hidden", !ctx.active());
        \u0275\u0275attribute("id", ctx.id())("role", "tabpanel")("aria-labelledby", ctx.ariaLabelledby())("data-p-active", ctx.active());
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      lazy: [1, "lazy"],
      value: [1, "value"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([TabPanelStyle, {
      provide: TABPANEL_INSTANCE,
      useExisting: _TabPanel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _TabPanel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 3,
    vars: 1,
    consts: [["defaultContent", ""], [4, "ngTemplateOutlet"]],
    template: function TabPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, TabPanel_ng_template_0_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(2, TabPanel_Conditional_2_Template, 1, 1, "ng-container");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.shouldRender() ? 2 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanel, [{
    type: Component,
    args: [{
      selector: "p-tabpanel",
      standalone: true,
      imports: [NgTemplateOutlet, BindModule],
      template: `
        <ng-template #defaultContent>
            <ng-content />
        </ng-template>

        @if (shouldRender()) {
            <ng-container *ngTemplateOutlet="content() ? content() : defaultContent" />
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TabPanelStyle, {
        provide: TABPANEL_INSTANCE,
        useExisting: TabPanel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: TabPanel
      }],
      host: {
        "[class]": 'cx("root")',
        "[attr.id]": "id()",
        "[attr.role]": '"tabpanel"',
        "[attr.aria-labelledby]": "ariaLabelledby()",
        "[attr.data-p-active]": "active()",
        "[hidden]": "!active()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    lazy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "lazy",
        required: false
      }]
    }],
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    content: [{
      type: ContentChild,
      args: ["content", {
        isSignal: true
      }]
    }]
  });
})();
var classes2 = {
  root: "p-tabpanels"
};
var TabPanelsStyle = class _TabPanelsStyle extends BaseStyle {
  name = "tabpanels";
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TabPanelsStyle_BaseFactory;
    return function TabPanelsStyle_Factory(__ngFactoryType__) {
      return (\u0275TabPanelsStyle_BaseFactory || (\u0275TabPanelsStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TabPanelsStyle)))(__ngFactoryType__ || _TabPanelsStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TabPanelsStyle,
    factory: _TabPanelsStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanelsStyle, [{
    type: Injectable
  }], null, null);
})();
var TabPanelsClasses;
(function(TabPanelsClasses2) {
  TabPanelsClasses2["root"] = "p-tabpanels";
})(TabPanelsClasses || (TabPanelsClasses = {}));
var TABPANELS_INSTANCE = new InjectionToken("TABPANELS_INSTANCE");
var TabPanels = class _TabPanels extends BaseComponent {
  componentName = "TabPanels";
  $pcTabPanels = inject(TABPANELS_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(TabPanelsStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TabPanels_BaseFactory;
    return function TabPanels_Factory(__ngFactoryType__) {
      return (\u0275TabPanels_BaseFactory || (\u0275TabPanels_BaseFactory = \u0275\u0275getInheritedFactory(_TabPanels)))(__ngFactoryType__ || _TabPanels);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _TabPanels,
    selectors: [["p-tabpanels"]],
    hostVars: 3,
    hostBindings: function TabPanels_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "presentation");
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([TabPanelsStyle, {
      provide: TABPANELS_INSTANCE,
      useExisting: _TabPanels
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _TabPanels
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function TabPanels_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPanels, [{
    type: Component,
    args: [{
      selector: "p-tabpanels",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("root")',
        "[attr.role]": '"presentation"'
      },
      providers: [TabPanelsStyle, {
        provide: TABPANELS_INSTANCE,
        useExisting: TabPanels
      }, {
        provide: PARENT_INSTANCE,
        useExisting: TabPanels
      }],
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var TabsModule = class _TabsModule {
  static \u0275fac = function TabsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TabsModule,
    imports: [Tabs, TabPanels, TabPanel, TabList, Tab, BindModule],
    exports: [Tabs, TabPanels, TabPanel, TabList, Tab, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Tabs, TabPanels, TabPanel, TabList, Tab, BindModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsModule, [{
    type: NgModule,
    args: [{
      imports: [Tabs, TabPanels, TabPanel, TabList, Tab, BindModule],
      exports: [Tabs, TabPanels, TabPanel, TabList, Tab, BindModule]
    }]
  }], null, null);
})();

// apps/marketplace-web/src/app/features/product-detail/pages/product-detail-page/product-detail-page.ts
var _c03 = ["reviewsSection"];
var _forTrack03 = ($index, $item) => $item.image;
var _forTrack1 = ($index, $item) => $item.value;
function ProductDetailPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4);
    \u0275\u0275element(2, "div", 5);
    \u0275\u0275elementStart(3, "p", 6);
    \u0275\u0275text(4, "Loading product...");
    \u0275\u0275elementEnd()()();
  }
}
function ProductDetailPage_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 7);
    \u0275\u0275element(3, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h2", 9);
    \u0275\u0275text(5, "Error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 10);
    \u0275\u0275text(9, " Back to Products ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.facade.error());
  }
}
function ProductDetailPage_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "img", 87);
    \u0275\u0275pipe(2, "imageUrl");
    \u0275\u0275listener("error", function ProductDetailPage_Conditional_3_Conditional_5_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onImageError($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r4 = ctx;
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 2, img_r4.image), \u0275\u0275sanitizeUrl)("alt", img_r4.alt);
  }
}
function ProductDetailPage_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("mouseenter", function ProductDetailPage_Conditional_3_For_9_Template_button_mouseenter_0_listener() {
      const $index_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onThumbHover($index_r6));
    })("focus", function ProductDetailPage_Conditional_3_For_9_Template_button_focus_0_listener() {
      const $index_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onThumbFocus($index_r6));
    })("click", function ProductDetailPage_Conditional_3_For_9_Template_button_click_0_listener() {
      const $index_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onThumbClick($index_r6));
    });
    \u0275\u0275element(1, "img", 89);
    \u0275\u0275pipe(2, "imageUrl");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r7 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-transparent", ctx_r0.facade.activeImageIndex() === $index_r6)("border-gray-200", ctx_r0.facade.activeImageIndex() !== $index_r6);
    \u0275\u0275attribute("aria-current", ctx_r0.facade.activeImageIndex() === $index_r6 ? "true" : null)("aria-label", "Open image " + ($index_r6 + 1));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", ctx_r0.facade.activeImageIndex() !== $index_r6)("group-hover:opacity-100", ctx_r0.facade.activeImageIndex() !== $index_r6);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 12, img_r7.image), \u0275\u0275sanitizeUrl)("alt", img_r7.alt);
  }
}
function ProductDetailPage_Conditional_3_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function ProductDetailPage_Conditional_3_For_44_Template_button_click_0_listener() {
      const size_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.facade.selectSize(size_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-purple-600", ctx_r0.facade.selectedSize() === size_r9)("bg-purple-600", ctx_r0.facade.selectedSize() === size_r9)("text-white", ctx_r0.facade.selectedSize() === size_r9)("border-gray-300", ctx_r0.facade.selectedSize() !== size_r9)("text-gray-900", ctx_r0.facade.selectedSize() !== size_r9)("hover:border-purple-400", ctx_r0.facade.selectedSize() !== size_r9)("hover:bg-purple-50", ctx_r0.facade.selectedSize() !== size_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r9, " ");
  }
}
function ProductDetailPage_Conditional_3_For_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function ProductDetailPage_Conditional_3_For_50_Template_button_click_0_listener() {
      const color_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.facade.selectColor(color_r11));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", color_r11);
    \u0275\u0275classProp("ring-2", ctx_r0.facade.selectedColor() === color_r11)("ring-purple-500", ctx_r0.facade.selectedColor() === color_r11);
    \u0275\u0275property("title", color_r11);
  }
}
function ProductDetailPage_Conditional_3_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Select size & color");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailPage_Conditional_3_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Select size");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailPage_Conditional_3_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Select color");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailPage_Conditional_3_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Add to cart");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailPage_Conditional_3_For_88_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r12.title);
  }
}
function ProductDetailPage_Conditional_3_For_88_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 93);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r12.content);
  }
}
function ProductDetailPage_Conditional_3_For_88_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 93);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r12.content);
  }
}
function ProductDetailPage_Conditional_3_For_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tab", 63);
    \u0275\u0275conditionalCreate(1, ProductDetailPage_Conditional_3_For_88_Case_1_Template, 2, 1, "span", 92)(2, ProductDetailPage_Conditional_3_For_88_Case_2_Template, 4, 2)(3, ProductDetailPage_Conditional_3_For_88_Case_3_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const tab_r12 = ctx.$implicit;
    \u0275\u0275property("value", tab_r12.value);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_14_0 = tab_r12.value) === 0 ? 1 : tmp_14_0 === 1 ? 2 : tmp_14_0 === 2 ? 3 : -1);
  }
}
function ProductDetailPage_Conditional_3_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-ui-reviews", 73);
  }
  if (rf & 2) {
    const prod_r13 = ctx;
    \u0275\u0275property("productId", prod_r13.id)("initialSummary", prod_r13.ratingStats);
  }
}
function ProductDetailPage_Conditional_3_Conditional_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-questions-section", 74);
  }
  if (rf & 2) {
    \u0275\u0275property("productId", ctx.id);
  }
}
function ProductDetailPage_Conditional_3_Conditional_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 94);
    \u0275\u0275pipe(1, "imageUrl");
    \u0275\u0275listener("error", function ProductDetailPage_Conditional_3_Conditional_135_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onImageError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r15 = ctx;
    \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 2, img_r15.image), \u0275\u0275sanitizeUrl)("alt", img_r15.alt);
  }
}
function ProductDetailPage_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "div", 14);
    \u0275\u0275conditionalCreate(5, ProductDetailPage_Conditional_3_Conditional_5_Template, 3, 4, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "div", 17);
    \u0275\u0275repeaterCreate(8, ProductDetailPage_Conditional_3_For_9_Template, 3, 14, "button", 18, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19)(11, "button", 20);
    \u0275\u0275listener("click", function ProductDetailPage_Conditional_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.facade.prevImage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 21);
    \u0275\u0275element(13, "path", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "button", 23);
    \u0275\u0275listener("click", function ProductDetailPage_Conditional_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.facade.nextImage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 21);
    \u0275\u0275element(16, "path", 24);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 25);
    \u0275\u0275element(18, "app-ui-breadcrumb", 26);
    \u0275\u0275elementStart(19, "h1", 27);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 28)(22, "div", 29);
    \u0275\u0275element(23, "app-ui-rating", 30);
    \u0275\u0275elementStart(24, "span", 31);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 32);
    \u0275\u0275listener("click", function ProductDetailPage_Conditional_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.scrollToReviews());
    });
    \u0275\u0275elementStart(28, "div", 33);
    \u0275\u0275text(29, "reviews");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 34);
    \u0275\u0275element(31, "path", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div")(33, "div", 36)(34, "div", 37)(35, "span");
    \u0275\u0275text(36, "Select Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "a", 38)(38, "span");
    \u0275\u0275text(39, "Size Guide");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 39);
    \u0275\u0275element(41, "path", 40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 41);
    \u0275\u0275repeaterCreate(43, ProductDetailPage_Conditional_3_For_44_Template, 2, 15, "button", 42, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div")(46, "p", 43);
    \u0275\u0275text(47, "Colour Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 44);
    \u0275\u0275repeaterCreate(49, ProductDetailPage_Conditional_3_For_50_Template, 1, 7, "button", 45, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 46)(52, "button", 47);
    \u0275\u0275listener("click", function ProductDetailPage_Conditional_3_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.facade.addToCart());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 48);
    \u0275\u0275element(54, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(55, ProductDetailPage_Conditional_3_Conditional_55_Template, 2, 0, "span")(56, ProductDetailPage_Conditional_3_Conditional_56_Template, 2, 0, "span")(57, ProductDetailPage_Conditional_3_Conditional_57_Template, 2, 0, "span")(58, ProductDetailPage_Conditional_3_Conditional_58_Template, 2, 0, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(59, "button", 50);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 51)(62, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(63, "svg", 53);
    \u0275\u0275element(64, "circle", 54)(65, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, " Secure payment ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(67, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(68, "svg", 53);
    \u0275\u0275element(69, "circle", 54)(70, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " Size & Fit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(72, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(73, "svg", 53);
    \u0275\u0275element(74, "circle", 54)(75, "path", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " Free shipping ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(77, "div", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(78, "svg", 53);
    \u0275\u0275element(79, "circle", 54)(80, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, " Free Returns ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(82, "div", 59)(83, "div", 60)(84, "div", 61)(85, "p-tabs", 62);
    \u0275\u0275listener("valueChange", function ProductDetailPage_Conditional_3_Template_p_tabs_valueChange_85_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTabChange($event));
    });
    \u0275\u0275elementStart(86, "p-tablist");
    \u0275\u0275repeaterCreate(87, ProductDetailPage_Conditional_3_For_88_Template, 4, 2, "p-tab", 63, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "p-tabpanels")(90, "p-tabpanel", 63)(91, "div", 64)(92, "div", 65)(93, "p", 66);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 67)(96, "div", 68)(97, "p");
    \u0275\u0275text(98, "fabric");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "p");
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 69)(102, "p");
    \u0275\u0275text(103, "pattern");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p");
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 70)(107, "p");
    \u0275\u0275text(108, "fit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "p");
    \u0275\u0275text(110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div", 71)(112, "p");
    \u0275\u0275text(113, "neck");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "p");
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 72)(117, "p");
    \u0275\u0275text(118, "sleeve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "p");
    \u0275\u0275text(120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div")(122, "p");
    \u0275\u0275text(123, "style");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "p");
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(126, "p-tabpanel", 63)(127, "div", 64, 0);
    \u0275\u0275conditionalCreate(129, ProductDetailPage_Conditional_3_Conditional_129_Template, 1, 2, "app-ui-reviews", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "p-tabpanel", 63);
    \u0275\u0275conditionalCreate(131, ProductDetailPage_Conditional_3_Conditional_131_Template, 1, 1, "app-product-questions-section", 74);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(132, "div", 60)(133, "div", 75)(134, "div", 76);
    \u0275\u0275conditionalCreate(135, ProductDetailPage_Conditional_3_Conditional_135_Template, 2, 4, "img", 77);
    \u0275\u0275element(136, "div", 78);
    \u0275\u0275elementStart(137, "button", 79)(138, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(139, "svg", 81);
    \u0275\u0275element(140, "circle", 82)(141, "path", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(142, "span", 84);
    \u0275\u0275text(143, " 1.00 M ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "div", 85)(145, "p", 86);
    \u0275\u0275text(146);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_33_0;
    let tmp_35_0;
    let tmp_36_0;
    const prod_r16 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_3_0 = ctx_r0.facade.activeImage()) ? 5 : -1, tmp_3_0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.facade.galleryImages());
    \u0275\u0275advance(10);
    \u0275\u0275property("items", ctx_r0.breadcrumbItems());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", prod_r16.title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r0.facade.rantingAvg())("readonly", true)("stars", 5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 37, ctx_r0.facade.rantingAvg(), "1.1-1"));
    \u0275\u0275advance(18);
    \u0275\u0275repeater(prod_r16.sizes);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.facade.availableColors());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-purple-600", ctx_r0.facade.canAddToCart())("text-white", ctx_r0.facade.canAddToCart())("hover:bg-purple-700", ctx_r0.facade.canAddToCart())("bg-gray-300", !ctx_r0.facade.canAddToCart())("text-gray-500", !ctx_r0.facade.canAddToCart())("cursor-not-allowed", !ctx_r0.facade.canAddToCart());
    \u0275\u0275property("disabled", !ctx_r0.facade.canAddToCart());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.facade.selectedSize() && !ctx_r0.facade.selectedColor() ? 55 : !ctx_r0.facade.selectedSize() ? 56 : !ctx_r0.facade.selectedColor() ? 57 : 58);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" $", prod_r16.price, " ");
    \u0275\u0275advance(25);
    \u0275\u0275property("value", ctx_r0.activeTabIndex());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.tabss());
    \u0275\u0275advance(3);
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.tabss()[0].content, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(prod_r16.fabric);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(prod_r16.pattern);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(prod_r16.fit);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(prod_r16.neck);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(prod_r16.sleeve);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(prod_r16.brand);
    \u0275\u0275advance();
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_33_0 = ctx_r0.facade.product()) ? 129 : -1, tmp_33_0);
    \u0275\u0275advance();
    \u0275\u0275property("value", 2);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_35_0 = ctx_r0.facade.product()) ? 131 : -1, tmp_35_0);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_36_0 = ctx_r0.facade.activeImage()) ? 135 : -1, tmp_36_0);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(prod_r16.title);
  }
}
var ProductDetailPage = class _ProductDetailPage {
  route = inject(ActivatedRoute);
  facade = inject(ProductDetailFacade);
  facadeQuestion = inject(ProductQuestionFacade);
  destroyRef = inject(DestroyRef);
  reviewsSection = viewChild("reviewsSection", ...ngDevMode ? [{ debugName: "reviewsSection" }] : []);
  selectedImageIndex = signal(0, ...ngDevMode ? [{ debugName: "selectedImageIndex" }] : []);
  imageErrorHandled = signal(false, ...ngDevMode ? [{ debugName: "imageErrorHandled" }] : []);
  selectedSize = signal(null, ...ngDevMode ? [{ debugName: "selectedSize" }] : []);
  selectedColor = signal(null, ...ngDevMode ? [{ debugName: "selectedColor" }] : []);
  activeTabIndex = signal(0, ...ngDevMode ? [{ debugName: "activeTabIndex" }] : []);
  productId = toSignal(this.route.params.pipe(map((params) => params["id"])));
  hoverTimer = null;
  lastHoverIndex = null;
  canAddToCart = computed(() => {
    return this.selectedSize() !== null && this.selectedColor() !== null;
  }, ...ngDevMode ? [{ debugName: "canAddToCart" }] : []);
  isPointerFine() {
    return window.matchMedia?.("(hover: hover) and (pointer: fine)").matches ?? true;
  }
  onThumbHover(index) {
    if (!this.isPointerFine())
      return;
    this.scheduleActivate(index);
  }
  onThumbFocus(index) {
    this.activate(index);
  }
  onThumbClick(index) {
    this.activate(index);
  }
  scheduleActivate(index) {
    if (this.lastHoverIndex === index)
      return;
    this.lastHoverIndex = index;
    if (this.hoverTimer !== null)
      window.clearTimeout(this.hoverTimer);
    this.hoverTimer = window.setTimeout(() => {
      this.activate(index);
      this.hoverTimer = null;
    }, 60);
  }
  activate(index) {
    this.facade.selectImage(index);
  }
  tabss = computed(() => {
    return [
      {
        title: "Description",
        value: 0,
        content: ""
      },
      {
        title: "Reviews",
        value: 1,
        content: this.facade.rantingCount()
      },
      {
        title: "Q&A",
        value: 2,
        content: this.facadeQuestion.total()
      }
    ];
  }, ...ngDevMode ? [{ debugName: "tabss" }] : []);
  constructor() {
    effect(() => {
      const id = this.productId();
      if (id) {
        this.facade.load(id);
      }
    });
    this.destroyRef.onDestroy(() => {
      if (this.hoverTimer !== null)
        window.clearTimeout(this.hoverTimer);
    });
  }
  previousImage() {
    this.facade.prevImage();
  }
  nextImage() {
    this.facade.nextImage();
  }
  scrollToReviews() {
    this.onTabChange(1);
    setTimeout(() => {
      const elem = this.reviewsSection()?.nativeElement;
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 100);
  }
  breadcrumbItems = computed(() => {
    const product = this.facade.product();
    if (!product)
      return [];
    const items = [{ label: "Shop", routerLink: "/catalog" }];
    if (product.category) {
      items.push({
        label: product.category,
        routerLink: "/catalog",
        queryParams: { category: product.category }
      });
    }
    if (product.productType) {
      items.push({
        label: product.productType,
        routerLink: "/catalog",
        queryParams: { category: product.category, productType: product.productType },
        isActive: true
      });
    }
    return items;
  }, ...ngDevMode ? [{ debugName: "breadcrumbItems" }] : []);
  onTabChange(value) {
    if (typeof value === "number") {
      this.activeTabIndex.set(value);
    }
  }
  onImageError(event) {
    if (this.imageErrorHandled())
      return;
    const img = event.target;
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
    this.imageErrorHandled.set(true);
  }
  static \u0275fac = function ProductDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetailPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailPage, selectors: [["app-detail"]], viewQuery: function ProductDetailPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.reviewsSection, _c03, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, decls: 4, vars: 1, consts: [["reviewsSection", ""], [1, "container", "mx-auto", "px-4", "py-8"], [1, "flex", "items-center", "justify-center", "min-h-100"], [1, "container", "mx-auto", "px-4", "py-10"], [1, "text-center"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-purple-600", "mx-auto", "mb-4"], [1, "text-gray-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-red-500", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-2xl", "font-bold", "text-gray-800", "mb-2"], ["routerLink", "/products", 1, "mt-4", "inline-block", "px-6", "py-2", "bg-purple-600", "text-white", "rounded-lg", "hover:bg-purple-700", "transition-colors"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-10"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], [1, "flex", "flex-col", "gap-4", "sm:flex-row"], [1, "order-1", "flex-1", "sm:order-2"], [1, "w-full", "max-w-xl", "aspect-4/5", "overflow-hidden", "rounded-3xl", "border", "border-gray-100"], [1, "order-2", "flex", "gap-3", "sm:order-1", "sm:flex-col"], [1, "flex", "gap-3", "overflow-x-auto", "sm:flex-col", "sm:overflow-visible"], ["type", "button", 1, "group", "shrink-0", "rounded-lg", "border-2", "transition-all", "duration-200", "focus:outline-none", "focus-visible:ring-2", "focus-visible:ring-purple-600", "focus-visible:ring-offset-2", 3, "border-transparent", "border-gray-200"], [1, "mt-2", "flex", "items-center", "justify-center", "gap-2", "sm:flex-col", "sm:gap-2"], ["type", "button", "aria-label", "Previous image", 1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "border-2", "border-gray-300", "bg-white", "transition-all", "duration-200", "hover:border-purple-600", "hover:bg-purple-50", "active:scale-95", "focus:outline-none", "focus-visible:ring-2", "focus-visible:ring-purple-600", "focus-visible:ring-offset-2", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "h-5", "w-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 15l7-7 7 7"], ["type", "button", "aria-label", "Next image", 1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "border-2", "border-gray-300", "bg-white", "transition-all", "duration-200", "hover:border-purple-600", "hover:bg-purple-50", "active:scale-95", "focus:outline-none", "focus-visible:ring-2", "focus-visible:ring-purple-600", "focus-visible:ring-offset-2", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "space-y-6"], [3, "items"], [1, "text-4xl", "font-coresans", "font-bold", "text-gray-900", "mt-8"], [1, "flex", "text-sm"], [1, "flex", "items-end"], [3, "value", "readonly", "stars"], [1, "text-gray-500", "font-family", "pl-3", "font-medium", "text-xl"], ["type", "button", 1, "flex", "items-center", "ml-4", "cursor-pointer", "hover:opacity-80", "transition-opacity", 3, "click"], [1, "mr-2", "text-lg", "font-family", "color-text-gray"], ["width", "22", "height", "20", "viewBox", "0 0 22 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.75 5C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5V5ZM14.75 6.5C15.1642 6.5 15.5 6.16421 15.5 5.75C15.5 5.33579 15.1642 5 14.75 5V6.5ZM6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5V9ZM10.75 10.5C11.1642 10.5 11.5 10.1642 11.5 9.75C11.5 9.33579 11.1642 9 10.75 9V10.5ZM20.532 13.658L21.2003 13.9985V13.9985L20.532 13.658ZM19.658 14.532L19.9985 15.2003V15.2003L19.658 14.532ZM19.658 0.967987L19.9985 0.299732L19.9985 0.299732L19.658 0.967987ZM20.532 1.84202L21.2003 1.50153V1.50152L20.532 1.84202ZM1.84202 0.967987L2.18251 1.63624L2.18251 1.63624L1.84202 0.967987ZM0.967987 1.84202L1.63624 2.18251L1.63624 2.18251L0.967987 1.84202ZM1.95734 18.1361L2.39003 18.7487L2.39011 18.7486L1.95734 18.1361ZM5.91989 15.3365L5.48712 14.7239H5.48712L5.91989 15.3365ZM0.840271 18.2276L1.45486 17.7977H1.45486L0.840271 18.2276ZM1.85335 18.1983L1.5183 17.5273L1.51829 17.5273L1.85335 18.1983ZM1.17692 18.4356L1.0673 19.1776H1.0673L1.17692 18.4356ZM1.91983 18.162L1.51547 17.5303L1.51536 17.5304L1.91983 18.162ZM1.89376 18.1776L1.5285 17.5225L1.52845 17.5225L1.89376 18.1776ZM7.01828 14.784L7.15589 15.5212L7.15589 15.5212L7.01828 14.784ZM6.55048 14.9325L6.86351 15.6141L6.86352 15.6141L6.55048 14.9325ZM6.75 6.5H14.75V5H6.75V6.5ZM6.75 10.5H10.75V9H6.75V10.5ZM3.95 1.5H17.55V0H3.95V1.5ZM20 3.95V11.55H21.5V3.95H20ZM20 11.55C20 12.1224 19.9994 12.5066 19.9752 12.8025C19.9518 13.0896 19.9099 13.2269 19.8638 13.3175L21.2003 13.9985C21.3721 13.6612 21.4392 13.3046 21.4703 12.9247C21.5006 12.5535 21.5 12.0977 21.5 11.55H20ZM17.55 15.5C18.0977 15.5 18.5535 15.5006 18.9247 15.4703C19.3046 15.4392 19.6612 15.3721 19.9985 15.2003L19.3175 13.8638C19.2269 13.9099 19.0896 13.9518 18.8025 13.9752C18.5066 13.9994 18.1224 14 17.55 14V15.5ZM19.8638 13.3175C19.7439 13.5527 19.5527 13.7439 19.3175 13.8638L19.9985 15.2003C20.5159 14.9366 20.9366 14.5159 21.2003 13.9985L19.8638 13.3175ZM17.55 1.5C18.1224 1.5 18.5066 1.50058 18.8025 1.52476C19.0896 1.54822 19.2269 1.5901 19.3175 1.63624L19.9985 0.299732C19.6612 0.127888 19.3046 0.0607771 18.9247 0.0297393C18.5535 -0.000583231 18.0977 0 17.55 0V1.5ZM21.5 3.95C21.5 3.40232 21.5006 2.94646 21.4703 2.57533C21.4392 2.19545 21.3721 1.83879 21.2003 1.50153L19.8638 2.18251C19.9099 2.27307 19.9518 2.41035 19.9752 2.69748C19.9994 2.99336 20 3.37757 20 3.95H21.5ZM19.3175 1.63624C19.5527 1.75608 19.7439 1.94731 19.8638 2.18251L21.2003 1.50152C20.9366 0.984081 20.5159 0.563385 19.9985 0.299732L19.3175 1.63624ZM3.95 0C3.40232 0 2.94646 -0.000583231 2.57533 0.0297393C2.19544 0.0607771 1.83879 0.127888 1.50153 0.299732L2.18251 1.63624C2.27307 1.5901 2.41035 1.54822 2.69748 1.52476C2.99336 1.50058 3.37757 1.5 3.95 1.5V0ZM1.5 3.95C1.5 3.37757 1.50058 2.99336 1.52476 2.69748C1.54822 2.41035 1.5901 2.27307 1.63624 2.18251L0.299732 1.50153C0.127888 1.83879 0.0607771 2.19545 0.0297393 2.57533C-0.000583231 2.94646 0 3.40232 0 3.95H1.5ZM1.50153 0.299732C0.98408 0.563384 0.563384 0.98408 0.299732 1.50153L1.63624 2.18251C1.75608 1.94731 1.94731 1.75608 2.18251 1.63624L1.50153 0.299732ZM17.55 14H7.76639V15.5H17.55V14ZM2.39011 18.7486L6.35267 15.949L5.48712 14.7239L1.52457 17.5236L2.39011 18.7486ZM0 17.4556C0 17.6552 -0.000747502 17.8567 0.0144057 18.0223C0.0294603 18.1867 0.0673863 18.4311 0.22568 18.6574L1.45486 17.7977C1.52289 17.895 1.51568 17.9676 1.50816 17.8855C1.50499 17.8509 1.50258 17.801 1.5013 17.726C1.50002 17.6514 1.5 17.5646 1.5 17.4556H0ZM1.51829 17.5273C1.43118 17.5708 1.36175 17.6052 1.3023 17.6332C1.24244 17.6614 1.2029 17.6783 1.17597 17.6884C1.11294 17.7122 1.17374 17.677 1.28654 17.6937L1.0673 19.1776C1.32835 19.2161 1.55366 19.1491 1.70491 19.0921C1.8554 19.0354 2.02432 18.9513 2.18841 18.8693L1.51829 17.5273ZM0.225679 18.6574C0.422743 18.9392 0.727163 19.1273 1.0673 19.1776L1.28654 17.6937C1.35457 17.7037 1.41545 17.7413 1.45486 17.7977L0.225679 18.6574ZM1.5 17.4556V3.95H0V17.4556H1.5ZM1.52465 17.5235C1.51983 17.5269 1.51637 17.5293 1.51338 17.5314C1.51043 17.5335 1.50887 17.5346 1.50804 17.5352C1.50672 17.5361 1.51002 17.5338 1.51547 17.5303L2.3242 18.7936C2.35147 18.7762 2.37688 18.758 2.39003 18.7487L1.52465 17.5235ZM2.1884 18.8693C2.20307 18.862 2.2308 18.8483 2.25907 18.8326L1.52845 17.5225C1.53396 17.5195 1.53751 17.5177 1.53623 17.5183C1.53538 17.5188 1.53372 17.5196 1.53053 17.5212C1.52732 17.5228 1.52354 17.5247 1.5183 17.5273L2.1884 18.8693ZM1.51536 17.5304C1.51971 17.5276 1.52403 17.525 1.5285 17.5225L2.25902 18.8326C2.28112 18.8203 2.30295 18.8072 2.3243 18.7935L1.51536 17.5304ZM7.76639 14C7.41604 14 7.1465 13.9971 6.88067 14.0467L7.15589 15.5212C7.25388 15.5029 7.3618 15.5 7.76639 15.5V14ZM6.35266 15.949C6.6831 15.7156 6.77294 15.6557 6.86351 15.6141L6.23745 14.251C5.9917 14.3639 5.77325 14.5218 5.48712 14.7239L6.35266 15.949ZM6.88067 14.0467C6.65869 14.0881 6.44265 14.1567 6.23745 14.251L6.86352 15.6141C6.95679 15.5712 7.05499 15.5401 7.15589 15.5212L6.88067 14.0467Z", "fill", "#807D7E"], [1, "flex", "items-center"], [1, "flex", "items-center", "gap-4", "mb-2", "text-lg", "font-family", "font-medium", "color-text-gray"], ["routerLink", "size-guide", 1, "inline-flex", "items-center", "gap-1", "font-medium", "text-gray-600", "hover:text-gray-900", "transition-colors", "group"], ["viewBox", "0 0 16 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-4", "h-4", "transition-transform", "group-hover:translate-x-0.5"], ["d", "M0.9 6.9H13.9M8.9 0.9L14.1929 6.19289C14.5834 6.58342 14.5834 7.21658 14.1929 7.60711L8.9 12.9", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], [1, "flex", "gap-2", "flex-wrap"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "cursor-pointer", "border", "text-sm", "font-medium", "transition-all", "duration-200", 3, "border-purple-600", "bg-purple-600", "text-white", "border-gray-300", "text-gray-900", "hover:border-purple-400", "hover:bg-purple-50"], [1, "font-causten", "font-bold", "text-lg", "mb-2"], [1, "flex", "gap-3", "mt-3"], ["type", "button", "aria-label", "Select color", 1, "w-8", "h-8", "rounded-full", "transition-all", "duration-200", "cursor-pointer", "border-2", "border-gray-100", "focus:outline-none", 3, "ring-2", "ring-purple-500", "background-color", "title"], [1, "flex", "flex-wrap", "gap-8", "mt-8"], ["type", "button", 1, "flex", "w-3xs", "items-center", "font-causten", "text-lg", "cursor-pointer", "gap-2", "px-8", "py-3", "rounded-lg", "font-medium", "transition-all", "duration-200", 3, "click", "disabled"], ["width", "17", "height", "15", "viewBox", "0 0 17 15", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0.75 0.75H1.25526C2.10578 0.75 2.81986 1.39042 2.9121 2.23592L3.5879 8.43074C3.68014 9.27625 4.39422 9.91667 5.24474 9.91667H12.455C13.2169 9.91667 13.8817 9.40007 14.07 8.66185L15.2199 4.15259C15.4887 3.09878 14.6925 2.07407 13.605 2.07407H3.75M3.77063 12.9374H4.39563M3.77063 13.5624H4.39563M12.9373 12.9374H13.5623M12.9373 13.5624H13.5623M4.91667 13.25C4.91667 13.7102 4.54357 14.0833 4.08333 14.0833C3.6231 14.0833 3.25 13.7102 3.25 13.25C3.25 12.7898 3.6231 12.4167 4.08333 12.4167C4.54357 12.4167 4.91667 12.7898 4.91667 13.25ZM14.0833 13.25C14.0833 13.7102 13.7102 14.0833 13.25 14.0833C12.7898 14.0833 12.4167 13.7102 12.4167 13.25C12.4167 12.7898 12.7898 12.4167 13.25 12.4167C13.7102 12.4167 14.0833 12.7898 14.0833 13.25Z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round"], ["type", "button", 1, "px-12", "py-3", "font-causten", "font-bold", "text-lg", "rounded-lg", "border", "border-gray-300", "text-gray-900", "hover:border-purple-600", "transition-colors"], [1, "grid", "grid-cols-2", "gap-4", "text-sm", "pt-6", "border-t", "border-gray-400", "font-causten", "font-medium"], [1, "flex", "gap-2", "items-center", "text-gray-600"], ["width", "44", "height", "44", "viewBox", "0 0 44 44", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "22", "cy", "22", "r", "22", "fill", "#F6F6F6"], ["d", "M15 18.75H30M18 26.25H21M24 26.25H27M17.4 30H27.6C28.4401 30 28.8601 30 29.181 29.7956C29.4632 29.6159 29.6927 29.329 29.8365 28.9762C30 28.5751 30 28.0501 30 27V18C30 16.9499 30 16.4249 29.8365 16.0238C29.6927 15.671 29.4632 15.3841 29.181 15.2044C28.8601 15 28.4401 15 27.6 15H17.4C16.5599 15 16.1399 15 15.819 15.2044C15.5368 15.3841 15.3073 15.671 15.1635 16.0238C15 16.4249 15 16.9499 15 18V27C15 28.0501 15 28.5751 15.1635 28.9762C15.3073 29.329 15.5368 29.6159 15.819 29.7956C16.1399 30 16.5599 30 17.4 30Z", "stroke", "#3C4242", "stroke-width", "1.1", "stroke-linecap", "round"], ["d", "M25.6349 30H18.3651C17.3613 30 16.5476 29.2007 16.5476 28.2147V21.5796C16.5476 21.0634 15.9122 20.8049 15.5406 21.1699C15.2014 21.5032 14.6205 21.3203 14.5417 20.8555L14.0248 17.8091C13.9021 17.0857 14.2422 16.3621 14.8825 15.9847L18.1965 14.0315C18.293 13.9746 18.4175 13.9966 18.4878 14.0829C20.2884 16.2938 23.7116 16.2938 25.5122 14.0829C25.5825 13.9966 25.707 13.9746 25.8035 14.0315L29.1175 15.9847C29.7578 16.3621 30.0979 17.0857 29.9752 17.8091L29.4583 20.8555C29.3795 21.3203 28.7986 21.5032 28.4594 21.1699C28.0878 20.8049 27.4524 21.0634 27.4524 21.5796V28.2147C27.4524 29.2007 26.6387 30 25.6349 30Z", "stroke", "#3C4242", "stroke-width", "1.1"], ["d", "M23.8 26.6667V15.4667C23.8 15.2089 23.5985 15 23.35 15H13.45C13.2015 15 13 15.2089 13 15.4667V26.6667C13 26.9244 13.2015 27.1333 13.45 27.1333H14.8M23.8 26.6667C23.8 26.9244 23.5985 27.1333 23.35 27.1333H18.4M23.8 26.6667V18.2667C23.8 18.0089 24.0015 17.8 24.25 17.8H27.2136C27.333 17.8 27.4474 17.8492 27.5318 17.9367L30.8682 21.3967C30.9526 21.4842 31 21.6029 31 21.7266V26.6667C31 26.9244 30.7985 27.1333 30.55 27.1333H29.2M23.8 26.6667C23.8 26.9244 24.0015 27.1333 24.25 27.1333H25.6M14.8 27.1333C14.8 28.1643 15.6059 29 16.6 29C17.5941 29 18.4 28.1643 18.4 27.1333M14.8 27.1333C14.8 26.1024 15.6059 25.2667 16.6 25.2667C17.5941 25.2667 18.4 26.1024 18.4 27.1333M25.6 27.1333C25.6 28.1643 26.4059 29 27.4 29C28.3941 29 29.2 28.1643 29.2 27.1333M25.6 27.1333C25.6 26.1024 26.4059 25.2667 27.4 25.2667C28.3941 25.2667 29.2 26.1024 29.2 27.1333", "stroke", "#3C4242", "stroke-width", "1.1"], ["d", "M18.4444 28.2222C18.4444 29.2041 17.6485 30 16.6667 30C15.6848 30 14.8889 29.2041 14.8889 28.2222C14.8889 27.2404 15.6848 26.4444 16.6667 26.4444C17.6485 26.4444 18.4444 27.2404 18.4444 28.2222ZM18.4444 28.2222H25.5556C26.5374 28.2222 27.3333 27.4263 27.3333 26.4444V22.8889M25.5556 15.7778C25.5556 16.7596 26.3515 17.5556 27.3333 17.5556C28.3152 17.5556 29.1111 16.7596 29.1111 15.7778C29.1111 14.7959 28.3152 14 27.3333 14C26.3515 14 25.5556 14.7959 25.5556 15.7778ZM25.5556 15.7778H18.4444C17.4626 15.7778 16.6667 16.5737 16.6667 17.5556V21.1111M30 24.6667L27.6476 22.1398C27.474 21.9534 27.1926 21.9534 27.0191 22.1398L24.6667 24.6667M19.3333 19.3333L16.9809 21.8602C16.8074 22.0466 16.526 22.0466 16.3524 21.8602L14 19.3333", "stroke", "#3C4242", "stroke-width", "1.1", "stroke-linecap", "round"], [1, "flex", "w-full"], [1, "mt-16", "flex-1"], [1, "lg:col-span-2"], [3, "valueChange", "value"], [3, "value"], [1, "py-6"], [1, "mt-4"], [1, "text-gray-700", "font-causten", "font-normal", "leading-relaxed"], [1, "mt-8", "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "bg-gray-50", "rounded-2xl", "overflow-hidden", "[&>div]:p-4", "[&>div]:border-gray-200", "[&>div>p:first-child]:text-xs", "[&>div>p:first-child]:text-gray-500", "[&>div>p:first-child]:mb-1", "[&>div>p:last-child]:font-medium", "[&>div>p:last-child]:text-gray-900"], [1, "border-b", "sm:border-r"], [1, "border-b", "lg:border-r"], [1, "border-b"], [1, "sm:border-r"], [1, "lg:border-r"], [3, "productId", "initialSummary"], [3, "productId"], [1, "flex-1", "mt-16", "flex", "justify-center"], [1, "relative", "w-full", "max-w-md", "aspect-video", "rounded-2xl", "overflow-hidden", "bg-gray-300"], [1, "w-full", "object-cover", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-black/20"], ["aria-label", "Play video", 1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "w-14", "h-14", "cursor-pointer", "rounded-full", "bg-white/90", "flex", "items-center", "justify-center", "shadow-lg"], ["width", "53", "height", "53", "viewBox", "0 0 53 53", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "26.5", "cy", "26.5", "r", "26.5", "fill", "#F6F6F6"], ["d", "M34.0846 22.1699C37.4179 24.0944 37.4179 28.9056 34.0846 30.8301L26.4577 35.2336C23.1243 37.1581 18.9577 34.7524 18.9577 30.9034L18.9577 22.0966C18.9577 18.2476 23.1243 15.842 26.4577 17.7665L34.0846 22.1699Z", "fill", "#3C4242"], [1, "absolute", "top-4", "right-4", "text-xs", "text-white", "bg-black/50", "px-2", "py-1", "rounded-md"], [1, "absolute", "bottom-4", "left-4", "right-4"], [1, "text-white", "text-sm", "font-medium"], [1, "h-full", "w-full", "object-cover", 3, "error", "src", "alt"], ["type", "button", 1, "group", "shrink-0", "rounded-lg", "border-2", "transition-all", "duration-200", "focus:outline-none", "focus-visible:ring-2", "focus-visible:ring-purple-600", "focus-visible:ring-offset-2", 3, "mouseenter", "focus", "click"], [1, "h-24", "w-20", "rounded-md", "object-cover", "transition-opacity", "duration-200", 3, "src", "alt"], ["type", "button", 1, "px-4", "py-2", "rounded-lg", "cursor-pointer", "border", "text-sm", "font-medium", "transition-all", "duration-200", 3, "click"], ["type", "button", "aria-label", "Select color", 1, "w-8", "h-8", "rounded-full", "transition-all", "duration-200", "cursor-pointer", "border-2", "border-gray-100", "focus:outline-none", 3, "click", "title"], [1, "font-causten", "font-medium", "text-lg"], [1, "ml-1", "px-2", "py-0.5", "text-xs", "rounded-md", "bg-purple-600", "text-white"], [1, "w-full", "object-cover", 3, "error", "src", "alt"]], template: function ProductDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275conditionalCreate(1, ProductDetailPage_Conditional_1_Template, 5, 0, "div", 2)(2, ProductDetailPage_Conditional_2_Template, 10, 1, "div", 2)(3, ProductDetailPage_Conditional_3_Template, 147, 40, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.facade.isLoading() ? 1 : ctx.facade.error() ? 2 : (tmp_0_0 = ctx.facade.product()) ? 3 : -1, tmp_0_0);
    }
  }, dependencies: [
    CommonModule,
    RouterLink,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    UiBreadcrumbComponent,
    UiRatingComponent,
    Reviews,
    ProductQuestionsSectionComponent,
    DecimalPipe,
    ImageUrlPipe
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetailPage, [{
    type: Component,
    args: [{ selector: "app-detail", imports: [
      CommonModule,
      RouterLink,
      ImageUrlPipe,
      Tabs,
      TabList,
      Tab,
      TabPanels,
      TabPanel,
      UiBreadcrumbComponent,
      UiRatingComponent,
      Reviews,
      ProductQuestionsSectionComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="container mx-auto px-4 py-8">
  @if (facade.isLoading()) {
    <div class="flex items-center justify-center min-h-100">
      <div class="text-center">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"
        ></div>
        <p class="text-gray-600">Loading product...</p>
      </div>
    </div>
  } @else if (facade.error()) {
    <div class="flex items-center justify-center min-h-100">
      <div class="text-center">
        <svg
          class="w-16 h-16 text-red-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Error</h2>
        <p class="text-gray-600">{{ facade.error() }}</p>
        <a
          routerLink="/products"
          class="mt-4 inline-block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Back to Products
        </a>
      </div>
    </div>
  } @else if (facade.product(); as prod) {
    <div class="container mx-auto px-4 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex flex-col gap-4 sm:flex-row">
            <div class="order-1 flex-1 sm:order-2">
              @if (facade.activeImage(); as img) {
                <div
                  class="w-full max-w-xl aspect-4/5 overflow-hidden rounded-3xl border border-gray-100"
                >
                  <img
                    class="h-full w-full object-cover"
                    [src]="img.image | imageUrl"
                    [alt]="img.alt"
                    (error)="onImageError($event)"
                  />
                </div>
              }
            </div>

            <div class="order-2 flex gap-3 sm:order-1 sm:flex-col">
              <div class="flex gap-3 overflow-x-auto sm:flex-col sm:overflow-visible">
                @for (img of facade.galleryImages(); track img.image) {
                  <button
                    type="button"
                    class="group shrink-0 rounded-lg border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
                    [class.border-transparent]="facade.activeImageIndex() === $index"
                    [class.border-gray-200]="facade.activeImageIndex() !== $index"
                    [attr.aria-current]="facade.activeImageIndex() === $index ? 'true' : null"
                    [attr.aria-label]="'Open image ' + ($index + 1)"
                    (mouseenter)="onThumbHover($index)"
                    (focus)="onThumbFocus($index)"
                    (click)="onThumbClick($index)"
                  >
                    <img
                      class="h-24 w-20 rounded-md object-cover transition-opacity duration-200"
                      [class.opacity-60]="facade.activeImageIndex() !== $index"
                      [class.group-hover:opacity-100]="facade.activeImageIndex() !== $index"
                      [src]="img.image | imageUrl"
                      [alt]="img.alt"
                    />
                  </button>
                }
              </div>

              <!-- Arrow controls -->
              <div class="mt-2 flex items-center justify-center gap-2 sm:flex-col sm:gap-2">
                <button
                  type="button"
                  class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white transition-all duration-200 hover:border-purple-600 hover:bg-purple-50 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
                  (click)="facade.prevImage()"
                  aria-label="Previous image"
                >
                  <svg
                    class="h-5 w-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white transition-all duration-200 hover:border-purple-600 hover:bg-purple-50 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
                  (click)="facade.nextImage()"
                  aria-label="Next image"
                >
                  <svg
                    class="h-5 w-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <app-ui-breadcrumb [items]="breadcrumbItems()" />

          <h1 class="text-4xl font-coresans font-bold text-gray-900 mt-8">
            {{ prod.title }}
          </h1>

          <div class="flex text-sm">
            <div class="flex items-end">
              <app-ui-rating [value]="facade.rantingAvg()" [readonly]="true" [stars]="5" />

              <span class="text-gray-500 font-family pl-3 font-medium text-xl">
                {{ facade.rantingAvg() | number: '1.1-1' }}</span
              >
            </div>
            <button
              type="button"
              (click)="scrollToReviews()"
              class="flex items-center ml-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div class="mr-2 text-lg font-family color-text-gray">reviews</div>

              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 5C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5V5ZM14.75 6.5C15.1642 6.5 15.5 6.16421 15.5 5.75C15.5 5.33579 15.1642 5 14.75 5V6.5ZM6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5V9ZM10.75 10.5C11.1642 10.5 11.5 10.1642 11.5 9.75C11.5 9.33579 11.1642 9 10.75 9V10.5ZM20.532 13.658L21.2003 13.9985V13.9985L20.532 13.658ZM19.658 14.532L19.9985 15.2003V15.2003L19.658 14.532ZM19.658 0.967987L19.9985 0.299732L19.9985 0.299732L19.658 0.967987ZM20.532 1.84202L21.2003 1.50153V1.50152L20.532 1.84202ZM1.84202 0.967987L2.18251 1.63624L2.18251 1.63624L1.84202 0.967987ZM0.967987 1.84202L1.63624 2.18251L1.63624 2.18251L0.967987 1.84202ZM1.95734 18.1361L2.39003 18.7487L2.39011 18.7486L1.95734 18.1361ZM5.91989 15.3365L5.48712 14.7239H5.48712L5.91989 15.3365ZM0.840271 18.2276L1.45486 17.7977H1.45486L0.840271 18.2276ZM1.85335 18.1983L1.5183 17.5273L1.51829 17.5273L1.85335 18.1983ZM1.17692 18.4356L1.0673 19.1776H1.0673L1.17692 18.4356ZM1.91983 18.162L1.51547 17.5303L1.51536 17.5304L1.91983 18.162ZM1.89376 18.1776L1.5285 17.5225L1.52845 17.5225L1.89376 18.1776ZM7.01828 14.784L7.15589 15.5212L7.15589 15.5212L7.01828 14.784ZM6.55048 14.9325L6.86351 15.6141L6.86352 15.6141L6.55048 14.9325ZM6.75 6.5H14.75V5H6.75V6.5ZM6.75 10.5H10.75V9H6.75V10.5ZM3.95 1.5H17.55V0H3.95V1.5ZM20 3.95V11.55H21.5V3.95H20ZM20 11.55C20 12.1224 19.9994 12.5066 19.9752 12.8025C19.9518 13.0896 19.9099 13.2269 19.8638 13.3175L21.2003 13.9985C21.3721 13.6612 21.4392 13.3046 21.4703 12.9247C21.5006 12.5535 21.5 12.0977 21.5 11.55H20ZM17.55 15.5C18.0977 15.5 18.5535 15.5006 18.9247 15.4703C19.3046 15.4392 19.6612 15.3721 19.9985 15.2003L19.3175 13.8638C19.2269 13.9099 19.0896 13.9518 18.8025 13.9752C18.5066 13.9994 18.1224 14 17.55 14V15.5ZM19.8638 13.3175C19.7439 13.5527 19.5527 13.7439 19.3175 13.8638L19.9985 15.2003C20.5159 14.9366 20.9366 14.5159 21.2003 13.9985L19.8638 13.3175ZM17.55 1.5C18.1224 1.5 18.5066 1.50058 18.8025 1.52476C19.0896 1.54822 19.2269 1.5901 19.3175 1.63624L19.9985 0.299732C19.6612 0.127888 19.3046 0.0607771 18.9247 0.0297393C18.5535 -0.000583231 18.0977 0 17.55 0V1.5ZM21.5 3.95C21.5 3.40232 21.5006 2.94646 21.4703 2.57533C21.4392 2.19545 21.3721 1.83879 21.2003 1.50153L19.8638 2.18251C19.9099 2.27307 19.9518 2.41035 19.9752 2.69748C19.9994 2.99336 20 3.37757 20 3.95H21.5ZM19.3175 1.63624C19.5527 1.75608 19.7439 1.94731 19.8638 2.18251L21.2003 1.50152C20.9366 0.984081 20.5159 0.563385 19.9985 0.299732L19.3175 1.63624ZM3.95 0C3.40232 0 2.94646 -0.000583231 2.57533 0.0297393C2.19544 0.0607771 1.83879 0.127888 1.50153 0.299732L2.18251 1.63624C2.27307 1.5901 2.41035 1.54822 2.69748 1.52476C2.99336 1.50058 3.37757 1.5 3.95 1.5V0ZM1.5 3.95C1.5 3.37757 1.50058 2.99336 1.52476 2.69748C1.54822 2.41035 1.5901 2.27307 1.63624 2.18251L0.299732 1.50153C0.127888 1.83879 0.0607771 2.19545 0.0297393 2.57533C-0.000583231 2.94646 0 3.40232 0 3.95H1.5ZM1.50153 0.299732C0.98408 0.563384 0.563384 0.98408 0.299732 1.50153L1.63624 2.18251C1.75608 1.94731 1.94731 1.75608 2.18251 1.63624L1.50153 0.299732ZM17.55 14H7.76639V15.5H17.55V14ZM2.39011 18.7486L6.35267 15.949L5.48712 14.7239L1.52457 17.5236L2.39011 18.7486ZM0 17.4556C0 17.6552 -0.000747502 17.8567 0.0144057 18.0223C0.0294603 18.1867 0.0673863 18.4311 0.22568 18.6574L1.45486 17.7977C1.52289 17.895 1.51568 17.9676 1.50816 17.8855C1.50499 17.8509 1.50258 17.801 1.5013 17.726C1.50002 17.6514 1.5 17.5646 1.5 17.4556H0ZM1.51829 17.5273C1.43118 17.5708 1.36175 17.6052 1.3023 17.6332C1.24244 17.6614 1.2029 17.6783 1.17597 17.6884C1.11294 17.7122 1.17374 17.677 1.28654 17.6937L1.0673 19.1776C1.32835 19.2161 1.55366 19.1491 1.70491 19.0921C1.8554 19.0354 2.02432 18.9513 2.18841 18.8693L1.51829 17.5273ZM0.225679 18.6574C0.422743 18.9392 0.727163 19.1273 1.0673 19.1776L1.28654 17.6937C1.35457 17.7037 1.41545 17.7413 1.45486 17.7977L0.225679 18.6574ZM1.5 17.4556V3.95H0V17.4556H1.5ZM1.52465 17.5235C1.51983 17.5269 1.51637 17.5293 1.51338 17.5314C1.51043 17.5335 1.50887 17.5346 1.50804 17.5352C1.50672 17.5361 1.51002 17.5338 1.51547 17.5303L2.3242 18.7936C2.35147 18.7762 2.37688 18.758 2.39003 18.7487L1.52465 17.5235ZM2.1884 18.8693C2.20307 18.862 2.2308 18.8483 2.25907 18.8326L1.52845 17.5225C1.53396 17.5195 1.53751 17.5177 1.53623 17.5183C1.53538 17.5188 1.53372 17.5196 1.53053 17.5212C1.52732 17.5228 1.52354 17.5247 1.5183 17.5273L2.1884 18.8693ZM1.51536 17.5304C1.51971 17.5276 1.52403 17.525 1.5285 17.5225L2.25902 18.8326C2.28112 18.8203 2.30295 18.8072 2.3243 18.7935L1.51536 17.5304ZM7.76639 14C7.41604 14 7.1465 13.9971 6.88067 14.0467L7.15589 15.5212C7.25388 15.5029 7.3618 15.5 7.76639 15.5V14ZM6.35266 15.949C6.6831 15.7156 6.77294 15.6557 6.86351 15.6141L6.23745 14.251C5.9917 14.3639 5.77325 14.5218 5.48712 14.7239L6.35266 15.949ZM6.88067 14.0467C6.65869 14.0881 6.44265 14.1567 6.23745 14.251L6.86352 15.6141C6.95679 15.5712 7.05499 15.5401 7.15589 15.5212L6.88067 14.0467Z"
                  fill="#807D7E"
                />
              </svg>
            </button>
          </div>

          <div>
            <div class="flex items-center">
              <div
                class="flex items-center gap-4 mb-2 text-lg font-family font-medium color-text-gray"
              >
                <span>Select Size</span>
                <a
                  routerLink="size-guide"
                  class="inline-flex items-center gap-1 font-medium text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <span>Size Guide</span>
                  <svg
                    class="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.9 6.9H13.9M8.9 0.9L14.1929 6.19289C14.5834 6.58342 14.5834 7.21658 14.1929 7.60711L8.9 12.9"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex gap-2 flex-wrap">
              @for (size of prod.sizes; track $index) {
                <button
                  type="button"
                  (click)="facade.selectSize(size)"
                  class="px-4 py-2 rounded-lg cursor-pointer border text-sm font-medium transition-all duration-200"
                  [class.border-purple-600]="facade.selectedSize() === size"
                  [class.bg-purple-600]="facade.selectedSize() === size"
                  [class.text-white]="facade.selectedSize() === size"
                  [class.border-gray-300]="facade.selectedSize() !== size"
                  [class.text-gray-900]="facade.selectedSize() !== size"
                  [class.hover:border-purple-400]="facade.selectedSize() !== size"
                  [class.hover:bg-purple-50]="facade.selectedSize() !== size"
                >
                  {{ size }}
                </button>
              }
            </div>
          </div>

          <div>
            <p class="font-causten font-bold text-lg mb-2">Colour Available</p>
            <div class="flex gap-3 mt-3">
              @for (color of facade.availableColors(); track $index) {
                <button
                  type="button"
                  (click)="facade.selectColor(color)"
                  class="w-8 h-8 rounded-full transition-all duration-200 cursor-pointer border-2 border-gray-100 focus:outline-none"
                  [class.ring-2]="facade.selectedColor() === color"
                  [class.ring-purple-500]="facade.selectedColor() === color"
                  [style.background-color]="color"
                  [title]="color"
                  aria-label="Select color"
                ></button>
              }
            </div>
          </div>

          <div class="flex flex-wrap gap-8 mt-8">
            <button
              type="button"
              (click)="facade.addToCart()"
              [disabled]="!facade.canAddToCart()"
              class="flex w-3xs items-center font-causten text-lg cursor-pointer gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-200"
              [class.bg-purple-600]="facade.canAddToCart()"
              [class.text-white]="facade.canAddToCart()"
              [class.hover:bg-purple-700]="facade.canAddToCart()"
              [class.bg-gray-300]="!facade.canAddToCart()"
              [class.text-gray-500]="!facade.canAddToCart()"
              [class.cursor-not-allowed]="!facade.canAddToCart()"
            >
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 0.75H1.25526C2.10578 0.75 2.81986 1.39042 2.9121 2.23592L3.5879 8.43074C3.68014 9.27625 4.39422 9.91667 5.24474 9.91667H12.455C13.2169 9.91667 13.8817 9.40007 14.07 8.66185L15.2199 4.15259C15.4887 3.09878 14.6925 2.07407 13.605 2.07407H3.75M3.77063 12.9374H4.39563M3.77063 13.5624H4.39563M12.9373 12.9374H13.5623M12.9373 13.5624H13.5623M4.91667 13.25C4.91667 13.7102 4.54357 14.0833 4.08333 14.0833C3.6231 14.0833 3.25 13.7102 3.25 13.25C3.25 12.7898 3.6231 12.4167 4.08333 12.4167C4.54357 12.4167 4.91667 12.7898 4.91667 13.25ZM14.0833 13.25C14.0833 13.7102 13.7102 14.0833 13.25 14.0833C12.7898 14.0833 12.4167 13.7102 12.4167 13.25C12.4167 12.7898 12.7898 12.4167 13.25 12.4167C13.7102 12.4167 14.0833 12.7898 14.0833 13.25Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              @if (!facade.selectedSize() && !facade.selectedColor()) {
                <span>Select size & color</span>
              } @else if (!facade.selectedSize()) {
                <span>Select size</span>
              } @else if (!facade.selectedColor()) {
                <span>Select color</span>
              } @else {
                <span>Add to cart</span>
              }
            </button>
            <button
              type="button"
              class="px-12 py-3 font-causten font-bold text-lg rounded-lg border border-gray-300 text-gray-900 hover:border-purple-600 transition-colors"
            >
              \${{ prod.price }}
            </button>
          </div>

          <div
            class="grid grid-cols-2 gap-4 text-sm pt-6 border-t border-gray-400 font-causten font-medium"
          >
            <div class="flex gap-2 items-center text-gray-600">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                <path
                  d="M15 18.75H30M18 26.25H21M24 26.25H27M17.4 30H27.6C28.4401 30 28.8601 30 29.181 29.7956C29.4632 29.6159 29.6927 29.329 29.8365 28.9762C30 28.5751 30 28.0501 30 27V18C30 16.9499 30 16.4249 29.8365 16.0238C29.6927 15.671 29.4632 15.3841 29.181 15.2044C28.8601 15 28.4401 15 27.6 15H17.4C16.5599 15 16.1399 15 15.819 15.2044C15.5368 15.3841 15.3073 15.671 15.1635 16.0238C15 16.4249 15 16.9499 15 18V27C15 28.0501 15 28.5751 15.1635 28.9762C15.3073 29.329 15.5368 29.6159 15.819 29.7956C16.1399 30 16.5599 30 17.4 30Z"
                  stroke="#3C4242"
                  stroke-width="1.1"
                  stroke-linecap="round"
                />
              </svg>
              Secure payment
            </div>
            <div class="flex gap-2 items-center text-gray-600">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                <path
                  d="M25.6349 30H18.3651C17.3613 30 16.5476 29.2007 16.5476 28.2147V21.5796C16.5476 21.0634 15.9122 20.8049 15.5406 21.1699C15.2014 21.5032 14.6205 21.3203 14.5417 20.8555L14.0248 17.8091C13.9021 17.0857 14.2422 16.3621 14.8825 15.9847L18.1965 14.0315C18.293 13.9746 18.4175 13.9966 18.4878 14.0829C20.2884 16.2938 23.7116 16.2938 25.5122 14.0829C25.5825 13.9966 25.707 13.9746 25.8035 14.0315L29.1175 15.9847C29.7578 16.3621 30.0979 17.0857 29.9752 17.8091L29.4583 20.8555C29.3795 21.3203 28.7986 21.5032 28.4594 21.1699C28.0878 20.8049 27.4524 21.0634 27.4524 21.5796V28.2147C27.4524 29.2007 26.6387 30 25.6349 30Z"
                  stroke="#3C4242"
                  stroke-width="1.1"
                />
              </svg>
              Size & Fit
            </div>
            <div class="flex gap-2 items-center text-gray-600">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                <path
                  d="M23.8 26.6667V15.4667C23.8 15.2089 23.5985 15 23.35 15H13.45C13.2015 15 13 15.2089 13 15.4667V26.6667C13 26.9244 13.2015 27.1333 13.45 27.1333H14.8M23.8 26.6667C23.8 26.9244 23.5985 27.1333 23.35 27.1333H18.4M23.8 26.6667V18.2667C23.8 18.0089 24.0015 17.8 24.25 17.8H27.2136C27.333 17.8 27.4474 17.8492 27.5318 17.9367L30.8682 21.3967C30.9526 21.4842 31 21.6029 31 21.7266V26.6667C31 26.9244 30.7985 27.1333 30.55 27.1333H29.2M23.8 26.6667C23.8 26.9244 24.0015 27.1333 24.25 27.1333H25.6M14.8 27.1333C14.8 28.1643 15.6059 29 16.6 29C17.5941 29 18.4 28.1643 18.4 27.1333M14.8 27.1333C14.8 26.1024 15.6059 25.2667 16.6 25.2667C17.5941 25.2667 18.4 26.1024 18.4 27.1333M25.6 27.1333C25.6 28.1643 26.4059 29 27.4 29C28.3941 29 29.2 28.1643 29.2 27.1333M25.6 27.1333C25.6 26.1024 26.4059 25.2667 27.4 25.2667C28.3941 25.2667 29.2 26.1024 29.2 27.1333"
                  stroke="#3C4242"
                  stroke-width="1.1"
                />
              </svg>
              Free shipping
            </div>
            <div class="flex gap-2 items-center text-gray-600">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                <path
                  d="M18.4444 28.2222C18.4444 29.2041 17.6485 30 16.6667 30C15.6848 30 14.8889 29.2041 14.8889 28.2222C14.8889 27.2404 15.6848 26.4444 16.6667 26.4444C17.6485 26.4444 18.4444 27.2404 18.4444 28.2222ZM18.4444 28.2222H25.5556C26.5374 28.2222 27.3333 27.4263 27.3333 26.4444V22.8889M25.5556 15.7778C25.5556 16.7596 26.3515 17.5556 27.3333 17.5556C28.3152 17.5556 29.1111 16.7596 29.1111 15.7778C29.1111 14.7959 28.3152 14 27.3333 14C26.3515 14 25.5556 14.7959 25.5556 15.7778ZM25.5556 15.7778H18.4444C17.4626 15.7778 16.6667 16.5737 16.6667 17.5556V21.1111M30 24.6667L27.6476 22.1398C27.474 21.9534 27.1926 21.9534 27.0191 22.1398L24.6667 24.6667M19.3333 19.3333L16.9809 21.8602C16.8074 22.0466 16.526 22.0466 16.3524 21.8602L14 19.3333"
                  stroke="#3C4242"
                  stroke-width="1.1"
                  stroke-linecap="round"
                />
              </svg>
              Free Returns
            </div>
          </div>
        </div>
      </div>

      <div class="flex w-full">
        <div class="mt-16 flex-1">
          <div class="lg:col-span-2">
            <p-tabs [value]="activeTabIndex()" (valueChange)="onTabChange($event)">
              <p-tablist>
                @for (tab of tabss(); track tab.value) {
                  <p-tab [value]="tab.value">
                    @switch (tab.value) {
                      @case (0) {
                        <span class="font-causten font-medium text-lg">{{ tab.title }}</span>
                      }
                      @case (1) {
                        <span class="font-causten font-medium text-lg">{{ tab.title }}</span>
                        <span
                          class="ml-1 px-2 py-0.5 text-xs rounded-md bg-purple-600 text-white"
                          >{{ tab.content }}</span
                        >
                      }
                      @case (2) {
                        <span class="font-causten font-medium text-lg">{{ tab.title }}</span>
                        <span
                          class="ml-1 px-2 py-0.5 text-xs rounded-md bg-purple-600 text-white"
                          >{{ tab.content }}</span
                        >
                      }
                    }
                  </p-tab>
                }
              </p-tablist>
              <p-tabpanels>
                <p-tabpanel [value]="0">
                  <div class="py-6">
                    <div class="mt-4">
                      <p class="text-gray-700 font-causten font-normal leading-relaxed">
                        {{ tabss()[0].content }}
                      </p>
                    </div>
                    <div
                      class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-gray-50 rounded-2xl overflow-hidden [&>div]:p-4 [&>div]:border-gray-200 [&>div>p:first-child]:text-xs [&>div>p:first-child]:text-gray-500 [&>div>p:first-child]:mb-1 [&>div>p:last-child]:font-medium [&>div>p:last-child]:text-gray-900"
                    >
                      <div class="border-b sm:border-r">
                        <p>fabric</p>
                        <p>{{ prod.fabric }}</p>
                      </div>

                      <div class="border-b lg:border-r">
                        <p>pattern</p>
                        <p>{{ prod.pattern }}</p>
                      </div>

                      <div class="border-b">
                        <p>fit</p>
                        <p>{{ prod.fit }}</p>
                      </div>

                      <div class="sm:border-r">
                        <p>neck</p>
                        <p>{{ prod.neck }}</p>
                      </div>

                      <div class="lg:border-r">
                        <p>sleeve</p>
                        <p>{{ prod.sleeve }}</p>
                      </div>

                      <div>
                        <p>style</p>
                        <p>{{ prod.brand }}</p>
                      </div>
                    </div>
                  </div>
                </p-tabpanel>
                <p-tabpanel [value]="1">
                  <div #reviewsSection class="py-6">
                    @if (facade.product(); as prod) {
                      <app-ui-reviews [productId]="prod.id" [initialSummary]="prod.ratingStats" />
                    }
                  </div>
                </p-tabpanel>
                <p-tabpanel [value]="2">
                  @if (facade.product(); as prod) {
                    <app-product-questions-section [productId]="prod.id" />
                  }
                </p-tabpanel>
              </p-tabpanels>
            </p-tabs>
          </div>
        </div>
        <div class="mt-16 flex-1">
          <div class="flex-1 mt-16 flex justify-center">
            <div
              class="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden bg-gray-300"
            >
              @if (facade.activeImage(); as img) {
                <img
                  [src]="img.image | imageUrl"
                  [alt]="img.alt"
                  (error)="onImageError($event)"
                  class="w-full object-cover"
                />
              }

              <div class="absolute inset-0 bg-black/20"></div>
              <button
                class="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                <div
                  class="w-14 h-14 cursor-pointer rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                >
                  <svg
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="26.5" cy="26.5" r="26.5" fill="#F6F6F6" />
                    <path
                      d="M34.0846 22.1699C37.4179 24.0944 37.4179 28.9056 34.0846 30.8301L26.4577 35.2336C23.1243 37.1581 18.9577 34.7524 18.9577 30.9034L18.9577 22.0966C18.9577 18.2476 23.1243 15.842 26.4577 17.7665L34.0846 22.1699Z"
                      fill="#3C4242"
                    />
                  </svg>
                </div>
              </button>
              <span
                class="absolute top-4 right-4 text-xs text-white bg-black/50 px-2 py-1 rounded-md"
              >
                1.00 M
              </span>
              <div class="absolute bottom-4 left-4 right-4">
                <p class="text-white text-sm font-medium">{{ prod.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
</div>
` }]
  }], () => [], { reviewsSection: [{ type: ViewChild, args: ["reviewsSection", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailPage, { className: "ProductDetailPage", filePath: "apps/marketplace-web/src/app/features/product-detail/pages/product-detail-page/product-detail-page.ts", lineNumber: 45 });
})();
export {
  ProductDetailPage
};
//# sourceMappingURL=chunk-TVTP3M3M.js.map
