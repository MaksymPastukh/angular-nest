import { Routes } from '@angular/router'

export default [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then((c) => c.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register').then((c) => c.Register),
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./components/reset/reset').then((c) => c.ResetComponent),
  },
  {
    path: 'verification',
    loadComponent: () =>
      import('./components/verification/verification').then((c) => c.Verification),
  },
] as Routes
