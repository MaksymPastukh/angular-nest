import { Routes } from '@angular/router'
import { authForwardGuard } from './core/auth/guard/auth-forward.guard'
import { LayoutComponent } from './shared/layout/layout'
import { MainComponent } from './views/main/main'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainComponent },
      {
        path: '',
        loadChildren: () => import('./core/auth/auth.routes'),
        canActivate: [authForwardGuard],
        data: { hideFooter: true },
      },
      {
        path: '',
        loadChildren: () => import('./views/views.routes'),
      },
    ],
  },
]
