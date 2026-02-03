import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthSessionService } from '../http/auth.session.service'
import { UserRole } from '../../features/auth/domain/enums/user-role.enum'

export const adminGuard: CanActivateFn = (route, state) => {
  const session = inject(AuthSessionService)
  const router = inject(Router)

  if (!session.isAuthenticated()) {
    return router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: state.url } })
  }

  return session.hasRole(UserRole.ADMIN) ? true : router.createUrlTree(['/'])
}
