import "./chunk-GOMI4DH3.js";

// apps/marketplace-web/src/app/features/auth/auth.routes.ts
var AUTH_ROUTES = [
  {
    path: "",
    children: [
      {
        path: "login",
        loadComponent: () => import("./chunk-K3X2GFZF.js").then((c) => c.LoginPage)
      },
      {
        path: "register",
        loadComponent: () => import("./chunk-CYQRRYV6.js").then((c) => c.RegisterPage)
      }
    ]
  }
];
export {
  AUTH_ROUTES
};
//# sourceMappingURL=chunk-ZGIATP73.js.map
