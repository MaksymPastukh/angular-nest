import {
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Bind,
  BindModule,
  C,
  K,
  P,
  PARENT_INSTANCE,
  R,
  Rt,
  Tt,
  U,
  W,
  Zt,
  dt,
  rr,
  s as s2,
  st,
  v,
  x
} from "./chunk-PV4HM4QP.js";
import {
  CommonModule,
  SharedModule,
  isPlatformBrowser,
  l,
  s
} from "./chunk-SJAIUEWT.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  PLATFORM_ID,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  effect,
  inject,
  input,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵgetInheritedFactory,
  ɵɵnamespaceSVG,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2WGIEBYO.js";

// node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs
var _c0 = ["data-p-icon", "chevron-right"];
var ChevronRightIcon = class _ChevronRightIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronRightIcon_BaseFactory;
    return function ChevronRightIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronRightIcon_BaseFactory || (\u0275ChevronRightIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronRightIcon)))(__ngFactoryType__ || _ChevronRightIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronRightIcon,
    selectors: [["", "data-p-icon", "chevron-right"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 1,
    vars: 0,
    consts: [["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]],
    template: function ChevronRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronRightIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="chevron-right"]',
      standalone: true,
      template: `
        <svg:path
            d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/ripple/index.mjs
var style = "\n    .p-ink {\n        display: block;\n        position: absolute;\n        background: dt('ripple.background');\n        border-radius: 100%;\n        transform: scale(0);\n        pointer-events: none;\n    }\n\n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n\n    @keyframes ripple {\n        100% {\n            opacity: 0;\n            transform: scale(2.5);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-ripple.mjs
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`
);
var classes = {
  root: "p-ink"
};
var RippleStyle = class _RippleStyle extends BaseStyle {
  name = "ripple";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RippleStyle_BaseFactory;
    return function RippleStyle_Factory(__ngFactoryType__) {
      return (\u0275RippleStyle_BaseFactory || (\u0275RippleStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RippleStyle)))(__ngFactoryType__ || _RippleStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RippleStyle,
    factory: _RippleStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleStyle, [{
    type: Injectable
  }], null, null);
})();
var RippleClasses;
(function(RippleClasses2) {
  RippleClasses2["root"] = "p-ink";
})(RippleClasses || (RippleClasses = {}));
var Ripple = class _Ripple extends BaseComponent {
  componentName = "Ripple";
  zone = inject(NgZone);
  _componentStyle = inject(RippleStyle);
  animationListener;
  mouseDownListener;
  timeout;
  constructor() {
    super();
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.config.ripple()) {
          this.zone.runOutsideAngular(() => {
            this.create();
            this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
          });
        } else {
          this.remove();
        }
      }
    });
  }
  onAfterViewInit() {
  }
  onMouseDown(event) {
    let ink = this.getInk();
    if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") {
      return;
    }
    !this.$unstyled() && P(ink, "p-ink-active");
    ink.setAttribute("data-p-ink-active", "false");
    if (!Tt(ink) && !Rt(ink)) {
      let d = Math.max(v(this.el.nativeElement), C(this.el.nativeElement));
      ink.style.height = d + "px";
      ink.style.width = d + "px";
    }
    let offset = K(this.el.nativeElement);
    let x2 = event.pageX - offset.left + this.document.body.scrollTop - Rt(ink) / 2;
    let y = event.pageY - offset.top + this.document.body.scrollLeft - Tt(ink) / 2;
    this.renderer.setStyle(ink, "top", y + "px");
    this.renderer.setStyle(ink, "left", x2 + "px");
    !this.$unstyled() && W(ink, "p-ink-active");
    ink.setAttribute("data-p-ink-active", "true");
    this.timeout = setTimeout(() => {
      let ink2 = this.getInk();
      if (ink2) {
        !this.$unstyled() && P(ink2, "p-ink-active");
        ink2.setAttribute("data-p-ink-active", "false");
      }
    }, 401);
  }
  getInk() {
    const children = this.el.nativeElement.children;
    for (let i = 0; i < children.length; i++) {
      if (typeof children[i].className === "string" && children[i].className.indexOf("p-ink") !== -1) {
        return children[i];
      }
    }
    return null;
  }
  resetInk() {
    let ink = this.getInk();
    if (ink) {
      !this.$unstyled() && P(ink, "p-ink-active");
      ink.setAttribute("data-p-ink-active", "false");
    }
  }
  onAnimationEnd(event) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    !this.$unstyled() && P(event.currentTarget, "p-ink-active");
    event.currentTarget.setAttribute("data-p-ink-active", "false");
  }
  create() {
    let ink = this.renderer.createElement("span");
    this.renderer.addClass(ink, "p-ink");
    this.renderer.appendChild(this.el.nativeElement, ink);
    this.renderer.setAttribute(ink, "data-p-ink", "true");
    this.renderer.setAttribute(ink, "data-p-ink-active", "false");
    this.renderer.setAttribute(ink, "aria-hidden", "true");
    this.renderer.setAttribute(ink, "role", "presentation");
    if (!this.animationListener) {
      this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
    }
  }
  remove() {
    let ink = this.getInk();
    if (ink) {
      this.mouseDownListener && this.mouseDownListener();
      this.animationListener && this.animationListener();
      this.mouseDownListener = null;
      this.animationListener = null;
      Zt(ink);
    }
  }
  onDestroy() {
    if (this.config && this.config.ripple()) {
      this.remove();
    }
  }
  static \u0275fac = function Ripple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Ripple)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Ripple,
    selectors: [["", "pRipple", ""]],
    hostAttrs: [1, "p-ripple"],
    features: [\u0275\u0275ProvidersFeature([RippleStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ripple, [{
    type: Directive,
    args: [{
      selector: "[pRipple]",
      host: {
        class: "p-ripple"
      },
      standalone: true,
      providers: [RippleStyle]
    }]
  }], () => [], null);
})();
var RippleModule = class _RippleModule {
  static \u0275fac = function RippleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RippleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RippleModule,
    imports: [Ripple],
    exports: [Ripple]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleModule, [{
    type: NgModule,
    args: [{
      imports: [Ripple],
      exports: [Ripple]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevrondown.mjs
var _c02 = ["data-p-icon", "chevron-down"];
var ChevronDownIcon = class _ChevronDownIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronDownIcon_BaseFactory;
    return function ChevronDownIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronDownIcon_BaseFactory || (\u0275ChevronDownIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronDownIcon)))(__ngFactoryType__ || _ChevronDownIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronDownIcon,
    selectors: [["", "data-p-icon", "chevron-down"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 1,
    vars: 0,
    consts: [["d", "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z", "fill", "currentColor"]],
    template: function ChevronDownIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronDownIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="chevron-down"]',
      standalone: true,
      template: `
        <svg:path
            d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronup.mjs
var _c03 = ["data-p-icon", "chevron-up"];
var ChevronUpIcon = class _ChevronUpIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ChevronUpIcon_BaseFactory;
    return function ChevronUpIcon_Factory(__ngFactoryType__) {
      return (\u0275ChevronUpIcon_BaseFactory || (\u0275ChevronUpIcon_BaseFactory = \u0275\u0275getInheritedFactory(_ChevronUpIcon)))(__ngFactoryType__ || _ChevronUpIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ChevronUpIcon,
    selectors: [["", "data-p-icon", "chevron-up"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 1,
    vars: 0,
    consts: [["d", "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z", "fill", "currentColor"]],
    template: function ChevronUpIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronUpIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="chevron-up"]',
      standalone: true,
      template: `
        <svg:path
            d="M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-spinner.mjs
var _c04 = ["data-p-icon", "spinner"];
var SpinnerIcon = class _SpinnerIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s2() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SpinnerIcon_BaseFactory;
    return function SpinnerIcon_Factory(__ngFactoryType__) {
      return (\u0275SpinnerIcon_BaseFactory || (\u0275SpinnerIcon_BaseFactory = \u0275\u0275getInheritedFactory(_SpinnerIcon)))(__ngFactoryType__ || _SpinnerIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SpinnerIcon,
    selectors: [["", "data-p-icon", "spinner"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 5,
    vars: 2,
    consts: [["d", "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SpinnerIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="spinner"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dom.mjs
var DomHandler = class _DomHandler {
  static zindex = 1e3;
  static calculatedScrollbarWidth = null;
  static calculatedScrollbarHeight = null;
  static browser;
  static addClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  }
  static addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.trim().split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.className += " " + styles[i];
        }
      }
    }
  }
  static removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  static removeMultipleClasses(element, classNames) {
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
    }
  }
  static hasClass(element, className) {
    if (element && className) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  }
  static siblings(element) {
    return Array.prototype.filter.call(element.parentNode.children, function(child) {
      return child !== element;
    });
  }
  static find(element, selector) {
    return Array.from(element.querySelectorAll(selector));
  }
  static findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  }
  static index(element) {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element)
        return num;
      if (children[i].nodeType == 1)
        num++;
    }
    return -1;
  }
  static indexWithinGroup(element, attributeName) {
    let children = element.parentNode ? element.parentNode.childNodes : [];
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element)
        return num;
      if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1)
        num++;
    }
    return -1;
  }
  static appendOverlay(overlay, target, appendTo = "self") {
    if (appendTo !== "self" && overlay && target) {
      this.appendChild(overlay, target);
    }
  }
  static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
    if (overlay && target) {
      if (calculateMinWidth) {
        overlay.style.minWidth = `${_DomHandler.getOuterWidth(target)}px`;
      }
      if (appendTo === "self") {
        this.relativePosition(overlay, target);
      } else {
        this.absolutePosition(overlay, target);
      }
    }
  }
  static relativePosition(element, target, gutter = true) {
    const getClosestRelativeElement = (el) => {
      if (!el)
        return;
      return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
    };
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    const relativeElement = getClosestRelativeElement(element);
    const relativeElementOffset = relativeElement?.getBoundingClientRect() || {
      top: -1 * windowScrollTop,
      left: -1 * windowScrollLeft
    };
    let top, left, origin2 = "top";
    if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
      top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
      origin2 = "bottom";
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight + targetOffset.top - relativeElementOffset.top;
      origin2 = "top";
    }
    const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
    const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
    if (elementDimensions.width > viewport.width) {
      left = (targetOffset.left - relativeElementOffset.left) * -1;
    } else if (horizontalOverflow > 0) {
      left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
    } else {
      left = targetOffset.left - relativeElementOffset.left;
    }
    element.style.top = top + "px";
    element.style.left = left + "px";
    element.style.transformOrigin = origin2;
    if (gutter) {
      const gutterValue = x(/-anchor-gutter$/)?.value;
      element.style.marginTop = origin2 === "bottom" ? `calc(${gutterValue ?? "2px"} * -1)` : gutterValue ?? "";
    }
  }
  static absolutePosition(element, target, gutter = true) {
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const elementOuterHeight = elementDimensions.height;
    const elementOuterWidth = elementDimensions.width;
    const targetOuterHeight = target.offsetHeight;
    const targetOuterWidth = target.offsetWidth;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    let top, left;
    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      element.style.transformOrigin = "bottom";
      if (top < 0) {
        top = windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
      element.style.transformOrigin = "top";
    }
    if (targetOffset.left + elementOuterWidth > viewport.width)
      left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
    else
      left = targetOffset.left + windowScrollLeft;
    element.style.top = top + "px";
    element.style.left = left + "px";
    gutter && (element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
  }
  static getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  }
  static getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  }
  static getHiddenElementOuterHeight(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementHeight = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementHeight;
  }
  static getHiddenElementOuterWidth(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementWidth = element.offsetWidth;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementWidth;
  }
  static getHiddenElementDimensions(element) {
    let dimensions = {};
    element.style.visibility = "hidden";
    element.style.display = "block";
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return dimensions;
  }
  static scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  }
  static fadeIn(element, duration) {
    element.style.opacity = 0;
    let last = +/* @__PURE__ */ new Date();
    let opacity = 0;
    let tick = function() {
      opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
      element.style.opacity = opacity;
      last = +/* @__PURE__ */ new Date();
      if (+opacity < 1) {
        if (window.requestAnimationFrame)
          window.requestAnimationFrame(tick);
        else
          setTimeout(tick, 16);
      }
    };
    tick();
  }
  static fadeOut(element, ms) {
    var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
    let fading = setInterval(() => {
      opacity = opacity - gap;
      if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
      }
      element.style.opacity = opacity;
    }, interval);
  }
  static getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  static getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }
  static matches(element, selector) {
    var p = Element.prototype;
    var f = p["matches"] || p.webkitMatchesSelector || p["mozMatchesSelector"] || p["msMatchesSelector"] || function(s3) {
      return [].indexOf.call(document.querySelectorAll(s3), this) !== -1;
    };
    return f.call(element, selector);
  }
  static getOuterWidth(el, margin) {
    let width = el.offsetWidth;
    if (margin) {
      let style5 = getComputedStyle(el);
      width += parseFloat(style5.marginLeft) + parseFloat(style5.marginRight);
    }
    return width;
  }
  static getHorizontalPadding(el) {
    let style5 = getComputedStyle(el);
    return parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight);
  }
  static getHorizontalMargin(el) {
    let style5 = getComputedStyle(el);
    return parseFloat(style5.marginLeft) + parseFloat(style5.marginRight);
  }
  static innerWidth(el) {
    let width = el.offsetWidth;
    let style5 = getComputedStyle(el);
    width += parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight);
    return width;
  }
  static width(el) {
    let width = el.offsetWidth;
    let style5 = getComputedStyle(el);
    width -= parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight);
    return width;
  }
  static getInnerHeight(el) {
    let height = el.offsetHeight;
    let style5 = getComputedStyle(el);
    height += parseFloat(style5.paddingTop) + parseFloat(style5.paddingBottom);
    return height;
  }
  static getOuterHeight(el, margin) {
    let height = el.offsetHeight;
    if (margin) {
      let style5 = getComputedStyle(el);
      height += parseFloat(style5.marginTop) + parseFloat(style5.marginBottom);
    }
    return height;
  }
  static getHeight(el) {
    let height = el.offsetHeight;
    let style5 = getComputedStyle(el);
    height -= parseFloat(style5.paddingTop) + parseFloat(style5.paddingBottom) + parseFloat(style5.borderTopWidth) + parseFloat(style5.borderBottomWidth);
    return height;
  }
  static getWidth(el) {
    let width = el.offsetWidth;
    let style5 = getComputedStyle(el);
    width -= parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight) + parseFloat(style5.borderLeftWidth) + parseFloat(style5.borderRightWidth);
    return width;
  }
  static getViewport() {
    let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
    return { width: w, height: h };
  }
  static getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  static replaceElementWith(element, replacementElement) {
    let parentNode = element.parentNode;
    if (!parentNode)
      throw `Can't replace element`;
    return parentNode.replaceChild(replacementElement, element);
  }
  static getUserAgent() {
    if (navigator && this.isClient()) {
      return navigator.userAgent;
    }
  }
  static isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      return true;
    }
    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      var rv = ua.indexOf("rv:");
      return true;
    }
    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      return true;
    }
    return false;
  }
  static isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  }
  static isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  }
  static isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  static appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target && target.el && target.el.nativeElement)
      target.el.nativeElement.appendChild(element);
    else
      throw "Cannot append " + target + " to " + element;
  }
  static removeChild(element, target) {
    if (this.isElement(target))
      target.removeChild(element);
    else if (target.el && target.el.nativeElement)
      target.el.nativeElement.removeChild(element);
    else
      throw "Cannot remove " + element + " from " + target;
  }
  static removeElement(element) {
    if (!("remove" in Element.prototype))
      element.parentNode?.removeChild(element);
    else
      element.remove();
  }
  static isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  }
  static calculateScrollbarWidth(el) {
    if (el) {
      let style5 = getComputedStyle(el);
      return el.offsetWidth - el.clientWidth - parseFloat(style5.borderLeftWidth) - parseFloat(style5.borderRightWidth);
    } else {
      if (this.calculatedScrollbarWidth !== null)
        return this.calculatedScrollbarWidth;
      let scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }
  static calculateScrollbarHeight() {
    if (this.calculatedScrollbarHeight !== null)
      return this.calculatedScrollbarHeight;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarHeight;
    return scrollbarHeight;
  }
  static invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  }
  static clearSelection() {
    if (window.getSelection && window.getSelection()) {
      if (window.getSelection()?.empty) {
        window.getSelection()?.empty();
      } else if (window.getSelection()?.removeAllRanges && (window.getSelection()?.rangeCount || 0) > 0 && (window.getSelection()?.getRangeAt(0)?.getClientRects()?.length || 0) > 0) {
        window.getSelection()?.removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  }
  static getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  }
  static resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  }
  static isInteger(value) {
    if (Number.isInteger) {
      return Number.isInteger(value);
    } else {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }
  }
  static isHidden(element) {
    return !element || element.offsetParent === null;
  }
  static isVisible(element) {
    return element && element.offsetParent != null;
  }
  static isExist(element) {
    return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
  }
  static focus(element, options) {
    element && document.activeElement !== element && element.focus(options);
  }
  static getFocusableSelectorString(selector = "") {
    return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`;
  }
  static getFocusableElements(element, selector = "") {
    let focusableElements = this.find(element, this.getFocusableSelectorString(selector));
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  }
  static getFocusableElement(element, selector = "") {
    let focusableElement = this.findSingle(element, this.getFocusableSelectorString(selector));
    if (focusableElement) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        return focusableElement;
    }
    return null;
  }
  static getFirstFocusableElement(element, selector = "") {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  }
  static getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  }
  static getNextFocusableElement(element, reverse = false) {
    const focusableElements = _DomHandler.getFocusableElements(element);
    let index = 0;
    if (focusableElements && focusableElements.length > 0) {
      const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
      if (reverse) {
        if (focusedIndex == -1 || focusedIndex === 0) {
          index = focusableElements.length - 1;
        } else {
          index = focusedIndex - 1;
        }
      } else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) {
        index = focusedIndex + 1;
      }
    }
    return focusableElements[index];
  }
  static generateZIndex() {
    this.zindex = this.zindex || 999;
    return ++this.zindex;
  }
  static getSelection() {
    if (window.getSelection)
      return window.getSelection()?.toString();
    else if (document.getSelection)
      return document.getSelection()?.toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  }
  static getTargetElement(target, el) {
    if (!target)
      return null;
    switch (target) {
      case "document":
        return document;
      case "window":
        return window;
      case "@next":
        return el?.nextElementSibling;
      case "@prev":
        return el?.previousElementSibling;
      case "@parent":
        return el?.parentElement;
      case "@grandparent":
        return el?.parentElement?.parentElement;
      default:
        const type = typeof target;
        if (type === "string") {
          return document.querySelector(target);
        } else if (type === "object" && target.hasOwnProperty("nativeElement")) {
          return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
        }
        const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
        const element = isFunction(target) ? target() : target;
        return element && element.nodeType === 9 || this.isExist(element) ? element : null;
    }
  }
  static isClient() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  static getAttribute(element, name) {
    if (element) {
      const value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === "true" || value === "false") {
        return value === "true";
      }
      return value;
    }
    return void 0;
  }
  static calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  }
  static blockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
    this.addClass(document.body, className);
  }
  static unblockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.removeProperty("--scrollbar-width");
    this.removeClass(document.body, className);
  }
  static createElement(type, attributes = {}, ...children) {
    if (type) {
      const element = document.createElement(type);
      this.setAttributes(element, attributes);
      element.append(...children);
      return element;
    }
    return void 0;
  }
  static setAttribute(element, attribute = "", value) {
    if (this.isElement(element) && value !== null && value !== void 0) {
      element.setAttribute(attribute, value);
    }
  }
  static setAttributes(element, attributes = {}) {
    if (this.isElement(element)) {
      const computedStyles = (rule, value) => {
        const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];
        return [value].flat().reduce((cv, v2) => {
          if (v2 !== null && v2 !== void 0) {
            const type = typeof v2;
            if (type === "string" || type === "number") {
              cv.push(v2);
            } else if (type === "object") {
              const _cv = Array.isArray(v2) ? computedStyles(rule, v2) : Object.entries(v2).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : !!_v ? _k : void 0);
              cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== void 0 && value !== null) {
          const matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === "pBind") {
            this.setAttributes(element, value);
          } else {
            value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  }
  static isFocusableElement(element, selector = "") {
    return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
  }
};
function blockBodyScroll() {
  st({ variableName: rr("scrollbar.width").name });
}
function unblockBodyScroll() {
  dt({ variableName: rr("scrollbar.width").name });
}
var ConnectedOverlayScrollHandler = class {
  element;
  listener;
  scrollableParents;
  constructor(element, listener = () => {
  }) {
    this.element = element;
    this.listener = listener;
  }
  bindScrollListener() {
    this.scrollableParents = DomHandler.getScrollableParents(this.element);
    for (let i = 0; i < this.scrollableParents.length; i++) {
      this.scrollableParents[i].addEventListener("scroll", this.listener);
    }
  }
  unbindScrollListener() {
    if (this.scrollableParents) {
      for (let i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].removeEventListener("scroll", this.listener);
      }
    }
  }
  destroy() {
    this.unbindScrollListener();
    this.element = null;
    this.listener = null;
    this.scrollableParents = null;
  }
};

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class _AutoFocus extends BaseComponent {
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus = false;
  focused = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  host = inject(ElementRef);
  onAfterContentChecked() {
    if (this.autofocus === false) {
      this.host.nativeElement.removeAttribute("autofocus");
    } else {
      this.host.nativeElement.setAttribute("autofocus", true);
    }
    if (!this.focused) {
      this.autoFocus();
    }
  }
  onAfterViewChecked() {
    if (!this.focused) {
      this.autoFocus();
    }
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this.autofocus) {
      setTimeout(() => {
        const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      });
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AutoFocus_BaseFactory;
    return function AutoFocus_Factory(__ngFactoryType__) {
      return (\u0275AutoFocus_BaseFactory || (\u0275AutoFocus_BaseFactory = \u0275\u0275getInheritedFactory(_AutoFocus)))(__ngFactoryType__ || _AutoFocus);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    inputs: {
      autofocus: [0, "pAutoFocus", "autofocus"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true
    }]
  }], null, {
    autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }]
  });
})();
var AutoFocusModule = class _AutoFocusModule {
  static \u0275fac = function AutoFocusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoFocusModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AutoFocusModule,
    imports: [AutoFocus],
    exports: [AutoFocus]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-fluid.mjs
var _c05 = ["*"];
var classes2 = {
  root: "p-fluid"
};
var FluidStyle = class _FluidStyle extends BaseStyle {
  name = "fluid";
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FluidStyle_BaseFactory;
    return function FluidStyle_Factory(__ngFactoryType__) {
      return (\u0275FluidStyle_BaseFactory || (\u0275FluidStyle_BaseFactory = \u0275\u0275getInheritedFactory(_FluidStyle)))(__ngFactoryType__ || _FluidStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FluidStyle,
    factory: _FluidStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidStyle, [{
    type: Injectable
  }], null, null);
})();
var FluidClasses;
(function(FluidClasses2) {
  FluidClasses2["root"] = "p-fluid";
})(FluidClasses || (FluidClasses = {}));
var FLUID_INSTANCE = new InjectionToken("FLUID_INSTANCE");
var Fluid = class _Fluid extends BaseComponent {
  componentName = "Fluid";
  $pcFluid = inject(FLUID_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(FluidStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Fluid_BaseFactory;
    return function Fluid_Factory(__ngFactoryType__) {
      return (\u0275Fluid_BaseFactory || (\u0275Fluid_BaseFactory = \u0275\u0275getInheritedFactory(_Fluid)))(__ngFactoryType__ || _Fluid);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Fluid,
    selectors: [["p-fluid"]],
    hostVars: 2,
    hostBindings: function Fluid_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([FluidStyle, {
      provide: FLUID_INSTANCE,
      useExisting: _Fluid
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Fluid
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c05,
    decls: 1,
    vars: 0,
    template: function Fluid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fluid, [{
    type: Component,
    args: [{
      selector: "p-fluid",
      template: ` <ng-content></ng-content> `,
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FluidStyle, {
        provide: FLUID_INSTANCE,
        useExisting: Fluid
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Fluid
      }],
      host: {
        "[class]": "cx('root')"
      },
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var FluidModule = class _FluidModule {
  static \u0275fac = function FluidModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FluidModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FluidModule,
    imports: [Fluid],
    exports: [Fluid]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Fluid]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidModule, [{
    type: NgModule,
    args: [{
      imports: [Fluid],
      exports: [Fluid]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/badge/index.mjs
var style3 = "\n    .p-badge {\n        display: inline-flex;\n        border-radius: dt('badge.border.radius');\n        align-items: center;\n        justify-content: center;\n        padding: dt('badge.padding');\n        background: dt('badge.primary.background');\n        color: dt('badge.primary.color');\n        font-size: dt('badge.font.size');\n        font-weight: dt('badge.font.weight');\n        min-width: dt('badge.min.width');\n        height: dt('badge.height');\n    }\n\n    .p-badge-dot {\n        width: dt('badge.dot.size');\n        min-width: dt('badge.dot.size');\n        height: dt('badge.dot.size');\n        border-radius: 50%;\n        padding: 0;\n    }\n\n    .p-badge-circle {\n        padding: 0;\n        border-radius: 50%;\n    }\n\n    .p-badge-secondary {\n        background: dt('badge.secondary.background');\n        color: dt('badge.secondary.color');\n    }\n\n    .p-badge-success {\n        background: dt('badge.success.background');\n        color: dt('badge.success.color');\n    }\n\n    .p-badge-info {\n        background: dt('badge.info.background');\n        color: dt('badge.info.color');\n    }\n\n    .p-badge-warn {\n        background: dt('badge.warn.background');\n        color: dt('badge.warn.color');\n    }\n\n    .p-badge-danger {\n        background: dt('badge.danger.background');\n        color: dt('badge.danger.color');\n    }\n\n    .p-badge-contrast {\n        background: dt('badge.contrast.background');\n        color: dt('badge.contrast.color');\n    }\n\n    .p-badge-sm {\n        font-size: dt('badge.sm.font.size');\n        min-width: dt('badge.sm.min.width');\n        height: dt('badge.sm.height');\n    }\n\n    .p-badge-lg {\n        font-size: dt('badge.lg.font.size');\n        min-width: dt('badge.lg.min.width');\n        height: dt('badge.lg.height');\n    }\n\n    .p-badge-xl {\n        font-size: dt('badge.xl.font.size');\n        min-width: dt('badge.xl.min.width');\n        height: dt('badge.xl.height');\n    }\n";

// node_modules/primeng/fesm2022/primeng-badge.mjs
var style4 = (
  /*css*/
  `
    ${style3}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`
);
var classes3 = {
  root: ({
    instance
  }) => {
    const value = typeof instance.value === "function" ? instance.value() : instance.value;
    const size = typeof instance.size === "function" ? instance.size() : instance.size;
    const badgeSize = typeof instance.badgeSize === "function" ? instance.badgeSize() : instance.badgeSize;
    const severity = typeof instance.severity === "function" ? instance.severity() : instance.severity;
    return ["p-badge p-component", {
      "p-badge-circle": s(value) && String(value).length === 1,
      "p-badge-dot": l(value),
      "p-badge-sm": size === "small" || badgeSize === "small",
      "p-badge-lg": size === "large" || badgeSize === "large",
      "p-badge-xl": size === "xlarge" || badgeSize === "xlarge",
      "p-badge-info": severity === "info",
      "p-badge-success": severity === "success",
      "p-badge-warn": severity === "warn",
      "p-badge-danger": severity === "danger",
      "p-badge-secondary": severity === "secondary",
      "p-badge-contrast": severity === "contrast"
    }];
  }
};
var BadgeStyle = class _BadgeStyle extends BaseStyle {
  name = "badge";
  style = style4;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BadgeStyle_BaseFactory;
    return function BadgeStyle_Factory(__ngFactoryType__) {
      return (\u0275BadgeStyle_BaseFactory || (\u0275BadgeStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BadgeStyle)))(__ngFactoryType__ || _BadgeStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BadgeStyle,
    factory: _BadgeStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeStyle, [{
    type: Injectable
  }], null, null);
})();
var BadgeClasses;
(function(BadgeClasses2) {
  BadgeClasses2["root"] = "p-badge";
})(BadgeClasses || (BadgeClasses = {}));
var BADGE_INSTANCE = new InjectionToken("BADGE_INSTANCE");
var BADGE_DIRECTIVE_INSTANCE = new InjectionToken("BADGE_DIRECTIVE_INSTANCE");
var BadgeDirective = class _BadgeDirective extends BaseComponent {
  $pcBadgeDirective = inject(BADGE_DIRECTIVE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  /**
   * Used to pass attributes to DOM elements inside the Badge component.
   * @defaultValue undefined
   * @deprecated use pBadgePT instead.
   * @group Props
   */
  ptBadgeDirective = input(...ngDevMode ? [void 0, {
    debugName: "ptBadgeDirective"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the Badge component.
   * @defaultValue undefined
   * @group Props
   */
  pBadgePT = input(...ngDevMode ? [void 0, {
    debugName: "pBadgePT"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   * @defaultValue undefined
   * @group Props
   */
  pBadgeUnstyled = input(...ngDevMode ? [void 0, {
    debugName: "pBadgeUnstyled"
  }] : []);
  /**
   * When specified, disables the component.
   * @group Props
   */
  disabled;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   * @deprecated use badgeSize instead.
   */
  set size(value) {
    this._size = value;
    console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
  }
  get size() {
    return this._size;
  }
  _size;
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value;
  /**
   * Inline style of the element.
   * @group Props
   */
  badgeStyle;
  /**
   * Class of the element.
   * @group Props
   */
  badgeStyleClass;
  id;
  badgeEl;
  _componentStyle = inject(BadgeStyle);
  get activeElement() {
    return this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
  }
  get canUpdateBadge() {
    return s(this.id) && !this.disabled;
  }
  constructor() {
    super();
    effect(() => {
      const pt = this.ptBadgeDirective() || this.pBadgePT();
      pt && this.directivePT.set(pt);
    });
    effect(() => {
      this.pBadgeUnstyled() && this.directiveUnstyled.set(this.pBadgeUnstyled());
    });
  }
  onChanges(changes) {
    const {
      value,
      size,
      severity,
      disabled,
      badgeStyle,
      badgeStyleClass
    } = changes;
    if (disabled) {
      this.toggleDisableState();
    }
    if (!this.canUpdateBadge) {
      return;
    }
    if (severity) {
      this.setSeverity(severity.previousValue);
    }
    if (size) {
      this.setSizeClasses();
    }
    if (value) {
      this.setValue();
    }
    if (badgeStyle || badgeStyleClass) {
      this.applyStyles();
    }
  }
  onAfterViewInit() {
    this.id = s2("pn_id_") + "_badge";
    this.renderBadgeContent();
  }
  setValue(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.value != null) {
      if (R(badge, "p-badge-dot")) {
        P(badge, "p-badge-dot");
      }
      if (this.value && String(this.value).length === 1) {
        W(badge, "p-badge-circle");
      } else {
        P(badge, "p-badge-circle");
      }
    } else {
      if (!R(badge, "p-badge-dot")) {
        W(badge, "p-badge-dot");
      }
      P(badge, "p-badge-circle");
    }
    badge.textContent = "";
    const badgeValue = this.value != null ? String(this.value) : "";
    this.renderer.appendChild(badge, this.document.createTextNode(badgeValue));
  }
  setSizeClasses(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.badgeSize) {
      if (this.badgeSize === "large") {
        W(badge, "p-badge-lg");
        P(badge, "p-badge-xl");
      }
      if (this.badgeSize === "xlarge") {
        W(badge, "p-badge-xl");
        P(badge, "p-badge-lg");
      }
    } else if (this.size && !this.badgeSize) {
      if (this.size === "large") {
        W(badge, "p-badge-lg");
        P(badge, "p-badge-xl");
      }
      if (this.size === "xlarge") {
        W(badge, "p-badge-xl");
        P(badge, "p-badge-lg");
      }
    } else {
      P(badge, "p-badge-lg");
      P(badge, "p-badge-xl");
    }
  }
  renderBadgeContent() {
    if (this.disabled) {
      return;
    }
    const el = this.activeElement;
    const badge = U("span", {
      class: this.cx("root"),
      id: this.id,
      "p-bind": this.ptm("root")
    });
    this.setSeverity(null, badge);
    this.setSizeClasses(badge);
    this.setValue(badge);
    W(el, "p-overlay-badge");
    this.renderer.appendChild(el, badge);
    this.badgeEl = badge;
    this.applyStyles();
  }
  applyStyles() {
    if (this.badgeEl && this.badgeStyle && typeof this.badgeStyle === "object") {
      for (const [key, value] of Object.entries(this.badgeStyle)) {
        this.renderer.setStyle(this.badgeEl, key, value);
      }
    }
    if (this.badgeEl && this.badgeStyleClass) {
      this.badgeEl.classList.add(...this.badgeStyleClass.split(" "));
    }
  }
  setSeverity(oldSeverity, element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this.severity) {
      W(badge, `p-badge-${this.severity}`);
    }
    if (oldSeverity) {
      P(badge, `p-badge-${oldSeverity}`);
    }
  }
  toggleDisableState() {
    if (!this.id) {
      return;
    }
    if (this.disabled) {
      const badge = this.activeElement?.querySelector(`#${this.id}`);
      if (badge) {
        this.renderer.removeChild(this.activeElement, badge);
      }
    } else {
      this.renderBadgeContent();
    }
  }
  static \u0275fac = function BadgeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BadgeDirective,
    selectors: [["", "pBadge", ""]],
    inputs: {
      ptBadgeDirective: [1, "ptBadgeDirective"],
      pBadgePT: [1, "pBadgePT"],
      pBadgeUnstyled: [1, "pBadgeUnstyled"],
      disabled: [0, "badgeDisabled", "disabled"],
      badgeSize: "badgeSize",
      size: "size",
      severity: "severity",
      value: "value",
      badgeStyle: "badgeStyle",
      badgeStyleClass: "badgeStyleClass"
    },
    features: [\u0275\u0275ProvidersFeature([BadgeStyle, {
      provide: BADGE_DIRECTIVE_INSTANCE,
      useExisting: _BadgeDirective
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _BadgeDirective
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeDirective, [{
    type: Directive,
    args: [{
      selector: "[pBadge]",
      providers: [BadgeStyle, {
        provide: BADGE_DIRECTIVE_INSTANCE,
        useExisting: BadgeDirective
      }, {
        provide: PARENT_INSTANCE,
        useExisting: BadgeDirective
      }],
      standalone: true
    }]
  }], () => [], {
    ptBadgeDirective: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptBadgeDirective",
        required: false
      }]
    }],
    pBadgePT: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pBadgePT",
        required: false
      }]
    }],
    pBadgeUnstyled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pBadgeUnstyled",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: ["badgeDisabled"]
    }],
    badgeSize: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    badgeStyle: [{
      type: Input
    }],
    badgeStyleClass: [{
      type: Input
    }]
  });
})();
var Badge = class _Badge extends BaseComponent {
  componentName = "Badge";
  $pcBadge = inject(BADGE_INSTANCE, {
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
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass = input(...ngDevMode ? [void 0, {
    debugName: "styleClass"
  }] : []);
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  badgeSize = input(...ngDevMode ? [void 0, {
    debugName: "badgeSize"
  }] : []);
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity = input(...ngDevMode ? [void 0, {
    debugName: "severity"
  }] : []);
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value = input(...ngDevMode ? [void 0, {
    debugName: "value"
  }] : []);
  /**
   * When specified, disables the component.
   * @group Props
   */
  badgeDisabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "badgeDisabled"
  } : {}), {
    transform: booleanAttribute
  }));
  _componentStyle = inject(BadgeStyle);
  get dataP() {
    return this.cn({
      circle: this.value() != null && String(this.value()).length === 1,
      empty: this.value() == null,
      disabled: this.badgeDisabled(),
      [this.severity()]: this.severity(),
      [this.size()]: this.size()
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Badge_BaseFactory;
    return function Badge_Factory(__ngFactoryType__) {
      return (\u0275Badge_BaseFactory || (\u0275Badge_BaseFactory = \u0275\u0275getInheritedFactory(_Badge)))(__ngFactoryType__ || _Badge);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Badge,
    selectors: [["p-badge"]],
    hostVars: 5,
    hostBindings: function Badge_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass()));
        \u0275\u0275styleProp("display", ctx.badgeDisabled() ? "none" : null);
      }
    },
    inputs: {
      styleClass: [1, "styleClass"],
      badgeSize: [1, "badgeSize"],
      size: [1, "size"],
      severity: [1, "severity"],
      value: [1, "value"],
      badgeDisabled: [1, "badgeDisabled"]
    },
    features: [\u0275\u0275ProvidersFeature([BadgeStyle, {
      provide: BADGE_INSTANCE,
      useExisting: _Badge
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Badge
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    template: function Badge_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0);
      }
      if (rf & 2) {
        \u0275\u0275textInterpolate(ctx.value());
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Badge, [{
    type: Component,
    args: [{
      selector: "p-badge",
      template: `{{ value() }}`,
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BadgeStyle, {
        provide: BADGE_INSTANCE,
        useExisting: Badge
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Badge
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass())",
        "[style.display]": 'badgeDisabled() ? "none" : null',
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "styleClass",
        required: false
      }]
    }],
    badgeSize: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "badgeSize",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    severity: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "severity",
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
    }],
    badgeDisabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "badgeDisabled",
        required: false
      }]
    }]
  });
})();
var BadgeModule = class _BadgeModule {
  static \u0275fac = function BadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BadgeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BadgeModule,
    imports: [Badge, BadgeDirective, SharedModule],
    exports: [Badge, BadgeDirective, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Badge, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      imports: [Badge, BadgeDirective, SharedModule],
      exports: [Badge, BadgeDirective, SharedModule]
    }]
  }], null, null);
})();

export {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  SpinnerIcon,
  Ripple,
  RippleModule,
  DomHandler,
  blockBodyScroll,
  unblockBodyScroll,
  ConnectedOverlayScrollHandler,
  AutoFocus,
  Fluid,
  Badge,
  BadgeModule
};
//# sourceMappingURL=chunk-VP3NVYXS.js.map
