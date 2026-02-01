import { Routes } from '@angular/router'
import { authForwardGuard } from './core/guards/auth-forward.guard'
import { LayoutComponent } from './core/layout/layout'
import { MainComponent } from './features/main/main'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainComponent },
      {
        path: '',
        loadChildren: () => import('./features/auth/auth.routes'),
        canActivate: [authForwardGuard],
        data: { hideFooter: true },
      },
      {
        path: '',
        loadChildren: () => import('./features/catalog/catalog.routes'),
      },
      {
        path: '',
        loadChildren: () => import('./features/admin/admin.routes'),
      },
      {
        path: '',
        loadChildren: () => import('./features/products/products.routes'),
      },
    ],
  },
]
