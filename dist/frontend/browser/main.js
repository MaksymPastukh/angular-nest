import {
  FocusTrap
} from "./chunk-G36E6KPD.js";
import {
  ChevronLeftIcon
} from "./chunk-KVYMSTMG.js";
import {
  ProductCardComponent
} from "./chunk-D7DESRAX.js";
import "./chunk-EWMRC4OU.js";
import {
  ImageUrlPipe
} from "./chunk-SKS7KXOA.js";
import {
  AuthSessionService,
  AuthState,
  authForwardGuard,
  authGuard
} from "./chunk-7HICPFIX.js";
import {
  CreateProductStore
} from "./chunk-BKOUHSSR.js";
import {
  Toast
} from "./chunk-PJ62HP3G.js";
import {
  Button,
  ButtonModule
} from "./chunk-VT55VVTS.js";
import {
  AccordionModule,
  UISelect,
  UiAccordionComponent,
  UiAccordionContentSlot,
  UiAccordionHeaderSlot
} from "./chunk-CYXE43MA.js";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  Ripple,
  blockBodyScroll,
  unblockBodyScroll
} from "./chunk-LJIN2HB3.js";
import {
  FRONTEND_CONFIG
} from "./chunk-DOCLYP45.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  FormsModule,
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
  ke,
  providePrimeNG,
  s,
  z,
  zindexutils
} from "./chunk-BEJS4TLU.js";
import {
  DomRendererFactory2,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-JD54KQF2.js";
import {
  CommonModule,
  Footer,
  Header,
  HttpClient,
  MessageService,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  PrimeTemplate,
  SharedModule,
  isPlatformBrowser,
  provideHttpClient,
  withInterceptors
} from "./chunk-SLVXWW7T.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  KeyValueDiffers,
  NgModule,
  NgZone,
  Output,
  RendererFactory2,
  RuntimeError,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  catchError,
  computed,
  effect,
  finalize,
  inject,
  input,
  makeEnvironmentProviders,
  numberAttribute,
  performanceMarkFeature,
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  throwError,
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
  ɵɵinvalidFactory,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IPMWBXXP.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@angular/platform-browser/fesm2022/animations-async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  ngOnDestroy() {
    this._engine?.flush();
  }
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-DKE3CIEA.js").then((m5) => m5);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e59) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(10);
    }).catch((e59) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style3, value, flags) {
    this.delegate.setStyle(el, style3, value, flags);
  }
  removeStyle(el, style3, flags) {
    this.delegate.removeStyle(el, style3, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: () => {
      return new AsyncAnimationRendererFactory(inject(DOCUMENT), inject(DomRendererFactory2), inject(NgZone), type);
    }
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/@primeuix/themes/dist/index.mjs
var t = (...t44) => ke(...t44);

// node_modules/@primeuix/themes/dist/aura/accordion/index.mjs
var o = { transitionDuration: "{transition.duration}" };
var r = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" };
var t2 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var e = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" };
var c = { root: o, panel: r, header: t2, content: e };

// node_modules/@primeuix/themes/dist/aura/autocomplete/index.mjs
var o2 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r2 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d = { padding: "{list.padding}", gap: "{list.gap}" };
var e2 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var i = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c2 = { borderRadius: "{border.radius.sm}" };
var f = { padding: "{list.option.padding}" };
var s2 = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var a = { root: o2, overlay: r2, list: d, option: e2, optionGroup: l, dropdown: i, chip: c2, emptyMessage: f, colorScheme: s2 };

// node_modules/@primeuix/themes/dist/aura/avatar/index.mjs
var e3 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r3 = { size: "1rem" };
var o3 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t3 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i2 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n = { root: e3, icon: r3, group: o3, lg: t3, xl: i2 };

// node_modules/@primeuix/themes/dist/aura/badge/index.mjs
var r4 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o4 = { size: "0.5rem" };
var e4 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c3 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a2 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n2 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d2 = { root: r4, dot: o4, sm: e4, lg: c3, xl: a2, colorScheme: n2 };

// node_modules/@primeuix/themes/dist/aura/base/index.mjs
var r5 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var o5 = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } };
var e5 = { primitive: r5, semantic: o5 };

// node_modules/@primeuix/themes/dist/aura/blockui/index.mjs
var r6 = { borderRadius: "{content.border.radius}" };
var o6 = { root: r6 };

// node_modules/@primeuix/themes/dist/aura/breadcrumb/index.mjs
var o7 = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r7 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i3 = { color: "{navigation.item.icon.color}" };
var t4 = { root: o7, item: r7, separator: i3 };

// node_modules/@primeuix/themes/dist/aura/button/index.mjs
var r8 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o8 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var e6 = { root: r8, colorScheme: o8 };

// node_modules/@primeuix/themes/dist/aura/card/index.mjs
var o9 = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" };
var r9 = { padding: "1.25rem", gap: "0.5rem" };
var t5 = { gap: "0.5rem" };
var e7 = { fontSize: "1.25rem", fontWeight: "500" };
var a3 = { color: "{text.muted.color}" };
var d3 = { root: o9, body: r9, caption: t5, title: e7, subtitle: a3 };

// node_modules/@primeuix/themes/dist/aura/carousel/index.mjs
var r10 = { transitionDuration: "{transition.duration}" };
var o10 = { gap: "0.25rem" };
var a4 = { padding: "1rem", gap: "0.5rem" };
var i4 = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c4 = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } };
var t6 = { root: r10, content: o10, indicatorList: a4, indicator: i4, colorScheme: c4 };

// node_modules/@primeuix/themes/dist/aura/cascadeselect/index.mjs
var o11 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r11 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d4 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l2 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" };
var e8 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var i5 = { color: "{form.field.icon.color}" };
var f2 = { root: o11, dropdown: r11, overlay: d4, list: l2, option: e8, clearIcon: i5 };

// node_modules/@primeuix/themes/dist/aura/checkbox/index.mjs
var r12 = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var o12 = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var e9 = { root: r12, icon: o12 };

// node_modules/@primeuix/themes/dist/aura/chip/index.mjs
var o13 = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r13 = { width: "2rem", height: "2rem" };
var e10 = { size: "1rem" };
var c5 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var i6 = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } };
var s3 = { root: o13, image: r13, icon: e10, removeIcon: c5, colorScheme: i6 };

// node_modules/@primeuix/themes/dist/aura/colorpicker/index.mjs
var r14 = { transitionDuration: "{transition.duration}" };
var o14 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e11 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a5 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var s4 = { root: r14, preview: o14, panel: e11, colorScheme: a5 };

// node_modules/@primeuix/themes/dist/aura/confirmdialog/index.mjs
var o15 = { size: "2rem", color: "{overlay.modal.color}" };
var e12 = { gap: "1rem" };
var r15 = { icon: o15, content: e12 };

// node_modules/@primeuix/themes/dist/aura/confirmpopup/index.mjs
var o16 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r16 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e13 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a6 = { root: o16, content: r16, icon: e13, footer: p };

// node_modules/@primeuix/themes/dist/aura/contextmenu/index.mjs
var o17 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i7 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n3 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a7 = { mobileIndent: "1rem" };
var t7 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r17 = { borderColor: "{content.border.color}" };
var c6 = { root: o17, list: i7, item: n3, submenu: a7, submenuIcon: t7, separator: r17 };

// node_modules/@primeuix/themes/dist/aura/css/index.mjs
var t8 = "\n    li.p-autocomplete-option,\n    div.p-cascadeselect-option-content,\n    li.p-listbox-option,\n    li.p-multiselect-option,\n    li.p-select-option,\n    li.p-listbox-option,\n    div.p-tree-node-content,\n    li.p-datatable-filter-constraint,\n    .p-datatable .p-datatable-tbody > tr,\n    .p-treetable .p-treetable-tbody > tr,\n    div.p-menu-item-content,\n    div.p-tieredmenu-item-content,\n    div.p-contextmenu-item-content,\n    div.p-menubar-item-content,\n    div.p-megamenu-item-content,\n    div.p-panelmenu-header-content,\n    div.p-panelmenu-item-content,\n    th.p-datatable-header-cell,\n    th.p-treetable-header-cell,\n    thead.p-datatable-thead > tr > th,\n    .p-treetable thead.p-treetable-thead>tr>th {\n        transition: none;\n    }\n";

// node_modules/@primeuix/themes/dist/aura/datatable/index.mjs
var o18 = { transitionDuration: "{transition.duration}" };
var r18 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e14 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d5 = { fontWeight: "600" };
var t9 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var l3 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var c7 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var a8 = { fontWeight: "600" };
var n4 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var i8 = { color: "{primary.color}" };
var s5 = { width: "0.5rem" };
var g = { width: "1px", color: "{primary.color}" };
var u = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var b = { size: "2rem" };
var p2 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var k = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f3 = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css = "\n    .p-datatable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var v = { root: o18, header: r18, headerCell: e14, columnTitle: d5, row: t9, bodyCell: l3, footerCell: c7, columnFooter: a8, footer: n4, dropPoint: i8, columnResizer: s5, resizeIndicator: g, sortIcon: u, loadingIcon: b, rowToggleButton: p2, filter: m, paginatorTop: h, paginatorBottom: k, colorScheme: f3, css };

// node_modules/@primeuix/themes/dist/aura/dataview/index.mjs
var o19 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r19 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" };
var d6 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e15 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" };
var t10 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n5 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c8 = { root: o19, header: r19, content: d6, footer: e15, paginatorTop: t10, paginatorBottom: n5 };

// node_modules/@primeuix/themes/dist/aura/datepicker/index.mjs
var o20 = { transitionDuration: "{transition.duration}" };
var r20 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e16 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var c9 = { gap: "0.5rem", fontWeight: "500" };
var d7 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n6 = { color: "{form.field.icon.color}" };
var t11 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var a9 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var i9 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l4 = { margin: "0.5rem 0 0 0" };
var u2 = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" };
var s6 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g2 = { margin: "0.5rem 0 0 0" };
var f4 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var h2 = { margin: "0.5rem 0 0 0" };
var b2 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var m2 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var p3 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v2 = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k2 = { root: o20, panel: r20, header: e16, title: c9, dropdown: d7, inputIcon: n6, selectMonth: t11, selectYear: a9, group: i9, dayView: l4, weekDay: u2, date: s6, monthView: g2, month: f4, yearView: h2, year: b2, buttonbar: m2, timePicker: p3, colorScheme: v2 };

// node_modules/@primeuix/themes/dist/aura/dialog/index.mjs
var o21 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a10 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d8 = { fontSize: "1.25rem", fontWeight: "600" };
var r21 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l5 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e17 = { root: o21, header: a10, title: d8, content: r21, footer: l5 };

// node_modules/@primeuix/themes/dist/aura/divider/index.mjs
var r22 = { borderColor: "{content.border.color}" };
var o22 = { background: "{content.background}", color: "{text.color}" };
var n7 = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } };
var e18 = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } };
var t12 = { root: r22, content: o22, horizontal: n7, vertical: e18 };

// node_modules/@primeuix/themes/dist/aura/dock/index.mjs
var r23 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o23 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d9 = { root: r23, item: o23 };

// node_modules/@primeuix/themes/dist/aura/drawer/index.mjs
var o24 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a11 = { padding: "{overlay.modal.padding}" };
var d10 = { fontSize: "1.5rem", fontWeight: "600" };
var r24 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l6 = { padding: "{overlay.modal.padding}" };
var e19 = { root: o24, header: a11, title: d10, content: r24, footer: l6 };

// node_modules/@primeuix/themes/dist/aura/editor/index.mjs
var o25 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r25 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e20 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t13 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d11 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var l7 = { toolbar: o25, toolbarItem: r25, overlay: e20, overlayOption: t13, content: d11 };

// node_modules/@primeuix/themes/dist/aura/fieldset/index.mjs
var o26 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t14 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var n8 = { padding: "0" };
var e21 = { root: o26, legend: r26, toggleIcon: t14, content: n8 };

// node_modules/@primeuix/themes/dist/aura/fileupload/index.mjs
var r27 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o27 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e22 = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" };
var t15 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var a12 = { gap: "0.5rem" };
var n9 = { height: "0.25rem" };
var d12 = { gap: "0.5rem" };
var i10 = { root: r27, header: o27, content: e22, file: t15, fileList: a12, progressbar: n9, basic: d12 };

// node_modules/@primeuix/themes/dist/aura/floatlabel/index.mjs
var o28 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i11 = { active: { top: "-1.25rem" } };
var r28 = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var a13 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var d13 = { root: o28, over: i11, in: r28, on: a13 };

// node_modules/@primeuix/themes/dist/aura/galleria/index.mjs
var o29 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r29 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e23 = { size: "1.5rem" };
var t16 = { background: "{content.background}", padding: "1rem 0.25rem" };
var c10 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n10 = { size: "1rem" };
var a14 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s7 = { gap: "0.5rem", padding: "1rem" };
var u3 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i12 = { background: "rgba(0, 0, 0, 0.5)" };
var d14 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g3 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f5 = { size: "1.5rem" };
var h3 = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } };
var l8 = { root: o29, navButton: r29, navIcon: e23, thumbnailsContent: t16, thumbnailNavButton: c10, thumbnailNavButtonIcon: n10, caption: a14, indicatorList: s7, indicatorButton: u3, insetIndicatorList: i12, insetIndicatorButton: d14, closeButton: g3, closeButtonIcon: f5, colorScheme: h3 };

// node_modules/@primeuix/themes/dist/aura/iconfield/index.mjs
var o30 = { color: "{form.field.icon.color}" };
var r30 = { icon: o30 };

// node_modules/@primeuix/themes/dist/aura/iftalabel/index.mjs
var o31 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" };
var l9 = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" };
var i13 = { root: o31, input: l9 };

// node_modules/@primeuix/themes/dist/aura/image/index.mjs
var o32 = { transitionDuration: "{transition.duration}" };
var r31 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a15 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" };
var i14 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e24 = { root: o32, preview: r31, toolbar: a15, action: i14 };

// node_modules/@primeuix/themes/dist/aura/imagecompare/index.mjs
var o33 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r32 = { handle: o33 };

// node_modules/@primeuix/themes/dist/aura/inlinemessage/index.mjs
var r33 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var o34 = { fontWeight: "500" };
var e25 = { size: "1rem" };
var n11 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } };
var a16 = { root: r33, text: o34, icon: e25, colorScheme: n11 };

// node_modules/@primeuix/themes/dist/aura/inplace/index.mjs
var o35 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r34 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n12 = { root: o35, display: r34 };

// node_modules/@primeuix/themes/dist/aura/inputchips/index.mjs
var o36 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r35 = { borderRadius: "{border.radius.sm}" };
var d15 = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } };
var f6 = { root: o36, chip: r35, colorScheme: d15 };

// node_modules/@primeuix/themes/dist/aura/inputgroup/index.mjs
var r36 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" };
var o37 = { addon: r36 };

// node_modules/@primeuix/themes/dist/aura/inputnumber/index.mjs
var r37 = { transitionDuration: "{transition.duration}" };
var o38 = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e26 = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } };
var a17 = { root: r37, button: o38, colorScheme: e26 };

// node_modules/@primeuix/themes/dist/aura/inputotp/index.mjs
var r38 = { gap: "0.5rem" };
var t17 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } };
var e27 = { root: r38, input: t17 };

// node_modules/@primeuix/themes/dist/aura/inputtext/index.mjs
var o39 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d16 = { root: o39 };

// node_modules/@primeuix/themes/dist/aura/knob/index.mjs
var o40 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r39 = { background: "{primary.color}" };
var t18 = { background: "{content.border.color}" };
var n13 = { color: "{text.muted.color}" };
var c11 = { root: o40, value: r39, range: t18, text: n13 };

// node_modules/@primeuix/themes/dist/aura/listbox/index.mjs
var o41 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r40 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var d17 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i15 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t19 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var e28 = { padding: "{list.option.padding}" };
var l10 = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } };
var n14 = { root: o41, list: r40, option: d17, optionGroup: i15, checkmark: t19, emptyMessage: e28, colorScheme: l10 };

// node_modules/@primeuix/themes/dist/aura/megamenu/index.mjs
var o42 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n15 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i16 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a18 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var r41 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var t20 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e29 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c12 = { borderColor: "{content.border.color}" };
var d18 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g4 = { root: o42, baseItem: n15, item: i16, overlay: a18, submenu: r41, submenuLabel: t20, submenuIcon: e29, separator: c12, mobileButton: d18 };

// node_modules/@primeuix/themes/dist/aura/menu/index.mjs
var o43 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n16 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a19 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i17 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t21 = { borderColor: "{content.border.color}" };
var r42 = { root: o43, list: n16, item: a19, submenuLabel: i17, separator: t21 };

// node_modules/@primeuix/themes/dist/aura/menubar/index.mjs
var o44 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" };
var i18 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var n17 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var r43 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var a20 = { borderColor: "{content.border.color}" };
var t22 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e30 = { root: o44, baseItem: i18, item: n17, submenu: r43, separator: a20, mobileButton: t22 };

// node_modules/@primeuix/themes/dist/aura/message/index.mjs
var o45 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r44 = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } };
var e31 = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var n18 = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } };
var l11 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var s8 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var c13 = { root: { borderWidth: "1px" } };
var a21 = { content: { padding: "0" } };
var d19 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var u4 = { root: o45, content: r44, text: e31, icon: n18, closeButton: l11, closeIcon: s8, outlined: c13, simple: a21, colorScheme: d19 };

// node_modules/@primeuix/themes/dist/aura/metergroup/index.mjs
var e32 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r45 = { background: "{content.border.color}", size: "0.5rem" };
var a22 = { gap: "0.5rem" };
var o46 = { size: "0.5rem" };
var l12 = { size: "1rem" };
var t23 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var b3 = { root: e32, meters: r45, label: a22, labelMarker: o46, labelIcon: l12, labelList: t23 };

// node_modules/@primeuix/themes/dist/aura/multiselect/index.mjs
var o47 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d20 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r46 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l13 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i19 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var e33 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f7 = { color: "{form.field.icon.color}" };
var a23 = { borderRadius: "{border.radius.sm}" };
var c14 = { padding: "{list.option.padding}" };
var n19 = { root: o47, dropdown: d20, overlay: r46, list: l13, option: i19, optionGroup: e33, chip: a23, clearIcon: f7, emptyMessage: c14 };

// node_modules/@primeuix/themes/dist/aura/orderlist/index.mjs
var r47 = { gap: "1.125rem" };
var a24 = { gap: "0.5rem" };
var o48 = { root: r47, controls: a24 };

// node_modules/@primeuix/themes/dist/aura/organizationchart/index.mjs
var o49 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r48 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" };
var e34 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t24 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n20 = { root: o49, node: r48, nodeToggleButton: e34, connector: t24 };

// node_modules/@primeuix/themes/dist/aura/overlaybadge/index.mjs
var o50 = { outline: { width: "2px", color: "{content.background}" } };
var t25 = { root: o50 };

// node_modules/@primeuix/themes/dist/aura/paginator/index.mjs
var o51 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r49 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t26 = { color: "{text.muted.color}" };
var e35 = { maxWidth: "2.5rem" };
var n21 = { root: o51, navButton: r49, currentPageReport: t26, jumpToPageInput: e35 };

// node_modules/@primeuix/themes/dist/aura/panel/index.mjs
var r50 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o52 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" };
var e36 = { padding: "0.375rem 1.125rem" };
var d21 = { fontWeight: "600" };
var t27 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var n22 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var a25 = { root: r50, header: o52, toggleableHeader: e36, title: d21, content: t27, footer: n22 };

// node_modules/@primeuix/themes/dist/aura/panelmenu/index.mjs
var o53 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r51 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } };
var n23 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i20 = { indent: "1rem" };
var t28 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a26 = { root: o53, panel: r51, item: n23, submenu: i20, submenuIcon: t28 };

// node_modules/@primeuix/themes/dist/aura/password/index.mjs
var r52 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" };
var o54 = { color: "{form.field.icon.color}" };
var e37 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a27 = { gap: "0.5rem" };
var d22 = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } };
var n24 = { meter: r52, icon: o54, overlay: e37, content: a27, colorScheme: d22 };

// node_modules/@primeuix/themes/dist/aura/picklist/index.mjs
var r53 = { gap: "1.125rem" };
var a28 = { gap: "0.5rem" };
var o55 = { root: r53, controls: a28 };

// node_modules/@primeuix/themes/dist/aura/popover/index.mjs
var o56 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r54 = { padding: "{overlay.popover.padding}" };
var e38 = { root: o56, content: r54 };

// node_modules/@primeuix/themes/dist/aura/progressbar/index.mjs
var r55 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" };
var o57 = { background: "{primary.color}" };
var e39 = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" };
var t29 = { root: r55, value: o57, label: e39 };

// node_modules/@primeuix/themes/dist/aura/progressspinner/index.mjs
var o58 = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } };
var r56 = { colorScheme: o58 };

// node_modules/@primeuix/themes/dist/aura/radiobutton/index.mjs
var o59 = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var r57 = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } };
var e40 = { root: o59, icon: r57 };

// node_modules/@primeuix/themes/dist/aura/rating/index.mjs
var o60 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r58 = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i21 = { root: o60, icon: r58 };

// node_modules/@primeuix/themes/dist/aura/ripple/index.mjs
var r59 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } };
var o61 = { colorScheme: r59 };

// node_modules/@primeuix/themes/dist/aura/scrollpanel/index.mjs
var r60 = { transitionDuration: "{transition.duration}" };
var o62 = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s9 = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } };
var a29 = { root: r60, bar: o62, colorScheme: s9 };

// node_modules/@primeuix/themes/dist/aura/select/index.mjs
var o63 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r61 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d23 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l14 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i22 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var e41 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f8 = { color: "{form.field.icon.color}" };
var c15 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var a30 = { padding: "{list.option.padding}" };
var n25 = { root: o63, dropdown: r61, overlay: d23, list: l14, option: i22, optionGroup: e41, clearIcon: f8, checkmark: c15, emptyMessage: a30 };

// node_modules/@primeuix/themes/dist/aura/selectbutton/index.mjs
var r62 = { borderRadius: "{form.field.border.radius}" };
var o64 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d24 = { root: r62, colorScheme: o64 };

// node_modules/@primeuix/themes/dist/aura/skeleton/index.mjs
var r63 = { borderRadius: "{content.border.radius}" };
var a31 = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o65 = { root: r63, colorScheme: a31 };

// node_modules/@primeuix/themes/dist/aura/slider/index.mjs
var o66 = { transitionDuration: "{transition.duration}" };
var r64 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" };
var n26 = { background: "{primary.color}" };
var t30 = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e42 = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } };
var a32 = { root: o66, track: r64, range: n26, handle: t30, colorScheme: e42 };

// node_modules/@primeuix/themes/dist/aura/speeddial/index.mjs
var t31 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a33 = { root: t31 };

// node_modules/@primeuix/themes/dist/aura/splitbutton/index.mjs
var r65 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d25 = { root: r65 };

// node_modules/@primeuix/themes/dist/aura/splitter/index.mjs
var o67 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r66 = { background: "{content.border.color}" };
var n27 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t32 = { root: o67, gutter: r66, handle: n27 };

// node_modules/@primeuix/themes/dist/aura/stepper/index.mjs
var o68 = { transitionDuration: "{transition.duration}" };
var r67 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e43 = { padding: "0.5rem", gap: "1rem" };
var t33 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n28 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var a34 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c16 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var d26 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var i23 = { root: o68, separator: r67, step: e43, stepHeader: t33, stepTitle: n28, stepNumber: a34, steppanels: c16, steppanel: d26 };

// node_modules/@primeuix/themes/dist/aura/steps/index.mjs
var o69 = { transitionDuration: "{transition.duration}" };
var r68 = { background: "{content.border.color}" };
var t34 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e44 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var n29 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c17 = { root: o69, separator: r68, itemLink: t34, itemLabel: e44, itemNumber: n29 };

// node_modules/@primeuix/themes/dist/aura/tabmenu/index.mjs
var o70 = { transitionDuration: "{transition.duration}" };
var r69 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t35 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e45 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var c18 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var n30 = { root: o70, tablist: r69, item: t35, itemIcon: e45, activeBar: c18 };

// node_modules/@primeuix/themes/dist/aura/tabs/index.mjs
var o71 = { transitionDuration: "{transition.duration}" };
var r70 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t36 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n31 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c19 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var e46 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var a35 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var i24 = { root: o71, tablist: r70, tab: t36, tabpanel: n31, navButton: c19, activeBar: e46, colorScheme: a35 };

// node_modules/@primeuix/themes/dist/aura/tabview/index.mjs
var o72 = { transitionDuration: "{transition.duration}" };
var r71 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t37 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n32 = { background: "{content.background}", color: "{content.color}" };
var a36 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var c20 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e47 = { root: o72, tabList: r71, tab: t37, tabPanel: n32, navButton: a36, colorScheme: c20 };

// node_modules/@primeuix/themes/dist/aura/tag/index.mjs
var r72 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o73 = { size: "0.75rem" };
var a37 = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var n33 = { root: r72, icon: o73, colorScheme: a37 };

// node_modules/@primeuix/themes/dist/aura/terminal/index.mjs
var r73 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o74 = { gap: "0.25rem" };
var d27 = { margin: "2px 0" };
var e48 = { root: r73, prompt: o74, commandResponse: d27 };

// node_modules/@primeuix/themes/dist/aura/textarea/index.mjs
var o75 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d28 = { root: o75 };

// node_modules/@primeuix/themes/dist/aura/tieredmenu/index.mjs
var o76 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i25 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n34 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a38 = { mobileIndent: "1rem" };
var t38 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r74 = { borderColor: "{content.border.color}" };
var c21 = { root: o76, list: i25, item: n34, submenu: a38, submenuIcon: t38, separator: r74 };

// node_modules/@primeuix/themes/dist/aura/timeline/index.mjs
var e49 = { minHeight: "5rem" };
var r75 = { eventContent: { padding: "1rem 0" } };
var o77 = { eventContent: { padding: "0 1rem" } };
var n35 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } };
var t39 = { color: "{content.border.color}", size: "2px" };
var d29 = { event: e49, horizontal: r75, vertical: o77, eventMarker: n35, eventConnector: t39 };

// node_modules/@primeuix/themes/dist/aura/toast/index.mjs
var o78 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r76 = { size: "1.125rem" };
var e50 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var n36 = { gap: "0.5rem" };
var a39 = { fontWeight: "500", fontSize: "1rem" };
var s10 = { fontWeight: "500", fontSize: "0.875rem" };
var c22 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var l15 = { size: "1rem" };
var t40 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } };
var u5 = { root: o78, icon: r76, content: e50, text: n36, summary: a39, detail: s10, closeButton: c22, closeIcon: l15, colorScheme: t40 };

// node_modules/@primeuix/themes/dist/aura/togglebutton/index.mjs
var r77 = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } };
var o79 = { disabledColor: "{form.field.disabled.color}" };
var e51 = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } };
var d30 = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } };
var c23 = { root: r77, icon: o79, content: e51, colorScheme: d30 };

// node_modules/@primeuix/themes/dist/aura/toggleswitch/index.mjs
var r78 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" };
var o80 = { borderRadius: "50%", size: "1rem" };
var e52 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } };
var c24 = { root: r78, handle: o80, colorScheme: e52 };

// node_modules/@primeuix/themes/dist/aura/toolbar/index.mjs
var o81 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" };
var r79 = { root: o81 };

// node_modules/@primeuix/themes/dist/aura/tooltip/index.mjs
var r80 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o82 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } };
var e53 = { root: r80, colorScheme: o82 };

// node_modules/@primeuix/themes/dist/aura/tree/index.mjs
var o83 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" };
var r81 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" };
var e54 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t41 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n37 = { size: "2rem" };
var c25 = { margin: "0 0 0.5rem 0" };
var css2 = "\n    .p-tree-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var d31 = { root: o83, node: r81, nodeIcon: e54, nodeToggleButton: t41, loadingIcon: n37, filter: c25, css: css2 };

// node_modules/@primeuix/themes/dist/aura/treeselect/index.mjs
var o84 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r82 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d32 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l16 = { padding: "{list.padding}" };
var e55 = { padding: "{list.option.padding}" };
var i26 = { borderRadius: "{border.radius.sm}" };
var f9 = { color: "{form.field.icon.color}" };
var a40 = { root: o84, dropdown: r82, overlay: d32, tree: l16, emptyMessage: e55, chip: i26, clearIcon: f9 };

// node_modules/@primeuix/themes/dist/aura/treetable/index.mjs
var o85 = { transitionDuration: "{transition.duration}" };
var r83 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var e56 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t42 = { fontWeight: "600" };
var c26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n38 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var l17 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" };
var d33 = { fontWeight: "600" };
var a41 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var i27 = { width: "0.5rem" };
var g5 = { width: "1px", color: "{primary.color}" };
var s11 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u6 = { size: "2rem" };
var b4 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var h4 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m3 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f10 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css3 = "\n    .p-treetable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var k3 = { root: o85, header: r83, headerCell: e56, columnTitle: t42, row: c26, bodyCell: n38, footerCell: l17, columnFooter: d33, footer: a41, columnResizer: i27, resizeIndicator: g5, sortIcon: s11, loadingIcon: u6, nodeToggleButton: b4, paginatorTop: h4, paginatorBottom: m3, colorScheme: f10, css: css3 };

// node_modules/@primeuix/themes/dist/aura/virtualscroller/index.mjs
var o86 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e57 = { loader: o86 };

// node_modules/@primeuix/themes/dist/aura/index.mjs
var r84 = Object.defineProperty;
var e58 = Object.defineProperties;
var m4 = Object.getOwnPropertyDescriptors;
var i28 = Object.getOwnPropertySymbols;
var t43 = Object.prototype.hasOwnProperty;
var a42 = Object.prototype.propertyIsEnumerable;
var o87 = (e59, m5, i29) => m5 in e59 ? r84(e59, m5, { enumerable: true, configurable: true, writable: true, value: i29 }) : e59[m5] = i29;
var Nr;
var Qr = (Nr = ((r85, e59) => {
  for (var m5 in e59 || (e59 = {})) t43.call(e59, m5) && o87(r85, m5, e59[m5]);
  if (i28) for (var m5 of i28(e59)) a42.call(e59, m5) && o87(r85, m5, e59[m5]);
  return r85;
})({}, e5), e58(Nr, m4({ components: { accordion: c, autocomplete: a, avatar: n, badge: d2, blockui: o6, breadcrumb: t4, button: e6, card: d3, carousel: t6, cascadeselect: f2, checkbox: e9, chip: s3, colorpicker: s4, confirmdialog: r15, confirmpopup: a6, contextmenu: c6, datatable: v, dataview: c8, datepicker: k2, dialog: e17, divider: t12, dock: d9, drawer: e19, editor: l7, fieldset: e21, fileupload: i10, floatlabel: d13, galleria: l8, iconfield: r30, iftalabel: i13, image: e24, imagecompare: r32, inlinemessage: a16, inplace: n12, inputchips: f6, inputgroup: o37, inputnumber: a17, inputotp: e27, inputtext: d16, knob: c11, listbox: n14, megamenu: g4, menu: r42, menubar: e30, message: u4, metergroup: b3, multiselect: n19, orderlist: o48, organizationchart: n20, overlaybadge: t25, paginator: n21, panel: a25, panelmenu: a26, password: n24, picklist: o55, popover: e38, progressbar: t29, progressspinner: r56, radiobutton: e40, rating: i21, ripple: o61, scrollpanel: a29, select: n25, selectbutton: d24, skeleton: o65, slider: a32, speeddial: a33, splitbutton: d25, splitter: t32, stepper: i23, steps: c17, tabmenu: n30, tabs: i24, tabview: e47, tag: n33, terminal: e48, textarea: d28, tieredmenu: c21, timeline: d29, toast: u5, togglebutton: c23, toggleswitch: c24, toolbar: r79, tooltip: e53, tree: d31, treeselect: a40, treetable: k3, virtualscroller: e57 }, css: t8 })));

// apps/marketplace-web/src/assets/theme/aura-light.ts
var AuraLight = t(Qr, {
  semantic: {
    primary: {
      50: "{purple.50}",
      100: "{purple.100}",
      200: "{purple.200}",
      300: "{purple.300}",
      400: "{purple.400}",
      500: "{purple.500}",
      600: "{purple.600}",
      700: "{purple.700}",
      800: "{purple.800}",
      900: "{purple.900}",
      950: "{purple.950}"
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "{slate.50}",
          100: "{slate.100}",
          200: "{slate.200}",
          300: "{slate.300}",
          400: "{slate.400}",
          500: "{slate.500}",
          600: "{slate.600}",
          700: "{slate.700}",
          800: "{slate.800}",
          900: "{slate.900}",
          950: "{slate.950}"
        }
      }
    }
  }
});

// libs/frontend/core/layout/src/lib/layout/footer/footer.ts
function FooterComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Popular Categories");
  }
}
function FooterComponent_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " ... ");
  }
}
var FooterComponent = class _FooterComponent {
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 116, vars: 0, consts: [[1, "bg-[#3c4242]", "text-[#f6f6f6]"], [1, "container", "mx-auto", "px-4", "py-14"], [1, "grid", "gap-10", "sm:grid-cols-2", "lg:grid-cols-4"], [1, "footer-title", "mb-4"], [1, "space-y-2", "footer-menu"], ["routerLink", "/"], [1, "flex", "gap-3", "mt-8"], ["href", "#", 1, "hover:opacity-80"], ["width", "38", "height", "38", "viewBox", "0 0 38 38", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["width", "37.024", "height", "37.024", "rx", "10.68", "fill", "#F6F6F6"], ["d", "M22.4367 19.2686L22.9311 16.0472H19.84V13.9568C19.84 13.0755 20.2718 12.2164 21.6562 12.2164H23.0614V9.47374C23.0614 9.47374 21.7862 9.2561 20.567 9.2561C18.0215 9.2561 16.3576 10.799 16.3576 13.5921V16.0472H13.528V19.2686H16.3576V27.0561H19.84V19.2686H22.4367Z", "fill", "#2A2F2F"], ["d", "M18.4736 14.4755C16.2625 14.4755 14.4791 16.2589 14.4791 18.47C14.4791 20.6811 16.2625 22.4646 18.4736 22.4646C20.6847 22.4646 22.4682 20.6811 22.4682 18.47C22.4682 16.2589 20.6847 14.4755 18.4736 14.4755ZM18.4736 21.067C17.0448 21.067 15.8766 19.9024 15.8766 18.47C15.8766 17.0377 17.0413 15.873 18.4736 15.873C19.906 15.873 21.0706 17.0377 21.0706 18.47C21.0706 19.9024 19.9025 21.067 18.4736 21.067ZM23.5633 14.3121C23.5633 14.8301 23.1461 15.2438 22.6316 15.2438C22.1136 15.2438 21.6999 14.8266 21.6999 14.3121C21.6999 13.7975 22.1171 13.3804 22.6316 13.3804C23.1461 13.3804 23.5633 13.7975 23.5633 14.3121ZM26.209 15.2577C26.1499 14.0096 25.8648 12.9041 24.9505 11.9932C24.0396 11.0823 22.9341 10.7973 21.686 10.7347C20.3997 10.6617 16.5441 10.6617 15.2578 10.7347C14.0132 10.7938 12.9077 11.0789 11.9933 11.9897C11.079 12.9006 10.7974 14.0061 10.7348 15.2542C10.6618 16.5405 10.6618 20.3961 10.7348 21.6824C10.7939 22.9305 11.079 24.036 11.9933 24.9469C12.9077 25.8577 14.0097 26.1428 15.2578 26.2054C16.5441 26.2784 20.3997 26.2784 21.686 26.2054C22.9341 26.1463 24.0396 25.8612 24.9505 24.9469C25.8613 24.036 26.1464 22.9305 26.209 21.6824C26.282 20.3961 26.282 16.544 26.209 15.2577ZM24.5472 23.0626C24.276 23.744 23.7511 24.2689 23.0662 24.5436C22.0406 24.9504 19.607 24.8565 18.4736 24.8565C17.3403 24.8565 14.9032 24.9469 13.8811 24.5436C13.1997 24.2724 12.6747 23.7475 12.4001 23.0626C11.9933 22.037 12.0872 19.6034 12.0872 18.47C12.0872 17.3367 11.9968 14.8996 12.4001 13.8775C12.6713 13.1961 13.1962 12.6711 13.8811 12.3965C14.9067 11.9897 17.3403 12.0836 18.4736 12.0836C19.607 12.0836 22.0441 11.9932 23.0662 12.3965C23.7476 12.6677 24.2725 13.1926 24.5472 13.8775C24.954 14.9031 24.8601 17.3367 24.8601 18.47C24.8601 19.6034 24.954 22.0405 24.5472 23.0626Z", "fill", "#2A2F2F"], ["d", "M27.3624 14.9947C27.3737 15.1529 27.3737 15.311 27.3737 15.4691C27.3737 20.2918 23.703 25.8487 16.9941 25.8487C14.9273 25.8487 13.0072 25.25 11.3921 24.211C11.6858 24.2449 11.9681 24.2562 12.2731 24.2562C13.9785 24.2562 15.5485 23.6802 16.8021 22.6976C15.1983 22.6637 13.8543 21.6133 13.3912 20.1676C13.6171 20.2015 13.843 20.2241 14.0802 20.2241C14.4077 20.2241 14.7353 20.1789 15.0402 20.0998C13.3687 19.761 12.1149 18.2927 12.1149 16.5195V16.4743C12.6006 16.7454 13.1653 16.9148 13.7639 16.9374C12.7813 16.2823 12.1375 15.1642 12.1375 13.8992C12.1375 13.2215 12.3182 12.6003 12.6345 12.0582C14.4303 14.2719 17.1297 15.7176 20.1565 15.8757C20.1001 15.6046 20.0662 15.3223 20.0662 15.0399C20.0662 13.0295 21.6926 11.3918 23.7143 11.3918C24.7646 11.3918 25.7134 11.8323 26.3798 12.5439C27.2042 12.3858 27.9948 12.0808 28.6951 11.6629C28.424 12.51 27.848 13.2216 27.0913 13.6733C27.8254 13.5943 28.537 13.3909 29.192 13.1086C28.6952 13.8314 28.074 14.4752 27.3624 14.9947Z", "fill", "#2A2F2F"], ["d", "M14.8629 15.244V24.272H12.4516V15.244H14.8629ZM12.3014 12.8911C12.3014 12.5407 12.4238 12.2514 12.6685 12.0233C12.9133 11.7953 13.2415 11.6813 13.6531 11.6813C14.0591 11.6813 14.3845 11.7953 14.6293 12.0233C14.8796 12.2514 15.0048 12.5407 15.0048 12.8911C15.0048 13.2415 14.8796 13.5308 14.6293 13.7588C14.3845 13.9869 14.0591 14.1009 13.6531 14.1009C13.2415 14.1009 12.9133 13.9869 12.6685 13.7588C12.4238 13.5308 12.3014 13.2415 12.3014 12.8911ZM19.5434 17.1714V24.272H17.1404V15.244H19.3932L19.5434 17.1714ZM19.193 19.4409H18.5422C18.5422 18.7734 18.6284 18.1727 18.8008 17.6387C18.9733 17.0991 19.2152 16.6402 19.5267 16.262C19.8382 15.8782 20.2082 15.5861 20.6365 15.3859C21.0703 15.1801 21.5543 15.0772 22.0883 15.0772C22.511 15.0772 22.8976 15.1383 23.2481 15.2607C23.5985 15.3831 23.8989 15.5778 24.1492 15.8448C24.4051 16.1118 24.5997 16.465 24.7332 16.9044C24.8723 17.3439 24.9418 17.8807 24.9418 18.5148V24.272H22.5222V18.5064C22.5222 18.1059 22.4665 17.7944 22.3553 17.5719C22.244 17.3494 22.0799 17.1937 21.863 17.1047C21.6516 17.0101 21.3902 16.9628 21.0787 16.9628C20.7561 16.9628 20.4752 17.0268 20.236 17.1548C20.0023 17.2827 19.8077 17.4607 19.6519 17.6888C19.5017 17.9113 19.3877 18.1727 19.3098 18.4731C19.2319 18.7734 19.193 19.0961 19.193 19.4409Z", "fill", "#2A2F2F"], [1, "space-y-2", "text-sm", "text-[#bebcbd]"], ["href", "mailto:support@euphoria.in", 1, "hover:text-white"], [1, "mt-8"], [1, "flex", "flex-wrap", "gap-4"], [1, "google-play"], ["href", "#"], ["width", "154", "height", "52", "viewBox", "0 0 154 52", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M153.762 37.8649C153.762 45.3228 147.652 51.4328 140.194 51.4328H13.5679C6.11003 51.4328 0 45.3228 0 37.8649V13.7617C0 6.30384 6.11003 0.193848 13.5679 0.193848H140.194C147.652 0.193848 153.762 6.30384 153.762 13.7617V37.8649Z", "fill", "#404040"], ["d", "M54.9269 14.5938H55.6569V19.1938H54.9269V18.3638C54.5769 18.9138 53.9969 19.2738 53.2169 19.2738C51.9069 19.2738 50.9769 18.2638 50.9769 16.8938C50.9769 15.5138 51.9069 14.5238 53.2169 14.5238C53.9969 14.5238 54.5769 14.8738 54.9269 15.4238V14.5938ZM53.3069 18.5838C54.2969 18.5838 54.9269 17.8738 54.9269 16.8938C54.9269 15.9138 54.2969 15.2138 53.3069 15.2138C52.3269 15.2138 51.6769 15.9138 51.6769 16.8938C51.6769 17.8738 52.3269 18.5838 53.3069 18.5838ZM59.1079 14.5238C60.0279 14.5238 60.9379 15.0638 60.9379 16.3638V19.1938H60.2179V16.4638C60.2179 15.5838 59.5979 15.1538 58.9179 15.1538C58.2279 15.1538 57.6279 15.5838 57.6279 16.4638V19.1938H56.9079V14.5938H57.6279V15.2138C57.9779 14.7338 58.5379 14.5238 59.1079 14.5238ZM66.0109 12.6938H66.7409V19.1938H66.0109V18.3638C65.6609 18.9138 65.0809 19.2738 64.3009 19.2738C62.9909 19.2738 62.0609 18.2638 62.0609 16.8938C62.0609 15.5138 62.9909 14.5238 64.3009 14.5238C65.0809 14.5238 65.6609 14.8738 66.0109 15.4238V12.6938ZM64.3909 18.5838C65.3809 18.5838 66.0109 17.8738 66.0109 16.8938C66.0109 15.9138 65.3809 15.2138 64.3909 15.2138C63.4109 15.2138 62.7609 15.9138 62.7609 16.8938C62.7609 17.8738 63.4109 18.5838 64.3909 18.5838ZM68.7119 15.4438C69.0619 14.8138 69.6819 14.5338 70.3319 14.5238V15.2138C69.6219 15.2238 68.7119 15.5938 68.7119 16.7138V19.1938H67.9919V14.5938H68.7119V15.4438ZM73.1411 19.2838C71.7611 19.2838 70.8011 18.2638 70.8011 16.8938C70.8011 15.5138 71.7611 14.5138 73.1411 14.5138C74.5211 14.5138 75.4811 15.5138 75.4811 16.8938C75.4811 18.2638 74.5211 19.2838 73.1411 19.2838ZM73.1411 18.5838C74.1111 18.5838 74.7511 17.8638 74.7511 16.8938C74.7511 15.9238 74.1111 15.2138 73.1411 15.2138C72.1711 15.2138 71.5211 15.9238 71.5211 16.8938C71.5211 17.8638 72.1711 18.5838 73.1411 18.5838ZM77.0354 13.6138C76.8154 13.6138 76.5954 13.4338 76.5954 13.1638C76.5954 12.8938 76.8154 12.7338 77.0354 12.7338C77.2554 12.7338 77.4754 12.8938 77.4754 13.1638C77.4754 13.4338 77.2554 13.6138 77.0354 13.6138ZM77.3954 19.1938H76.6754V14.5938H77.4054L77.3954 19.1938ZM82.5441 12.6938H83.2741V19.1938H82.5441V18.3638C82.1941 18.9138 81.6141 19.2738 80.8341 19.2738C79.5241 19.2738 78.5941 18.2638 78.5941 16.8938C78.5941 15.5138 79.5241 14.5238 80.8341 14.5238C81.6141 14.5238 82.1941 14.8738 82.5441 15.4238V12.6938ZM80.9241 18.5838C81.9141 18.5838 82.5441 17.8738 82.5441 16.8938C82.5441 15.9138 81.9141 15.2138 80.9241 15.2138C79.9441 15.2138 79.2941 15.9138 79.2941 16.8938C79.2941 17.8738 79.9441 18.5838 80.9241 18.5838ZM90.3371 14.5938H91.0671V19.1938H90.3371V18.3638C89.9871 18.9138 89.4071 19.2738 88.6271 19.2738C87.3171 19.2738 86.3871 18.2638 86.3871 16.8938C86.3871 15.5138 87.3171 14.5238 88.6271 14.5238C89.4071 14.5238 89.9871 14.8738 90.3371 15.4238V14.5938ZM88.7171 18.5838C89.7071 18.5838 90.3371 17.8738 90.3371 16.8938C90.3371 15.9138 89.7071 15.2138 88.7171 15.2138C87.7371 15.2138 87.0871 15.9138 87.0871 16.8938C87.0871 17.8738 87.7371 18.5838 88.7171 18.5838ZM94.7481 14.5238C96.0581 14.5238 96.9981 15.5338 96.9981 16.9038C96.9981 18.2838 96.0581 19.2738 94.7481 19.2738C93.9681 19.2738 93.3881 18.9238 93.0381 18.3638V21.0338H92.3181V14.5938H93.0381V15.4338C93.3881 14.8738 93.9681 14.5238 94.7481 14.5238ZM94.6581 18.5838C95.6381 18.5838 96.2881 17.8838 96.2881 16.9038C96.2881 15.9238 95.6381 15.2138 94.6581 15.2138C93.6781 15.2138 93.0381 15.9238 93.0381 16.9038C93.0381 17.8838 93.6781 18.5838 94.6581 18.5838ZM100.539 14.5238C101.849 14.5238 102.789 15.5338 102.789 16.9038C102.789 18.2838 101.849 19.2738 100.539 19.2738C99.7591 19.2738 99.1791 18.9238 98.8291 18.3638V21.0338H98.1091V14.5938H98.8291V15.4338C99.1791 14.8738 99.7591 14.5238 100.539 14.5238ZM100.449 18.5838C101.429 18.5838 102.079 17.8838 102.079 16.9038C102.079 15.9238 101.429 15.2138 100.449 15.2138C99.4691 15.2138 98.8291 15.9238 98.8291 16.9038C98.8291 17.8838 99.4691 18.5838 100.449 18.5838ZM108.102 19.2838C106.722 19.2838 105.762 18.2638 105.762 16.8938C105.762 15.5138 106.722 14.5138 108.102 14.5138C109.482 14.5138 110.442 15.5138 110.442 16.8938C110.442 18.2638 109.482 19.2838 108.102 19.2838ZM108.102 18.5838C109.072 18.5838 109.712 17.8638 109.712 16.8938C109.712 15.9238 109.072 15.2138 108.102 15.2138C107.132 15.2138 106.482 15.9238 106.482 16.8938C106.482 17.8638 107.132 18.5838 108.102 18.5838ZM113.756 14.5238C114.676 14.5238 115.586 15.0638 115.586 16.3638V19.1938H114.866V16.4638C114.866 15.5838 114.246 15.1538 113.566 15.1538C112.876 15.1538 112.276 15.5838 112.276 16.4638V19.1938H111.556V14.5938H112.276V15.2138C112.626 14.7338 113.186 14.5238 113.756 14.5238Z", "fill", "white"], ["d", "M60.1248 34.3746C60.0168 37.7046 57.8928 40.0986 54.5088 40.0986C51.0348 40.0986 48.6588 37.5786 48.6588 34.1046C48.6588 30.6306 51.0348 28.1106 54.5088 28.1106C56.5788 28.1106 58.2348 29.0106 59.2428 30.4506L58.1268 31.2426C57.2988 30.0906 56.0028 29.4786 54.5088 29.4786C51.8268 29.4786 50.0088 31.4226 50.0088 34.1046C50.0088 36.7866 51.8268 38.7306 54.5088 38.7306C56.7228 38.7306 58.3608 37.3086 58.5948 35.0586H54.4548V33.7986H60.1248V34.3746ZM66.1757 40.1166C63.6917 40.1166 61.9637 38.2806 61.9637 35.8146C61.9637 33.3306 63.6917 31.5306 66.1757 31.5306C68.6597 31.5306 70.3877 33.3306 70.3877 35.8146C70.3877 38.2806 68.6597 40.1166 66.1757 40.1166ZM66.1757 38.8566C67.9217 38.8566 69.0737 37.5606 69.0737 35.8146C69.0737 34.0686 67.9217 32.7906 66.1757 32.7906C64.4297 32.7906 63.2597 34.0686 63.2597 35.8146C63.2597 37.5606 64.4297 38.8566 66.1757 38.8566ZM76.3535 40.1166C73.8695 40.1166 72.1415 38.2806 72.1415 35.8146C72.1415 33.3306 73.8695 31.5306 76.3535 31.5306C78.8375 31.5306 80.5655 33.3306 80.5655 35.8146C80.5655 38.2806 78.8375 40.1166 76.3535 40.1166ZM76.3535 38.8566C78.0995 38.8566 79.2515 37.5606 79.2515 35.8146C79.2515 34.0686 78.0995 32.7906 76.3535 32.7906C74.6075 32.7906 73.4375 34.0686 73.4375 35.8146C73.4375 37.5606 74.6075 38.8566 76.3535 38.8566ZM89.4292 31.6746H90.7432V39.3426C90.7432 41.7186 89.0512 43.3746 86.3872 43.3746C84.9472 43.3746 83.7232 42.8166 82.9672 41.9166L83.8492 41.1786C84.5152 41.9166 85.4332 42.2406 86.3872 42.2406C87.9172 42.2406 89.4292 41.3226 89.4292 39.3426V38.4606C88.7992 39.4506 87.7552 40.0986 86.3512 40.0986C83.9932 40.0986 82.3192 38.2806 82.3192 35.8146C82.3192 33.3486 83.9932 31.5486 86.3512 31.5486C87.7552 31.5486 88.7992 32.1786 89.4292 33.1686V31.6746ZM86.5132 38.8566C88.2772 38.8566 89.4292 37.5786 89.4292 35.8146C89.4292 34.0506 88.2772 32.7906 86.5132 32.7906C84.7492 32.7906 83.5792 34.0506 83.5792 35.8146C83.5792 37.5786 84.7492 38.8566 86.5132 38.8566ZM94.291 39.9546H92.995V28.2546H94.291V39.9546ZM100.397 31.5306C102.773 31.5306 104.357 33.3486 104.357 35.8146V36.2286H97.5714C97.7334 37.8846 98.8674 38.9826 100.505 38.9826C101.729 38.9826 102.575 38.4246 103.043 37.7226L103.961 38.3886C103.241 39.4506 102.017 40.1166 100.505 40.1166C97.9854 40.1166 96.3114 38.2806 96.3114 35.8146C96.3114 33.3486 97.9134 31.5306 100.397 31.5306ZM100.397 32.6106C98.7774 32.6106 97.7514 33.7086 97.5714 35.3286H103.151C102.971 33.7626 101.945 32.6106 100.397 32.6106ZM115.249 28.2546C117.013 28.2546 118.597 29.6586 118.597 31.8186C118.597 33.9786 117.013 35.3826 115.249 35.3826H111.325V39.9546H109.975V28.2546H115.249ZM115.051 34.0686C116.311 34.0686 117.229 33.0786 117.229 31.8186C117.229 30.5766 116.329 29.5866 115.051 29.5866H111.325V34.0686H115.051ZM121.783 39.9546H120.487V28.2546H121.783V39.9546ZM130.914 31.6746H132.228V39.9546H130.914V38.4606C130.284 39.4506 129.24 40.0986 127.836 40.0986C125.478 40.0986 123.804 38.2806 123.804 35.8146C123.804 33.3306 125.478 31.5486 127.836 31.5486C129.24 31.5486 130.284 32.1786 130.914 33.1686V31.6746ZM127.998 38.8566C129.78 38.8566 130.914 37.5786 130.914 35.8146C130.914 34.0506 129.78 32.7906 127.998 32.7906C126.234 32.7906 125.064 34.0506 125.064 35.8146C125.064 37.5786 126.234 38.8566 127.998 38.8566ZM140.185 31.6746H141.535L136.927 43.2666H135.649L136.945 39.9366L133.705 31.6746H135.055L137.611 38.1546L140.185 31.6746Z", "fill", "white"], ["d", "M8.67065 42.3127V9.33643L38.3224 25.3528L8.67065 42.3127Z", "fill", "#5CA9B3"], ["d", "M8.67065 9.33643L29.6515 30.3172L38.3224 25.3528L8.67065 9.33643Z", "fill", "#C8DB9B"], ["d", "M29.4718 20.5679L8.67065 42.3125L38.3224 25.3526L29.4718 20.5679Z", "fill", "#AC5067"], ["d", "M29.6517 30.317L38.3225 25.3526L29.4719 20.5679L24.7996 25.4649L29.6517 30.317Z", "fill", "#F4A676"], [1, "app-store"], ["d", "M153.762 37.8874C153.762 45.3453 147.652 51.4553 140.194 51.4553H13.5679C6.11003 51.4553 0 45.3453 0 37.8874V13.7618C0 6.30391 6.11003 0.193848 13.5679 0.193848H140.194C147.652 0.193848 153.762 6.30391 153.762 13.7618V37.8874Z", "fill", "#404040"], ["d", "M58.5246 19.0435L57.8746 17.4435H54.8546L54.2046 19.0435H53.4046L56.0746 12.5435H56.6546L59.3246 19.0435H58.5246ZM55.1346 16.7435H57.5846L56.3546 13.7135L55.1346 16.7435ZM60.9732 19.0435L59.1632 14.4435H59.9132L61.3332 18.0535L62.7632 14.4435H63.5132L61.6832 19.0435H60.9732ZM67.9833 14.4435H68.7133V19.0435H67.9833V18.2135C67.6333 18.7635 67.0533 19.1235 66.2733 19.1235C64.9633 19.1235 64.0333 18.1135 64.0333 16.7435C64.0333 15.3635 64.9633 14.3735 66.2733 14.3735C67.0533 14.3735 67.6333 14.7235 67.9833 15.2735V14.4435ZM66.3633 18.4335C67.3533 18.4335 67.9833 17.7235 67.9833 16.7435C67.9833 15.7635 67.3533 15.0635 66.3633 15.0635C65.3833 15.0635 64.7333 15.7635 64.7333 16.7435C64.7333 17.7235 65.3833 18.4335 66.3633 18.4335ZM70.4043 13.4635C70.1843 13.4635 69.9643 13.2835 69.9643 13.0135C69.9643 12.7435 70.1843 12.5835 70.4043 12.5835C70.6243 12.5835 70.8443 12.7435 70.8443 13.0135C70.8443 13.2835 70.6243 13.4635 70.4043 13.4635ZM70.7643 19.0435H70.0443V14.4435H70.7743L70.7643 19.0435ZM72.823 19.0435H72.103V12.5435H72.823V19.0435ZM77.8954 14.4435H78.6254V19.0435H77.8954V18.2135C77.5454 18.7635 76.9654 19.1235 76.1854 19.1235C74.8754 19.1235 73.9454 18.1135 73.9454 16.7435C73.9454 15.3635 74.8754 14.3735 76.1854 14.3735C76.9654 14.3735 77.5454 14.7235 77.8954 15.2735V14.4435ZM76.2754 18.4335C77.2654 18.4335 77.8954 17.7235 77.8954 16.7435C77.8954 15.7635 77.2654 15.0635 76.2754 15.0635C75.2954 15.0635 74.6454 15.7635 74.6454 16.7435C74.6454 17.7235 75.2954 18.4335 76.2754 18.4335ZM82.3064 14.3735C83.6164 14.3735 84.5564 15.3635 84.5564 16.7435C84.5564 18.1135 83.6164 19.1235 82.3064 19.1235C81.5264 19.1235 80.9464 18.7635 80.5964 18.2135V19.0435H79.8764V12.5435H80.5964V15.2735C80.9464 14.7235 81.5264 14.3735 82.3064 14.3735ZM82.2164 18.4335C83.1964 18.4335 83.8464 17.7235 83.8464 16.7435C83.8464 15.7635 83.1964 15.0635 82.2164 15.0635C81.2364 15.0635 80.5964 15.7635 80.5964 16.7435C80.5964 17.7235 81.2364 18.4335 82.2164 18.4335ZM86.3875 19.0435H85.6675V12.5435H86.3875V19.0435ZM89.7799 14.3635C91.0999 14.3635 91.9799 15.3735 91.9799 16.7435V16.9735H88.2099C88.2999 17.8935 88.9299 18.5035 89.8399 18.5035C90.5199 18.5035 90.9899 18.1935 91.2499 17.8035L91.7599 18.1735C91.3599 18.7635 90.6799 19.1335 89.8399 19.1335C88.4399 19.1335 87.5099 18.1135 87.5099 16.7435C87.5099 15.3735 88.3999 14.3635 89.7799 14.3635ZM89.7799 14.9635C88.8799 14.9635 88.3099 15.5735 88.2099 16.4735H91.3099C91.2099 15.6035 90.6399 14.9635 89.7799 14.9635ZM97.301 19.1335C95.921 19.1335 94.961 18.1135 94.961 16.7435C94.961 15.3635 95.921 14.3635 97.301 14.3635C98.681 14.3635 99.641 15.3635 99.641 16.7435C99.641 18.1135 98.681 19.1335 97.301 19.1335ZM97.301 18.4335C98.271 18.4335 98.911 17.7135 98.911 16.7435C98.911 15.7735 98.271 15.0635 97.301 15.0635C96.331 15.0635 95.681 15.7735 95.681 16.7435C95.681 17.7135 96.331 18.4335 97.301 18.4335ZM102.955 14.3735C103.875 14.3735 104.785 14.9135 104.785 16.2135V19.0435H104.065V16.3135C104.065 15.4335 103.445 15.0035 102.765 15.0035C102.075 15.0035 101.475 15.4335 101.475 16.3135V19.0435H100.755V14.4435H101.475V15.0635C101.825 14.5835 102.385 14.3735 102.955 14.3735ZM110.22 15.0135H109.12V17.8435C109.12 18.3335 109.42 18.4535 109.76 18.4535H110.17V19.0435H109.5C108.8 19.0435 108.39 18.6435 108.39 17.9435V15.0135H107.75V14.4435H108.39V13.0435H109.12V14.4435H110.22V15.0135ZM113.414 14.3735C114.334 14.3735 115.244 14.9135 115.244 16.2135V19.0435H114.524V16.3135C114.524 15.4335 113.904 15.0035 113.224 15.0035C112.534 15.0035 111.934 15.4335 111.934 16.3135V19.0435H111.214V12.5435H111.934V15.0635C112.284 14.5835 112.844 14.3735 113.414 14.3735ZM118.637 14.3635C119.957 14.3635 120.837 15.3735 120.837 16.7435V16.9735H117.067C117.157 17.8935 117.787 18.5035 118.697 18.5035C119.377 18.5035 119.847 18.1935 120.107 17.8035L120.617 18.1735C120.217 18.7635 119.537 19.1335 118.697 19.1335C117.297 19.1335 116.367 18.1135 116.367 16.7435C116.367 15.3735 117.257 14.3635 118.637 14.3635ZM118.637 14.9635C117.737 14.9635 117.167 15.5735 117.067 16.4735H120.167C120.067 15.6035 119.497 14.9635 118.637 14.9635Z", "fill", "white"], ["d", "M60.4718 40.1943L59.3018 37.3143H53.8658L52.6958 40.1943H51.2558L56.0618 28.4943H57.1058L61.9118 40.1943H60.4718ZM54.3698 36.0543H58.7798L56.5658 30.6003L54.3698 36.0543ZM67.8417 31.7883C70.1997 31.7883 71.8917 33.6063 71.8917 36.0723C71.8917 38.5563 70.1997 40.3383 67.8417 40.3383C66.4377 40.3383 65.3937 39.7083 64.7637 38.7003V43.5063H63.4677V31.9143H64.7637V33.4263C65.3937 32.4183 66.4377 31.7883 67.8417 31.7883ZM67.6797 39.0963C69.4437 39.0963 70.6137 37.8363 70.6137 36.0723C70.6137 34.3083 69.4437 33.0303 67.6797 33.0303C65.9157 33.0303 64.7637 34.3083 64.7637 36.0723C64.7637 37.8363 65.9157 39.0963 67.6797 39.0963ZM78.2655 31.7883C80.6235 31.7883 82.3155 33.6063 82.3155 36.0723C82.3155 38.5563 80.6235 40.3383 78.2655 40.3383C76.8615 40.3383 75.8175 39.7083 75.1875 38.7003V43.5063H73.8915V31.9143H75.1875V33.4263C75.8175 32.4183 76.8615 31.7883 78.2655 31.7883ZM78.1035 39.0963C79.8675 39.0963 81.0375 37.8363 81.0375 36.0723C81.0375 34.3083 79.8675 33.0303 78.1035 33.0303C76.3395 33.0303 75.1875 34.3083 75.1875 36.0723C75.1875 37.8363 76.3395 39.0963 78.1035 39.0963ZM87.5588 37.6923L88.6748 36.9543C89.0888 38.0523 90.5288 39.0423 92.4728 39.0423C94.4888 39.0423 95.3348 38.2863 95.3348 36.9363C95.3348 35.4063 93.0488 35.0463 91.9868 34.7403C90.8528 34.4343 87.9728 33.9483 87.9728 31.5363C87.9728 29.3403 89.8448 28.2963 92.3468 28.2963C94.5068 28.2963 96.2348 29.3403 96.6668 30.6183L95.5508 31.2843C95.2268 30.4203 93.8948 29.6463 92.2028 29.6463C90.4568 29.6463 89.5028 30.3303 89.5028 31.4823C89.5028 32.9223 91.5908 33.2283 92.7428 33.5343C93.7868 33.8403 96.8288 34.4523 96.8288 36.8823C96.8288 39.1863 95.1548 40.3923 92.3468 40.3923C89.8268 40.3923 88.1168 39.2223 87.5588 37.6923ZM102.635 32.9403H100.655V38.0343C100.655 38.9163 101.195 39.1323 101.807 39.1323H102.545V40.1943H101.339C100.079 40.1943 99.3414 39.4743 99.3414 38.2143V32.9403H98.1894V31.9143H99.3414V29.3943H100.655V31.9143H102.635V32.9403ZM107.963 40.3563C105.479 40.3563 103.751 38.5203 103.751 36.0543C103.751 33.5703 105.479 31.7703 107.963 31.7703C110.447 31.7703 112.175 33.5703 112.175 36.0543C112.175 38.5203 110.447 40.3563 107.963 40.3563ZM107.963 39.0963C109.709 39.0963 110.861 37.8003 110.861 36.0543C110.861 34.3083 109.709 33.0303 107.963 33.0303C106.217 33.0303 105.047 34.3083 105.047 36.0543C105.047 37.8003 106.217 39.0963 107.963 39.0963ZM115.477 33.4443C116.107 32.3103 117.223 31.8063 118.393 31.7883V33.0303C117.115 33.0483 115.477 33.7143 115.477 35.7303V40.1943H114.181V31.9143H115.477V33.4443ZM123.323 31.7703C125.699 31.7703 127.283 33.5883 127.283 36.0543V36.4683H120.497C120.659 38.1243 121.793 39.2223 123.431 39.2223C124.655 39.2223 125.501 38.6643 125.969 37.9623L126.887 38.6283C126.167 39.6903 124.943 40.3563 123.431 40.3563C120.911 40.3563 119.237 38.5203 119.237 36.0543C119.237 33.5883 120.839 31.7703 123.323 31.7703ZM123.323 32.8503C121.703 32.8503 120.677 33.9483 120.497 35.5683H126.077C125.897 34.0023 124.871 32.8503 123.323 32.8503Z", "fill", "white"], ["d", "M26.9334 10.9312H11.0293C9.72644 10.9312 8.67065 11.9869 8.67065 13.2898V40.2009C8.67065 41.5038 9.72644 42.5596 11.0293 42.5596H26.9334C28.2363 42.5596 29.2921 41.5038 29.2921 40.2009V13.2898C29.2921 12.0094 28.2138 10.9312 26.9334 10.9312Z", "fill", "white"], ["d", "M28.1466 14.7275H9.79395V36.9214H28.1466V14.7275Z", "fill", "#404040"], ["d", "M22.7328 12.3462H15.2076C14.9156 12.3462 14.646 12.5933 14.646 12.9078C14.646 13.2223 14.8931 13.4694 15.2076 13.4694H22.7328C23.0249 13.4694 23.2944 13.2223 23.2944 12.9078C23.2944 12.6158 23.0473 12.3462 22.7328 12.3462Z", "fill", "#6639A6"], ["d", "M17.1846 39.5944C17.1846 38.606 17.9933 37.7749 18.9816 37.7749C19.97 37.7749 20.8012 38.5836 20.8012 39.5944C20.8012 40.5828 19.9925 41.3915 18.9816 41.3915C17.9933 41.4139 17.1846 40.6053 17.1846 39.5944Z", "fill", "#6639A6"], [1, "footer-best", "mt-8"], ["appUiAccordionHeader", ""], ["appUiAccordionContent", ""], [1, "footer-middle", "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-end", "gap-6", "mt-14", "pb-8"], [1, "text-sm", "text-[#bebcbd]"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h3", 3);
      \u0275\u0275text(5, "Need Help");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 4)(7, "li")(8, "a", 5);
      \u0275\u0275text(9, "Contact Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 5);
      \u0275\u0275text(12, "Track Order");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 5);
      \u0275\u0275text(15, "Returns & Refunds");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 5);
      \u0275\u0275text(18, "FAQ's");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 5);
      \u0275\u0275text(21, "Career");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 6)(23, "a", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 8);
      \u0275\u0275element(25, "rect", 9)(26, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "a", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 8);
      \u0275\u0275element(29, "rect", 9)(30, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "a", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 8);
      \u0275\u0275element(33, "rect", 9)(34, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "a", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(36, "svg", 8);
      \u0275\u0275element(37, "rect", 9)(38, "path", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(39, "div")(40, "h3", 3);
      \u0275\u0275text(41, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "ul", 4)(43, "li")(44, "a", 5);
      \u0275\u0275text(45, "About Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 5);
      \u0275\u0275text(48, "Euphoria Blog");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 5);
      \u0275\u0275text(51, "Euphoriastan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 5);
      \u0275\u0275text(54, "Collaboration");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 5);
      \u0275\u0275text(57, "Media");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div")(59, "h3", 3);
      \u0275\u0275text(60, "More Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "ul", 4)(62, "li")(63, "a", 5);
      \u0275\u0275text(64, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 5);
      \u0275\u0275text(67, "Privacy Policy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 5);
      \u0275\u0275text(70, "Shipping Policy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "li")(72, "a", 5);
      \u0275\u0275text(73, "Sitemap");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(74, "div")(75, "h3", 3);
      \u0275\u0275text(76, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "ul", 14)(78, "li")(79, "a", 15);
      \u0275\u0275text(80, " support@euphoria.in ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "li");
      \u0275\u0275text(82, "Eklingpura Chouraha, Ahmedabad Main Road");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "li");
      \u0275\u0275text(84, "(NH 8 \u2013 Near Mahadev Hotel) Udaipur, India \u2013 313002");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 16)(86, "h4", 3);
      \u0275\u0275text(87, "Download The App");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 17)(89, "div", 18)(90, "a", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(91, "svg", 20);
      \u0275\u0275element(92, "path", 21)(93, "path", 22)(94, "path", 23)(95, "path", 24)(96, "path", 25)(97, "path", 26)(98, "path", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(99, "div", 28)(100, "a", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(101, "svg", 20);
      \u0275\u0275element(102, "path", 29)(103, "path", 30)(104, "path", 31)(105, "path", 32)(106, "path", 33)(107, "path", 34)(108, "path", 35);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(109, "div", 36)(110, "app-ui-accordion");
      \u0275\u0275template(111, FooterComponent_ng_template_111_Template, 1, 0, "ng-template", 37)(112, FooterComponent_ng_template_112_Template, 1, 0, "ng-template", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 39)(114, "p", 40);
      \u0275\u0275text(115, "\xA9 2025 Euphoria. All rights reserved.");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [
    CommonModule,
    AccordionModule,
    RouterLink,
    UiAccordionComponent,
    UiAccordionHeaderSlot,
    UiAccordionContentSlot
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     .p-accordion .p-accordionpanel {\n  background: #3c4242 !important;\n}\n[_nghost-%COMP%]     .p-accordion .p-accordionpanel .p-accordionheader {\n  background: #3c4242 !important;\n}\n[_nghost-%COMP%]     .p-accordion .p-accordionpanel .p-accordioncontent {\n  background: #3c4242 !important;\n}\n[_nghost-%COMP%]     .p-accordion .p-accordionpanel .p-accordioncontent .p-accordioncontent-content {\n  background: #3c4242 !important;\n}\n[_nghost-%COMP%]     .p-accordion .p-accordionpanel .p-accordioncontent .p-accordioncontent-content p {\n  color: white !important;\n}\n/*# sourceMappingURL=footer.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [
      CommonModule,
      AccordionModule,
      RouterLink,
      UiAccordionComponent,
      UiAccordionHeaderSlot,
      UiAccordionContentSlot
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<footer class="bg-[#3c4242] text-[#f6f6f6]">
  <div class="container mx-auto px-4 py-14">
    <!-- TOP -->
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <!-- HELP -->
      <div>
        <h3 class="footer-title mb-4">Need Help</h3>
        <ul class="space-y-2 footer-menu">
          <li><a routerLink="/">Contact Us</a></li>
          <li><a routerLink="/">Track Order</a></li>
          <li><a routerLink="/">Returns & Refunds</a></li>
          <li><a routerLink="/">FAQ's</a></li>
          <li><a routerLink="/">Career</a></li>
        </ul>

        <!-- Social -->
        <div class="flex gap-3 mt-8">
          <!-- icons -->
          <a href="#" class="hover:opacity-80"
            ><svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="37.024" height="37.024" rx="10.68" fill="#F6F6F6" />
              <path
                d="M22.4367 19.2686L22.9311 16.0472H19.84V13.9568C19.84 13.0755 20.2718 12.2164 21.6562 12.2164H23.0614V9.47374C23.0614 9.47374 21.7862 9.2561 20.567 9.2561C18.0215 9.2561 16.3576 10.799 16.3576 13.5921V16.0472H13.528V19.2686H16.3576V27.0561H19.84V19.2686H22.4367Z"
                fill="#2A2F2F"
              />
            </svg>
          </a>
          <a href="#" class="hover:opacity-80"
            ><svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="37.024" height="37.024" rx="10.68" fill="#F6F6F6" />
              <path
                d="M18.4736 14.4755C16.2625 14.4755 14.4791 16.2589 14.4791 18.47C14.4791 20.6811 16.2625 22.4646 18.4736 22.4646C20.6847 22.4646 22.4682 20.6811 22.4682 18.47C22.4682 16.2589 20.6847 14.4755 18.4736 14.4755ZM18.4736 21.067C17.0448 21.067 15.8766 19.9024 15.8766 18.47C15.8766 17.0377 17.0413 15.873 18.4736 15.873C19.906 15.873 21.0706 17.0377 21.0706 18.47C21.0706 19.9024 19.9025 21.067 18.4736 21.067ZM23.5633 14.3121C23.5633 14.8301 23.1461 15.2438 22.6316 15.2438C22.1136 15.2438 21.6999 14.8266 21.6999 14.3121C21.6999 13.7975 22.1171 13.3804 22.6316 13.3804C23.1461 13.3804 23.5633 13.7975 23.5633 14.3121ZM26.209 15.2577C26.1499 14.0096 25.8648 12.9041 24.9505 11.9932C24.0396 11.0823 22.9341 10.7973 21.686 10.7347C20.3997 10.6617 16.5441 10.6617 15.2578 10.7347C14.0132 10.7938 12.9077 11.0789 11.9933 11.9897C11.079 12.9006 10.7974 14.0061 10.7348 15.2542C10.6618 16.5405 10.6618 20.3961 10.7348 21.6824C10.7939 22.9305 11.079 24.036 11.9933 24.9469C12.9077 25.8577 14.0097 26.1428 15.2578 26.2054C16.5441 26.2784 20.3997 26.2784 21.686 26.2054C22.9341 26.1463 24.0396 25.8612 24.9505 24.9469C25.8613 24.036 26.1464 22.9305 26.209 21.6824C26.282 20.3961 26.282 16.544 26.209 15.2577ZM24.5472 23.0626C24.276 23.744 23.7511 24.2689 23.0662 24.5436C22.0406 24.9504 19.607 24.8565 18.4736 24.8565C17.3403 24.8565 14.9032 24.9469 13.8811 24.5436C13.1997 24.2724 12.6747 23.7475 12.4001 23.0626C11.9933 22.037 12.0872 19.6034 12.0872 18.47C12.0872 17.3367 11.9968 14.8996 12.4001 13.8775C12.6713 13.1961 13.1962 12.6711 13.8811 12.3965C14.9067 11.9897 17.3403 12.0836 18.4736 12.0836C19.607 12.0836 22.0441 11.9932 23.0662 12.3965C23.7476 12.6677 24.2725 13.1926 24.5472 13.8775C24.954 14.9031 24.8601 17.3367 24.8601 18.47C24.8601 19.6034 24.954 22.0405 24.5472 23.0626Z"
                fill="#2A2F2F"
              />
            </svg>
          </a>
          <a href="#" class="hover:opacity-80"
            ><svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="37.024" height="37.024" rx="10.68" fill="#F6F6F6" />
              <path
                d="M27.3624 14.9947C27.3737 15.1529 27.3737 15.311 27.3737 15.4691C27.3737 20.2918 23.703 25.8487 16.9941 25.8487C14.9273 25.8487 13.0072 25.25 11.3921 24.211C11.6858 24.2449 11.9681 24.2562 12.2731 24.2562C13.9785 24.2562 15.5485 23.6802 16.8021 22.6976C15.1983 22.6637 13.8543 21.6133 13.3912 20.1676C13.6171 20.2015 13.843 20.2241 14.0802 20.2241C14.4077 20.2241 14.7353 20.1789 15.0402 20.0998C13.3687 19.761 12.1149 18.2927 12.1149 16.5195V16.4743C12.6006 16.7454 13.1653 16.9148 13.7639 16.9374C12.7813 16.2823 12.1375 15.1642 12.1375 13.8992C12.1375 13.2215 12.3182 12.6003 12.6345 12.0582C14.4303 14.2719 17.1297 15.7176 20.1565 15.8757C20.1001 15.6046 20.0662 15.3223 20.0662 15.0399C20.0662 13.0295 21.6926 11.3918 23.7143 11.3918C24.7646 11.3918 25.7134 11.8323 26.3798 12.5439C27.2042 12.3858 27.9948 12.0808 28.6951 11.6629C28.424 12.51 27.848 13.2216 27.0913 13.6733C27.8254 13.5943 28.537 13.3909 29.192 13.1086C28.6952 13.8314 28.074 14.4752 27.3624 14.9947Z"
                fill="#2A2F2F"
              />
            </svg>
          </a>
          <a href="#" class="hover:opacity-80"
            ><svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="37.024" height="37.024" rx="10.68" fill="#F6F6F6" />
              <path
                d="M14.8629 15.244V24.272H12.4516V15.244H14.8629ZM12.3014 12.8911C12.3014 12.5407 12.4238 12.2514 12.6685 12.0233C12.9133 11.7953 13.2415 11.6813 13.6531 11.6813C14.0591 11.6813 14.3845 11.7953 14.6293 12.0233C14.8796 12.2514 15.0048 12.5407 15.0048 12.8911C15.0048 13.2415 14.8796 13.5308 14.6293 13.7588C14.3845 13.9869 14.0591 14.1009 13.6531 14.1009C13.2415 14.1009 12.9133 13.9869 12.6685 13.7588C12.4238 13.5308 12.3014 13.2415 12.3014 12.8911ZM19.5434 17.1714V24.272H17.1404V15.244H19.3932L19.5434 17.1714ZM19.193 19.4409H18.5422C18.5422 18.7734 18.6284 18.1727 18.8008 17.6387C18.9733 17.0991 19.2152 16.6402 19.5267 16.262C19.8382 15.8782 20.2082 15.5861 20.6365 15.3859C21.0703 15.1801 21.5543 15.0772 22.0883 15.0772C22.511 15.0772 22.8976 15.1383 23.2481 15.2607C23.5985 15.3831 23.8989 15.5778 24.1492 15.8448C24.4051 16.1118 24.5997 16.465 24.7332 16.9044C24.8723 17.3439 24.9418 17.8807 24.9418 18.5148V24.272H22.5222V18.5064C22.5222 18.1059 22.4665 17.7944 22.3553 17.5719C22.244 17.3494 22.0799 17.1937 21.863 17.1047C21.6516 17.0101 21.3902 16.9628 21.0787 16.9628C20.7561 16.9628 20.4752 17.0268 20.236 17.1548C20.0023 17.2827 19.8077 17.4607 19.6519 17.6888C19.5017 17.9113 19.3877 18.1727 19.3098 18.4731C19.2319 18.7734 19.193 19.0961 19.193 19.4409Z"
                fill="#2A2F2F"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- COMPANY -->
      <div>
        <h3 class="footer-title mb-4">Company</h3>
        <ul class="space-y-2 footer-menu">
          <li><a routerLink="/">About Us</a></li>
          <li><a routerLink="/">Euphoria Blog</a></li>
          <li><a routerLink="/">Euphoriastan</a></li>
          <li><a routerLink="/">Collaboration</a></li>
          <li><a routerLink="/">Media</a></li>
        </ul>
      </div>

      <!-- INFO -->
      <div>
        <h3 class="footer-title mb-4">More Info</h3>
        <ul class="space-y-2 footer-menu">
          <li><a routerLink="/">Terms & Conditions</a></li>
          <li><a routerLink="/">Privacy Policy</a></li>
          <li><a routerLink="/">Shipping Policy</a></li>
          <li><a routerLink="/">Sitemap</a></li>
        </ul>
      </div>

      <!-- LOCATION -->
      <div>
        <h3 class="footer-title mb-4">Location</h3>
        <ul class="space-y-2 text-sm text-[#bebcbd]">
          <li>
            <a href="mailto:support@euphoria.in" class="hover:text-white"> support@euphoria.in </a>
          </li>
          <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
          <li>(NH 8 \u2013 Near Mahadev Hotel) Udaipur, India \u2013 313002</li>
        </ul>

        <!-- DOWNLOAD -->
        <div class="mt-8">
          <h4 class="footer-title mb-4">Download The App</h4>
          <div class="flex flex-wrap gap-4">
            <div class="google-play">
              <a href="#">
                <svg
                  width="154"
                  height="52"
                  viewBox="0 0 154 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M153.762 37.8649C153.762 45.3228 147.652 51.4328 140.194 51.4328H13.5679C6.11003 51.4328 0 45.3228 0 37.8649V13.7617C0 6.30384 6.11003 0.193848 13.5679 0.193848H140.194C147.652 0.193848 153.762 6.30384 153.762 13.7617V37.8649Z"
                    fill="#404040"
                  />
                  <path
                    d="M54.9269 14.5938H55.6569V19.1938H54.9269V18.3638C54.5769 18.9138 53.9969 19.2738 53.2169 19.2738C51.9069 19.2738 50.9769 18.2638 50.9769 16.8938C50.9769 15.5138 51.9069 14.5238 53.2169 14.5238C53.9969 14.5238 54.5769 14.8738 54.9269 15.4238V14.5938ZM53.3069 18.5838C54.2969 18.5838 54.9269 17.8738 54.9269 16.8938C54.9269 15.9138 54.2969 15.2138 53.3069 15.2138C52.3269 15.2138 51.6769 15.9138 51.6769 16.8938C51.6769 17.8738 52.3269 18.5838 53.3069 18.5838ZM59.1079 14.5238C60.0279 14.5238 60.9379 15.0638 60.9379 16.3638V19.1938H60.2179V16.4638C60.2179 15.5838 59.5979 15.1538 58.9179 15.1538C58.2279 15.1538 57.6279 15.5838 57.6279 16.4638V19.1938H56.9079V14.5938H57.6279V15.2138C57.9779 14.7338 58.5379 14.5238 59.1079 14.5238ZM66.0109 12.6938H66.7409V19.1938H66.0109V18.3638C65.6609 18.9138 65.0809 19.2738 64.3009 19.2738C62.9909 19.2738 62.0609 18.2638 62.0609 16.8938C62.0609 15.5138 62.9909 14.5238 64.3009 14.5238C65.0809 14.5238 65.6609 14.8738 66.0109 15.4238V12.6938ZM64.3909 18.5838C65.3809 18.5838 66.0109 17.8738 66.0109 16.8938C66.0109 15.9138 65.3809 15.2138 64.3909 15.2138C63.4109 15.2138 62.7609 15.9138 62.7609 16.8938C62.7609 17.8738 63.4109 18.5838 64.3909 18.5838ZM68.7119 15.4438C69.0619 14.8138 69.6819 14.5338 70.3319 14.5238V15.2138C69.6219 15.2238 68.7119 15.5938 68.7119 16.7138V19.1938H67.9919V14.5938H68.7119V15.4438ZM73.1411 19.2838C71.7611 19.2838 70.8011 18.2638 70.8011 16.8938C70.8011 15.5138 71.7611 14.5138 73.1411 14.5138C74.5211 14.5138 75.4811 15.5138 75.4811 16.8938C75.4811 18.2638 74.5211 19.2838 73.1411 19.2838ZM73.1411 18.5838C74.1111 18.5838 74.7511 17.8638 74.7511 16.8938C74.7511 15.9238 74.1111 15.2138 73.1411 15.2138C72.1711 15.2138 71.5211 15.9238 71.5211 16.8938C71.5211 17.8638 72.1711 18.5838 73.1411 18.5838ZM77.0354 13.6138C76.8154 13.6138 76.5954 13.4338 76.5954 13.1638C76.5954 12.8938 76.8154 12.7338 77.0354 12.7338C77.2554 12.7338 77.4754 12.8938 77.4754 13.1638C77.4754 13.4338 77.2554 13.6138 77.0354 13.6138ZM77.3954 19.1938H76.6754V14.5938H77.4054L77.3954 19.1938ZM82.5441 12.6938H83.2741V19.1938H82.5441V18.3638C82.1941 18.9138 81.6141 19.2738 80.8341 19.2738C79.5241 19.2738 78.5941 18.2638 78.5941 16.8938C78.5941 15.5138 79.5241 14.5238 80.8341 14.5238C81.6141 14.5238 82.1941 14.8738 82.5441 15.4238V12.6938ZM80.9241 18.5838C81.9141 18.5838 82.5441 17.8738 82.5441 16.8938C82.5441 15.9138 81.9141 15.2138 80.9241 15.2138C79.9441 15.2138 79.2941 15.9138 79.2941 16.8938C79.2941 17.8738 79.9441 18.5838 80.9241 18.5838ZM90.3371 14.5938H91.0671V19.1938H90.3371V18.3638C89.9871 18.9138 89.4071 19.2738 88.6271 19.2738C87.3171 19.2738 86.3871 18.2638 86.3871 16.8938C86.3871 15.5138 87.3171 14.5238 88.6271 14.5238C89.4071 14.5238 89.9871 14.8738 90.3371 15.4238V14.5938ZM88.7171 18.5838C89.7071 18.5838 90.3371 17.8738 90.3371 16.8938C90.3371 15.9138 89.7071 15.2138 88.7171 15.2138C87.7371 15.2138 87.0871 15.9138 87.0871 16.8938C87.0871 17.8738 87.7371 18.5838 88.7171 18.5838ZM94.7481 14.5238C96.0581 14.5238 96.9981 15.5338 96.9981 16.9038C96.9981 18.2838 96.0581 19.2738 94.7481 19.2738C93.9681 19.2738 93.3881 18.9238 93.0381 18.3638V21.0338H92.3181V14.5938H93.0381V15.4338C93.3881 14.8738 93.9681 14.5238 94.7481 14.5238ZM94.6581 18.5838C95.6381 18.5838 96.2881 17.8838 96.2881 16.9038C96.2881 15.9238 95.6381 15.2138 94.6581 15.2138C93.6781 15.2138 93.0381 15.9238 93.0381 16.9038C93.0381 17.8838 93.6781 18.5838 94.6581 18.5838ZM100.539 14.5238C101.849 14.5238 102.789 15.5338 102.789 16.9038C102.789 18.2838 101.849 19.2738 100.539 19.2738C99.7591 19.2738 99.1791 18.9238 98.8291 18.3638V21.0338H98.1091V14.5938H98.8291V15.4338C99.1791 14.8738 99.7591 14.5238 100.539 14.5238ZM100.449 18.5838C101.429 18.5838 102.079 17.8838 102.079 16.9038C102.079 15.9238 101.429 15.2138 100.449 15.2138C99.4691 15.2138 98.8291 15.9238 98.8291 16.9038C98.8291 17.8838 99.4691 18.5838 100.449 18.5838ZM108.102 19.2838C106.722 19.2838 105.762 18.2638 105.762 16.8938C105.762 15.5138 106.722 14.5138 108.102 14.5138C109.482 14.5138 110.442 15.5138 110.442 16.8938C110.442 18.2638 109.482 19.2838 108.102 19.2838ZM108.102 18.5838C109.072 18.5838 109.712 17.8638 109.712 16.8938C109.712 15.9238 109.072 15.2138 108.102 15.2138C107.132 15.2138 106.482 15.9238 106.482 16.8938C106.482 17.8638 107.132 18.5838 108.102 18.5838ZM113.756 14.5238C114.676 14.5238 115.586 15.0638 115.586 16.3638V19.1938H114.866V16.4638C114.866 15.5838 114.246 15.1538 113.566 15.1538C112.876 15.1538 112.276 15.5838 112.276 16.4638V19.1938H111.556V14.5938H112.276V15.2138C112.626 14.7338 113.186 14.5238 113.756 14.5238Z"
                    fill="white"
                  />
                  <path
                    d="M60.1248 34.3746C60.0168 37.7046 57.8928 40.0986 54.5088 40.0986C51.0348 40.0986 48.6588 37.5786 48.6588 34.1046C48.6588 30.6306 51.0348 28.1106 54.5088 28.1106C56.5788 28.1106 58.2348 29.0106 59.2428 30.4506L58.1268 31.2426C57.2988 30.0906 56.0028 29.4786 54.5088 29.4786C51.8268 29.4786 50.0088 31.4226 50.0088 34.1046C50.0088 36.7866 51.8268 38.7306 54.5088 38.7306C56.7228 38.7306 58.3608 37.3086 58.5948 35.0586H54.4548V33.7986H60.1248V34.3746ZM66.1757 40.1166C63.6917 40.1166 61.9637 38.2806 61.9637 35.8146C61.9637 33.3306 63.6917 31.5306 66.1757 31.5306C68.6597 31.5306 70.3877 33.3306 70.3877 35.8146C70.3877 38.2806 68.6597 40.1166 66.1757 40.1166ZM66.1757 38.8566C67.9217 38.8566 69.0737 37.5606 69.0737 35.8146C69.0737 34.0686 67.9217 32.7906 66.1757 32.7906C64.4297 32.7906 63.2597 34.0686 63.2597 35.8146C63.2597 37.5606 64.4297 38.8566 66.1757 38.8566ZM76.3535 40.1166C73.8695 40.1166 72.1415 38.2806 72.1415 35.8146C72.1415 33.3306 73.8695 31.5306 76.3535 31.5306C78.8375 31.5306 80.5655 33.3306 80.5655 35.8146C80.5655 38.2806 78.8375 40.1166 76.3535 40.1166ZM76.3535 38.8566C78.0995 38.8566 79.2515 37.5606 79.2515 35.8146C79.2515 34.0686 78.0995 32.7906 76.3535 32.7906C74.6075 32.7906 73.4375 34.0686 73.4375 35.8146C73.4375 37.5606 74.6075 38.8566 76.3535 38.8566ZM89.4292 31.6746H90.7432V39.3426C90.7432 41.7186 89.0512 43.3746 86.3872 43.3746C84.9472 43.3746 83.7232 42.8166 82.9672 41.9166L83.8492 41.1786C84.5152 41.9166 85.4332 42.2406 86.3872 42.2406C87.9172 42.2406 89.4292 41.3226 89.4292 39.3426V38.4606C88.7992 39.4506 87.7552 40.0986 86.3512 40.0986C83.9932 40.0986 82.3192 38.2806 82.3192 35.8146C82.3192 33.3486 83.9932 31.5486 86.3512 31.5486C87.7552 31.5486 88.7992 32.1786 89.4292 33.1686V31.6746ZM86.5132 38.8566C88.2772 38.8566 89.4292 37.5786 89.4292 35.8146C89.4292 34.0506 88.2772 32.7906 86.5132 32.7906C84.7492 32.7906 83.5792 34.0506 83.5792 35.8146C83.5792 37.5786 84.7492 38.8566 86.5132 38.8566ZM94.291 39.9546H92.995V28.2546H94.291V39.9546ZM100.397 31.5306C102.773 31.5306 104.357 33.3486 104.357 35.8146V36.2286H97.5714C97.7334 37.8846 98.8674 38.9826 100.505 38.9826C101.729 38.9826 102.575 38.4246 103.043 37.7226L103.961 38.3886C103.241 39.4506 102.017 40.1166 100.505 40.1166C97.9854 40.1166 96.3114 38.2806 96.3114 35.8146C96.3114 33.3486 97.9134 31.5306 100.397 31.5306ZM100.397 32.6106C98.7774 32.6106 97.7514 33.7086 97.5714 35.3286H103.151C102.971 33.7626 101.945 32.6106 100.397 32.6106ZM115.249 28.2546C117.013 28.2546 118.597 29.6586 118.597 31.8186C118.597 33.9786 117.013 35.3826 115.249 35.3826H111.325V39.9546H109.975V28.2546H115.249ZM115.051 34.0686C116.311 34.0686 117.229 33.0786 117.229 31.8186C117.229 30.5766 116.329 29.5866 115.051 29.5866H111.325V34.0686H115.051ZM121.783 39.9546H120.487V28.2546H121.783V39.9546ZM130.914 31.6746H132.228V39.9546H130.914V38.4606C130.284 39.4506 129.24 40.0986 127.836 40.0986C125.478 40.0986 123.804 38.2806 123.804 35.8146C123.804 33.3306 125.478 31.5486 127.836 31.5486C129.24 31.5486 130.284 32.1786 130.914 33.1686V31.6746ZM127.998 38.8566C129.78 38.8566 130.914 37.5786 130.914 35.8146C130.914 34.0506 129.78 32.7906 127.998 32.7906C126.234 32.7906 125.064 34.0506 125.064 35.8146C125.064 37.5786 126.234 38.8566 127.998 38.8566ZM140.185 31.6746H141.535L136.927 43.2666H135.649L136.945 39.9366L133.705 31.6746H135.055L137.611 38.1546L140.185 31.6746Z"
                    fill="white"
                  />
                  <path
                    d="M8.67065 42.3127V9.33643L38.3224 25.3528L8.67065 42.3127Z"
                    fill="#5CA9B3"
                  />
                  <path
                    d="M8.67065 9.33643L29.6515 30.3172L38.3224 25.3528L8.67065 9.33643Z"
                    fill="#C8DB9B"
                  />
                  <path
                    d="M29.4718 20.5679L8.67065 42.3125L38.3224 25.3526L29.4718 20.5679Z"
                    fill="#AC5067"
                  />
                  <path
                    d="M29.6517 30.317L38.3225 25.3526L29.4719 20.5679L24.7996 25.4649L29.6517 30.317Z"
                    fill="#F4A676"
                  />
                </svg>
              </a>
            </div>
            <div class="app-store">
              <a href="#">
                <svg
                  width="154"
                  height="52"
                  viewBox="0 0 154 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M153.762 37.8874C153.762 45.3453 147.652 51.4553 140.194 51.4553H13.5679C6.11003 51.4553 0 45.3453 0 37.8874V13.7618C0 6.30391 6.11003 0.193848 13.5679 0.193848H140.194C147.652 0.193848 153.762 6.30391 153.762 13.7618V37.8874Z"
                    fill="#404040"
                  />
                  <path
                    d="M58.5246 19.0435L57.8746 17.4435H54.8546L54.2046 19.0435H53.4046L56.0746 12.5435H56.6546L59.3246 19.0435H58.5246ZM55.1346 16.7435H57.5846L56.3546 13.7135L55.1346 16.7435ZM60.9732 19.0435L59.1632 14.4435H59.9132L61.3332 18.0535L62.7632 14.4435H63.5132L61.6832 19.0435H60.9732ZM67.9833 14.4435H68.7133V19.0435H67.9833V18.2135C67.6333 18.7635 67.0533 19.1235 66.2733 19.1235C64.9633 19.1235 64.0333 18.1135 64.0333 16.7435C64.0333 15.3635 64.9633 14.3735 66.2733 14.3735C67.0533 14.3735 67.6333 14.7235 67.9833 15.2735V14.4435ZM66.3633 18.4335C67.3533 18.4335 67.9833 17.7235 67.9833 16.7435C67.9833 15.7635 67.3533 15.0635 66.3633 15.0635C65.3833 15.0635 64.7333 15.7635 64.7333 16.7435C64.7333 17.7235 65.3833 18.4335 66.3633 18.4335ZM70.4043 13.4635C70.1843 13.4635 69.9643 13.2835 69.9643 13.0135C69.9643 12.7435 70.1843 12.5835 70.4043 12.5835C70.6243 12.5835 70.8443 12.7435 70.8443 13.0135C70.8443 13.2835 70.6243 13.4635 70.4043 13.4635ZM70.7643 19.0435H70.0443V14.4435H70.7743L70.7643 19.0435ZM72.823 19.0435H72.103V12.5435H72.823V19.0435ZM77.8954 14.4435H78.6254V19.0435H77.8954V18.2135C77.5454 18.7635 76.9654 19.1235 76.1854 19.1235C74.8754 19.1235 73.9454 18.1135 73.9454 16.7435C73.9454 15.3635 74.8754 14.3735 76.1854 14.3735C76.9654 14.3735 77.5454 14.7235 77.8954 15.2735V14.4435ZM76.2754 18.4335C77.2654 18.4335 77.8954 17.7235 77.8954 16.7435C77.8954 15.7635 77.2654 15.0635 76.2754 15.0635C75.2954 15.0635 74.6454 15.7635 74.6454 16.7435C74.6454 17.7235 75.2954 18.4335 76.2754 18.4335ZM82.3064 14.3735C83.6164 14.3735 84.5564 15.3635 84.5564 16.7435C84.5564 18.1135 83.6164 19.1235 82.3064 19.1235C81.5264 19.1235 80.9464 18.7635 80.5964 18.2135V19.0435H79.8764V12.5435H80.5964V15.2735C80.9464 14.7235 81.5264 14.3735 82.3064 14.3735ZM82.2164 18.4335C83.1964 18.4335 83.8464 17.7235 83.8464 16.7435C83.8464 15.7635 83.1964 15.0635 82.2164 15.0635C81.2364 15.0635 80.5964 15.7635 80.5964 16.7435C80.5964 17.7235 81.2364 18.4335 82.2164 18.4335ZM86.3875 19.0435H85.6675V12.5435H86.3875V19.0435ZM89.7799 14.3635C91.0999 14.3635 91.9799 15.3735 91.9799 16.7435V16.9735H88.2099C88.2999 17.8935 88.9299 18.5035 89.8399 18.5035C90.5199 18.5035 90.9899 18.1935 91.2499 17.8035L91.7599 18.1735C91.3599 18.7635 90.6799 19.1335 89.8399 19.1335C88.4399 19.1335 87.5099 18.1135 87.5099 16.7435C87.5099 15.3735 88.3999 14.3635 89.7799 14.3635ZM89.7799 14.9635C88.8799 14.9635 88.3099 15.5735 88.2099 16.4735H91.3099C91.2099 15.6035 90.6399 14.9635 89.7799 14.9635ZM97.301 19.1335C95.921 19.1335 94.961 18.1135 94.961 16.7435C94.961 15.3635 95.921 14.3635 97.301 14.3635C98.681 14.3635 99.641 15.3635 99.641 16.7435C99.641 18.1135 98.681 19.1335 97.301 19.1335ZM97.301 18.4335C98.271 18.4335 98.911 17.7135 98.911 16.7435C98.911 15.7735 98.271 15.0635 97.301 15.0635C96.331 15.0635 95.681 15.7735 95.681 16.7435C95.681 17.7135 96.331 18.4335 97.301 18.4335ZM102.955 14.3735C103.875 14.3735 104.785 14.9135 104.785 16.2135V19.0435H104.065V16.3135C104.065 15.4335 103.445 15.0035 102.765 15.0035C102.075 15.0035 101.475 15.4335 101.475 16.3135V19.0435H100.755V14.4435H101.475V15.0635C101.825 14.5835 102.385 14.3735 102.955 14.3735ZM110.22 15.0135H109.12V17.8435C109.12 18.3335 109.42 18.4535 109.76 18.4535H110.17V19.0435H109.5C108.8 19.0435 108.39 18.6435 108.39 17.9435V15.0135H107.75V14.4435H108.39V13.0435H109.12V14.4435H110.22V15.0135ZM113.414 14.3735C114.334 14.3735 115.244 14.9135 115.244 16.2135V19.0435H114.524V16.3135C114.524 15.4335 113.904 15.0035 113.224 15.0035C112.534 15.0035 111.934 15.4335 111.934 16.3135V19.0435H111.214V12.5435H111.934V15.0635C112.284 14.5835 112.844 14.3735 113.414 14.3735ZM118.637 14.3635C119.957 14.3635 120.837 15.3735 120.837 16.7435V16.9735H117.067C117.157 17.8935 117.787 18.5035 118.697 18.5035C119.377 18.5035 119.847 18.1935 120.107 17.8035L120.617 18.1735C120.217 18.7635 119.537 19.1335 118.697 19.1335C117.297 19.1335 116.367 18.1135 116.367 16.7435C116.367 15.3735 117.257 14.3635 118.637 14.3635ZM118.637 14.9635C117.737 14.9635 117.167 15.5735 117.067 16.4735H120.167C120.067 15.6035 119.497 14.9635 118.637 14.9635Z"
                    fill="white"
                  />
                  <path
                    d="M60.4718 40.1943L59.3018 37.3143H53.8658L52.6958 40.1943H51.2558L56.0618 28.4943H57.1058L61.9118 40.1943H60.4718ZM54.3698 36.0543H58.7798L56.5658 30.6003L54.3698 36.0543ZM67.8417 31.7883C70.1997 31.7883 71.8917 33.6063 71.8917 36.0723C71.8917 38.5563 70.1997 40.3383 67.8417 40.3383C66.4377 40.3383 65.3937 39.7083 64.7637 38.7003V43.5063H63.4677V31.9143H64.7637V33.4263C65.3937 32.4183 66.4377 31.7883 67.8417 31.7883ZM67.6797 39.0963C69.4437 39.0963 70.6137 37.8363 70.6137 36.0723C70.6137 34.3083 69.4437 33.0303 67.6797 33.0303C65.9157 33.0303 64.7637 34.3083 64.7637 36.0723C64.7637 37.8363 65.9157 39.0963 67.6797 39.0963ZM78.2655 31.7883C80.6235 31.7883 82.3155 33.6063 82.3155 36.0723C82.3155 38.5563 80.6235 40.3383 78.2655 40.3383C76.8615 40.3383 75.8175 39.7083 75.1875 38.7003V43.5063H73.8915V31.9143H75.1875V33.4263C75.8175 32.4183 76.8615 31.7883 78.2655 31.7883ZM78.1035 39.0963C79.8675 39.0963 81.0375 37.8363 81.0375 36.0723C81.0375 34.3083 79.8675 33.0303 78.1035 33.0303C76.3395 33.0303 75.1875 34.3083 75.1875 36.0723C75.1875 37.8363 76.3395 39.0963 78.1035 39.0963ZM87.5588 37.6923L88.6748 36.9543C89.0888 38.0523 90.5288 39.0423 92.4728 39.0423C94.4888 39.0423 95.3348 38.2863 95.3348 36.9363C95.3348 35.4063 93.0488 35.0463 91.9868 34.7403C90.8528 34.4343 87.9728 33.9483 87.9728 31.5363C87.9728 29.3403 89.8448 28.2963 92.3468 28.2963C94.5068 28.2963 96.2348 29.3403 96.6668 30.6183L95.5508 31.2843C95.2268 30.4203 93.8948 29.6463 92.2028 29.6463C90.4568 29.6463 89.5028 30.3303 89.5028 31.4823C89.5028 32.9223 91.5908 33.2283 92.7428 33.5343C93.7868 33.8403 96.8288 34.4523 96.8288 36.8823C96.8288 39.1863 95.1548 40.3923 92.3468 40.3923C89.8268 40.3923 88.1168 39.2223 87.5588 37.6923ZM102.635 32.9403H100.655V38.0343C100.655 38.9163 101.195 39.1323 101.807 39.1323H102.545V40.1943H101.339C100.079 40.1943 99.3414 39.4743 99.3414 38.2143V32.9403H98.1894V31.9143H99.3414V29.3943H100.655V31.9143H102.635V32.9403ZM107.963 40.3563C105.479 40.3563 103.751 38.5203 103.751 36.0543C103.751 33.5703 105.479 31.7703 107.963 31.7703C110.447 31.7703 112.175 33.5703 112.175 36.0543C112.175 38.5203 110.447 40.3563 107.963 40.3563ZM107.963 39.0963C109.709 39.0963 110.861 37.8003 110.861 36.0543C110.861 34.3083 109.709 33.0303 107.963 33.0303C106.217 33.0303 105.047 34.3083 105.047 36.0543C105.047 37.8003 106.217 39.0963 107.963 39.0963ZM115.477 33.4443C116.107 32.3103 117.223 31.8063 118.393 31.7883V33.0303C117.115 33.0483 115.477 33.7143 115.477 35.7303V40.1943H114.181V31.9143H115.477V33.4443ZM123.323 31.7703C125.699 31.7703 127.283 33.5883 127.283 36.0543V36.4683H120.497C120.659 38.1243 121.793 39.2223 123.431 39.2223C124.655 39.2223 125.501 38.6643 125.969 37.9623L126.887 38.6283C126.167 39.6903 124.943 40.3563 123.431 40.3563C120.911 40.3563 119.237 38.5203 119.237 36.0543C119.237 33.5883 120.839 31.7703 123.323 31.7703ZM123.323 32.8503C121.703 32.8503 120.677 33.9483 120.497 35.5683H126.077C125.897 34.0023 124.871 32.8503 123.323 32.8503Z"
                    fill="white"
                  />
                  <path
                    d="M26.9334 10.9312H11.0293C9.72644 10.9312 8.67065 11.9869 8.67065 13.2898V40.2009C8.67065 41.5038 9.72644 42.5596 11.0293 42.5596H26.9334C28.2363 42.5596 29.2921 41.5038 29.2921 40.2009V13.2898C29.2921 12.0094 28.2138 10.9312 26.9334 10.9312Z"
                    fill="white"
                  />
                  <path d="M28.1466 14.7275H9.79395V36.9214H28.1466V14.7275Z" fill="#404040" />
                  <path
                    d="M22.7328 12.3462H15.2076C14.9156 12.3462 14.646 12.5933 14.646 12.9078C14.646 13.2223 14.8931 13.4694 15.2076 13.4694H22.7328C23.0249 13.4694 23.2944 13.2223 23.2944 12.9078C23.2944 12.6158 23.0473 12.3462 22.7328 12.3462Z"
                    fill="#6639A6"
                  />
                  <path
                    d="M17.1846 39.5944C17.1846 38.606 17.9933 37.7749 18.9816 37.7749C19.97 37.7749 20.8012 38.5836 20.8012 39.5944C20.8012 40.5828 19.9925 41.3915 18.9816 41.3915C17.9933 41.4139 17.1846 40.6053 17.1846 39.5944Z"
                    fill="#6639A6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ACCORDION -->
    <div class="footer-best mt-8">
      <!-- <p-accordion [value]="['0']" [multiple]="false">
        <p-accordion-panel value="0">
          <p-accordion-header class="!text-2xl sm:!text-3xl !font-bold !text-[#f6f6f6]">
            Popular Categories
          </p-accordion-header>

          <p-accordion-content>
            <p class="text-[#bebcbd] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </p-accordion-content>
        </p-accordion-panel>
      </p-accordion> -->
      <app-ui-accordion>
        <ng-template appUiAccordionHeader>Popular Categories</ng-template>
        <ng-template appUiAccordionContent> ... </ng-template>
      </app-ui-accordion>
    </div>

    <!-- MIDDLE -->
    <div
      class="footer-middle flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mt-14 pb-8"
    >
      <p class="text-sm text-[#bebcbd]">\xA9 2025 Euphoria. All rights reserved.</p>
    </div>
  </div>
</footer>
`, styles: ["/* libs/frontend/core/layout/src/lib/layout/footer/footer.scss */\n:host {\n  display: block;\n}\n:host ::ng-deep .p-accordion .p-accordionpanel {\n  background: #3c4242 !important;\n}\n:host ::ng-deep .p-accordion .p-accordionpanel .p-accordionheader {\n  background: #3c4242 !important;\n}\n:host ::ng-deep .p-accordion .p-accordionpanel .p-accordioncontent {\n  background: #3c4242 !important;\n}\n:host ::ng-deep .p-accordion .p-accordionpanel .p-accordioncontent .p-accordioncontent-content {\n  background: #3c4242 !important;\n}\n:host ::ng-deep .p-accordion .p-accordionpanel .p-accordioncontent .p-accordioncontent-content p {\n  color: white !important;\n}\n/*# sourceMappingURL=footer.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "libs/frontend/core/layout/src/lib/layout/footer/footer.ts", lineNumber: 21 });
})();

// libs/frontend/core/layout/src/lib/layout/header/header.ts
var _c0 = () => ["/"];
var _c1 = () => ({ exact: true });
var _c2 = () => ["/catalog"];
var _c3 = () => ({ category: "Men" });
var _c4 = () => ({ category: "Women" });
var _c5 = () => ["/auth/login"];
var _c6 = () => ["/auth/register"];
function HeaderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 8)(1, "ul", 12)(2, "li")(3, "a", 13);
    \u0275\u0275text(4, " Shop ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "li")(6, "a", 14);
    \u0275\u0275text(7, " Men ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li")(9, "a", 14);
    \u0275\u0275text(10, " Women ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c2))("queryParams", \u0275\u0275pureFunction0(7, _c3));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c2))("queryParams", \u0275\u0275pureFunction0(9, _c4));
  }
}
function HeaderComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "a", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 16);
    \u0275\u0275element(3, "rect", 17)(4, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "a", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 16);
    \u0275\u0275element(7, "rect", 17)(8, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "a", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 16);
    \u0275\u0275element(11, "rect", 17)(12, "path", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c1));
  }
}
function HeaderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "app-ui-select", 24);
    \u0275\u0275twoWayListener("valueChange", function HeaderComponent_Conditional_11_Template_app_ui_select_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLanguage, $event) || (ctx_r1.selectedLanguage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "div", 25)(3, "div", 26)(4, "a", 27);
    \u0275\u0275text(5, " Login ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 27);
    \u0275\u0275text(7, " Sign Up ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("value", ctx_r1.selectedLanguage);
    \u0275\u0275property("options", ctx_r1.languages);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c5));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c6));
  }
}
var HeaderComponent = class _HeaderComponent {
  authState = inject(AuthState);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  selectedLanguage = signal("en-US", ...ngDevMode ? [{ debugName: "selectedLanguage" }] : []);
  languages = [
    { label: "English (United States)", value: "en-US" },
    { label: "Russian (Russia)", value: "ru-RU" }
  ];
  constructor() {
    effect(() => {
      this.authState.bootstrap();
    });
    effect(() => {
      const lang = this.selectedLanguage();
      localStorage.setItem("lang", lang);
    });
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 5, consts: [[1, "w-full", "border-b", "border-gray-300", "bg-white", "top-0", "z-50", "shadow-sm"], [1, "container", "mx-auto", "px-4", "py-3", "sm:py-4", "lg:py-6"], [1, "flex", "items-center", "justify-between", "gap-2", "sm:gap-4", "lg:gap-6"], [1, "flex-shrink-0", 3, "routerLink"], ["width", "93", "height", "45", "viewBox", "0 0 93 45", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-14", "h-7", "sm:w-20", "sm:h-10", "lg:w-[93px]", "lg:h-[45px]"], ["d", "M3.8923 27.3907C4.15842 27.3408 4.45781 27.3076 4.79046 27.3076C4.84036 25.5611 5.83831 22.6671 6.9028 19.6732C5.90484 19.5235 5.05658 19.5235 4.54097 19.8728C4.17505 18.4257 5.55556 18.143 7.45168 18.1763C8.433 15.3986 9.38106 12.6875 9.58065 10.8745C8.00055 10.7747 6.60341 10.9411 5.72189 11.939C5.43913 12.2384 4.67403 8.46282 8.13361 7.83078C10.9445 7.31517 16.9323 9.61047 18.8117 6.96588C19.0945 6.58333 19.3274 10.0429 17.4479 10.9743C16.2503 11.5565 14.6702 11.49 13.0236 11.2904C12.7907 12.8871 11.9258 15.5317 11.0277 18.4091C12.9903 18.5422 14.7201 18.5255 15.086 17.5941C15.6682 21.0703 13.1899 20.9539 10.4289 20.3884C9.66381 22.9498 8.94861 25.5445 8.68249 27.6568C11.0942 27.9396 13.5059 28.0394 14.5704 26.5258C14.8532 26.1433 15.086 29.6029 13.2066 30.5177C9.9133 32.1476 3.8424 28.8211 1.48057 31.4823C1.19782 31.7817 0.432716 28.0061 3.8923 27.3907ZM17.9136 17.1617C17.897 17.0951 21.5894 16.7625 21.5229 18.8915C21.473 20.2553 18.2795 27.241 18.9448 29.4864C20.5748 27.4074 24.9159 17.1617 24.9159 17.1617C24.8993 17.0951 28.5917 16.7625 28.5086 18.8915C28.4587 20.272 25.6644 25.8439 25.9471 29.5862C27.2278 28.239 28.7747 24.5299 29.0574 23.8313C29.0907 23.7648 29.1572 23.7316 29.2238 23.7316C29.3568 23.7316 29.44 23.848 29.4067 23.9644C29.0075 25.1952 27.3443 30.2682 26.4794 30.7838C25.4814 31.3992 22.7703 30.368 22.5208 29.2369C22.0385 27.1412 24.0677 22.1515 24.7496 19.141C23.419 22.6172 20.3419 30.4179 19.2775 30.8836C18.2961 31.2994 15.6349 30.4511 15.4187 29.1205C15.0195 26.7088 18.4292 19.0911 17.9136 17.1617ZM25.3151 38.9171C24.6332 34.7257 30.9868 20.6213 30.3215 17.1284C30.3049 17.0619 34.147 17.1284 33.9142 19.2407C33.6979 21.2533 30.8371 29.187 29.4899 35.0916C31.9016 26.1433 36.5421 17.6773 37.2573 17.2615C37.906 16.8789 39.9019 17.4444 40.7169 18.8748C41.8146 20.8042 39.4861 30.1185 35.6273 30.9002C34.7624 31.0832 32.7166 29.8025 32.3008 29.2868C30.8704 32.9626 29.5398 37.0709 28.9077 40.8631C28.8246 41.2623 25.5978 40.6469 25.3151 38.9171ZM37.6066 18.3093C37.3904 18.2262 34.8289 22.8667 32.4837 28.8045C35.5608 30.5343 38.3883 18.6253 37.6066 18.3093ZM40.3842 28.9875C39.7023 24.7794 46.1391 10.1926 45.7067 7.08231C45.69 7.01578 49.2162 7.19874 48.9833 9.31108C48.7504 11.49 45.374 20.6712 44.243 26.6589C45.8564 22.6671 48.6673 16.9621 50.2806 17.1118C51.2121 17.1949 53.0915 18.0765 53.2579 18.642C53.7236 20.2054 50.4636 27.3408 50.3971 29.7027C51.6944 28.4552 53.3244 24.5465 53.6072 23.8313C53.6404 23.7648 53.707 23.7316 53.7735 23.7316C53.9065 23.7316 53.9897 23.848 53.9564 23.9644C53.5573 25.1952 51.7277 30.8337 50.9958 30.9335C49.5488 31.1331 47.1038 30.0852 46.9042 28.7712C46.6547 26.9915 49.4989 21.22 49.7817 18.4257C48.95 18.2927 43.9436 28.3055 43.9769 30.8836C44.0767 31.3493 40.6836 30.7505 40.3842 28.9875ZM53.4076 28.7546C52.4262 25.977 54.655 19.0245 57.1665 17.4112C58.0314 16.8457 60.3766 16.9953 61.1251 17.4943C61.7738 17.9101 61.358 18.3093 61.358 18.3093C58.6468 17.0452 55.4534 28.8211 56.7008 29.9688C58.1479 31.2994 61.5908 20.405 59.5117 19.9726C59.5117 19.9726 60.4764 18.6087 61.3081 18.7085C64.1855 19.0911 62.0066 28.871 57.9815 30.7671C56.8838 31.2828 54.2725 31.183 53.4076 28.7546ZM62.1231 29.1538C61.6906 26.5092 64.9672 19.0578 64.435 17.1284C64.4184 17.0619 68.3104 16.7625 68.2439 18.8915C68.194 20.089 66.0816 24.4468 65.7157 28.0228C66.9798 24.0975 69.8739 16.9454 71.6702 17.1118C72.6016 17.1949 74.2316 17.96 74.3979 18.5089C74.6141 19.2407 72.3854 22.7336 72.9841 24.8958C68.0276 24.6796 71.2377 19.0744 71.1712 18.4257C70.3396 18.2927 65.882 28.2057 65.8987 30.8004C65.9153 30.9002 65.7989 30.9667 65.7157 30.9501C65.0005 30.8669 62.3393 30.4844 62.1231 29.1538ZM79.3544 16.8623C74.5975 16.2302 77.6246 13.5524 77.4251 11.7893C82.5812 12.621 78.9386 14.4007 79.3544 16.8623ZM72.9675 29.1538C72.5018 26.609 75.9281 19.0578 75.4125 17.1284C75.3959 17.0619 79.2546 16.7625 79.1881 18.8915C79.1382 20.272 76.3772 25.7607 76.6101 29.5031C77.8741 28.0893 79.3711 24.5133 79.6538 23.8313C79.6705 23.7648 79.737 23.7316 79.8201 23.7316C79.9366 23.7316 80.0197 23.848 79.9865 23.9644C79.6039 25.1952 77.791 30.5177 76.9926 30.9002C76.1776 31.2661 73.1837 30.4012 72.9675 29.1538ZM82.9138 30.8836C82.315 31.2994 79.6206 30.5676 79.0052 29.4532C78.2068 28.0228 80.2027 20.7709 82.0323 18.4257C83.4627 16.6128 86.5564 17.0619 87.2882 17.4943C87.4712 17.5941 87.5377 17.6939 87.4379 17.9767C87.3215 18.2927 87.0886 18.2262 86.7227 18.1264C84.8598 17.644 82.0656 27.8564 82.2485 29.9355L88.1864 17.2947C88.3859 16.7459 91.9121 17.6606 91.5794 18.3592C91.2468 19.0578 88.8184 27.3408 88.7519 29.7027C90.0492 28.4552 91.6958 24.5465 91.9786 23.8313C92.0119 23.7648 92.0784 23.7316 92.1449 23.7316C92.2613 23.7316 92.3611 23.848 92.3112 23.9644C91.9287 25.1952 90.0991 30.8337 89.3673 30.9335C87.9036 31.1331 85.4586 30.0852 85.2756 28.7712C85.1093 27.6568 86.0241 24.2139 86.8724 21.3864C85.4087 25.1786 83.2465 30.6507 82.9138 30.8836Z", "fill", "#3C4242"], ["d", "M1 33.6259H23.4033", "stroke", "#333333", "stroke-width", "0.420324", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M32.9857 33.6259H92.0362", "stroke", "#3C4242", "stroke-width", "0.420324", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "hidden", "xl:block"], [1, "hidden", "sm:block", "flex-1", "md:max-w-xs", "lg:max-w-sm", "xl:max-w-md"], [1, "flex", "items-center", "gap-2", "sm:gap-3", "[&>a]:flex-shrink-0", "[&>a]:transition-transform", "[&>a]:duration-150", "[&>a:active]:scale-90", "[&>a.active]:scale-90", "[&>a>svg>rect]:fill-[#F6F6F6]", "[&>a>svg>path]:stroke-[var(--color-text-gray)]", "[&>a.active>svg>rect]:fill-[#8a33fd]", "[&>a.active>svg>path]:stroke-[#fff]"], [1, "block", "sm:hidden", "mt-3"], [1, "flex", "items-center", "gap-6", "lg:gap-8", "xl:gap-10", "text-base", "font-medium", "text-gray-800"], ["routerLink", "/catalog", "routerLinkActive", "!text-purple-600", 1, "hover:text-purple-600", "transition-colors", 3, "routerLinkActiveOptions"], ["routerLinkActive", "!text-purple-600", 1, "hover:text-purple-600", "transition-colors", 3, "routerLink", "queryParams"], ["routerLink", "/wishlist", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["width", "44", "height", "44", "viewBox", "0 0 44 44", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-9", "h-9", "sm:w-11", "sm:h-11"], ["width", "44", "height", "44", "rx", "8", "fill", "currentColor"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M21.9949 16.9301C20.4953 15.1826 17.9948 14.7125 16.116 16.3127C14.2372 17.9129 13.9727 20.5884 15.4481 22.481C16.6749 24.0545 20.3873 27.3732 21.6041 28.4474C21.7402 28.5675 21.8083 28.6276 21.8877 28.6512C21.957 28.6718 22.0328 28.6718 22.1021 28.6512C22.1815 28.6276 22.2495 28.5675 22.3857 28.4474C23.6024 27.3732 27.3149 24.0545 28.5416 22.481C30.017 20.5884 29.7848 17.8961 27.8737 16.3127C25.9626 14.7294 23.4944 15.1826 21.9949 16.9301Z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", "vector-effect", "non-scaling-stroke"], ["routerLink", "/account/info", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["d", "M21.9999 23.6667C24.3011 23.6667 26.1666 21.8012 26.1666 19.5C26.1666 17.1988 24.3011 15.3333 21.9999 15.3333C19.6987 15.3333 17.8333 17.1988 17.8333 19.5C17.8333 21.8012 19.6987 23.6667 21.9999 23.6667ZM21.9999 23.6667C18.318 23.6667 15.3333 25.9053 15.3333 28.6667M21.9999 23.6667C25.6818 23.6667 28.6666 25.9053 28.6666 28.6667", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "vector-effect", "non-scaling-stroke"], ["routerLink", "/cart", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["d", "M14.5 15.3333H15.0053C15.8558 15.3333 16.5699 15.9738 16.6621 16.8193L17.3379 23.0141C17.4301 23.8596 18.1442 24.5 18.9947 24.5H26.205C26.9669 24.5 27.6317 23.9834 27.82 23.2452L28.9699 18.7359C29.2387 17.6821 28.4425 16.6574 27.355 16.6574H17.5M17.5206 27.5208H18.1456M17.5206 28.1458H18.1456M26.6873 27.5208H27.3123M26.6873 28.1458H27.3123M18.6667 27.8333C18.6667 28.2936 18.2936 28.6667 17.8333 28.6667C17.3731 28.6667 17 28.2936 17 27.8333C17 27.3731 17.3731 27 17.8333 27C18.2936 27 18.6667 27.3731 18.6667 27.8333ZM27.8333 27.8333C27.8333 28.2936 27.4602 28.6667 27 28.6667C26.5398 28.6667 26.1667 28.2936 26.1667 27.8333C26.1667 27.3731 26.5398 27 27 27C27.4602 27 27.8333 27.3731 27.8333 27.8333Z", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "vector-effect", "non-scaling-stroke"], [1, "sm:w-[100px]", "flex-shrink-0"], ["ariaLabel", "Language selector", 3, "valueChange", "value", "options"], [1, "flex", "items-center", "gap-2", "sm:gap-6"], [1, "flex", "items-center", "gap-3", "sm:gap-6"], ["routerLinkActive", "active", 1, "px-12", "text-center", "text-lg", "font-medium", "h-[46px]", "flex", "items-center", "justify-center", "rounded-lg", "border", "border-[#3c4242]", "text-[#8a33fd]", "hover:bg-[#8a33fd]", "hover:text-white", "hover:border-transparent", "transition-all", "[&.active]:bg-[#8a33fd]", "[&.active]:text-white", "[&.active]:border-transparent", "leading-none", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5)(6, "path", 6)(7, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, HeaderComponent_Conditional_8_Template, 11, 10, "nav", 8);
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(9, "div", 9);
      \u0275\u0275conditionalCreate(10, HeaderComponent_Conditional_10_Template, 13, 6, "div", 10);
      \u0275\u0275conditionalCreate(11, HeaderComponent_Conditional_11_Template, 8, 6);
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "div", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.authState.isAuthenticated() ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.authState.isAuthenticated() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.authState.isAuthenticated() ? 11 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, FormsModule, RouterLinkActive, UISelect], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [CommonModule, RouterLink, FormsModule, RouterLinkActive, UISelect], changeDetection: ChangeDetectionStrategy.OnPush, template: `<header class="w-full border-b border-gray-300 bg-white top-0 z-50 shadow-sm">
  <div class="container mx-auto px-4 py-3 sm:py-4 lg:py-6">
    <div class="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
      <a [routerLink]="['/']" class="flex-shrink-0">
        <svg
          width="93"
          height="45"
          viewBox="0 0 93 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-14 h-7 sm:w-20 sm:h-10 lg:w-[93px] lg:h-[45px]"
        >
          <path
            d="M3.8923 27.3907C4.15842 27.3408 4.45781 27.3076 4.79046 27.3076C4.84036 25.5611 5.83831 22.6671 6.9028 19.6732C5.90484 19.5235 5.05658 19.5235 4.54097 19.8728C4.17505 18.4257 5.55556 18.143 7.45168 18.1763C8.433 15.3986 9.38106 12.6875 9.58065 10.8745C8.00055 10.7747 6.60341 10.9411 5.72189 11.939C5.43913 12.2384 4.67403 8.46282 8.13361 7.83078C10.9445 7.31517 16.9323 9.61047 18.8117 6.96588C19.0945 6.58333 19.3274 10.0429 17.4479 10.9743C16.2503 11.5565 14.6702 11.49 13.0236 11.2904C12.7907 12.8871 11.9258 15.5317 11.0277 18.4091C12.9903 18.5422 14.7201 18.5255 15.086 17.5941C15.6682 21.0703 13.1899 20.9539 10.4289 20.3884C9.66381 22.9498 8.94861 25.5445 8.68249 27.6568C11.0942 27.9396 13.5059 28.0394 14.5704 26.5258C14.8532 26.1433 15.086 29.6029 13.2066 30.5177C9.9133 32.1476 3.8424 28.8211 1.48057 31.4823C1.19782 31.7817 0.432716 28.0061 3.8923 27.3907ZM17.9136 17.1617C17.897 17.0951 21.5894 16.7625 21.5229 18.8915C21.473 20.2553 18.2795 27.241 18.9448 29.4864C20.5748 27.4074 24.9159 17.1617 24.9159 17.1617C24.8993 17.0951 28.5917 16.7625 28.5086 18.8915C28.4587 20.272 25.6644 25.8439 25.9471 29.5862C27.2278 28.239 28.7747 24.5299 29.0574 23.8313C29.0907 23.7648 29.1572 23.7316 29.2238 23.7316C29.3568 23.7316 29.44 23.848 29.4067 23.9644C29.0075 25.1952 27.3443 30.2682 26.4794 30.7838C25.4814 31.3992 22.7703 30.368 22.5208 29.2369C22.0385 27.1412 24.0677 22.1515 24.7496 19.141C23.419 22.6172 20.3419 30.4179 19.2775 30.8836C18.2961 31.2994 15.6349 30.4511 15.4187 29.1205C15.0195 26.7088 18.4292 19.0911 17.9136 17.1617ZM25.3151 38.9171C24.6332 34.7257 30.9868 20.6213 30.3215 17.1284C30.3049 17.0619 34.147 17.1284 33.9142 19.2407C33.6979 21.2533 30.8371 29.187 29.4899 35.0916C31.9016 26.1433 36.5421 17.6773 37.2573 17.2615C37.906 16.8789 39.9019 17.4444 40.7169 18.8748C41.8146 20.8042 39.4861 30.1185 35.6273 30.9002C34.7624 31.0832 32.7166 29.8025 32.3008 29.2868C30.8704 32.9626 29.5398 37.0709 28.9077 40.8631C28.8246 41.2623 25.5978 40.6469 25.3151 38.9171ZM37.6066 18.3093C37.3904 18.2262 34.8289 22.8667 32.4837 28.8045C35.5608 30.5343 38.3883 18.6253 37.6066 18.3093ZM40.3842 28.9875C39.7023 24.7794 46.1391 10.1926 45.7067 7.08231C45.69 7.01578 49.2162 7.19874 48.9833 9.31108C48.7504 11.49 45.374 20.6712 44.243 26.6589C45.8564 22.6671 48.6673 16.9621 50.2806 17.1118C51.2121 17.1949 53.0915 18.0765 53.2579 18.642C53.7236 20.2054 50.4636 27.3408 50.3971 29.7027C51.6944 28.4552 53.3244 24.5465 53.6072 23.8313C53.6404 23.7648 53.707 23.7316 53.7735 23.7316C53.9065 23.7316 53.9897 23.848 53.9564 23.9644C53.5573 25.1952 51.7277 30.8337 50.9958 30.9335C49.5488 31.1331 47.1038 30.0852 46.9042 28.7712C46.6547 26.9915 49.4989 21.22 49.7817 18.4257C48.95 18.2927 43.9436 28.3055 43.9769 30.8836C44.0767 31.3493 40.6836 30.7505 40.3842 28.9875ZM53.4076 28.7546C52.4262 25.977 54.655 19.0245 57.1665 17.4112C58.0314 16.8457 60.3766 16.9953 61.1251 17.4943C61.7738 17.9101 61.358 18.3093 61.358 18.3093C58.6468 17.0452 55.4534 28.8211 56.7008 29.9688C58.1479 31.2994 61.5908 20.405 59.5117 19.9726C59.5117 19.9726 60.4764 18.6087 61.3081 18.7085C64.1855 19.0911 62.0066 28.871 57.9815 30.7671C56.8838 31.2828 54.2725 31.183 53.4076 28.7546ZM62.1231 29.1538C61.6906 26.5092 64.9672 19.0578 64.435 17.1284C64.4184 17.0619 68.3104 16.7625 68.2439 18.8915C68.194 20.089 66.0816 24.4468 65.7157 28.0228C66.9798 24.0975 69.8739 16.9454 71.6702 17.1118C72.6016 17.1949 74.2316 17.96 74.3979 18.5089C74.6141 19.2407 72.3854 22.7336 72.9841 24.8958C68.0276 24.6796 71.2377 19.0744 71.1712 18.4257C70.3396 18.2927 65.882 28.2057 65.8987 30.8004C65.9153 30.9002 65.7989 30.9667 65.7157 30.9501C65.0005 30.8669 62.3393 30.4844 62.1231 29.1538ZM79.3544 16.8623C74.5975 16.2302 77.6246 13.5524 77.4251 11.7893C82.5812 12.621 78.9386 14.4007 79.3544 16.8623ZM72.9675 29.1538C72.5018 26.609 75.9281 19.0578 75.4125 17.1284C75.3959 17.0619 79.2546 16.7625 79.1881 18.8915C79.1382 20.272 76.3772 25.7607 76.6101 29.5031C77.8741 28.0893 79.3711 24.5133 79.6538 23.8313C79.6705 23.7648 79.737 23.7316 79.8201 23.7316C79.9366 23.7316 80.0197 23.848 79.9865 23.9644C79.6039 25.1952 77.791 30.5177 76.9926 30.9002C76.1776 31.2661 73.1837 30.4012 72.9675 29.1538ZM82.9138 30.8836C82.315 31.2994 79.6206 30.5676 79.0052 29.4532C78.2068 28.0228 80.2027 20.7709 82.0323 18.4257C83.4627 16.6128 86.5564 17.0619 87.2882 17.4943C87.4712 17.5941 87.5377 17.6939 87.4379 17.9767C87.3215 18.2927 87.0886 18.2262 86.7227 18.1264C84.8598 17.644 82.0656 27.8564 82.2485 29.9355L88.1864 17.2947C88.3859 16.7459 91.9121 17.6606 91.5794 18.3592C91.2468 19.0578 88.8184 27.3408 88.7519 29.7027C90.0492 28.4552 91.6958 24.5465 91.9786 23.8313C92.0119 23.7648 92.0784 23.7316 92.1449 23.7316C92.2613 23.7316 92.3611 23.848 92.3112 23.9644C91.9287 25.1952 90.0991 30.8337 89.3673 30.9335C87.9036 31.1331 85.4586 30.0852 85.2756 28.7712C85.1093 27.6568 86.0241 24.2139 86.8724 21.3864C85.4087 25.1786 83.2465 30.6507 82.9138 30.8836Z"
            fill="#3C4242"
          />
          <path
            d="M1 33.6259H23.4033"
            stroke="#333333"
            stroke-width="0.420324"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.9857 33.6259H92.0362"
            stroke="#3C4242"
            stroke-width="0.420324"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>

      @if (authState.isAuthenticated()) {
        <nav class="hidden xl:block">
          <ul
            class="flex items-center gap-6 lg:gap-8 xl:gap-10 text-base font-medium text-gray-800"
          >
            <li>
              <a
                routerLink="/catalog"
                routerLinkActive="!text-purple-600"
                [routerLinkActiveOptions]="{ exact: true }"
                class="hover:text-purple-600 transition-colors"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                [routerLink]="['/catalog']"
                [queryParams]="{ category: 'Men' }"
                routerLinkActive="!text-purple-600"
                class="hover:text-purple-600 transition-colors"
              >
                Men
              </a>
            </li>
            <li>
              <a
                [routerLink]="['/catalog']"
                [queryParams]="{ category: 'Women' }"
                routerLinkActive="!text-purple-600"
                class="hover:text-purple-600 transition-colors"
              >
                Women
              </a>
            </li>
          </ul>
        </nav>
      }

      <div class="hidden sm:block flex-1 md:max-w-xs lg:max-w-sm xl:max-w-md">
        <!-- <p-autocomplete
          [(ngModel)]="searchQuery"
          [suggestions]="searchSuggestions()"
          (completeMethod)="searchProducts($event)"
          (onSelect)="onProductSelect($event)"
          [dropdown]="false"
          [minLength]="2"
          placeholder="Search for products..."
          optionLabel="title"
          [showEmptyMessage]="true"
          emptyMessage="No products found"
          class="w-full"
          [inputStyleClass]="'w-full h-10 sm:h-11 bg-gray-100 rounded-lg outline-none pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm focus:ring-2 focus:ring-purple-500 transition-all'"
        >
          <ng-template let-product pTemplate="item">
            <div class="flex items-center gap-3 py-2 w-full">
              <img
                [src]="product.image | imageUrl"
                [alt]="product.title"
                class="w-12 h-12 object-cover rounded flex-shrink-0"
              />
              <div class="flex-1 min-w-0">
                <div class="font-semibold text-sm truncate">{{ product.title }}</div>
                <div class="text-xs text-gray-500">{{ product.brand }}</div>
              </div>
              <div class="font-bold text-purple-600 flex-shrink-0">\${{ product.price }}</div>
            </div>
          </ng-template>
        </p-autocomplete> -->
      </div>

      @if (authState.isAuthenticated()) {
        <div
          class="flex items-center gap-2 sm:gap-3 [&>a]:flex-shrink-0 [&>a]:transition-transform [&>a]:duration-150 [&>a:active]:scale-90 [&>a.active]:scale-90 [&>a>svg>rect]:fill-[#F6F6F6] [&>a>svg>path]:stroke-[var(--color-text-gray)] [&>a.active>svg>rect]:fill-[#8a33fd] [&>a.active>svg>path]:stroke-[#fff]"
        >
          <!-- Wishlist -->
          <a
            routerLink="/wishlist"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            <svg
              class="w-9 h-9 sm:w-11 sm:h-11"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="8" fill="currentColor" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.9949 16.9301C20.4953 15.1826 17.9948 14.7125 16.116 16.3127C14.2372 17.9129 13.9727 20.5884 15.4481 22.481C16.6749 24.0545 20.3873 27.3732 21.6041 28.4474C21.7402 28.5675 21.8083 28.6276 21.8877 28.6512C21.957 28.6718 22.0328 28.6718 22.1021 28.6512C22.1815 28.6276 22.2495 28.5675 22.3857 28.4474C23.6024 27.3732 27.3149 24.0545 28.5416 22.481C30.017 20.5884 29.7848 17.8961 27.8737 16.3127C25.9626 14.7294 23.4944 15.1826 21.9949 16.9301Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </a>

          <!-- Profile -->
          <a
            routerLink="/account/info"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            <svg
              class="w-9 h-9 sm:w-11 sm:h-11"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="8" fill="currentColor" />
              <path
                d="M21.9999 23.6667C24.3011 23.6667 26.1666 21.8012 26.1666 19.5C26.1666 17.1988 24.3011 15.3333 21.9999 15.3333C19.6987 15.3333 17.8333 17.1988 17.8333 19.5C17.8333 21.8012 19.6987 23.6667 21.9999 23.6667ZM21.9999 23.6667C18.318 23.6667 15.3333 25.9053 15.3333 28.6667M21.9999 23.6667C25.6818 23.6667 28.6666 25.9053 28.6666 28.6667"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </a>

          <!-- Cart -->
          <a
            routerLink="/cart"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            <svg
              class="w-9 h-9 sm:w-11 sm:h-11"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="8" fill="currentColor" />
              <path
                d="M14.5 15.3333H15.0053C15.8558 15.3333 16.5699 15.9738 16.6621 16.8193L17.3379 23.0141C17.4301 23.8596 18.1442 24.5 18.9947 24.5H26.205C26.9669 24.5 27.6317 23.9834 27.82 23.2452L28.9699 18.7359C29.2387 17.6821 28.4425 16.6574 27.355 16.6574H17.5M17.5206 27.5208H18.1456M17.5206 28.1458H18.1456M26.6873 27.5208H27.3123M26.6873 28.1458H27.3123M18.6667 27.8333C18.6667 28.2936 18.2936 28.6667 17.8333 28.6667C17.3731 28.6667 17 28.2936 17 27.8333C17 27.3731 17.3731 27 17.8333 27C18.2936 27 18.6667 27.3731 18.6667 27.8333ZM27.8333 27.8333C27.8333 28.2936 27.4602 28.6667 27 28.6667C26.5398 28.6667 26.1667 28.2936 26.1667 27.8333C26.1667 27.3731 26.5398 27 27 27C27.4602 27 27.8333 27.3731 27.8333 27.8333Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              />
            </svg>
          </a>
        </div>
      }

      @if (!authState.isAuthenticated()) {
        <div class="sm:w-[100px] flex-shrink-0">
          <app-ui-select
            [(value)]="selectedLanguage"
            [options]="languages"
            ariaLabel="Language selector"
          />
        </div>
        <div class="flex items-center gap-2 sm:gap-6">
          <!-- Auth buttons -->
          <div class="flex items-center gap-3 sm:gap-6">
            <a
              [routerLink]="['/auth/login']"
              routerLinkActive="active"
              class="px-12 text-center text-lg font-medium h-[46px] flex items-center justify-center rounded-lg border border-[#3c4242] text-[#8a33fd] hover:bg-[#8a33fd] hover:text-white hover:border-transparent transition-all [&.active]:bg-[#8a33fd] [&.active]:text-white [&.active]:border-transparent leading-none"
            >
              Login
            </a>
            <a
              [routerLink]="['/auth/register']"
              routerLinkActive="active"
              class="px-12 text-center text-lg font-medium h-[46px] flex items-center justify-center rounded-lg border border-[#3c4242] text-[#8a33fd] hover:bg-[#8a33fd] hover:text-white hover:border-transparent transition-all [&.active]:bg-[#8a33fd] [&.active]:text-white [&.active]:border-transparent leading-none"
            >
              Sign Up
            </a>
          </div>
        </div>
      }
    </div>

    <!-- Mobile search - \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 -->
    <div class="block sm:hidden mt-3">
      <!-- <p-autocomplete
        [(ngModel)]="searchQuery"
        [suggestions]="searchSuggestions()"
        (completeMethod)="searchProducts($event)"
        (onSelect)="onProductSelect($event)"
        [dropdown]="false"
        [minLength]="2"
        placeholder="Search for products..."
        optionLabel="title"
        [showEmptyMessage]="true"
        emptyMessage="No products found"
        class="w-full"
        [inputStyleClass]="'w-full h-10 bg-gray-100 rounded-lg outline-none pl-10 pr-3 text-sm focus:ring-2 focus:ring-purple-500 transition-all'"
      >
        <ng-template let-product pTemplate="item">
          <div class="flex items-center gap-3 py-2 w-full">
            <img
              [src]="product.image | imageUrl"
              [alt]="product.title"
              class="w-12 h-12 object-cover rounded flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
              <div class="font-semibold text-sm truncate">{{ product.title }}</div>
              <div class="text-xs text-gray-500">{{ product.brand }}</div>
            </div>
            <div class="font-bold text-purple-600 flex-shrink-0">\${{ product.price }}</div>
          </div>
        </ng-template>
      </p-autocomplete> -->
    </div>
  </div>
</header>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "libs/frontend/core/layout/src/lib/layout/header/header.ts", lineNumber: 17 });
})();

// libs/frontend/core/layout/src/lib/layout/layout.ts
var LayoutComponent = class _LayoutComponent {
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], decls: 3, vars: 0, template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header")(1, "router-outlet")(2, "app-footer");
    }
  }, dependencies: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet], changeDetection: ChangeDetectionStrategy.OnPush, template: "<app-header />\n<router-outlet />\n<app-footer />\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "libs/frontend/core/layout/src/lib/layout/layout.ts", lineNumber: 13 });
})();

// node_modules/@primeuix/styles/dist/carousel/index.mjs
var style = "\n    .p-carousel {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-carousel-content-container {\n        display: flex;\n        flex-direction: column;\n        overflow: auto;\n    }\n\n    .p-carousel-content {\n        display: flex;\n        flex-direction: row;\n        gap: dt('carousel.content.gap');\n    }\n\n    .p-carousel-content:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-carousel-viewport {\n        overflow: hidden;\n        width: 100%;\n    }\n\n    .p-carousel-item-list {\n        display: flex;\n        flex-direction: row;\n    }\n\n    .p-carousel-item-list:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-carousel-prev-button,\n    .p-carousel-next-button {\n        align-self: center;\n        flex-shrink: 0;\n    }\n\n    .p-carousel-indicator-list {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        flex-wrap: wrap;\n        padding: dt('carousel.indicator.list.padding');\n        gap: dt('carousel.indicator.list.gap');\n        margin: 0;\n        list-style: none;\n    }\n\n    .p-carousel-indicator-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('carousel.indicator.background');\n        width: dt('carousel.indicator.width');\n        height: dt('carousel.indicator.height');\n        border: 0 none;\n        transition:\n            background dt('carousel.transition.duration'),\n            color dt('carousel.transition.duration'),\n            outline-color dt('carousel.transition.duration'),\n            box-shadow dt('carousel.transition.duration');\n        outline-color: transparent;\n        border-radius: dt('carousel.indicator.border.radius');\n        padding: 0;\n        margin: 0;\n        user-select: none;\n        cursor: pointer;\n    }\n\n    .p-carousel-indicator-button:focus-visible {\n        box-shadow: dt('carousel.indicator.focus.ring.shadow');\n        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');\n        outline-offset: dt('carousel.indicator.focus.ring.offset');\n    }\n\n    .p-carousel-indicator-button:hover {\n        background: dt('carousel.indicator.hover.background');\n    }\n\n    .p-carousel-indicator-active .p-carousel-indicator-button {\n        background: dt('carousel.indicator.active.background');\n    }\n\n    .p-carousel-vertical .p-carousel-content {\n        flex-direction: column;\n    }\n\n    .p-carousel-vertical .p-carousel-item-list {\n        flex-direction: column;\n        height: 100%;\n    }\n\n    .p-items-hidden .p-carousel-item {\n        visibility: hidden;\n    }\n\n    .p-items-hidden .p-carousel-item.p-carousel-item-active {\n        visibility: visible;\n    }\n";

// node_modules/primeng/fesm2022/primeng-carousel.mjs
var _c02 = ["item"];
var _c12 = ["header"];
var _c22 = ["footer"];
var _c32 = ["previousicon"];
var _c42 = ["nexticon"];
var _c52 = ["itemsContainer"];
var _c62 = ["indicatorContent"];
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
      for (let i29 = 0; i29 < this.responsiveOptions.length; i29++) {
        let res = this.responsiveOptions[i29];
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
        for (let i29 = 0; i29 < this.responsiveOptions.length; i29++) {
          let res = this.responsiveOptions[i29];
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
  navForward(e59, index) {
    if (this.isCircular() || this._page < this.totalDots() - 1) {
      this.step(-1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (e59 && e59.cancelable) {
      e59.preventDefault();
    }
  }
  navBackward(e59, index) {
    if (this.isCircular() || this._page !== 0) {
      this.step(1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (e59 && e59.cancelable) {
      e59.preventDefault();
    }
  }
  onDotClick(e59, index) {
    let page = this._page;
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (index > page) {
      this.navForward(e59, index);
    } else if (index < page) {
      this.navBackward(e59, index);
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
  onTouchStart(e59) {
    let touchobj = e59.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  }
  onTouchMove(e59) {
    if (e59.cancelable) {
      e59.preventDefault();
    }
  }
  onTouchEnd(e59) {
    let touchobj = e59.changedTouches[0];
    if (this.isVertical()) {
      this.changePageOnTouch(e59, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e59, touchobj.pageX - this.startPos.x);
    }
  }
  changePageOnTouch(e59, diff) {
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff < 0) {
        this.navForward(e59);
      } else {
        this.navBackward(e59);
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
        \u0275\u0275contentQuery(dirIndex, Header, 5)(dirIndex, Footer, 5)(dirIndex, _c02, 4)(dirIndex, _c12, 4)(dirIndex, _c22, 4)(dirIndex, _c32, 4)(dirIndex, _c42, 4)(dirIndex, PrimeTemplate, 4);
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
        \u0275\u0275viewQuery(_c52, 5)(_c62, 5);
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
var _c03 = ["header"];
var _c13 = ["footer"];
var _c23 = ["indicator"];
var _c33 = ["caption"];
var _c43 = ["closeicon"];
var _c53 = ["previousthumbnailicon"];
var _c63 = ["nextthumbnailicon"];
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
var _c132 = () => ({});
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
        \u0275\u0275contentQuery(dirIndex, _c03, 4)(dirIndex, _c13, 4)(dirIndex, _c23, 4)(dirIndex, _c33, 4)(dirIndex, _c43, 4)(dirIndex, _c53, 4)(dirIndex, _c63, 4)(dirIndex, _c72, 4)(dirIndex, _c82, 4)(dirIndex, _c92, 4)(dirIndex, _c102, 4)(dirIndex, PrimeTemplate, 4);
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
        \u0275\u0275styleMap(!ctx.galleria.fullScreen ? ctx.galleria.containerStyle : \u0275\u0275pureFunction0(6, _c132));
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
  navForward(e59) {
    this.stopTheSlideShow();
    this.next();
    if (e59 && e59.cancelable) {
      e59.stopPropagation();
      e59.preventDefault();
    }
  }
  navBackward(e59) {
    this.stopTheSlideShow();
    this.prev();
    if (e59 && e59.cancelable) {
      e59.stopPropagation();
      e59.preventDefault();
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
      for (let i29 = 0; i29 < this.sortedResponsiveOptions.length; i29++) {
        let res = this.sortedResponsiveOptions[i29];
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
        for (let i29 = 0; i29 < this.sortedResponsiveOptions.length; i29++) {
          let res = this.sortedResponsiveOptions[i29];
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
  navForward(e59) {
    this.stopTheSlideShow();
    let nextItemIndex = this._activeIndex + 1;
    if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
      this.step(-1);
    }
    let activeIndex = this.circular && this.value.length - 1 === this._activeIndex ? 0 : nextItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
    if (e59.cancelable) {
      e59.preventDefault();
    }
  }
  navBackward(e59) {
    this.stopTheSlideShow();
    let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
    let diff = prevItemIndex + this.totalShiftedItems;
    if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
      this.step(1);
    }
    let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
    if (e59.cancelable) {
      e59.preventDefault();
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
  changePageOnTouch(e59, diff) {
    if (diff < 0) {
      this.navForward(e59);
    } else {
      this.navBackward(e59);
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
  onTouchEnd(e59) {
    let touchobj = e59.changedTouches[0];
    if (this.isVertical) {
      this.changePageOnTouch(e59, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e59, touchobj.pageX - this.startPos.x);
    }
  }
  onTouchMove(e59) {
    if (e59.cancelable) {
      e59.preventDefault();
    }
  }
  onTouchStart(e59) {
    let touchobj = e59.changedTouches[0];
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

// apps/marketplace-web/src/app/features/categories/data-access/categories.service.ts
var CategoriesService = class _CategoriesService {
  constructor() {
  }
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
  }], () => [], null);
})();

// apps/marketplace-web/src/app/features/categories/ui/categories-card/categories-card.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesCardComponent, { className: "CategoriesCardComponent", filePath: "apps/marketplace-web/src/app/features/categories/ui/categories-card/categories-card.ts", lineNumber: 13 });
})();

// apps/marketplace-web/src/app/features/main/main.ts
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
  constructor() {
  }
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
`, styles: ['/* apps/marketplace-web/src/app/features/main/main.scss */\n::ng-deep .main-carousel .p-carousel-content {\n  gap: 0 !important;\n}\n::ng-deep .main-carousel .p-carousel-content .slide {\n  height: 100vh;\n  position: relative;\n}\n::ng-deep .main-carousel .p-carousel-content .slide .slide-img {\n  width: 100%;\n  object-fit: cover;\n  object-position: top center;\n}\n::ng-deep .main-carousel .p-carousel-content .slide .content {\n  position: absolute;\n  top: 129px;\n  left: 193px;\n  color: white;\n  z-index: 1;\n}\n::ng-deep .main-carousel .p-carousel-content .slide main-slide-button {\n  width: 250px !important;\n  height: 61px !important;\n  border: none !important;\n  border-radius: 8px !important;\n  background: white !important;\n  color: #000 !important;\n  font-family: "Causten", sans-serif;\n  font-weight: 700 !important;\n  font-size: 24px !important;\n}\n::ng-deep .main-carousel .p-carousel-content .p-carousel-prev-button button {\n  position: absolute !important;\n  top: 60% !important;\n  left: 40px !important;\n  z-index: 2;\n}\n::ng-deep .main-carousel .p-carousel-content .p-carousel-prev-button button:hover {\n  background: transparent;\n}\n::ng-deep .main-carousel .p-carousel-content .p-carousel-next-button button {\n  position: absolute !important;\n  top: 60% !important;\n  right: 40px !important;\n  z-index: 2;\n}\n::ng-deep .main-carousel .p-carousel-content .p-carousel-next-button button:hover {\n  background: transparent;\n}\n::ng-deep .main-carousel .p-carousel-content-container .p-carousel-indicator-list {\n  position: absolute !important;\n  bottom: -5% !important;\n  left: 50% !important;\n  transform: translateX(-50%) !important;\n  z-index: 2 !important;\n  gap: 0 !important;\n  display: flex !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  list-style: none !important;\n}\n::ng-deep .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator button.p-carousel-indicator-button {\n  width: 80px;\n  height: 13px;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.3);\n  padding: 0;\n  transition: all 0.3s ease;\n  border-radius: 0;\n  cursor: pointer;\n}\n::ng-deep .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator:first-child button.p-carousel-indicator-button {\n  border-top-left-radius: 999px;\n  border-bottom-left-radius: 999px;\n}\n::ng-deep .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator:last-child button.p-carousel-indicator-button {\n  border-top-right-radius: 999px;\n  border-bottom-right-radius: 999px;\n}\n::ng-deep .main-carousel .p-carousel-content-container .p-carousel-indicator-list .p-carousel-indicator.p-carousel-indicator-active button.p-carousel-indicator-button {\n  background-color: #fff;\n  width: 80px;\n}\n::ng-deep .feedback-carousel {\n  width: 100%;\n  overflow: hidden;\n}\n::ng-deep .feedback-carousel .p-carousel-content {\n  display: flex !important;\n  justify-content: center !important;\n  flex-wrap: wrap !important;\n}\n::ng-deep .feedback-carousel .p-carousel-items-content {\n  flex-wrap: wrap !important;\n  display: flex !important;\n  justify-content: center !important;\n}\n::ng-deep .feedback-carousel .p-carousel-item-list {\n  display: flex;\n  gap: 38px !important;\n  justify-content: center !important;\n}\n::ng-deep .feedback-carousel .p-carousel-item {\n  flex: 0 0 auto !important;\n}\n::ng-deep .feedback-carousel .p-carousel-indicators {\n  display: flex !important;\n  justify-content: center !important;\n  margin-top: 1rem;\n}\n::ng-deep .feedback-carousel .p-carousel-indicator-list {\n  gap: 8px !important;\n}\n::ng-deep .feedback-carousel .p-carousel-indicator-button {\n  width: 10px !important;\n  height: 10px !important;\n  background: #d1d1d1 !important;\n  border-radius: 50%;\n}\n::ng-deep .feedback-carousel .p-carousel-indicator-active .p-carousel-indicator-button {\n  background: #3c4242 !important;\n}\n/*# sourceMappingURL=main.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "apps/marketplace-web/src/app/features/main/main.ts", lineNumber: 26 });
})();

// apps/marketplace-web/src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: MainComponent },
      {
        path: "auth",
        loadChildren: () => import("./chunk-ZGIATP73.js").then((m5) => m5.AUTH_ROUTES),
        canActivate: [authForwardGuard],
        data: { hideFooter: true }
      },
      {
        path: "catalog",
        loadChildren: () => import("./chunk-JNUDJEQE.js").then((m5) => m5.CATALOG_ROUTES)
      },
      {
        path: "admin",
        loadChildren: () => import("./chunk-3WKBXFP4.js").then((m5) => m5.ADMIN_ROUTES)
      },
      {
        path: "product",
        loadChildren: () => import("./chunk-SIJRNP3J.js").then((m5) => m5.PRODUCTS_ROUTES)
      },
      {
        path: "",
        loadChildren: () => import("./chunk-SVMRSFN6.js").then((m5) => m5.PERSONAL_ROUTES)
      },
      {
        path: "cart",
        loadChildren: () => import("./chunk-E3JK2FVJ.js").then((m5) => m5.CART_ROUTES)
      },
      {
        path: "wishlist",
        canActivate: [authGuard],
        loadChildren: () => import("./chunk-BSF4XEGX.js").then((m5) => m5.WISHLIST_ROUTES)
      }
    ]
  }
];

// libs/frontend/core/http/src/lib/auth-refresh.service.ts
var AuthRefreshService = class _AuthRefreshService {
  http = inject(HttpClient);
  session = inject(AuthSessionService);
  inFlightRequest$ = null;
  baseUrl = FRONTEND_CONFIG.api;
  refresh() {
    if (this.inFlightRequest$) {
      return this.inFlightRequest$;
    }
    const refreshToken = this.session.getRefreshToken();
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }
    this.inFlightRequest$ = this.http.post(`${this.baseUrl}auth/refresh`, {
      refresh_token: refreshToken
    }).pipe(shareReplay(1), finalize(() => {
      this.inFlightRequest$ = null;
    }));
    return this.inFlightRequest$;
  }
  static \u0275fac = function AuthRefreshService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRefreshService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthRefreshService, factory: _AuthRefreshService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRefreshService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/frontend/core/http/src/lib/interceptors/auth.interceptor.ts
var AUTH_ENDPOINTS = ["/auth/login", "/auth/register", "/auth/refresh"];
var authInterceptor = (req, next) => {
  const session = inject(AuthSessionService);
  const authRefreshService = inject(AuthRefreshService);
  const authState = inject(AuthState);
  const router = inject(Router);
  const isAuthEndpoint = AUTH_ENDPOINTS.some((endpoint) => req.url.includes(endpoint));
  const accessToken = session.getAccessToken();
  const authReq = accessToken && !isAuthEndpoint ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${accessToken}`
    }
  }) : req;
  return next(authReq).pipe(catchError((error) => {
    const shouldRefresh = error.status === 401 && !isAuthEndpoint && !!session.getRefreshToken();
    if (!shouldRefresh) {
      return throwError(() => error);
    }
    return authRefreshService.refresh().pipe(switchMap((response) => {
      session.saveAuthResponse(response);
      authState.applyAuthResponse(response);
      const retryReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${response.access_token}`
        }
      });
      return next(retryReq);
    }), catchError((refreshError) => {
      session.clear();
      void router.navigate(["/auth/login"]);
      return throwError(() => refreshError);
    }));
  }));
};

// apps/marketplace-web/src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "disabled",
      // Полностью отключаем автоматический скролл
      anchorScrolling: "enabled"
    })),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      overlayAppendTo: "body",
      theme: {
        preset: AuraLight,
        options: {
          prefix: "p",
          darkModeSelector: false,
          // Отключаем темный режим
          cssLayer: false
        }
      }
    }),
    MessageService
  ]
};

// apps/marketplace-web/src/app/app.ts
var App = class _App {
  productStore = inject(CreateProductStore);
  title = signal("Euphoria", ...ngDevMode ? [{ debugName: "title" }] : []);
  messageService = inject(MessageService);
  authState = inject(AuthState);
  constructor() {
    this.authState.bootstrap();
    effect(() => {
      const event = this.productStore.event();
      if (!event)
        return;
      switch (event.type) {
        case "productCreated":
          this.messageService.add({
            severity: "success",
            summary: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0441\u043E\u0437\u0434\u0430\u043D!",
            detail: `\u041F\u0440\u043E\u0434\u0443\u043A\u0442 "${event.productTitle}" \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D`,
            life: 3e3
          });
          break;
        case "productCreateError":
          this.messageService.add({
            severity: "error",
            summary: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",
            detail: event.message,
            life: 3e3
          });
          break;
        case "imageUploaded":
          this.messageService.add({
            severity: "success",
            summary: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E",
            detail: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440",
            life: 2e3
          });
          break;
        case "imageUploadError":
          this.messageService.add({
            severity: "error",
            summary: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
            detail: event.message,
            life: 3e3
          });
          break;
      }
      this.productStore.clearEvent();
    });
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["position", "bottom-right"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast", 0)(1, "router-outlet");
    }
  }, dependencies: [RouterOutlet, Toast], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, Toast], changeDetection: ChangeDetectionStrategy.OnPush, template: '<!-- Toast \u0434\u043B\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 (\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432 AuthStore) -->\n<p-toast position="bottom-right" />\n<router-outlet />\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "apps/marketplace-web/src/app/app.ts", lineNumber: 15 });
})();

// apps/marketplace-web/src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations-async.mjs:
  (**
   * @license Angular v21.2.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
