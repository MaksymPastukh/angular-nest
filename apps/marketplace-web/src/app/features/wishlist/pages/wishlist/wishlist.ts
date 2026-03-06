import { BreadcrumbItemInterface, UiBreadcrumbComponent } from '@marketplace/frontend-shared-ui'
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter, map } from 'rxjs'
import { WishlistFacade } from '../../store/wishlist.facade'
import { WishlistItem } from '../../ui/wishlist-item-ui/wishlist-item'

@Component({
  selector: 'app-component',
  imports: [WishlistItem, UiBreadcrumbComponent],
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Wishlist {
  private readonly router = inject(Router)
  private readonly activeRoute = inject(ActivatedRoute)
  readonly facadeWishlist = inject(WishlistFacade)

  constructor() {
    this.facadeWishlist.load({
      reset: true,
    })
  }

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
      { label: 'Wishlist' },
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

