import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-2WGIEBYO.js";

// libs/frontend/cart/feature-cart-page/src/lib/pages/card/cart.ts
var Cart = class _Cart {
  static \u0275fac = function Cart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Cart)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Cart, selectors: [["app-cart"]], decls: 3, vars: 0, template: function Cart_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "Component is work");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(2, ";\n");
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=cart.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cart, [{
    type: Component,
    args: [{ selector: "app-cart", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>Component is work</p>;\n", styles: ["/* libs/frontend/cart/feature-cart-page/src/lib/pages/card/cart.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=cart.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Cart, { className: "Cart", filePath: "libs/frontend/cart/feature-cart-page/src/lib/pages/card/cart.ts", lineNumber: 10 });
})();

export {
  Cart
};
//# sourceMappingURL=chunk-ILUXJWON.js.map
