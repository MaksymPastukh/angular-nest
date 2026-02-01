import { Routes } from '@angular/router'

export default [
  {
    path: 'create-product-page',
    loadComponent: () =>
      import('./pages/create-product-page/create-product-page').then((c) => c.CreateProductPage),
  },
] as Routes
