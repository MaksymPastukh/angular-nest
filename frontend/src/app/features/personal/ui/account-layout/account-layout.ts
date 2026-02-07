import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { Breadcrumb } from 'primeng/breadcrumb'
import { AccountNav } from '../account-nav/account-nav'

@Component({
  selector: 'app-account-layout',
  imports: [Breadcrumb, AccountNav, RouterOutlet],
  templateUrl: './account-layout.html',
  styleUrl: './account-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountLayout {
  private readonly router = inject(Router)
  private readonly activeRoute = inject(ActivatedRoute)

  readonly breadcrumbItems = computed<MenuItem[]>(() => {
    this.router.isActive(this.router.url, {
      paths: 'subset',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    })

    const items: MenuItem[] = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'My Account',
      },
    ]

    let current = this.activeRoute.root
    if (current) {
      while (current.firstChild) {
        current = current.firstChild
        const label = current.snapshot.data['breadcrumb'] as string
        if (label) items.push({ label })
      }
    }

    return items
  })
}
