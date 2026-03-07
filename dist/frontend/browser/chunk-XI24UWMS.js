import {
  DestroyRef,
  EMPTY,
  Injectable,
  Injector,
  Subject,
  assertInInjectionContext,
  catchError,
  computed,
  effect,
  finalize,
  inject,
  isObservable,
  isSignal,
  noop,
  setClassMetadata,
  signal,
  tap,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-SMFOV6AR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// libs/frontend/core/config/src/lib/frontend-config.ts
var FRONTEND_CONFIG = {
  api: "http://localhost:3000/api/",
  staticUrl: "http://localhost:3000"
};

// node_modules/@ngrx/operators/fesm2022/ngrx-operators.mjs
function tapResponse(observerOrNext, error, complete) {
  const observer = typeof observerOrNext === "function" ? {
    next: observerOrNext,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    error,
    complete
  } : observerOrNext;
  return (source) => source.pipe(tap({ next: observer.next, complete: observer.complete }), catchError((error2) => {
    observer.error(error2);
    return EMPTY;
  }), observer.finalize ? finalize(observer.finalize) : (source$) => source$);
}

// node_modules/@ngrx/signals/fesm2022/ngrx-signals.mjs
var DEEP_SIGNAL = /* @__PURE__ */ Symbol(typeof ngDevMode !== "undefined" && ngDevMode ? "DEEP_SIGNAL" : "");
function toDeepSignal(signal2) {
  return new Proxy(signal2, {
    has(target, prop) {
      return !!this.get(target, prop, void 0);
    },
    get(target, prop) {
      const value = untracked(target);
      if (!isRecord(value) || !(prop in value)) {
        if (isSignal(target[prop]) && target[prop][DEEP_SIGNAL]) {
          delete target[prop];
        }
        return target[prop];
      }
      if (!isSignal(target[prop])) {
        Object.defineProperty(target, prop, {
          value: computed(() => target()[prop]),
          configurable: true
        });
        target[prop][DEEP_SIGNAL] = true;
      }
      return toDeepSignal(target[prop]);
    }
  });
}
var nonRecords = [WeakSet, WeakMap, Promise, Date, Error, RegExp, ArrayBuffer, DataView, Function];
function isRecord(value) {
  if (value === null || typeof value !== "object" || isIterable(value)) {
    return false;
  }
  let proto = Object.getPrototypeOf(value);
  if (proto === Object.prototype) {
    return true;
  }
  while (proto && proto !== Object.prototype) {
    if (nonRecords.includes(proto.constructor)) {
      return false;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return proto === Object.prototype;
}
function isIterable(value) {
  return typeof value?.[Symbol.iterator] === "function";
}
var STATE_WATCHERS = /* @__PURE__ */ new WeakMap();
var STATE_SOURCE = /* @__PURE__ */ Symbol(typeof ngDevMode !== "undefined" && ngDevMode ? "STATE_SOURCE" : "");
function patchState(stateSource, ...updaters) {
  const currentState = untracked(() => getState(stateSource));
  const newState = updaters.reduce((nextState, updater) => __spreadValues(__spreadValues({}, nextState), typeof updater === "function" ? updater(nextState) : updater), currentState);
  const signals = stateSource[STATE_SOURCE];
  const stateKeys = Reflect.ownKeys(stateSource[STATE_SOURCE]);
  for (const key of Reflect.ownKeys(newState)) {
    if (stateKeys.includes(key)) {
      const signalKey = key;
      if (currentState[signalKey] !== newState[signalKey]) {
        signals[signalKey].set(newState[signalKey]);
      }
    } else if (typeof ngDevMode !== "undefined" && ngDevMode) {
      console.warn(`@ngrx/signals: patchState was called with an unknown state slice '${String(key)}'.`, "Ensure that all state properties are explicitly defined in the initial state.", "Updates to properties not present in the initial state will be ignored.");
    }
  }
  notifyWatchers(stateSource);
}
function getState(stateSource) {
  const signals = stateSource[STATE_SOURCE];
  return Reflect.ownKeys(stateSource[STATE_SOURCE]).reduce((state, key) => {
    const value = signals[key]();
    return __spreadProps(__spreadValues({}, state), {
      [key]: value
    });
  }, {});
}
function getWatchers(stateSource) {
  return STATE_WATCHERS.get(stateSource[STATE_SOURCE]) || [];
}
function notifyWatchers(stateSource) {
  const watchers = getWatchers(stateSource);
  for (const watcher of watchers) {
    const state = untracked(() => getState(stateSource));
    watcher(state);
  }
}
function signalStore(...args) {
  const signalStoreArgs = [...args];
  const config = typeof signalStoreArgs[0] === "function" ? {} : signalStoreArgs.shift();
  const features = signalStoreArgs;
  class SignalStore {
    constructor() {
      const innerStore = features.reduce((store, feature) => feature(store), getInitialInnerStore());
      const {
        stateSignals,
        props,
        methods,
        hooks
      } = innerStore;
      const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, stateSignals), props), methods);
      this[STATE_SOURCE] = innerStore[STATE_SOURCE];
      for (const key of Reflect.ownKeys(storeMembers)) {
        this[key] = storeMembers[key];
      }
      const {
        onInit,
        onDestroy
      } = hooks;
      if (onInit) {
        onInit();
      }
      if (onDestroy) {
        inject(DestroyRef).onDestroy(onDestroy);
      }
    }
    /** @nocollapse */
    static \u0275fac = function SignalStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SignalStore)();
    };
    /** @nocollapse */
    static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: SignalStore,
      factory: SignalStore.\u0275fac,
      providedIn: config.providedIn || null
    });
  }
  (() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalStore, [{
      type: Injectable,
      args: [{
        providedIn: config.providedIn || null
      }]
    }], () => [], null);
  })();
  return SignalStore;
}
function getInitialInnerStore() {
  return {
    [STATE_SOURCE]: {},
    stateSignals: {},
    props: {},
    methods: {},
    hooks: {}
  };
}
function assertUniqueStoreMembers(store, newMemberKeys) {
  const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, store.stateSignals), store.props), store.methods);
  const overriddenKeys = Reflect.ownKeys(storeMembers).filter((memberKey) => newMemberKeys.includes(memberKey));
  if (overriddenKeys.length > 0) {
    console.warn("@ngrx/signals: SignalStore members cannot be overridden.", "Trying to override:", overriddenKeys.map((key) => String(key)).join(", "));
  }
}
function withProps(propsFactory) {
  return (store) => {
    const props = propsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, Reflect.ownKeys(props));
    }
    return __spreadProps(__spreadValues({}, store), {
      props: __spreadValues(__spreadValues({}, store.props), props)
    });
  };
}
function withComputed(computedFactory) {
  return withProps((store) => {
    const computedResult = computedFactory(store);
    const computedResultKeys = Reflect.ownKeys(computedResult);
    return computedResultKeys.reduce((prev, key) => {
      const signalOrComputation = computedResult[key];
      return __spreadProps(__spreadValues({}, prev), {
        [key]: isSignal(signalOrComputation) ? signalOrComputation : computed(signalOrComputation)
      });
    }, {});
  });
}
function withHooks(hooksOrFactory) {
  return (store) => {
    const storeMembers = __spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods);
    const hooks = typeof hooksOrFactory === "function" ? hooksOrFactory(storeMembers) : hooksOrFactory;
    const mergeHooks = (currentHook, hook) => {
      return hook ? () => {
        if (currentHook) {
          currentHook();
        }
        hook(storeMembers);
      } : currentHook;
    };
    return __spreadProps(__spreadValues({}, store), {
      hooks: {
        onInit: mergeHooks(store.hooks.onInit, hooks.onInit),
        onDestroy: mergeHooks(store.hooks.onDestroy, hooks.onDestroy)
      }
    });
  };
}
function withMethods(methodsFactory) {
  return (store) => {
    const methods = methodsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, Reflect.ownKeys(methods));
    }
    return __spreadProps(__spreadValues({}, store), {
      methods: __spreadValues(__spreadValues({}, store.methods), methods)
    });
  };
}
function withState(stateOrFactory) {
  return (store) => {
    const state = typeof stateOrFactory === "function" ? stateOrFactory() : stateOrFactory;
    const stateKeys = Reflect.ownKeys(state);
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      assertUniqueStoreMembers(store, stateKeys);
    }
    const stateSource = store[STATE_SOURCE];
    const stateSignals = {};
    for (const key of stateKeys) {
      stateSource[key] = signal(state[key]);
      stateSignals[key] = toDeepSignal(stateSource[key]);
    }
    return __spreadProps(__spreadValues({}, store), {
      stateSignals: __spreadValues(__spreadValues({}, store.stateSignals), stateSignals)
    });
  };
}

// node_modules/@ngrx/signals/fesm2022/ngrx-signals-rxjs-interop.mjs
function rxMethod(generator, config) {
  if (typeof ngDevMode !== "undefined" && ngDevMode && !config?.injector) {
    assertInInjectionContext(rxMethod);
  }
  const sourceInjector = config?.injector ?? inject(Injector);
  const source$ = new Subject();
  const sourceSub = generator(source$).subscribe();
  sourceInjector.get(DestroyRef).onDestroy(() => sourceSub.unsubscribe());
  const rxMethodFn = (input, config2) => {
    if (isStatic(input)) {
      source$.next(input);
      return { destroy: noop };
    }
    const callerInjector = getCallerInjector();
    if (typeof ngDevMode !== "undefined" && ngDevMode && config2?.injector === void 0 && callerInjector === void 0) {
      console.warn("@ngrx/signals/rxjs-interop: The reactive method was called outside", "the injection context with a signal or observable. This may lead to", "a memory leak. Make sure to call it within the injection context", "(e.g. in a constructor or field initializer) or pass an injector", "explicitly via the config parameter.\n\nFor more information, see:", "https://ngrx.io/guide/signals/rxjs-integration#reactive-methods-and-injector-hierarchies");
    }
    const instanceInjector = config2?.injector ?? callerInjector ?? sourceInjector;
    if (typeof input === "function") {
      const watcher = effect(() => {
        const value = input();
        untracked(() => source$.next(value));
      }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "watcher" } : {}), { injector: instanceInjector }));
      sourceSub.add({ unsubscribe: () => watcher.destroy() });
      return watcher;
    }
    const instanceSub = input.subscribe((value) => source$.next(value));
    sourceSub.add(instanceSub);
    if (instanceInjector !== sourceInjector) {
      instanceInjector.get(DestroyRef).onDestroy(() => instanceSub.unsubscribe());
    }
    return { destroy: () => instanceSub.unsubscribe() };
  };
  rxMethodFn.destroy = sourceSub.unsubscribe.bind(sourceSub);
  return rxMethodFn;
}
function isStatic(value) {
  return typeof value !== "function" && !isObservable(value);
}
function getCallerInjector() {
  try {
    return inject(Injector);
  } catch {
    return void 0;
  }
}

export {
  FRONTEND_CONFIG,
  tapResponse,
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
  rxMethod
};
//# sourceMappingURL=chunk-XI24UWMS.js.map
