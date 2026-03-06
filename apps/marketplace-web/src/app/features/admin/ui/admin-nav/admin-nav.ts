import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AuthCoreFacade } from '@marketplace/frontend-core-auth'
import { AuthState } from '@marketplace/frontend-core-auth'

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

