import { Routes } from '@angular/router'
import {adminGuard} from '../../core/auth/guard';

export default [
  {
    path: 'admin/create-product',
    loadComponent: () =>
      import('./create-product/create-product').then((c) => c.CreateProduct),
    canActivate: [adminGuard],
  },
] as Routes
