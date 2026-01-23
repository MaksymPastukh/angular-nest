import { Routes } from '@angular/router'

export default [
  {
    path: 'products',
    loadComponent: () => import('./products/catalog/catalog').then((c) => c.Products),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./products/detail/detail').then((c) => c.ProductDetail),
  },
] as Routes
