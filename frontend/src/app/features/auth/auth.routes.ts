import { Routes } from '@angular/router'
import { AuthService } from './data-access/auth.api'
import { AuthFacade } from './store/auth.facade'
import { AuthStore } from './store/auth.store'

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    providers: [AuthStore, AuthFacade, AuthService],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page').then((c) => c.LoginPage),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register-page/register-page').then((c) => c.RegisterPage),
      },
    ],
  },
]
