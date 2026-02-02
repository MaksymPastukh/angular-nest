import { computed, effect, inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { MessageService } from 'primeng/api'
import { AuthSessionService } from '../../../core/http/auth.session.service'
import { AUTH_MESSAGES } from '../domain/constants/auth-event-messages.constants'
import { AuthEventInterface } from '../domain/interfaces/auth-event.interface'
import { LoginDataInterface } from '../domain/interfaces/loginData.interface'
import { RegisterDataInterface } from '../domain/interfaces/registerData.interface'
import { AuthStore } from './auth.store'

@Injectable()
export class AuthFacade {
  private readonly store = inject(AuthStore)
  private readonly router = inject(Router)
  private readonly messageService = inject(MessageService)
  private readonly session = inject(AuthSessionService)

  readonly isAuthenticated = this.store.isAuthenticated
  readonly currentUser = this.store.user
  readonly isLoading = this.store.isLoading
  readonly error = this.store.error
  readonly authEvent = this.store.event

  readonly user = computed(() => this.currentUser()?.user ?? null)
  readonly userEmail = computed(() => this.user()?.email ?? null)
  readonly userName = this.store.userName
  readonly userRole = this.store.userRole
  readonly isAdmin = this.store.isAdmin
  readonly isUser = this.store.isUser
  readonly isGuest = computed(() => !this.isAuthenticated())
  readonly hasError = computed(() => this.error() !== null)

  constructor() {
    this.bootstrap()
    this.setupAuthEventEffects()
  }

  register(data: RegisterDataInterface): void {
    this.store.register(data)
  }

  login(data: LoginDataInterface): void {
    this.store.login(data)
  }

  logout(): void {
    this.session.clear()
    this.store.resetState()

    this.messageService.add({
      severity: 'info',
      summary: AUTH_MESSAGES.logout.summary,
      detail: AUTH_MESSAGES.logout.detail,
    })

    void this.router.navigate(['/auth/login'])
  }

  clearEvent(): void {
    this.store.clearEvent()
  }

  private setupAuthEventEffects(): void {
    effect(() => {
      const event = this.authEvent()
      if (!event) return

      this.handleAuthEvent(event)

      this.store.clearEvent()
    })
  }

  private handleAuthEvent(event: AuthEventInterface): void {
    switch (event.type) {
      case 'loginSuccess':
      case 'registerSuccess': {
        const response = this.currentUser()
        if (response) {
          this.session.saveAuthResponse(response)
        }
        this.messageService.add({
          severity: 'success',
          summary:
            event.type === 'loginSuccess'
              ? AUTH_MESSAGES.loginSuccess.summary
              : AUTH_MESSAGES.registerSuccess.summary,
          detail:
            event.type === 'loginSuccess'
              ? AUTH_MESSAGES.loginSuccess.detail(event.userName as string)
              : AUTH_MESSAGES.registerSuccess.detail(event.userName as string),
        })
        void this.router.navigate(['/'])
        break
      }
      case 'loginError':
      case 'registerError':
        this.messageService.add({
          severity: 'error',
          summary:
            event.type === 'loginError'
              ? AUTH_MESSAGES.loginError.summary
              : AUTH_MESSAGES.registerError.summary,
          detail:
            event.type === 'loginError'
              ? AUTH_MESSAGES.loginError.detail(event.message as string)
              : AUTH_MESSAGES.registerError.detail(event.message as string),
        })
        break
      case 'logout':
        break
    }
  }

  bootstrap(): void {
    const session = this.session.loadSession()
    if (!session) return
    this.store.hydrateSession(session)
  }
}
