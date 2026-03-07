import {
  AuthSessionService,
  AuthState
} from "./chunk-Q4357RD3.js";
import {
  Router
} from "./chunk-FFJL2FAH.js";
import {
  FRONTEND_CONFIG,
  patchState,
  rxMethod,
  signalStore,
  tapResponse,
  withComputed,
  withMethods,
  withState
} from "./chunk-XI24UWMS.js";
import {
  HttpClient,
  HttpErrorResponse,
  MessageService
} from "./chunk-VRGFCTSI.js";
import {
  Injectable,
  catchError,
  computed,
  effect,
  finalize,
  inject,
  map,
  pipe,
  setClassMetadata,
  shareReplay,
  switchMap,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-SMFOV6AR.js";

// libs/frontend/auth/data-access/src/lib/domain/constants/auth-event-messages.constants.ts
var AUTH_MESSAGES = {
  loginSuccess: {
    summary: "Login Successful",
    detail: (userName) => `Welcome, ${userName}!`
  },
  registerSuccess: {
    summary: "Registration Successful",
    detail: (userName) => `Welcome, ${userName}!`
  },
  loginError: {
    summary: "Login Failed",
    detail: (message) => message
  },
  registerError: {
    summary: "Registration Failed",
    detail: (message) => message
  },
  logout: {
    summary: "Logged Out",
    detail: "You have been logged out successfully."
  }
};

// libs/frontend/auth/data-access/src/lib/data-access/auth.api.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  session = inject(AuthSessionService);
  inFlightRequest$ = null;
  baseUrl = FRONTEND_CONFIG.api;
  register(registerData) {
    return this.http.post(`${this.baseUrl}auth/register`, registerData).pipe(map(this.validateAuthResponse("registration")), catchError((err) => throwError(() => new Error(this.getErrorMessage(err, "registration")))));
  }
  login(loginData) {
    return this.http.post(`${this.baseUrl}auth/login`, loginData).pipe(map(this.validateAuthResponse("login")), catchError((err) => throwError(() => new Error(this.getErrorMessage(err, "login")))));
  }
  refresh() {
    if (this.inFlightRequest$)
      return this.inFlightRequest$;
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
  validateAuthResponse = (context) => (response) => {
    if (!response?.access_token || !response?.user?.id) {
      throw new Error(`Error during ${context}. Please try again.`);
    }
    return response;
  };
  getErrorMessage(error, context) {
    if (!(error instanceof HttpErrorResponse)) {
      return `Error during ${context}. Please try again.`;
    }
    const message = error.error?.message;
    if (typeof message === "string")
      return message;
    if (Array.isArray(message))
      return message.join(", ");
    return error.message || `Error during ${context}. Please try again.`;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/frontend/auth/data-access/src/lib/domain/constants/auth-event.constants.ts
var AuthEventConstantsType = {
  LOGIN_SUCCESS: "loginSuccess",
  REGISTER_SUCCESS: "registerSuccess",
  LOGIN_ERROR: "loginError",
  REGISTER_ERROR: "registerError",
  LOGOUT: "logout"
};
var AuthEventConstantsMessages = {
  LOGIN_SUCCESS_MESSAGE: "Login Successful",
  REGISTER_SUCCESS_MESSAGE: "Registration Successful"
};

// libs/frontend/auth/data-access/src/lib/domain/enums/user-role.enum.ts
var UserRole;
(function(UserRole2) {
  UserRole2["USER"] = "user";
  UserRole2["ADMIN"] = "admin";
  UserRole2["GUEST"] = "guest";
})(UserRole || (UserRole = {}));

// libs/frontend/auth/data-access/src/lib/store/auth.store.ts
var initialState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  event: null
};
var successEvent = (type, message, userName) => ({
  type,
  message,
  userName
});
var errorEvent = (type, message) => ({
  type,
  message
});
var AuthStore = signalStore({ providedIn: "root" }, withState(initialState), withComputed((store) => {
  const user = computed(() => store.user()?.user ?? null, ...ngDevMode ? [{ debugName: "user" }] : []);
  return {
    userName: computed(() => user()?.firstName ?? "Guest"),
    userRole: computed(() => user()?.role ?? UserRole.GUEST),
    isAdmin: computed(() => user()?.role === UserRole.ADMIN),
    isUser: computed(() => user()?.role === UserRole.USER),
    userId: computed(() => user()?.id ?? null)
  };
}), withMethods((store, authService = inject(AuthService)) => {
  const setPending = () => {
    patchState(store, { isLoading: true, error: null, event: null });
  };
  const stop = () => {
    patchState(store, { isLoading: false });
  };
  const setFailure = (message, type) => {
    patchState(store, {
      error: { message },
      isAuthenticated: false,
      user: null,
      event: errorEvent(type, message)
    });
  };
  const setSuccess = (response, success) => {
    patchState(store, {
      user: response,
      isAuthenticated: true,
      error: null,
      event: successEvent(success.type, success.message, response.user.firstName)
    });
  };
  const getErrorMessage = (error) => {
    if (!(error instanceof HttpErrorResponse))
      return `An unknown error occurred.`;
    const apiMessage = error.error?.message;
    if (typeof apiMessage === "string")
      return apiMessage;
    if (Array.isArray(apiMessage))
      return apiMessage.join(" ");
    return error.message ?? `Request failed with status ${error.status}.`;
  };
  const register = rxMethod(pipe(tap(() => setPending()), switchMap((data) => authService.register(data).pipe(tapResponse({
    next: (response) => setSuccess(response, {
      type: AuthEventConstantsType.REGISTER_SUCCESS,
      message: AuthEventConstantsMessages.REGISTER_SUCCESS_MESSAGE
    }),
    error: (e) => setFailure(getErrorMessage(e), AuthEventConstantsType.REGISTER_ERROR),
    finalize: () => stop()
  })))));
  const login = rxMethod(pipe(tap(() => setPending()), switchMap((data) => authService.login(data).pipe(tapResponse({
    next: (response) => setSuccess(response, {
      type: AuthEventConstantsType.LOGIN_SUCCESS,
      message: AuthEventConstantsMessages.LOGIN_SUCCESS_MESSAGE
    }),
    error: (e) => setFailure(getErrorMessage(e), AuthEventConstantsType.LOGIN_ERROR),
    finalize: () => stop()
  })))));
  const hydrateSession = (session) => {
    patchState(store, {
      user: {
        access_token: session.accessToken,
        refresh_token: session.refreshToken,
        user: session.user
      },
      isAuthenticated: true,
      isLoading: false,
      error: null,
      event: null
    });
  };
  const resetState = () => {
    patchState(store, initialState);
  };
  const clearEvent = () => {
    patchState(store, { event: null });
  };
  return {
    register,
    login,
    hydrateSession,
    resetState,
    clearEvent
  };
}));

// libs/frontend/auth/data-access/src/lib/store/auth.facade.ts
var AuthFacade = class _AuthFacade {
  store = inject(AuthStore);
  router = inject(Router);
  messageService = inject(MessageService);
  session = inject(AuthSessionService);
  authState = inject(AuthState);
  currentUser = this.store.user;
  isLoading = this.store.isLoading;
  error = this.store.error;
  constructor() {
    effect(() => {
      const event = this.store.event();
      if (!event)
        return;
      this.handleAuthEvent(event);
      this.store.clearEvent();
    });
  }
  register(data) {
    this.store.register(data);
  }
  login(data) {
    this.store.login(data);
  }
  handleAuthEvent(event) {
    switch (event.type) {
      case "loginSuccess":
      case "registerSuccess": {
        const response = this.currentUser();
        if (response) {
          this.session.saveAuthResponse(response);
          this.authState.applyAuthResponse(response);
        }
        this.messageService.add({
          severity: "success",
          summary: event.type === "loginSuccess" ? AUTH_MESSAGES.loginSuccess.summary : AUTH_MESSAGES.registerSuccess.summary,
          detail: event.type === "loginSuccess" ? AUTH_MESSAGES.loginSuccess.detail(event.userName) : AUTH_MESSAGES.registerSuccess.detail(event.userName)
        });
        void this.router.navigate(["/"]);
        break;
      }
      case "loginError":
      case "registerError":
        this.messageService.add({
          severity: "error",
          summary: event.type === "loginError" ? AUTH_MESSAGES.loginError.summary : AUTH_MESSAGES.registerError.summary,
          detail: event.type === "loginError" ? AUTH_MESSAGES.loginError.detail(event.message) : AUTH_MESSAGES.registerError.detail(event.message)
        });
        break;
      case "logout":
        break;
    }
  }
  static \u0275fac = function AuthFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthFacade, factory: _AuthFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  AuthFacade
};
//# sourceMappingURL=chunk-QRP4YEHP.js.map
