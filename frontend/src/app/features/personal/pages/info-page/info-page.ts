import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { Breadcrumb } from 'primeng/breadcrumb'
import { AuthCoreFacade } from '../../../../core/auth/http/auth-core.facade'

@Component({
  selector: 'app-root',
  imports: [Breadcrumb],
  templateUrl: './info-page.html',
  styleUrl: './info-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPage {
  readonly authFacade = inject(AuthCoreFacade)

  onLogout(): void {
    this.authFacade.logout()
  }

  readonly breadcrumbItems = computed<MenuItem[]>(() => {
    const items: MenuItem[] = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'My Account',
      },
      {
        label: 'Personal Info',
      },
    ]

    return items
  })
}
