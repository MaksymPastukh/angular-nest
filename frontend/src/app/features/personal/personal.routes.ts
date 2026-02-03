import { Routes } from '@angular/router'

export const PERSONAL_ROUTES: Routes = [
  {
    path: 'info',
    loadComponent: () => import('./pages/info-page/info-page').then((c) => c.InfoPage),
  },
]
