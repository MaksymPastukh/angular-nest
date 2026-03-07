import {
  FocusTrap
} from "./chunk-6A2CUT66.js";
import {
  ChevronLeftIcon
} from "./chunk-MY77PPEI.js";
import {
  ProductCardComponent
} from "./chunk-KBEZ7IEP.js";
import {
  ImageUrlPipe
} from "./chunk-WAPWYWJN.js";
import {
  Button,
  ButtonModule
} from "./chunk-MWDZSOMN.js";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  Ripple,
  blockBodyScroll,
  unblockBodyScroll
} from "./chunk-VP3NVYXS.js";
import "./chunk-SXE3IDZP.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  MotionDirective,
  MotionModule,
  P,
  PARENT_INSTANCE,
  Q,
  TimesIcon,
  W,
  Y,
  _t,
  bt,
  s,
  z,
  zindexutils
} from "./chunk-PV4HM4QP.js";
import {
  RouterLink
} from "./chunk-M4TX5Q67.js";
import {
  CommonModule,
  Footer,
  Header,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  PrimeTemplate,
  SharedModule,
  isPlatformBrowser
} from "./chunk-SJAIUEWT.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  KeyValueDiffers,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  __spreadValues,
  booleanAttribute,
  computed,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-2WGIEBYO.js";

// node_modules/@primeuix/styles/dist/carousel/index.mjs
var style = "\n    .p-carousel {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-carousel-content-container {\n        display: flex;\n        flex-direction: column;\n        overflow: auto;\n    }\n\n    .p-carousel-content {\n        display: flex;\n        flex-direction: row;\n        gap: dt('carousel.content.gap');\n    }\n\n    .p-carousel-content:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-carousel-viewport {\n        overflow: hidden;\n        width: 100%;\n    }\n\n    .p-carousel-item-list {\n        display: flex;\n        flex-direction: row;\n    }\n\n    .p-carousel-item-list:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-carousel-prev-button,\n    .p-carousel-next-button {\n        align-self: center;\n        flex-shrink: 0;\n    }\n\n    .p-carousel-indicator-list {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        flex-wrap: wrap;\n        padding: dt('carousel.indicator.list.padding');\n        gap: dt('carousel.indicator.list.gap');\n        margin: 0;\n        list-style: none;\n    }\n\n    .p-carousel-indicator-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('carousel.indicator.background');\n        width: dt('carousel.indicator.width');\n        height: dt('carousel.indicator.height');\n        border: 0 none;\n        transition:\n            background dt('carousel.transition.duration'),\n            color dt('carousel.transition.duration'),\n            outline-color dt('carousel.transition.duration'),\n            box-shadow dt('carousel.transition.duration');\n        outline-color: transparent;\n        border-radius: dt('carousel.indicator.border.radius');\n        padding: 0;\n        margin: 0;\n        user-select: none;\n        cursor: pointer;\n    }\n\n    .p-carousel-indicator-button:focus-visible {\n        box-shadow: dt('carousel.indicator.focus.ring.shadow');\n        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');\n        outline-offset: dt('carousel.indicator.focus.ring.offset');\n    }\n\n    .p-carousel-indicator-button:hover {\n        background: dt('carousel.indicator.hover.background');\n    }\n\n    .p-carousel-indicator-active .p-carousel-indicator-button {\n        background: dt('carousel.indicator.active.background');\n    }\n\n    .p-carousel-vertical .p-carousel-content {\n        flex-direction: column;\n    }\n\n    .p-carousel-vertical .p-carousel-item-list {\n        flex-direction: column;\n        height: 100%;\n    }\n\n    .p-items-hidden .p-carousel-item {\n        visibility: hidden;\n    }\n\n    .p-items-hidden .p-carousel-item.p-carousel-item-active {\n        visibility: visible;\n    }\n";

// node_modules/primeng/fesm2022/primeng-carousel.mjs
var _c0 = ["item"];
var _c1 = ["header"];
var _c2 = ["footer"];
var _c3 = ["previousicon"];
var _c4 = ["nexticon"];
var _c5 = ["itemsContainer"];
var _c6 = ["indicatorContent"];
var _c7 = [[["p-header"]], [["p-footer"]]];
var _c8 = ["p-header", "p-footer"];
var _c9 = (a0) => ({
  height: a0
});
var _c10 = (a0) => ({
  index: a0
});
var _c11 = (a0) => ({
  $implicit: a0
});
function Carousel_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275projection(1);
    \u0275\u0275template(2, Carousel_div_0_ng_container_2_Template, 1, 0, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("header"));
    \u0275\u0275property("pBind", ctx_r0.ptm("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 19);
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_1_Template, 1, 0, "svg", 16)(2, Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_2_Template, 1, 0, "svg", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isVertical());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isVertical());
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_1_1_ng_template_0_Template(rf, ctx) {
}
function Carousel_p_button_3_ng_template_1_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Carousel_p_button_3_ng_template_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Carousel_p_button_3_ng_template_1_ng_container_1_1_Template, 1, 0, null, 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.previousIconTemplate || ctx_r0._previousIconTemplate);
  }
}
function Carousel_p_button_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Carousel_p_button_3_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 15)(1, Carousel_p_button_3_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 15);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.previousIconTemplate && !ctx_r0._previousIconTemplate && !(ctx_r0.prevButtonProps == null ? null : ctx_r0.prevButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.previousIconTemplate || ctx_r0._previousIconTemplate) && !(ctx_r0.prevButtonProps == null ? null : ctx_r0.prevButtonProps.icon));
  }
}
function Carousel_p_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 14);
    \u0275\u0275listener("click", function Carousel_p_button_3_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.navBackward($event));
    });
    \u0275\u0275template(1, Carousel_p_button_3_ng_template_1_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("pcPrevButton"));
    \u0275\u0275property("text", true)("buttonProps", ctx_r0.prevButtonProps)("pt", ctx_r0.ptm("pcPrevButton"))("unstyled", ctx_r0.unstyled());
    \u0275\u0275attribute("aria-label", ctx_r0.ariaPrevButtonLabel());
  }
}
function Carousel_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, Carousel_div_7_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("itemClone", \u0275\u0275pureFunction1(11, _c10, index_r4)));
    \u0275\u0275property("pBind", ctx_r0.ptm("itemClone"));
    \u0275\u0275attribute("aria-hidden", !(ctx_r0.totalShiftedItems * -1 === ctx_r0.value.length))("aria-label", ctx_r0.ariaSlideNumber(index_r4))("aria-roledescription", ctx_r0.ariaSlideLabel())("data-p-carousel-item-active", ctx_r0.totalShiftedItems * -1 === ctx_r0.value.length + ctx_r0._numVisible)("data-p-carousel-item-start", index_r4 === 0)("data-p-carousel-item-end", ctx_r0.clonedItemsForStarting && ctx_r0.clonedItemsForStarting.length - 1 === index_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c11, item_r3));
  }
}
function Carousel_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, Carousel_div_8_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("item", \u0275\u0275pureFunction1(11, _c10, index_r6)));
    \u0275\u0275property("pBind", ctx_r0.getItemPTOptions("item", index_r6));
    \u0275\u0275attribute("aria-hidden", !(ctx_r0.firstIndex() <= index_r6 && ctx_r0.lastIndex() >= index_r6))("aria-label", ctx_r0.ariaSlideNumber(index_r6))("aria-roledescription", ctx_r0.ariaSlideLabel())("data-p-carousel-item-active", ctx_r0.firstIndex() <= index_r6 && ctx_r0.lastIndex() >= index_r6)("data-p-carousel-item-start", ctx_r0.firstIndex() === index_r6)("data-p-carousel-item-end", ctx_r0.lastIndex() === index_r6);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c11, item_r5));
  }
}
function Carousel_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, Carousel_div_9_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const index_r8 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("itemClone", \u0275\u0275pureFunction1(8, _c10, index_r8)));
    \u0275\u0275property("pBind", ctx_r0.ptm("itemClone"));
    \u0275\u0275attribute("data-p-carousel-item-active", false)("data-p-carousel-item-start", false)("data-p-carousel-item-end", false);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.itemTemplate || ctx_r0._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c11, item_r7));
  }
}
function Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 25);
  }
}
function Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 26);
  }
}
function Carousel_p_button_10_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_1_Template, 1, 0, "svg", 23)(2, Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_2_Template, 1, 0, "svg", 24);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isVertical());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isVertical());
  }
}
function Carousel_p_button_10_ng_template_1_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Carousel_p_button_10_ng_template_1_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Carousel_p_button_10_ng_template_1_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_p_button_10_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, Carousel_p_button_10_ng_template_1_span_1_1_Template, 1, 0, null, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nextIconTemplate || ctx_r0._nextIconTemplate);
  }
}
function Carousel_p_button_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Carousel_p_button_10_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 15)(1, Carousel_p_button_10_ng_template_1_span_1_Template, 2, 1, "span", 15);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.nextIconTemplate && !ctx_r0._nextIconTemplate && !(ctx_r0.nextButtonProps == null ? null : ctx_r0.nextButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.nextIconTemplate || ctx_r0._nextIconTemplate && !(ctx_r0.nextButtonProps == null ? null : ctx_r0.nextButtonProps.icon));
  }
}
function Carousel_p_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 22);
    \u0275\u0275listener("click", function Carousel_p_button_10_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.navForward($event));
    });
    \u0275\u0275template(1, Carousel_p_button_10_ng_template_1_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("pcNextButton"));
    \u0275\u0275property("buttonProps", ctx_r0.nextButtonProps)("text", true)("pt", ctx_r0.ptm("pcNextButton"))("unstyled", ctx_r0.unstyled());
    \u0275\u0275attribute("aria-label", ctx_r0.ariaNextButtonLabel());
  }
}
function Carousel_ul_11_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 5)(1, "button", 28);
    \u0275\u0275listener("click", function Carousel_ul_11_li_2_Template_button_click_1_listener($event) {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDotClick($event, i_r12));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("indicator", \u0275\u0275pureFunction1(11, _c10, i_r12)));
    \u0275\u0275property("pBind", ctx_r0.getIndicatorPTOptions("indicator", i_r12));
    \u0275\u0275attribute("data-p-active", ctx_r0._page === i_r12);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("indicatorButton"));
    \u0275\u0275property("ngStyle", ctx_r0.indicatorStyle)("tabindex", ctx_r0._page === i_r12 ? 0 : -1)("pBind", ctx_r0.getIndicatorPTOptions("indicatorButton", i_r12));
    \u0275\u0275attribute("aria-label", ctx_r0.ariaPageLabel(i_r12 + 1))("aria-current", ctx_r0._page === i_r12 ? "page" : void 0);
  }
}
function Carousel_ul_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 27, 2);
    \u0275\u0275listener("keydown", function Carousel_ul_11_Template_ul_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onIndicatorKeydown($event));
    });
    \u0275\u0275template(2, Carousel_ul_11_li_2_Template, 2, 13, "li", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("indicatorList"));
    \u0275\u0275property("ngStyle", ctx_r0.indicatorsContentStyle)("pBind", ctx_r0.ptm("indicatorList"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.totalDotsArray());
  }
}
function Carousel_div_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Carousel_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, Carousel_div_12_ng_container_2_Template, 1, 0, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("footer"));
    \u0275\u0275property("pBind", ctx_r0.ptm("footer"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate || ctx_r0._footerTemplate);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-carousel p-component", {
    "p-carousel-vertical": instance.isVertical(),
    "p-carousel-horizontal": !instance.isVertical()
  }],
  header: "p-carousel-header",
  contentContainer: "p-carousel-content-container",
  content: "p-carousel-content",
  pcPrevButton: ({
    instance
  }) => ["p-carousel-prev-button", {
    "p-disabled": instance.isBackwardNavDisabled()
  }],
  viewport: "p-carousel-viewport",
  itemList: "p-carousel-item-list",
  itemClone: ({
    instance,
    index
  }) => ["p-carousel-item p-carousel-item-clone", {
    "p-carousel-item-active": instance.totalShiftedItems * -1 === instance.value.length,
    "p-carousel-item-start": 0 === index,
    "p-carousel-item-end": instance.clonedItemsForStarting.length - 1 === index
  }],
  item: ({
    instance,
    index
  }) => ["p-carousel-item", {
    "p-carousel-item-active": instance.firstIndex() <= index && instance.lastIndex() >= index,
    "p-carousel-item-start": instance.firstIndex() === index,
    "p-carousel-item-end": instance.lastIndex() === index
  }],
  pcNextButton: ({
    instance
  }) => ["p-carousel-next-button", {
    "p-disabled": instance.isForwardNavDisabled()
  }],
  indicatorList: ({
    instance
  }) => ["p-carousel-indicator-list", instance.indicatorsContentClass],
  indicator: ({
    instance,
    index
  }) => ["p-carousel-indicator", {
    "p-carousel-indicator-active": instance._page === index
  }],
  indicatorButton: ({
    instance
  }) => ["p-carousel-indicator-button", instance.indicatorStyleClass],
  footer: "p-carousel-footer"
};
var CarouselStyle = class _CarouselStyle extends BaseStyle {
  name = "carousel";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CarouselStyle_BaseFactory;
    return function CarouselStyle_Factory(__ngFactoryType__) {
      return (\u0275CarouselStyle_BaseFactory || (\u0275CarouselStyle_BaseFactory = \u0275\u0275getInheritedFactory(_CarouselStyle)))(__ngFactoryType__ || _CarouselStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CarouselStyle,
    factory: _CarouselStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselStyle, [{
    type: Injectable
  }], null, null);
})();
var CarouselClasses;
(function(CarouselClasses2) {
  CarouselClasses2["root"] = "p-carousel";
  CarouselClasses2["header"] = "p-carousel-header";
  CarouselClasses2["contentContainer"] = "p-carousel-content-container";
  CarouselClasses2["content"] = "p-carousel-content";
  CarouselClasses2["pcPrevButton"] = "p-carousel-prev-button";
  CarouselClasses2["viewport"] = "p-carousel-viewport";
  CarouselClasses2["itemList"] = "p-carousel-item-list";
  CarouselClasses2["itemClone"] = "p-carousel-item-clone";
  CarouselClasses2["item"] = "p-carousel-item";
  CarouselClasses2["pcNextButton"] = "p-carousel-next-button";
  CarouselClasses2["indicatorList"] = "p-carousel-indicator-list";
  CarouselClasses2["indicator"] = "p-carousel-indicator";
  CarouselClasses2["indicatorButton"] = "p-carousel-indicator-button";
  CarouselClasses2["footer"] = "p-carousel-footer";
})(CarouselClasses || (CarouselClasses = {}));
var Carousel = class _Carousel extends BaseComponent {
  el;
  zone;
  componentName = "Carousel";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  /**
   * Index of the first item.
   * @defaultValue 0
   * @group Props
   */
  get page() {
    return this._page;
  }
  set page(val) {
    if (this.isCreated && val !== this._page) {
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (val > this._page && val <= this.totalDots() - 1) {
        this.step(-1, val);
      } else if (val < this._page) {
        this.step(1, val);
      }
    }
    this._page = val;
  }
  /**
   * Number of items per page.
   * @defaultValue 1
   * @group Props
   */
  get numVisible() {
    return this._numVisible;
  }
  set numVisible(val) {
    this._numVisible = val;
  }
  /**
   * Number of items to scroll.
   * @defaultValue 1
   * @group Props
   */
  get numScroll() {
    return this._numVisible;
  }
  set numScroll(val) {
    this._numScroll = val;
  }
  /**
   * An array of options for responsive design.
   * @see {CarouselResponsiveOptions}
   * @group Props
   */
  responsiveOptions;
  /**
   * Specifies the layout of the component.
   * @group Props
   */
  orientation = "horizontal";
  /**
   * Height of the viewport in vertical layout.
   * @group Props
   */
  verticalViewPortHeight = "300px";
  /**
   * Style class of main content.
   * @group Props
   */
  contentClass = "";
  /**
   * Style class of the indicator items.
   * @group Props
   */
  indicatorsContentClass = "";
  /**
   * Inline style of the indicator items.
   * @group Props
   */
  indicatorsContentStyle;
  /**
   * Style class of the indicators.
   * @group Props
   */
  indicatorStyleClass = "";
  /**
   * Style of the indicators.
   * @group Props
   */
  indicatorStyle;
  /**
   * An array of objects to display.
   * @defaultValue null
   * @group Props
   */
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  /**
   * Defines if scrolling would be infinite.
   * @group Props
   */
  circular = false;
  /**
   * Whether to display indicator container.
   * @group Props
   */
  showIndicators = true;
  /**
   * Whether to display navigation buttons in container.
   * @group Props
   */
  showNavigators = true;
  /**
   * Time in milliseconds to scroll items automatically.
   * @group Props
   */
  autoplayInterval = 0;
  /**
   * Style class of the viewport container.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  prevButtonProps = {
    severity: "secondary",
    text: true,
    rounded: true
  };
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  nextButtonProps = {
    severity: "secondary",
    text: true,
    rounded: true
  };
  /**
   * Callback to invoke after scroll.
   * @param {CarouselPageEvent} event - Custom page event.
   * @group Emits
   */
  onPage = new EventEmitter();
  itemsContainer;
  indicatorContent;
  headerFacet;
  footerFacet;
  _numVisible = 1;
  _numScroll = 1;
  _oldNumScroll = 0;
  prevState = {
    numScroll: 0,
    numVisible: 0,
    value: []
  };
  defaultNumScroll = 1;
  defaultNumVisible = 1;
  _page = 0;
  _value;
  carouselStyle;
  id;
  totalShiftedItems;
  isRemainingItemsAdded = false;
  animationTimeout;
  translateTimeout;
  remainingItems = 0;
  _items;
  startPos;
  documentResizeListener;
  clonedItemsForStarting;
  clonedItemsForFinishing;
  allowAutoplay;
  interval;
  isCreated;
  swipeThreshold = 20;
  /**
   * Custom item template.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom previous icon template.
   * @group Templates
   */
  previousIconTemplate;
  /**
   * Custom next icon template.
   * @group Templates
   */
  nextIconTemplate;
  _itemTemplate;
  _headerTemplate;
  _footerTemplate;
  _previousIconTemplate;
  _nextIconTemplate;
  window;
  _componentStyle = inject(CarouselStyle);
  constructor(el, zone) {
    super();
    this.el = el;
    this.zone = zone;
    this.totalShiftedItems = this.page * this.numScroll * -1;
    this.window = this.document.defaultView;
  }
  onChanges(simpleChange) {
    if (isPlatformBrowser(this.platformId)) {
      if (simpleChange.value) {
        if (this.circular && this._value) {
          this.setCloneItems();
        }
      }
      if (this.isCreated) {
        if (simpleChange.numVisible) {
          if (this.responsiveOptions) {
            this.defaultNumVisible = this.numVisible;
          }
          if (this.isCircular()) {
            this.setCloneItems();
          }
          this.createStyle();
          this.calculatePosition();
        }
        if (simpleChange.numScroll) {
          if (this.responsiveOptions) {
            this.defaultNumScroll = this.numScroll;
          }
        }
      }
    }
    this.cd.markForCheck();
  }
  templates;
  onAfterContentInit() {
    this.id = s("pn_id_");
    if (isPlatformBrowser(this.platformId)) {
      this.allowAutoplay = !!this.autoplayInterval;
      if (this.circular) {
        this.setCloneItems();
      }
      if (this.responsiveOptions) {
        this.defaultNumScroll = this._numScroll;
        this.defaultNumVisible = this._numVisible;
      }
      this.createStyle();
      this.calculatePosition();
      if (this.responsiveOptions) {
        this.bindDocumentListeners();
      }
    }
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "previousicon":
          this._previousIconTemplate = item.template;
          break;
        case "nexticon":
          this._nextIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
    this.cd.detectChanges();
  }
  onAfterContentChecked() {
    if (isPlatformBrowser(this.platformId)) {
      const isCircular = this.isCircular();
      let totalShiftedItems = this.totalShiftedItems;
      if (this.value && this.itemsContainer && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
        if (this.autoplayInterval) {
          this.stopAutoplay(false);
        }
        this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
        let page = this._page;
        if (this.totalDots() !== 0 && page >= this.totalDots()) {
          page = this.totalDots() - 1;
          this._page = page;
          this.onPage.emit({
            page: this.page
          });
        }
        totalShiftedItems = page * this._numScroll * -1;
        if (isCircular) {
          totalShiftedItems -= this._numVisible;
        }
        if (page === this.totalDots() - 1 && this.remainingItems > 0) {
          totalShiftedItems += -1 * this.remainingItems + this._numScroll;
          this.isRemainingItemsAdded = true;
        } else {
          this.isRemainingItemsAdded = false;
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
        }
        this._oldNumScroll = this._numScroll;
        this.prevState.numScroll = this._numScroll;
        this.prevState.numVisible = this._numVisible;
        this.prevState.value = [...this._value];
        if (this.totalDots() > 0 && this.itemsContainer.nativeElement) {
          this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
        }
        this.isCreated = true;
        if (this.autoplayInterval && this.isAutoplay()) {
          this.startAutoplay();
        }
      }
      if (isCircular) {
        if (this.page === 0) {
          totalShiftedItems = -1 * this._numVisible;
        } else if (totalShiftedItems === 0) {
          totalShiftedItems = -1 * this.value.length;
          if (this.remainingItems > 0) {
            this.isRemainingItemsAdded = true;
          }
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
        }
      }
    }
  }
  createStyle() {
    if (!this.carouselStyle) {
      this.carouselStyle = this.renderer.createElement("style");
      this.carouselStyle.type = "text/css";
      _t(this.carouselStyle, "nonce", this.config?.csp()?.nonce);
      this.renderer.appendChild(this.document.head, this.carouselStyle);
      _t(this.carouselStyle, "nonce", this.config?.csp()?.nonce);
    }
    let innerHTML = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100 / this.numVisible}%
			}
        `;
    if (this.responsiveOptions && !this.$unstyled()) {
      this.responsiveOptions.sort((data1, data2) => {
        const value1 = data1.breakpoint;
        const value2 = data2.breakpoint;
        let result = null;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, void 0, {
          numeric: true
        });
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return -1 * result;
      });
      for (let i = 0; i < this.responsiveOptions.length; i++) {
        let res = this.responsiveOptions[i];
        innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
      }
    }
    this.carouselStyle.innerHTML = innerHTML;
  }
  calculatePosition() {
    if (this.responsiveOptions) {
      let matchedResponsiveData = {
        numVisible: this.defaultNumVisible,
        numScroll: this.defaultNumScroll
      };
      if (typeof window !== "undefined") {
        let windowWidth = window.innerWidth;
        for (let i = 0; i < this.responsiveOptions.length; i++) {
          let res = this.responsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
      }
      if (this._numScroll !== matchedResponsiveData.numScroll) {
        let page = this._page;
        page = Math.floor(page * this._numScroll / matchedResponsiveData.numScroll);
        let totalShiftedItems = matchedResponsiveData.numScroll * this.page * -1;
        if (this.isCircular()) {
          totalShiftedItems -= matchedResponsiveData.numVisible;
        }
        this.totalShiftedItems = totalShiftedItems;
        this._numScroll = matchedResponsiveData.numScroll;
        this._page = page;
        this.onPage.emit({
          page: this.page
        });
      }
      if (this._numVisible !== matchedResponsiveData.numVisible) {
        this._numVisible = matchedResponsiveData.numVisible;
        this.setCloneItems();
      }
      this.cd.markForCheck();
    }
  }
  setCloneItems() {
    this.clonedItemsForStarting = [];
    this.clonedItemsForFinishing = [];
    if (this.isCircular()) {
      this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible));
      this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible));
    }
  }
  firstIndex() {
    return this.isCircular() ? -1 * (this.totalShiftedItems + this.numVisible) : this.totalShiftedItems * -1;
  }
  lastIndex() {
    return this.firstIndex() + this.numVisible - 1;
  }
  totalDots() {
    return this.value?.length ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
  }
  totalDotsArray() {
    const totalDots = this.totalDots();
    return totalDots <= 0 ? [] : Array(totalDots).fill(0);
  }
  isVertical() {
    return this.orientation === "vertical";
  }
  isCircular() {
    return this.circular && this.value && this.value.length >= this.numVisible;
  }
  isAutoplay() {
    return this.autoplayInterval && this.allowAutoplay;
  }
  isForwardNavDisabled() {
    return this.isEmpty() || this._page >= this.totalDots() - 1 && !this.isCircular();
  }
  isBackwardNavDisabled() {
    return this.isEmpty() || this._page <= 0 && !this.isCircular();
  }
  isEmpty() {
    return !this.value || this.value.length === 0;
  }
  navForward(e, index) {
    if (this.isCircular() || this._page < this.totalDots() - 1) {
      this.step(-1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  navBackward(e, index) {
    if (this.isCircular() || this._page !== 0) {
      this.step(1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  onDotClick(e, index) {
    let page = this._page;
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (index > page) {
      this.navForward(e, index);
    } else if (index < page) {
      this.navBackward(e, index);
    }
  }
  onIndicatorKeydown(event) {
    switch (event.code) {
      case "ArrowRight":
        this.onRightKey();
        break;
      case "ArrowLeft":
        this.onLeftKey();
        break;
    }
  }
  onRightKey() {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
  }
  onLeftKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
  }
  onHomeKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, 0);
  }
  onEndKey() {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, indicators.length - 1);
  }
  onTabKey() {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    const highlightedIndex = indicators.findIndex((ind) => Q(ind, "data-p-highlight") === true);
    const activeIndicator = z(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
    const activeIndex = indicators.findIndex((ind) => ind === activeIndicator.parentElement);
    indicators[activeIndex].children[0].tabIndex = "-1";
    indicators[highlightedIndex].children[0].tabIndex = "0";
  }
  findFocusedIndicatorIndex() {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    const activeIndicator = z(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
    return indicators.findIndex((ind) => ind === activeIndicator?.parentElement);
  }
  changedFocusedIndicator(prevInd, nextInd) {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    indicators[prevInd].children[0].tabIndex = "-1";
    indicators[nextInd].children[0].tabIndex = "0";
    indicators[nextInd].children[0].focus();
  }
  step(dir, page) {
    let totalShiftedItems = this.totalShiftedItems;
    const isCircular = this.isCircular();
    if (page != null) {
      totalShiftedItems = this._numScroll * page * -1;
      if (isCircular) {
        totalShiftedItems -= this._numVisible;
      }
      this.isRemainingItemsAdded = false;
    } else {
      totalShiftedItems += this._numScroll * dir;
      if (this.isRemainingItemsAdded) {
        totalShiftedItems += this.remainingItems - this._numScroll * dir;
        this.isRemainingItemsAdded = false;
      }
      let originalShiftedItems = isCircular ? totalShiftedItems + this._numVisible : totalShiftedItems;
      page = Math.abs(Math.floor(originalShiftedItems / this._numScroll));
    }
    if (isCircular && this.page === this.totalDots() - 1 && dir === -1) {
      totalShiftedItems = -1 * (this.value.length + this._numVisible);
      page = 0;
    } else if (isCircular && this.page === 0 && dir === 1) {
      totalShiftedItems = 0;
      page = this.totalDots() - 1;
    } else if (page === this.totalDots() - 1 && this.remainingItems > 0) {
      totalShiftedItems += this.remainingItems * -1 - this._numScroll * dir;
      this.isRemainingItemsAdded = true;
    }
    if (this.itemsContainer) {
      !this.$unstyled() && P(this.itemsContainer.nativeElement, "p-items-hidden");
      this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
      this.itemsContainer.nativeElement.style.transition = "transform 500ms ease 0s";
    }
    this.totalShiftedItems = totalShiftedItems;
    this._page = page;
    this.onPage.emit({
      page: this.page
    });
    this.cd.markForCheck();
  }
  startAutoplay() {
    this.interval = setInterval(() => {
      if (this.totalDots() > 0) {
        if (this.page === this.totalDots() - 1) {
          this.step(-1, 0);
        } else {
          this.step(-1, this.page + 1);
        }
      }
    }, this.autoplayInterval);
    this.allowAutoplay = true;
    this.cd.markForCheck();
  }
  stopAutoplay(changeAllow = true) {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = void 0;
      if (changeAllow) {
        this.allowAutoplay = false;
      }
    }
    this.cd.markForCheck();
  }
  isPlaying() {
    return !!this.interval;
  }
  onTransitionEnd() {
    if (this.itemsContainer) {
      !this.$unstyled() && W(this.itemsContainer.nativeElement, "p-items-hidden");
      this.itemsContainer.nativeElement.style.transition = "";
      if ((this.page === 0 || this.page === this.totalDots() - 1) && this.isCircular()) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
      }
    }
  }
  onTouchStart(e) {
    let touchobj = e.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  }
  onTouchMove(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onTouchEnd(e) {
    let touchobj = e.changedTouches[0];
    if (this.isVertical()) {
      this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
    }
  }
  changePageOnTouch(e, diff) {
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff < 0) {
        this.navForward(e);
      } else {
        this.navBackward(e);
      }
    }
  }
  ariaPrevButtonLabel() {
    return this.config.translation.aria ? this.config.translation.aria?.prevPageLabel : void 0;
  }
  ariaSlideLabel() {
    return this.config.translation.aria ? this.config.translation.aria?.slide : void 0;
  }
  ariaNextButtonLabel() {
    return this.config.translation.aria ? this.config.translation.aria?.nextPageLabel : void 0;
  }
  ariaSlideNumber(value) {
    return this.config.translation.aria ? this.config.translation.aria?.slideNumber?.replace(/{slideNumber}/g, value) : void 0;
  }
  ariaPageLabel(value) {
    return this.config.translation.aria ? this.config.translation.aria?.pageLabel?.replace(/{page}/g, value) : void 0;
  }
  getIndicatorPTOptions(key, index) {
    return this.ptm(key, {
      context: {
        highlighted: index === this._page
      }
    });
  }
  getItemPTOptions(key, index) {
    return this.ptm(key, {
      context: {
        index,
        active: this.firstIndex() <= index && this.lastIndex() >= index,
        start: this.firstIndex() === index,
        end: this.lastIndex() === index
      }
    });
  }
  bindDocumentListeners() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        this.documentResizeListener = this.renderer.listen(this.window, "resize", (event) => {
          this.calculatePosition();
        });
      }
    }
  }
  unbindDocumentListeners() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
  }
  onDestroy() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
  }
  static \u0275fac = function Carousel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Carousel)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Carousel,
    selectors: [["p-carousel"]],
    contentQueries: function Carousel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Header, 5)(dirIndex, Footer, 5)(dirIndex, _c0, 4)(dirIndex, _c1, 4)(dirIndex, _c2, 4)(dirIndex, _c3, 4)(dirIndex, _c4, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.previousIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.nextIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function Carousel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c5, 5)(_c6, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemsContainer = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.indicatorContent = _t2.first);
      }
    },
    hostVars: 4,
    hostBindings: function Carousel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("role", "region");
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      page: "page",
      numVisible: "numVisible",
      numScroll: "numScroll",
      responsiveOptions: "responsiveOptions",
      orientation: "orientation",
      verticalViewPortHeight: "verticalViewPortHeight",
      contentClass: "contentClass",
      indicatorsContentClass: "indicatorsContentClass",
      indicatorsContentStyle: "indicatorsContentStyle",
      indicatorStyleClass: "indicatorStyleClass",
      indicatorStyle: "indicatorStyle",
      value: "value",
      circular: [2, "circular", "circular", booleanAttribute],
      showIndicators: [2, "showIndicators", "showIndicators", booleanAttribute],
      showNavigators: [2, "showNavigators", "showNavigators", booleanAttribute],
      autoplayInterval: [2, "autoplayInterval", "autoplayInterval", numberAttribute],
      styleClass: "styleClass",
      prevButtonProps: "prevButtonProps",
      nextButtonProps: "nextButtonProps"
    },
    outputs: {
      onPage: "onPage"
    },
    features: [\u0275\u0275ProvidersFeature([CarouselStyle, {
      provide: PARENT_INSTANCE,
      useExisting: _Carousel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c8,
    decls: 13,
    vars: 25,
    consts: [["itemsContainer", ""], ["icon", ""], ["indicatorContent", ""], [3, "class", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], [3, "pBind"], ["attr.data-pc-group-section", "navigator", 3, "class", "text", "buttonProps", "pt", "unstyled", "click", 4, "ngIf"], [3, "touchend", "touchstart", "touchmove", "ngStyle", "pBind"], [3, "transitionend", "pBind"], [3, "class", "pBind", 4, "ngFor", "ngForOf"], ["role", "group", 3, "class", "pBind", 4, "ngFor", "ngForOf"], ["type", "button", "attr.data-pc-group-section", "navigator", 3, "class", "buttonProps", "text", "pt", "unstyled", "click", 4, "ngIf"], [3, "class", "ngStyle", "pBind", "keydown", 4, "ngIf"], [4, "ngTemplateOutlet"], ["attr.data-pc-group-section", "navigator", 3, "click", "text", "buttonProps", "pt", "unstyled"], [4, "ngIf"], ["data-p-icon", "chevron-left", 4, "ngIf"], ["data-p-icon", "chevron-up", 4, "ngIf"], ["data-p-icon", "chevron-left"], ["data-p-icon", "chevron-up"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "group", 3, "pBind"], ["type", "button", "attr.data-pc-group-section", "navigator", 3, "click", "buttonProps", "text", "pt", "unstyled"], ["data-p-icon", "chevron-right", 4, "ngIf"], ["data-p-icon", "chevron-down", 4, "ngIf"], ["data-p-icon", "chevron-right"], ["data-p-icon", "chevron-down"], [3, "keydown", "ngStyle", "pBind"], ["type", "button", 3, "click", "ngStyle", "tabindex", "pBind"]],
    template: function Carousel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c7);
        \u0275\u0275template(0, Carousel_div_0_Template, 3, 4, "div", 3);
        \u0275\u0275elementStart(1, "div", 4)(2, "div", 5);
        \u0275\u0275template(3, Carousel_p_button_3_Template, 3, 7, "p-button", 6);
        \u0275\u0275elementStart(4, "div", 7);
        \u0275\u0275listener("touchend", function Carousel_Template_div_touchend_4_listener($event) {
          return ctx.onTouchEnd($event);
        })("touchstart", function Carousel_Template_div_touchstart_4_listener($event) {
          return ctx.onTouchStart($event);
        })("touchmove", function Carousel_Template_div_touchmove_4_listener($event) {
          return ctx.onTouchMove($event);
        });
        \u0275\u0275elementStart(5, "div", 8, 0);
        \u0275\u0275listener("transitionend", function Carousel_Template_div_transitionend_5_listener() {
          return ctx.onTransitionEnd();
        });
        \u0275\u0275template(7, Carousel_div_7_Template, 2, 15, "div", 9)(8, Carousel_div_8_Template, 2, 15, "div", 10)(9, Carousel_div_9_Template, 2, 12, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, Carousel_p_button_10_Template, 3, 7, "p-button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, Carousel_ul_11_Template, 3, 5, "ul", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, Carousel_div_12_Template, 3, 4, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.headerFacet || ctx.headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.contentClass);
        \u0275\u0275property("ngClass", ctx.cx("contentContainer"))("pBind", ctx.ptm("contentContainer"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275attribute("aria-live", ctx.allowAutoplay ? "polite" : "off");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNavigators);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("viewport"));
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(23, _c9, ctx.isVertical() ? ctx.verticalViewPortHeight : "auto"))("pBind", ctx.ptm("viewport"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("itemList"));
        \u0275\u0275property("pBind", ctx.ptm("itemList"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.clonedItemsForStarting);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.clonedItemsForFinishing);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNavigators);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showIndicators);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ChevronRightIcon, ButtonModule, Button, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Carousel, [{
    type: Component,
    args: [{
      selector: "p-carousel",
      standalone: true,
      imports: [CommonModule, ChevronRightIcon, ButtonModule, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon, SharedModule, BindModule],
      template: `
        <div [class]="cx('header')" *ngIf="headerFacet || headerTemplate" [pBind]="ptm('header')">
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
        </div>
        <div [class]="contentClass" [ngClass]="cx('contentContainer')" [pBind]="ptm('contentContainer')">
            <div [class]="cx('content')" [attr.aria-live]="allowAutoplay ? 'polite' : 'off'" [pBind]="ptm('content')">
                <p-button
                    *ngIf="showNavigators"
                    [class]="cx('pcPrevButton')"
                    [attr.aria-label]="ariaPrevButtonLabel()"
                    (click)="navBackward($event)"
                    [text]="true"
                    [buttonProps]="prevButtonProps"
                    [pt]="ptm('pcPrevButton')"
                    [unstyled]="unstyled()"
                    attr.data-pc-group-section="navigator"
                >
                    <ng-template #icon>
                        <ng-container *ngIf="!previousIconTemplate && !_previousIconTemplate && !prevButtonProps?.icon">
                            <svg data-p-icon="chevron-left" *ngIf="!isVertical()" />
                            <svg data-p-icon="chevron-up" *ngIf="isVertical()" />
                        </ng-container>
                        <ng-container *ngIf="(previousIconTemplate || _previousIconTemplate) && !prevButtonProps?.icon">
                            <ng-template *ngTemplateOutlet="previousIconTemplate || _previousIconTemplate"></ng-template>
                        </ng-container>
                    </ng-template>
                </p-button>
                <div [class]="cx('viewport')" [ngStyle]="{ height: isVertical() ? verticalViewPortHeight : 'auto' }" (touchend)="onTouchEnd($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" [pBind]="ptm('viewport')">
                    <div #itemsContainer [class]="cx('itemList')" (transitionend)="onTransitionEnd()" [pBind]="ptm('itemList')">
                        <div
                            *ngFor="let item of clonedItemsForStarting; let index = index"
                            [class]="cx('itemClone', { index })"
                            [attr.aria-hidden]="!(totalShiftedItems * -1 === value.length)"
                            [attr.aria-label]="ariaSlideNumber(index)"
                            [attr.aria-roledescription]="ariaSlideLabel()"
                            [attr.data-p-carousel-item-active]="totalShiftedItems * -1 === value.length + _numVisible"
                            [attr.data-p-carousel-item-start]="index === 0"
                            [attr.data-p-carousel-item-end]="clonedItemsForStarting && clonedItemsForStarting.length - 1 === index"
                            [pBind]="ptm('itemClone')"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item }"></ng-container>
                        </div>
                        <div
                            *ngFor="let item of value; let index = index"
                            [class]="cx('item', { index })"
                            role="group"
                            [attr.aria-hidden]="!(firstIndex() <= index && lastIndex() >= index)"
                            [attr.aria-label]="ariaSlideNumber(index)"
                            [attr.aria-roledescription]="ariaSlideLabel()"
                            [attr.data-p-carousel-item-active]="firstIndex() <= index && lastIndex() >= index"
                            [attr.data-p-carousel-item-start]="firstIndex() === index"
                            [attr.data-p-carousel-item-end]="lastIndex() === index"
                            [pBind]="getItemPTOptions('item', index)"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item }"></ng-container>
                        </div>
                        <div
                            *ngFor="let item of clonedItemsForFinishing; let index = index"
                            [class]="cx('itemClone', { index })"
                            [attr.data-p-carousel-item-active]="false"
                            [attr.data-p-carousel-item-start]="false"
                            [attr.data-p-carousel-item-end]="false"
                            [pBind]="ptm('itemClone')"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item }"></ng-container>
                        </div>
                    </div>
                </div>
                <p-button
                    type="button"
                    *ngIf="showNavigators"
                    [class]="cx('pcNextButton')"
                    (click)="navForward($event)"
                    [attr.aria-label]="ariaNextButtonLabel()"
                    [buttonProps]="nextButtonProps"
                    [text]="true"
                    [pt]="ptm('pcNextButton')"
                    [unstyled]="unstyled()"
                    attr.data-pc-group-section="navigator"
                >
                    <ng-template #icon>
                        <ng-container *ngIf="!nextIconTemplate && !_nextIconTemplate && !nextButtonProps?.icon">
                            <svg data-p-icon="chevron-right" *ngIf="!isVertical()" />
                            <svg data-p-icon="chevron-down" *ngIf="isVertical()" />
                        </ng-container>
                        <span *ngIf="nextIconTemplate || (_nextIconTemplate && !nextButtonProps?.icon)">
                            <ng-template *ngTemplateOutlet="nextIconTemplate || _nextIconTemplate"></ng-template>
                        </span>
                    </ng-template>
                </p-button>
            </div>
            <ul #indicatorContent [class]="cx('indicatorList')" [ngStyle]="indicatorsContentStyle" *ngIf="showIndicators" (keydown)="onIndicatorKeydown($event)" [pBind]="ptm('indicatorList')">
                <li *ngFor="let totalDot of totalDotsArray(); let i = index" [class]="cx('indicator', { index: i })" [attr.data-p-active]="_page === i" [pBind]="getIndicatorPTOptions('indicator', i)">
                    <button
                        type="button"
                        [class]="cx('indicatorButton')"
                        (click)="onDotClick($event, i)"
                        [ngStyle]="indicatorStyle"
                        [attr.aria-label]="ariaPageLabel(i + 1)"
                        [attr.aria-current]="_page === i ? 'page' : undefined"
                        [tabindex]="_page === i ? 0 : -1"
                        [pBind]="getIndicatorPTOptions('indicatorButton', i)"
                    ></button>
                </li>
            </ul>
        </div>
        <div [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate" [pBind]="ptm('footer')">
            <ng-content select="p-footer"></ng-content>
            <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [CarouselStyle, {
        provide: PARENT_INSTANCE,
        useExisting: Carousel
      }],
      hostDirectives: [Bind],
      host: {
        "[attr.id]": "id",
        "[attr.role]": "'region'",
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    page: [{
      type: Input
    }],
    numVisible: [{
      type: Input
    }],
    numScroll: [{
      type: Input
    }],
    responsiveOptions: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    verticalViewPortHeight: [{
      type: Input
    }],
    contentClass: [{
      type: Input
    }],
    indicatorsContentClass: [{
      type: Input
    }],
    indicatorsContentStyle: [{
      type: Input
    }],
    indicatorStyleClass: [{
      type: Input
    }],
    indicatorStyle: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIndicators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoplayInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    prevButtonProps: [{
      type: Input
    }],
    nextButtonProps: [{
      type: Input
    }],
    onPage: [{
      type: Output
    }],
    itemsContainer: [{
      type: ViewChild,
      args: ["itemsContainer"]
    }],
    indicatorContent: [{
      type: ViewChild,
      args: ["indicatorContent"]
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    previousIconTemplate: [{
      type: ContentChild,
      args: ["previousicon", {
        descendants: false
      }]
    }],
    nextIconTemplate: [{
      type: ContentChild,
      args: ["nexticon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CarouselModule = class _CarouselModule {
  static \u0275fac = function CarouselModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CarouselModule,
    imports: [Carousel, SharedModule],
    exports: [Carousel, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Carousel, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [Carousel, SharedModule],
      exports: [Carousel, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/galleria/index.mjs
var style2 = "\n    .p-galleria {\n        overflow: hidden;\n        border-style: solid;\n        border-width: dt('galleria.border.width');\n        border-color: dt('galleria.border.color');\n        border-radius: dt('galleria.border.radius');\n    }\n\n    .p-galleria-content {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-galleria-items-container {\n        display: flex;\n        flex-direction: column;\n        position: relative;\n    }\n\n    .p-galleria-items {\n        position: relative;\n        display: flex;\n        height: 100%;\n    }\n\n    .p-galleria-nav-button {\n        position: absolute !important;\n        top: 50%;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        background: dt('galleria.nav.button.background');\n        color: dt('galleria.nav.button.color');\n        width: dt('galleria.nav.button.size');\n        height: dt('galleria.nav.button.size');\n        transition:\n            background dt('galleria.transition.duration'),\n            color dt('galleria.transition.duration'),\n            outline-color dt('galleria.transition.duration'),\n            box-shadow dt('galleria.transition.duration');\n        margin: calc(-1 * calc(dt('galleria.nav.button.size')) / 2) dt('galleria.nav.button.gutter') 0 dt('galleria.nav.button.gutter');\n        padding: 0;\n        user-select: none;\n        border: 0 none;\n        cursor: pointer;\n        outline-color: transparent;\n    }\n\n    .p-galleria-nav-button:not(.p-disabled):hover {\n        background: dt('galleria.nav.button.hover.background');\n        color: dt('galleria.nav.button.hover.color');\n    }\n\n    .p-galleria-nav-button:not(.p-disabled):focus-visible {\n        box-shadow: dt('galleria.nav.button.focus.ring.shadow');\n        outline: dt('galleria.nav.button.focus.ring.width') dt('galleria.nav.button.focus.ring.style') dt('galleria.nav.button.focus.ring.color');\n        outline-offset: dt('galleria.nav.button.focus.ring.offset');\n    }\n\n    .p-galleria-next-icon,\n    .p-galleria-prev-icon {\n        font-size: dt('galleria.nav.icon.size');\n        width: dt('galleria.nav.icon.size');\n        height: dt('galleria.nav.icon.size');\n    }\n\n    .p-galleria-prev-button {\n        border-radius: dt('galleria.nav.button.prev.border.radius');\n        left: 0;\n    }\n\n    .p-galleria-next-button {\n        border-radius: dt('galleria.nav.button.next.border.radius');\n        right: 0;\n    }\n\n    .p-galleria-prev-button:dir(rtl) {\n        left: auto;\n        right: 0;\n        transform: rotate(180deg);\n    }\n\n    .p-galleria-next-button:dir(rtl) {\n        right: auto;\n        left: 0;\n        transform: rotate(180deg);\n    }\n\n    .p-galleria-item {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n    }\n\n    .p-galleria-hover-navigators .p-galleria-nav-button {\n        pointer-events: none;\n        opacity: 0;\n        transition: opacity dt('galleria.transition.duration') ease-in-out;\n    }\n\n    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {\n        pointer-events: all;\n        opacity: 1;\n    }\n\n    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {\n        pointer-events: none;\n    }\n\n    .p-galleria-caption {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        background: dt('galleria.caption.background');\n        color: dt('galleria.caption.color');\n        padding: dt('galleria.caption.padding');\n    }\n\n    .p-galleria-thumbnails {\n        display: flex;\n        flex-direction: column;\n        overflow: auto;\n        flex-shrink: 0;\n    }\n\n    .p-galleria-thumbnail-nav-button {\n        align-self: center;\n        flex: 0 0 auto;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        position: relative;\n        margin: 0 dt('galleria.thumbnail.nav.button.gutter');\n        padding: 0;\n        border: none;\n        user-select: none;\n        cursor: pointer;\n        background: transparent;\n        color: dt('galleria.thumbnail.nav.button.color');\n        width: dt('galleria.thumbnail.nav.button.size');\n        height: dt('galleria.thumbnail.nav.button.size');\n        transition:\n            background dt('galleria.transition.duration'),\n            color dt('galleria.transition.duration'),\n            outline-color dt('galleria.transition.duration');\n        outline-color: transparent;\n        border-radius: dt('galleria.thumbnail.nav.button.border.radius');\n    }\n\n    .p-galleria-thumbnail-nav-button:hover {\n        background: dt('galleria.thumbnail.nav.button.hover.background');\n        color: dt('galleria.thumbnail.nav.button.hover.color');\n    }\n\n    .p-galleria-thumbnail-nav-button:focus-visible {\n        box-shadow: dt('galleria.thumbnail.nav.button.focus.ring.shadow');\n        outline: dt('galleria.thumbnail.nav.button.focus.ring.width') dt('galleria.thumbnail.nav.button.focus.ring.style') dt('galleria.thumbnail.nav.button.focus.ring.color');\n        outline-offset: dt('galleria.thumbnail.nav.button.focus.ring.offset');\n    }\n\n    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,\n    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {\n        font-size: dt('galleria.thumbnail.nav.button.icon.size');\n        width: dt('galleria.thumbnail.nav.button.icon.size');\n        height: dt('galleria.thumbnail.nav.button.icon.size');\n    }\n\n    .p-galleria-thumbnails-content {\n        display: flex;\n        flex-direction: row;\n        background: dt('galleria.thumbnails.content.background');\n        padding: dt('galleria.thumbnails.content.padding');\n    }\n\n    .p-galleria-thumbnails-viewport {\n        overflow: hidden;\n        width: 100%;\n    }\n\n    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),\n    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {\n        transform: rotate(180deg);\n    }\n\n    .p-galleria-thumbnail-items {\n        display: flex;\n    }\n\n    .p-galleria-thumbnail-items:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-galleria-thumbnail-item {\n        overflow: auto;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        opacity: 0.5;\n    }\n\n    .p-galleria-thumbnail {\n        outline-color: transparent;\n    }\n\n    .p-galleria-thumbnail-item:hover {\n        opacity: 1;\n        transition: opacity 0.3s;\n    }\n\n    .p-galleria-thumbnail-item-current {\n        opacity: 1;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-content,\n    .p-galleria-thumbnails-right .p-galleria-content {\n        flex-direction: row;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-items-container,\n    .p-galleria-thumbnails-right .p-galleria-items-container {\n        flex-direction: row;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-items-container,\n    .p-galleria-thumbnails-top .p-galleria-items-container {\n        order: 2;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-thumbnails,\n    .p-galleria-thumbnails-top .p-galleria-thumbnails {\n        order: 1;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-thumbnails-content,\n    .p-galleria-thumbnails-right .p-galleria-thumbnails-content {\n        flex-direction: column;\n        flex-grow: 1;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,\n    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {\n        flex-direction: column;\n        height: 100%;\n    }\n\n    .p-galleria-indicator-list {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: dt('galleria.indicator.list.padding');\n        gap: dt('galleria.indicator.list.gap');\n        margin: 0;\n        list-style: none;\n    }\n\n    .p-galleria-indicator-button {\n        display: inline-flex;\n        align-items: center;\n        background: dt('galleria.indicator.button.background');\n        width: dt('galleria.indicator.button.width');\n        height: dt('galleria.indicator.button.height');\n        transition:\n            background dt('galleria.transition.duration'),\n            color dt('galleria.transition.duration'),\n            outline-color dt('galleria.transition.duration'),\n            box-shadow dt('galleria.transition.duration');\n        outline-color: transparent;\n        border-radius: dt('galleria.indicator.button.border.radius');\n        margin: 0;\n        padding: 0;\n        border: none;\n        user-select: none;\n        cursor: pointer;\n    }\n\n    .p-galleria-indicator-button:hover {\n        background: dt('galleria.indicator.button.hover.background');\n    }\n\n    .p-galleria-indicator-button:focus-visible {\n        box-shadow: dt('galleria.indicator.button.focus.ring.shadow');\n        outline: dt('galleria.indicator.button.focus.ring.width') dt('galleria.indicator.button.focus.ring.style') dt('galleria.indicator.button.focus.ring.color');\n        outline-offset: dt('galleria.indicator.button.focus.ring.offset');\n    }\n\n    .p-galleria-indicator-active .p-galleria-indicator-button {\n        background: dt('galleria.indicator.button.active.background');\n    }\n\n    .p-galleria-indicators-left .p-galleria-items-container,\n    .p-galleria-indicators-right .p-galleria-items-container {\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .p-galleria-indicators-left .p-galleria-items,\n    .p-galleria-indicators-top .p-galleria-items {\n        order: 2;\n    }\n\n    .p-galleria-indicators-left .p-galleria-indicator-list,\n    .p-galleria-indicators-top .p-galleria-indicator-list {\n        order: 1;\n    }\n\n    .p-galleria-indicators-left .p-galleria-indicator-list,\n    .p-galleria-indicators-right .p-galleria-indicator-list {\n        flex-direction: column;\n    }\n\n    .p-galleria-inset-indicators .p-galleria-indicator-list {\n        position: absolute;\n        display: flex;\n        z-index: 1;\n        background: dt('galleria.inset.indicator.list.background');\n    }\n\n    .p-galleria-inset-indicators .p-galleria-indicator-button {\n        background: dt('galleria.inset.indicator.button.background');\n    }\n\n    .p-galleria-inset-indicators .p-galleria-indicator-button:hover {\n        background: dt('galleria.inset.indicator.button.hover.background');\n    }\n\n    .p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {\n        background: dt('galleria.inset.indicator.button.active.background');\n    }\n\n    .p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {\n        top: 0;\n        left: 0;\n        width: 100%;\n        align-items: flex-start;\n    }\n\n    .p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {\n        right: 0;\n        top: 0;\n        height: 100%;\n        align-items: flex-end;\n    }\n\n    .p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        align-items: flex-end;\n    }\n\n    .p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {\n        left: 0;\n        top: 0;\n        height: 100%;\n        align-items: flex-start;\n    }\n\n    .p-galleria-mask {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .p-galleria-close-button {\n        position: absolute !important;\n        top: 0;\n        right: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        margin: dt('galleria.close.button.gutter');\n        background: dt('galleria.close.button.background');\n        color: dt('galleria.close.button.color');\n        width: dt('galleria.close.button.size');\n        height: dt('galleria.close.button.size');\n        padding: 0;\n        border: none;\n        user-select: none;\n        cursor: pointer;\n        border-radius: dt('galleria.close.button.border.radius');\n        outline-color: transparent;\n        transition:\n            background dt('galleria.transition.duration'),\n            color dt('galleria.transition.duration'),\n            outline-color dt('galleria.transition.duration');\n    }\n\n    .p-galleria-close-icon {\n        font-size: dt('galleria.close.button.icon.size');\n        width: dt('galleria.close.button.icon.size');\n        height: dt('galleria.close.button.icon.size');\n    }\n\n    .p-galleria-close-button:hover {\n        background: dt('galleria.close.button.hover.background');\n        color: dt('galleria.close.button.hover.color');\n    }\n\n    .p-galleria-close-button:focus-visible {\n        box-shadow: dt('galleria.close.button.focus.ring.shadow');\n        outline: dt('galleria.close.button.focus.ring.width') dt('galleria.close.button.focus.ring.style') dt('galleria.close.button.focus.ring.color');\n        outline-offset: dt('galleria.close.button.focus.ring.offset');\n    }\n\n    .p-galleria-mask .p-galleria-nav-button {\n        position: fixed;\n        top: 50%;\n    }\n\n       .p-items-hidden .p-galleria-thumbnail-item {\n        visibility: hidden;\n    }\n\n    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {\n        visibility: visible;\n    }\n\n    .p-galleria-enter-active {\n        animation: p-animate-galleria-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-galleria-leave-active {\n        animation: p-animate-galleria-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-galleria-enter-active .p-galleria-nav-button {\n        opacity: 0;\n    }\n\n    @keyframes p-animate-galleria-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-galleria-leave {\n        from {\n            opacity: 1;\n            transform: scale(1);\n        }\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-galleria.mjs
var _c02 = ["header"];
var _c12 = ["footer"];
var _c22 = ["indicator"];
var _c32 = ["caption"];
var _c42 = ["closeicon"];
var _c52 = ["previousthumbnailicon"];
var _c62 = ["nextthumbnailicon"];
var _c72 = ["itempreviousicon"];
var _c82 = ["itemnexticon"];
var _c92 = ["item"];
var _c102 = ["thumbnail"];
var _c112 = ["container"];
function Galleria_div_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("pMotionOnBeforeEnter", function Galleria_div_0_Conditional_2_Conditional_1_Template_div_pMotionOnBeforeEnter_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onBeforeEnter($event));
    })("pMotionOnBeforeLeave", function Galleria_div_0_Conditional_2_Conditional_1_Template_div_pMotionOnBeforeLeave_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onBeforeLeave());
    })("pMotionOnAfterLeave", function Galleria_div_0_Conditional_2_Conditional_1_Template_div_pMotionOnAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAfterLeave());
    })("maskHide", function Galleria_div_0_Conditional_2_Conditional_1_Template_div_maskHide_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onMaskHide());
    })("activeItemChange", function Galleria_div_0_Conditional_2_Conditional_1_Template_div_activeItemChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onActiveItemChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pMotion", ctx_r1.visible)("pMotionAppear", true)("pMotionName", "p-galleria")("pMotionOptions", ctx_r1.computedMotionOptions())("value", ctx_r1.value)("activeIndex", ctx_r1.activeIndex)("numVisible", ctx_r1.numVisibleLimit || ctx_r1.numVisible)("ngStyle", ctx_r1.containerStyle)("fullScreen", ctx_r1.fullScreen)("pt", ctx_r1.pt())("pFocusTrapDisabled", !ctx_r1.fullScreen)("unstyled", ctx_r1.unstyled());
  }
}
function Galleria_div_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("pMotionOnAfterLeave", function Galleria_div_0_Conditional_2_Template_div_pMotionOnAfterLeave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMaskAfterLeave());
    })("click", function Galleria_div_0_Conditional_2_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onMaskHide($event));
    });
    \u0275\u0275conditionalCreate(1, Galleria_div_0_Conditional_2_Conditional_1_Template, 1, 12, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.maskClass);
    \u0275\u0275property("pBind", ctx_r1.ptm("mask"))("pMotion", ctx_r1.maskVisible)("pMotionAppear", true)("pMotionEnterActiveClass", ctx_r1.fullScreen ? "p-overlay-mask-enter-active" : "")("pMotionLeaveActiveClass", ctx_r1.fullScreen ? "p-overlay-mask-leave-active" : "")("pMotionOptions", ctx_r1.computedMaskMotionOptions())("ngClass", ctx_r1.cx("mask"));
    \u0275\u0275attribute("role", ctx_r1.fullScreen ? "dialog" : "region")("aria-modal", ctx_r1.fullScreen ? "true" : void 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.renderContent() ? 1 : -1);
  }
}
function Galleria_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", null, 1);
    \u0275\u0275conditionalCreate(2, Galleria_div_0_Conditional_2_Template, 2, 12, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.renderMask() ? 2 : -1);
  }
}
function Galleria_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("activeItemChange", function Galleria_ng_template_1_Template_div_activeItemChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActiveItemChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pt", ctx_r1.pt())("unstyled", ctx_r1.unstyled())("value", ctx_r1.value)("activeIndex", ctx_r1.activeIndex)("numVisible", ctx_r1.numVisibleLimit || ctx_r1.numVisible);
  }
}
var _c122 = ["closeButton"];
var _c13 = () => ({});
var _c14 = ["pGalleriaContent", ""];
function GalleriaContent_ng_container_0_button_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.cx("closeIcon"));
    \u0275\u0275property("pBind", ctx_r2.getPTOptions("closeIcon"));
  }
}
function GalleriaContent_ng_container_0_button_1_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaContent_ng_container_0_button_1_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GalleriaContent_ng_container_0_button_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaContent_ng_container_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function GalleriaContent_ng_container_0_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.maskHide.emit());
    });
    \u0275\u0275template(1, GalleriaContent_ng_container_0_button_1__svg_svg_1_Template, 1, 3, "svg", 8)(2, GalleriaContent_ng_container_0_button_1_2_Template, 1, 0, null, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("closeButton"));
    \u0275\u0275property("pBind", ctx_r2.getPTOptions("closeButton"));
    \u0275\u0275attribute("aria-label", ctx_r2.closeAriaLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.galleria.closeIconTemplate && !ctx_r2.galleria._closeIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.galleria.closeIconTemplate || ctx_r2.galleria._closeIconTemplate);
  }
}
function GalleriaContent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("header"));
    \u0275\u0275property("unstyled", ctx_r2.unstyled())("templates", ctx_r2.galleria.templates)("pBind", ctx_r2.getPTOptions("header"));
  }
}
function GalleriaContent_ng_container_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("onActiveIndexChange", function GalleriaContent_ng_container_0_div_5_Template_div_onActiveIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onActiveIndexChange($event));
    })("stopSlideShow", function GalleriaContent_ng_container_0_div_5_Template_div_stopSlideShow_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.stopSlideShow());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("containerId", ctx_r2.id)("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex)("templates", ctx_r2.galleria.templates)("numVisible", ctx_r2.numVisible)("responsiveOptions", ctx_r2.galleria.responsiveOptions)("circular", ctx_r2.galleria.circular)("isVertical", ctx_r2.isVertical())("contentHeight", ctx_r2.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r2.galleria.showThumbnailNavigators)("slideShowActive", ctx_r2.slideShowActive)("pt", ctx_r2.pt())("unstyled", ctx_r2.unstyled());
  }
}
function GalleriaContent_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("footer"));
    \u0275\u0275property("pBind", ctx_r2.getPTOptions("footer"))("templates", ctx_r2.galleria.templates)("unstyled", ctx_r2.unstyled());
  }
}
function GalleriaContent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, GalleriaContent_ng_container_0_button_1_Template, 3, 6, "button", 1)(2, GalleriaContent_ng_container_0_div_2_Template, 1, 5, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
    \u0275\u0275listener("onActiveIndexChange", function GalleriaContent_ng_container_0_Template_div_onActiveIndexChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onActiveIndexChange($event));
    })("startSlideShow", function GalleriaContent_ng_container_0_Template_div_startSlideShow_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startSlideShow());
    })("stopSlideShow", function GalleriaContent_ng_container_0_Template_div_stopSlideShow_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stopSlideShow());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, GalleriaContent_ng_container_0_div_5_Template, 1, 13, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, GalleriaContent_ng_container_0_div_6_Template, 1, 5, "div", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.galleria.fullScreen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.galleria.templates && (ctx_r2.galleria.headerFacet || ctx_r2.galleria.headerTemplate));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("content"));
    \u0275\u0275property("pBind", ctx_r2.getPTOptions("content"));
    \u0275\u0275attribute("aria-live", ctx_r2.galleria.autoPlay ? "polite" : "off");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("itemsContainer"));
    \u0275\u0275property("id", ctx_r2.id)("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex)("circular", ctx_r2.galleria.circular)("templates", ctx_r2.galleria.templates)("showIndicators", ctx_r2.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r2.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r2.galleria.indicatorFacet)("captionFacet", ctx_r2.galleria.captionFacet)("showItemNavigators", ctx_r2.galleria.showItemNavigators)("autoPlay", ctx_r2.galleria.autoPlay)("slideShowActive", ctx_r2.slideShowActive)("pt", ctx_r2.pt())("unstyled", ctx_r2.unstyled());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.galleria.showThumbnails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.shouldRenderFooter());
  }
}
var _c15 = ["pGalleriaItemSlot", ""];
function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function GalleriaItemSlot_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
  }
}
var _c16 = ["pGalleriaItem", ""];
var _c17 = (a0) => ({
  index: a0
});
function GalleriaItem_button_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("prevIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("prevIcon"));
  }
}
function GalleriaItem_button_1_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaItem_button_1_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GalleriaItem_button_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaItem_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function GalleriaItem_button_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navBackward($event));
    })("focus", function GalleriaItem_button_1_Template_button_focus_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onButtonFocus("left"));
    })("blur", function GalleriaItem_button_1_Template_button_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onButtonBlur("left"));
    });
    \u0275\u0275template(1, GalleriaItem_button_1__svg_svg_1_Template, 1, 3, "svg", 6)(2, GalleriaItem_button_1_2_Template, 1, 0, null, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("prevButton"));
    \u0275\u0275property("pBind", ctx_r1.ptm("prevButton"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.galleria.itemPreviousIconTemplate && !ctx_r1.galleria._itemPreviousIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.galleria.itemPreviousIconTemplate || ctx_r1.galleria._itemPreviousIconTemplate);
  }
}
function GalleriaItem_button_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("nextIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("nextIcon"));
  }
}
function GalleriaItem_button_3_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaItem_button_3_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GalleriaItem_button_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaItem_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function GalleriaItem_button_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navForward($event));
    })("focus", function GalleriaItem_button_3_Template_button_focus_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onButtonFocus("right"));
    })("blur", function GalleriaItem_button_3_Template_button_blur_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onButtonBlur("right"));
    });
    \u0275\u0275template(1, GalleriaItem_button_3__svg_svg_1_Template, 1, 3, "svg", 9)(2, GalleriaItem_button_3_2_Template, 1, 0, null, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("nextButton"));
    \u0275\u0275property("pBind", ctx_r1.ptm("nextButton"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.galleria.itemNextIconTemplate && !ctx_r1.galleria._itemNextIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.galleria.itemNextIconTemplate || ctx_r1.galleria._itemNextIconTemplate);
  }
}
function GalleriaItem_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("caption"));
    \u0275\u0275property("pBind", ctx_r1.ptm("caption"))("unstyled", ctx_r1.unstyled())("item", ctx_r1.activeItem)("templates", ctx_r1.templates);
  }
}
function GalleriaItem_ul_5_li_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "button", 16);
  }
  if (rf & 2) {
    const index_r5 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("indicatorButton"));
    \u0275\u0275property("pBind", ctx_r1.ptm("indicatorButton", ctx_r1.getIndicatorPTOptions(index_r5)));
  }
}
function GalleriaItem_ul_5_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const index_r5 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("index", index_r5)("templates", ctx_r1.templates)("pBind", ctx_r1.ptm("item"))("unstyled", ctx_r1.unstyled());
  }
}
function GalleriaItem_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275listener("click", function GalleriaItem_ul_5_li_1_Template_li_click_0_listener() {
      const index_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onIndicatorClick(index_r5));
    })("mouseenter", function GalleriaItem_ul_5_li_1_Template_li_mouseenter_0_listener() {
      const index_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onIndicatorMouseEnter(index_r5));
    })("keydown", function GalleriaItem_ul_5_li_1_Template_li_keydown_0_listener($event) {
      const index_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onIndicatorKeyDown($event, index_r5));
    });
    \u0275\u0275template(1, GalleriaItem_ul_5_li_1_button_1_Template, 1, 3, "button", 14)(2, GalleriaItem_ul_5_li_1_ng_container_2_Template, 2, 4, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const index_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("indicator", \u0275\u0275pureFunction1(10, _c17, index_r5)));
    \u0275\u0275property("pBind", ctx_r1.getIndicatorPTOptions(index_r5))("pBind", ctx_r1.ptm("indicator", ctx_r1.getIndicatorPTOptions(index_r5)));
    \u0275\u0275attribute("aria-label", ctx_r1.ariaPageLabel(index_r5 + 1))("aria-selected", ctx_r1.activeIndex === index_r5)("aria-controls", ctx_r1.id + "_item_" + index_r5)("data-p-active", ctx_r1.isIndicatorItemActive(index_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.indicatorFacet && !ctx_r1.galleria.indicatorTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.indicatorFacet || ctx_r1.galleria.indicatorTemplate);
  }
}
function GalleriaItem_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 0);
    \u0275\u0275template(1, GalleriaItem_ul_5_li_1_Template, 3, 12, "li", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("indicatorList"));
    \u0275\u0275property("pBind", ctx_r1.ptm("indicatorList"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.value);
  }
}
var _c18 = ["itemsContainer"];
var _c19 = ["pGalleriaThumbnails", ""];
var _c20 = (a0) => ({
  height: a0
});
var _c21 = (a0, a1) => ({
  index: a0,
  activeIndex: a1
});
function GalleriaThumbnails_button_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("thumbnailPrevIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("thumbnailPrevIcon"));
  }
}
function GalleriaThumbnails_button_1_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("thumbnailPrevIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("thumbnailPrevIcon"));
  }
}
function GalleriaThumbnails_button_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, GalleriaThumbnails_button_1_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 9)(2, GalleriaThumbnails_button_1_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isVertical);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVertical);
  }
}
function GalleriaThumbnails_button_1_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaThumbnails_button_1_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GalleriaThumbnails_button_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaThumbnails_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function GalleriaThumbnails_button_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navBackward($event));
    });
    \u0275\u0275template(1, GalleriaThumbnails_button_1_ng_container_1_Template, 3, 2, "ng-container", 7)(2, GalleriaThumbnails_button_1_2_Template, 1, 0, null, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("thumbnailPrevButton"));
    \u0275\u0275property("pBind", ctx_r1.ptm("thumbnailPrevButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.ariaPrevButtonLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.galleria.previousThumbnailIconTemplate && !ctx_r1.galleria._previousThumbnailIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.galleria.previousThumbnailIconTemplate || ctx_r1.galleria._previousThumbnailIconTemplate);
  }
}
function GalleriaThumbnails_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("keydown", function GalleriaThumbnails_div_5_Template_div_keydown_0_listener($event) {
      const index_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onThumbnailKeydown($event, index_r4));
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275listener("click", function GalleriaThumbnails_div_5_Template_div_click_1_listener() {
      const index_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemClick(index_r4));
    })("touchend", function GalleriaThumbnails_div_5_Template_div_touchend_1_listener() {
      const index_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemClick(index_r4));
    })("keydown.enter", function GalleriaThumbnails_div_5_Template_div_keydown_enter_1_listener() {
      const index_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemClick(index_r4));
    });
    \u0275\u0275element(2, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("thumbnailItem", \u0275\u0275pureFunction2(16, _c21, index_r4, ctx_r1.activeIndex)));
    \u0275\u0275property("pBind", ctx_r1.ptm("thumbnailItem"));
    \u0275\u0275attribute("aria-selected", ctx_r1.activeIndex === index_r4)("aria-controls", ctx_r1.containerId + "_item_" + index_r4)("data-p-active", ctx_r1.activeIndex === index_r4);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("thumbnail"));
    \u0275\u0275property("pBind", ctx_r1.ptm("thumbnail"));
    \u0275\u0275attribute("tabindex", ctx_r1.activeIndex === index_r4 ? 0 : -1)("aria-current", ctx_r1.activeIndex === index_r4 ? "page" : void 0)("aria-label", ctx_r1.ariaPageLabel(index_r4 + 1));
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r1.ptm("thumbnailItem"))("item", item_r5)("templates", ctx_r1.templates)("unstyled", ctx_r1.unstyled());
  }
}
function GalleriaThumbnails_button_6_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("thumbnailNextIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("thumbnailNextIcon"));
  }
}
function GalleriaThumbnails_button_6_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("thumbnailNextIcon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("thumbnailNextIcon"));
  }
}
function GalleriaThumbnails_button_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, GalleriaThumbnails_button_6_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 16)(2, GalleriaThumbnails_button_6_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isVertical);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isVertical);
  }
}
function GalleriaThumbnails_button_6_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaThumbnails_button_6_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GalleriaThumbnails_button_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaThumbnails_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function GalleriaThumbnails_button_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navForward($event));
    });
    \u0275\u0275template(1, GalleriaThumbnails_button_6_ng_container_1_Template, 3, 2, "ng-container", 7)(2, GalleriaThumbnails_button_6_2_Template, 1, 0, null, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("thumbnailNextButton"));
    \u0275\u0275property("pBind", ctx_r1.ptm("thumbnailNextButton"));
    \u0275\u0275attribute("aria-label", ctx_r1.ariaNextButtonLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.galleria.nextThumbnailIconTemplate && !ctx_r1.galleria._nextThumbnailIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.galleria.nextThumbnailIconTemplate || ctx_r1.galleria._nextThumbnailIconTemplate);
  }
}
var classes2 = {
  mask: "p-galleria-mask p-overlay-mask",
  root: ({
    instance
  }) => {
    const thumbnailsPosClass = instance.galleria.showThumbnails && instance.getPositionClass("p-galleria-thumbnails", instance.galleria.thumbnailsPosition);
    const indicatorPosClass = instance.galleria.showIndicators && instance.getPositionClass("p-galleria-indicators", instance.galleria.indicatorsPosition);
    return ["p-galleria p-component", {
      "p-galleria-fullscreen": instance.galleria.fullScreen,
      "p-galleria-inset-indicators": instance.galleria.showIndicatorsOnItem,
      "p-galleria-hover-navigators": instance.galleria.showItemNavigatorsOnHover && !instance.galleria.fullScreen
    }, thumbnailsPosClass, indicatorPosClass];
  },
  closeButton: "p-galleria-close-button",
  closeIcon: "p-galleria-close-icon",
  header: "p-galleria-header",
  content: "p-galleria-content",
  footer: "p-galleria-footer",
  itemsContainer: "p-galleria-items-container",
  items: "p-galleria-items",
  prevButton: ({
    instance
  }) => ["p-galleria-prev-button p-galleria-nav-button", {
    "p-disabled": instance.isNavBackwardDisabled()
  }],
  prevIcon: "p-galleria-prev-icon",
  item: "p-galleria-item",
  nextButton: ({
    instance
  }) => ["p-galleria-next-button p-galleria-nav-button", {
    "p-disabled": instance.isNavForwardDisabled()
  }],
  nextIcon: "p-galleria-next-icon",
  caption: "p-galleria-caption",
  indicatorList: "p-galleria-indicator-list",
  indicator: ({
    instance,
    index
  }) => ["p-galleria-indicator", {
    "p-galleria-indicator-active": instance.isIndicatorItemActive(index)
  }],
  indicatorButton: "p-galleria-indicator-button",
  thumbnails: "p-galleria-thumbnails",
  thumbnailContent: "p-galleria-thumbnails-content",
  thumbnailPrevButton: ({
    instance
  }) => ["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button", {
    "p-disabled": instance.isNavBackwardDisabled()
  }],
  thumbnailPrevIcon: "p-galleria-thumbnail-prev-icon",
  thumbnailsViewport: "p-galleria-thumbnails-viewport",
  thumbnailItems: "p-galleria-thumbnail-items",
  thumbnailItem: ({
    instance,
    index,
    activeIndex
  }) => ["p-galleria-thumbnail-item", {
    "p-galleria-thumbnail-item-current": activeIndex === index,
    "p-galleria-thumbnail-item-active": instance.isItemActive(index),
    "p-galleria-thumbnail-item-start": instance.firstItemAciveIndex() === index,
    "p-galleria-thumbnail-item-end": instance.lastItemActiveIndex() === index
  }],
  thumbnail: "p-galleria-thumbnail",
  thumbnailNextButton: ({
    instance
  }) => ["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button", {
    "p-disabled": instance.isNavForwardDisabled()
  }],
  thumbnailNextIcon: "p-galleria-thumbnail-next-icon"
};
var GalleriaStyle = class _GalleriaStyle extends BaseStyle {
  name = "galleria";
  style = style2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275GalleriaStyle_BaseFactory;
    return function GalleriaStyle_Factory(__ngFactoryType__) {
      return (\u0275GalleriaStyle_BaseFactory || (\u0275GalleriaStyle_BaseFactory = \u0275\u0275getInheritedFactory(_GalleriaStyle)))(__ngFactoryType__ || _GalleriaStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _GalleriaStyle,
    factory: _GalleriaStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaStyle, [{
    type: Injectable
  }], null, null);
})();
var GalleriaClasses;
(function(GalleriaClasses2) {
  GalleriaClasses2["mask"] = "p-galleria-mask";
  GalleriaClasses2["root"] = "p-galleria";
  GalleriaClasses2["closeButton"] = "p-galleria-close-button";
  GalleriaClasses2["closeIcon"] = "p-galleria-close-icon";
  GalleriaClasses2["header"] = "p-galleria-header";
  GalleriaClasses2["content"] = "p-galleria-content";
  GalleriaClasses2["footer"] = "p-galleria-footer";
  GalleriaClasses2["itemsContainer"] = "p-galleria-items-container";
  GalleriaClasses2["items"] = "p-galleria-items";
  GalleriaClasses2["prevButton"] = "p-galleria-prev-button";
  GalleriaClasses2["prevIcon"] = "p-galleria-prev-icon";
  GalleriaClasses2["item"] = "p-galleria-item";
  GalleriaClasses2["nextButton"] = "p-galleria-next-button";
  GalleriaClasses2["nextIcon"] = "p-galleria-next-icon";
  GalleriaClasses2["caption"] = "p-galleria-caption";
  GalleriaClasses2["indicatorList"] = "p-galleria-indicator-list";
  GalleriaClasses2["indicator"] = "p-galleria-indicator";
  GalleriaClasses2["indicatorButton"] = "p-galleria-indicator-button";
  GalleriaClasses2["thumbnails"] = "p-galleria-thumbnails";
  GalleriaClasses2["thumbnailContent"] = "p-galleria-thumbnails-content";
  GalleriaClasses2["previousThumbnailButton"] = "p-galleria-thumbnail-prev-button";
  GalleriaClasses2["previousThumbnailIcon"] = "p-galleria-thumbnail-prev-icon";
  GalleriaClasses2["thumbnailsViewport"] = "p-galleria-thumbnails-viewport";
  GalleriaClasses2["thumbnailItems"] = "p-galleria-thumbnail-items";
  GalleriaClasses2["thumbnailItem"] = "p-galleria-thumbnail-item";
  GalleriaClasses2["thumbnail"] = "p-galleria-thumbnail";
  GalleriaClasses2["nextThumbnailButton"] = "p-galleria-thumbnail-next-button";
  GalleriaClasses2["nextThumbnailIcon"] = "p-galleria-thumbnail-next-icon";
})(GalleriaClasses || (GalleriaClasses = {}));
var GALLERIA_INSTANCE = new InjectionToken("GALLERIA_INSTANCE");
var Galleria = class _Galleria extends BaseComponent {
  element;
  componentName = "Galleria";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcGalleria = inject(GALLERIA_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Index of the first item.
   * @group Props
   */
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  /**
   * Whether to display the component on fullscreen.
   * @group Props
   */
  fullScreen = false;
  /**
   * Unique identifier of the element.
   * @group Props
   */
  id;
  /**
   * An array of objects to display.
   * @group Props
   */
  value;
  /**
   * Number of items per page.
   * @group Props
   */
  numVisible = 3;
  /**
   * An array of options for responsive design.
   * @see {GalleriaResponsiveOptions}
   * @group Props
   */
  responsiveOptions;
  /**
   * Whether to display navigation buttons in item section.
   * @group Props
   */
  showItemNavigators = false;
  /**
   * Whether to display navigation buttons in thumbnail container.
   * @group Props
   */
  showThumbnailNavigators = true;
  /**
   * Whether to display navigation buttons on item hover.
   * @group Props
   */
  showItemNavigatorsOnHover = false;
  /**
   * When enabled, item is changed on indicator hover.
   * @group Props
   */
  changeItemOnIndicatorHover = false;
  /**
   * Defines if scrolling would be infinite.
   * @group Props
   */
  circular = false;
  /**
   * Items are displayed with a slideshow in autoPlay mode.
   * @group Props
   */
  autoPlay = false;
  /**
   * When enabled, autorun should stop by click.
   * @group Props
   */
  shouldStopAutoplayByClick = true;
  /**
   * Time in milliseconds to scroll items.
   * @group Props
   */
  transitionInterval = 4e3;
  /**
   * Whether to display thumbnail container.
   * @group Props
   */
  showThumbnails = true;
  /**
   * Position of thumbnails.
   * @group Props
   */
  thumbnailsPosition = "bottom";
  /**
   * Height of the viewport in vertical thumbnail.
   * @group Props
   */
  verticalThumbnailViewPortHeight = "300px";
  /**
   * Whether to display indicator container.
   * @group Props
   */
  showIndicators = false;
  /**
   * When enabled, indicator container is displayed on item container.
   * @group Props
   */
  showIndicatorsOnItem = false;
  /**
   * Position of indicators.
   * @group Props
   */
  indicatorsPosition = "bottom";
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Style class of the mask on fullscreen mode.
   * @group Props
   */
  maskClass;
  /**
   * Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.
   * @group Props
   */
  containerClass;
  /**
   * Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.
   * @group Props
   */
  containerStyle;
  /**
   * Transition options of the show animation.
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   * @group Props
   */
  showTransitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @deprecated since v21.0.0. Use `motionOptions` instead.
   * @group Props
   */
  hideTransitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
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
   * The mask motion options.
   * @group Props
   */
  maskMotionOptions = input(void 0, ...ngDevMode ? [{
    debugName: "maskMotionOptions"
  }] : []);
  computedMaskMotionOptions = computed(() => {
    return __spreadValues(__spreadValues({}, this.ptm("maskMotion")), this.maskMotionOptions());
  }, ...ngDevMode ? [{
    debugName: "computedMaskMotionOptions"
  }] : []);
  /**
   * Specifies the visibility of the mask on fullscreen mode.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(visible) {
    this._visible = visible;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
      this.renderMask.set(true);
      this.renderContent.set(true);
    } else if (!this._visible && this.maskVisible) {
      this.maskVisible = false;
    }
  }
  renderMask = signal(false, ...ngDevMode ? [{
    debugName: "renderMask"
  }] : []);
  renderContent = signal(false, ...ngDevMode ? [{
    debugName: "renderContent"
  }] : []);
  /**
   * Callback to invoke on active index change.
   * @param {number} number - Active index.
   * @group Emits
   */
  activeIndexChange = new EventEmitter();
  /**
   * Callback to invoke on visiblity change.
   * @param {boolean} boolean - Visible value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  container;
  _visible = false;
  _activeIndex = 0;
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
  headerFacet;
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate;
  footerFacet;
  /**
   * Custom indicator template.
   * @group Templates
   */
  indicatorTemplate;
  indicatorFacet;
  /**
   * Custom caption template.
   * @group Templates
   */
  captionTemplate;
  captionFacet;
  /**
   * Custom close icon template.
   * @group Templates
   */
  _closeIconTemplate;
  closeIconTemplate;
  /**
   * Custom previous thumbnail icon template.
   * @group Templates
   */
  _previousThumbnailIconTemplate;
  previousThumbnailIconTemplate;
  /**
   * Custom next thumbnail icon template.
   * @group Templates
   */
  _nextThumbnailIconTemplate;
  nextThumbnailIconTemplate;
  /**
   * Custom item previous icon template.
   * @group Templates
   */
  _itemPreviousIconTemplate;
  itemPreviousIconTemplate;
  /**
   * Custom item next icon template.
   * @group Templates
   */
  _itemNextIconTemplate;
  itemNextIconTemplate;
  /**
   * Custom item template.
   * @group Templates
   */
  _itemTemplate;
  itemTemplate;
  /**
   * Custom thumbnail template.
   * @group Templates
   */
  _thumbnailTemplate;
  thumbnailTemplate;
  maskVisible = false;
  numVisibleLimit = 0;
  _componentStyle = inject(GalleriaStyle);
  mask;
  templates;
  constructor(element) {
    super();
    this.element = element;
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerFacet = item.template;
          break;
        case "footer":
          this.footerFacet = item.template;
          break;
        case "indicator":
          this.indicatorFacet = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        case "itemnexticon":
          this.itemNextIconTemplate = item.template;
          break;
        case "itempreviousicon":
          this.itemPreviousIconTemplate = item.template;
          break;
        case "previousthumbnailicon":
          this.previousThumbnailIconTemplate = item.template;
          break;
        case "nextthumbnailicon":
          this.nextThumbnailIconTemplate = item.template;
          break;
        case "caption":
          this.captionFacet = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        case "thumbnail":
          this.thumbnailTemplate = item.template;
          break;
      }
    });
  }
  onChanges(simpleChanges) {
    if (simpleChanges.value && simpleChanges.value.currentValue?.length < this.numVisible) {
      this.numVisibleLimit = simpleChanges.value.currentValue.length;
    } else {
      this.numVisibleLimit = 0;
    }
  }
  onMaskHide(event) {
    if (!event || event.target === event.currentTarget) {
      this.visible = false;
      this.visibleChange.emit(false);
    }
  }
  onActiveItemChange(index) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.activeIndexChange.emit(index);
    }
  }
  onBeforeEnter(event) {
    this.mask = event.element?.parentElement;
    this.enableModality();
    setTimeout(() => {
      const focusTarget = z(this.container?.nativeElement, '[data-pc-section="closebutton"]');
      if (focusTarget) bt(focusTarget);
    }, 25);
  }
  onBeforeLeave() {
    if (this.mask) {
      this.maskVisible = false;
    }
  }
  onAfterLeave() {
    this.disableModality();
    this.renderContent.set(false);
  }
  onMaskAfterLeave() {
    if (!this.renderContent()) {
      this.renderMask.set(false);
    }
  }
  enableModality() {
    blockBodyScroll();
    this.cd.markForCheck();
    if (this.mask) {
      zindexutils.set("modal", this.mask, this.baseZIndex || this.config.zIndex.modal);
    }
  }
  disableModality() {
    unblockBodyScroll();
    this.cd.markForCheck();
    if (this.mask) {
      zindexutils.clear(this.mask);
    }
  }
  onDestroy() {
    if (this.fullScreen) {
      P(this.document.body, "p-overflow-hidden");
    }
    if (this.mask) {
      this.disableModality();
    }
  }
  static \u0275fac = function Galleria_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Galleria)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Galleria,
    selectors: [["p-galleria"]],
    contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4)(dirIndex, _c12, 4)(dirIndex, _c22, 4)(dirIndex, _c32, 4)(dirIndex, _c42, 4)(dirIndex, _c52, 4)(dirIndex, _c62, 4)(dirIndex, _c72, 4)(dirIndex, _c82, 4)(dirIndex, _c92, 4)(dirIndex, _c102, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.indicatorTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.captionTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._closeIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._previousThumbnailIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._nextThumbnailIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._itemPreviousIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._itemNextIconTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._itemTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx._thumbnailTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function Galleria_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c112, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.container = _t2.first);
      }
    },
    inputs: {
      activeIndex: "activeIndex",
      fullScreen: [2, "fullScreen", "fullScreen", booleanAttribute],
      id: "id",
      value: "value",
      numVisible: [2, "numVisible", "numVisible", numberAttribute],
      responsiveOptions: "responsiveOptions",
      showItemNavigators: [2, "showItemNavigators", "showItemNavigators", booleanAttribute],
      showThumbnailNavigators: [2, "showThumbnailNavigators", "showThumbnailNavigators", booleanAttribute],
      showItemNavigatorsOnHover: [2, "showItemNavigatorsOnHover", "showItemNavigatorsOnHover", booleanAttribute],
      changeItemOnIndicatorHover: [2, "changeItemOnIndicatorHover", "changeItemOnIndicatorHover", booleanAttribute],
      circular: [2, "circular", "circular", booleanAttribute],
      autoPlay: [2, "autoPlay", "autoPlay", booleanAttribute],
      shouldStopAutoplayByClick: [2, "shouldStopAutoplayByClick", "shouldStopAutoplayByClick", booleanAttribute],
      transitionInterval: [2, "transitionInterval", "transitionInterval", numberAttribute],
      showThumbnails: [2, "showThumbnails", "showThumbnails", booleanAttribute],
      thumbnailsPosition: "thumbnailsPosition",
      verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight",
      showIndicators: [2, "showIndicators", "showIndicators", booleanAttribute],
      showIndicatorsOnItem: [2, "showIndicatorsOnItem", "showIndicatorsOnItem", booleanAttribute],
      indicatorsPosition: "indicatorsPosition",
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      maskClass: "maskClass",
      containerClass: "containerClass",
      containerStyle: "containerStyle",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      motionOptions: [1, "motionOptions"],
      maskMotionOptions: [1, "maskMotionOptions"],
      visible: "visible"
    },
    outputs: {
      activeIndexChange: "activeIndexChange",
      visibleChange: "visibleChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([GalleriaStyle, {
      provide: GALLERIA_INSTANCE,
      useExisting: _Galleria
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Galleria
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 2,
    consts: [["windowed", ""], ["container", ""], [4, "ngIf", "ngIfElse"], [3, "pBind", "pMotion", "pMotionAppear", "pMotionEnterActiveClass", "pMotionLeaveActiveClass", "pMotionOptions", "ngClass", "class"], [3, "pMotionOnAfterLeave", "click", "pBind", "pMotion", "pMotionAppear", "pMotionEnterActiveClass", "pMotionLeaveActiveClass", "pMotionOptions", "ngClass"], ["pGalleriaContent", "", "pFocusTrap", "", 3, "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions", "value", "activeIndex", "numVisible", "ngStyle", "fullScreen", "pt", "pFocusTrapDisabled", "unstyled"], ["pGalleriaContent", "", "pFocusTrap", "", 3, "pMotionOnBeforeEnter", "pMotionOnBeforeLeave", "pMotionOnAfterLeave", "maskHide", "activeItemChange", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions", "value", "activeIndex", "numVisible", "ngStyle", "fullScreen", "pt", "pFocusTrapDisabled", "unstyled"], ["pGalleriaContent", "", 3, "activeItemChange", "pt", "unstyled", "value", "activeIndex", "numVisible"]],
    template: function Galleria_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Galleria_div_0_Template, 3, 1, "div", 2)(1, Galleria_ng_template_1_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const windowed_r5 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.fullScreen)("ngIfElse", windowed_r5);
      }
    },
    dependencies: () => [NgClass, NgIf, NgStyle, FocusTrap, Bind, MotionDirective, GalleriaContent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Galleria, [{
    type: Component,
    args: [{
      selector: "p-galleria",
      standalone: false,
      template: `
        <div *ngIf="fullScreen; else windowed" #container>
            @if (renderMask()) {
                <div
                    [pBind]="ptm('mask')"
                    [pMotion]="maskVisible"
                    [pMotionAppear]="true"
                    [pMotionEnterActiveClass]="fullScreen ? 'p-overlay-mask-enter-active' : ''"
                    [pMotionLeaveActiveClass]="fullScreen ? 'p-overlay-mask-leave-active' : ''"
                    [pMotionOptions]="computedMaskMotionOptions()"
                    (pMotionOnAfterLeave)="onMaskAfterLeave()"
                    [ngClass]="cx('mask')"
                    [class]="maskClass"
                    [attr.role]="fullScreen ? 'dialog' : 'region'"
                    [attr.aria-modal]="fullScreen ? 'true' : undefined"
                    (click)="onMaskHide($event)"
                >
                    @if (renderContent()) {
                        <div
                            pGalleriaContent
                            [pMotion]="visible"
                            [pMotionAppear]="true"
                            [pMotionName]="'p-galleria'"
                            [pMotionOptions]="computedMotionOptions()"
                            (pMotionOnBeforeEnter)="onBeforeEnter($event)"
                            (pMotionOnBeforeLeave)="onBeforeLeave()"
                            (pMotionOnAfterLeave)="onAfterLeave()"
                            [value]="value"
                            [activeIndex]="activeIndex"
                            [numVisible]="numVisibleLimit || numVisible"
                            (maskHide)="onMaskHide()"
                            (activeItemChange)="onActiveItemChange($event)"
                            [ngStyle]="containerStyle"
                            [fullScreen]="fullScreen"
                            [pt]="pt()"
                            pFocusTrap
                            [pFocusTrapDisabled]="!fullScreen"
                            [unstyled]="unstyled()"
                        ></div>
                    }
                </div>
            }
        </div>

        <ng-template #windowed>
            <div pGalleriaContent [pt]="pt()" [unstyled]="unstyled()" [value]="value" [activeIndex]="activeIndex" [numVisible]="numVisibleLimit || numVisible" (activeItemChange)="onActiveItemChange($event)"></div>
        </ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [GalleriaStyle, {
        provide: GALLERIA_INSTANCE,
        useExisting: Galleria
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Galleria
      }],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: ElementRef
  }], {
    activeIndex: [{
      type: Input
    }],
    fullScreen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    id: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    numVisible: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    responsiveOptions: [{
      type: Input
    }],
    showItemNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showThumbnailNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showItemNavigatorsOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    changeItemOnIndicatorHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoPlay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    shouldStopAutoplayByClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showThumbnails: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    thumbnailsPosition: [{
      type: Input
    }],
    verticalThumbnailViewPortHeight: [{
      type: Input
    }],
    showIndicators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIndicatorsOnItem: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indicatorsPosition: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    maskClass: [{
      type: Input
    }],
    containerClass: [{
      type: Input
    }],
    containerStyle: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
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
    maskMotionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "maskMotionOptions",
        required: false
      }]
    }],
    visible: [{
      type: Input
    }],
    activeIndexChange: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    container: [{
      type: ViewChild,
      args: ["container"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false,
        static: false
      }]
    }],
    indicatorTemplate: [{
      type: ContentChild,
      args: ["indicator", {
        descendants: false
      }]
    }],
    captionTemplate: [{
      type: ContentChild,
      args: ["caption", {
        descendants: false
      }]
    }],
    _closeIconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    _previousThumbnailIconTemplate: [{
      type: ContentChild,
      args: ["previousthumbnailicon", {
        descendants: false
      }]
    }],
    _nextThumbnailIconTemplate: [{
      type: ContentChild,
      args: ["nextthumbnailicon", {
        descendants: false
      }]
    }],
    _itemPreviousIconTemplate: [{
      type: ContentChild,
      args: ["itempreviousicon", {
        descendants: false
      }]
    }],
    _itemNextIconTemplate: [{
      type: ContentChild,
      args: ["itemnexticon", {
        descendants: false
      }]
    }],
    _itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    _thumbnailTemplate: [{
      type: ContentChild,
      args: ["thumbnail", {
        descendants: false,
        static: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var GalleriaContent = class _GalleriaContent extends BaseComponent {
  galleria;
  differs;
  hostName = "Galleria";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.getPTOptions("root"));
  }
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  value = [];
  numVisible;
  fullScreen;
  maskHide = new EventEmitter();
  activeItemChange = new EventEmitter();
  closeButton;
  _componentStyle = inject(GalleriaStyle);
  $pcGalleria = inject(GALLERIA_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  id;
  _activeIndex = 0;
  slideShowActive = true;
  interval;
  styleClass;
  differ;
  constructor(galleria, differs) {
    super();
    this.galleria = galleria;
    this.differs = differs;
    this.id = this.galleria.id || s("pn_id_");
    this.differ = this.differs.find(this.galleria).create();
  }
  // For custom fullscreen
  handleFullscreenChange(event) {
    if (document?.fullscreenElement === this.el.nativeElement?.children[0]) {
      this.fullScreen = true;
    } else {
      this.fullScreen = false;
    }
  }
  onDoCheck() {
    if (isPlatformBrowser(this.galleria.platformId)) {
      const changes = this.differ.diff(this.galleria);
      if (changes && changes.forEachItem.length > 0) {
        this.cd.markForCheck();
      }
    }
  }
  shouldRenderFooter() {
    return this.galleria.footerFacet && this.galleria.templates && this.galleria.templates.toArray().length > 0 || this.galleria.footerTemplate;
  }
  startSlideShow() {
    if (isPlatformBrowser(this.galleria.platformId)) {
      this.interval = setInterval(() => {
        let activeIndex = this.galleria.circular && this.value.length - 1 === this.activeIndex ? 0 : this.activeIndex + 1;
        this.onActiveIndexChange(activeIndex);
        this.activeIndex = activeIndex;
      }, this.galleria.transitionInterval);
      this.slideShowActive = true;
    }
  }
  stopSlideShow() {
    if (this.galleria.autoPlay && !this.galleria.shouldStopAutoplayByClick) {
      return;
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.slideShowActive = false;
  }
  getPositionClass(preClassName, position) {
    const positions = ["top", "left", "bottom", "right"];
    const pos = positions.find((item) => item === position);
    return pos ? `${preClassName}-${pos}` : "";
  }
  isVertical() {
    return this.galleria.thumbnailsPosition === "left" || this.galleria.thumbnailsPosition === "right";
  }
  onActiveIndexChange(index) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.activeItemChange.emit(this.activeIndex);
    }
  }
  closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  getPTOptions(key) {
    return this.ptm(key, {
      context: {
        pt: this.pt(),
        unstyled: this.unstyled()
      }
    });
  }
  static \u0275fac = function GalleriaContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleriaContent)(\u0275\u0275directiveInject(Galleria), \u0275\u0275directiveInject(KeyValueDiffers));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _GalleriaContent,
    selectors: [["div", "pGalleriaContent", ""]],
    viewQuery: function GalleriaContent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c122, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.closeButton = _t2.first);
      }
    },
    hostVars: 7,
    hostBindings: function GalleriaContent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("fullscreenchange", function GalleriaContent_fullscreenchange_HostBindingHandler($event) {
          return ctx.handleFullscreenChange($event);
        }, \u0275\u0275resolveDocument);
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("role", "region");
        \u0275\u0275styleMap(!ctx.galleria.fullScreen ? ctx.galleria.containerStyle : \u0275\u0275pureFunction0(6, _c13));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root")));
      }
    },
    inputs: {
      activeIndex: "activeIndex",
      value: "value",
      numVisible: [2, "numVisible", "numVisible", numberAttribute],
      fullScreen: [2, "fullScreen", "fullScreen", booleanAttribute]
    },
    outputs: {
      maskHide: "maskHide",
      activeItemChange: "activeItemChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([GalleriaStyle]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c14,
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], ["type", "button", 3, "pBind", "class", "click", 4, "ngIf"], ["pGalleriaItemSlot", "", "type", "header", 3, "unstyled", "templates", "pBind", "class", 4, "ngIf"], [3, "pBind"], ["pGalleriaItem", "", 3, "onActiveIndexChange", "startSlideShow", "stopSlideShow", "id", "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive", "pt", "unstyled"], ["pGalleriaThumbnails", "", 3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "pt", "unstyled", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["pGalleriaItemSlot", "", "type", "footer", 3, "pBind", "class", "templates", "unstyled", 4, "ngIf"], ["type", "button", 3, "click", "pBind"], ["data-p-icon", "times", 3, "pBind", "class", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "times", 3, "pBind"], ["pGalleriaItemSlot", "", "type", "header", 3, "unstyled", "templates", "pBind"], ["pGalleriaThumbnails", "", 3, "onActiveIndexChange", "stopSlideShow", "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "pt", "unstyled"], ["pGalleriaItemSlot", "", "type", "footer", 3, "pBind", "templates", "unstyled"]],
    template: function GalleriaContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, GalleriaContent_ng_container_0_Template, 7, 24, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.value && ctx.value.length > 0);
      }
    },
    dependencies: () => [NgIf, NgTemplateOutlet, TimesIcon, Bind, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaContent, [{
    type: Component,
    args: [{
      selector: "div[pGalleriaContent]",
      standalone: false,
      template: `
        <ng-container *ngIf="value && value.length > 0">
            <button *ngIf="galleria.fullScreen" type="button" [pBind]="getPTOptions('closeButton')" [class]="cx('closeButton')" (click)="maskHide.emit()" [attr.aria-label]="closeAriaLabel()">
                <svg data-p-icon="times" *ngIf="!galleria.closeIconTemplate && !galleria._closeIconTemplate" [pBind]="getPTOptions('closeIcon')" [class]="cx('closeIcon')" />
                <ng-template *ngTemplateOutlet="galleria.closeIconTemplate || galleria._closeIconTemplate"></ng-template>
            </button>
            <div *ngIf="galleria.templates && (galleria.headerFacet || galleria.headerTemplate)" pGalleriaItemSlot [unstyled]="unstyled()" type="header" [templates]="galleria.templates" [pBind]="getPTOptions('header')" [class]="cx('header')"></div>
            <div [pBind]="getPTOptions('content')" [class]="cx('content')" [attr.aria-live]="galleria.autoPlay ? 'polite' : 'off'">
                <div
                    pGalleriaItem
                    [id]="id"
                    [value]="value"
                    [activeIndex]="activeIndex"
                    [circular]="galleria.circular"
                    [templates]="galleria.templates"
                    (onActiveIndexChange)="onActiveIndexChange($event)"
                    [showIndicators]="galleria.showIndicators"
                    [changeItemOnIndicatorHover]="galleria.changeItemOnIndicatorHover"
                    [indicatorFacet]="galleria.indicatorFacet"
                    [captionFacet]="galleria.captionFacet"
                    [showItemNavigators]="galleria.showItemNavigators"
                    [autoPlay]="galleria.autoPlay"
                    [slideShowActive]="slideShowActive"
                    (startSlideShow)="startSlideShow()"
                    (stopSlideShow)="stopSlideShow()"
                    [pt]="pt()"
                    [unstyled]="unstyled()"
                    [class]="cx('itemsContainer')"
                ></div>

                <div
                    pGalleriaThumbnails
                    *ngIf="galleria.showThumbnails"
                    [containerId]="id"
                    [value]="value"
                    (onActiveIndexChange)="onActiveIndexChange($event)"
                    [activeIndex]="activeIndex"
                    [templates]="galleria.templates"
                    [numVisible]="numVisible"
                    [responsiveOptions]="galleria.responsiveOptions"
                    [circular]="galleria.circular"
                    [isVertical]="isVertical()"
                    [contentHeight]="galleria.verticalThumbnailViewPortHeight"
                    [showThumbnailNavigators]="galleria.showThumbnailNavigators"
                    [slideShowActive]="slideShowActive"
                    (stopSlideShow)="stopSlideShow()"
                    [pt]="pt()"
                    [unstyled]="unstyled()"
                ></div>
            </div>
            <div *ngIf="shouldRenderFooter()" pGalleriaItemSlot [pBind]="getPTOptions('footer')" [class]="cx('footer')" type="footer" [templates]="galleria.templates" [unstyled]="unstyled()"></div>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [GalleriaStyle],
      host: {
        "[attr.id]": "id",
        "[attr.role]": '"region"',
        "[style]": "!galleria.fullScreen ? galleria.containerStyle : {}",
        "[class]": "cn(cx('root'))"
      },
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: Galleria
  }, {
    type: KeyValueDiffers
  }], {
    activeIndex: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    numVisible: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    fullScreen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maskHide: [{
      type: Output
    }],
    activeItemChange: [{
      type: Output
    }],
    closeButton: [{
      type: ViewChild,
      args: ["closeButton"]
    }],
    handleFullscreenChange: [{
      type: HostListener,
      args: ["document:fullscreenchange", ["$event"]]
    }]
  });
})();
var GalleriaItemSlot = class _GalleriaItemSlot extends BaseComponent {
  hostName = "Galleria";
  templates;
  index;
  get item() {
    return this._item;
  }
  shouldRender() {
    return this.contentTemplate || this.galleria._itemTemplate || this.galleria.itemTemplate || this.galleria.captionTemplate || this.galleria.captionTemplate || this.galleria.captionFacet || this.galleria.thumbnailTemplate || this.galleria._thumbnailTemplate || this.galleria.footerTemplate;
  }
  galleria = inject(Galleria);
  $pcGalleria = inject(GALLERIA_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  set item(item) {
    this._item = item;
    if (this.templates && this.templates?.toArray().length > 0) {
      this.templates.forEach((item2) => {
        if (item2.getType() === this.type) {
          switch (this.type) {
            case "item":
            case "caption":
            case "thumbnail":
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item2.template;
              break;
            case "footer":
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item2.template;
              break;
          }
        }
      });
    } else {
      this.getContentTemplate();
    }
  }
  getTemplateFromQueryList(type) {
    return this.galleria.templates?.find((item) => item.getType() === type)?.template;
  }
  getContentTemplate() {
    switch (this.type) {
      case "item":
        this.context = {
          $implicit: this.item
        };
        this.contentTemplate = this.galleria._itemTemplate || this.getTemplateFromQueryList("item");
        break;
      case "caption":
        this.context = {
          $implicit: this.item
        };
        this.contentTemplate = this.galleria.captionTemplate || this.getTemplateFromQueryList("caption");
        break;
      case "thumbnail":
        this.context = {
          $implicit: this.item
        };
        this.contentTemplate = this.galleria._thumbnailTemplate || this.getTemplateFromQueryList("thumbnail");
        break;
      case "indicator":
        this.context = {
          $implicit: this.index
        };
        this.contentTemplate = this.galleria.indicatorTemplate || this.getTemplateFromQueryList("indicator");
        break;
      case "footer":
        this.context = {
          $implicit: this.item
        };
        this.contentTemplate = this.galleria.footerTemplate || this.getTemplateFromQueryList("footer");
        break;
      default:
        this.context = {
          $implicit: this.item
        };
        this.contentTemplate = this.galleria._itemTemplate || this.getTemplateFromQueryList("item");
    }
  }
  type;
  contentTemplate;
  context;
  _item;
  onAfterContentInit() {
    if (this.templates && this.templates.toArray().length > 0) {
      this.templates?.forEach((item) => {
        if (item.getType() === this.type) {
          switch (this.type) {
            case "item":
            case "caption":
            case "thumbnail":
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item.template;
              break;
            case "indicator":
              this.context = {
                $implicit: this.index
              };
              this.contentTemplate = item.template;
              break;
            case "footer":
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item.template;
              break;
            default:
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item.template;
              break;
          }
        }
      });
    } else {
      this.getContentTemplate();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275GalleriaItemSlot_BaseFactory;
    return function GalleriaItemSlot_Factory(__ngFactoryType__) {
      return (\u0275GalleriaItemSlot_BaseFactory || (\u0275GalleriaItemSlot_BaseFactory = \u0275\u0275getInheritedFactory(_GalleriaItemSlot)))(__ngFactoryType__ || _GalleriaItemSlot);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _GalleriaItemSlot,
    selectors: [["div", "pGalleriaItemSlot", ""]],
    inputs: {
      templates: "templates",
      index: [2, "index", "index", numberAttribute],
      item: "item",
      type: "type"
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c15,
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function GalleriaItemSlot_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.shouldRender());
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaItemSlot, [{
    type: Component,
    args: [{
      selector: "div[pGalleriaItemSlot]",
      standalone: false,
      template: `
        <ng-container *ngIf="shouldRender()">
            <ng-container *ngTemplateOutlet="contentTemplate; context: context"></ng-container>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    templates: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    item: [{
      type: Input
    }],
    type: [{
      type: Input
    }]
  });
})();
var GalleriaItem = class _GalleriaItem extends BaseComponent {
  galleria;
  hostName = "Galleria";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("itemsContainer"));
  }
  id;
  circular = false;
  value;
  showItemNavigators = false;
  showIndicators = true;
  slideShowActive = true;
  changeItemOnIndicatorHover = true;
  autoPlay = false;
  templates;
  indicatorFacet;
  captionFacet;
  startSlideShow = new EventEmitter();
  stopSlideShow = new EventEmitter();
  onActiveIndexChange = new EventEmitter();
  _componentStyle = inject(GalleriaStyle);
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  get activeItem() {
    return this.value && this.value[this._activeIndex];
  }
  _activeIndex = 0;
  leftButtonFocused = false;
  rightButtonFocused = false;
  constructor(galleria) {
    super();
    this.galleria = galleria;
  }
  getIndicatorPTOptions(index) {
    return this.ptm("indicator", {
      context: {
        highlighted: this.activeIndex === index
      }
    });
  }
  onChanges({
    autoPlay
  }) {
    if (autoPlay?.currentValue) {
      this.startSlideShow.emit();
    }
    if (autoPlay && autoPlay.currentValue === false) {
      this.stopTheSlideShow();
    }
  }
  next() {
    let nextItemIndex = this.activeIndex + 1;
    let activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
  }
  prev() {
    let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
    let activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
  }
  onButtonFocus(pos) {
    if (pos === "left") {
      this.leftButtonFocused = true;
    } else this.rightButtonFocused = true;
  }
  onButtonBlur(pos) {
    if (pos === "left") {
      this.leftButtonFocused = false;
    } else this.rightButtonFocused = false;
  }
  stopTheSlideShow() {
    if (this.slideShowActive && this.stopSlideShow) {
      this.stopSlideShow.emit();
    }
  }
  navForward(e) {
    this.stopTheSlideShow();
    this.next();
    if (e && e.cancelable) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  navBackward(e) {
    this.stopTheSlideShow();
    this.prev();
    if (e && e.cancelable) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onIndicatorClick(index) {
    this.stopTheSlideShow();
    this.onActiveIndexChange.emit(index);
  }
  onIndicatorMouseEnter(index) {
    if (this.changeItemOnIndicatorHover) {
      this.stopTheSlideShow();
      this.onActiveIndexChange.emit(index);
    }
  }
  onIndicatorKeyDown(event, index) {
    switch (event.code) {
      case "Enter":
      case "Space":
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
        event.preventDefault();
        break;
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  isNavForwardDisabled() {
    return !this.circular && this.activeIndex === this.value.length - 1;
  }
  isNavBackwardDisabled() {
    return !this.circular && this.activeIndex === 0;
  }
  isIndicatorItemActive(index) {
    return this.activeIndex === index;
  }
  ariaSlideLabel() {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.slide : void 0;
  }
  ariaSlideNumber(value) {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.slideNumber?.replace(/{slideNumber}/g, value) : void 0;
  }
  ariaPageLabel(value) {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g, value) : void 0;
  }
  static \u0275fac = function GalleriaItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleriaItem)(\u0275\u0275directiveInject(Galleria));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _GalleriaItem,
    selectors: [["div", "pGalleriaItem", ""]],
    inputs: {
      id: "id",
      circular: [2, "circular", "circular", booleanAttribute],
      value: "value",
      showItemNavigators: [2, "showItemNavigators", "showItemNavigators", booleanAttribute],
      showIndicators: [2, "showIndicators", "showIndicators", booleanAttribute],
      slideShowActive: [2, "slideShowActive", "slideShowActive", booleanAttribute],
      changeItemOnIndicatorHover: [2, "changeItemOnIndicatorHover", "changeItemOnIndicatorHover", booleanAttribute],
      autoPlay: [2, "autoPlay", "autoPlay", booleanAttribute],
      templates: "templates",
      indicatorFacet: "indicatorFacet",
      captionFacet: "captionFacet",
      activeIndex: "activeIndex"
    },
    outputs: {
      startSlideShow: "startSlideShow",
      stopSlideShow: "stopSlideShow",
      onActiveIndexChange: "onActiveIndexChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([GalleriaStyle]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c16,
    decls: 6,
    vars: 16,
    consts: [[3, "pBind"], ["type", "button", "role", "navigation", "data-pc-group-section", "itemnavigator", 3, "pBind", "class", "click", "focus", "blur", 4, "ngIf"], ["pGalleriaItemSlot", "", "role", "group", 3, "pBind", "unstyled", "item", "templates", "id"], ["pGalleriaItemSlot", "", "type", "caption", 3, "pBind", "unstyled", "class", "item", "templates", 4, "ngIf"], [3, "pBind", "class", 4, "ngIf"], ["type", "button", "role", "navigation", "data-pc-group-section", "itemnavigator", 3, "click", "focus", "blur", "pBind"], ["data-p-icon", "chevron-left", 3, "pBind", "class", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-left", 3, "pBind"], ["data-p-icon", "chevron-right", 3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "chevron-right", 3, "pBind"], ["pGalleriaItemSlot", "", "type", "caption", 3, "pBind", "unstyled", "item", "templates"], ["tabindex", "0", 3, "pBind", "class", "click", "mouseenter", "keydown", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "click", "mouseenter", "keydown", "pBind"], ["type", "button", "tabIndex", "-1", 3, "pBind", "class", 4, "ngIf"], [4, "ngIf"], ["type", "button", "tabIndex", "-1", 3, "pBind"], ["pGalleriaItemSlot", "", "type", "indicator", 3, "index", "templates", "pBind", "unstyled"]],
    template: function GalleriaItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, GalleriaItem_button_1_Template, 3, 5, "button", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275template(3, GalleriaItem_button_3_Template, 3, 5, "button", 1)(4, GalleriaItem_div_4_Template, 1, 6, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, GalleriaItem_ul_5_Template, 2, 4, "ul", 4);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("items"));
        \u0275\u0275property("pBind", ctx.ptm("items"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showItemNavigators);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("item"));
        \u0275\u0275property("pBind", ctx.ptm("item"))("unstyled", ctx.unstyled())("item", ctx.activeItem)("templates", ctx.templates)("id", ctx.id + "_item_" + ctx.activeIndex);
        \u0275\u0275attribute("aria-label", ctx.ariaSlideNumber(ctx.activeIndex + 1))("aria-roledescription", ctx.ariaSlideLabel());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showItemNavigators);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.captionFacet || ctx.galleria.captionTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showIndicators);
      }
    },
    dependencies: () => [NgForOf, NgIf, NgTemplateOutlet, ChevronRightIcon, ChevronLeftIcon, Bind, GalleriaItemSlot],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaItem, [{
    type: Component,
    args: [{
      selector: "div[pGalleriaItem]",
      standalone: false,
      template: `
        <div [pBind]="ptm('items')" [class]="cx('items')">
            <button
                *ngIf="showItemNavigators"
                type="button"
                role="navigation"
                [pBind]="ptm('prevButton')"
                [class]="cx('prevButton')"
                (click)="navBackward($event)"
                (focus)="onButtonFocus('left')"
                (blur)="onButtonBlur('left')"
                data-pc-group-section="itemnavigator"
            >
                <svg data-p-icon="chevron-left" *ngIf="!galleria.itemPreviousIconTemplate && !galleria._itemPreviousIconTemplate" [pBind]="ptm('prevIcon')" [class]="cx('prevIcon')" />
                <ng-template *ngTemplateOutlet="galleria.itemPreviousIconTemplate || galleria._itemPreviousIconTemplate"></ng-template>
            </button>
            <div
                pGalleriaItemSlot
                [pBind]="ptm('item')"
                [unstyled]="unstyled()"
                [class]="cx('item')"
                [item]="activeItem"
                [templates]="templates"
                [id]="id + '_item_' + activeIndex"
                role="group"
                [class]="cx('item')"
                [attr.aria-label]="ariaSlideNumber(activeIndex + 1)"
                [attr.aria-roledescription]="ariaSlideLabel()"
            ></div>
            <button
                *ngIf="showItemNavigators"
                type="button"
                [pBind]="ptm('nextButton')"
                [class]="cx('nextButton')"
                (click)="navForward($event)"
                role="navigation"
                (focus)="onButtonFocus('right')"
                (blur)="onButtonBlur('right')"
                data-pc-group-section="itemnavigator"
            >
                <svg data-p-icon="chevron-right" *ngIf="!galleria.itemNextIconTemplate && !galleria._itemNextIconTemplate" [pBind]="ptm('nextIcon')" [class]="cx('nextIcon')" />
                <ng-template *ngTemplateOutlet="galleria.itemNextIconTemplate || galleria._itemNextIconTemplate"></ng-template>
            </button>
            <div *ngIf="captionFacet || galleria.captionTemplate" pGalleriaItemSlot [pBind]="ptm('caption')" [unstyled]="unstyled()" [class]="cx('caption')" type="caption" [item]="activeItem" [templates]="templates"></div>
        </div>
        <ul *ngIf="showIndicators" [pBind]="ptm('indicatorList')" [class]="cx('indicatorList')">
            <li
                *ngFor="let item of value; let index = index"
                [pBind]="getIndicatorPTOptions(index)"
                tabindex="0"
                (click)="onIndicatorClick(index)"
                (mouseenter)="onIndicatorMouseEnter(index)"
                (keydown)="onIndicatorKeyDown($event, index)"
                [class]="cx('indicator', { index })"
                [attr.aria-label]="ariaPageLabel(index + 1)"
                [attr.aria-selected]="activeIndex === index"
                [attr.aria-controls]="id + '_item_' + index"
                [pBind]="ptm('indicator', getIndicatorPTOptions(index))"
                [attr.data-p-active]="isIndicatorItemActive(index)"
            >
                <button *ngIf="!indicatorFacet && !galleria.indicatorTemplate" type="button" tabIndex="-1" [pBind]="ptm('indicatorButton', getIndicatorPTOptions(index))" [class]="cx('indicatorButton')"></button>
                <ng-container *ngIf="indicatorFacet || galleria.indicatorTemplate">
                    <div pGalleriaItemSlot type="indicator" [index]="index" [templates]="templates" [pBind]="ptm('item')" [unstyled]="unstyled()"></div>
                </ng-container>
            </li>
        </ul>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [GalleriaStyle],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: Galleria
  }], {
    id: [{
      type: Input
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    showItemNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIndicators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    slideShowActive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    changeItemOnIndicatorHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoPlay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templates: [{
      type: Input
    }],
    indicatorFacet: [{
      type: Input
    }],
    captionFacet: [{
      type: Input
    }],
    startSlideShow: [{
      type: Output
    }],
    stopSlideShow: [{
      type: Output
    }],
    onActiveIndexChange: [{
      type: Output
    }],
    activeIndex: [{
      type: Input
    }]
  });
})();
var GalleriaThumbnails = class _GalleriaThumbnails extends BaseComponent {
  galleria;
  hostName = "Galleria";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("thumbnails"));
  }
  containerId;
  value;
  isVertical = false;
  slideShowActive = false;
  circular = false;
  responsiveOptions;
  contentHeight = "300px";
  showThumbnailNavigators = true;
  templates;
  onActiveIndexChange = new EventEmitter();
  stopSlideShow = new EventEmitter();
  itemsContainer;
  get numVisible() {
    return this._numVisible;
  }
  set numVisible(numVisible) {
    this._numVisible = numVisible;
    this._oldNumVisible = this.d_numVisible;
    this.d_numVisible = numVisible;
  }
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._oldactiveIndex = this._activeIndex;
    this._activeIndex = activeIndex;
  }
  index;
  startPos = null;
  thumbnailsStyle = null;
  sortedResponsiveOptions = null;
  totalShiftedItems = 0;
  page = 0;
  documentResizeListener;
  _numVisible = 0;
  d_numVisible = 0;
  _oldNumVisible = 0;
  _activeIndex = 0;
  _oldactiveIndex = 0;
  _componentStyle = inject(GalleriaStyle);
  constructor(galleria) {
    super();
    this.galleria = galleria;
  }
  onInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createStyle();
      if (this.responsiveOptions) {
        this.bindDocumentListeners();
      }
    }
  }
  onAfterContentChecked() {
    let totalShiftedItems = this.totalShiftedItems;
    if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
      if (this._activeIndex <= this.getMedianItemIndex()) {
        totalShiftedItems = 0;
      } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
        totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex() + 1;
      } else {
        totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex();
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
      }
      if (this.itemsContainer && this.itemsContainer.nativeElement) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
      }
      if (this._oldactiveIndex !== this._activeIndex) {
        this.document.body.setAttribute("data-p-items-hidden", "false");
        !this.$unstyled() && P(this.itemsContainer.nativeElement, "p-items-hidden");
        this.itemsContainer.nativeElement.style.transition = "transform 500ms ease 0s";
      }
      this._oldactiveIndex = this._activeIndex;
      this._oldNumVisible = this.d_numVisible;
    }
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.calculatePosition();
    }
  }
  createStyle() {
    if (!this.thumbnailsStyle) {
      this.thumbnailsStyle = this.document.createElement("style");
      _t(this.thumbnailsStyle, "nonce", this.galleria.config?.csp()?.nonce);
      this.document.body.appendChild(this.thumbnailsStyle);
    }
    let innerHTML = `
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100 / this.d_numVisible}%
            }
        `;
    if (this.responsiveOptions && !this.$unstyled()) {
      this.sortedResponsiveOptions = [...this.responsiveOptions];
      this.sortedResponsiveOptions.sort((data1, data2) => {
        const value1 = data1.breakpoint;
        const value2 = data2.breakpoint;
        let result;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, void 0, {
          numeric: true
        });
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return -1 * result;
      });
      for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
        let res = this.sortedResponsiveOptions[i];
        innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
      }
    }
    this.thumbnailsStyle.innerHTML = innerHTML;
    _t(this.thumbnailsStyle, "nonce", this.galleria.config?.csp()?.nonce);
  }
  calculatePosition() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.itemsContainer && this.sortedResponsiveOptions) {
        let windowWidth = window.innerWidth;
        let matchedResponsiveData = {
          numVisible: this._numVisible
        };
        for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
          let res = this.sortedResponsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
        if (this.d_numVisible !== matchedResponsiveData.numVisible) {
          this.d_numVisible = matchedResponsiveData.numVisible;
          this.cd.markForCheck();
        }
      }
    }
  }
  getTabIndex(index) {
    return this.isItemActive(index) ? 0 : null;
  }
  navForward(e) {
    this.stopTheSlideShow();
    let nextItemIndex = this._activeIndex + 1;
    if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
      this.step(-1);
    }
    let activeIndex = this.circular && this.value.length - 1 === this._activeIndex ? 0 : nextItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  navBackward(e) {
    this.stopTheSlideShow();
    let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
    let diff = prevItemIndex + this.totalShiftedItems;
    if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
      this.step(1);
    }
    let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onItemClick(index) {
    this.stopTheSlideShow();
    let selectedItemIndex = index;
    if (selectedItemIndex !== this._activeIndex) {
      const diff = selectedItemIndex + this.totalShiftedItems;
      let dir = 0;
      if (selectedItemIndex < this._activeIndex) {
        dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();
        if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
          this.step(dir);
        }
      } else {
        dir = this.getMedianItemIndex() - diff;
        if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
          this.step(dir);
        }
      }
      this.activeIndex = selectedItemIndex;
      this.onActiveIndexChange.emit(this.activeIndex);
    }
  }
  onThumbnailKeydown(event, index) {
    if (event.code === "Enter" || event.code === "Space") {
      this.onItemClick(index);
      event.preventDefault();
    }
    switch (event.code) {
      case "ArrowRight":
        this.onRightKey();
        break;
      case "ArrowLeft":
        this.onLeftKey();
        break;
      case "Home":
        this.onHomeKey();
        event.preventDefault();
        break;
      case "End":
        this.onEndKey();
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        break;
      case "Tab":
        this.onTabKey();
        break;
      default:
        break;
    }
  }
  onRightKey() {
    const indicators = Y(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"]');
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
  }
  onLeftKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
  }
  onHomeKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, 0);
  }
  onEndKey() {
    const indicators = Y(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"]');
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, indicators.length - 1);
  }
  onTabKey() {
    const indicators = [...Y(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"]')];
    const highlightedIndex = indicators.findIndex((ind) => Q(ind, "data-p-active") === true);
    const activeIndicator = z(this.itemsContainer?.nativeElement, '[tabindex="0"]');
    const activeIndex = indicators.findIndex((ind) => ind === activeIndicator?.parentElement);
    indicators[activeIndex].children[0].tabIndex = "-1";
    indicators[highlightedIndex].children[0].tabIndex = "0";
  }
  findFocusedIndicatorIndex() {
    const indicators = [...Y(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"]')];
    const activeIndicator = z(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"] > [tabindex="0"]');
    return indicators.findIndex((ind) => ind === activeIndicator?.parentElement);
  }
  changedFocusedIndicator(prevInd, nextInd) {
    const indicators = Y(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"]');
    indicators[prevInd].children[0].tabIndex = "-1";
    indicators[nextInd].children[0].tabIndex = "0";
    indicators[nextInd].children[0].focus();
  }
  step(dir) {
    let totalShiftedItems = this.totalShiftedItems + dir;
    if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
      totalShiftedItems = this.d_numVisible - this.value.length;
    } else if (dir > 0 && totalShiftedItems > 0) {
      totalShiftedItems = 0;
    }
    if (this.circular) {
      if (dir < 0 && this.value.length - 1 === this._activeIndex) {
        totalShiftedItems = 0;
      } else if (dir > 0 && this._activeIndex === 0) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      }
    }
    if (this.itemsContainer) {
      this.document.body.setAttribute("data-p-items-hidden", "false");
      !this.$unstyled() && P(this.itemsContainer.nativeElement, "p-items-hidden");
      this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
      this.itemsContainer.nativeElement.style.transition = "transform 500ms ease 0s";
    }
    this.totalShiftedItems = totalShiftedItems;
  }
  stopTheSlideShow() {
    if (this.slideShowActive && this.stopSlideShow) {
      this.stopSlideShow.emit();
    }
  }
  changePageOnTouch(e, diff) {
    if (diff < 0) {
      this.navForward(e);
    } else {
      this.navBackward(e);
    }
  }
  getTotalPageNumber() {
    return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
  }
  getMedianItemIndex() {
    let index = Math.floor(this.d_numVisible / 2);
    return this.d_numVisible % 2 ? index : index - 1;
  }
  onTransitionEnd() {
    if (this.itemsContainer && this.itemsContainer.nativeElement) {
      this.document.body.setAttribute("data-p-items-hidden", "true");
      !this.$unstyled() && W(this.itemsContainer.nativeElement, "p-items-hidden");
      this.itemsContainer.nativeElement.style.transition = "";
    }
  }
  onTouchEnd(e) {
    let touchobj = e.changedTouches[0];
    if (this.isVertical) {
      this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
    }
  }
  onTouchMove(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onTouchStart(e) {
    let touchobj = e.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  }
  isNavBackwardDisabled() {
    return !this.circular && this._activeIndex === 0 || this.value.length <= this.d_numVisible;
  }
  isNavForwardDisabled() {
    return !this.circular && this._activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
  }
  firstItemAciveIndex() {
    return this.totalShiftedItems * -1;
  }
  lastItemActiveIndex() {
    return this.firstItemAciveIndex() + this.d_numVisible - 1;
  }
  isItemActive(index) {
    return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
  }
  bindDocumentListeners() {
    if (isPlatformBrowser(this.platformId)) {
      const window2 = this.document.defaultView || "window";
      this.documentResizeListener = this.renderer.listen(window2, "resize", () => {
        this.calculatePosition();
      });
    }
  }
  unbindDocumentListeners() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  onDestroy() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.thumbnailsStyle) {
      this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle);
    }
  }
  ariaPrevButtonLabel() {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.prevPageLabel : void 0;
  }
  ariaNextButtonLabel() {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.nextPageLabel : void 0;
  }
  ariaPageLabel(value) {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g, value) : void 0;
  }
  static \u0275fac = function GalleriaThumbnails_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleriaThumbnails)(\u0275\u0275directiveInject(Galleria));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _GalleriaThumbnails,
    selectors: [["div", "pGalleriaThumbnails", ""]],
    viewQuery: function GalleriaThumbnails_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c18, 5);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.itemsContainer = _t2.first);
      }
    },
    hostVars: 2,
    hostBindings: function GalleriaThumbnails_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("thumbnails"));
      }
    },
    inputs: {
      containerId: "containerId",
      value: "value",
      isVertical: [2, "isVertical", "isVertical", booleanAttribute],
      slideShowActive: [2, "slideShowActive", "slideShowActive", booleanAttribute],
      circular: [2, "circular", "circular", booleanAttribute],
      responsiveOptions: "responsiveOptions",
      contentHeight: "contentHeight",
      showThumbnailNavigators: "showThumbnailNavigators",
      templates: "templates",
      numVisible: "numVisible",
      activeIndex: "activeIndex"
    },
    outputs: {
      onActiveIndexChange: "onActiveIndexChange",
      stopSlideShow: "stopSlideShow"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([GalleriaStyle]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c19,
    decls: 7,
    vars: 15,
    consts: [["itemsContainer", ""], [3, "pBind"], ["type", "button", "pRipple", "", "data-pc-group-section", "thumbnailnavigator", 3, "pBind", "class", "click", 4, "ngIf"], [3, "pBind", "ngStyle"], ["role", "tablist", 3, "transitionend", "touchstart", "touchmove", "pBind"], [3, "pBind", "class", "keydown", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", "data-pc-group-section", "thumbnailnavigator", 3, "click", "pBind"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-left", 3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "chevron-up", 3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "chevron-left", 3, "pBind"], ["data-p-icon", "chevron-up", 3, "pBind"], [3, "keydown", "pBind"], [3, "click", "touchend", "keydown.enter", "pBind"], ["pGalleriaItemSlot", "", "type", "thumbnail", 3, "pBind", "item", "templates", "unstyled"], ["data-p-icon", "chevron-right", 3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "chevron-right", 3, "pBind"], ["data-p-icon", "chevron-down", 3, "pBind"]],
    template: function GalleriaThumbnails_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, GalleriaThumbnails_button_1_Template, 3, 6, "button", 2);
        \u0275\u0275elementStart(2, "div", 3)(3, "div", 4, 0);
        \u0275\u0275listener("transitionend", function GalleriaThumbnails_Template_div_transitionend_3_listener() {
          return ctx.onTransitionEnd();
        })("touchstart", function GalleriaThumbnails_Template_div_touchstart_3_listener($event) {
          return ctx.onTouchStart($event);
        })("touchmove", function GalleriaThumbnails_Template_div_touchmove_3_listener($event) {
          return ctx.onTouchMove($event);
        });
        \u0275\u0275template(5, GalleriaThumbnails_div_5_Template, 3, 19, "div", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, GalleriaThumbnails_button_6_Template, 3, 6, "button", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("thumbnailContent"));
        \u0275\u0275property("pBind", ctx.ptm("thumbnailContent"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showThumbnailNavigators);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("thumbnailsViewport"));
        \u0275\u0275property("pBind", ctx.ptm("thumbnailsViewport"))("ngStyle", \u0275\u0275pureFunction1(13, _c20, ctx.isVertical ? ctx.contentHeight : ""));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("thumbnailItems"));
        \u0275\u0275property("pBind", ctx.ptm("thumbnailItems"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.value);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showThumbnailNavigators);
      }
    },
    dependencies: () => [NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, Bind, GalleriaItemSlot],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaThumbnails, [{
    type: Component,
    args: [{
      selector: "div[pGalleriaThumbnails]",
      standalone: false,
      template: `
        <div [pBind]="ptm('thumbnailContent')" [class]="cx('thumbnailContent')">
            <button
                *ngIf="showThumbnailNavigators"
                type="button"
                [pBind]="ptm('thumbnailPrevButton')"
                [class]="cx('thumbnailPrevButton')"
                (click)="navBackward($event)"
                pRipple
                [attr.aria-label]="ariaPrevButtonLabel()"
                data-pc-group-section="thumbnailnavigator"
            >
                <ng-container *ngIf="!galleria.previousThumbnailIconTemplate && !galleria._previousThumbnailIconTemplate">
                    <svg data-p-icon="chevron-left" *ngIf="!isVertical" [pBind]="ptm('thumbnailPrevIcon')" [class]="cx('thumbnailPrevIcon')" />
                    <svg data-p-icon="chevron-up" *ngIf="isVertical" [pBind]="ptm('thumbnailPrevIcon')" [class]="cx('thumbnailPrevIcon')" />
                </ng-container>
                <ng-template *ngTemplateOutlet="galleria.previousThumbnailIconTemplate || galleria._previousThumbnailIconTemplate"></ng-template>
            </button>
            <div [pBind]="ptm('thumbnailsViewport')" [class]="cx('thumbnailsViewport')" [ngStyle]="{ height: isVertical ? contentHeight : '' }">
                <div #itemsContainer [pBind]="ptm('thumbnailItems')" [class]="cx('thumbnailItems')" (transitionend)="onTransitionEnd()" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" role="tablist">
                    <div
                        *ngFor="let item of value; let index = index"
                        [pBind]="ptm('thumbnailItem')"
                        [class]="cx('thumbnailItem', { index, activeIndex })"
                        [attr.aria-selected]="activeIndex === index"
                        [attr.aria-controls]="containerId + '_item_' + index"
                        (keydown)="onThumbnailKeydown($event, index)"
                        [attr.data-p-active]="activeIndex === index"
                    >
                        <div
                            [pBind]="ptm('thumbnail')"
                            [class]="cx('thumbnail')"
                            [attr.tabindex]="activeIndex === index ? 0 : -1"
                            [attr.aria-current]="activeIndex === index ? 'page' : undefined"
                            [attr.aria-label]="ariaPageLabel(index + 1)"
                            (click)="onItemClick(index)"
                            (touchend)="onItemClick(index)"
                            (keydown.enter)="onItemClick(index)"
                        >
                            <div pGalleriaItemSlot type="thumbnail" [pBind]="ptm('thumbnailItem')" [item]="item" [templates]="templates" [unstyled]="unstyled()"></div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                *ngIf="showThumbnailNavigators"
                type="button"
                [pBind]="ptm('thumbnailNextButton')"
                [class]="cx('thumbnailNextButton')"
                (click)="navForward($event)"
                pRipple
                [attr.aria-label]="ariaNextButtonLabel()"
                data-pc-group-section="thumbnailnavigator"
            >
                <ng-container *ngIf="!galleria.nextThumbnailIconTemplate && !galleria._nextThumbnailIconTemplate">
                    <svg data-p-icon="chevron-right" *ngIf="!isVertical" [pBind]="ptm('thumbnailNextIcon')" [class]="cx('thumbnailNextIcon')" />
                    <svg data-p-icon="chevron-down" *ngIf="isVertical" [pBind]="ptm('thumbnailNextIcon')" [class]="cx('thumbnailNextIcon')" />
                </ng-container>
                <ng-template *ngTemplateOutlet="galleria.nextThumbnailIconTemplate || galleria._nextThumbnailIconTemplate"></ng-template>
            </button>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [GalleriaStyle],
      host: {
        "[class]": 'cx("thumbnails")'
      },
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: Galleria
  }], {
    containerId: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    isVertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    slideShowActive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    responsiveOptions: [{
      type: Input
    }],
    contentHeight: [{
      type: Input
    }],
    showThumbnailNavigators: [{
      type: Input
    }],
    templates: [{
      type: Input
    }],
    onActiveIndexChange: [{
      type: Output
    }],
    stopSlideShow: [{
      type: Output
    }],
    itemsContainer: [{
      type: ViewChild,
      args: ["itemsContainer"]
    }],
    numVisible: [{
      type: Input
    }],
    activeIndex: [{
      type: Input
    }]
  });
})();
var GalleriaModule = class _GalleriaModule {
  static \u0275fac = function GalleriaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleriaModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _GalleriaModule,
    declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails],
    imports: [CommonModule, SharedModule, Ripple, TimesIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, FocusTrap, BindModule, MotionModule],
    exports: [CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule, TimesIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, BindModule, MotionModule, CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, Ripple, TimesIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, FocusTrap, BindModule, MotionModule],
      exports: [CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, SharedModule],
      declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
    }]
  }], null, null);
})();

// libs/frontend/home/data-access/src/lib/data-access/categories.service.ts
var CategoriesService = class _CategoriesService {
  categoriesMen = [
    {
      image: "/assets/images/categories/categories-men-1.png",
      category: "Shirts",
      description: "Explore Now!"
    },
    {
      image: "/assets/images/categories/categories-men-2.png",
      category: "Printed T-Shirts",
      description: "Explore Now!"
    },
    {
      image: "/assets/images/categories/categories-men-7.png",
      category: "Activewear",
      description: "Explore Now!"
    },
    {
      image: "/assets/images/categories/categories-men-8.png",
      category: "Boxers",
      description: "Explore Now!"
    }
  ];
  categoriesWomen = [
    {
      image: "/assets/images/categories/categories-women-1.png",
      category: "Hoodies & Sweetshirt",
      description: "Explore Now!"
    },
    {
      image: "/assets/images/categories/categories-women-2.png",
      category: "Coats & Parkas",
      description: "Explore Now!"
    },
    {
      image: "/assets/images/categories/categories-women-3.png",
      category: "Tees & T-Shirt",
      description: "Explore Now!"
    },
    {
      image: "/assets/images/categories/categories-women-4.png",
      category: "Boxers",
      description: "Explore Now!"
    }
  ];
  getCategoriesMen() {
    return this.categoriesMen;
  }
  getCategoriesWoman() {
    return this.categoriesWomen;
  }
  static \u0275fac = function CategoriesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoriesService, factory: _CategoriesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoriesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/frontend/home/ui/src/lib/categories-card/categories-card.ts
function CategoriesCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domElement(1, "div", 1);
    \u0275\u0275pipe(2, "imageUrl");
    \u0275\u0275domElementStart(3, "div", 2)(4, "div", 3)(5, "h2", 4);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "h3", 5);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(9, "svg", 6);
    \u0275\u0275domElement(10, "path", 7);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + \u0275\u0275pipeBind1(2, 4, ctx_r0.category.image) + ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.category.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.category.description);
  }
}
var CategoriesCardComponent = class _CategoriesCardComponent {
  category;
  static \u0275fac = function CategoriesCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoriesCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesCardComponent, selectors: [["app-categories-card"]], inputs: { category: "category" }, decls: 1, vars: 1, consts: [[1, "w-[270px]", "h-auto", "xs:w-full", "xs:h-auto", "overflow-hidden"], [1, "h-[393px]", "bg-cover", "bg-center"], [1, "flex", "justify-between", "items-center", "mt-4", "group"], [1, "cursor-pointer"], [1, "font-bold", "color-categories", "text-lg"], [1, "font-medium", "text-sm", "color-grey", "mt-2"], ["width", "19", "height", "13", "viewBox", "0 0 19 13", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mr-2", "transform", "transition-transform", "group-hover:-translate-x-[-8px]"], ["d", "M18.5965 7.32149C18.9237 6.99427 18.9237 6.46374 18.5965 6.13651L13.2641 0.804107C12.9369 0.476884 12.4063 0.476884 12.0791 0.804107C11.7519 1.13133 11.7519 1.66186 12.0791 1.98909L16.819 6.729L12.0791 11.4689C11.7519 11.7961 11.7519 12.3267 12.0791 12.6539C12.4063 12.9811 12.9369 12.9811 13.2641 12.6539L18.5965 7.32149ZM0.128662 7.56691L18.004 7.56691V5.8911L0.128662 5.8911L0.128662 7.56691Z", "fill", "#797979"]], template: function CategoriesCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CategoriesCardComponent_Conditional_0_Template, 11, 6, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.category ? 0 : -1);
    }
  }, dependencies: [CommonModule, ImageUrlPipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoriesCardComponent, [{
    type: Component,
    args: [{ selector: "app-categories-card", imports: [CommonModule, ImageUrlPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (category) {
  <div class="w-[270px] h-auto xs:w-full xs:h-auto overflow-hidden">
    <div
      class="h-[393px] bg-cover bg-center"
      [style.background-image]="'url(' + (category.image | imageUrl) + ')'"
    ></div>
    <div class="flex justify-between items-center mt-4 group">
      <div class="cursor-pointer">
        <h2 class="font-bold color-categories text-lg">{{ category.category }}</h2>
        <h3 class="font-medium text-sm color-grey mt-2">{{ category.description }}</h3>
      </div>

      <svg
        width="19"
        height="13"
        viewBox="0 0 19 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mr-2 transform transition-transform group-hover:-translate-x-[-8px]"
      >
        <path
          d="M18.5965 7.32149C18.9237 6.99427 18.9237 6.46374 18.5965 6.13651L13.2641 0.804107C12.9369 0.476884 12.4063 0.476884 12.0791 0.804107C11.7519 1.13133 11.7519 1.66186 12.0791 1.98909L16.819 6.729L12.0791 11.4689C11.7519 11.7961 11.7519 12.3267 12.0791 12.6539C12.4063 12.9811 12.9369 12.9811 13.2641 12.6539L18.5965 7.32149ZM0.128662 7.56691L18.004 7.56691V5.8911L0.128662 5.8911L0.128662 7.56691Z"
          fill="#797979"
        />
      </svg>
    </div>
  </div>
}
` }]
  }], null, { category: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesCardComponent, { className: "CategoriesCardComponent", filePath: "libs/frontend/home/ui/src/lib/categories-card/categories-card.ts", lineNumber: 13 });
})();

// libs/frontend/home/feature-home-page/src/lib/pages/main.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.category;
function MainComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 76);
  }
}
function MainComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 77);
  }
}
function MainComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "img", 79);
    \u0275\u0275elementStart(2, "div", 80)(3, "h4", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 82);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 81);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 83);
    \u0275\u0275text(10, " Shop Now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.description);
  }
}
function MainComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 84);
    \u0275\u0275elementStart(2, "div", 85)(3, "h4", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 88);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 89);
    \u0275\u0275text(10, " Explore Items ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r2.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.description);
  }
}
function MainComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 90);
  }
}
function MainComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 91);
  }
}
function MainComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 92);
    \u0275\u0275element(1, "img", 93);
    \u0275\u0275elementStart(2, "h3", 94);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r3.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.title);
  }
}
function MainComponent_For_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-categories-card", 57);
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    \u0275\u0275property("category", category_r4);
  }
}
function MainComponent_For_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-categories-card", 57);
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    \u0275\u0275property("category", category_r5);
  }
}
function MainComponent_For_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 71);
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    \u0275\u0275property("product", product_r6);
  }
}
function MainComponent_ng_template_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96);
    \u0275\u0275element(2, "div", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 98);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 99);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", "url(" + item_r7.image + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.description);
  }
}
var MainComponent = class _MainComponent {
  categoryService = inject(CategoriesService);
  categoriesMen = [];
  categoriesWoman = [];
  productsInTheLimelight = [];
  // В компоненте
  slides = [
    {
      image: "/assets/images/shop-slide-1.png",
      category: "T-Shirt / Tops",
      title: "Summer Value Pack",
      description: "cool / colorful / comfy"
    },
    {
      image: "/assets/images/shop-slide-2.jpg",
      category: "Jackets / Coats",
      title: "Winter Collection",
      description: "warm / stylish / trendy"
    }
  ];
  discounts = [
    {
      image: "/assets/images/discounts-main-one.png",
      category: "Low Price",
      title: "High Coziness",
      description: "UPTO 50% OFF"
    },
    {
      image: "/assets/images/discounts-main-two.png",
      category: "Beyoung Presents",
      title: "Breezy Summer Style",
      description: "UPTO 50% OFF"
    }
  ];
  feedback = [
    {
      image: "/assets/images/feedback/feedback-person-1.png",
      rating: 5,
      name: "Floyd Miles",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      image: "/assets/images/feedback/feedback-person-2.png",
      rating: 3.5,
      name: "Name",
      description: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      image: "/assets/images/feedback/feedback-person-3.png",
      rating: 4,
      name: "Savannah Nguyen",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      image: "/assets/images/feedback/feedback-person-4.png",
      rating: 5,
      name: "Name Last",
      description: "Feedback"
    },
    {
      image: "/assets/images/feedback/feedback-person-5.png",
      rating: 4,
      name: "Name",
      description: "Feedback"
    }
  ];
  newArrival = [
    {
      image: "/assets/images/arrival/item-1.png",
      title: "Knitted Joggers"
    },
    {
      image: "/assets/images/arrival/item-2.png",
      title: "Full Sleeve"
    },
    {
      image: "/assets/images/arrival/item-3.png",
      title: "Active T-Shirts"
    },
    {
      image: "/assets/images/arrival/item-4.png",
      title: "Urban Shirts"
    },
    {
      image: "/assets/images/arrival/item-5.png",
      title: "Plain T-Shirt"
    }
  ];
  ngOnInit() {
    this.categoriesMen = this.categoryService.getCategoriesMen();
    this.categoriesWoman = this.categoryService.getCategoriesWoman();
  }
  static \u0275fac = function MainComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainComponent, selectors: [["app-main"]], decls: 155, vars: 21, consts: [[1, "main-carousel", 3, "value", "numVisible", "numScroll", "circular", "autoplayInterval", "showNavigators", "showIndicators"], ["pTemplate", "previousicon"], ["pTemplate", "nexticon"], ["pTemplate", "item", 1, "main-carousel"], [1, "container", "flex", "justify-center", "gap-10", "mx-auto", "mt-[130px]"], [1, "relative", "text-white", "w-[50rem]", "group"], [1, "container", "mx-auto", "mt-[100px]"], [1, "flex", "items-center", "mb-[70px]"], [1, "rounded-xl", "w-[8px]", "h-[37px]", "bg-[#8a33fd]"], [1, "text-4xl", "ml-4", "font-semibold", "text-[#3c4242]"], [3, "value", "numVisible", "numScroll", "circular", "autoplayInterval", "showNavigators", "showIndicators"], ["pTemplate", "item"], [1, "w-full"], [1, "flex", "gap-[20px]", "mb-[15px]"], [1, "flex-1", "flex", "items-center", "bg-[url('/assets/images/saving_zone_person-5.png')]", "bg-cover", "bg-center", "rounded-xl", "h-[400px]", "md:h-[450px]", "lg:h-[500px]"], [1, "ml-[20px]", "font-coresans", "flex", "flex-col", "w-[11rem]", "font-semibold", "text-white"], [1, "text-[1.75rem]"], [1, "text-sm", "mt-[15px]"], [1, "text-lg", "mt-[10px]"], [1, "flex", "justify-center", "mt-[31px]"], ["width", "23", "height", "26", "viewBox", "0 0 23 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "transform", "transition-transform", "hover:translate-y-[6px]"], ["d", "M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958", "stroke", "white", "stroke-width", "2", "stroke-linecap", "round"], ["href", "#", 1, "self-center", "font-family", "font-medium", "text-xs!", "flex", "items-center", "justify-center", "mt-[40px]", "border", "border-white", "rounded", "text-white", "w-[100px]", "h-[32px]", "text-sm", "px-2", "py-3", "md:w-[111px]", "md:h-[34px]", "md:text-base", "md:px-2", "md:py-4", "hover:bg-white", "hover:text-black", "transition"], [1, "flex-1", "flex", "items-center", "justify-end", "bg-[url('/assets/images/saving_zone_person-4.png')]", "bg-cover", "bg-center", "rounded-xl", "h-[400px]", "md:h-[450px]", "lg:h-[500px]"], [1, "mr-[20px]", "ml-auto", "font-coresans", "flex", "flex-col", "w-[12.7rem]", "font-semibold", "text-white"], [1, "bg-[#3c4242]", "text-xs", "rounded-[4px]", "px-2", "py-4", "w-[104px]", "h-[34px]", "text-white", "text-center", "flex", "items-center", "justify-center", "ml-auto"], [1, "text-[1.75rem]", "mt-[30px]", "ml-auto"], [1, "text-sm", "mt-[15px]", "ml-auto"], [1, "text-lg", "mt-[10px]", "ml-auto"], [1, "mt-[31px]", "ml-auto", "pr-11"], ["href", "#", 1, "self-center", "font-family", "font-medium", "text-xs!", "flex", "items-center", "justify-center", "mt-[40px]", "border", "border-white", "rounded", "text-white", "w-[100px]", "h-[32px]", "text-sm", "px-2", "py-3", "md:w-[111px]", "md:h-[34px]", "md:text-base", "md:px-2", "md:py-4", "hover:bg-white", "hover:text-black", "transition", "ml-auto"], [1, "flex-1", "flex", "items-center", "justify-start", "bg-[url('/assets/images/saving_zone_person-3.png')]", "bg-cover", "bg-center", "rounded-xl", "h-[400px]", "md:h-[450px]", "lg:h-[500px]"], [1, "mr-[17px]", "ml-auto", "font-coresans", "flex", "flex-col", "text-left", "w-[12rem]", "font-semibold", "color-active"], [1, "text-[1.75rem]", "mt-[30px]"], ["width", "23", "height", "27", "viewBox", "0 0 23 27", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "transform", "transition-transform", "hover:translate-y-[6px]"], ["d", "M11.5678 1.61938L11.5678 24.2225M22 15.529L12.7972 24.7318C12.1182 25.4108 11.0173 25.4108 10.3383 24.7318L1.13557 15.529", "stroke", "#3C4242", "stroke-width", "2", "stroke-linecap", "round"], ["href", "#", 1, "self-center", "font-family", "font-medium", "text-xs!", "flex", "items-center", "justify-center", "mt-[40px]", "border", "border-[3c4242]", "rounded", "color-active", "w-[111px]", "h-[34px]", "text-sm", "px-2", "py-3", "md:w-[111px]", "md:h-[34px]", "md:text-base", "md:px-2", "md:py-4", "hover:bg-[#3c4242]", "hover:text-white", "hover:border-[#3c4242]", "transition"], [1, "flex", "gap-[20px]"], [1, "flex-1", "flex", "items-center", "justify-between", "bg-[url('/assets/images/saving_zone_person-2.png')]", "bg-cover", "bg-center", "rounded-xl", "h-[400px]", "md:h-[450px]", "lg:h-[500px]"], [1, "font-coresans", "flex", "flex-col", "text-left", "color-active", "ml-[60%]", "w-[10rem]", "font-semibold", "color-active"], [1, "text-4xl"], [1, "font-medium", "text-base", "mt-[15px]"], [1, "text-xl", "mt-[15px]"], [1, "flex", "justify-center", "mt-[55px]"], ["width", "27", "height", "31", "viewBox", "0 0 23 27", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "transform", "transition-transform", "hover:translate-y-[6px]"], ["href", "#", 1, "self-center", "font-family", "font-medium", "text-xs!", "flex", "items-center", "justify-center", "mt-[55px]", "border-2", "border-[3c4242]", "rounded", "color-active", "w-[132px]", "h-[36px]", "text-sm", "px-2", "py-3", "md:w-[111px]", "md:h-[34px]", "md:text-base", "md:px-2", "md:py-4", "hover:bg-[#3c4242]", "hover:text-white", "hover:border-[#3c4242]", "transition"], [1, "flex-1", "flex", "items-center", "justify-between", "bg-[url('/assets/images/saving_zone_person-1.png')]", "bg-cover", "bg-center", "rounded-xl", "h-[400px]", "md:h-[450px]", "lg:h-[500px]"], [1, "w-full", "mt-[100px]"], [1, "flex"], [1, "flex-1", "flex", "justify-center", "items-center", "bg-[url('/assets/images/saving_zone-1.png')]", "bg-cover", "bg-center", "rounded-s-xl", "h-[640px]"], [1, "font-coresans", "text-white", "w-lg"], [1, "font-bold", "text-4xl"], [1, "font-light", "text-base", "mt-[15px]", "w-sm"], ["href", "#", 1, "self-center", "font-family", "font-medium", "flex", "items-center", "justify-center", "mt-[50px]", "rounded-lg", "color-active", "w-[168px]", "h-[46px]", "text-lg", "bg-[#fff]", "text-[#3c4242]", "border-2", "border-transparent", "px-2", "py-3", "text-lg", "md:w-[141px]", "md:h-[44px]", "md:text-base", "md:px-2", "md:py-4", "hover:bg-transparent", "hover:text-white", "hover:border-[#fff]", "transition"], [1, "flex-1", "bg-[url('/assets/images/saving_zone-2.png')]", "bg-cover", "bg-center", "rounded-e-xl", "h-[640px]"], [1, "w-full", "flex", "justify-center"], [1, "flex", "flex-wrap", "gap-[50px]"], [3, "category"], [1, "container", "mx-auto", "w-full", "h-[358px]", "bg-[#3c4242]", "rounded-xl", "mt-[100px]"], [1, "flex", "flex-col", "items-center"], [1, "text-5xl", "ml-4", "font-bold", "mt-[43px]", "text-white"], [1, "mt-[30px]", "text-2xl", "font-normal", "text-white"], [1, "text-yellow-400"], [1, "flex", "mt-[70px]", "gap-7"], ["src", "/assets/images/top-brands-deal/nike.png", "alt", "NikeBrand", 1, "transition-transform", "duration-200", "transform", "hover:translate-y-[-8px]"], ["src", "/assets/images/top-brands-deal/hn.png", "alt", "HMBrand", 1, "transition-transform", "duration-200", "transform", "hover:translate-y-[-8px]"], ["src", "/assets/images/top-brands-deal/levis.png", "alt", "LevisBrand", 1, "transition-transform", "duration-200", "transform", "hover:translate-y-[-8px]"], ["src", "/assets/images/top-brands-deal/polo.png", "alt", "PoloBrand", 1, "transition-transform", "duration-200", "transform", "hover:translate-y-[-8px]"], ["src", "/assets/images/top-brands-deal/puma.png", "alt", "PumaBrand", 1, "transition-transform", "duration-200", "transform", "hover:translate-y-[-8px]"], [1, "container", "mx-auto", "mt-25"], [1, "flex", "flex-wrap", "gap-12.5"], [3, "product"], [1, "container", "mx-auto", "mt-25", "mb-25"], [1, "flex", "items-center", "mb-17.5"], [1, "rounded-xl", "w-2", "h-9.25", "bg-[#8a33fd]"], [1, "feedback-carousel", 3, "value", "numVisible", "numScroll", "circular", "autoplayInterval", "showNavigators", "showIndicators"], ["src", "/assets/images/icons/carousel-control-prev.svg", "width", "24", "height", "45", "alt", "carousel-control"], ["src", "/assets/images/icons/carousel-control-next.svg", "width", "24", "height", "45", "alt", "carousel-control"], [1, "slide"], ["alt", "Slide Image", 1, "slide-img", 3, "src"], [1, "content", "w-md"], [1, "font-coresans", "font-medium", "text-3xl", "mb-[40px]"], [1, "font-coresans", "font-extrabold", "text-7xl", "leading-[<20%>]", "mb-[40px]"], ["routerLink", "/products", 1, "inline-flex", "items-center", "justify-center", "w-3xs", "h-[64px]", "rounded-lg", "bg-white", "font-family", "font-bold", "text-black", "text-xl", "cursor-pointer", "transition-transform", "duration-150", "ease-in-out", "hover:scale-97"], ["alt", "Discounts Image", 1, "object-cover", "rounded-xl", "w-[50rem]", 3, "src"], [1, "absolute", "top-0", "w-xs", "pt-[97px]", "pl-[30px]"], [1, "font-coresans", "font-extrabold", "text-lg", "mb-[14px]"], [1, "font-coresans", "font-extrabold", "text-4xl", "leading-[<20%>]", "mb-[10px]"], [1, "font-coresans", "font-medium", "text-base", "mb-[60px]"], ["href", "#", 1, "text-xl", "font-extrabold", "relative", "inline-block", "after:content-['']", "after:absolute", "after:left-0", "after:bottom-0", "after:h-[2px]", "after:bg-white", "after:w-0", "group-hover:after:w-full", "after:transition-all", "after:duration-300"], ["src", "/assets/images/icons/arrow-arrial-left.svg", "width", "13.59", "height", "12", "alt", "carousel-control"], ["src", "/assets/images/icons/arrow-arrial-right.svg", "width", "13.59", "height", "12", "alt", "carousel-control"], ["href", "#", 1, "arrival-slide", "pl-12", "block", "w-[262px]", "h-[319px]"], ["alt", "Slide Image", 1, "h-[262px]", "object-cover", "rounded-xl", 3, "src"], [1, "font-family", "font-bold", "text-xl", "mt-[33px]"], [1, "border-[1.8px]", "border-[#bebcbd]", "rounded-[10px]", "p-6", "w-[30rem]", "h-[292px]", "sm:w-full", "md:w-[22rem]", "lg:w-[26rem]", "xl:w-[30rem]"], [1, "flex", "justify-between"], [1, "w-[57px]", "h-[57px]", "bg-cover", "bg-center"], [1, "mt-[20px]", "font-medium", "text-2xl", "text-[#3c4242]"], [1, "mt-[20px]", "font-normal", "text-sm!", "text-[#807d7e]"]], template: function MainComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-carousel", 0);
      \u0275\u0275template(1, MainComponent_ng_template_1_Template, 1, 0, "ng-template", 1)(2, MainComponent_ng_template_2_Template, 1, 0, "ng-template", 2)(3, MainComponent_ng_template_3_Template, 11, 4, "ng-template", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "section", 4);
      \u0275\u0275repeaterCreate(5, MainComponent_For_6_Template, 11, 4, "div", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "section", 6)(8, "div", 7);
      \u0275\u0275element(9, "span", 8);
      \u0275\u0275elementStart(10, "h2", 9);
      \u0275\u0275text(11, "New Arrival");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p-carousel", 10);
      \u0275\u0275template(13, MainComponent_ng_template_13_Template, 1, 0, "ng-template", 1)(14, MainComponent_ng_template_14_Template, 1, 0, "ng-template", 2)(15, MainComponent_ng_template_15_Template, 4, 2, "ng-template", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "section", 6)(17, "div", 7);
      \u0275\u0275element(18, "span", 8);
      \u0275\u0275elementStart(19, "h2", 9);
      \u0275\u0275text(20, "Big Saving Zone");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "h1", 16);
      \u0275\u0275text(26, "Hawaiian Shirts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h2", 17);
      \u0275\u0275text(28, "Dress up in summer vibe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h3", 18);
      \u0275\u0275text(30, "UPTO 50% OFF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 20);
      \u0275\u0275element(33, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "a", 22);
      \u0275\u0275text(35, " SHOP NOW ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 23)(37, "div", 24)(38, "div", 25);
      \u0275\u0275text(39, " Limited Stock ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "h1", 26);
      \u0275\u0275text(41, " Printed");
      \u0275\u0275element(42, "br");
      \u0275\u0275text(43, " T-Shirt ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h2", 27);
      \u0275\u0275text(45, "New Designs Every Week");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "h3", 28);
      \u0275\u0275text(47, "UPTO 40% OFF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 29);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(49, "svg", 20);
      \u0275\u0275element(50, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "a", 30);
      \u0275\u0275text(52, " SHOP NOW ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 31)(54, "div", 32)(55, "h1", 33);
      \u0275\u0275text(56, "Cargo Joggers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "h2", 17);
      \u0275\u0275text(58, "Move with style & comfort");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h3", 18);
      \u0275\u0275text(60, "UPTO 50% OFF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(62, "svg", 34);
      \u0275\u0275element(63, "path", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(64, "a", 36);
      \u0275\u0275text(65, " SHOP NOW ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "div", 37)(67, "div", 38)(68, "div", 39)(69, "h1", 40);
      \u0275\u0275text(70, "Urban Shirts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "h2", 41);
      \u0275\u0275text(72, "Live In Confort");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "h3", 42);
      \u0275\u0275text(74, "FLAT 60% OFF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 43);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(76, "svg", 44);
      \u0275\u0275element(77, "path", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(78, "a", 45);
      \u0275\u0275text(79, " SHOP NOW ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "div", 46)(81, "div", 39)(82, "h1", 40);
      \u0275\u0275text(83, "Oversized ");
      \u0275\u0275element(84, "br");
      \u0275\u0275text(85, "T-Shirts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "h2", 41);
      \u0275\u0275text(87, "Street Style Icon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "h3", 42);
      \u0275\u0275text(89, "FLAT 60% OFF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 43);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(91, "svg", 44);
      \u0275\u0275element(92, "path", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(93, "a", 45);
      \u0275\u0275text(94, " SHOP NOW ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(95, "div", 47)(96, "div", 48)(97, "div", 49)(98, "div", 50)(99, "h1", 51);
      \u0275\u0275text(100, "WE MADE YOUR EVERYDAY FASHION BETTER!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "h2", 52);
      \u0275\u0275text(102, " In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "a", 53);
      \u0275\u0275text(104, " Shop Now ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(105, "div", 54);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(106, "section", 6)(107, "div", 7);
      \u0275\u0275element(108, "span", 8);
      \u0275\u0275elementStart(109, "h2", 9);
      \u0275\u0275text(110, "Categories For Men");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 55)(112, "div", 56);
      \u0275\u0275repeaterCreate(113, MainComponent_For_114_Template, 1, 1, "app-categories-card", 57, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "section", 6)(116, "div", 7);
      \u0275\u0275element(117, "span", 8);
      \u0275\u0275elementStart(118, "h2", 9);
      \u0275\u0275text(119, "Categories For Women");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 55)(121, "div", 56);
      \u0275\u0275repeaterCreate(122, MainComponent_For_123_Template, 1, 1, "app-categories-card", 57, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "section", 58)(125, "div", 59)(126, "h2", 60);
      \u0275\u0275text(127, "Top Brands Deal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "h3", 61);
      \u0275\u0275text(129, " Up To ");
      \u0275\u0275elementStart(130, "span", 62);
      \u0275\u0275text(131, "60%");
      \u0275\u0275elementEnd();
      \u0275\u0275text(132, " off on brands ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 63);
      \u0275\u0275element(134, "img", 64)(135, "img", 65)(136, "img", 66)(137, "img", 67)(138, "img", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "section", 69)(140, "div", 7);
      \u0275\u0275element(141, "span", 8);
      \u0275\u0275elementStart(142, "h2", 9);
      \u0275\u0275text(143, "In The Limelight");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 55)(145, "div", 70);
      \u0275\u0275repeaterCreate(146, MainComponent_For_147_Template, 1, 1, "app-product-card", 71, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "section", 72)(149, "div", 73);
      \u0275\u0275element(150, "span", 74);
      \u0275\u0275elementStart(151, "h2", 9);
      \u0275\u0275text(152, "Feedback");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "p-carousel", 75);
      \u0275\u0275template(154, MainComponent_ng_template_154_Template, 7, 4, "ng-template", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("value", ctx.slides)("numVisible", 1)("numScroll", 1)("circular", true)("autoplayInterval", 1e4)("showNavigators", true)("showIndicators", true);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.discounts);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.newArrival)("numVisible", 4)("numScroll", 1)("circular", true)("autoplayInterval", false)("showNavigators", true)("showIndicators", false);
      \u0275\u0275advance(101);
      \u0275\u0275repeater(ctx.categoriesMen);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.categoriesWoman);
      \u0275\u0275advance(24);
      \u0275\u0275repeater(ctx.productsInTheLimelight);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.feedback)("numVisible", 3)("numScroll", 1)("circular", false)("autoplayInterval", 5e3)("showNavigators", false)("showIndicators", true);
    }
  }, dependencies: [
    CommonModule,
    Carousel,
    GalleriaModule,
    PrimeTemplate,
    CategoriesCardComponent,
    ProductCardComponent,
    RouterLink
  ], styles: ['\n\n  .main-carousel .p-carousel-content {\n  gap: 0 !important;\n}\n  .main-carousel .p-carousel-content .slide {\n  height: 100vh;\n  position: relative;\n}\n  .main-carousel .p-carousel-content .slide .slide-img {\n  width: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n  .main-carousel .p-carousel-content .slide .content {\n  position: absolute;\n  top: 129px;\n  left: 193px;\n  color: white;\n  z-index: 1;\n}\n  .main-carousel .p-carousel-content .slide main-slide-button {\n  width: 250px !important;\n  height: 61px !important;\n  border: none !important;\n  border-radius: 8px !important;\n  background: white !important;\n  color: #000 !important;\n  font-family: "Causten", sans-serif;\n  font-weight: 700 !important;\n  font-size: 24px !important;\n}\n  .main-carousel .p-carousel-content .p-carousel-prev-button button {\n  position: absolute !important;\n  top: 60% !important;\n  left: 40px !important;\n  z-index: 2;\n}\n  .main-carousel .p-carousel-content .p-carousel-prev-button button:hover {\n  background: transparent;\n}\n  .main-carousel .p-carousel-content .p-carousel-next-button button {\n  position: absolute !important;\n  top: 60% !important;\n  right: 40px !important;\n  z-index: 2;\n}\n  .main-carousel .p-carousel-content .p-carousel-next-button button:hover {\n  background: transparent;\n}\n  .main-carousel .p-carousel-content-container .p-carousel-indicator-list {\n  position: absolute !important;\n  bottom: -5% !important;\n  left: 50% !important;\n  transform: translateX(-50%) !important;\n  z-index: 2 !important;\n  gap: 0 !important;\n  display: flex !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  list-style: none !important;\n}\n  .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator button.p-carousel-indicator-button {\n  width: 80px;\n  height: 13px;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.3);\n  padding: 0;\n  transition: all 0.3s ease;\n  border-radius: 0;\n  cursor: pointer;\n}\n  .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator:first-child button.p-carousel-indicator-button {\n  border-top-left-radius: 999px;\n  border-bottom-left-radius: 999px;\n}\n  .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator:last-child button.p-carousel-indicator-button {\n  border-top-right-radius: 999px;\n  border-bottom-right-radius: 999px;\n}\n  .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator.p-carousel-indicator-active button.p-carousel-indicator-button {\n  background-color: #fff;\n  width: 80px;\n}\n  .feedback-carousel {\n  width: 100%;\n  overflow: hidden;\n}\n  .feedback-carousel .p-carousel-content {\n  display: flex !important;\n  justify-content: center !important;\n  flex-wrap: wrap !important;\n}\n  .feedback-carousel .p-carousel-items-content {\n  flex-wrap: wrap !important;\n  display: flex !important;\n  justify-content: center !important;\n}\n  .feedback-carousel .p-carousel-item-list {\n  display: flex;\n  gap: 38px !important;\n  justify-content: center !important;\n}\n  .feedback-carousel .p-carousel-item {\n  flex: 0 0 auto !important;\n}\n  .feedback-carousel .p-carousel-indicators {\n  display: flex !important;\n  justify-content: center !important;\n  margin-top: 1rem;\n}\n  .feedback-carousel .p-carousel-indicator-list {\n  gap: 8px !important;\n}\n  .feedback-carousel .p-carousel-indicator-button {\n  width: 10px !important;\n  height: 10px !important;\n  background: #d1d1d1 !important;\n  border-radius: 50%;\n}\n  .feedback-carousel .p-carousel-indicator-active .p-carousel-indicator-button {\n  background: #3c4242 !important;\n}\n/*# sourceMappingURL=main.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainComponent, [{
    type: Component,
    args: [{ selector: "app-main", imports: [
      CommonModule,
      Carousel,
      GalleriaModule,
      CategoriesCardComponent,
      ProductCardComponent,
      RouterLink
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<p-carousel
  [value]="slides"
  class="main-carousel"
  [numVisible]="1"
  [numScroll]="1"
  [circular]="true"
  [autoplayInterval]="10000"
  [showNavigators]="true"
  [showIndicators]="true"
>
  <ng-template pTemplate="previousicon">
    <img
      src="/assets/images/icons/carousel-control-prev.svg"
      width="24"
      height="45"
      alt="carousel-control"
    />
  </ng-template>
  <ng-template pTemplate="nexticon">
    <img
      src="/assets/images/icons/carousel-control-next.svg"
      width="24"
      height="45"
      alt="carousel-control"
    />
  </ng-template>

  <ng-template class="main-carousel" pTemplate="item" let-item>
    <div class="slide">
      <img [src]="item.image" alt="Slide Image" class="slide-img" />
      <div class="content w-md">
        <h4 class="font-coresans font-medium text-3xl mb-[40px]">{{ item.category }}</h4>
        <h2 class="font-coresans font-extrabold text-7xl leading-[<20%>] mb-[40px]">
          {{ item.title }}
        </h2>
        <p class="font-coresans font-medium text-3xl mb-[40px]">{{ item.description }}</p>
        <a
          routerLink="/products"
          class="inline-flex items-center justify-center w-3xs h-[64px] rounded-lg bg-white font-family font-bold text-black text-xl cursor-pointer transition-transform duration-150 ease-in-out hover:scale-97"
        >
          Shop Now
        </a>
      </div>
    </div>
  </ng-template>
</p-carousel>
<section class="container flex justify-center gap-10 mx-auto mt-[130px]">
  @for (item of discounts; track item.title) {
    <div class="relative text-white w-[50rem] group">
      <img [src]="item.image" alt="Discounts Image" class="object-cover rounded-xl w-[50rem]" />
      <div class="absolute top-0 w-xs pt-[97px] pl-[30px]">
        <h4 class="font-coresans font-extrabold text-lg mb-[14px]">{{ item.category }}</h4>
        <h2 class="font-coresans font-extrabold text-4xl leading-[<20%>] mb-[10px]">
          {{ item.title }}
        </h2>
        <p class="font-coresans font-medium text-base mb-[60px]">{{ item.description }}</p>
        <a
          href="#"
          class="text-xl font-extrabold relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-0 group-hover:after:w-full after:transition-all after:duration-300"
        >
          Explore Items
        </a>
      </div>
    </div>
  }
</section>
<section class="container mx-auto mt-[100px]">
  <div class="flex items-center mb-[70px]">
    <span class="rounded-xl w-[8px] h-[37px] bg-[#8a33fd]"></span>
    <h2 class="text-4xl ml-4 font-semibold text-[#3c4242]">New Arrival</h2>
  </div>
  <p-carousel
    [value]="newArrival"
    [numVisible]="4"
    [numScroll]="1"
    [circular]="true"
    [autoplayInterval]="false"
    [showNavigators]="true"
    [showIndicators]="false"
  >
    <ng-template pTemplate="previousicon">
      <img
        src="/assets/images/icons/arrow-arrial-left.svg"
        width="13.59"
        height="12"
        alt="carousel-control"
      />
    </ng-template>
    <ng-template pTemplate="nexticon">
      <img
        src="/assets/images/icons/arrow-arrial-right.svg"
        width="13.59"
        height="12"
        alt="carousel-control"
      />
    </ng-template>

    <ng-template pTemplate="item" let-item>
      <a href="#" class="arrival-slide pl-12 block w-[262px] h-[319px]">
        <img [src]="item.image" alt="Slide Image" class="h-[262px] object-cover rounded-xl" />
        <h3 class="font-family font-bold text-xl mt-[33px]">{{ item.title }}</h3>
      </a>
    </ng-template>
  </p-carousel>
</section>
<section class="container mx-auto mt-[100px]">
  <div class="flex items-center mb-[70px]">
    <span class="rounded-xl w-[8px] h-[37px] bg-[#8a33fd]"></span>
    <h2 class="text-4xl ml-4 font-semibold text-[#3c4242]">Big Saving Zone</h2>
  </div>
  <div class="w-full">
    <!-- \u041F\u0435\u0440\u0432\u044B\u0439 \u0440\u044F\u0434 -->
    <div class="flex gap-[20px] mb-[15px]">
      <div
        class="flex-1 flex items-center bg-[url('/assets/images/saving_zone_person-5.png')] bg-cover bg-center rounded-xl h-[400px] md:h-[450px] lg:h-[500px]"
      >
        <div class="ml-[20px] font-coresans flex flex-col w-[11rem] font-semibold text-white">
          <h1 class="text-[1.75rem]">Hawaiian Shirts</h1>
          <h2 class="text-sm mt-[15px]">Dress up in summer vibe</h2>
          <h3 class="text-lg mt-[10px]">UPTO 50% OFF</h3>
          <div class="flex justify-center mt-[31px]">
            <svg
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transform transition-transform hover:translate-y-[6px]"
            >
              <path
                d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <a
            href="#"
            class="self-center font-family font-medium text-xs! flex items-center justify-center mt-[40px] border border-white rounded text-white w-[100px] h-[32px] text-sm px-2 py-3 md:w-[111px] md:h-[34px] md:text-base md:px-2 md:py-4 hover:bg-white hover:text-black transition"
          >
            SHOP NOW
          </a>
        </div>
      </div>
      <div
        class="flex-1 flex items-center justify-end bg-[url('/assets/images/saving_zone_person-4.png')] bg-cover bg-center rounded-xl h-[400px] md:h-[450px] lg:h-[500px]"
      >
        <div
          class="mr-[20px] ml-auto font-coresans flex flex-col w-[12.7rem] font-semibold text-white"
        >
          <div
            class="bg-[#3c4242] text-xs rounded-[4px] px-2 py-4 w-[104px] h-[34px] text-white text-center flex items-center justify-center ml-auto"
          >
            Limited Stock
          </div>
          <h1 class="text-[1.75rem] mt-[30px] ml-auto">
            Printed<br />
            T-Shirt
          </h1>
          <h2 class="text-sm mt-[15px] ml-auto">New Designs Every Week</h2>
          <h3 class="text-lg mt-[10px] ml-auto">UPTO 40% OFF</h3>
          <div class="mt-[31px] ml-auto pr-11">
            <svg
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transform transition-transform hover:translate-y-[6px]"
            >
              <path
                d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <a
            href="#"
            class="self-center font-family font-medium text-xs! flex items-center justify-center mt-[40px] border border-white rounded text-white w-[100px] h-[32px] text-sm px-2 py-3 md:w-[111px] md:h-[34px] md:text-base md:px-2 md:py-4 hover:bg-white hover:text-black transition ml-auto"
          >
            SHOP NOW
          </a>
        </div>
      </div>
      <div
        class="flex-1 flex items-center justify-start bg-[url('/assets/images/saving_zone_person-3.png')] bg-cover bg-center rounded-xl h-[400px] md:h-[450px] lg:h-[500px]"
      >
        <div
          class="mr-[17px] ml-auto font-coresans flex flex-col text-left w-[12rem] font-semibold color-active"
        >
          <h1 class="text-[1.75rem] mt-[30px]">Cargo Joggers</h1>
          <h2 class="text-sm mt-[15px]">Move with style & comfort</h2>
          <h3 class="text-lg mt-[10px]">UPTO 50% OFF</h3>
          <div class="flex justify-center mt-[31px]">
            <svg
              width="23"
              height="27"
              viewBox="0 0 23 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transform transition-transform hover:translate-y-[6px]"
            >
              <path
                d="M11.5678 1.61938L11.5678 24.2225M22 15.529L12.7972 24.7318C12.1182 25.4108 11.0173 25.4108 10.3383 24.7318L1.13557 15.529"
                stroke="#3C4242"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <a
            href="#"
            class="self-center font-family font-medium text-xs! flex items-center justify-center mt-[40px] border border-[3c4242] rounded color-active w-[111px] h-[34px] text-sm px-2 py-3 md:w-[111px] md:h-[34px] md:text-base md:px-2 md:py-4 hover:bg-[#3c4242] hover:text-white hover:border-[#3c4242] transition"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </div>

    <!-- \u0412\u0442\u043E\u0440\u043E\u0439 \u0440\u044F\u0434 -->
    <div class="flex gap-[20px]">
      <div
        class="flex-1 flex items-center justify-between bg-[url('/assets/images/saving_zone_person-2.png')] bg-cover bg-center rounded-xl h-[400px] md:h-[450px] lg:h-[500px]"
      >
        <div
          class="font-coresans flex flex-col text-left color-active ml-[60%] w-[10rem] font-semibold color-active"
        >
          <h1 class="text-4xl">Urban Shirts</h1>
          <h2 class="font-medium text-base mt-[15px]">Live In Confort</h2>
          <h3 class="text-xl mt-[15px]">FLAT 60% OFF</h3>
          <div class="flex justify-center mt-[55px]">
            <svg
              width="27"
              height="31"
              viewBox="0 0 23 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transform transition-transform hover:translate-y-[6px]"
            >
              <path
                d="M11.5678 1.61938L11.5678 24.2225M22 15.529L12.7972 24.7318C12.1182 25.4108 11.0173 25.4108 10.3383 24.7318L1.13557 15.529"
                stroke="#3C4242"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <a
            href="#"
            class="self-center font-family font-medium text-xs! flex items-center justify-center mt-[55px] border-2 border-[3c4242] rounded color-active w-[132px] h-[36px] text-sm px-2 py-3 md:w-[111px] md:h-[34px] md:text-base md:px-2 md:py-4 hover:bg-[#3c4242] hover:text-white hover:border-[#3c4242] transition"
          >
            SHOP NOW
          </a>
        </div>
      </div>
      <div
        class="flex-1 flex items-center justify-between bg-[url('/assets/images/saving_zone_person-1.png')] bg-cover bg-center rounded-xl h-[400px] md:h-[450px] lg:h-[500px]"
      >
        <div
          class="font-coresans flex flex-col text-left color-active ml-[60%] w-[10rem] font-semibold color-active"
        >
          <h1 class="text-4xl">Oversized <br />T-Shirts</h1>
          <h2 class="font-medium text-base mt-[15px]">Street Style Icon</h2>
          <h3 class="text-xl mt-[15px]">FLAT 60% OFF</h3>
          <div class="flex justify-center mt-[55px]">
            <svg
              width="27"
              height="31"
              viewBox="0 0 23 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transform transition-transform hover:translate-y-[6px]"
            >
              <path
                d="M11.5678 1.61938L11.5678 24.2225M22 15.529L12.7972 24.7318C12.1182 25.4108 11.0173 25.4108 10.3383 24.7318L1.13557 15.529"
                stroke="#3C4242"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <a
            href="#"
            class="self-center font-family font-medium text-xs! flex items-center justify-center mt-[55px] border-2 border-[3c4242] rounded color-active w-[132px] h-[36px] text-sm px-2 py-3 md:w-[111px] md:h-[34px] md:text-base md:px-2 md:py-4 hover:bg-[#3c4242] hover:text-white hover:border-[#3c4242] transition"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full mt-[100px]">
    <div class="flex">
      <div
        class="flex-1 flex justify-center items-center bg-[url('/assets/images/saving_zone-1.png')] bg-cover bg-center rounded-s-xl h-[640px]"
      >
        <div class="font-coresans text-white w-lg">
          <h1 class="font-bold text-4xl">WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
          <h2 class="font-light text-base mt-[15px] w-sm">
            In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range -
            Comfortable & Affordable fashion 24/7
          </h2>
          <a
            href="#"
            class="self-center font-family font-medium flex items-center justify-center mt-[50px] rounded-lg color-active w-[168px] h-[46px] text-lg bg-[#fff] text-[#3c4242] border-2 border-transparent px-2 py-3 text-lg md:w-[141px] md:h-[44px] md:text-base md:px-2 md:py-4 hover:bg-transparent hover:text-white hover:border-[#fff] transition"
          >
            Shop Now
          </a>
        </div>
      </div>
      <div
        class="flex-1 bg-[url('/assets/images/saving_zone-2.png')] bg-cover bg-center rounded-e-xl h-[640px]"
      ></div>
    </div>
  </div>
</section>
<section class="container mx-auto mt-[100px]">
  <div class="flex items-center mb-[70px]">
    <span class="rounded-xl w-[8px] h-[37px] bg-[#8a33fd]"></span>
    <h2 class="text-4xl ml-4 font-semibold text-[#3c4242]">Categories For Men</h2>
  </div>
  <div class="w-full flex justify-center">
    <div class="flex flex-wrap gap-[50px]">
      @for (category of categoriesMen; track category.category) {
        <app-categories-card [category]="category" />
      }
    </div>
  </div>
</section>
<section class="container mx-auto mt-[100px]">
  <div class="flex items-center mb-[70px]">
    <span class="rounded-xl w-[8px] h-[37px] bg-[#8a33fd]"></span>
    <h2 class="text-4xl ml-4 font-semibold text-[#3c4242]">Categories For Women</h2>
  </div>
  <div class="w-full flex justify-center">
    <div class="flex flex-wrap gap-[50px]">
      @for (category of categoriesWoman; track category.category) {
        <app-categories-card [category]="category" />
      }
    </div>
  </div>
</section>
<section class="container mx-auto w-full h-[358px] bg-[#3c4242] rounded-xl mt-[100px]">
  <div class="flex flex-col items-center">
    <h2 class="text-5xl ml-4 font-bold mt-[43px] text-white">Top Brands Deal</h2>
    <h3 class="mt-[30px] text-2xl font-normal text-white">
      Up To <span class="text-yellow-400">60%</span> off on brands
    </h3>
    <div class="flex mt-[70px] gap-7">
      <img
        class="transition-transform duration-200 transform hover:translate-y-[-8px]"
        src="/assets/images/top-brands-deal/nike.png"
        alt="NikeBrand"
      />
      <img
        class="transition-transform duration-200 transform hover:translate-y-[-8px]"
        src="/assets/images/top-brands-deal/hn.png"
        alt="HMBrand"
      />
      <img
        class="transition-transform duration-200 transform hover:translate-y-[-8px]"
        src="/assets/images/top-brands-deal/levis.png"
        alt="LevisBrand"
      />
      <img
        class="transition-transform duration-200 transform hover:translate-y-[-8px]"
        src="/assets/images/top-brands-deal/polo.png"
        alt="PoloBrand"
      />
      <img
        class="transition-transform duration-200 transform hover:translate-y-[-8px]"
        src="/assets/images/top-brands-deal/puma.png"
        alt="PumaBrand"
      />
    </div>
  </div>
</section>
<section class="container mx-auto mt-25">
  <div class="flex items-center mb-[70px]">
    <span class="rounded-xl w-[8px] h-[37px] bg-[#8a33fd]"></span>
    <h2 class="text-4xl ml-4 font-semibold text-[#3c4242]">In The Limelight</h2>
  </div>
  <div class="w-full flex justify-center">
    <div class="flex flex-wrap gap-12.5">
      @for (product of productsInTheLimelight; track $index) {
        <app-product-card [product]="product" />
      }
    </div>
  </div>
</section>
<section class="container mx-auto mt-25 mb-25">
  <div class="flex items-center mb-17.5">
    <span class="rounded-xl w-2 h-9.25 bg-[#8a33fd]"></span>
    <h2 class="text-4xl ml-4 font-semibold text-[#3c4242]">Feedback</h2>
  </div>
  <p-carousel
    [value]="feedback"
    class="feedback-carousel"
    [numVisible]="3"
    [numScroll]="1"
    [circular]="false"
    [autoplayInterval]="5000"
    [showNavigators]="false"
    [showIndicators]="true"
  >
    <ng-template pTemplate="item" let-item>
      <div
        class="border-[1.8px] border-[#bebcbd] rounded-[10px] p-6 w-[30rem] h-[292px] sm:w-full md:w-[22rem] lg:w-[26rem] xl:w-[30rem]"
      >
        <div class="flex justify-between">
          <div
            class="w-[57px] h-[57px] bg-cover bg-center"
            [style.background-image]="'url(' + item.image + ')'"
          ></div>
        </div>
        <h2 class="mt-[20px] font-medium text-2xl text-[#3c4242]">{{ item.name }}</h2>
        <p class="mt-[20px] font-normal text-sm! text-[#807d7e]">{{ item.description }}</p>
      </div>
    </ng-template>
  </p-carousel>
</section>
`, styles: ['/* libs/frontend/home/feature-home-page/src/lib/pages/main.scss */\n::ng-deep .main-carousel .p-carousel-content {\n  gap: 0 !important;\n}\n::ng-deep .main-carousel .p-carousel-content .slide {\n  height: 100vh;\n  position: relative;\n}\n::ng-deep .main-carousel .p-carousel-content .slide .slide-img {\n  width: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n::ng-deep .main-carousel .p-carousel-content .slide .content {\n  position: absolute;\n  top: 129px;\n  left: 193px;\n  color: white;\n  z-index: 1;\n}\n::ng-deep .main-carousel .p-carousel-content .slide main-slide-button {\n  width: 250px !important;\n  height: 61px !important;\n  border: none !important;\n  border-radius: 8px !important;\n  background: white !important;\n  color: #000 !important;\n  font-family: "Causten", sans-serif;\n  font-weight: 700 !important;\n  font-size: 24px !important;\n}\n::ng-deep .main-carousel .p-carousel-content .p-carousel-prev-button button {\n  position: absolute !important;\n  top: 60% !important;\n  left: 40px !important;\n  z-index: 2;\n}\n::ng-deep .main-carousel .p-carousel-content .p-carousel-prev-button button:hover {\n  background: transparent;\n}\n::ng-deep .main-carousel .p-carousel-content .p-carousel-next-button button {\n  position: absolute !important;\n  top: 60% !important;\n  right: 40px !important;\n  z-index: 2;\n}\n::ng-deep .main-carousel .p-carousel-content .p-carousel-next-button button:hover {\n  background: transparent;\n}\n::ng-deep .main-carousel .p-carousel-content-container .p-carousel-indicator-list {\n  position: absolute !important;\n  bottom: -5% !important;\n  left: 50% !important;\n  transform: translateX(-50%) !important;\n  z-index: 2 !important;\n  gap: 0 !important;\n  display: flex !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  list-style: none !important;\n}\n::ng-deep .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator button.p-carousel-indicator-button {\n  width: 80px;\n  height: 13px;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.3);\n  padding: 0;\n  transition: all 0.3s ease;\n  border-radius: 0;\n  cursor: pointer;\n}\n::ng-deep .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator:first-child button.p-carousel-indicator-button {\n  border-top-left-radius: 999px;\n  border-bottom-left-radius: 999px;\n}\n::ng-deep .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator:last-child button.p-carousel-indicator-button {\n  border-top-right-radius: 999px;\n  border-bottom-right-radius: 999px;\n}\n::ng-deep .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator.p-carousel-indicator-active button.p-carousel-indicator-button {\n  background-color: #fff;\n  width: 80px;\n}\n::ng-deep .feedback-carousel {\n  width: 100%;\n  overflow: hidden;\n}\n::ng-deep .feedback-carousel .p-carousel-content {\n  display: flex !important;\n  justify-content: center !important;\n  flex-wrap: wrap !important;\n}\n::ng-deep .feedback-carousel .p-carousel-items-content {\n  flex-wrap: wrap !important;\n  display: flex !important;\n  justify-content: center !important;\n}\n::ng-deep .feedback-carousel .p-carousel-item-list {\n  display: flex;\n  gap: 38px !important;\n  justify-content: center !important;\n}\n::ng-deep .feedback-carousel .p-carousel-item {\n  flex: 0 0 auto !important;\n}\n::ng-deep .feedback-carousel .p-carousel-indicators {\n  display: flex !important;\n  justify-content: center !important;\n  margin-top: 1rem;\n}\n::ng-deep .feedback-carousel .p-carousel-indicator-list {\n  gap: 8px !important;\n}\n::ng-deep .feedback-carousel .p-carousel-indicator-button {\n  width: 10px !important;\n  height: 10px !important;\n  background: #d1d1d1 !important;\n  border-radius: 50%;\n}\n::ng-deep .feedback-carousel .p-carousel-indicator-active .p-carousel-indicator-button {\n  background: #3c4242 !important;\n}\n/*# sourceMappingURL=main.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "libs/frontend/home/feature-home-page/src/lib/pages/main.ts", lineNumber: 26 });
})();
export {
  MainComponent
};
//# sourceMappingURL=chunk-2XCQ7P2K.js.map
