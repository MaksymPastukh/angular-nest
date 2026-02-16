import { Routes } from '@angular/router'

export const PRODUCTS_ROUTES: Routes = [
  {
    path: ':id',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/product-detail-page/product-detail-page').then(
            (c) => c.ProductDetailPage
          ),
        pathMatch: 'full',
      },
      {
        path: 'size-guide',
        loadComponent: () =>
          import('./pages/size-guide-page/size-guide-page').then((c) => c.SizeGuidePage),
      },
    ],
  },
]
