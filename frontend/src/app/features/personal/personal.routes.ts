import { Routes } from '@angular/router'
import { AccountLayout } from './ui/account-layout/account-layout'

export const PERSONAL_ROUTES: Routes = [
  {
    path: 'account',
    component: AccountLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info',
      },
      {
        path: 'info',
        loadComponent: () => import('./pages/info-page/info-page').then((c) => c.InfoPage),
        data: { breadcrumb: 'Personal info' },
      },
      {
        path: 'order',
        loadComponent: () => import('./pages/order/order').then((c) => c.Order),
        data: { breadcrumb: 'Order' },
      },
      {
        path: 'wishlist',
        loadComponent: () => import('./pages/wishlist/wishlist').then((c) => c.Wishlist),
        data: { breadcrumb: 'Wishlist' },
      },
    ],
  },
]
