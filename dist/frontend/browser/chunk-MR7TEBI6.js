import {
  AuthCoreFacade,
  AuthState,
  adminGuard
} from "./chunk-Q4357RD3.js";
import {
  toSignal
} from "./chunk-MD647CH4.js";
import {
  UiBreadcrumbComponent
} from "./chunk-N33NCBGJ.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-FFJL2FAH.js";
import "./chunk-67PJZ4DZ.js";
import "./chunk-ZZ37GBKC.js";
import "./chunk-VRGFCTSI.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-SMFOV6AR.js";
import "./chunk-GOMI4DH3.js";

// apps/marketplace-web/src/app/features/admin/ui/admin-nav/admin-nav.ts
var AdminNav = class _AdminNav {
  authCoreFacade = inject(AuthCoreFacade);
  authState = inject(AuthState);
  onLogout() {
    this.authCoreFacade.logout();
  }
  static \u0275fac = function AdminNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminNav)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminNav, selectors: [["app-admin-nav"]], decls: 14, vars: 0, consts: [[1, "rounded-2xl", "bg-white", "p-4"], [1, "mb-6"], [1, "flex", "items-start", "gap-3"], [1, "mt-1", "h-6", "w-1", "rounded-full", "bg-(--color-primary)"], [1, "font-coresans", "text-2xl", "font-semibold", "text-(--color-text-base)"], [1, "[&>a]:flex", "[&>a]:cursor-pointer", "[&>a]:items-center", "[&>a]:gap-3", "[&>a]:rounded-xl", "[&>a]:px-3", "[&>a]:py-2.5", "[&>a]:text-sm", "[&>a]:text-(--color-text-menu-gray)", "[&>a:hover]:bg-gray-50", "[&>a:hover]:text-(--color-text-base)", "[&>a]:transition-colors", "[&_i]:text-base", "[&>a.active]:bg-gray-50", "[&>a.active]:text-(--color-text-base)", "[&>a.active]:relative", "[&>a.active]:pl-4", "[&>a.active]:before:content-['']", "[&>a.active]:before:absolute", "[&>a.active]:before:left-0", "[&>a.active]:before:top-2.5", "[&>a.active]:before:bottom-2.5", "[&>a.active]:before:w-0.5", "[&>a.active]:before:rounded-full", "[&>a.active]:before:bg-(--color-text-base)"], ["routerLink", "create-product-page", "routerLinkActive", "active"], [1, "pi", "pi-plus"], ["routerLink", "questions", "routerLinkActive", "active"], [1, "pi", "pi-heart"]], template: function AdminNav_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "span", 3);
      \u0275\u0275elementStart(4, "div")(5, "p", 4);
      \u0275\u0275text(6, "Hello admin ...");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(7, "nav", 5)(8, "a", 6);
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275text(10, " Create Product ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275text(13, " User questions ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterLink, RouterLinkActive], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminNav, [{
    type: Component,
    args: [{ selector: "app-admin-nav", imports: [RouterLink, RouterLinkActive], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="rounded-2xl bg-white p-4">
  <div class="mb-6">
    <div class="flex items-start gap-3">
      <span class="mt-1 h-6 w-1 rounded-full bg-(--color-primary)"></span>
      <div>
        <p class="font-coresans text-2xl font-semibold text-(--color-text-base)">Hello admin ...</p>
      </div>
    </div>
  </div>

  <nav
    class="[&>a]:flex [&>a]:cursor-pointer [&>a]:items-center [&>a]:gap-3 [&>a]:rounded-xl [&>a]:px-3 [&>a]:py-2.5 [&>a]:text-sm [&>a]:text-(--color-text-menu-gray) [&>a:hover]:bg-gray-50 [&>a:hover]:text-(--color-text-base) [&>a]:transition-colors [&_i]:text-base [&>a.active]:bg-gray-50 [&>a.active]:text-(--color-text-base) [&>a.active]:relative [&>a.active]:pl-4 [&>a.active]:before:content-[''] [&>a.active]:before:absolute [&>a.active]:before:left-0 [&>a.active]:before:top-2.5 [&>a.active]:before:bottom-2.5 [&>a.active]:before:w-0.5 [&>a.active]:before:rounded-full [&>a.active]:before:bg-(--color-text-base)"
  >
    <a routerLink="create-product-page" routerLinkActive="active">
      <i class="pi pi-plus"></i>
      Create Product
    </a>

    <a routerLink="questions" routerLinkActive="active">
      <i class="pi pi-heart"></i>
      User questions
    </a>
  </nav>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminNav, { className: "AdminNav", filePath: "apps/marketplace-web/src/app/features/admin/ui/admin-nav/admin-nav.ts", lineNumber: 13 });
})();

// apps/marketplace-web/src/app/features/admin/ui/admin-layout/admin-layout.ts
var AdminLayout = class _AdminLayout {
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  url = toSignal(this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map(() => this.router.url)), { initialValue: this.router.url });
  breadcrumbItems = computed(() => {
    this.url();
    const items = [
      { label: "Home", icon: "pi pi-home", routerLink: "/" },
      { label: "My Account", routerLink: "/account/info" },
      { label: "Admin panel", routerLink: "/admin/panel" }
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
  static \u0275fac = function AdminLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayout, selectors: [["app-admin-layout"]], decls: 7, vars: 1, consts: [[1, "container", "mx-auto", "w-full", "px-4", "py-8"], [3, "items"], [1, "grid", "gap-6", "lg:grid-cols-[280px_1fr]"], [1, "lg:sticky", "lg:top-6"], [1, "min-w-0"]], template: function AdminLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "app-ui-breadcrumb", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "aside", 3);
      \u0275\u0275element(4, "app-admin-nav");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "main", 4);
      \u0275\u0275element(6, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("items", ctx.breadcrumbItems());
    }
  }, dependencies: [RouterOutlet, UiBreadcrumbComponent, AdminNav], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminLayout, [{
    type: Component,
    args: [{ selector: "app-admin-layout", imports: [RouterOutlet, UiBreadcrumbComponent, AdminNav], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="container mx-auto w-full px-4 py-8">\n  <app-ui-breadcrumb [items]="breadcrumbItems()" />\n  <div class="grid gap-6 lg:grid-cols-[280px_1fr]">\n    <aside class="lg:sticky lg:top-6">\n      <app-admin-nav />\n    </aside>\n\n    <main class="min-w-0">\n      <router-outlet />\n    </main>\n  </div>\n</section>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayout, { className: "AdminLayout", filePath: "apps/marketplace-web/src/app/features/admin/ui/admin-layout/admin-layout.ts", lineNumber: 15 });
})();

// apps/marketplace-web/src/app/features/admin/admin.routes.ts
var ADMIN_ROUTES = [
  {
    path: "panel",
    canActivate: [adminGuard],
    component: AdminLayout,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "admin"
      },
      {
        path: "create-product-page",
        loadComponent: () => import("./chunk-TWNKSHI3.js").then((c) => c.CreateProductPage),
        data: { breadcrumb: "Create product" }
      },
      {
        path: "questions",
        loadComponent: () => import("./chunk-3QHLGWNV.js").then((c) => c.AdminQuestionsPageComponent),
        data: { breadcrumb: "Answer on question" }
      }
    ]
  }
];
export {
  ADMIN_ROUTES
};
//# sourceMappingURL=chunk-MR7TEBI6.js.map
