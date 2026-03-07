import { Routes } from '@angular/router'
import { authForwardGuard } from '@marketplace/frontend-core-auth'
import { authGuard } from '@marketplace/frontend-core-auth'
import { LayoutComponent } from '@marketplace/frontend-core-layout'
import { MainComponent } from './features/main/main'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainComponent },
      {
        path: 'auth',
        canActivate: [authForwardGuard],
        data: { hideFooter: true },
        children: [
          {
            path: 'login',
            loadComponent: () =>
              import('@marketplace/frontend-auth-feature-login').then((m) => m.LoginPage),
          },
          {
            path: 'register',
            loadComponent: () =>
              import('@marketplace/frontend-auth-feature-register').then((m) => m.RegisterPage),
          },
          {
            path: 'request-reset-password',
            loadComponent: () =>
              import('@marketplace/frontend-auth-feature-login').then((m) => m.RequestResetPassword),
          },
          {
            path: 'reset',
            loadComponent: () =>
              import('@marketplace/frontend-auth-feature-login').then((m) => m.ResetComponent),
          },
          {
            path: 'verification',
            loadComponent: () =>
              import('@marketplace/frontend-auth-feature-login').then((m) => m.Verification),
          },
        ],
      },
      {
        path: 'catalog',
        loadChildren: () =>
          import('@marketplace/frontend-catalog-feature-catalog-page').then((m) => m.CATALOG_ROUTES),
      },
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('@marketplace/frontend-product-feature-product-detail').then((m) => m.PRODUCTS_ROUTES),
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/personal/personal.routes').then((m) => m.PERSONAL_ROUTES),
      },
      {
        path: 'cart',
        loadChildren: () => import('./features/cart/cart.routes').then((m) => m.CART_ROUTES),
      },
      {
        path: 'wishlist',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./features/wishlist/wishlist.routes').then((m) => m.WISHLIST_ROUTES),
      },
    ],
  },
]

