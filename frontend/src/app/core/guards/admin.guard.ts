import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { UserRole } from '../../features/auth/domain/enums/user-role.enum'
import { AuthSessionService } from '../http/auth.session.service'

export const adminGuard: CanActivateFn = (route, state) => {
  const authSession = inject(AuthSessionService)
  const router = inject(Router)

  if (!authSession.isAuthenticated()) {
    return router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: state.url } })
  }

  return authSession.hasRole(UserRole.ADMIN) ? true : router.createUrlTree(['/'])
}
