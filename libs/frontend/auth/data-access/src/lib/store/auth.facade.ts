import { effect, inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AuthSessionService, AuthState } from '@marketplace/frontend-core-auth'
import { MessageService } from 'primeng/api'
import { AUTH_MESSAGES } from '../domain/constants/auth-event-messages.constants'
import { AuthEventInterface } from '../domain/interfaces/auth-event.interface'
import { LoginDataInterface } from '../domain/interfaces/loginData.interface'
import { RegisterDataInterface } from '../domain/interfaces/registerData.interface'
import { LoginSubmitResult } from '../domain/types/login-submit-result.type'
import { RegisterSubmitResult } from '../domain/types/register-submit-result.type'
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
    // Legacy flow: listen for store events from rxMethod-based submit handlers.
    effect(() => {
      const event = this.store.event()
      if (!event) return

      this.handleAuthEvent(event)
      this.store.clearEvent()
    })
  }

  // Legacy flow: used by pages that still submit via rxMethod handlers.
  register(data: RegisterDataInterface): void {
    this.store.register(data)
  }

  // Legacy flow: used by pages that still submit via rxMethod handlers.
  login(data: LoginDataInterface): void {
    this.store.login(data)
  }

  async registerWithResult(data: RegisterDataInterface): Promise<RegisterSubmitResult> {
    const result = await this.store.registerForSubmit(data)

    if (result.ok) {
      await this.completeAuthSuccess('register')
      return result
    }

    if (result.kind === 'form') {
      this.showFormError('register', result.message)
    }

    return result
  }

  async loginWithResult(data: LoginDataInterface): Promise<LoginSubmitResult> {
    const result = await this.store.loginForSubmit(data)

    if (result.ok) {
      await this.completeAuthSuccess('login')
      return result
    }

    if (result.kind === 'form') {
      this.showFormError('login', result.message)
    }

    return result
  }

  private async completeAuthSuccess(flow: 'login' | 'register'): Promise<void> {
    const response = this.currentUser()
    if (response) {
      this.session.saveAuthResponse(response)
      this.authState.applyAuthResponse(response)
    }

    const userName = response?.user.firstName ?? 'Guest'
    this.messageService.add({
      severity: 'success',
      summary: flow === 'login' ? AUTH_MESSAGES.loginSuccess.summary : AUTH_MESSAGES.registerSuccess.summary,
      detail: flow === 'login' ? AUTH_MESSAGES.loginSuccess.detail(userName) : AUTH_MESSAGES.registerSuccess.detail(userName),
    })

    await this.router.navigate(['/'])
  }

  private showFormError(flow: 'login' | 'register', message: string): void {
    this.messageService.add({
      severity: 'error',
      summary: flow === 'login' ? AUTH_MESSAGES.loginError.summary : AUTH_MESSAGES.registerError.summary,
      detail: flow === 'login' ? AUTH_MESSAGES.loginError.detail(message) : AUTH_MESSAGES.registerError.detail(message),
    })
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

