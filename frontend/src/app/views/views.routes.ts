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
  {
    path: 'product/:id/size-guide',
    loadComponent: () => import('./products/size-guide/size-guide').then((c) => c.SizeGuide),
  },
] as Routes
