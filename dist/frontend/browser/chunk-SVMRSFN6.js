import {
  AuthCoreFacade,
  AuthState
} from "./chunk-7HICPFIX.js";
import {
  toSignal
} from "./chunk-OZMIQDZZ.js";
import {
  UiBreadcrumbComponent
} from "./chunk-CYXE43MA.js";
import "./chunk-LJIN2HB3.js";
import "./chunk-BEJS4TLU.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-JD54KQF2.js";
import "./chunk-SLVXWW7T.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  filter,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-IPMWBXXP.js";
import "./chunk-GOMI4DH3.js";

// apps/marketplace-web/src/app/features/personal/ui/account-nav/account-nav.ts
var _c0 = () => ({ exact: true });
function AccountNav_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, " Admin panel ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(1, _c0));
  }
}
var AccountNav = class _AccountNav {
  authCoreFacade = inject(AuthCoreFacade);
  authState = inject(AuthState);
  onLogout() {
    this.authCoreFacade.logout();
  }
  static \u0275fac = function AccountNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountNav)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountNav, selectors: [["app-account-nav"]], decls: 23, vars: 3, consts: [[1, "rounded-2xl", "bg-white", "p-4"], [1, "mb-6"], [1, "flex", "items-start", "gap-3"], [1, "mt-1", "h-6", "w-1", "rounded-full", "bg-(--color-primary)"], [1, "font-coresans", "text-2xl", "font-semibold", "text-(--color-text-base)"], [1, "mt-1", "text-sm", "text-(--color-text-gray)"], [1, "[&>a]:flex", "[&>a]:cursor-pointer", "[&>a]:items-center", "[&>a]:gap-3", "[&>a]:rounded-xl", "[&>a]:px-3", "[&>a]:py-2.5", "[&>a]:text-sm", "[&>a]:text-[var(--color-text-menu-gray)]", "[&>a:hover]:bg-gray-50", "[&>a:hover]:text-[var(--color-text-base)]", "[&>a]:transition-colors", "[&_i]:text-base", "[&>a.active]:bg-gray-50", "[&>a.active]:text-[var(--color-text-base)]", "[&>a.active]:relative", "[&>a.active]:pl-4", "[&>a.active]:before:content-['']", "[&>a.active]:before:absolute", "[&>a.active]:before:left-0", "[&>a.active]:before:top-2.5", "[&>a.active]:before:bottom-2.5", "[&>a.active]:before:w-0.5", "[&>a.active]:before:rounded-full", "[&>a.active]:before:bg-[var(--color-text-base)]"], ["routerLink", "/admin/panel", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/account/order", "routerLinkActive", "active"], [1, "pi", "pi-shopping-bag"], ["routerLink", "/account/wishlist", "routerLinkActive", "active"], [1, "pi", "pi-heart"], ["routerLink", "/account/info", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [1, "pi", "pi-user"], [3, "click"], [1, "pi", "pi-sign-out"]], template: function AccountNav_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "span", 3);
      \u0275\u0275elementStart(4, "div")(5, "p", 4);
      \u0275\u0275text(6, "Hello Jhanvi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Welcome to your Account");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "nav", 6);
      \u0275\u0275conditionalCreate(10, AccountNav_Conditional_10_Template, 3, 2, "a", 7);
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275text(13, " My orders ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 10);
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275text(16, " Wishlist ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 12);
      \u0275\u0275element(18, "i", 13);
      \u0275\u0275text(19, " My info ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 14);
      \u0275\u0275listener("click", function AccountNav_Template_a_click_20_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275text(22, " Sign out ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.authState.isAdmin() ? 10 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(2, _c0));
    }
  }, dependencies: [RouterLink, RouterLinkActive], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountNav, [{
    type: Component,
    args: [{ selector: "app-account-nav", imports: [RouterLink, RouterLinkActive], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="rounded-2xl bg-white p-4">
  <div class="mb-6">
    <div class="flex items-start gap-3">
      <span class="mt-1 h-6 w-1 rounded-full bg-(--color-primary)"></span>

      <div>
        <p class="font-coresans text-2xl font-semibold text-(--color-text-base)">Hello Jhanvi</p>
        <p class="mt-1 text-sm text-(--color-text-gray)">Welcome to your Account</p>
      </div>
    </div>
  </div>

  <nav
    class="[&>a]:flex [&>a]:cursor-pointer [&>a]:items-center [&>a]:gap-3 [&>a]:rounded-xl [&>a]:px-3 [&>a]:py-2.5 [&>a]:text-sm [&>a]:text-[var(--color-text-menu-gray)] [&>a:hover]:bg-gray-50 [&>a:hover]:text-[var(--color-text-base)] [&>a]:transition-colors [&_i]:text-base [&>a.active]:bg-gray-50 [&>a.active]:text-[var(--color-text-base)] [&>a.active]:relative [&>a.active]:pl-4 [&>a.active]:before:content-[''] [&>a.active]:before:absolute [&>a.active]:before:left-0 [&>a.active]:before:top-2.5 [&>a.active]:before:bottom-2.5 [&>a.active]:before:w-0.5 [&>a.active]:before:rounded-full [&>a.active]:before:bg-[var(--color-text-base)]"
  >
    @if (authState.isAdmin()) {
      <a
        routerLink="/admin/panel"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <i class="pi pi-user"></i>
        Admin panel
      </a>
    }

    <a routerLink="/account/order" routerLinkActive="active">
      <i class="pi pi-shopping-bag"></i>
      My orders
    </a>

    <a routerLink="/account/wishlist" routerLinkActive="active">
      <i class="pi pi-heart"></i>
      Wishlist
    </a>

    <a
      routerLink="/account/info"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }"
    >
      <i class="pi pi-user"></i>
      My info
    </a>

    <a (click)="onLogout()">
      <i class="pi pi-sign-out"></i>
      Sign out
    </a>
  </nav>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountNav, { className: "AccountNav", filePath: "apps/marketplace-web/src/app/features/personal/ui/account-nav/account-nav.ts", lineNumber: 13 });
})();

// apps/marketplace-web/src/app/features/personal/ui/account-layout/account-layout.ts
var AccountLayout = class _AccountLayout {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  url = toSignal(this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map(() => this.router.url)), { initialValue: this.router.url });
  breadcrumbItems = computed(() => {
    this.url();
    const items = [
      { label: "Home", icon: "pi pi-home", routerLink: "/" },
      { label: "My Account" }
    ];
    let current = this.activeRoute.root;
    while (current.firstChild) {
      current = current.firstChild;
      const label = current.snapshot.data["breadcrumb"];
      if (label)
        items.push({ label });
    }
    return items;
  }, ...ngDevMode ? [{ debugName: "breadcrumbItems" }] : []);
  static \u0275fac = function AccountLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountLayout, selectors: [["app-account-layout"]], decls: 7, vars: 1, consts: [[1, "container", "mx-auto", "w-full", "px-4", "py-8"], [3, "items"], [1, "grid", "gap-6", "lg:grid-cols-[280px_1fr]"], [1, "lg:sticky", "lg:top-6"], [1, "min-w-0"]], template: function AccountLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "app-ui-breadcrumb", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "aside", 3);
      \u0275\u0275element(4, "app-account-nav");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "main", 4);
      \u0275\u0275element(6, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("items", ctx.breadcrumbItems());
    }
  }, dependencies: [AccountNav, RouterOutlet, UiBreadcrumbComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountLayout, [{
    type: Component,
    args: [{ selector: "app-account-layout", imports: [AccountNav, RouterOutlet, UiBreadcrumbComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="container mx-auto w-full px-4 py-8">\n  <app-ui-breadcrumb [items]="breadcrumbItems()" />\n  <div class="grid gap-6 lg:grid-cols-[280px_1fr]">\n    <aside class="lg:sticky lg:top-6">\n      <app-account-nav />\n    </aside>\n\n    <main class="min-w-0">\n      <router-outlet />\n    </main>\n  </div>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountLayout, { className: "AccountLayout", filePath: "apps/marketplace-web/src/app/features/personal/ui/account-layout/account-layout.ts", lineNumber: 15 });
})();

// apps/marketplace-web/src/app/features/personal/personal.routes.ts
var PERSONAL_ROUTES = [
  {
    path: "account",
    component: AccountLayout,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "info"
      },
      {
        path: "info",
        loadComponent: () => import("./chunk-4JTLBOYU.js").then((c) => c.InfoPage),
        data: { breadcrumb: "Personal info" }
      },
      {
        path: "order",
        loadComponent: () => import("./chunk-W6ZSUNFY.js").then((c) => c.Order),
        data: { breadcrumb: "Order" }
      },
      {
        path: "wishlist",
        loadComponent: () => import("./chunk-3KRI7ZHA.js").then((c) => c.Wishlist),
        data: { breadcrumb: "Wishlist" }
      }
    ]
  }
];
export {
  PERSONAL_ROUTES
};
//# sourceMappingURL=chunk-SVMRSFN6.js.map
