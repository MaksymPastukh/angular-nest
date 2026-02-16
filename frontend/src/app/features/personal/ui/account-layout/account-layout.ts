import { BreadcrumbItemInterface, UiBreadcrumbComponent } from '@/shared/ui'
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { filter, map } from 'rxjs'
import { AccountNav } from '../account-nav/account-nav'

@Component({
  selector: 'app-account-layout',
  imports: [AccountNav, RouterOutlet, UiBreadcrumbComponent],
  templateUrl: './account-layout.html',
  styleUrl: './account-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountLayout {
  private readonly router = inject(Router)
  private readonly activeRoute = inject(ActivatedRoute)

  readonly url = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => this.router.url)
    ),
    { initialValue: this.router.url }
  )

  readonly breadcrumbItems = computed<BreadcrumbItemInterface[]>(() => {
    this.url()
    const items: BreadcrumbItemInterface[] = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'My Account' },
    ]

    let current = this.activeRoute.root
    while (current.firstChild) {
      current = current.firstChild
      const label = current.snapshot.data['breadcrumb'] as string | undefined
      if (label) items.push({ label })
    }

    return items
  })
}
