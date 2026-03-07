import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-SMFOV6AR.js";
import "./chunk-GOMI4DH3.js";

// apps/marketplace-web/src/app/features/personal/pages/order/order.ts
var Order = class _Order {
  static \u0275fac = function Order_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Order)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Order, selectors: [["app-order"]], decls: 2, vars: 0, template: function Order_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "order works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Order, [{
    type: Component,
    args: [{ selector: "app-order", imports: [], template: "<p>order works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Order, { className: "Order", filePath: "apps/marketplace-web/src/app/features/personal/pages/order/order.ts", lineNumber: 9 });
})();
export {
  Order
};
//# sourceMappingURL=chunk-BVOZEDRY.js.map
