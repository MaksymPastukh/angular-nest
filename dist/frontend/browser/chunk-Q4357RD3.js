import {
  Router
} from "./chunk-FFJL2FAH.js";
import {
  MessageService
} from "./chunk-VRGFCTSI.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-SMFOV6AR.js";

// libs/frontend/core/auth/src/lib/domain/enums/user-role.enum.ts
var UserRole;
(function(UserRole2) {
  UserRole2["USER"] = "user";
  UserRole2["ADMIN"] = "admin";
  UserRole2["GUEST"] = "guest";
})(UserRole || (UserRole = {}));

// libs/frontend/core/auth/src/lib/domain/constants/authorization.constants.ts
var AUTHORIZATION_STATE = {
  authAccessTokenKey: "accessToken",
  authRefreshTokenKey: "refreshToken",
  currentUserKey: "currentUser"
};

// libs/frontend/core/auth/src/lib/http/auth.session.service.ts
var AuthSessionService = class _AuthSessionService {
  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  }
  saveAuthResponse(response) {
    localStorage.setItem(AUTHORIZATION_STATE.authAccessTokenKey, response.access_token);
    localStorage.setItem(AUTHORIZATION_STATE.authRefreshTokenKey, response.refresh_token);
    this.setItem(AUTHORIZATION_STATE.currentUserKey, response.user);
  }
  clear() {
    localStorage.removeItem(AUTHORIZATION_STATE.authAccessTokenKey);
    localStorage.removeItem(AUTHORIZATION_STATE.authRefreshTokenKey);
    localStorage.removeItem(AUTHORIZATION_STATE.currentUserKey);
  }
  getAccessToken() {
    return localStorage.getItem(AUTHORIZATION_STATE.authAccessTokenKey);
  }
  getRefreshToken() {
    return localStorage.getItem(AUTHORIZATION_STATE.authRefreshTokenKey);
  }
  getUser() {
    const userData = localStorage.getItem(AUTHORIZATION_STATE.currentUserKey);
    if (!userData)
      return null;
    try {
      return JSON.parse(userData);
    } catch {
      return null;
    }
  }
  isAuthenticated() {
    return !!this.getAccessToken();
  }
  hasRole(role) {
    const userRole = this.getUser()?.role;
    return userRole !== void 0 && userRole === role;
  }
  loadSession() {
    const accessToken = this.getAccessToken();
    const refreshToken = this.getRefreshToken();
    const user = this.getUser();
    if (!accessToken || !refreshToken || !user) {
      return null;
    } else {
      return {
        accessToken,
        refreshToken,
        user
      };
    }
  }
  static \u0275fac = function AuthSessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthSessionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthSessionService, factory: _AuthSessionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthSessionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/frontend/core/auth/src/lib/guards/admin.guard.ts
var adminGuard = (route, state) => {
  const session = inject(AuthSessionService);
  const router = inject(Router);
  if (!session.isAuthenticated()) {
    return router.createUrlTree(["/auth/login"], { queryParams: { returnUrl: state.url } });
  }
  return session.hasRole(UserRole.ADMIN) ? true : router.createUrlTree(["/"]);
};

// libs/frontend/core/auth/src/lib/http/auth-state.service.ts
var AuthState = class _AuthState {
  session = inject(AuthSessionService);
  _curerentUser = signal(null, ...ngDevMode ? [{ debugName: "_curerentUser" }] : []);
  _accessToken = signal(null, ...ngDevMode ? [{ debugName: "_accessToken" }] : []);
  _refreshToken = signal(null, ...ngDevMode ? [{ debugName: "_refreshToken" }] : []);
  user = computed(() => this._curerentUser(), ...ngDevMode ? [{ debugName: "user" }] : []);
  email = computed(() => this._curerentUser()?.email ?? null, ...ngDevMode ? [{ debugName: "email" }] : []);
  name = computed(() => this._curerentUser()?.firstName ?? "Guest", ...ngDevMode ? [{ debugName: "name" }] : []);
  role = computed(() => this._curerentUser()?.role ?? UserRole.GUEST, ...ngDevMode ? [{ debugName: "role" }] : []);
  isAuthenticated = computed(() => !!this._accessToken(), ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
  isAdmin = computed(() => this.role() === UserRole.ADMIN, ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  isUser = computed(() => this.role() === UserRole.USER, ...ngDevMode ? [{ debugName: "isUser" }] : []);
  isGuest = computed(() => !this.isAuthenticated(), ...ngDevMode ? [{ debugName: "isGuest" }] : []);
  bootstrap() {
    const session = this.session.loadSession();
    if (!session) {
      return;
    }
    this.hydrate(session);
  }
  hydrate(session) {
    this._curerentUser.set(session.user);
    this._accessToken.set(session.accessToken);
    this._refreshToken.set(session.refreshToken);
  }
  applyAuthResponse(response) {
    this._curerentUser.set(response.user);
    this._accessToken.set(response.access_token);
    this._refreshToken.set(response.refresh_token);
  }
  clear() {
    this._curerentUser.set(null);
    this._accessToken.set(null);
    this._refreshToken.set(null);
  }
  static \u0275fac = function AuthState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthState)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthState, factory: _AuthState.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/frontend/core/auth/src/lib/domain/constants/auth-event-messages.constants.ts
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

// libs/frontend/core/auth/src/lib/http/auth-core.facade.ts
var AuthCoreFacade = class _AuthCoreFacade {
  session = inject(AuthSessionService);
  authState = inject(AuthState);
  router = inject(Router);
  messageService = inject(MessageService);
  logout() {
    this.session.clear();
    this.authState.clear();
    this.messageService.add({
      severity: "info",
      summary: AUTH_MESSAGES.logout.summary,
      detail: AUTH_MESSAGES.logout.detail
    });
    void this.router.navigate(["/auth/login"]);
  }
  static \u0275fac = function AuthCoreFacade_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthCoreFacade)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthCoreFacade, factory: _AuthCoreFacade.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthCoreFacade, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// libs/frontend/core/auth/src/lib/guards/auth-forward.guard.ts
var authForwardGuard = () => {
  const session = inject(AuthSessionService);
  const router = inject(Router);
  return session.isAuthenticated() ? router.createUrlTree(["/"]) : true;
};

// libs/frontend/core/auth/src/lib/guards/auth.guard.ts
var authGuard = (route, state) => {
  const session = inject(AuthSessionService);
  const router = inject(Router);
  return session.isAuthenticated() ? true : router.createUrlTree(["/auth/login"], { queryParams: { returnUrl: state.url } });
};

export {
  AuthSessionService,
  adminGuard,
  authForwardGuard,
  authGuard,
  AuthState,
  AuthCoreFacade
};
//# sourceMappingURL=chunk-Q4357RD3.js.map
