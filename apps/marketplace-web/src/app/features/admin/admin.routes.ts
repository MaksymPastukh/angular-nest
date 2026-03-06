import { Routes } from '@angular/router'
import { adminGuard } from '@marketplace/frontend-core-auth'
import { AdminLayout } from './ui/admin-layout/admin-layout'

export const ADMIN_ROUTES: Routes = [
  {
    path: 'panel',
    canActivate: [adminGuard],
    component: AdminLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin',
      },
      {
        path: 'create-product-page',
        loadComponent: () =>
          import('./pages/admin-products/pages/create-product-page/create-product-page').then(
            (c) => c.CreateProductPage
          ),
        data: { breadcrumb: 'Create product' },
      },
      {
        path: 'questions',
        loadComponent: () =>
          import('./pages/admin-questions/pages/admin-questions-page/admin-questions-page').then(
            (c) => c.AdminQuestionsPageComponent
          ),
        data: { breadcrumb: 'Answer on question' },
      },
    ],
  },
]

