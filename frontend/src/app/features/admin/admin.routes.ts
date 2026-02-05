import { Routes } from '@angular/router'

export const ADMIN_ROUTES: Routes = [
  {
    path: 'create-product-page',
    loadComponent: () =>
      import('./pages/create-product-page/create-product-page').then((c) => c.CreateProductPage),
  },
]
