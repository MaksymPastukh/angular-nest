import { Routes } from '@angular/router'

export default [
  {
    path: 'products',
    loadComponent: () =>
      import('../catalog/pages/catalog-page/catalog-page').then((c) => c.CatalogPage),
  },
] as Routes
