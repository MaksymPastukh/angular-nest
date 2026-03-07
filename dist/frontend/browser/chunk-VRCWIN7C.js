import {
  ImageUrlPipe
} from "./chunk-SLKINVPH.js";
import {
  Router,
  RouterLink
} from "./chunk-FFJL2FAH.js";
import {
  Button,
  ButtonModule
} from "./chunk-U35Y4BQQ.js";
import {
  CommonModule,
  CurrencyPipe
} from "./chunk-VRGFCTSI.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  computed,
  inject,
  input,
  output,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SMFOV6AR.js";

// libs/frontend/catalog/ui/src/lib/ui/product-card/product-card.ts
function ProductCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ProductCardComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToDetail());
    })("keyup.enter", function ProductCardComponent_Conditional_0_Template_div_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToDetail());
    })("keyup.space", function ProductCardComponent_Conditional_0_Template_div_keyup_space_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToDetail());
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "p-button", 4);
    \u0275\u0275listener("onClick", function ProductCardComponent_Conditional_0_Template_p_button_onClick_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onToggleWishlist($event));
    });
    \u0275\u0275elementEnd()();
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
    \u0275\u0275property("rounded", true)("text", true)("icon", ctx_r1.wishlistIcon())("loading", ctx_r1.wishlistLoading())("disabled", ctx_r1.wishlistDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1.wishlistAriaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(5, 11, ctx_r1.product().images[0]), \u0275\u0275sanitizeUrl)("alt", ctx_r1.product().title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.product().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.product().brand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(14, 13, ctx_r1.product().price, "USD", "symbol-narrow", "1.2-2"), " ");
  }
}
var ProductCardComponent = class _ProductCardComponent {
  product = input.required(...ngDevMode ? [{ debugName: "product" }] : []);
  inWishlist = input(false, ...ngDevMode ? [{ debugName: "inWishlist" }] : []);
  wishlistLoading = input(false, ...ngDevMode ? [{ debugName: "wishlistLoading" }] : []);
  wishlistDisabled = input(false, ...ngDevMode ? [{ debugName: "wishlistDisabled" }] : []);
  toggleWishlist = output();
  router = inject(Router);
  imageErrorHandled = signal(false, ...ngDevMode ? [{ debugName: "imageErrorHandled" }] : []);
  wishlistIcon = computed(() => this.inWishlist() ? "pi pi-heart-fill" : "pi pi-heart", ...ngDevMode ? [{ debugName: "wishlistIcon" }] : []);
  wishlistAriaLabel = computed(() => this.inWishlist() ? "Remove from wishlist" : "Add to wishlist", ...ngDevMode ? [{ debugName: "wishlistAriaLabel" }] : []);
  onToggleWishlist(event) {
    event.stopPropagation();
    if (this.wishlistDisabled())
      return;
    this.toggleWishlist.emit();
  }
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: [1, "product"], inWishlist: [1, "inWishlist"], wishlistLoading: [1, "wishlistLoading"], wishlistDisabled: [1, "wishlistDisabled"] }, outputs: { toggleWishlist: "toggleWishlist" }, decls: 1, vars: 1, consts: [["tabindex", "0", 1, "w-70.5", "h-auto", "xs:w-full", "xs:h-auto", "overflow-hidden", "cursor-pointer", "hover:border-gray-600"], ["tabindex", "0", 1, "w-70.5", "h-auto", "xs:w-full", "xs:h-auto", "overflow-hidden", "cursor-pointer", "hover:border-gray-600", 3, "click", "keyup.enter", "keyup.space"], [1, "relative", "h-92.5", "overflow-hidden", "rounded-lg"], [1, "absolute", "top-2", "right-2", "z-10"], ["type", "button", "styleClass", "p-0 w-10 h-10 inline-flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95", 3, "onClick", "rounded", "text", "icon", "loading", "disabled"], [1, "w-full", "h-full", "object-cover", 3, "error", "src", "alt"], [1, "flex", "justify-between", "items-center", "mt-7.5"], [1, "font-bold", "text-[#3c4242]", "text-lg"], [1, "font-medium", "text-sm", "text-[#807d7e]", "mt-2"], [1, "inline-block", "w-20.5", "h-9", "rounded-lg", "bg-gray-100", "text-center", "leading-9", "text-sm", "font-medium"]], template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProductCardComponent_Conditional_0_Template, 15, 18, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.product() ? 0 : -1);
    }
  }, dependencies: [CommonModule, ButtonModule, Button, CurrencyPipe, ImageUrlPipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCardComponent, [{
    type: Component,
    args: [{ selector: "app-product-card", imports: [CommonModule, ButtonModule, ImageUrlPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (product()) {
  <div
    class="w-70.5 h-auto xs:w-full xs:h-auto overflow-hidden cursor-pointer hover:border-gray-600"
    (click)="navigateToDetail()"
    (keyup.enter)="navigateToDetail()"
    (keyup.space)="navigateToDetail()"
    tabindex="0"
  >
    <div class="relative h-92.5 overflow-hidden rounded-lg">
      <div class="absolute top-2 right-2 z-10">
        <p-button
          type="button"
          [rounded]="true"
          [text]="true"
          [icon]="wishlistIcon()"
          [loading]="wishlistLoading()"
          [disabled]="wishlistDisabled()"
          [attr.aria-label]="wishlistAriaLabel()"
          styleClass="p-0 w-10 h-10 inline-flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95"
          (onClick)="onToggleWishlist($event)"
        ></p-button>
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
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: true }] }], inWishlist: [{ type: Input, args: [{ isSignal: true, alias: "inWishlist", required: false }] }], wishlistLoading: [{ type: Input, args: [{ isSignal: true, alias: "wishlistLoading", required: false }] }], wishlistDisabled: [{ type: Input, args: [{ isSignal: true, alias: "wishlistDisabled", required: false }] }], toggleWishlist: [{ type: Output, args: ["toggleWishlist"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "libs/frontend/catalog/ui/src/lib/ui/product-card/product-card.ts", lineNumber: 15 });
})();

// libs/frontend/catalog/ui/src/lib/ui/table-best-price/table-best-price.ts
function TableBestPrice_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 13);
    \u0275\u0275element(2, "span", 14);
    \u0275\u0275elementStart(3, "a", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", item_r1.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9 ", item_r1.price);
  }
}
function TableBestPrice_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9 ", item_r2.price);
  }
}
var TableBestPrice = class _TableBestPrice {
  itemsTableBestPrice = input([], ...ngDevMode ? [{ debugName: "itemsTableBestPrice" }] : []);
  static \u0275fac = function TableBestPrice_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableBestPrice)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableBestPrice, selectors: [["app-table-best-price"]], inputs: { itemsTableBestPrice: [1, "itemsTableBestPrice"] }, decls: 18, vars: 0, consts: [[1, "container", "mx-auto", "mb-[100px]"], [1, "flex", "items-center", "mb-[70px]"], [1, "rounded-xl", "w-[8px]", "h-[37px]", "bg-[#8a33fd]"], [1, "ml-4", "text-3xl", "font-semibold", "text-[#3c4242]"], [1, "hidden", "md:block", "font-coresans"], [1, "grid", "grid-cols-[1fr_220px]", "border-b-2", "border-gray-300"], [1, "relative", "px-6", "py-4", "text-2xl", "font-semibold", "text-[#3c4242]"], [1, "absolute", "right-0", "top-4", "bottom-4", "w-px", "bg-gray-300"], [1, "px-6", "py-4", "text-right", "text-2xl", "font-semibold", "text-[#3c4242]"], [1, "divide-y", "divide-gray-200", "font-causten"], [1, "grid", "grid-cols-[1fr_220px]", "hover:bg-[#fafafa]", "transition-colors", "text-2xl"], [1, "md:hidden", "space-y-4", "font-causten"], [1, "border", "border-gray-200", "rounded-xl", "p-4", "flex", "justify-between", "items-start"], [1, "relative", "px-6", "py-4", "text-gray-600"], [1, "absolute", "right-0", "top-4", "bottom-4", "w-px", "bg-gray-200"], [1, "hover:text-[#8a33fd]", "transition-colors", 3, "routerLink"], [1, "px-6", "py-4", "text-right", "font-medium", "text-gray-800"], [1, "text-gray-700", "text-sm", "leading-snug", "pr-4"], [1, "font-semibold", "text-[#3c4242]", "whitespace-nowrap"]], template: function TableBestPrice_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "h2", 3);
      \u0275\u0275text(4, "Buy ... Clothing at Best Price");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6);
      \u0275\u0275element(8, "span", 7);
      \u0275\u0275text(9, " ... Clothing ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275text(11, "Best Price");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275repeaterCreate(13, TableBestPrice_For_14_Template, 7, 3, "div", 10, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 11);
      \u0275\u0275repeaterCreate(16, TableBestPrice_For_17_Template, 5, 2, "div", 12, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.itemsTableBestPrice());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.itemsTableBestPrice());
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableBestPrice, [{
    type: Component,
    args: [{ selector: "app-table-best-price", imports: [CommonModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="container mx-auto mb-[100px]">\n  <!-- Title -->\n  <div class="flex items-center mb-[70px]">\n    <span class="rounded-xl w-[8px] h-[37px] bg-[#8a33fd]"></span>\n    <h2 class="ml-4 text-3xl font-semibold text-[#3c4242]">Buy ... Clothing at Best Price</h2>\n  </div>\n\n  <!-- ===== Desktop / Tablet ===== -->\n  <div class="hidden md:block font-coresans">\n    <!-- Header -->\n    <div class="grid grid-cols-[1fr_220px] border-b-2 border-gray-300">\n      <div class="relative px-6 py-4 text-2xl font-semibold text-[#3c4242]">\n        <span class="absolute right-0 top-4 bottom-4 w-px bg-gray-300"></span>\n        ... Clothing\n      </div>\n      <div class="px-6 py-4 text-right text-2xl font-semibold text-[#3c4242]">Best Price</div>\n    </div>\n\n    <!-- Rows -->\n    <div class="divide-y divide-gray-200 font-causten">\n      @for (item of itemsTableBestPrice(); track $index) {\n        <div class="grid grid-cols-[1fr_220px] hover:bg-[#fafafa] transition-colors text-2xl">\n          <!-- Name -->\n          <div class="relative px-6 py-4 text-gray-600">\n            <span class="absolute right-0 top-4 bottom-4 w-px bg-gray-200"></span>\n            <a [routerLink]="item.link" class="hover:text-[#8a33fd] transition-colors">\n              {{ item.title }}\n            </a>\n          </div>\n\n          <!-- Price -->\n          <div class="px-6 py-4 text-right font-medium text-gray-800">\u20B9 {{ item.price }}</div>\n        </div>\n      }\n    </div>\n  </div>\n\n  <!-- ===== Mobile ===== -->\n  <div class="md:hidden space-y-4 font-causten">\n    @for (item of itemsTableBestPrice(); track $index) {\n      <div class="border border-gray-200 rounded-xl p-4 flex justify-between items-start">\n        <p class="text-gray-700 text-sm leading-snug pr-4">{{ item.title }}</p>\n        <span class="font-semibold text-[#3c4242] whitespace-nowrap">\u20B9 {{ item.price }}</span>\n      </div>\n    }\n  </div>\n</section>\n' }]
  }], null, { itemsTableBestPrice: [{ type: Input, args: [{ isSignal: true, alias: "itemsTableBestPrice", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableBestPrice, { className: "TableBestPrice", filePath: "libs/frontend/catalog/ui/src/lib/ui/table-best-price/table-best-price.ts", lineNumber: 13 });
})();

export {
  ProductCardComponent,
  TableBestPrice
};
//# sourceMappingURL=chunk-VRCWIN7C.js.map
