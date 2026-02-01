import { Routes } from '@angular/router'

export default [
  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page').then((c) => c.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register-page/register-page').then((c) => c.RegisterPage),
  },
] as Routes
