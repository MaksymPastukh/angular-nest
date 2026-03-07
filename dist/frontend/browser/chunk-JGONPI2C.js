import {
  ProductDetailPage
} from "./chunk-YPZQEKJX.js";
import {
  SizeGuidePage
} from "./chunk-D5AO4OCT.js";
import "./chunk-EUJ5DNMC.js";
import "./chunk-SLKINVPH.js";
import "./chunk-Q4357RD3.js";
import "./chunk-MD647CH4.js";
import "./chunk-N33NCBGJ.js";
import "./chunk-FFJL2FAH.js";
import "./chunk-M7LHTB6X.js";
import "./chunk-M4YFSVL3.js";
import "./chunk-U35Y4BQQ.js";
import "./chunk-67PJZ4DZ.js";
import "./chunk-XI24UWMS.js";
import "./chunk-ZZ37GBKC.js";
import "./chunk-VRGFCTSI.js";
import "./chunk-SMFOV6AR.js";
import "./chunk-GOMI4DH3.js";

// libs/frontend/product/feature-product-detail/src/lib/product-detail.routes.ts
var PRODUCTS_ROUTES = [
  {
    path: ":id",
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-O2IGE7AM.js").then((c) => c.ProductDetailPage),
        pathMatch: "full"
      },
      {
        path: "size-guide",
        loadComponent: () => import("./chunk-4BTVOAD7.js").then((c) => c.SizeGuidePage)
      }
    ]
  }
];
export {
  PRODUCTS_ROUTES,
  ProductDetailPage,
  SizeGuidePage
};
//# sourceMappingURL=chunk-JGONPI2C.js.map
