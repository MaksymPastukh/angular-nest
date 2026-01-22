import { CanActivateFn } from '@angular/router'
import { inject } from '@angular/core'
import { AuthService } from '../services/auth.service'
import { Location } from '@angular/common'
import { AuthStore } from '../store/auth.store'

export const authForwardGuard: CanActivateFn = (route, state) => {
  const authStore = inject(AuthStore)
  const location = inject(Location)

  if (authStore.isAuthenticated()) {
    location.back()
    return false
  }

  return true
}
