import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AuthCoreFacade } from '../../../../core/auth/http/auth-core.facade'
import { AuthState } from '../../../../core/auth/http/auth-state.service'

@Component({
  selector: 'app-admin-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './admin-nav.html',
  styleUrl: './admin-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminNav {
  readonly authCoreFacade = inject(AuthCoreFacade)
  readonly authState = inject(AuthState)

  onLogout(): void {
    this.authCoreFacade.logout()
  }
}
