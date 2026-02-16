import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AuthCoreFacade } from '../../../../core/auth/http/auth-core.facade'
import { AuthStateService } from '../../../../core/auth/http/auth-state.service'

@Component({
  selector: 'app-account-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './account-nav.html',
  styleUrl: './account-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountNav {
  readonly authCoreFacade = inject(AuthCoreFacade)
  readonly authState = inject(AuthStateService)

  onLogout(): void {
    this.authCoreFacade.logout()
  }
}
