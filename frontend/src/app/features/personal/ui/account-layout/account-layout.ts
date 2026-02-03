import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { Breadcrumb } from 'primeng/breadcrumb'
import { filter } from 'rxjs'
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

  private readonly numbTick = signal(0)

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => this.numbTick.update((value) => value + 1))
  }

  readonly breadcrumbItems = computed<MenuItem[]>(() => {
    this.numbTick()

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
