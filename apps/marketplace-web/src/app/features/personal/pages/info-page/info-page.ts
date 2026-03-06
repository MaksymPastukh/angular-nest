import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { AuthCoreFacade } from '@marketplace/frontend-core-auth'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './info-page.html',
  styleUrl: './info-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPage {
  readonly authFacade = inject(AuthCoreFacade)

  onLogout(): void {
    this.authFacade.logout()
  }
}

