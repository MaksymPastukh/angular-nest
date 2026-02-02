import { inject, Injectable } from '@angular/core'
import { AuthService } from '../../features/auth/data-access/auth.api'
import { AUTHORIZATION_STATE } from '../../features/auth/domain/constants/authorization.constants'
import { UserRole } from '../../features/auth/domain/enums/user-role.enum'
import {
  CurrentUserResponseInterface,
  User,
} from '../../features/auth/domain/interfaces/current-user.interface'
import { LoadSessionInterface } from '../../features/auth/domain/interfaces/get-tokens.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthSessionService {
  readonly authService = inject(AuthService)
  saveAuthResponse(response: CurrentUserResponseInterface): void {
    localStorage.setItem(AUTHORIZATION_STATE.authAccessTokenKey, response.access_token)
    localStorage.setItem(AUTHORIZATION_STATE.authRefreshTokenKey, response.refresh_token)
    this.authService.setItem(AUTHORIZATION_STATE.currentUserKey, response.user)
  }

  clear(): void {
    localStorage.removeItem(AUTHORIZATION_STATE.authAccessTokenKey)
    localStorage.removeItem(AUTHORIZATION_STATE.authRefreshTokenKey)
    localStorage.removeItem(AUTHORIZATION_STATE.currentUserKey)
  }

  getAccessToken(): string | null {
    return localStorage.getItem(AUTHORIZATION_STATE.authAccessTokenKey)
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(AUTHORIZATION_STATE.authRefreshTokenKey)
  }

  getUser(): User | null {
    const userData = localStorage.getItem(AUTHORIZATION_STATE.currentUserKey)
    if (!userData) return null
    try {
      return JSON.parse(userData) as User
    } catch {
      return null
    }
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken()
  }

  hasRole(role: UserRole | string): boolean {
    return this.getUser()?.role === role
  }

  loadSession(): LoadSessionInterface | null {
    const accessToken = this.getAccessToken()
    const refreshToken = this.getRefreshToken()
    const user = this.getUser()

    if (!accessToken || !refreshToken || !user) {
      return null
    } else {
      return {
        accessToken,
        refreshToken,
        user,
      }
    }
  }
}
