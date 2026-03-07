import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AuthCoreFacade } from '@marketplace/frontend-core-auth'
import { AuthState } from '@marketplace/frontend-core-auth'

@Component({
  selector: 'app-account-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './account-nav.html',
  styleUrl: './account-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountNav {
  readonly authCoreFacade = inject(AuthCoreFacade)
  readonly authState = inject(AuthState)

  onLogout(): void {
    this.authCoreFacade.logout()
  }
}

