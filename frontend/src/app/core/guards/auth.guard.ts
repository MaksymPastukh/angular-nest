import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthFacade } from '../../features/auth/store/auth.facade'

export const authGuard: CanActivateFn = (route, state) => {
  const authFacade = inject(AuthFacade)
  const router = inject(Router)

  if (authFacade.isAuthenticated()) {
    return true
  }

  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url },
  })
}
