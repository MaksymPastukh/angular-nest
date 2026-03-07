import { Routes } from '@angular/router'

export const CART_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/card/cart').then((c) => c.Cart),
  },
]
