import "./chunk-GOMI4DH3.js";

// apps/marketplace-web/src/app/features/product-detail/product-detail.routes.ts
var PRODUCTS_ROUTES = [
  {
    path: ":id",
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-TVTP3M3M.js").then((c) => c.ProductDetailPage),
        pathMatch: "full"
      },
      {
        path: "size-guide",
        loadComponent: () => import("./chunk-LCOL577J.js").then((c) => c.SizeGuidePage)
      }
    ]
  }
];
export {
  PRODUCTS_ROUTES
};
//# sourceMappingURL=chunk-SIJRNP3J.js.map
