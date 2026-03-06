import {
  WISHLIST_ITEM_SOURCE,
  WishlistFacade
} from "./chunk-EWMRC4OU.js";
import {
  ImageUrlPipe
} from "./chunk-SKS7KXOA.js";
import {
  Button,
  ButtonModule
} from "./chunk-VT55VVTS.js";
import {
  Router
} from "./chunk-JD54KQF2.js";
import {
  CommonModule,
  CurrencyPipe
} from "./chunk-SLVXWW7T.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IPMWBXXP.js";

// apps/marketplace-web/src/app/features/wishlist/ui/wishlist-toggle-button.ts
var WishlistButton = class _WishlistButton {
  facade = inject(WishlistFacade);
  productId = input.required(...ngDevMode ? [{ debugName: "productId" }] : []);
  source = input(WISHLIST_ITEM_SOURCE.CATALOG, ...ngDevMode ? [{ debugName: "source" }] : []);
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  isInWishlist = computed(() => this.facade.isInWishList()(this.productId()), ...ngDevMode ? [{ debugName: "isInWishlist" }] : []);
  loading = computed(() => this.facade.isSubmitting?.() ?? false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  // можно сделать тоньше, если нужно
  icon = computed(() => this.isInWishlist() ? "pi pi-heart-fill" : "pi pi-heart", ...ngDevMode ? [{ debugName: "icon" }] : []);
  ariaLabel = computed(() => this.isInWishlist() ? "Remove from wishlist" : "Add to wishlist", ...ngDevMode ? [{ debugName: "ariaLabel" }] : []);
  styleClass = computed(() => {
    const base = "p-0 w-10 h-10 inline-flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95";
    const state = this.isInWishlist() ? "text-red-500" : "text-slate-600 hover:text-red-500";
    return `${base} ${state}`;
  }, ...ngDevMode ? [{ debugName: "styleClass" }] : []);
  onToggle() {
    if (this.disabled())
      return;
    this.facade.toggleLikeProduct(this.productId(), this.source());
  }
  static \u0275fac = function WishlistButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WishlistButton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistButton, selectors: [["app-wishlist-button"]], inputs: { productId: [1, "productId"], source: [1, "source"], disabled: [1, "disabled"] }, decls: 1, vars: 7, consts: [["type", "button", 3, "onClick", "rounded", "text", "icon", "loading", "disabled", "styleClass"]], template: function WishlistButton_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-button", 0);
      \u0275\u0275listener("onClick", function WishlistButton_Template_p_button_onClick_0_listener() {
        return ctx.onToggle();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("rounded", true)("text", true)("icon", ctx.icon())("loading", ctx.loading())("disabled", ctx.disabled())("styleClass", ctx.styleClass());
      \u0275\u0275attribute("aria-label", ctx.ariaLabel());
    }
  }, dependencies: [ButtonModule, Button], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistButton, [{
    type: Component,
    args: [{
      selector: "app-wishlist-button",
      imports: [ButtonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<p-button
    type="button"
    [rounded]="true"
    [text]="true"
    [icon]="icon()"
    [loading]="loading()"
    [disabled]="disabled()"
    (onClick)="onToggle()"
    [attr.aria-label]="ariaLabel()"
    [styleClass]="styleClass()"
  ></p-button>`
    }]
  }], null, { productId: [{ type: Input, args: [{ isSignal: true, alias: "productId", required: true }] }], source: [{ type: Input, args: [{ isSignal: true, alias: "source", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistButton, { className: "WishlistButton", filePath: "apps/marketplace-web/src/app/features/wishlist/ui/wishlist-toggle-button.ts", lineNumber: 25 });
})();

// apps/marketplace-web/src/app/features/catalog/ui/product-card/product-card.ts
function ProductCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ProductCardComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToDetail());
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3);
    \u0275\u0275listener("click", function ProductCardComponent_Conditional_0_Template_div_click_2_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(3, "app-wishlist-button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "img", 5);
    \u0275\u0275pipe(5, "imageUrl");
    \u0275\u0275listener("error", function ProductCardComponent_Conditional_0_Template_img_error_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "div")(8, "h2", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("productId", ctx_r1.product().id)("source", ctx_r1.WishlistItemSource.CATALOG);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(5, 7, ctx_r1.product().images[0]), \u0275\u0275sanitizeUrl)("alt", ctx_r1.product().title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.product().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.product().brand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(14, 9, ctx_r1.product().price, "USD", "symbol-narrow", "1.2-2"), " ");
  }
}
var ProductCardComponent = class _ProductCardComponent {
  product = input.required(...ngDevMode ? [{ debugName: "product" }] : []);
  router = inject(Router);
  WishlistItemSource = WISHLIST_ITEM_SOURCE;
  imageErrorHandled = signal(false, ...ngDevMode ? [{ debugName: "imageErrorHandled" }] : []);
  onImageError(event) {
    if (this.imageErrorHandled())
      return;
    const img = event.target;
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
    this.imageErrorHandled.set(true);
  }
  navigateToDetail() {
    const product = this.product();
    if (product?.id) {
      void this.router.navigate(["/product", product.id]);
    } else {
      console.error("Product or product ID is undefined", product);
    }
  }
  static \u0275fac = function ProductCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: [1, "product"] }, decls: 1, vars: 1, consts: [[1, "w-70.5", "h-auto", "xs:w-full", "xs:h-auto", "overflow-hidden", "cursor-pointer", "hover:border-gray-600"], [1, "w-70.5", "h-auto", "xs:w-full", "xs:h-auto", "overflow-hidden", "cursor-pointer", "hover:border-gray-600", 3, "click"], [1, "relative", "h-92.5", "overflow-hidden", "rounded-lg"], [1, "absolute", "top-2", "right-2", "z-10", 3, "click"], [3, "productId", "source"], [1, "w-full", "h-full", "object-cover", 3, "error", "src", "alt"], [1, "flex", "justify-between", "items-center", "mt-7.5"], [1, "font-bold", "text-[#3c4242]", "text-lg"], [1, "font-medium", "text-sm", "text-[#807d7e]", "mt-2"], [1, "inline-block", "w-20.5", "h-9", "rounded-lg", "bg-gray-100", "text-center", "leading-9", "text-sm", "font-medium"]], template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProductCardComponent_Conditional_0_Template, 15, 14, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.product() ? 0 : -1);
    }
  }, dependencies: [CommonModule, WishlistButton, CurrencyPipe, ImageUrlPipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCardComponent, [{
    type: Component,
    args: [{ selector: "app-product-card", imports: [CommonModule, WishlistButton, ImageUrlPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (product()) {
  <div
    class="w-70.5 h-auto xs:w-full xs:h-auto overflow-hidden cursor-pointer hover:border-gray-600"
    (click)="navigateToDetail()"
  >
    <div class="relative h-92.5 overflow-hidden rounded-lg">
      <div class="absolute top-2 right-2 z-10" (click)="$event.stopPropagation()">
        <app-wishlist-button [productId]="product().id" [source]="WishlistItemSource.CATALOG" />
      </div>
      <img
        [src]="product().images[0] | imageUrl"
        [alt]="product().title"
        (error)="onImageError($event)"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="flex justify-between items-center mt-7.5">
      <div>
        <h2 class="font-bold text-[#3c4242] text-lg">{{ product().title }}</h2>
        <h3 class="font-medium text-sm text-[#807d7e] mt-2">{{ product().brand }}</h3>
      </div>
      <span
        class="inline-block w-20.5 h-9 rounded-lg bg-gray-100 text-center leading-9 text-sm font-medium"
      >
        {{ product().price | currency: 'USD' : 'symbol-narrow' : '1.2-2' }}
      </span>
    </div>
  </div>
}
` }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "apps/marketplace-web/src/app/features/catalog/ui/product-card/product-card.ts", lineNumber: 16 });
})();

export {
  ProductCardComponent
};
//# sourceMappingURL=chunk-D7DESRAX.js.map
