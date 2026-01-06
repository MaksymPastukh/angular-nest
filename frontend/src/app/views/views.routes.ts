import { Routes } from '@angular/router'

export default [
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products').then((c) => c.Products),
  },
] as Routes
