import {
  WishlistFacade
} from "./chunk-4GRK4EXP.js";
import {
  ImageUrlPipe
} from "./chunk-WAPWYWJN.js";
import {
  toSignal
} from "./chunk-3DX3XWYM.js";
import {
  UiBreadcrumbComponent
} from "./chunk-I5AK7T3M.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from "./chunk-M4TX5Q67.js";
import {
  CurrencyPipe
} from "./chunk-SJAIUEWT.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  filter,
  inject,
  input,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2WGIEBYO.js";

// libs/frontend/wishlist/ui/src/lib/ui/wishlist-item-ui/wishlist-item.ts
var WishlistItem = class _WishlistItem {
  router = inject(Router);
  item = input.required(...ngDevMode ? [{ debugName: "item" }] : []);
  imageErrorHandled = signal(false, ...ngDevMode ? [{ debugName: "imageErrorHandled" }] : []);
  facadeWishlist = inject(WishlistFacade);
  title = () => this.item().product?.title ?? "Product";
  brand = () => this.item().product?.brand ?? "";
  price = () => this.item().product?.price;
  imageSrc = () => this.item().product?.images?.[0] ?? null;
  remove() {
    this.facadeWishlist.removeItem(this.item().productId);
  }
  onImageError(event) {
    if (this.imageErrorHandled())
      return;
    const img = event.target;
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
    this.imageErrorHandled.set(true);
  }
  navigateToDetail() {
    const prodId = this.item()?.product?._id;
    if (prodId) {
      void this.router.navigate(["/product", prodId]);
    } else {
      console.error("Product or product ID is undefined", prodId);
    }
  }
  static \u0275fac = function WishlistItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WishlistItem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistItem, selectors: [["app-wishlist-item"]], inputs: { item: [1, "item"] }, decls: 18, vars: 12, consts: [[1, "flex", "w-full", "items-center", "gap-10", "border-b", "border-slate-200", "py-6"], ["type", "button", "aria-label", "Remove", 1, "shrink-0", "rounded-full", "p-2", "cursor-pointer", "text-slate-500", "hover:bg-slate-100", "hover:text-slate-700", "active:scale-95", "transition", 3, "click"], ["width", "28", "height", "28", "viewBox", "0 0 22 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M18 4L4 18M18 18L4 4.00001", "stroke", "#3C4242", "stroke-width", "1.5", "stroke-linecap", "round"], [1, "h-28", "w-28", "shrink-0", "overflow-hidden", "rounded-xl", "bg-slate-100"], [1, "w-full", "max-w-xl", "aspect-4/5", "overflow-hidden"], [1, "h-full", "w-full", "object-cover", 3, "error", "src", "alt"], [1, "min-w-0", "flex-1"], ["type", "button", 1, "truncate", "text-left", "text-2xl", "font-family", "font-bold", "color-text-base", "cursor-pointer", 3, "click"], [1, "mt-2", "text-2xl", "font-family", "font-bold", "text-gray-500", "md:hidden"], [1, "hidden", "shrink-0", "text-xl", "font-family", "font-bold", "text-gray-500", "md:block"], ["type", "button", 1, "shrink-0", "rounded-lg", "bg-violet-600", "cursor-pointer", "px-6", "py-2.5", "text-lg", "font-semibold", "font-family", "text-white", "hover:bg-violet-700", "active:scale-95", "transition"]], template: function WishlistItem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275domListener("click", function WishlistItem_Template_button_click_1_listener($event) {
        $event.stopPropagation();
        return ctx.remove();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(2, "svg", 2);
      \u0275\u0275domElement(3, "path", 3);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(4, "div", 4)(5, "div", 5)(6, "img", 6);
      \u0275\u0275pipe(7, "imageUrl");
      \u0275\u0275domListener("error", function WishlistItem_Template_img_error_6_listener($event) {
        return ctx.onImageError($event);
      });
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(8, "div", 7)(9, "button", 8);
      \u0275\u0275domListener("click", function WishlistItem_Template_button_click_9_listener() {
        return ctx.navigateToDetail();
      });
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "div", 9);
      \u0275\u0275text(12);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "div", 10);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "currency");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "button", 11);
      \u0275\u0275text(17, " Add to cart ");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275domProperty("src", \u0275\u0275pipeBind1(7, 5, ctx.imageSrc()), \u0275\u0275sanitizeUrl)("alt", ctx.title());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.price(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(15, 7, ctx.price(), "USD", "symbol-narrow", "1.2-2"), " ");
    }
  }, dependencies: [CurrencyPipe, ImageUrlPipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistItem, [{
    type: Component,
    args: [{ selector: "app-wishlist-item", imports: [CurrencyPipe, ImageUrlPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex w-full items-center gap-10 border-b border-slate-200 py-6">
  <button
    type="button"
    (click)="$event.stopPropagation(); remove()"
    aria-label="Remove"
    class="shrink-0 rounded-full p-2 cursor-pointer text-slate-500 hover:bg-slate-100 hover:text-slate-700 active:scale-95 transition"
  >
    <svg width="28" height="28" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 4L4 18M18 18L4 4.00001"
        stroke="#3C4242"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  </button>
  <div class="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-slate-100">
    <div class="w-full max-w-xl aspect-4/5 overflow-hidden">
      <img
        class="h-full w-full object-cover"
        [src]="imageSrc() | imageUrl"
        [alt]="title()"
        (error)="onImageError($event)"
      />
    </div>
  </div>
  <div class="min-w-0 flex-1">
    <button
      type="button"
      class="truncate text-left text-2xl font-family font-bold color-text-base cursor-pointer"
      (click)="navigateToDetail()"
    >
      {{ title() }}
    </button>

    <div class="mt-2 text-2xl font-family font-bold text-gray-500 md:hidden">
      {{ price() }}
    </div>
  </div>
  <div class="hidden shrink-0 text-xl font-family font-bold text-gray-500 md:block">
    {{ price() | currency: 'USD' : 'symbol-narrow' : '1.2-2' }}
  </div>
  <button
    type="button"
    class="shrink-0 rounded-lg bg-violet-600 cursor-pointer px-6 py-2.5 text-lg font-semibold font-family text-white hover:bg-violet-700 active:scale-95 transition"
  >
    Add to cart
  </button>
</div>
` }]
  }], null, { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistItem, { className: "WishlistItem", filePath: "libs/frontend/wishlist/ui/src/lib/ui/wishlist-item-ui/wishlist-item.ts", lineNumber: 13 });
})();

// libs/frontend/wishlist/ui/src/lib/pages/wishlist/wishlist.ts
var _forTrack0 = ($index, $item) => $item.productId;
function Wishlist_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-wishlist-item", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("item", item_r1);
  }
}
var Wishlist = class _Wishlist {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  facadeWishlist = inject(WishlistFacade);
  constructor() {
    this.facadeWishlist.load({
      reset: true
    });
  }
  url = toSignal(this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map(() => this.router.url)), { initialValue: this.router.url });
  breadcrumbItems = computed(() => {
    this.url();
    const items = [
      { label: "Home", icon: "pi pi-home", routerLink: "/" },
      { label: "Wishlist" }
    ];
    let current = this.activeRoute.root;
    while (current.firstChild) {
      current = current.firstChild;
      const label = current.snapshot.data["breadcrumb"];
      if (label)
        items.push({ label });
    }
    return items;
  }, ...ngDevMode ? [{ debugName: "breadcrumbItems" }] : []);
  static \u0275fac = function Wishlist_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Wishlist)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Wishlist, selectors: [["app-component"]], decls: 5, vars: 1, consts: [[1, "container", "mx-auto", "px-7", "py-10.5"], [3, "items"], [1, "mt-8"], [3, "item"]], template: function Wishlist_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "app-ui-breadcrumb", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275repeaterCreate(3, Wishlist_For_4_Template, 1, 1, "app-wishlist-item", 3, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("items", ctx.breadcrumbItems());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.facadeWishlist.items());
    }
  }, dependencies: [WishlistItem, UiBreadcrumbComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=wishlist.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Wishlist, [{
    type: Component,
    args: [{ selector: "app-component", imports: [WishlistItem, UiBreadcrumbComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="container mx-auto px-7 py-10.5">\n  <app-ui-breadcrumb [items]="breadcrumbItems()" />\n  <div class="mt-8">\n    @for (item of facadeWishlist.items(); track item.productId) {\n      <app-wishlist-item [item]="item" />\n    }\n  </div>\n</section>\n', styles: ["/* libs/frontend/wishlist/ui/src/lib/pages/wishlist/wishlist.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=wishlist.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Wishlist, { className: "Wishlist", filePath: "libs/frontend/wishlist/ui/src/lib/pages/wishlist/wishlist.ts", lineNumber: 16 });
})();

export {
  WishlistItem,
  Wishlist
};
//# sourceMappingURL=chunk-B6LYCBSR.js.map
