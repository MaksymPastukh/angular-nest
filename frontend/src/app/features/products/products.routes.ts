import { Routes } from '@angular/router'

export const PRODUCTS_ROUTES: Routes = [
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/product-detail-page/product-detail-page').then((c) => c.ProductDetailPage),
  },
  {
    path: ':id/size-guide',
    loadComponent: () =>
      import('./pages/size-guide-page/size-guide-page').then((c) => c.SizeGuidePage),
  },
]
