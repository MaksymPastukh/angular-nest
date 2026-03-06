import { effect, inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { MessageService } from 'primeng/api'
import { AuthState } from '@marketplace/frontend-core-auth'
import { AuthSessionService } from '@marketplace/frontend-core-auth'
import { AUTH_MESSAGES } from '../domain/constants/auth-event-messages.constants'
import { AuthEventInterface } from '../domain/interfaces/auth-event.interface'
import { LoginDataInterface } from '../domain/interfaces/loginData.interface'
import { RegisterDataInterface } from '../domain/interfaces/registerData.interface'
import { AuthStore } from './auth.store'

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly store = inject(AuthStore)
  private readonly router = inject(Router)
  private readonly messageService = inject(MessageService)
  private readonly session = inject(AuthSessionService)
  private readonly authState = inject(AuthState)

  readonly currentUser = this.store.user
  readonly isLoading = this.store.isLoading
  readonly error = this.store.error

  constructor() {
    effect(() => {
      const event = this.store.event()
      if (!event) return

      this.handleAuthEvent(event)
      this.store.clearEvent()
    })
  }

  register(data: RegisterDataInterface): void {
    this.store.register(data)
  }

  login(data: LoginDataInterface): void {
    this.store.login(data)
  }

  private handleAuthEvent(event: AuthEventInterface): void {
    switch (event.type) {
      case 'loginSuccess':
      case 'registerSuccess': {
        const response = this.currentUser()
        if (response) {
          this.session.saveAuthResponse(response)
          this.authState.applyAuthResponse(response)
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
}

