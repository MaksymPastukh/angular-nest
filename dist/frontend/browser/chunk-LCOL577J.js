import {
  ProductDetailFacade
} from "./chunk-WCJ7U5IL.js";
import {
  toSignal
} from "./chunk-OZMIQDZZ.js";
import {
  UiBreadcrumbComponent
} from "./chunk-CYXE43MA.js";
import "./chunk-LJIN2HB3.js";
import "./chunk-DOCLYP45.js";
import "./chunk-BEJS4TLU.js";
import {
  ActivatedRoute
} from "./chunk-JD54KQF2.js";
import {
  CommonModule
} from "./chunk-SLVXWW7T.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-IPMWBXXP.js";
import "./chunk-GOMI4DH3.js";

// apps/marketplace-web/src/app/features/product-detail/pages/size-guide-page/size-guide-page.ts
var SizeGuidePage = class _SizeGuidePage {
  route = inject(ActivatedRoute);
  facade = inject(ProductDetailFacade);
  productId = toSignal(this.route.params.pipe(map((params) => params["id"])));
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
  constructor() {
    effect(() => {
      const id = this.productId();
      if (id) {
        this.facade.load(id);
      }
    });
  }
  static \u0275fac = function SizeGuidePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SizeGuidePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SizeGuidePage, selectors: [["app-detail"]], decls: 110, vars: 1, consts: [[1, "container", "mx-auto", "px-4", "py-10"], [1, "text-3xl", "font-coresans", "text-gray-900", "mb-5"], [3, "items"], [1, "text-lg", "font-coresans", "text-gray-600", "mb-8"], [1, "text-lg", "font-family", "font-medium", "text-gray-900", "mb-4"], [1, "grid", "grid-cols-5", "bg-gray-50", "rounded-2xl", "overflow-hidden", "text-sm", "[&>div]:p-4", "[&>div]:border-gray-200", "[&>div]:border-b", "[&>div]:text-gray-700", "[&>div.header]:font-medium", "[&>div.header]:text-gray-900", "[&>div.header]:bg-gray-100"], [1, "header"], [1, "text-lg", "font-family", "font-medium", "text-gray-900", "mt-10", "mb-4"], [1, "grid", "grid-cols-4", "bg-gray-50", "rounded-2xl", "overflow-hidden", "text-sm", "[&>div]:p-4", "[&>div]:border-gray-200", "[&>div]:border-b", "[&>div]:text-gray-700", "[&>div.header]:font-medium", "[&>div.header]:text-gray-900", "[&>div.header]:bg-gray-100"]], template: function SizeGuidePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Size Guide");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-ui-breadcrumb", 2);
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, " Use the charts below to find your perfect fit. Measurements are in centimeters. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2", 4);
      \u0275\u0275text(7, "Clothing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
      \u0275\u0275text(10, "Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275text(12, "Chest");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 6);
      \u0275\u0275text(14, "Waist");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6);
      \u0275\u0275text(16, "Hips");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 6);
      \u0275\u0275text(18, "EU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div");
      \u0275\u0275text(20, "S");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div");
      \u0275\u0275text(22, "92\u201396");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div");
      \u0275\u0275text(24, "76\u201380");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div");
      \u0275\u0275text(26, "92\u201396");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div");
      \u0275\u0275text(28, "46");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div");
      \u0275\u0275text(30, "M");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div");
      \u0275\u0275text(32, "96\u2013100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div");
      \u0275\u0275text(34, "80\u201384");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div");
      \u0275\u0275text(36, "96\u2013100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div");
      \u0275\u0275text(38, "48");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div");
      \u0275\u0275text(40, "L");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div");
      \u0275\u0275text(42, "100\u2013104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div");
      \u0275\u0275text(44, "84\u201388");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div");
      \u0275\u0275text(46, "100\u2013104");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div");
      \u0275\u0275text(48, "50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div");
      \u0275\u0275text(50, "XL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div");
      \u0275\u0275text(52, "104\u2013108");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div");
      \u0275\u0275text(54, "88\u201392");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div");
      \u0275\u0275text(56, "104\u2013108");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div");
      \u0275\u0275text(58, "52");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "h2", 7);
      \u0275\u0275text(60, "Footwear");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 8)(62, "div", 6);
      \u0275\u0275text(63, "EU");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 6);
      \u0275\u0275text(65, "US");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 6);
      \u0275\u0275text(67, "UK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 6);
      \u0275\u0275text(69, "Foot length (cm)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div");
      \u0275\u0275text(71, "40");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div");
      \u0275\u0275text(73, "7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div");
      \u0275\u0275text(75, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div");
      \u0275\u0275text(77, "25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div");
      \u0275\u0275text(79, "41");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div");
      \u0275\u0275text(81, "8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div");
      \u0275\u0275text(83, "7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div");
      \u0275\u0275text(85, "26");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div");
      \u0275\u0275text(87, "42");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div");
      \u0275\u0275text(89, "9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div");
      \u0275\u0275text(91, "8");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div");
      \u0275\u0275text(93, "26.5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div");
      \u0275\u0275text(95, "43");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div");
      \u0275\u0275text(97, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div");
      \u0275\u0275text(99, "9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div");
      \u0275\u0275text(101, "27.5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div");
      \u0275\u0275text(103, "44");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div");
      \u0275\u0275text(105, "11");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div");
      \u0275\u0275text(107, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div");
      \u0275\u0275text(109, "28.5");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("items", ctx.breadcrumbItems());
    }
  }, dependencies: [CommonModule, UiBreadcrumbComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SizeGuidePage, [{
    type: Component,
    args: [{ selector: "app-detail", imports: [CommonModule, UiBreadcrumbComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="container mx-auto px-4 py-10">\n  <h1 class="text-3xl font-coresans text-gray-900 mb-5">Size Guide</h1>\n  <app-ui-breadcrumb [items]="breadcrumbItems()" />\n\n  <p class="text-lg font-coresans text-gray-600 mb-8">\n    Use the charts below to find your perfect fit. Measurements are in centimeters.\n  </p>\n\n  <h2 class="text-lg font-family font-medium text-gray-900 mb-4">Clothing</h2>\n\n  <div\n    class="grid grid-cols-5 bg-gray-50 rounded-2xl overflow-hidden text-sm [&>div]:p-4 [&>div]:border-gray-200 [&>div]:border-b [&>div]:text-gray-700 [&>div.header]:font-medium [&>div.header]:text-gray-900 [&>div.header]:bg-gray-100"\n  >\n    <div class="header">Size</div>\n    <div class="header">Chest</div>\n    <div class="header">Waist</div>\n    <div class="header">Hips</div>\n    <div class="header">EU</div>\n\n    <div>S</div>\n    <div>92\u201396</div>\n    <div>76\u201380</div>\n    <div>92\u201396</div>\n    <div>46</div>\n\n    <div>M</div>\n    <div>96\u2013100</div>\n    <div>80\u201384</div>\n    <div>96\u2013100</div>\n    <div>48</div>\n\n    <div>L</div>\n    <div>100\u2013104</div>\n    <div>84\u201388</div>\n    <div>100\u2013104</div>\n    <div>50</div>\n\n    <div>XL</div>\n    <div>104\u2013108</div>\n    <div>88\u201392</div>\n    <div>104\u2013108</div>\n    <div>52</div>\n  </div>\n\n  <h2 class="text-lg font-family font-medium text-gray-900 mt-10 mb-4">Footwear</h2>\n\n  <div\n    class="grid grid-cols-4 bg-gray-50 rounded-2xl overflow-hidden text-sm [&>div]:p-4 [&>div]:border-gray-200 [&>div]:border-b [&>div]:text-gray-700 [&>div.header]:font-medium [&>div.header]:text-gray-900 [&>div.header]:bg-gray-100"\n  >\n    <div class="header">EU</div>\n    <div class="header">US</div>\n    <div class="header">UK</div>\n    <div class="header">Foot length (cm)</div>\n\n    <div>40</div>\n    <div>7</div>\n    <div>6</div>\n    <div>25</div>\n\n    <div>41</div>\n    <div>8</div>\n    <div>7</div>\n    <div>26</div>\n\n    <div>42</div>\n    <div>9</div>\n    <div>8</div>\n    <div>26.5</div>\n\n    <div>43</div>\n    <div>10</div>\n    <div>9</div>\n    <div>27.5</div>\n\n    <div>44</div>\n    <div>11</div>\n    <div>10</div>\n    <div>28.5</div>\n  </div>\n</section>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SizeGuidePage, { className: "SizeGuidePage", filePath: "apps/marketplace-web/src/app/features/product-detail/pages/size-guide-page/size-guide-page.ts", lineNumber: 16 });
})();
export {
  SizeGuidePage
};
//# sourceMappingURL=chunk-LCOL577J.js.map
