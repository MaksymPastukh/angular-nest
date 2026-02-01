import { Location } from '@angular/common'
import { inject } from '@angular/core'
import { CanActivateFn } from '@angular/router'
import { AuthFacade } from '../../features/auth/store/auth.facade'

export const authForwardGuard: CanActivateFn = (route, state) => {
  const authFacade = inject(AuthFacade)
  const location = inject(Location)

  if (authFacade.isAuthenticated()) {
    location.back()
    return false
  }

  return true
}
