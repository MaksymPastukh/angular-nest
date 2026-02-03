import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthSessionService } from '../http/auth.session.service'

export const authForwardGuard: CanActivateFn = () => {
  const session = inject(AuthSessionService)
  const router = inject(Router)

  return session.isAuthenticated() ? router.createUrlTree(['/']) : true
}
