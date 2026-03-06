import {
  AutoFocus,
  Badge,
  BaseEditableHolder,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  Ripple,
  Select,
  Tooltip,
  TooltipModule
} from "./chunk-LJIN2HB3.js";
import {
  $,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Bind,
  BindModule,
  FormsModule,
  Motion,
  MotionModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  P,
  PARENT_INSTANCE,
  Q,
  V,
  W,
  bt,
  k,
  s,
  transformToBoolean,
  vt,
  z
} from "./chunk-BEJS4TLU.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-JD54KQF2.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  PrimeTemplate,
  SharedModule,
  isPlatformBrowser
} from "./chunk-SLVXWW7T.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  contentChild,
  forwardRef,
  inject,
  input,
  model,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
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
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IPMWBXXP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/primeng/fesm2022/primeng-icons-home.mjs
var _c0 = ["data-p-icon", "home"];
var HomeIcon = class _HomeIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275HomeIcon_BaseFactory;
    return function HomeIcon_Factory(__ngFactoryType__) {
      return (\u0275HomeIcon_BaseFactory || (\u0275HomeIcon_BaseFactory = \u0275\u0275getInheritedFactory(_HomeIcon)))(__ngFactoryType__ || _HomeIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _HomeIcon,
    selectors: [["", "data-p-icon", "home"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M13.4175 6.79971C13.2874 6.80029 13.1608 6.75807 13.057 6.67955L12.4162 6.19913V12.6073C12.4141 12.7659 12.3502 12.9176 12.2379 13.0298C12.1257 13.142 11.9741 13.206 11.8154 13.208H8.61206C8.61179 13.208 8.61151 13.208 8.61123 13.2081C8.61095 13.208 8.61068 13.208 8.6104 13.208H5.41076C5.40952 13.208 5.40829 13.2081 5.40705 13.2081C5.40581 13.2081 5.40458 13.208 5.40334 13.208H2.20287C2.04418 13.206 1.89257 13.142 1.78035 13.0298C1.66813 12.9176 1.60416 12.7659 1.60209 12.6073V6.19914L0.961256 6.67955C0.833786 6.77515 0.673559 6.8162 0.515823 6.79367C0.358086 6.77114 0.215762 6.68686 0.120159 6.55939C0.0245566 6.43192 -0.0164931 6.2717 0.00604063 6.11396C0.0285744 5.95622 0.112846 5.8139 0.240316 5.7183L1.83796 4.52007L1.84689 4.51337L6.64868 0.912027C6.75267 0.834032 6.87915 0.79187 7.00915 0.79187C7.13914 0.79187 7.26562 0.834032 7.36962 0.912027L12.1719 4.51372L12.1799 4.51971L13.778 5.7183C13.8943 5.81278 13.9711 5.94732 13.9934 6.09553C14.0156 6.24373 13.9816 6.39489 13.8981 6.51934C13.8471 6.60184 13.7766 6.67054 13.6928 6.71942C13.609 6.76831 13.5144 6.79587 13.4175 6.79971ZM6.00783 12.0065H8.01045V7.60074H6.00783V12.0065ZM9.21201 12.0065V6.99995C9.20994 6.84126 9.14598 6.68965 9.03375 6.57743C8.92153 6.46521 8.76992 6.40124 8.61123 6.39917H5.40705C5.24836 6.40124 5.09675 6.46521 4.98453 6.57743C4.8723 6.68965 4.80834 6.84126 4.80627 6.99995V12.0065H2.80366V5.29836L7.00915 2.14564L11.2146 5.29836V12.0065H9.21201Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function HomeIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="home"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.4175 6.79971C13.2874 6.80029 13.1608 6.75807 13.057 6.67955L12.4162 6.19913V12.6073C12.4141 12.7659 12.3502 12.9176 12.2379 13.0298C12.1257 13.142 11.9741 13.206 11.8154 13.208H8.61206C8.61179 13.208 8.61151 13.208 8.61123 13.2081C8.61095 13.208 8.61068 13.208 8.6104 13.208H5.41076C5.40952 13.208 5.40829 13.2081 5.40705 13.2081C5.40581 13.2081 5.40458 13.208 5.40334 13.208H2.20287C2.04418 13.206 1.89257 13.142 1.78035 13.0298C1.66813 12.9176 1.60416 12.7659 1.60209 12.6073V6.19914L0.961256 6.67955C0.833786 6.77515 0.673559 6.8162 0.515823 6.79367C0.358086 6.77114 0.215762 6.68686 0.120159 6.55939C0.0245566 6.43192 -0.0164931 6.2717 0.00604063 6.11396C0.0285744 5.95622 0.112846 5.8139 0.240316 5.7183L1.83796 4.52007L1.84689 4.51337L6.64868 0.912027C6.75267 0.834032 6.87915 0.79187 7.00915 0.79187C7.13914 0.79187 7.26562 0.834032 7.36962 0.912027L12.1719 4.51372L12.1799 4.51971L13.778 5.7183C13.8943 5.81278 13.9711 5.94732 13.9934 6.09553C14.0156 6.24373 13.9816 6.39489 13.8981 6.51934C13.8471 6.60184 13.7766 6.67054 13.6928 6.71942C13.609 6.76831 13.5144 6.79587 13.4175 6.79971ZM6.00783 12.0065H8.01045V7.60074H6.00783V12.0065ZM9.21201 12.0065V6.99995C9.20994 6.84126 9.14598 6.68965 9.03375 6.57743C8.92153 6.46521 8.76992 6.40124 8.61123 6.39917H5.40705C5.24836 6.40124 5.09675 6.46521 4.98453 6.57743C4.8723 6.68965 4.80834 6.84126 4.80627 6.99995V12.0065H2.80366V5.29836L7.00915 2.14564L11.2146 5.29836V12.0065H9.21201Z"
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

// node_modules/primeng/fesm2022/primeng-icons-star.mjs
var _c02 = ["data-p-icon", "star"];
var StarIcon = class _StarIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StarIcon_BaseFactory;
    return function StarIcon_Factory(__ngFactoryType__) {
      return (\u0275StarIcon_BaseFactory || (\u0275StarIcon_BaseFactory = \u0275\u0275getInheritedFactory(_StarIcon)))(__ngFactoryType__ || _StarIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StarIcon,
    selectors: [["", "data-p-icon", "star"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 5,
    vars: 2,
    consts: [["d", "M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function StarIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="star"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z"
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

// node_modules/primeng/fesm2022/primeng-icons-starfill.mjs
var _c03 = ["data-p-icon", "star-fill"];
var StarFillIcon = class _StarFillIcon extends BaseIcon {
  pathId;
  onInit() {
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StarFillIcon_BaseFactory;
    return function StarFillIcon_Factory(__ngFactoryType__) {
      return (\u0275StarFillIcon_BaseFactory || (\u0275StarFillIcon_BaseFactory = \u0275\u0275getInheritedFactory(_StarFillIcon)))(__ngFactoryType__ || _StarFillIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StarFillIcon,
    selectors: [["", "data-p-icon", "star-fill"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 5,
    vars: 2,
    consts: [["d", "M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function StarFillIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarFillIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="star-fill"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
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

// node_modules/@primeuix/styles/dist/breadcrumb/index.mjs
var style = "\n    .p-breadcrumb {\n        background: dt('breadcrumb.background');\n        padding: dt('breadcrumb.padding');\n        overflow-x: auto;\n    }\n\n    .p-breadcrumb-list {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        display: flex;\n        align-items: center;\n        flex-wrap: nowrap;\n        gap: dt('breadcrumb.gap');\n    }\n\n    .p-breadcrumb-separator {\n        display: flex;\n        align-items: center;\n        color: dt('breadcrumb.separator.color');\n    }\n\n    .p-breadcrumb-separator-icon:dir(rtl) {\n        transform: rotate(180deg);\n    }\n\n    .p-breadcrumb::-webkit-scrollbar {\n        display: none;\n    }\n\n    .p-breadcrumb-item-link {\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n        gap: dt('breadcrumb.item.gap');\n        transition:\n            background dt('breadcrumb.transition.duration'),\n            color dt('breadcrumb.transition.duration'),\n            outline-color dt('breadcrumb.transition.duration'),\n            box-shadow dt('breadcrumb.transition.duration');\n        border-radius: dt('breadcrumb.item.border.radius');\n        outline-color: transparent;\n        color: dt('breadcrumb.item.color');\n    }\n\n    .p-breadcrumb-item-link:focus-visible {\n        box-shadow: dt('breadcrumb.item.focus.ring.shadow');\n        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');\n        outline-offset: dt('breadcrumb.item.focus.ring.offset');\n    }\n\n    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {\n        color: dt('breadcrumb.item.hover.color');\n    }\n\n    .p-breadcrumb-item-label {\n        transition: inherit;\n    }\n\n    .p-breadcrumb-item-icon {\n        color: dt('breadcrumb.item.icon.color');\n        transition: inherit;\n    }\n\n    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {\n        color: dt('breadcrumb.item.icon.hover.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-breadcrumb.mjs
var _c04 = ["item"];
var _c1 = ["separator"];
var _c2 = (a0) => ({
  $implicit: a0
});
var _c3 = () => ({
  exact: false
});
var _c4 = (a0) => ({
  menuitem: a0
});
function Breadcrumb_li_2_Conditional_1_0_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_li_2_Conditional_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_li_2_Conditional_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_li_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_li_2_Conditional_1_0_Template, 1, 0, null, 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r0.home));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), ctx_r0.home.icon, ctx_r0.home.iconClass));
    \u0275\u0275property("ngStyle", ctx_r0.home.iconStyle)("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("itemIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), ctx_r0.home.labelClass));
    \u0275\u0275property("ngStyle", ctx_r0.home.labelStyle)("pBind", ctx_r0.ptm("itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.home.label);
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), ctx_r0.home.labelClass));
    \u0275\u0275property("ngStyle", ctx_r0.home.labelStyle)("innerHTML", ctx_r0.home.label, \u0275\u0275sanitizeHtml)("pBind", ctx_r0.ptm("itemLabel"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_span_1_Template, 2, 5, "span", 19)(2, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_ng_template_2_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlHomeLabel_r3 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.escape !== false)("ngIfElse", htmlHomeLabel_r3);
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_p_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 21);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("styleClass", ctx_r0.home.badgeStyleClass)("value", ctx_r0.home.badge)("pt", ctx_r0.ptm("pcBadge"))("unstyled", ctx_r0.unstyled());
  }
}
function Breadcrumb_li_2_Conditional_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function Breadcrumb_li_2_Conditional_2_a_0_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onClick($event, ctx_r0.home));
    });
    \u0275\u0275template(1, Breadcrumb_li_2_Conditional_2_a_0_span_1_Template, 1, 4, "span", 13)(2, Breadcrumb_li_2_Conditional_2_a_0__svg_svg_2_Template, 1, 3, "svg", 14)(3, Breadcrumb_li_2_Conditional_2_a_0_ng_container_3_Template, 4, 2, "ng-container", 15)(4, Breadcrumb_li_2_Conditional_2_a_0_p_badge_4_Template, 1, 4, "p-badge", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLink"), ctx_r0.home.linkClass));
    \u0275\u0275property("href", ctx_r0.home.url ? ctx_r0.home.url : null, \u0275\u0275sanitizeUrl)("ngStyle", ctx_r0.home.linkStyle)("target", ctx_r0.home.target)("pBind", ctx_r0.ptm("itemLink"));
    \u0275\u0275attribute("aria-label", ctx_r0.homeAriaLabel)("title", ctx_r0.home.title)("tabindex", ctx_r0.home.disabled ? null : ctx_r0.home.tabindex || "0")("data-automationid", ctx_r0.home.automationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.home.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.badge);
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), ctx_r0.home.icon, ctx_r0.home.iconClass));
    \u0275\u0275property("ngStyle", ctx_r0.home.iconStyle)("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r0.cx("itemIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("itemIcon"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), ctx_r0.home.labelClass));
    \u0275\u0275property("ngStyle", ctx_r0.home.labelStyle)("pBind", ctx_r0.ptm("itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.home.label);
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), ctx_r0.home.labelClass));
    \u0275\u0275property("ngStyle", ctx_r0.home.labelStyle)("innerHTML", ctx_r0.home.label, \u0275\u0275sanitizeHtml)("pBind", ctx_r0.ptm("itemLabel"));
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_span_1_Template, 2, 5, "span", 19)(2, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_ng_template_2_Template, 1, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlHomeRouteLabel_r5 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.escape !== false)("ngIfElse", htmlHomeRouteLabel_r5);
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_p_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 21);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("styleClass", ctx_r0.home.badgeStyleClass)("value", ctx_r0.home.badge)("pt", ctx_r0.ptm("pcBadge"))("unstyled", ctx_r0.unstyled());
  }
}
function Breadcrumb_li_2_Conditional_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275listener("click", function Breadcrumb_li_2_Conditional_2_a_1_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onClick($event, ctx_r0.home));
    });
    \u0275\u0275template(1, Breadcrumb_li_2_Conditional_2_a_1_span_1_Template, 1, 4, "span", 13)(2, Breadcrumb_li_2_Conditional_2_a_1__svg_svg_2_Template, 1, 3, "svg", 14)(3, Breadcrumb_li_2_Conditional_2_a_1_ng_container_3_Template, 4, 2, "ng-container", 15)(4, Breadcrumb_li_2_Conditional_2_a_1_p_badge_4_Template, 1, 4, "p-badge", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLink"), ctx_r0.home.linkClass));
    \u0275\u0275property("routerLink", ctx_r0.home.routerLink)("queryParams", ctx_r0.home.queryParams)("routerLinkActiveOptions", ctx_r0.home.routerLinkActiveOptions || \u0275\u0275pureFunction0(22, _c3))("ngStyle", ctx_r0.home.linkStyle)("target", ctx_r0.home.target)("fragment", ctx_r0.home.fragment)("queryParamsHandling", ctx_r0.home.queryParamsHandling)("preserveFragment", ctx_r0.home.preserveFragment)("skipLocationChange", ctx_r0.home.skipLocationChange)("replaceUrl", ctx_r0.home.replaceUrl)("state", ctx_r0.home.state)("pBind", ctx_r0.ptm("itemLink"));
    \u0275\u0275attribute("aria-label", ctx_r0.homeAriaLabel)("title", ctx_r0.home.title)("tabindex", ctx_r0.home.disabled ? null : ctx_r0.home.tabindex || "0")("data-automationid", ctx_r0.home.automationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.home.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.badge);
  }
}
function Breadcrumb_li_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_li_2_Conditional_2_a_0_Template, 5, 14, "a", 10)(1, Breadcrumb_li_2_Conditional_2_a_1_Template, 5, 23, "a", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.home.routerLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.home.routerLink);
  }
}
function Breadcrumb_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 8);
    \u0275\u0275conditionalCreate(1, Breadcrumb_li_2_Conditional_1_Template, 1, 4)(2, Breadcrumb_li_2_Conditional_2_Template, 2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("homeItem"), ctx_r0.home.styleClass));
    \u0275\u0275property("ngStyle", ctx_r0.home.style)("tooltipOptions", ctx_r0.home.tooltipOptions)("pBind", ctx_r0.ptm("homeItem"))("unstyled", ctx_r0.unstyled());
    \u0275\u0275attribute("id", ctx_r0.home.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.itemTemplate || ctx_r0._itemTemplate ? 1 : 2);
  }
}
function Breadcrumb_li_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pBind", ctx_r0.ptm("separatorIcon"));
  }
}
function Breadcrumb_li_3_2_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_li_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_li_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275template(1, Breadcrumb_li_3__svg_svg_1_Template, 1, 1, "svg", 23)(2, Breadcrumb_li_3_2_Template, 1, 0, null, 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("separator"));
    \u0275\u0275property("pBind", ctx_r0.ptm("separator"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.separatorTemplate && !ctx_r0._separatorTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.separatorTemplate || ctx_r0._separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_1_0_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_li_0_Conditional_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_ng_template_4_li_0_Conditional_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_ng_template_4_li_0_Conditional_1_0_Template, 1, 0, null, 9);
  }
  if (rf & 2) {
    const menuitem_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, menuitem_r6));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(5);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), menuitem_r6 == null ? null : menuitem_r6.icon, menuitem_r6 == null ? null : menuitem_r6.iconClass));
    \u0275\u0275property("ngStyle", menuitem_r6 == null ? null : menuitem_r6.iconStyle)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemIcon"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(6);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), menuitem_r6 == null ? null : menuitem_r6.labelClass));
    \u0275\u0275property("ngStyle", menuitem_r6 == null ? null : menuitem_r6.labelStyle)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuitem_r6 == null ? null : menuitem_r6.label);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(6);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), menuitem_r6 == null ? null : menuitem_r6.labelClass));
    \u0275\u0275property("ngStyle", menuitem_r6 == null ? null : menuitem_r6.labelStyle)("innerHTML", menuitem_r6 == null ? null : menuitem_r6.label, \u0275\u0275sanitizeHtml)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_span_1_Template, 2, 5, "span", 19)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_ng_template_2_Template, 1, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlLabel_r10 = \u0275\u0275reference(3);
    const menuitem_r6 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (menuitem_r6 == null ? null : menuitem_r6.escape) !== false)("ngIfElse", htmlLabel_r10);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_p_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 21);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(5);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("styleClass", menuitem_r6 == null ? null : menuitem_r6.badgeStyleClass)("value", menuitem_r6 == null ? null : menuitem_r6.badge)("pt", ctx_r0.getPTOptions(menuitem_r6, i_r9, "pcBadge"))("unstyled", ctx_r0.unstyled());
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_span_1_Template, 1, 4, "span", 13)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 15)(3, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_p_badge_3_Template, 1, 4, "p-badge", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const menuitem_r6 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.badge);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275listener("click", function Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const menuitem_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClick($event, menuitem_r6));
    });
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_ng_container_1_Template, 4, 3, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(3);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLink"), menuitem_r6 == null ? null : menuitem_r6.linkClass));
    \u0275\u0275property("ngStyle", menuitem_r6 == null ? null : menuitem_r6.linkStyle)("target", menuitem_r6 == null ? null : menuitem_r6.target)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLink"));
    \u0275\u0275attribute("href", (menuitem_r6 == null ? null : menuitem_r6.url) ? menuitem_r6 == null ? null : menuitem_r6.url : null, \u0275\u0275sanitizeUrl)("title", menuitem_r6 == null ? null : menuitem_r6.title)("tabindex", (menuitem_r6 == null ? null : menuitem_r6.disabled) ? null : (menuitem_r6 == null ? null : menuitem_r6.tabindex) || "0")("data-automationid", menuitem_r6 == null ? null : menuitem_r6.automationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.itemTemplate && !ctx_r0._itemTemplate);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(4);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), menuitem_r6 == null ? null : menuitem_r6.icon, menuitem_r6 == null ? null : menuitem_r6.iconClass));
    \u0275\u0275property("ngStyle", menuitem_r6 == null ? null : menuitem_r6.iconStyle)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemIcon"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(5);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), menuitem_r6 == null ? null : menuitem_r6.labelClass));
    \u0275\u0275property("ngStyle", menuitem_r6 == null ? null : menuitem_r6.labelStyle)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuitem_r6 == null ? null : menuitem_r6.label);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(5);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), menuitem_r6 == null ? null : menuitem_r6.labelClass));
    \u0275\u0275property("ngStyle", menuitem_r6 == null ? null : menuitem_r6.labelStyle)("innerHTML", menuitem_r6 == null ? null : menuitem_r6.label, \u0275\u0275sanitizeHtml)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLabel"));
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_span_1_Template, 2, 5, "span", 19)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_ng_template_2_Template, 1, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r12 = \u0275\u0275reference(3);
    const menuitem_r6 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (menuitem_r6 == null ? null : menuitem_r6.escape) !== false)("ngIfElse", htmlRouteLabel_r12);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_p_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 21);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(4);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("styleClass", menuitem_r6 == null ? null : menuitem_r6.badgeStyleClass)("value", menuitem_r6 == null ? null : menuitem_r6.badge)("pt", ctx_r0.getPTOptions(menuitem_r6, i_r9, "pcBadge"))("unstyled", ctx_r0.unstyled());
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275listener("click", function Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const menuitem_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClick($event, menuitem_r6));
    });
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_span_1_Template, 1, 4, "span", 13)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_ng_container_2_Template, 4, 2, "ng-container", 15)(3, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_p_badge_3_Template, 1, 4, "p-badge", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(3);
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("itemLink"), menuitem_r6 == null ? null : menuitem_r6.linkClass));
    \u0275\u0275property("routerLink", menuitem_r6 == null ? null : menuitem_r6.routerLink)("queryParams", menuitem_r6 == null ? null : menuitem_r6.queryParams)("routerLinkActiveOptions", (menuitem_r6 == null ? null : menuitem_r6.routerLinkActiveOptions) || \u0275\u0275pureFunction0(20, _c3))("ngStyle", menuitem_r6 == null ? null : menuitem_r6.linkStyle)("target", menuitem_r6 == null ? null : menuitem_r6.target)("fragment", menuitem_r6 == null ? null : menuitem_r6.fragment)("queryParamsHandling", menuitem_r6 == null ? null : menuitem_r6.queryParamsHandling)("preserveFragment", menuitem_r6 == null ? null : menuitem_r6.preserveFragment)("skipLocationChange", menuitem_r6 == null ? null : menuitem_r6.skipLocationChange)("replaceUrl", menuitem_r6 == null ? null : menuitem_r6.replaceUrl)("state", menuitem_r6 == null ? null : menuitem_r6.state)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "itemLink"));
    \u0275\u0275attribute("title", menuitem_r6 == null ? null : menuitem_r6.title)("tabindex", (menuitem_r6 == null ? null : menuitem_r6.disabled) ? null : (menuitem_r6 == null ? null : menuitem_r6.tabindex) || "0")("data-automationid", menuitem_r6 == null ? null : menuitem_r6.automationId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.badge);
  }
}
function Breadcrumb_ng_template_4_li_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_ng_template_4_li_0_Conditional_2_a_0_Template, 2, 10, "a", 28)(1, Breadcrumb_ng_template_4_li_0_Conditional_2_a_1_Template, 4, 21, "a", 11);
  }
  if (rf & 2) {
    const menuitem_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngIf", !(menuitem_r6 == null ? null : menuitem_r6.routerLink));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", menuitem_r6 == null ? null : menuitem_r6.routerLink);
  }
}
function Breadcrumb_ng_template_4_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 27);
    \u0275\u0275conditionalCreate(1, Breadcrumb_ng_template_4_li_0_Conditional_1_Template, 1, 4)(2, Breadcrumb_ng_template_4_li_0_Conditional_2_Template, 2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const menuitem_r6 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(menuitem_r6.style);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("item", \u0275\u0275pureFunction1(9, _c4, menuitem_r6)), menuitem_r6.styleClass));
    \u0275\u0275property("tooltipOptions", menuitem_r6.tooltipOptions)("pBind", ctx_r0.getPTOptions(menuitem_r6, i_r9, "item"))("pTooltipUnstyled", ctx_r0.unstyled());
    \u0275\u0275attribute("id", menuitem_r6.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.itemTemplate || ctx_r0._itemTemplate ? 1 : 2);
  }
}
function Breadcrumb_ng_template_4_li_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r0.ptm("separatorIcon"));
  }
}
function Breadcrumb_ng_template_4_li_1_2_ng_template_0_Template(rf, ctx) {
}
function Breadcrumb_ng_template_4_li_1_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_ng_template_4_li_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275template(1, Breadcrumb_ng_template_4_li_1__svg_svg_1_Template, 1, 1, "svg", 23)(2, Breadcrumb_ng_template_4_li_1_2_Template, 1, 0, null, 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("separator"));
    \u0275\u0275property("pBind", ctx_r0.ptm("separator"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.separatorTemplate && !ctx_r0._separatorTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.separatorTemplate || ctx_r0._separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Breadcrumb_ng_template_4_li_0_Template, 3, 11, "li", 26)(1, Breadcrumb_ng_template_4_li_1_Template, 3, 5, "li", 6);
  }
  if (rf & 2) {
    const menuitem_r6 = ctx.$implicit;
    const end_r13 = ctx.last;
    \u0275\u0275property("ngIf", menuitem_r6.visible !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !end_r13 && menuitem_r6.visible !== false);
  }
}
var classes = {
  root: () => ["p-breadcrumb p-component"],
  list: "p-breadcrumb-list",
  homeItem: "p-breadcrumb-home-item",
  separator: "p-breadcrumb-separator",
  item: ({
    menuitem
  }) => ["p-breadcrumb-item", {
    "p-disabled": menuitem.disabled
  }],
  itemLink: "p-breadcrumb-item-link",
  itemIcon: "p-breadcrumb-item-icon",
  itemLabel: "p-breadcrumb-item-label"
};
var BreadCrumbStyle = class _BreadCrumbStyle extends BaseStyle {
  name = "breadcrumb";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BreadCrumbStyle_BaseFactory;
    return function BreadCrumbStyle_Factory(__ngFactoryType__) {
      return (\u0275BreadCrumbStyle_BaseFactory || (\u0275BreadCrumbStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BreadCrumbStyle)))(__ngFactoryType__ || _BreadCrumbStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BreadCrumbStyle,
    factory: _BreadCrumbStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbStyle, [{
    type: Injectable
  }], null, null);
})();
var BreadcrumbClasses;
(function(BreadcrumbClasses2) {
  BreadcrumbClasses2["root"] = "p-breadcrumb";
  BreadcrumbClasses2["list"] = "p-breadcrumb-list";
  BreadcrumbClasses2["homeItem"] = "p-breadcrumb-home-item";
  BreadcrumbClasses2["separator"] = "p-breadcrumb-separator";
  BreadcrumbClasses2["item"] = "p-breadcrumb-item";
  BreadcrumbClasses2["itemLink"] = "p-breadcrumb-item-link";
  BreadcrumbClasses2["itemIcon"] = "p-breadcrumb-item-icon";
  BreadcrumbClasses2["itemLabel"] = "p-breadcrumb-item-label";
})(BreadcrumbClasses || (BreadcrumbClasses = {}));
var BREADCRUMB_INSTANCE = new InjectionToken("BREADCRUMB_INSTANCE");
var Breadcrumb = class _Breadcrumb extends BaseComponent {
  componentName = "Breadcrumb";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * MenuItem configuration for the home icon.
   * @group Props
   */
  home;
  /**
   * Defines a string that labels the home icon for accessibility.
   * @group Props
   */
  homeAriaLabel;
  /**
   * Fired when an item is selected.
   * @param {BreadcrumbItemClickEvent} event - custom click event.
   * @group Emits
   */
  onItemClick = new EventEmitter();
  _componentStyle = inject(BreadCrumbStyle);
  router = inject(Router);
  onClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    this.onItemClick.emit({
      originalEvent: event,
      item
    });
  }
  /**
   * Custom item template.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom separator template.
   * @group Templates
   */
  separatorTemplate;
  templates;
  _separatorTemplate;
  _itemTemplate;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "separator":
          this._separatorTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  getPTOptions(item, index, key) {
    return this.ptm(key, {
      context: {
        item,
        index
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Breadcrumb_BaseFactory;
    return function Breadcrumb_Factory(__ngFactoryType__) {
      return (\u0275Breadcrumb_BaseFactory || (\u0275Breadcrumb_BaseFactory = \u0275\u0275getInheritedFactory(_Breadcrumb)))(__ngFactoryType__ || _Breadcrumb);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Breadcrumb,
    selectors: [["p-breadcrumb"]],
    contentQueries: function Breadcrumb_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c04, 5)(dirIndex, _c1, 5)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.separatorTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      model: "model",
      style: "style",
      styleClass: "styleClass",
      home: "home",
      homeAriaLabel: "homeAriaLabel"
    },
    outputs: {
      onItemClick: "onItemClick"
    },
    features: [\u0275\u0275ProvidersFeature([BreadCrumbStyle, {
      provide: BREADCRUMB_INSTANCE,
      useExisting: _Breadcrumb
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Breadcrumb
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 11,
    consts: [["htmlHomeLabel", ""], ["htmlHomeRouteLabel", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "pBind"], ["pTooltip", "", 3, "class", "ngStyle", "tooltipOptions", "pBind", "unstyled", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["pTooltip", "", 3, "ngStyle", "tooltipOptions", "pBind", "unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "href", "class", "ngStyle", "target", "pBind", "click", 4, "ngIf"], ["routerLinkActive", "p-menuitem-link-active", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "class", "ngStyle", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind", "click", 4, "ngIf"], [3, "click", "href", "ngStyle", "target", "pBind"], [3, "class", "ngStyle", "pBind", 4, "ngIf"], ["data-p-icon", "home", 3, "class", "pBind", 4, "ngIf"], [4, "ngIf"], [3, "styleClass", "value", "pt", "unstyled", 4, "ngIf"], [3, "ngStyle", "pBind"], ["data-p-icon", "home", 3, "pBind"], [3, "class", "ngStyle", "pBind", 4, "ngIf", "ngIfElse"], [3, "ngStyle", "innerHTML", "pBind"], [3, "styleClass", "value", "pt", "unstyled"], ["routerLinkActive", "p-menuitem-link-active", 3, "click", "routerLink", "queryParams", "routerLinkActiveOptions", "ngStyle", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "pBind"], ["data-p-icon", "chevron-right", 3, "pBind", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-right", 3, "pBind"], ["pTooltip", "", 3, "class", "style", "tooltipOptions", "pBind", "pTooltipUnstyled", 4, "ngIf"], ["pTooltip", "", 3, "tooltipOptions", "pBind", "pTooltipUnstyled"], [3, "class", "ngStyle", "target", "pBind", "click", 4, "ngIf"], [3, "click", "ngStyle", "target", "pBind"]],
    template: function Breadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 4)(1, "ol", 4);
        \u0275\u0275template(2, Breadcrumb_li_2_Template, 3, 8, "li", 5)(3, Breadcrumb_li_3_Template, 3, 5, "li", 6)(4, Breadcrumb_ng_template_4_Template, 2, 2, "ng-template", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.style);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        \u0275\u0275property("pBind", ctx.ptm("root"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("list"));
        \u0275\u0275property("pBind", ctx.ptm("list"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.home && ctx.home.visible !== false);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.model && ctx.home);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.model);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, TooltipModule, Tooltip, Bind, ChevronRightIcon, HomeIcon, SharedModule, Badge],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Breadcrumb, [{
    type: Component,
    args: [{
      selector: "p-breadcrumb",
      standalone: true,
      imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, TooltipModule, ChevronRightIcon, HomeIcon, SharedModule, Bind, Badge],
      template: `
        <nav [pBind]="ptm('root')" [class]="cn(cx('root'), styleClass)" [style]="style">
            <ol [class]="cx('list')" [pBind]="ptm('list')">
                <li [attr.id]="home.id" [class]="cn(cx('homeItem'), home.styleClass)" [ngStyle]="home.style" *ngIf="home && home.visible !== false" pTooltip [tooltipOptions]="home.tooltipOptions" [pBind]="ptm('homeItem')" [unstyled]="unstyled()">
                    @if (itemTemplate || _itemTemplate) {
                        <ng-template *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: home }"></ng-template>
                    } @else {
                        <a
                            [href]="home.url ? home.url : null"
                            *ngIf="!home.routerLink"
                            [attr.aria-label]="homeAriaLabel"
                            [class]="cn(cx('itemLink'), home.linkClass)"
                            [ngStyle]="home.linkStyle"
                            (click)="onClick($event, home)"
                            [target]="home.target"
                            [attr.title]="home.title"
                            [attr.tabindex]="home.disabled ? null : home.tabindex || '0'"
                            [attr.data-automationid]="home.automationId"
                            [pBind]="ptm('itemLink')"
                        >
                            <span *ngIf="home.icon" [class]="cn(cx('itemIcon'), home.icon, home.iconClass)" [ngStyle]="home.iconStyle" [pBind]="ptm('itemIcon')"></span>
                            <svg data-p-icon="home" *ngIf="!home.icon" [class]="cx('itemIcon')" [pBind]="ptm('itemIcon')" />
                            <ng-container *ngIf="home.label">
                                <span *ngIf="home.escape !== false; else htmlHomeLabel" [class]="cn(cx('itemLabel'), home.labelClass)" [ngStyle]="home.labelStyle" [pBind]="ptm('itemLabel')">{{ home.label }}</span>
                                <ng-template #htmlHomeLabel><span [class]="cn(cx('itemLabel'), home.labelClass)" [ngStyle]="home.labelStyle" [innerHTML]="home.label" [pBind]="ptm('itemLabel')"></span></ng-template>
                            </ng-container>
                            <p-badge *ngIf="home.badge" [styleClass]="home.badgeStyleClass" [value]="home.badge" [pt]="ptm('pcBadge')" [unstyled]="unstyled()" />
                        </a>
                        <a
                            *ngIf="home.routerLink"
                            [routerLink]="home.routerLink"
                            routerLinkActive="p-menuitem-link-active"
                            [attr.aria-label]="homeAriaLabel"
                            [queryParams]="home.queryParams"
                            [routerLinkActiveOptions]="home.routerLinkActiveOptions || { exact: false }"
                            [class]="cn(cx('itemLink'), home.linkClass)"
                            [ngStyle]="home.linkStyle"
                            (click)="onClick($event, home)"
                            [target]="home.target"
                            [attr.title]="home.title"
                            [attr.tabindex]="home.disabled ? null : home.tabindex || '0'"
                            [attr.data-automationid]="home.automationId"
                            [fragment]="home.fragment"
                            [queryParamsHandling]="home.queryParamsHandling"
                            [preserveFragment]="home.preserveFragment"
                            [skipLocationChange]="home.skipLocationChange"
                            [replaceUrl]="home.replaceUrl"
                            [state]="home.state"
                            [pBind]="ptm('itemLink')"
                        >
                            <span *ngIf="home.icon" [class]="cn(cx('itemIcon'), home.icon, home.iconClass)" [ngStyle]="home.iconStyle" [pBind]="ptm('itemIcon')"></span>
                            <svg data-p-icon="home" *ngIf="!home.icon" [class]="cx('itemIcon')" [pBind]="ptm('itemIcon')" />
                            <ng-container *ngIf="home.label">
                                <span *ngIf="home.escape !== false; else htmlHomeRouteLabel" [class]="cn(cx('itemLabel'), home.labelClass)" [ngStyle]="home.labelStyle" [pBind]="ptm('itemLabel')">{{ home.label }}</span>
                                <ng-template #htmlHomeRouteLabel><span [class]="cn(cx('itemLabel'), home.labelClass)" [ngStyle]="home.labelStyle" [innerHTML]="home.label" [pBind]="ptm('itemLabel')"></span></ng-template>
                            </ng-container>
                            <p-badge *ngIf="home.badge" [styleClass]="home.badgeStyleClass" [value]="home.badge" [pt]="ptm('pcBadge')" [unstyled]="unstyled()" />
                        </a>
                    }
                </li>
                <li *ngIf="model && home" [class]="cx('separator')" [pBind]="ptm('separator')">
                    <svg data-p-icon="chevron-right" *ngIf="!separatorTemplate && !_separatorTemplate" [pBind]="ptm('separatorIcon')" />
                    <ng-template *ngTemplateOutlet="separatorTemplate || _separatorTemplate"></ng-template>
                </li>
                <ng-template ngFor let-menuitem let-end="last" let-i="index" [ngForOf]="model">
                    <li
                        *ngIf="menuitem.visible !== false"
                        [class]="cn(cx('item', { menuitem }), menuitem.styleClass)"
                        [attr.id]="menuitem.id"
                        [style]="menuitem.style"
                        pTooltip
                        [tooltipOptions]="menuitem.tooltipOptions"
                        [pBind]="getPTOptions(menuitem, i, 'item')"
                        [pTooltipUnstyled]="unstyled()"
                    >
                        @if (itemTemplate || _itemTemplate) {
                            <ng-template *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: menuitem }"></ng-template>
                        } @else {
                            <a
                                *ngIf="!menuitem?.routerLink"
                                [attr.href]="menuitem?.url ? menuitem?.url : null"
                                [class]="cn(cx('itemLink'), menuitem?.linkClass)"
                                [ngStyle]="menuitem?.linkStyle"
                                (click)="onClick($event, menuitem)"
                                [target]="menuitem?.target"
                                [attr.title]="menuitem?.title"
                                [attr.tabindex]="menuitem?.disabled ? null : menuitem?.tabindex || '0'"
                                [attr.data-automationid]="menuitem?.automationId"
                                [pBind]="getPTOptions(menuitem, i, 'itemLink')"
                            >
                                <ng-container *ngIf="!itemTemplate && !_itemTemplate">
                                    <span *ngIf="menuitem?.icon" [class]="cn(cx('itemIcon'), menuitem?.icon, menuitem?.iconClass)" [ngStyle]="menuitem?.iconStyle" [pBind]="getPTOptions(menuitem, i, 'itemIcon')"></span>
                                    <ng-container *ngIf="menuitem?.label">
                                        <span *ngIf="menuitem?.escape !== false; else htmlLabel" [class]="cn(cx('itemLabel'), menuitem?.labelClass)" [ngStyle]="menuitem?.labelStyle" [pBind]="getPTOptions(menuitem, i, 'itemLabel')">{{
                                            menuitem?.label
                                        }}</span>
                                        <ng-template #htmlLabel
                                            ><span [class]="cn(cx('itemLabel'), menuitem?.labelClass)" [ngStyle]="menuitem?.labelStyle" [innerHTML]="menuitem?.label" [pBind]="getPTOptions(menuitem, i, 'itemLabel')"></span
                                        ></ng-template>
                                    </ng-container>
                                    <p-badge *ngIf="menuitem?.badge" [styleClass]="menuitem?.badgeStyleClass" [value]="menuitem?.badge" [pt]="getPTOptions(menuitem, i, 'pcBadge')" [unstyled]="unstyled()" />
                                </ng-container>
                            </a>
                            <a
                                *ngIf="menuitem?.routerLink"
                                [routerLink]="menuitem?.routerLink"
                                routerLinkActive="p-menuitem-link-active"
                                [queryParams]="menuitem?.queryParams"
                                [routerLinkActiveOptions]="menuitem?.routerLinkActiveOptions || { exact: false }"
                                [class]="cn(cx('itemLink'), menuitem?.linkClass)"
                                [ngStyle]="menuitem?.linkStyle"
                                (click)="onClick($event, menuitem)"
                                [target]="menuitem?.target"
                                [attr.title]="menuitem?.title"
                                [attr.tabindex]="menuitem?.disabled ? null : menuitem?.tabindex || '0'"
                                [attr.data-automationid]="menuitem?.automationId"
                                [fragment]="menuitem?.fragment"
                                [queryParamsHandling]="menuitem?.queryParamsHandling"
                                [preserveFragment]="menuitem?.preserveFragment"
                                [skipLocationChange]="menuitem?.skipLocationChange"
                                [replaceUrl]="menuitem?.replaceUrl"
                                [state]="menuitem?.state"
                                [pBind]="getPTOptions(menuitem, i, 'itemLink')"
                            >
                                <span *ngIf="menuitem?.icon" [class]="cn(cx('itemIcon'), menuitem?.icon, menuitem?.iconClass)" [ngStyle]="menuitem?.iconStyle" [pBind]="getPTOptions(menuitem, i, 'itemIcon')"></span>
                                <ng-container *ngIf="menuitem?.label">
                                    <span *ngIf="menuitem?.escape !== false; else htmlRouteLabel" [class]="cn(cx('itemLabel'), menuitem?.labelClass)" [ngStyle]="menuitem?.labelStyle" [pBind]="getPTOptions(menuitem, i, 'itemLabel')">{{
                                        menuitem?.label
                                    }}</span>
                                    <ng-template #htmlRouteLabel
                                        ><span [class]="cn(cx('itemLabel'), menuitem?.labelClass)" [ngStyle]="menuitem?.labelStyle" [innerHTML]="menuitem?.label" [pBind]="getPTOptions(menuitem, i, 'itemLabel')"></span
                                    ></ng-template>
                                </ng-container>
                                <p-badge *ngIf="menuitem?.badge" [styleClass]="menuitem?.badgeStyleClass" [value]="menuitem?.badge" [pt]="getPTOptions(menuitem, i, 'pcBadge')" [unstyled]="unstyled()" />
                            </a>
                        }
                    </li>
                    <li *ngIf="!end && menuitem.visible !== false" [class]="cx('separator')" [pBind]="ptm('separator')">
                        <svg data-p-icon="chevron-right" *ngIf="!separatorTemplate && !_separatorTemplate" [pBind]="ptm('separatorIcon')" />
                        <ng-template *ngTemplateOutlet="separatorTemplate || _separatorTemplate"></ng-template>
                    </li>
                </ng-template>
            </ol>
        </nav>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [BreadCrumbStyle, {
        provide: BREADCRUMB_INSTANCE,
        useExisting: Breadcrumb
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Breadcrumb
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    model: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    home: [{
      type: Input
    }],
    homeAriaLabel: [{
      type: Input
    }],
    onItemClick: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item"]
    }],
    separatorTemplate: [{
      type: ContentChild,
      args: ["separator"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var BreadcrumbModule = class _BreadcrumbModule {
  static \u0275fac = function BreadcrumbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreadcrumbModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BreadcrumbModule,
    imports: [Breadcrumb, SharedModule],
    exports: [Breadcrumb, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Breadcrumb, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbModule, [{
    type: NgModule,
    args: [{
      imports: [Breadcrumb, SharedModule],
      exports: [Breadcrumb, SharedModule]
    }]
  }], null, null);
})();

// libs/frontend/shared/ui/src/lib/ui/breadcrumb/breadcrumb.adapter.ts
function toPrimeMenuItems(items) {
  return items.map((i) => ({
    label: i.label,
    icon: i.icon,
    routerLink: i.isActive ? void 0 : i.routerLink,
    queryParams: i.isActive ? void 0 : i.queryParams,
    styleClass: i.isActive ? "active-breadcrumb" : void 0
  }));
}

// libs/frontend/shared/ui/src/lib/ui/breadcrumb/ui-breadcrumb.component.ts
var UiBreadcrumbComponent = class _UiBreadcrumbComponent {
  items = input([], ...ngDevMode ? [{ debugName: "items" }] : []);
  primeItems = computed(() => toPrimeMenuItems(this.items()), ...ngDevMode ? [{ debugName: "primeItems" }] : []);
  static \u0275fac = function UiBreadcrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiBreadcrumbComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiBreadcrumbComponent, selectors: [["app-ui-breadcrumb"]], inputs: { items: [1, "items"] }, decls: 2, vars: 1, consts: [[1, "ui-breadcrumb"], ["styleClass", "ui-breadcrumb__root", 3, "model"]], template: function UiBreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "p-breadcrumb", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("model", ctx.primeItems());
    }
  }, dependencies: [Breadcrumb], styles: ["\n\n[_nghost-%COMP%]     .ui-breadcrumb__root {\n  background: transparent;\n  border: 0;\n  padding: 0;\n  margin-bottom: 1.25rem;\n}\n[_nghost-%COMP%]     .ui-breadcrumb li.p-breadcrumb-item:last-of-type a.p-breadcrumb-item-link .p-breadcrumb-item-label {\n  color: #7c3aed !important;\n  font-weight: 600;\n}\n[_nghost-%COMP%]     .ui-breadcrumb li.p-breadcrumb-item:last-of-type a.p-breadcrumb-item-link {\n  pointer-events: none;\n  cursor: default;\n}\n/*# sourceMappingURL=ui-breadcrumb.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiBreadcrumbComponent, [{
    type: Component,
    args: [{ selector: "app-ui-breadcrumb", standalone: true, imports: [Breadcrumb], template: ` <div class="ui-breadcrumb">
    <p-breadcrumb [model]="primeItems()" styleClass="ui-breadcrumb__root" />
  </div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;214160ce6131a3b2c1d8bdfb57393cf38fc10ee4d064b5b5ac78244d332510bd;D:/Frontend Developer/Angular/Marketplace/libs/frontend/shared/ui/src/lib/ui/breadcrumb/ui-breadcrumb.component.ts */\n:host ::ng-deep .ui-breadcrumb__root {\n  background: transparent;\n  border: 0;\n  padding: 0;\n  margin-bottom: 1.25rem;\n}\n:host ::ng-deep .ui-breadcrumb li.p-breadcrumb-item:last-of-type a.p-breadcrumb-item-link .p-breadcrumb-item-label {\n  color: #7c3aed !important;\n  font-weight: 600;\n}\n:host ::ng-deep .ui-breadcrumb li.p-breadcrumb-item:last-of-type a.p-breadcrumb-item-link {\n  pointer-events: none;\n  cursor: default;\n}\n/*# sourceMappingURL=ui-breadcrumb.component.css.map */\n"] }]
  }], null, { items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiBreadcrumbComponent, { className: "UiBreadcrumbComponent", filePath: "libs/frontend/shared/ui/src/lib/ui/breadcrumb/ui-breadcrumb.component.ts", lineNumber: 36 });
})();

// node_modules/@primeuix/styles/dist/rating/index.mjs
var style2 = "\n    .p-rating {\n        position: relative;\n        display: inline-flex;\n        align-items: center;\n        gap: dt('rating.gap');\n    }\n\n    .p-rating-option {\n        display: inline-flex;\n        align-items: center;\n        cursor: pointer;\n        outline-color: transparent;\n        border-radius: 50%;\n        transition:\n            background dt('rating.transition.duration'),\n            color dt('rating.transition.duration'),\n            border-color dt('rating.transition.duration'),\n            outline-color dt('rating.transition.duration'),\n            box-shadow dt('rating.transition.duration');\n    }\n\n    .p-rating-option.p-focus-visible {\n        box-shadow: dt('rating.focus.ring.shadow');\n        outline: dt('rating.focus.ring.width') dt('rating.focus.ring.style') dt('rating.focus.ring.color');\n        outline-offset: dt('rating.focus.ring.offset');\n    }\n\n    .p-rating-icon {\n        color: dt('rating.icon.color');\n        transition:\n            background dt('rating.transition.duration'),\n            color dt('rating.transition.duration'),\n            border-color dt('rating.transition.duration'),\n            outline-color dt('rating.transition.duration'),\n            box-shadow dt('rating.transition.duration');\n        font-size: dt('rating.icon.size');\n        width: dt('rating.icon.size');\n        height: dt('rating.icon.size');\n    }\n\n    .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {\n        color: dt('rating.icon.hover.color');\n    }\n\n    .p-rating-option-active .p-rating-icon {\n        color: dt('rating.icon.active.color');\n    }\n\n    .p-rating-icon.p-invalid {\n        /* @todo */\n        stroke: dt('rating.invalid.icon.color');\n    }\n\n    .p-rating.p-readonly .p-rating-option {\n        cursor: not-allowed;\n    }\n";

// node_modules/primeng/fesm2022/primeng-rating.mjs
var _c05 = ["onicon"];
var _c12 = ["officon"];
var _c22 = (a0, a1) => ({
  star: a0,
  value: a1
});
var _c32 = (a0, a1) => ({
  $implicit: a0,
  class: a1
});
function Rating_ng_template_0_Conditional_3_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Rating_ng_template_0_Conditional_3_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const star_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.onIconTemplate || ctx_r2._onIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c32, star_r2 + 1, ctx_r2.cx("onIcon")));
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r2.cx("onIcon"));
    \u0275\u0275property("ngStyle", ctx_r2.iconOnStyle)("ngClass", ctx_r2.iconOnClass)("pBind", ctx_r2.ptm("onIcon"));
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 8);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r2.cx("onIcon"));
    \u0275\u0275property("ngStyle", ctx_r2.iconOnStyle)("pBind", ctx_r2.ptm("onIcon"));
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Rating_ng_template_0_Conditional_3_Conditional_1_span_0_Template, 1, 5, "span", 5)(1, Rating_ng_template_0_Conditional_3_Conditional_1__svg_svg_1_Template, 1, 4, "svg", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.iconOnClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.iconOnClass);
  }
}
function Rating_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Rating_ng_template_0_Conditional_3_Conditional_0_Template, 1, 5, "ng-container")(1, Rating_ng_template_0_Conditional_3_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.onIconTemplate || ctx_r2._onIconTemplate ? 0 : 1);
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Rating_ng_template_0_Conditional_4_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const star_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.offIconTemplate || ctx_r2._offIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c32, star_r2 + 1, ctx_r2.cx("offIcon")));
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r2.cx("offIcon"));
    \u0275\u0275property("ngStyle", ctx_r2.iconOffStyle)("ngClass", ctx_r2.iconOffClass)("pBind", ctx_r2.ptm("offIcon"));
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r2.cx("offIcon"));
    \u0275\u0275property("ngStyle", ctx_r2.iconOffStyle)("pBind", ctx_r2.ptm("offIcon"));
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Rating_ng_template_0_Conditional_4_Conditional_1_span_0_Template, 1, 5, "span", 5)(1, Rating_ng_template_0_Conditional_4_Conditional_1__svg_svg_1_Template, 1, 4, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.iconOffClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.iconOffClass);
  }
}
function Rating_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Rating_ng_template_0_Conditional_4_Conditional_0_Template, 1, 5, "ng-container")(1, Rating_ng_template_0_Conditional_4_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.offIconTemplate || ctx_r2._offIconTemplate ? 0 : 1);
  }
}
function Rating_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function Rating_ng_template_0_Template_div_click_0_listener($event) {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onOptionClick($event, star_r2 + 1));
    });
    \u0275\u0275elementStart(1, "span", 2)(2, "input", 3);
    \u0275\u0275listener("focus", function Rating_ng_template_0_Template_input_focus_2_listener($event) {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event, star_r2 + 1));
    })("blur", function Rating_ng_template_0_Template_input_blur_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("change", function Rating_ng_template_0_Template_input_change_2_listener($event) {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChange($event, star_r2 + 1));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, Rating_ng_template_0_Conditional_3_Template, 2, 1)(4, Rating_ng_template_0_Conditional_4_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("option", \u0275\u0275pureFunction2(16, _c22, star_r2, ctx_r2.value)));
    \u0275\u0275property("pBind", ctx_r2.ptm("option"));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r2.ptm("hiddenOptionInputContainer"));
    \u0275\u0275attribute("data-p-hidden-accessible", true);
    \u0275\u0275advance();
    \u0275\u0275property("value", star_r2 + 1)("checked", ctx_r2.value === star_r2 + 1)("pAutoFocus", ctx_r2.autofocus)("pBind", ctx_r2.ptm("hiddenOptionInput"));
    \u0275\u0275attribute("name", ctx_r2.name() || ctx_r2.nameattr + "_name")("value", ctx_r2.modelValue())("required", ctx_r2.required() ? "" : void 0)("readonly", ctx_r2.readonly ? "" : void 0)("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-label", ctx_r2.starAriaLabel(star_r2 + 1));
    \u0275\u0275advance();
    \u0275\u0275conditional(star_r2 + 1 <= ctx_r2.value ? 3 : 4);
  }
}
var style3 = (
  /*css*/
  `
    ${style2}

    /* For PrimeNG */
    p-rating.ng-invalid.ng-dirty > .p-rating > .p-rating-icon {
        stroke: dt('rating.invalid.icon.color');
    }
`
);
var classes2 = {
  root: ({
    instance
  }) => ["p-rating", {
    "p-readonly": instance.readonly,
    "p-disabled": instance.$disabled()
  }],
  option: ({
    instance,
    star,
    value
  }) => ["p-rating-option", {
    "p-rating-option-active": star + 1 <= value,
    "p-focus-visible": star + 1 === instance.focusedOptionIndex() && instance.isFocusVisibleItem
  }],
  onIcon: ({
    instance
  }) => ["p-rating-icon p-rating-on-icon", {
    "p-invalid": instance.invalid()
  }],
  offIcon: ({
    instance
  }) => ["p-rating-icon p-rating-off-icon", {
    "p-invalid": instance.invalid()
  }]
};
var RatingStyle = class _RatingStyle extends BaseStyle {
  name = "rating";
  style = style3;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RatingStyle_BaseFactory;
    return function RatingStyle_Factory(__ngFactoryType__) {
      return (\u0275RatingStyle_BaseFactory || (\u0275RatingStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RatingStyle)))(__ngFactoryType__ || _RatingStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RatingStyle,
    factory: _RatingStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingStyle, [{
    type: Injectable
  }], null, null);
})();
var RatingClasses;
(function(RatingClasses2) {
  RatingClasses2["root"] = "p-rating";
  RatingClasses2["option"] = "p-rating-option";
  RatingClasses2["onIcon"] = "p-rating-on-icon";
  RatingClasses2["offIcon"] = "p-rating-off-icon";
})(RatingClasses || (RatingClasses = {}));
var RATING_INSTANCE = new InjectionToken("RATING_INSTANCE");
var RATING_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Rating),
  multi: true
};
var Rating = class _Rating extends BaseEditableHolder {
  componentName = "Rating";
  $pcRating = inject(RATING_INSTANCE, {
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
   * When present, changing the value is not possible.
   * @group Props
   */
  readonly;
  /**
   * Number of stars.
   * @group Props
   */
  stars = 5;
  /**
   * Style class of the on icon.
   * @group Props
   */
  iconOnClass;
  /**
   * Inline style of the on icon.
   * @group Props
   */
  iconOnStyle;
  /**
   * Style class of the off icon.
   * @group Props
   */
  iconOffClass;
  /**
   * Inline style of the off icon.
   * @group Props
   */
  iconOffStyle;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Emitted on value change.
   * @param {RatingRateEvent} value - Custom rate event.
   * @group Emits
   */
  onRate = new EventEmitter();
  /**
   * Emitted when the rating receives focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Emitted when the rating loses focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Custom on icon template.
   * @param {RatingIconTemplateContext} context - icon context.
   * @see {@link RatingIconTemplateContext}
   * @group Templates
   */
  onIconTemplate;
  /**
   * Custom off icon template.
   * @param {RatingIconTemplateContext} context - icon context.
   * @see {@link RatingIconTemplateContext}
   * @group Templates
   */
  offIconTemplate;
  templates;
  value;
  starsArray;
  isFocusVisibleItem = true;
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : []);
  nameattr;
  _componentStyle = inject(RatingStyle);
  _onIconTemplate;
  _offIconTemplate;
  onInit() {
    this.nameattr = this.nameattr || s("pn_id_");
    this.starsArray = [];
    for (let i = 0; i < this.stars; i++) {
      this.starsArray[i] = i;
    }
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "onicon":
          this._onIconTemplate = item.template;
          break;
        case "officon":
          this._offIconTemplate = item.template;
          break;
      }
    });
  }
  onOptionClick(event, value) {
    if (!this.readonly && !this.$disabled()) {
      this.onOptionSelect(event, value);
      this.isFocusVisibleItem = false;
      const firstFocusableEl = vt(event.currentTarget, "");
      firstFocusableEl && bt(firstFocusableEl);
    }
  }
  onOptionSelect(event, value) {
    if (!this.readonly && !this.$disabled()) {
      if (this.focusedOptionIndex() === value || value === this.value) {
        this.focusedOptionIndex.set(-1);
        this.updateModel(event, null);
      } else {
        this.focusedOptionIndex.set(value);
        this.updateModel(event, value || null);
      }
    }
  }
  onChange(event, value) {
    this.onOptionSelect(event, value);
    this.isFocusVisibleItem = true;
  }
  onInputBlur(event) {
    this.focusedOptionIndex.set(-1);
    this.onBlur.emit(event);
  }
  onInputFocus(event, value) {
    if (!this.readonly && !this.$disabled()) {
      this.focusedOptionIndex.set(value);
      this.isFocusVisibleItem = event.sourceCapabilities?.firesTouchEvents === false;
      this.onFocus.emit(event);
    }
  }
  updateModel(event, value) {
    this.writeValue(value);
    this.onModelChange(this.value);
    this.onModelTouched();
    this.onRate.emit({
      originalEvent: event,
      value
    });
  }
  starAriaLabel(value) {
    return value === 1 ? this.config.translation.aria?.star : this.config.translation.aria?.stars?.replace(/{star}/g, value);
  }
  getIconTemplate(i) {
    return !this.value || i >= this.value ? this.offIconTemplate || this._offIconTemplate : this.onIconTemplate || this.offIconTemplate;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(value);
  }
  get isCustomIcon() {
    return !!(this.onIconTemplate || this._onIconTemplate || this.offIconTemplate || this._offIconTemplate);
  }
  get dataP() {
    return this.cn({
      readonly: this.readonly,
      disabled: this.$disabled()
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Rating_BaseFactory;
    return function Rating_Factory(__ngFactoryType__) {
      return (\u0275Rating_BaseFactory || (\u0275Rating_BaseFactory = \u0275\u0275getInheritedFactory(_Rating)))(__ngFactoryType__ || _Rating);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Rating,
    selectors: [["p-rating"]],
    contentQueries: function Rating_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c05, 4)(dirIndex, _c12, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.onIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.offIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 3,
    hostBindings: function Rating_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      readonly: [2, "readonly", "readonly", booleanAttribute],
      stars: [2, "stars", "stars", numberAttribute],
      iconOnClass: "iconOnClass",
      iconOnStyle: "iconOnStyle",
      iconOffClass: "iconOffClass",
      iconOffStyle: "iconOffStyle",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onRate: "onRate",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([RATING_VALUE_ACCESSOR, RatingStyle, {
      provide: RATING_INSTANCE,
      useExisting: _Rating
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Rating
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["ngFor", "", 3, "ngForOf"], [3, "click", "pBind"], [1, "p-hidden-accessible", 3, "pBind"], ["type", "radio", 3, "focus", "blur", "change", "value", "checked", "pAutoFocus", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngStyle", "ngClass", "pBind", 4, "ngIf"], ["data-p-icon", "star-fill", 3, "ngStyle", "class", "pBind", 4, "ngIf"], [3, "ngStyle", "ngClass", "pBind"], ["data-p-icon", "star-fill", 3, "ngStyle", "pBind"], ["data-p-icon", "star", 3, "ngStyle", "class", "pBind", 4, "ngIf"], ["data-p-icon", "star", 3, "ngStyle", "pBind"]],
    template: function Rating_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Rating_ng_template_0_Template, 5, 19, "ng-template", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.starsArray);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, AutoFocus, StarFillIcon, StarIcon, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Rating, [{
    type: Component,
    args: [{
      selector: "p-rating",
      imports: [CommonModule, AutoFocus, StarFillIcon, StarIcon, SharedModule, BindModule],
      standalone: true,
      template: `
        <ng-template ngFor [ngForOf]="starsArray" let-star let-i="index">
            <div [class]="cx('option', { star, value })" (click)="onOptionClick($event, star + 1)" [pBind]="ptm('option')">
                <span class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true" [pBind]="ptm('hiddenOptionInputContainer')">
                    <input
                        type="radio"
                        [value]="star + 1"
                        [attr.name]="name() || nameattr + '_name'"
                        [attr.value]="modelValue()"
                        [attr.required]="required() ? '' : undefined"
                        [attr.readonly]="readonly ? '' : undefined"
                        [attr.disabled]="$disabled() ? '' : undefined"
                        [checked]="value === star + 1"
                        [attr.aria-label]="starAriaLabel(star + 1)"
                        (focus)="onInputFocus($event, star + 1)"
                        (blur)="onInputBlur($event)"
                        (change)="onChange($event, star + 1)"
                        [pAutoFocus]="autofocus"
                        [pBind]="ptm('hiddenOptionInput')"
                    />
                </span>
                @if (star + 1 <= value) {
                    @if (onIconTemplate || _onIconTemplate) {
                        <ng-container *ngTemplateOutlet="onIconTemplate || _onIconTemplate; context: { $implicit: star + 1, class: cx('onIcon') }"></ng-container>
                    } @else {
                        <span [class]="cx('onIcon')" *ngIf="iconOnClass" [ngStyle]="iconOnStyle" [ngClass]="iconOnClass" [pBind]="ptm('onIcon')"></span>
                        <svg data-p-icon="star-fill" *ngIf="!iconOnClass" [ngStyle]="iconOnStyle" [class]="cx('onIcon')" [pBind]="ptm('onIcon')" />
                    }
                } @else {
                    @if (offIconTemplate || _offIconTemplate) {
                        <ng-container *ngTemplateOutlet="offIconTemplate || _offIconTemplate; context: { $implicit: star + 1, class: cx('offIcon') }"></ng-container>
                    } @else {
                        <span [class]="cx('offIcon')" *ngIf="iconOffClass" [ngStyle]="iconOffStyle" [ngClass]="iconOffClass" [pBind]="ptm('offIcon')"></span>
                        <svg data-p-icon="star" *ngIf="!iconOffClass" [ngStyle]="iconOffStyle" [class]="cx('offIcon')" [pBind]="ptm('offIcon')" />
                    }
                }
            </div>
        </ng-template>
    `,
      providers: [RATING_VALUE_ACCESSOR, RatingStyle, {
        provide: RATING_INSTANCE,
        useExisting: Rating
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Rating
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stars: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    iconOnClass: [{
      type: Input
    }],
    iconOnStyle: [{
      type: Input
    }],
    iconOffClass: [{
      type: Input
    }],
    iconOffStyle: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onRate: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onIconTemplate: [{
      type: ContentChild,
      args: ["onicon", {
        descendants: false
      }]
    }],
    offIconTemplate: [{
      type: ContentChild,
      args: ["officon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var RatingModule = class _RatingModule {
  static \u0275fac = function RatingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RatingModule,
    imports: [Rating, SharedModule],
    exports: [Rating, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Rating, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingModule, [{
    type: NgModule,
    args: [{
      imports: [Rating, SharedModule],
      exports: [Rating, SharedModule]
    }]
  }], null, null);
})();

// libs/frontend/shared/ui/src/lib/ui/rating/ui-rating.component.ts
var _c06 = () => ({ color: "#facc15" });
var _c13 = () => ({ color: "#d1d5db" });
var UiRatingComponent = class _UiRatingComponent {
  value = model(null, ...ngDevMode ? [{ debugName: "value" }] : []);
  stars = input(5, ...ngDevMode ? [{ debugName: "stars" }] : []);
  readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : []);
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  rateCommitted = output();
  cancelCommitted = output();
  static \u0275fac = function UiRatingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiRatingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiRatingComponent, selectors: [["app-ui-rating"]], inputs: { value: [1, "value"], stars: [1, "stars"], readonly: [1, "readonly"], disabled: [1, "disabled"] }, outputs: { value: "valueChange", rateCommitted: "rateCommitted", cancelCommitted: "cancelCommitted" }, decls: 1, vars: 8, consts: [[3, "ngModelChange", "onRate", "onCancel", "ngModel", "readonly", "disabled", "stars", "iconOnStyle", "iconOffStyle"]], template: function UiRatingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-rating", 0);
      \u0275\u0275twoWayListener("ngModelChange", function UiRatingComponent_Template_p_rating_ngModelChange_0_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      \u0275\u0275listener("onRate", function UiRatingComponent_Template_p_rating_onRate_0_listener() {
        return ctx.rateCommitted.emit(ctx.value());
      })("onCancel", function UiRatingComponent_Template_p_rating_onCancel_0_listener() {
        return ctx.cancelCommitted.emit();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
      \u0275\u0275property("readonly", ctx.readonly())("disabled", ctx.disabled())("stars", ctx.stars())("iconOnStyle", \u0275\u0275pureFunction0(6, _c06))("iconOffStyle", \u0275\u0275pureFunction0(7, _c13));
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, Rating], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiRatingComponent, [{
    type: Component,
    args: [{
      selector: "app-ui-rating",
      standalone: true,
      imports: [FormsModule, Rating],
      template: `
    <p-rating
      [(ngModel)]="value"
      [readonly]="readonly()"
      [disabled]="disabled()"
      [stars]="stars()"
      [iconOnStyle]="{ color: '#facc15' }"
      [iconOffStyle]="{ color: '#d1d5db' }"
      (onRate)="rateCommitted.emit(value())"
      (onCancel)="cancelCommitted.emit()"
    />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: Output, args: ["valueChange"] }], stars: [{ type: Input, args: [{ isSignal: true, alias: "stars", required: false }] }], readonly: [{ type: Input, args: [{ isSignal: true, alias: "readonly", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], rateCommitted: [{ type: Output, args: ["rateCommitted"] }], cancelCommitted: [{ type: Output, args: ["cancelCommitted"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiRatingComponent, { className: "UiRatingComponent", filePath: "libs/frontend/shared/ui/src/lib/ui/rating/ui-rating.component.ts", lineNumber: 24 });
})();

// libs/frontend/shared/ui/src/lib/ui/select/ui-select.component.ts
var UISelect = class _UISelect {
  value = model(null, ...ngDevMode ? [{ debugName: "value" }] : []);
  options = input([], ...ngDevMode ? [{ debugName: "options" }] : []);
  optionLabel = input("label", ...ngDevMode ? [{ debugName: "optionLabel" }] : []);
  optionValue = input("value", ...ngDevMode ? [{ debugName: "optionValue" }] : []);
  placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : []);
  ariaLabel = input("", ...ngDevMode ? [{ debugName: "ariaLabel" }] : []);
  appendTo = input("body", ...ngDevMode ? [{ debugName: "appendTo" }] : []);
  styleClass = input("!border-0 !shadow-none !outline-none focus:!ring-0 !bg-transparent", ...ngDevMode ? [{ debugName: "styleClass" }] : []);
  panelStyleClass = input("", ...ngDevMode ? [{ debugName: "panelStyleClass" }] : []);
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : []);
  static \u0275fac = function UISelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UISelect)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UISelect, selectors: [["app-ui-select"]], inputs: { value: [1, "value"], options: [1, "options"], optionLabel: [1, "optionLabel"], optionValue: [1, "optionValue"], placeholder: [1, "placeholder"], ariaLabel: [1, "ariaLabel"], appendTo: [1, "appendTo"], styleClass: [1, "styleClass"], panelStyleClass: [1, "panelStyleClass"], disabled: [1, "disabled"] }, outputs: { value: "valueChange" }, decls: 1, vars: 11, consts: [[3, "ngModelChange", "options", "optionLabel", "optionValue", "appendTo", "panelStyleClass", "placeholder", "ariaLabel", "disabled", "ngModel"]], template: function UISelect_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-select", 0);
      \u0275\u0275listener("ngModelChange", function UISelect_Template_p_select_ngModelChange_0_listener($event) {
        return ctx.value.set($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.styleClass());
      \u0275\u0275property("options", ctx.options())("optionLabel", ctx.optionLabel())("optionValue", ctx.optionValue())("appendTo", ctx.appendTo())("panelStyleClass", ctx.panelStyleClass())("placeholder", ctx.placeholder())("ariaLabel", ctx.ariaLabel())("disabled", ctx.disabled())("ngModel", ctx.value());
    }
  }, dependencies: [Select, FormsModule, NgControlStatus, NgModel], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UISelect, [{
    type: Component,
    args: [{
      selector: "app-ui-select",
      imports: [Select, FormsModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<p-select
    [options]="options()"
    [optionLabel]="optionLabel()"
    [optionValue]="optionValue()"
    [appendTo]="appendTo()"
    [class]="styleClass()"
    [panelStyleClass]="panelStyleClass()"
    [placeholder]="placeholder()"
    [ariaLabel]="ariaLabel()"
    [disabled]="disabled()"
    [ngModel]="value()"
    (ngModelChange)="value.set($event)"
  />`
    }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: false }] }, { type: Output, args: ["valueChange"] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], optionLabel: [{ type: Input, args: [{ isSignal: true, alias: "optionLabel", required: false }] }], optionValue: [{ type: Input, args: [{ isSignal: true, alias: "optionValue", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], ariaLabel: [{ type: Input, args: [{ isSignal: true, alias: "ariaLabel", required: false }] }], appendTo: [{ type: Input, args: [{ isSignal: true, alias: "appendTo", required: false }] }], styleClass: [{ type: Input, args: [{ isSignal: true, alias: "styleClass", required: false }] }], panelStyleClass: [{ type: Input, args: [{ isSignal: true, alias: "panelStyleClass", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UISelect, { className: "UISelect", filePath: "libs/frontend/shared/ui/src/lib/ui/select/ui-select.component.ts", lineNumber: 24 });
})();

// node_modules/@primeuix/styles/dist/accordion/index.mjs
var style4 = "\n    .p-accordionpanel {\n        display: flex;\n        flex-direction: column;\n        border-style: solid;\n        border-width: dt('accordion.panel.border.width');\n        border-color: dt('accordion.panel.border.color');\n    }\n\n    .p-accordionheader {\n        all: unset;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: dt('accordion.header.padding');\n        color: dt('accordion.header.color');\n        background: dt('accordion.header.background');\n        border-style: solid;\n        border-width: dt('accordion.header.border.width');\n        border-color: dt('accordion.header.border.color');\n        font-weight: dt('accordion.header.font.weight');\n        border-radius: dt('accordion.header.border.radius');\n        transition:\n            background dt('accordion.transition.duration'),\n            color dt('accordion.transition.duration'),\n            outline-color dt('accordion.transition.duration'),\n            box-shadow dt('accordion.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-accordionpanel:first-child > .p-accordionheader {\n        border-width: dt('accordion.header.first.border.width');\n        border-start-start-radius: dt('accordion.header.first.top.border.radius');\n        border-start-end-radius: dt('accordion.header.first.top.border.radius');\n    }\n\n    .p-accordionpanel:last-child > .p-accordionheader {\n        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');\n        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');\n    }\n\n    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {\n        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');\n        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');\n    }\n\n    .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {\n        box-shadow: dt('accordion.header.focus.ring.shadow');\n        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');\n        outline-offset: dt('accordion.header.focus.ring.offset');\n    }\n\n    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {\n        background: dt('accordion.header.hover.background');\n        color: dt('accordion.header.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {\n        background: dt('accordion.header.active.background');\n        color: dt('accordion.header.active.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.active.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {\n        background: dt('accordion.header.active.hover.background');\n        color: dt('accordion.header.active.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.active.hover.color');\n    }\n\n    .p-accordioncontent {\n        display: grid;\n        grid-template-rows: 1fr;\n    }\n\n    .p-accordioncontent-wrapper {\n        min-height: 0;\n    }\n\n    .p-accordioncontent-content {\n        border-style: solid;\n        border-width: dt('accordion.content.border.width');\n        border-color: dt('accordion.content.border.color');\n        background-color: dt('accordion.content.background');\n        color: dt('accordion.content.color');\n        padding: dt('accordion.content.padding');\n    }\n";

// node_modules/primeng/fesm2022/primeng-accordion.mjs
var _c07 = ["*"];
var _c14 = ["toggleicon"];
var _c23 = (a0) => ({
  active: a0
});
function AccordionHeader_Conditional_1_0_ng_template_0_Template(rf, ctx) {
}
function AccordionHeader_Conditional_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccordionHeader_Conditional_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AccordionHeader_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccordionHeader_Conditional_1_0_Template, 1, 0, null, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.toggleicon)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c23, ctx_r0.active()));
  }
}
function AccordionHeader_Conditional_2_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("toggleicon"), ctx_r0.pcAccordion.collapseIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("toggleicon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AccordionHeader_Conditional_2_ng_container_0_span_1_Template, 1, 4, "span", 2)(2, AccordionHeader_Conditional_2_ng_container_0__svg_svg_2_Template, 1, 4, "svg", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pcAccordion.collapseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pcAccordion.collapseIcon);
  }
}
function AccordionHeader_Conditional_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("toggleicon"), ctx_r0.pcAccordion.expandIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AccordionHeader_Conditional_2_ng_container_1_span_1_Template, 1, 4, "span", 2)(2, AccordionHeader_Conditional_2_ng_container_1__svg_svg_2_Template, 1, 2, "svg", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pcAccordion.expandIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pcAccordion.expandIcon);
  }
}
function AccordionHeader_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccordionHeader_Conditional_2_ng_container_0_Template, 3, 2, "ng-container", 1)(1, AccordionHeader_Conditional_2_ng_container_1_Template, 3, 2, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.active());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.active());
  }
}
var style5 = (
  /*css*/
  `
${style4}

/* For PrimeNG */
.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: dt('accordion.header.padding');
}

.p-accordionheader.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-accordioncontent .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`
);
var classes3 = {
  root: "p-accordion p-component",
  panel: ({
    instance
  }) => ["p-accordionpanel", {
    "p-accordionpanel-active": instance.active(),
    "p-disabled": instance.disabled()
  }],
  header: "p-accordionheader",
  toggleicon: "p-accordionheader-toggle-icon",
  contentContainer: "p-accordioncontent",
  contentWrapper: "p-accordioncontent-wrapper",
  content: "p-accordioncontent-content"
};
var AccordionStyle = class _AccordionStyle extends BaseStyle {
  name = "accordion";
  style = style5;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionStyle_BaseFactory;
    return function AccordionStyle_Factory(__ngFactoryType__) {
      return (\u0275AccordionStyle_BaseFactory || (\u0275AccordionStyle_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionStyle)))(__ngFactoryType__ || _AccordionStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AccordionStyle,
    factory: _AccordionStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionStyle, [{
    type: Injectable
  }], null, null);
})();
var AccordionClasses;
(function(AccordionClasses2) {
  AccordionClasses2["root"] = "p-accordion";
  AccordionClasses2["contentwrapper"] = "p-accordioncontent";
  AccordionClasses2["content"] = "p-accordioncontent-content";
  AccordionClasses2["header"] = "p-accordionheader";
  AccordionClasses2["toggleicon"] = "p-accordionheader-toggle-icon";
  AccordionClasses2["panel"] = "p-accordionpanel";
})(AccordionClasses || (AccordionClasses = {}));
var ACCORDION_PANEL_INSTANCE = new InjectionToken("ACCORDION_PANEL_INSTANCE");
var ACCORDION_HEADER_INSTANCE = new InjectionToken("ACCORDION_HEADER_INSTANCE");
var ACCORDION_CONTENT_INSTANCE = new InjectionToken("ACCORDION_CONTENT_INSTANCE");
var ACCORDION_INSTANCE = new InjectionToken("ACCORDION_INSTANCE");
var AccordionPanel = class _AccordionPanel extends BaseComponent {
  $pcAccordionPanel = inject(ACCORDION_PANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "AccordionPanel";
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  pcAccordion = inject(forwardRef(() => Accordion));
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * Disables the tab when enabled.
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : {}), {
    transform: (v) => transformToBoolean(v)
  }));
  active = computed(() => this.pcAccordion.multiple() ? this.valueEquals(this.pcAccordion.value(), this.value()) : this.pcAccordion.value() === this.value(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  valueEquals(currentValue, value) {
    if (Array.isArray(currentValue)) {
      return currentValue.includes(value);
    }
    return currentValue === value;
  }
  _componentStyle = inject(AccordionStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionPanel_BaseFactory;
    return function AccordionPanel_Factory(__ngFactoryType__) {
      return (\u0275AccordionPanel_BaseFactory || (\u0275AccordionPanel_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionPanel)))(__ngFactoryType__ || _AccordionPanel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AccordionPanel,
    selectors: [["p-accordion-panel"], ["p-accordionpanel"]],
    hostVars: 4,
    hostBindings: function AccordionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-disabled", ctx.disabled())("data-p-active", ctx.active());
        \u0275\u0275classMap(ctx.cx("panel"));
      }
    },
    inputs: {
      value: [1, "value"],
      disabled: [1, "disabled"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_PANEL_INSTANCE,
      useExisting: _AccordionPanel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AccordionPanel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c07,
    decls: 1,
    vars: 0,
    template: function AccordionPanel_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionPanel, [{
    type: Component,
    args: [{
      selector: "p-accordion-panel, p-accordionpanel",
      imports: [CommonModule, BindModule],
      standalone: true,
      template: `<ng-content />`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("panel")',
        "[attr.data-p-disabled]": "disabled()",
        "[attr.data-p-active]": "active()"
      },
      hostDirectives: [Bind],
      providers: [AccordionStyle, {
        provide: ACCORDION_PANEL_INSTANCE,
        useExisting: AccordionPanel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AccordionPanel
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
    }]
  });
})();
var AccordionHeader = class _AccordionHeader extends BaseComponent {
  $pcAccordionHeader = inject(ACCORDION_HEADER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "AccordionHeader";
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  pcAccordion = inject(forwardRef(() => Accordion));
  pcAccordionPanel = inject(forwardRef(() => AccordionPanel));
  id = computed(() => `${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  active = computed(() => this.pcAccordionPanel.active(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  disabled = computed(() => this.pcAccordionPanel.disabled(), ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  ariaControls = computed(() => `${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : []);
  /**
   * Toggle icon template.
   * @type {TemplateRef<AccordionToggleIconTemplateContext>} context - Context of the template
   * @example
   * ```html
   * <ng-template #toggleicon let-active="active"> </ng-template>
   * ```
   * @see {@link AccordionToggleIconTemplateContext}
   * @group Templates
   */
  toggleicon;
  onClick(event) {
    if (this.disabled()) {
      return;
    }
    const wasActive = this.active();
    this.changeActiveValue();
    const isActive = this.active();
    const index = this.pcAccordionPanel.value();
    if (!wasActive && isActive) {
      this.pcAccordion.onOpen.emit({
        originalEvent: event,
        index
      });
    } else if (wasActive && !isActive) {
      this.pcAccordion.onClose.emit({
        originalEvent: event,
        index
      });
    }
  }
  onFocus() {
    if (!this.disabled() && this.pcAccordion.selectOnFocus()) {
      this.changeActiveValue();
    }
  }
  onKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.arrowDownKey(event);
        break;
      case "ArrowUp":
        this.arrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
      case "Space":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      default:
        break;
    }
  }
  _componentStyle = inject(AccordionStyle);
  changeActiveValue() {
    this.pcAccordion.updateValue(this.pcAccordionPanel.value());
  }
  findPanel(headerElement) {
    return headerElement?.closest('[data-pc-name="accordionpanel"]');
  }
  findHeader(panelElement) {
    return z(panelElement, '[data-pc-name="accordionheader"]');
  }
  findNextPanel(panelElement, selfCheck = false) {
    const element = selfCheck ? panelElement : panelElement.nextElementSibling;
    return element ? Q(element, "data-p-disabled") ? this.findNextPanel(element) : this.findHeader(element) : null;
  }
  findPrevPanel(panelElement, selfCheck = false) {
    const element = selfCheck ? panelElement : panelElement.previousElementSibling;
    return element ? Q(element, "data-p-disabled") ? this.findPrevPanel(element) : this.findHeader(element) : null;
  }
  findFirstPanel() {
    return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild, true);
  }
  findLastPanel() {
    return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild, true);
  }
  changeFocusedPanel(event, element) {
    bt(element);
  }
  arrowDownKey(event) {
    const nextPanel = this.findNextPanel(this.findPanel(event.currentTarget));
    nextPanel ? this.changeFocusedPanel(event, nextPanel) : this.onHomeKey(event);
    event.preventDefault();
  }
  arrowUpKey(event) {
    const prevPanel = this.findPrevPanel(this.findPanel(event.currentTarget));
    prevPanel ? this.changeFocusedPanel(event, prevPanel) : this.onEndKey(event);
    event.preventDefault();
  }
  onHomeKey(event) {
    const firstPanel = this.findFirstPanel();
    this.changeFocusedPanel(event, firstPanel);
    event.preventDefault();
  }
  onEndKey(event) {
    const lastPanel = this.findLastPanel();
    this.changeFocusedPanel(event, lastPanel);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.disabled()) {
      this.changeActiveValue();
    }
    event.preventDefault();
  }
  get dataP() {
    return this.cn({
      active: this.active()
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionHeader_BaseFactory;
    return function AccordionHeader_Factory(__ngFactoryType__) {
      return (\u0275AccordionHeader_BaseFactory || (\u0275AccordionHeader_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionHeader)))(__ngFactoryType__ || _AccordionHeader);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AccordionHeader,
    selectors: [["p-accordion-header"], ["p-accordionheader"]],
    contentQueries: function AccordionHeader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c14, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toggleicon = _t.first);
      }
    },
    hostVars: 13,
    hostBindings: function AccordionHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AccordionHeader_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("focus", function AccordionHeader_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("keydown", function AccordionHeader_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id())("aria-expanded", ctx.active())("aria-controls", ctx.ariaControls())("aria-disabled", ctx.disabled())("role", "button")("tabindex", ctx.disabled() ? "-1" : "0")("data-p-active", ctx.active())("data-p-disabled", ctx.disabled())("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cx("header"));
        \u0275\u0275styleProp("user-select", "none");
      }
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_HEADER_INSTANCE,
      useExisting: _AccordionHeader
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AccordionHeader
    }]), \u0275\u0275HostDirectivesFeature([Ripple, Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c07,
    decls: 3,
    vars: 1,
    consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-up", 3, "class", "pBind", 4, "ngIf"], [3, "pBind"], ["data-p-icon", "chevron-up", 3, "pBind"], ["data-p-icon", "chevron-down", 3, "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "pBind"]],
    template: function AccordionHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275conditionalCreate(1, AccordionHeader_Conditional_1_Template, 1, 4)(2, AccordionHeader_Conditional_2_Template, 2, 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toggleicon ? 1 : 2);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, ChevronDownIcon, ChevronUpIcon, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionHeader, [{
    type: Component,
    args: [{
      selector: "p-accordion-header, p-accordionheader",
      imports: [CommonModule, ChevronDownIcon, ChevronUpIcon, BindModule],
      standalone: true,
      template: `
        <ng-content />
        @if (toggleicon) {
            <ng-template *ngTemplateOutlet="toggleicon; context: { active: active() }"></ng-template>
        } @else {
            <ng-container *ngIf="active()">
                <span *ngIf="pcAccordion.collapseIcon" [class]="cn(cx('toggleicon'), pcAccordion.collapseIcon)" [attr.aria-hidden]="true" [pBind]="ptm('toggleicon')"></span>
                <svg data-p-icon="chevron-up" *ngIf="!pcAccordion.collapseIcon" [class]="cx('toggleicon')" [pBind]="ptm('toggleicon')" [attr.aria-hidden]="true" />
            </ng-container>
            <ng-container *ngIf="!active()">
                <span *ngIf="pcAccordion.expandIcon" [class]="cn(cx('toggleicon'), pcAccordion.expandIcon)" [attr.aria-hidden]="true" [pBind]="ptm('toggleicon')"></span>
                <svg data-p-icon="chevron-down" *ngIf="!pcAccordion.expandIcon" [attr.aria-hidden]="true" [pBind]="ptm('toggleicon')" />
            </ng-container>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('header')",
        "[attr.id]": "id()",
        "[attr.aria-expanded]": "active()",
        "[attr.aria-controls]": "ariaControls()",
        "[attr.aria-disabled]": "disabled()",
        "[attr.role]": '"button"',
        "[attr.tabindex]": 'disabled()?"-1":"0"',
        "[attr.data-p-active]": "active()",
        "[attr.data-p-disabled]": "disabled()",
        "[style.user-select]": '"none"',
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Ripple, Bind],
      providers: [AccordionStyle, {
        provide: ACCORDION_HEADER_INSTANCE,
        useExisting: AccordionHeader
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AccordionHeader
      }]
    }]
  }], null, {
    toggleicon: [{
      type: ContentChild,
      args: ["toggleicon"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AccordionContent = class _AccordionContent extends BaseComponent {
  $pcAccordionContent = inject(ACCORDION_CONTENT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  componentName = "AccordionContent";
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  pcAccordion = inject(forwardRef(() => Accordion));
  pcAccordionPanel = inject(forwardRef(() => AccordionPanel));
  active = computed(() => this.pcAccordionPanel.active(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  ariaLabelledby = computed(() => `${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "ariaLabelledby"
  }] : []);
  id = computed(() => `${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  _componentStyle = inject(AccordionStyle);
  ptParams = computed(() => ({
    context: this.active()
  }), ...ngDevMode ? [{
    debugName: "ptParams"
  }] : []);
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion", this.ptParams())), this.pcAccordion.computedMotionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : []);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionContent_BaseFactory;
    return function AccordionContent_Factory(__ngFactoryType__) {
      return (\u0275AccordionContent_BaseFactory || (\u0275AccordionContent_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionContent)))(__ngFactoryType__ || _AccordionContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AccordionContent,
    selectors: [["p-accordion-content"], ["p-accordioncontent"]],
    hostVars: 6,
    hostBindings: function AccordionContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id())("role", "region")("data-p-active", ctx.active())("aria-labelledby", ctx.ariaLabelledby());
        \u0275\u0275classMap(ctx.cx("contentContainer"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_CONTENT_INSTANCE,
      useExisting: _AccordionContent
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AccordionContent
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c07,
    decls: 4,
    vars: 10,
    consts: [["name", "p-collapsible", "hideStrategy", "visibility", 3, "visible", "mountOnEnter", "unmountOnLeave", "options"], [3, "pBind"]],
    template: function AccordionContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "p-motion", 0)(1, "div", 1)(2, "div", 1);
        \u0275\u0275projection(3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("visible", ctx.active())("mountOnEnter", false)("unmountOnLeave", false)("options", ctx.computedMotionOptions());
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("contentWrapper"));
        \u0275\u0275property("pBind", ctx.ptm("contentWrapper", ctx.ptParams()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content", ctx.ptParams()));
      }
    },
    dependencies: [CommonModule, BindModule, Bind, MotionModule, Motion],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionContent, [{
    type: Component,
    args: [{
      selector: "p-accordion-content, p-accordioncontent",
      imports: [CommonModule, BindModule, MotionModule],
      standalone: true,
      template: `
        <p-motion [visible]="active()" name="p-collapsible" hideStrategy="visibility" [mountOnEnter]="false" [unmountOnLeave]="false" [options]="computedMotionOptions()">
            <div [pBind]="ptm('contentWrapper', ptParams())" [class]="cx('contentWrapper')">
                <div [pBind]="ptm('content', ptParams())" [class]="cx('content')">
                    <ng-content />
                </div>
            </div>
        </p-motion>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("contentContainer")',
        "[attr.id]": "id()",
        "[attr.role]": '"region"',
        "[attr.data-p-active]": "active()",
        "[attr.aria-labelledby]": "ariaLabelledby()"
      },
      hostDirectives: [Bind],
      providers: [AccordionStyle, {
        provide: ACCORDION_CONTENT_INSTANCE,
        useExisting: AccordionContent
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AccordionContent
      }]
    }]
  }], null, null);
})();
var Accordion = class _Accordion extends BaseComponent {
  componentName = "Accordion";
  $pcAccordion = inject(ACCORDION_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
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
   * When enabled, multiple tabs can be activated at the same time.
   * @defaultValue false
   * @group Props
   */
  multiple = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "multiple"
  } : {}), {
    transform: (v) => transformToBoolean(v)
  }));
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Icon of a collapsed tab.
   * @group Props
   */
  expandIcon;
  /**
   * Icon of an expanded tab.
   * @group Props
   */
  collapseIcon;
  /**
   * When enabled, the focused tab is activated.
   * @defaultValue false
   * @group Props
   */
  selectOnFocus = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "selectOnFocus"
  } : {}), {
    transform: (v) => transformToBoolean(v)
  }));
  /**
   * Transition options of the animation.
   * @group Props
   * @deprecated since v21.0.0, use `motionOptions` instead.
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "motionOptions"
  }] : []);
  computedMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMotionOptions"
  }] : []);
  /**
   * Callback to invoke when an active tab is collapsed by clicking on the header.
   * @param {AccordionTabCloseEvent} event - Custom tab close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke when a tab gets expanded.
   * @param {AccordionTabOpenEvent} event - Custom tab open event.
   * @group Emits
   */
  onOpen = new EventEmitter();
  id = signal(s("pn_id_"), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  _componentStyle = inject(AccordionStyle);
  onKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onTabArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onTabArrowUpKey(event);
        break;
      case "Home":
        if (!event.shiftKey) {
          this.onTabHomeKey(event);
        }
        break;
      case "End":
        if (!event.shiftKey) {
          this.onTabEndKey(event);
        }
        break;
    }
  }
  onTabArrowDownKey(event) {
    const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);
    nextHeaderAction ? this.changeFocusedTab(nextHeaderAction) : this.onTabHomeKey(event);
    event.preventDefault();
  }
  onTabArrowUpKey(event) {
    const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);
    prevHeaderAction ? this.changeFocusedTab(prevHeaderAction) : this.onTabEndKey(event);
    event.preventDefault();
  }
  onTabHomeKey(event) {
    const firstHeaderAction = this.findFirstHeaderAction();
    this.changeFocusedTab(firstHeaderAction);
    event.preventDefault();
  }
  changeFocusedTab(element) {
    if (element) {
      bt(element);
    }
  }
  findNextHeaderAction(tabElement, selfCheck = false) {
    const nextTabElement = selfCheck ? tabElement : tabElement.nextElementSibling;
    const headerElement = z(nextTabElement, '[data-pc-section="accordionheader"]');
    return headerElement ? Q(headerElement, "data-p-disabled") ? this.findNextHeaderAction(headerElement.parentElement) : z(headerElement.parentElement, '[data-pc-section="accordionheader"]') : null;
  }
  findPrevHeaderAction(tabElement, selfCheck = false) {
    const prevTabElement = selfCheck ? tabElement : tabElement.previousElementSibling;
    const headerElement = z(prevTabElement, '[data-pc-section="accordionheader"]');
    return headerElement ? Q(headerElement, "data-p-disabled") ? this.findPrevHeaderAction(headerElement.parentElement) : z(headerElement.parentElement, '[data-pc-section="accordionheader"]') : null;
  }
  findFirstHeaderAction() {
    const firstEl = this.el.nativeElement.firstElementChild;
    return this.findNextHeaderAction(firstEl, true);
  }
  findLastHeaderAction() {
    const lastEl = this.el.nativeElement.lastElementChild;
    return this.findPrevHeaderAction(lastEl, true);
  }
  onTabEndKey(event) {
    const lastHeaderAction = this.findLastHeaderAction();
    this.changeFocusedTab(lastHeaderAction);
    event.preventDefault();
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  updateValue(value) {
    const currentValue = this.value();
    if (this.multiple()) {
      const newValue = Array.isArray(currentValue) ? [...currentValue] : [];
      const index = newValue.indexOf(value);
      if (index !== -1) {
        newValue.splice(index, 1);
      } else {
        newValue.push(value);
      }
      this.value.set(newValue);
    } else {
      if (currentValue === value) {
        this.value.set(void 0);
      } else {
        this.value.set(value);
      }
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Accordion_BaseFactory;
    return function Accordion_Factory(__ngFactoryType__) {
      return (\u0275Accordion_BaseFactory || (\u0275Accordion_BaseFactory = \u0275\u0275getInheritedFactory(_Accordion)))(__ngFactoryType__ || _Accordion);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Accordion,
    selectors: [["p-accordion"]],
    hostVars: 2,
    hostBindings: function Accordion_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function Accordion_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: [1, "value"],
      multiple: [1, "multiple"],
      styleClass: "styleClass",
      expandIcon: "expandIcon",
      collapseIcon: "collapseIcon",
      selectOnFocus: [1, "selectOnFocus"],
      transitionOptions: "transitionOptions",
      motionOptions: [1, "motionOptions"]
    },
    outputs: {
      value: "valueChange",
      onClose: "onClose",
      onOpen: "onOpen"
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_INSTANCE,
      useExisting: _Accordion
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Accordion
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c07,
    decls: 1,
    vars: 0,
    template: function Accordion_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Accordion, [{
    type: Component,
    args: [{
      selector: "p-accordion",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content />`,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [AccordionStyle, {
        provide: ACCORDION_INSTANCE,
        useExisting: Accordion
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Accordion
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
    multiple: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "multiple",
        required: false
      }]
    }],
    styleClass: [{
      type: Input
    }],
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectOnFocus",
        required: false
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    onClose: [{
      type: Output
    }],
    onOpen: [{
      type: Output
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AccordionModule = class _AccordionModule {
  static \u0275fac = function AccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AccordionModule,
    imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule],
    exports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionModule, [{
    type: NgModule,
    args: [{
      imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule],
      exports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/slider/index.mjs
var style6 = "\n    .p-slider {\n        display: block;\n        position: relative;\n        background: dt('slider.track.background');\n        border-radius: dt('slider.track.border.radius');\n    }\n\n    .p-slider-handle {\n        cursor: grab;\n        touch-action: none;\n        user-select: none;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: dt('slider.handle.height');\n        width: dt('slider.handle.width');\n        background: dt('slider.handle.background');\n        border-radius: dt('slider.handle.border.radius');\n        transition:\n            background dt('slider.transition.duration'),\n            color dt('slider.transition.duration'),\n            border-color dt('slider.transition.duration'),\n            box-shadow dt('slider.transition.duration'),\n            outline-color dt('slider.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-slider-handle::before {\n        content: '';\n        width: dt('slider.handle.content.width');\n        height: dt('slider.handle.content.height');\n        display: block;\n        background: dt('slider.handle.content.background');\n        border-radius: dt('slider.handle.content.border.radius');\n        box-shadow: dt('slider.handle.content.shadow');\n        transition: background dt('slider.transition.duration');\n    }\n\n    .p-slider:not(.p-disabled) .p-slider-handle:hover {\n        background: dt('slider.handle.hover.background');\n    }\n\n    .p-slider:not(.p-disabled) .p-slider-handle:hover::before {\n        background: dt('slider.handle.content.hover.background');\n    }\n\n    .p-slider-handle:focus-visible {\n        box-shadow: dt('slider.handle.focus.ring.shadow');\n        outline: dt('slider.handle.focus.ring.width') dt('slider.handle.focus.ring.style') dt('slider.handle.focus.ring.color');\n        outline-offset: dt('slider.handle.focus.ring.offset');\n    }\n\n    .p-slider-range {\n        display: block;\n        background: dt('slider.range.background');\n        border-radius: dt('slider.track.border.radius');\n    }\n\n    .p-slider.p-slider-horizontal {\n        height: dt('slider.track.size');\n    }\n\n    .p-slider-horizontal .p-slider-range {\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        height: 100%;\n    }\n\n    .p-slider-horizontal .p-slider-handle {\n        inset-block-start: 50%;\n        margin-block-start: calc(-1 * calc(dt('slider.handle.height') / 2));\n        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));\n    }\n\n    .p-slider-vertical {\n        min-height: 100px;\n        width: dt('slider.track.size');\n    }\n\n    .p-slider-vertical .p-slider-handle {\n        inset-inline-start: 50%;\n        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));\n        margin-block-end: calc(-1 * calc(dt('slider.handle.height') / 2));\n    }\n\n    .p-slider-vertical .p-slider-range {\n        inset-block-end: 0;\n        inset-inline-start: 0;\n        width: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-slider.mjs
var _c08 = ["sliderHandle"];
var _c15 = ["sliderHandleStart"];
var _c24 = ["sliderHandleEnd"];
var _c33 = (a0, a1) => ({
  "inset-inline-start": a0,
  width: a1
});
var _c42 = (a0, a1) => ({
  bottom: a0,
  height: a1
});
var _c5 = (a0) => ({
  height: a0
});
var _c6 = (a0) => ({
  width: a0
});
var _c7 = (a0, a1) => ({
  "inset-inline-start": a0,
  bottom: a1
});
function Slider_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("range"));
    \u0275\u0275classMap(ctx_r0.cx("range"));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(8, _c33, ctx_r0.offset !== null && ctx_r0.offset !== void 0 ? ctx_r0.offset + "%" : ctx_r0.handleValues[0] + "%", ctx_r0.diff ? ctx_r0.diff + "%" : ctx_r0.handleValues[1] - ctx_r0.handleValues[0] + "%"))("pBind", ctx_r0.ptm("range"));
    \u0275\u0275attribute("data-pc-section", "range")("data-p", ctx_r0.dataP);
  }
}
function Slider_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("range"));
    \u0275\u0275classMap(ctx_r0.cx("range"));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(8, _c42, ctx_r0.offset !== null && ctx_r0.offset !== void 0 ? ctx_r0.offset + "%" : ctx_r0.handleValues[0] + "%", ctx_r0.diff ? ctx_r0.diff + "%" : ctx_r0.handleValues[1] - ctx_r0.handleValues[0] + "%"))("pBind", ctx_r0.ptm("range"));
    \u0275\u0275attribute("data-pc-section", "range")("data-p", ctx_r0.dataP);
  }
}
function Slider_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("range"));
    \u0275\u0275classMap(ctx_r0.cx("range"));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c5, ctx_r0.handleValue + "%"))("pBind", ctx_r0.ptm("range"));
    \u0275\u0275attribute("data-pc-section", "range");
  }
}
function Slider_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("range"));
    \u0275\u0275classMap(ctx_r0.cx("range"));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c6, ctx_r0.handleValue + "%"))("pBind", ctx_r0.ptm("range"));
    \u0275\u0275attribute("data-pc-section", "range");
  }
}
function Slider_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 9, 0);
    \u0275\u0275listener("touchstart", function Slider_span_4_Template_span_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragStart($event));
    })("touchmove", function Slider_span_4_Template_span_touchmove_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDrag($event));
    })("touchend", function Slider_span_4_Template_span_touchend_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragEnd($event));
    })("mousedown", function Slider_span_4_Template_span_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onMouseDown($event));
    })("keydown", function Slider_span_4_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("handle"));
    \u0275\u0275classMap(ctx_r0.cx("handle"));
    \u0275\u0275styleProp("transition", ctx_r0.dragging ? "none" : null);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(18, _c7, ctx_r0.orientation == "horizontal" ? ctx_r0.handleValue + "%" : null, ctx_r0.orientation == "vertical" ? ctx_r0.handleValue + "%" : null))("pAutoFocus", ctx_r0.autofocus)("pBind", ctx_r0.ptm("handle"));
    \u0275\u0275attribute("tabindex", ctx_r0.$disabled() ? null : ctx_r0.tabindex)("aria-valuemin", ctx_r0.min)("aria-valuenow", ctx_r0.value)("aria-valuemax", ctx_r0.max)("aria-labelledby", ctx_r0.ariaLabelledBy)("aria-label", ctx_r0.ariaLabel)("aria-orientation", ctx_r0.orientation)("data-pc-section", "handle")("data-p", ctx_r0.dataP);
  }
}
function Slider_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 10, 1);
    \u0275\u0275listener("keydown", function Slider_span_5_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event, 0));
    })("mousedown", function Slider_span_5_Template_span_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onMouseDown($event, 0));
    })("touchstart", function Slider_span_5_Template_span_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragStart($event, 0));
    })("touchmove", function Slider_span_5_Template_span_touchmove_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDrag($event));
    })("touchend", function Slider_span_5_Template_span_touchend_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragEnd($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("handle"));
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("handle"), ctx_r0.handleIndex == 0 && "p-slider-handle-active"));
    \u0275\u0275styleProp("transition", ctx_r0.dragging ? "none" : null);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(18, _c7, ctx_r0.rangeStartLeft, ctx_r0.rangeStartBottom))("pAutoFocus", ctx_r0.autofocus)("pBind", ctx_r0.ptm("startHandler"));
    \u0275\u0275attribute("tabindex", ctx_r0.$disabled() ? null : ctx_r0.tabindex)("aria-valuemin", ctx_r0.min)("aria-valuenow", ctx_r0.value ? ctx_r0.value[0] : null)("aria-valuemax", ctx_r0.max)("aria-labelledby", ctx_r0.ariaLabelledBy)("aria-label", ctx_r0.ariaLabel)("aria-orientation", ctx_r0.orientation)("data-pc-section", "startHandler")("data-p", ctx_r0.dataP);
  }
}
function Slider_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11, 2);
    \u0275\u0275listener("keydown", function Slider_span_6_Template_span_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event, 1));
    })("mousedown", function Slider_span_6_Template_span_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onMouseDown($event, 1));
    })("touchstart", function Slider_span_6_Template_span_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragStart($event, 1));
    })("touchmove", function Slider_span_6_Template_span_touchmove_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDrag($event));
    })("touchend", function Slider_span_6_Template_span_touchend_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragEnd($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.sx("handle"));
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("handle"), ctx_r0.handleIndex == 1 && "p-slider-handle-active"));
    \u0275\u0275styleProp("transition", ctx_r0.dragging ? "none" : null);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(17, _c7, ctx_r0.rangeEndLeft, ctx_r0.rangeEndBottom))("pBind", ctx_r0.ptm("endHandler"));
    \u0275\u0275attribute("tabindex", ctx_r0.$disabled() ? null : ctx_r0.tabindex)("aria-valuemin", ctx_r0.min)("aria-valuenow", ctx_r0.value ? ctx_r0.value[1] : null)("aria-valuemax", ctx_r0.max)("aria-labelledby", ctx_r0.ariaLabelledBy)("aria-label", ctx_r0.ariaLabel)("aria-orientation", ctx_r0.orientation)("data-pc-section", "endHandler")("data-p", ctx_r0.dataP);
  }
}
var inlineStyles = {
  handle: {
    position: "absolute"
  },
  range: {
    position: "absolute"
  }
};
var classes4 = {
  root: ({
    instance
  }) => ["p-slider p-component", {
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-slider-horizontal": instance.orientation === "horizontal",
    "p-slider-vertical": instance.orientation === "vertical",
    "p-slider-animate": instance.animate
  }],
  range: "p-slider-range",
  handle: "p-slider-handle"
};
var SliderStyle = class _SliderStyle extends BaseStyle {
  name = "slider";
  style = style6;
  classes = classes4;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SliderStyle_BaseFactory;
    return function SliderStyle_Factory(__ngFactoryType__) {
      return (\u0275SliderStyle_BaseFactory || (\u0275SliderStyle_BaseFactory = \u0275\u0275getInheritedFactory(_SliderStyle)))(__ngFactoryType__ || _SliderStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SliderStyle,
    factory: _SliderStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderStyle, [{
    type: Injectable
  }], null, null);
})();
var SliderClasses;
(function(SliderClasses2) {
  SliderClasses2["root"] = "p-slider";
  SliderClasses2["range"] = "p-slider-range";
  SliderClasses2["handle"] = "p-slider-handle";
})(SliderClasses || (SliderClasses = {}));
var SLIDER_INSTANCE = new InjectionToken("SLIDER_INSTANCE");
var SLIDER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Slider),
  multi: true
};
var Slider = class _Slider extends BaseEditableHolder {
  componentName = "Slider";
  $pcSlider = inject(SLIDER_INSTANCE, {
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
   * When enabled, displays an animation on click of the slider bar.
   * @group Props
   */
  animate;
  /**
   * Mininum boundary value.
   * @group Props
   */
  min = 0;
  /**
   * Maximum boundary value.
   * @group Props
   */
  max = 100;
  /**
   * Orientation of the slider.
   * @group Props
   */
  orientation = "horizontal";
  /**
   * Step factor to increment/decrement the value.
   * @group Props
   */
  step;
  /**
   * When specified, allows two boundary values to be picked.
   * @group Props
   */
  range;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on value change.
   * @param {SliderChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when slide ended.
   * @param {SliderSlideEndEvent} event - Custom slide end event.
   * @group Emits
   */
  onSlideEnd = new EventEmitter();
  sliderHandle;
  sliderHandleStart;
  sliderHandleEnd;
  _componentStyle = inject(SliderStyle);
  value;
  values;
  handleValue;
  handleValues = [];
  diff;
  offset;
  bottom;
  dragging;
  dragListener;
  mouseupListener;
  initX;
  initY;
  barWidth;
  barHeight;
  sliderHandleClick;
  handleIndex = 0;
  startHandleValue;
  startx;
  starty;
  ngZone = inject(NgZone);
  onHostClick(event) {
    this.onBarClick(event);
  }
  onMouseDown(event, index) {
    if (this.$disabled()) {
      return;
    }
    this.dragging = true;
    this.updateDomData();
    this.sliderHandleClick = true;
    if (this.range && this.handleValues && this.handleValues[0] === this.max) {
      this.handleIndex = 0;
    } else {
      this.handleIndex = index;
    }
    this.bindDragListeners();
    event.target.focus();
    event.preventDefault();
    if (this.animate) {
      P(this.el.nativeElement, "p-slider-animate");
    }
  }
  onDragStart(event, index) {
    if (this.$disabled()) {
      return;
    }
    this.el.nativeElement.setAttribute("data-p-sliding", true);
    var touchobj = event.changedTouches[0];
    this.startHandleValue = this.range ? this.handleValues[index] : this.handleValue;
    this.dragging = true;
    if (this.range && this.handleValues && this.handleValues[0] === this.max) {
      this.handleIndex = 0;
    } else {
      this.handleIndex = index;
    }
    if (this.orientation === "horizontal") {
      this.startx = parseInt(touchobj.clientX, 10);
      this.barWidth = this.el.nativeElement.offsetWidth;
    } else {
      this.starty = parseInt(touchobj.clientY, 10);
      this.barHeight = this.el.nativeElement.offsetHeight;
    }
    if (this.animate) {
      P(this.el.nativeElement, "p-slider-animate");
    }
    event.preventDefault();
  }
  onDrag(event) {
    if (this.$disabled()) {
      return;
    }
    var touchobj = event.changedTouches[0], handleValue = 0;
    if (this.orientation === "horizontal") {
      handleValue = Math.floor((parseInt(touchobj.clientX, 10) - this.startx) * 100 / this.barWidth) + this.startHandleValue;
    } else {
      handleValue = Math.floor((this.starty - parseInt(touchobj.clientY, 10)) * 100 / this.barHeight) + this.startHandleValue;
    }
    this.setValueFromHandle(event, handleValue);
    event.preventDefault();
  }
  onDragEnd(event) {
    if (this.$disabled()) {
      return;
    }
    this.dragging = false;
    this.el.nativeElement.setAttribute("data-p-sliding", false);
    if (this.range) this.onSlideEnd.emit({
      originalEvent: event,
      values: this.values
    });
    else this.onSlideEnd.emit({
      originalEvent: event,
      value: this.value
    });
    if (this.animate) {
      W(this.el.nativeElement, "p-slider-animate");
    }
    event.preventDefault();
  }
  onBarClick(event) {
    if (this.$disabled()) {
      return;
    }
    if (!this.sliderHandleClick) {
      this.updateDomData();
      this.handleChange(event);
      if (this.range) this.onSlideEnd.emit({
        originalEvent: event,
        values: this.values
      });
      else this.onSlideEnd.emit({
        originalEvent: event,
        value: this.value
      });
    }
    this.sliderHandleClick = false;
  }
  onKeyDown(event, index) {
    this.handleIndex = index;
    switch (event.code) {
      case "ArrowDown":
      case "ArrowLeft":
        this.decrementValue(event, index);
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowRight":
        this.incrementValue(event, index);
        event.preventDefault();
        break;
      case "PageDown":
        this.decrementValue(event, index, true);
        event.preventDefault();
        break;
      case "PageUp":
        this.incrementValue(event, index, true);
        event.preventDefault();
        break;
      case "Home":
        this.updateValue(this.min, event);
        event.preventDefault();
        break;
      case "End":
        this.updateValue(this.max, event);
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  decrementValue(event, index, pageKey = false) {
    let newValue;
    if (this.range) {
      if (this.step) newValue = (this.values?.[index] ?? 0) - this.step;
      else newValue = (this.values?.[index] ?? 0) - 1;
    } else {
      if (this.step) newValue = this.value - this.step;
      else if (!this.step && pageKey) newValue = this.value - 10;
      else newValue = this.value - 1;
    }
    this.updateValue(newValue, event);
    event.preventDefault();
  }
  incrementValue(event, index, pageKey = false) {
    let newValue;
    if (this.range) {
      if (this.step) newValue = (this.values?.[index] ?? 0) + this.step;
      else newValue = (this.values?.[index] ?? 0) + 1;
    } else {
      if (this.step) newValue = this.value + this.step;
      else if (!this.step && pageKey) newValue = this.value + 10;
      else newValue = this.value + 1;
    }
    this.updateValue(newValue, event);
    event.preventDefault();
  }
  handleChange(event) {
    let handleValue = this.calculateHandleValue(event);
    this.setValueFromHandle(event, handleValue);
  }
  bindDragListeners() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        if (!this.dragListener) {
          this.dragListener = this.renderer.listen(documentTarget, "mousemove", (event) => {
            if (this.dragging) {
              this.el.nativeElement.setAttribute("data-p-sliding", true);
              this.ngZone.run(() => {
                this.handleChange(event);
              });
            }
          });
        }
        if (!this.mouseupListener) {
          this.mouseupListener = this.renderer.listen(documentTarget, "mouseup", (event) => {
            if (this.dragging) {
              this.dragging = false;
              this.el.nativeElement.setAttribute("data-p-sliding", false);
              this.ngZone.run(() => {
                if (this.range) this.onSlideEnd.emit({
                  originalEvent: event,
                  values: this.values
                });
                else this.onSlideEnd.emit({
                  originalEvent: event,
                  value: this.value
                });
                if (this.animate) {
                  W(this.el.nativeElement, "p-slider-animate");
                }
              });
            }
          });
        }
      });
    }
  }
  unbindDragListeners() {
    if (this.dragListener) {
      this.dragListener();
      this.dragListener = null;
    }
    if (this.mouseupListener) {
      this.mouseupListener();
      this.mouseupListener = null;
    }
  }
  setValueFromHandle(event, handleValue) {
    let newValue = this.getValueFromHandle(handleValue);
    if (this.range) {
      if (this.step) {
        this.handleStepChange(newValue, this.values[this.handleIndex]);
      } else {
        this.handleValues[this.handleIndex] = handleValue;
        this.updateValue(newValue, event);
      }
    } else {
      if (this.step) {
        this.handleStepChange(newValue, this.value);
      } else {
        this.handleValue = handleValue;
        this.updateValue(newValue, event);
      }
    }
    this.cd.markForCheck();
  }
  handleStepChange(newValue, oldValue) {
    let diff = newValue - oldValue;
    let val = oldValue;
    let _step = this.step;
    if (diff < 0) {
      val = oldValue + Math.ceil(newValue / _step - oldValue / _step) * _step;
    } else if (diff > 0) {
      val = oldValue + Math.floor(newValue / _step - oldValue / _step) * _step;
    }
    this.updateValue(val);
    this.updateHandleValue();
  }
  get rangeStartLeft() {
    if (!this.isVertical()) return this.handleValues[0] > 100 ? "100%" : this.handleValues[0] + "%";
    return null;
  }
  get rangeStartBottom() {
    return this.isVertical() ? this.handleValues[0] + "%" : "auto";
  }
  get rangeEndLeft() {
    return this.isVertical() ? null : this.handleValues[1] + "%";
  }
  get rangeEndBottom() {
    return this.isVertical() ? this.handleValues[1] + "%" : "auto";
  }
  isVertical() {
    return this.orientation === "vertical";
  }
  updateDomData() {
    let rect = this.el.nativeElement.getBoundingClientRect();
    this.initX = rect.left + k();
    this.initY = rect.top + $();
    this.barWidth = this.el.nativeElement.offsetWidth;
    this.barHeight = this.el.nativeElement.offsetHeight;
  }
  calculateHandleValue(event) {
    if (this.orientation === "horizontal") {
      if (V(this.el.nativeElement)) {
        return (this.initX + this.barWidth - event.pageX) * 100 / this.barWidth;
      } else {
        return (event.pageX - this.initX) * 100 / this.barWidth;
      }
    } else {
      return (this.initY + this.barHeight - event.pageY) * 100 / this.barHeight;
    }
  }
  updateHandleValue() {
    if (this.range) {
      this.handleValues[0] = (this.values[0] < this.min ? 0 : this.values[0] - this.min) * 100 / (this.max - this.min);
      this.handleValues[1] = (this.values[1] > this.max ? 100 : this.values[1] - this.min) * 100 / (this.max - this.min);
    } else {
      if (this.value < this.min) this.handleValue = 0;
      else if (this.value > this.max) this.handleValue = 100;
      else this.handleValue = (this.value - this.min) * 100 / (this.max - this.min);
    }
    if (this.step) {
      this.updateDiffAndOffset();
    }
  }
  updateDiffAndOffset() {
    this.diff = this.getDiff();
    this.offset = this.getOffset();
  }
  getDiff() {
    return Math.abs(this.handleValues[0] - this.handleValues[1]);
  }
  getOffset() {
    return Math.min(this.handleValues[0], this.handleValues[1]);
  }
  updateValue(val, event) {
    if (this.range) {
      let value = val;
      if (this.handleIndex == 0) {
        if (value < this.min) {
          value = this.min;
          this.handleValues[0] = 0;
        } else if (value > this.values[1]) {
          if (value > this.max) {
            value = this.max;
            this.handleValues[0] = 100;
          }
        }
        this.sliderHandleStart?.nativeElement.focus();
      } else {
        if (value > this.max) {
          value = this.max;
          this.handleValues[1] = 100;
          this.offset = this.handleValues[1];
        } else if (value < this.min) {
          value = this.min;
          this.handleValues[1] = 0;
        } else if (value < this.values[0]) {
          this.offset = this.handleValues[1];
        }
        this.sliderHandleEnd?.nativeElement.focus();
      }
      if (this.step) {
        this.updateHandleValue();
      } else {
        this.updateDiffAndOffset();
      }
      this.values[this.handleIndex] = this.getNormalizedValue(value);
      let newValues = [this.minVal, this.maxVal];
      this.onModelChange(newValues);
      this.onChange.emit({
        event,
        values: this.values
      });
    } else {
      if (val < this.min) {
        val = this.min;
        this.handleValue = 0;
      } else if (val > this.max) {
        val = this.max;
        this.handleValue = 100;
      }
      this.value = this.getNormalizedValue(val);
      this.onModelChange(this.value);
      this.onChange.emit({
        event,
        value: this.value
      });
      this.sliderHandle?.nativeElement.focus();
    }
    this.updateHandleValue();
  }
  getValueFromHandle(handleValue) {
    return (this.max - this.min) * (handleValue / 100) + this.min;
  }
  getDecimalsCount(value) {
    if (value && Math.floor(value) !== value) return value.toString().split(".")[1].length || 0;
    return 0;
  }
  getNormalizedValue(val) {
    let decimalsCount = this.getDecimalsCount(this.step);
    if (decimalsCount > 0) {
      return +parseFloat(val.toString()).toFixed(decimalsCount);
    } else {
      return Math.floor(val);
    }
  }
  onDestroy() {
    this.unbindDragListeners();
  }
  get minVal() {
    return Math.min(this.values[1], this.values[0]);
  }
  get maxVal() {
    return Math.max(this.values[1], this.values[0]);
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value) {
    if (this.range) this.values = value || [0, 0];
    else this.value = value || 0;
    this.updateHandleValue();
    this.updateDiffAndOffset();
    this.cd.markForCheck();
  }
  get dataP() {
    return this.cn({
      [this.orientation]: this.orientation
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Slider_BaseFactory;
    return function Slider_Factory(__ngFactoryType__) {
      return (\u0275Slider_BaseFactory || (\u0275Slider_BaseFactory = \u0275\u0275getInheritedFactory(_Slider)))(__ngFactoryType__ || _Slider);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Slider,
    selectors: [["p-slider"]],
    viewQuery: function Slider_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c08, 5)(_c15, 5)(_c24, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sliderHandle = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sliderHandleStart = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sliderHandleEnd = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function Slider_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function Slider_click_HostBindingHandler($event) {
          return ctx.onHostClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "slider")("data-pc-section", "root")("data-p", ctx.dataP)("data-p-sliding", false);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      animate: [2, "animate", "animate", booleanAttribute],
      min: [2, "min", "min", numberAttribute],
      max: [2, "max", "max", numberAttribute],
      orientation: "orientation",
      step: [2, "step", "step", numberAttribute],
      range: [2, "range", "range", booleanAttribute],
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange",
      onSlideEnd: "onSlideEnd"
    },
    features: [\u0275\u0275ProvidersFeature([SLIDER_VALUE_ACCESSOR, SliderStyle, {
      provide: SLIDER_INSTANCE,
      useExisting: _Slider
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Slider
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 7,
    vars: 7,
    consts: [["sliderHandle", ""], ["sliderHandleStart", ""], ["sliderHandleEnd", ""], [3, "class", "ngStyle", "style", "pBind", 4, "ngIf"], [3, "class", "style", "ngStyle", "pBind", 4, "ngIf"], ["role", "slider", 3, "class", "transition", "ngStyle", "style", "pAutoFocus", "pBind", "touchstart", "touchmove", "touchend", "mousedown", "keydown", 4, "ngIf"], ["role", "slider", 3, "transition", "class", "style", "ngStyle", "pAutoFocus", "pBind", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], ["role", "slider", 3, "transition", "class", "ngStyle", "style", "pBind", "keydown", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], [3, "ngStyle", "pBind"], ["role", "slider", 3, "touchstart", "touchmove", "touchend", "mousedown", "keydown", "ngStyle", "pAutoFocus", "pBind"], ["role", "slider", 3, "keydown", "mousedown", "touchstart", "touchmove", "touchend", "ngStyle", "pAutoFocus", "pBind"], ["role", "slider", 3, "keydown", "mousedown", "touchstart", "touchmove", "touchend", "ngStyle", "pBind"]],
    template: function Slider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Slider_span_0_Template, 1, 11, "span", 3)(1, Slider_span_1_Template, 1, 11, "span", 3)(2, Slider_span_2_Template, 1, 9, "span", 4)(3, Slider_span_3_Template, 1, 9, "span", 4)(4, Slider_span_4_Template, 2, 21, "span", 5)(5, Slider_span_5_Template, 2, 21, "span", 6)(6, Slider_span_6_Template, 2, 20, "span", 7);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.range && ctx.orientation == "horizontal");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.range && ctx.orientation == "vertical");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.range && ctx.orientation == "vertical");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.range && ctx.orientation == "horizontal");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.range);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.range);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.range);
      }
    },
    dependencies: [CommonModule, NgIf, NgStyle, AutoFocus, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Slider, [{
    type: Component,
    args: [{
      selector: "p-slider",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule, BindModule],
      template: `
        <span
            *ngIf="range && orientation == 'horizontal'"
            [class]="cx('range')"
            [ngStyle]="{
                'inset-inline-start': offset !== null && offset !== undefined ? offset + '%' : handleValues[0] + '%',
                width: diff ? diff + '%' : handleValues[1] - handleValues[0] + '%'
            }"
            [style]="sx('range')"
            [attr.data-pc-section]="'range'"
            [attr.data-p]="dataP"
            [pBind]="ptm('range')"
        ></span>
        <span
            *ngIf="range && orientation == 'vertical'"
            [class]="cx('range')"
            [ngStyle]="{
                bottom: offset !== null && offset !== undefined ? offset + '%' : handleValues[0] + '%',
                height: diff ? diff + '%' : handleValues[1] - handleValues[0] + '%'
            }"
            [style]="sx('range')"
            [attr.data-pc-section]="'range'"
            [attr.data-p]="dataP"
            [pBind]="ptm('range')"
        ></span>
        <span *ngIf="!range && orientation == 'vertical'" [class]="cx('range')" [attr.data-pc-section]="'range'" [style]="sx('range')" [ngStyle]="{ height: handleValue + '%' }" [pBind]="ptm('range')"></span>
        <span *ngIf="!range && orientation == 'horizontal'" [class]="cx('range')" [attr.data-pc-section]="'range'" [style]="sx('range')" [ngStyle]="{ width: handleValue + '%' }" [pBind]="ptm('range')"></span>
        <span
            *ngIf="!range"
            #sliderHandle
            [class]="cx('handle')"
            [style.transition]="dragging ? 'none' : null"
            [ngStyle]="{
                'inset-inline-start': orientation == 'horizontal' ? handleValue + '%' : null,
                bottom: orientation == 'vertical' ? handleValue + '%' : null
            }"
            [style]="sx('handle')"
            (touchstart)="onDragStart($event)"
            (touchmove)="onDrag($event)"
            (touchend)="onDragEnd($event)"
            (mousedown)="onMouseDown($event)"
            (keydown)="onKeyDown($event)"
            [attr.tabindex]="$disabled() ? null : tabindex"
            role="slider"
            [attr.aria-valuemin]="min"
            [attr.aria-valuenow]="value"
            [attr.aria-valuemax]="max"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.aria-orientation]="orientation"
            [attr.data-pc-section]="'handle'"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('handle')"
            [attr.data-p]="dataP"
        ></span>
        <span
            *ngIf="range"
            #sliderHandleStart
            [style.transition]="dragging ? 'none' : null"
            [class]="cn(cx('handle'), handleIndex == 0 && 'p-slider-handle-active')"
            [style]="sx('handle')"
            [ngStyle]="{ 'inset-inline-start': rangeStartLeft, bottom: rangeStartBottom }"
            (keydown)="onKeyDown($event, 0)"
            (mousedown)="onMouseDown($event, 0)"
            (touchstart)="onDragStart($event, 0)"
            (touchmove)="onDrag($event)"
            (touchend)="onDragEnd($event)"
            [attr.tabindex]="$disabled() ? null : tabindex"
            role="slider"
            [attr.aria-valuemin]="min"
            [attr.aria-valuenow]="value ? value[0] : null"
            [attr.aria-valuemax]="max"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.aria-orientation]="orientation"
            [attr.data-pc-section]="'startHandler'"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('startHandler')"
            [attr.data-p]="dataP"
        ></span>
        <span
            *ngIf="range"
            #sliderHandleEnd
            [style.transition]="dragging ? 'none' : null"
            [class]="cn(cx('handle'), handleIndex == 1 && 'p-slider-handle-active')"
            [ngStyle]="{ 'inset-inline-start': rangeEndLeft, bottom: rangeEndBottom }"
            [style]="sx('handle')"
            (keydown)="onKeyDown($event, 1)"
            (mousedown)="onMouseDown($event, 1)"
            (touchstart)="onDragStart($event, 1)"
            (touchmove)="onDrag($event)"
            (touchend)="onDragEnd($event)"
            [attr.tabindex]="$disabled() ? null : tabindex"
            role="slider"
            [attr.aria-valuemin]="min"
            [attr.aria-valuenow]="value ? value[1] : null"
            [attr.aria-valuemax]="max"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.aria-orientation]="orientation"
            [attr.data-pc-section]="'endHandler'"
            [pBind]="ptm('endHandler')"
            [attr.data-p]="dataP"
        ></span>
    `,
      providers: [SLIDER_VALUE_ACCESSOR, SliderStyle, {
        provide: SLIDER_INSTANCE,
        useExisting: Slider
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Slider
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[attr.data-pc-name]": "'slider'",
        "[attr.data-pc-section]": "'root'",
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p]": "dataP",
        "[attr.data-p-sliding]": "false"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    animate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    orientation: [{
      type: Input
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    range: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onSlideEnd: [{
      type: Output
    }],
    sliderHandle: [{
      type: ViewChild,
      args: ["sliderHandle"]
    }],
    sliderHandleStart: [{
      type: ViewChild,
      args: ["sliderHandleStart"]
    }],
    sliderHandleEnd: [{
      type: ViewChild,
      args: ["sliderHandleEnd"]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SliderModule = class _SliderModule {
  static \u0275fac = function SliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SliderModule,
    imports: [Slider, SharedModule],
    exports: [Slider, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Slider, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderModule, [{
    type: NgModule,
    args: [{
      imports: [Slider, SharedModule],
      exports: [Slider, SharedModule]
    }]
  }], null, null);
})();

// libs/frontend/shared/ui/src/lib/ui/accordion/ui-accordion.slots.ts
var UiAccordionHeaderSlot = class _UiAccordionHeaderSlot {
  tpl = inject(TemplateRef);
  static \u0275fac = function UiAccordionHeaderSlot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiAccordionHeaderSlot)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _UiAccordionHeaderSlot, selectors: [["", "appUiAccordionHeader", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiAccordionHeaderSlot, [{
    type: Directive,
    args: [{
      selector: "[appUiAccordionHeader]",
      standalone: true
    }]
  }], null, null);
})();
var UiAccordionContentSlot = class _UiAccordionContentSlot {
  tpl = inject(TemplateRef);
  static \u0275fac = function UiAccordionContentSlot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiAccordionContentSlot)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _UiAccordionContentSlot, selectors: [["", "appUiAccordionContent", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiAccordionContentSlot, [{
    type: Directive,
    args: [{
      selector: "[appUiAccordionContent]",
      standalone: true
    }]
  }], null, null);
})();

// libs/frontend/shared/ui/src/lib/ui/accordion/ui-accordion.component.ts
function UiAccordionComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function UiAccordionComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var ACCORDION_ID = 0;
var UiAccordionComponent = class _UiAccordionComponent {
  defaultOpen = input(false, ...ngDevMode ? [{ debugName: "defaultOpen" }] : []);
  headerClass = input("text-2xl sm:text-3xl font-bold text-[#f6f6f6]", ...ngDevMode ? [{ debugName: "headerClass" }] : []);
  contentWrapClass = input("mt-2", ...ngDevMode ? [{ debugName: "contentWrapClass" }] : []);
  contentClass = input("pt-4 text-[#bebcbd]", ...ngDevMode ? [{ debugName: "contentClass" }] : []);
  headerTpl = contentChild.required(UiAccordionHeaderSlot);
  contentTpl = contentChild.required(UiAccordionContentSlot);
  _id = `ui-accordion-${ACCORDION_ID++}`;
  contentId = `${this._id}-content`;
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  ngOnInit() {
    this.isOpen.set(this.defaultOpen());
  }
  toggle() {
    this.isOpen.update((v) => !v);
  }
  onEscape(event) {
    if (!this.isOpen() || !(event instanceof KeyboardEvent))
      return;
    event.preventDefault();
    event.stopPropagation();
    this.isOpen.set(false);
  }
  static \u0275fac = function UiAccordionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiAccordionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiAccordionComponent, selectors: [["app-ui-accordion"]], contentQueries: function UiAccordionComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.headerTpl, UiAccordionHeaderSlot, 5)(dirIndex, ctx.contentTpl, UiAccordionContentSlot, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, inputs: { defaultOpen: [1, "defaultOpen"], headerClass: [1, "headerClass"], contentWrapClass: [1, "contentWrapClass"], contentClass: [1, "contentClass"] }, decls: 10, vars: 15, consts: [[1, "w-full"], ["type", "button", 3, "click", "keydown.escape"], [4, "ngTemplateOutlet"], ["aria-hidden", "true", 1, "ml-3", "inline-flex", "items-center"], ["viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5", "transition-transform", "duration-200"], ["fill-rule", "evenodd", "d", "M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z", "clip-rule", "evenodd"], ["role", "region", 3, "id"], [1, "overflow-hidden"]], template: function UiAccordionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function UiAccordionComponent_Template_button_click_1_listener() {
        return ctx.toggle();
      })("keydown.escape", function UiAccordionComponent_Template_button_keydown_escape_1_listener($event) {
        return ctx.onEscape($event);
      });
      \u0275\u0275template(2, UiAccordionComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div");
      \u0275\u0275template(9, UiAccordionComponent_ng_container_9_Template, 1, 0, "ng-container", 2);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classMap("w-full flex items-center justify-between text-left select-none " + ctx.headerClass());
      \u0275\u0275attribute("aria-expanded", ctx.isOpen())("aria-controls", ctx.contentId);
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", ctx.headerTpl().tpl);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rotate-180", ctx.isOpen());
      \u0275\u0275advance(2);
      \u0275\u0275classMap("grid transition-[grid-template-rows] duration-200 ease-in-out" + ctx.contentWrapClass());
      \u0275\u0275styleProp("grid-template-rows", ctx.isOpen() ? "1fr" : "0fr");
      \u0275\u0275property("id", ctx.contentId);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.contentClass());
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", ctx.contentTpl().tpl);
    }
  }, dependencies: [NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiAccordionComponent, [{
    type: Component,
    args: [{ selector: "app-ui-accordion", standalone: true, imports: [NgTemplateOutlet], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="w-full">
  <button
    type="button"
    [class]="'w-full flex items-center justify-between text-left select-none ' + headerClass()"
    [attr.aria-expanded]="isOpen()"
    [attr.aria-controls]="contentId"
    (click)="toggle()"
    (keydown.escape)="onEscape($event)"
  >
    <ng-container *ngTemplateOutlet="headerTpl().tpl" />

    <span class="ml-3 inline-flex items-center" aria-hidden="true">
      <svg
        class="h-5 w-5 transition-transform duration-200"
        [class.rotate-180]="isOpen()"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </button>

  <div
    [id]="contentId"
    role="region"
    [class]="'grid transition-[grid-template-rows] duration-200 ease-in-out' + contentWrapClass()"
    [style.gridTemplateRows]="isOpen() ? '1fr' : '0fr'"
  >
    <div class="overflow-hidden">
      <div [class]="contentClass()">
        <ng-container *ngTemplateOutlet="contentTpl().tpl" />
      </div>
    </div>
  </div>
</div>
` }]
  }], null, { defaultOpen: [{ type: Input, args: [{ isSignal: true, alias: "defaultOpen", required: false }] }], headerClass: [{ type: Input, args: [{ isSignal: true, alias: "headerClass", required: false }] }], contentWrapClass: [{ type: Input, args: [{ isSignal: true, alias: "contentWrapClass", required: false }] }], contentClass: [{ type: Input, args: [{ isSignal: true, alias: "contentClass", required: false }] }], headerTpl: [{ type: ContentChild, args: [forwardRef(() => UiAccordionHeaderSlot), { isSignal: true }] }], contentTpl: [{ type: ContentChild, args: [forwardRef(() => UiAccordionContentSlot), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiAccordionComponent, { className: "UiAccordionComponent", filePath: "libs/frontend/shared/ui/src/lib/ui/accordion/ui-accordion.component.ts", lineNumber: 21 });
})();

// libs/frontend/shared/ui/src/lib/ui/ui-icon/ui-icon.ts
var UiIconComponent = class _UiIconComponent {
  name = input.required(...ngDevMode ? [{ debugName: "name" }] : []);
  size = input("md", ...ngDevMode ? [{ debugName: "size" }] : []);
  tone = input("default", ...ngDevMode ? [{ debugName: "tone" }] : []);
  cls = computed(() => {
    const base = `pi pi-${this.name()}`;
    const size = this.size() === "sm" ? "text-sm" : this.size() === "lg" ? "text-lg" : "text-base";
    const tone = this.tone() === "muted" ? "text-gray-500" : this.tone() === "danger" ? "text-red-600" : "text-gray-800";
    return `${base} ${size} ${tone}`;
  }, ...ngDevMode ? [{ debugName: "cls" }] : []);
  static \u0275fac = function UiIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UiIconComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UiIconComponent, selectors: [["app-ui-icon"]], inputs: { name: [1, "name"], size: [1, "size"], tone: [1, "tone"] }, decls: 1, vars: 2, template: function UiIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "i");
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.cls());
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UiIconComponent, [{
    type: Component,
    args: [{
      selector: "app-ui-icon",
      standalone: true,
      template: `<i [class]="cls()"></i>`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], tone: [{ type: Input, args: [{ isSignal: true, alias: "tone", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UiIconComponent, { className: "UiIconComponent", filePath: "libs/frontend/shared/ui/src/lib/ui/ui-icon/ui-icon.ts", lineNumber: 10 });
})();

export {
  AccordionPanel,
  AccordionHeader,
  AccordionContent,
  Accordion,
  AccordionModule,
  Slider,
  UiAccordionHeaderSlot,
  UiAccordionContentSlot,
  UiAccordionComponent,
  UiBreadcrumbComponent,
  UiRatingComponent,
  UISelect,
  UiIconComponent
};
//# sourceMappingURL=chunk-CYXE43MA.js.map
