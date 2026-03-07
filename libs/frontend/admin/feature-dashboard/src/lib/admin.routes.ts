import { Routes } from '@angular/router'
import { adminGuard } from '@marketplace/frontend-core-auth'
import { AdminLayout } from '@marketplace/frontend-admin-ui'

export const ADMIN_ROUTES: Routes = [
  {
    path: 'panel',
    canActivate: [adminGuard],
    component: AdminLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create-product-page',
      },
      {
        path: 'create-product-page',
        loadComponent: () =>
          import('@marketplace/frontend-admin-feature-products').then((c) => c.CreateProductPage),
        data: { breadcrumb: 'Create product' },
      },
      {
        path: 'questions',
        loadComponent: () =>
          import('@marketplace/frontend-admin-feature-questions').then(
            (c) => c.AdminQuestionsPageComponent
          ),
        data: { breadcrumb: 'Answer on question' },
      },
    ],
  },
]

