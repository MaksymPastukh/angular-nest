import { computed, inject, Injectable, signal } from '@angular/core'
import { UserRole } from '../../../features/auth/domain/enums/user-role.enum'
import {
  CurrentUserResponseInterface,
  User,
} from '../../../features/auth/domain/interfaces/current-user.interface'
import { LoadSessionInterface } from '../../../features/auth/domain/interfaces/get-tokens.interface'
import { AuthSessionService } from './auth.session.service'

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private readonly session = inject(AuthSessionService)
  private readonly _curerentUser = signal<User | null>(null)
  private readonly _accessToken = signal<string | null>(null)
  private readonly _refreshToken = signal<string | null>(null)

  readonly user = computed(() => this._curerentUser())
  readonly email = computed(() => this._curerentUser()?.email ?? null)
  readonly name = computed(() => this._curerentUser()?.firstName ?? 'Guest')
  readonly role = computed(() => this._curerentUser()?.role ?? UserRole.GUEST)

  readonly isAuthenticated = computed(() => !!this._accessToken())
  readonly isAdmin = computed(() => this.role() === UserRole.ADMIN)
  readonly isUser = computed(() => this.role() === UserRole.USER)
  readonly isGuest = computed(() => !this.isAuthenticated())

  bootstrap(): void {
    const session = this.session.loadSession()
    if (!session) {
      return
    }

    this.hydrate(session)
  }

  hydrate(session: LoadSessionInterface): void {
    this._curerentUser.set(session.user)
    this._accessToken.set(session.accessToken)
    this._refreshToken.set(session.refreshToken)
  }

  applyAuthResponse(response: CurrentUserResponseInterface): void {
    this._curerentUser.set(response.user)
    this._accessToken.set(response.access_token)
    this._refreshToken.set(response.refresh_token)
  }

  clear(): void {
    this._curerentUser.set(null)
    this._accessToken.set(null)
    this._refreshToken.set(null)
  }
}
