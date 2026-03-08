import { Routes } from '@angular/router';
import { AdminLayout } from '@marketplace/frontend-admin-ui';
import { adminGuard, authForwardGuard, authGuard } from '@marketplace/frontend-core-auth';
import { LayoutComponent } from '@marketplace/frontend-core-layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@marketplace/frontend-home-feature-home-page').then((m) => m.MainComponent),
      },
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
              import('@marketplace/frontend-auth-feature-login').then(
                (m) => m.RequestResetPassword,
              ),
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
          import('@marketplace/frontend-catalog-feature-catalog-page').then(
            (m) => m.CATALOG_ROUTES,
          ),
      },
      {
        path: 'admin',
        children: [
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
                  import('@marketplace/frontend-admin-feature-products').then(
                    (c) => c.CreateProductPage,
                  ),
                data: { breadcrumb: 'Create product' },
              },
              {
                path: 'questions',
                loadComponent: () =>
                  import('@marketplace/frontend-admin-feature-questions').then(
                    (c) => c.AdminQuestionsPageComponent,
                  ),
                data: { breadcrumb: 'Answer on question' },
              },
            ],
          },
        ],
      },
      {
        path: 'product',
        loadChildren: () =>
          import('@marketplace/frontend-product-feature-product-detail').then(
            (m) => m.PRODUCTS_ROUTES,
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('@marketplace/frontend-personal-feature-account').then((m) => m.PERSONAL_ROUTES),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('@marketplace/frontend-cart-feature-cart-page').then((m) => m.CART_ROUTES),
      },
      {
        path: 'wishlist',
        canActivate: [authGuard],
        loadChildren: () =>
          import('@marketplace/frontend-wishlist-ui').then((m) => m.WISHLIST_ROUTES),
      },
    ],
  },
];
