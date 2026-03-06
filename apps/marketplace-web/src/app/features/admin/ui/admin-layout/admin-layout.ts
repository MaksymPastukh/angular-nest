import { BreadcrumbItemInterface, UiBreadcrumbComponent } from '@marketplace/frontend-shared-ui'
import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { filter, map } from 'rxjs'
import { AdminNav } from '../admin-nav/admin-nav'

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, UiBreadcrumbComponent, AdminNav],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLayout {
  private readonly router = inject(Router)
  private readonly activeRoute = inject(ActivatedRoute)

  readonly url: Signal<string> = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => this.router.url)
    ),
    { initialValue: this.router.url }
  )

  readonly breadcrumbItems: Signal<BreadcrumbItemInterface[]> = computed<BreadcrumbItemInterface[]>(
    () => {
      this.url()
      const items: BreadcrumbItemInterface[] = [
        { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
        { label: 'My Account', routerLink: '/account/info' },
        { label: 'Admin panel', routerLink: '/admin/panel' },
      ]

      let current = this.activeRoute.root
      while (current.firstChild) {
        current = current.firstChild
        const label = current.snapshot.data['breadcrumb'] as string | undefined
        if (label) items.push({ label })
      }

      return items
    }
  )
}

