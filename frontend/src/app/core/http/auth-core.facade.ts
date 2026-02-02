import { Injectable, inject } from '@angular/core'
import { Router } from '@angular/router'
import { MessageService } from 'primeng/api'
import { AuthSessionService } from '../http/auth.session.service'
import { AuthStateService } from './auth-state.service'
import { AUTH_MESSAGES } from '../../features/auth/domain/constants/auth-event-messages.constants'

@Injectable({ providedIn: 'root' })
export class AuthCoreFacade {
  private readonly session = inject(AuthSessionService)
  private readonly authState = inject(AuthStateService)
  private readonly router = inject(Router)
  private readonly messageService = inject(MessageService)

  logout(): void {
    this.session.clear()
    this.authState.clear()
    this.messageService.add({
      severity: 'info',
      summary: AUTH_MESSAGES.logout.summary,
      detail: AUTH_MESSAGES.logout.detail,
    })
    void this.router.navigate(['/auth/login'])
  }
}
