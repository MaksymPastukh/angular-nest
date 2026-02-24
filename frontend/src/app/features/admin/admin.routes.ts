import { Routes } from '@angular/router'
import { adminGuard } from '../../core/auth/guards/admin.guard'

export const ADMIN_ROUTES: Routes = [
  {
    path: 'create-product-page',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./admin-products/pages/create-product-page/create-product-page').then(
        (c) => c.CreateProductPage
      ),
  },
  {
    path: 'questions',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./admin-questions/pages/admin-questions-page/admin-questions-page').then(
        (c) => c.AdminQuestionsPageComponent
      ),
  },
]
