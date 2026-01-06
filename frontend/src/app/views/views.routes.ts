import { Routes } from '@angular/router'

export default [
  {
    path: 'shop',
    loadComponent: () =>
      import('./products/products').then((c) => c.Products),
  },
] as Routes
