import {
  Wishlist,
  WishlistItem
} from "./chunk-B6LYCBSR.js";
import {
  WISHLIST_ITEM_SOURCE,
  WishlistFacade
} from "./chunk-4GRK4EXP.js";
import "./chunk-WAPWYWJN.js";
import "./chunk-3DX3XWYM.js";
import "./chunk-I5AK7T3M.js";
import "./chunk-6QZB4DAZ.js";
import {
  Button,
  ButtonModule
} from "./chunk-MWDZSOMN.js";
import "./chunk-VP3NVYXS.js";
import "./chunk-CH46WUXX.js";
import "./chunk-C2RRMDEJ.js";
import "./chunk-SXE3IDZP.js";
import "./chunk-PV4HM4QP.js";
import "./chunk-M4TX5Q67.js";
import "./chunk-SJAIUEWT.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty
} from "./chunk-2WGIEBYO.js";

// libs/frontend/wishlist/ui/src/lib/ui/wishlist-toggle-button.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistButton, { className: "WishlistButton", filePath: "libs/frontend/wishlist/ui/src/lib/ui/wishlist-toggle-button.ts", lineNumber: 25 });
})();

// libs/frontend/wishlist/ui/src/lib/wishlist.routes.ts
var WISHLIST_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-3WTFUROH.js").then((c) => c.Wishlist)
  }
];
export {
  WISHLIST_ROUTES,
  Wishlist,
  WishlistButton,
  WishlistItem
};
//# sourceMappingURL=chunk-36R3RYGV.js.map
