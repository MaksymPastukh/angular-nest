import { Routes } from '@angular/router'
import { authForwardGuard } from './core/auth/guards/auth-forward.guard'
import { LayoutComponent } from './core/layout/layout'
import { MainComponent } from './features/main/main'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainComponent },
      {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
        canActivate: [authForwardGuard],
        data: { hideFooter: true },
      },
      {
        path: 'catalog',
        loadChildren: () =>
          import('./features/catalog/catalog.routes').then((m) => m.CATALOG_ROUTES),
      },
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./features/products/products.routes').then((m) => m.PRODUCTS_ROUTES),
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
        loadChildren: () =>
          import('./features/wishlist/wishlist.routes').then((m) => m.WISHLIST_ROUTES),
      },
    ],
  },
]
