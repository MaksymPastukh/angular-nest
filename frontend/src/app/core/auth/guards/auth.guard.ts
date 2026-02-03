import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthSessionService } from '../http/auth.session.service'

export const authGuard: CanActivateFn = (route, state) => {
  const session = inject(AuthSessionService)
  const router = inject(Router)

  return session.isAuthenticated()
    ? true
    : router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: state.url } })
}
