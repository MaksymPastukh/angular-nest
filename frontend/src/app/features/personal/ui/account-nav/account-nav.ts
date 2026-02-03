import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AuthCoreFacade } from '../../../../core/auth/http/auth-core.facade'

@Component({
  selector: 'app-account-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './account-nav.html',
  styleUrl: './account-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountNav {
  readonly authCoreFacade = inject(AuthCoreFacade)

  onLogout(): void {
    this.authCoreFacade.logout()
  }
}
