import {
  AuthSessionService,
  AuthState,
  authForwardGuard,
  authGuard
} from "./chunk-MRSX6FQU.js";
import {
  CreateProductStore
} from "./chunk-7TINI7YN.js";
import {
  Toast
} from "./chunk-M7Z6RRSA.js";
import {
  AccordionModule,
  UISelect,
  UiAccordionComponent,
  UiAccordionContentSlot,
  UiAccordionHeaderSlot
} from "./chunk-I5AK7T3M.js";
import "./chunk-6QZB4DAZ.js";
import "./chunk-VP3NVYXS.js";
import "./chunk-CH46WUXX.js";
import {
  FormsModule
} from "./chunk-C2RRMDEJ.js";
import {
  FRONTEND_CONFIG
} from "./chunk-SXE3IDZP.js";
import {
  ke,
  providePrimeNG
} from "./chunk-PV4HM4QP.js";
import {
  DomRendererFactory2,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-M4TX5Q67.js";
import {
  CommonModule,
  HttpClient,
  MessageService,
  provideHttpClient,
  withInterceptors
} from "./chunk-SJAIUEWT.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Injectable,
  InjectionToken,
  Injector,
  NgZone,
  RendererFactory2,
  RuntimeError,
  catchError,
  effect,
  finalize,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  provideBrowserGlobalErrorListeners,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinvalidFactory,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2WGIEBYO.js";

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
    const loadFn = () => this.moduleImpl ?? import("./chunk-M54IBX2S.js").then((m5) => m5);
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
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
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
var s = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var a = { root: o2, overlay: r2, list: d, option: e2, optionGroup: l, dropdown: i, chip: c2, emptyMessage: f, colorScheme: s };

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
var s2 = { root: o13, image: r13, icon: e10, removeIcon: c5, colorScheme: i6 };

// node_modules/@primeuix/themes/dist/aura/colorpicker/index.mjs
var r14 = { transitionDuration: "{transition.duration}" };
var o14 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e11 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a5 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var s3 = { root: r14, preview: o14, panel: e11, colorScheme: a5 };

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
var s4 = { width: "0.5rem" };
var g = { width: "1px", color: "{primary.color}" };
var u = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var b = { size: "2rem" };
var p2 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var k = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f3 = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css = "\n    .p-datatable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var v = { root: o18, header: r18, headerCell: e14, columnTitle: d5, row: t9, bodyCell: l3, footerCell: c7, columnFooter: a8, footer: n4, dropPoint: i8, columnResizer: s4, resizeIndicator: g, sortIcon: u, loadingIcon: b, rowToggleButton: p2, filter: m, paginatorTop: h, paginatorBottom: k, colorScheme: f3, css };

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
var s5 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g2 = { margin: "0.5rem 0 0 0" };
var f4 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var h2 = { margin: "0.5rem 0 0 0" };
var b2 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var m2 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var p3 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v2 = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k2 = { root: o20, panel: r20, header: e16, title: c9, dropdown: d7, inputIcon: n6, selectMonth: t11, selectYear: a9, group: i9, dayView: l4, weekDay: u2, date: s5, monthView: g2, month: f4, yearView: h2, year: b2, buttonbar: m2, timePicker: p3, colorScheme: v2 };

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
var s6 = { gap: "0.5rem", padding: "1rem" };
var u3 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i12 = { background: "rgba(0, 0, 0, 0.5)" };
var d14 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g3 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f5 = { size: "1.5rem" };
var h3 = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } };
var l8 = { root: o29, navButton: r29, navIcon: e23, thumbnailsContent: t16, thumbnailNavButton: c10, thumbnailNavButtonIcon: n10, caption: a14, indicatorList: s6, indicatorButton: u3, insetIndicatorList: i12, insetIndicatorButton: d14, closeButton: g3, closeButtonIcon: f5, colorScheme: h3 };

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
var s7 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var c13 = { root: { borderWidth: "1px" } };
var a21 = { content: { padding: "0" } };
var d19 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var u4 = { root: o45, content: r44, text: e31, icon: n18, closeButton: l11, closeIcon: s7, outlined: c13, simple: a21, colorScheme: d19 };

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
var s8 = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } };
var a29 = { root: r60, bar: o62, colorScheme: s8 };

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
var s9 = { fontWeight: "500", fontSize: "0.875rem" };
var c22 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var l15 = { size: "1rem" };
var t40 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } };
var u5 = { root: o78, icon: r76, content: e50, text: n36, summary: a39, detail: s9, closeButton: c22, closeIcon: l15, colorScheme: t40 };

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
var s10 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u6 = { size: "2rem" };
var b4 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var h4 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m3 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f10 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var css3 = "\n    .p-treetable-mask.p-overlay-mask {\n        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));\n    }\n";
var k3 = { root: o85, header: r83, headerCell: e56, columnTitle: t42, row: c26, bodyCell: n38, footerCell: l17, columnFooter: d33, footer: a41, columnResizer: i27, resizeIndicator: g5, sortIcon: s10, loadingIcon: u6, nodeToggleButton: b4, paginatorTop: h4, paginatorBottom: m3, colorScheme: f10, css: css3 };

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
})({}, e5), e58(Nr, m4({ components: { accordion: c, autocomplete: a, avatar: n, badge: d2, blockui: o6, breadcrumb: t4, button: e6, card: d3, carousel: t6, cascadeselect: f2, checkbox: e9, chip: s2, colorpicker: s3, confirmdialog: r15, confirmpopup: a6, contextmenu: c6, datatable: v, dataview: c8, datepicker: k2, dialog: e17, divider: t12, dock: d9, drawer: e19, editor: l7, fieldset: e21, fileupload: i10, floatlabel: d13, galleria: l8, iconfield: r30, iftalabel: i13, image: e24, imagecompare: r32, inlinemessage: a16, inplace: n12, inputchips: f6, inputgroup: o37, inputnumber: a17, inputotp: e27, inputtext: d16, knob: c11, listbox: n14, megamenu: g4, menu: r42, menubar: e30, message: u4, metergroup: b3, multiselect: n19, orderlist: o48, organizationchart: n20, overlaybadge: t25, paginator: n21, panel: a25, panelmenu: a26, password: n24, picklist: o55, popover: e38, progressbar: t29, progressspinner: r56, radiobutton: e40, rating: i21, ripple: o61, scrollpanel: a29, select: n25, selectbutton: d24, skeleton: o65, slider: a32, speeddial: a33, splitbutton: d25, splitter: t32, stepper: i23, steps: c17, tabmenu: n30, tabs: i24, tabview: e47, tag: n33, terminal: e48, textarea: d28, tieredmenu: c21, timeline: d29, toast: u5, togglebutton: c23, toggleswitch: c24, toolbar: r79, tooltip: e53, tree: d31, treeselect: a40, treetable: k3, virtualscroller: e57 }, css: t8 })));

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

// apps/marketplace-web/src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-2XCQ7P2K.js").then((m5) => m5.MainComponent)
      },
      {
        path: "auth",
        canActivate: [authForwardGuard],
        data: { hideFooter: true },
        children: [
          {
            path: "login",
            loadComponent: () => import("./chunk-HXELX4N7.js").then((m5) => m5.LoginPage)
          },
          {
            path: "register",
            loadComponent: () => import("./chunk-GHHJNKFH.js").then((m5) => m5.RegisterPage)
          },
          {
            path: "request-reset-password",
            loadComponent: () => import("./chunk-HXELX4N7.js").then((m5) => m5.RequestResetPassword)
          },
          {
            path: "reset",
            loadComponent: () => import("./chunk-HXELX4N7.js").then((m5) => m5.ResetComponent)
          },
          {
            path: "verification",
            loadComponent: () => import("./chunk-HXELX4N7.js").then((m5) => m5.Verification)
          }
        ]
      },
      {
        path: "catalog",
        loadChildren: () => import("./chunk-CZG42EQL.js").then((m5) => m5.CATALOG_ROUTES)
      },
      {
        path: "admin",
        loadChildren: () => import("./chunk-6LT72NAF.js").then((m5) => m5.ADMIN_ROUTES)
      },
      {
        path: "product",
        loadChildren: () => import("./chunk-3L27KLGX.js").then((m5) => m5.PRODUCTS_ROUTES)
      },
      {
        path: "",
        loadChildren: () => import("./chunk-RB2XEARS.js").then((m5) => m5.PERSONAL_ROUTES)
      },
      {
        path: "cart",
        loadChildren: () => import("./chunk-CXUV3T7W.js").then((m5) => m5.CART_ROUTES)
      },
      {
        path: "wishlist",
        canActivate: [authGuard],
        loadChildren: () => import("./chunk-36R3RYGV.js").then((m5) => m5.WISHLIST_ROUTES)
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
        case "imagesUploaded":
          this.messageService.add({
            severity: "success",
            summary: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E",
            detail: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440",
            life: 2e3
          });
          break;
        case "imagesUploadError":
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
