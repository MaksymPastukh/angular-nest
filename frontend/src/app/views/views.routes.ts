import { Routes } from '@angular/router'

export default [
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products').then((c) => c.Products),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-detail/product-detail').then((c) => c.ProductDetail),
  }
] as Routes
