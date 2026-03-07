import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-SMFOV6AR.js";
import "./chunk-GOMI4DH3.js";

// apps/marketplace-web/src/app/features/cart/pages/card/cart.ts
var Cart = class _Cart {
  static \u0275fac = function Cart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Cart)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Cart, selectors: [["app-cart"]], decls: 2, vars: 0, template: function Cart_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "Component is work");
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=cart.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cart, [{
    type: Component,
    args: [{ selector: "app-cart", imports: [], changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>Component is work</p>\n", styles: ["/* apps/marketplace-web/src/app/features/cart/pages/card/cart.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=cart.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Cart, { className: "Cart", filePath: "apps/marketplace-web/src/app/features/cart/pages/card/cart.ts", lineNumber: 10 });
})();
export {
  Cart
};
//# sourceMappingURL=chunk-OMOVZ2NH.js.map
