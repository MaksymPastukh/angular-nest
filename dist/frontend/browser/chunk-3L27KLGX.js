import {
  ProductDetailPage
} from "./chunk-VGKYCVVB.js";
import {
  SizeGuidePage
} from "./chunk-T6PTK4DF.js";
import "./chunk-XYKFYV75.js";
import "./chunk-MY77PPEI.js";
import "./chunk-WAPWYWJN.js";
import "./chunk-MRSX6FQU.js";
import "./chunk-T4F5K7HN.js";
import "./chunk-3DX3XWYM.js";
import "./chunk-I5AK7T3M.js";
import "./chunk-6QZB4DAZ.js";
import "./chunk-MWDZSOMN.js";
import "./chunk-VP3NVYXS.js";
import "./chunk-CH46WUXX.js";
import "./chunk-C2RRMDEJ.js";
import "./chunk-SXE3IDZP.js";
import "./chunk-PV4HM4QP.js";
import "./chunk-M4TX5Q67.js";
import "./chunk-SJAIUEWT.js";
import "./chunk-2WGIEBYO.js";

// libs/frontend/product/feature-product-detail/src/lib/product-detail.routes.ts
var PRODUCTS_ROUTES = [
  {
    path: ":id",
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-2NL6J7MP.js").then((c) => c.ProductDetailPage),
        pathMatch: "full"
      },
      {
        path: "size-guide",
        loadComponent: () => import("./chunk-AF4NW5NF.js").then((c) => c.SizeGuidePage)
      }
    ]
  }
];
export {
  PRODUCTS_ROUTES,
  ProductDetailPage,
  SizeGuidePage
};
//# sourceMappingURL=chunk-3L27KLGX.js.map
