import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute, Params } from '@angular/router'
import { distinctUntilChanged, map } from 'rxjs'
import { AuthState } from '@marketplace/frontend-core-auth'
import { WishlistFacade } from '@marketplace/frontend-wishlist-data-access'
import { ProductsPageFacade } from '@marketplace/frontend-catalog-data-access'
import { ProductCardComponent, TableBestPrice } from '@marketplace/frontend-catalog-ui'
import { extractBrand, TableBestPriceInterface } from '@marketplace/frontend-catalog-util'
import { CatalogFilterComponent } from '../../ui/catalog-filter/catalog-filter'

@Component({
  selector: 'app-catalog',
  imports: [ProductCardComponent, TableBestPrice, CatalogFilterComponent],
  templateUrl: './catalog-page.html',
  styleUrls: ['./catalog-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPage {
  private readonly wishListFacade = inject(WishlistFacade)
  private readonly authState = inject(AuthState)
  readonly productFacade = inject(ProductsPageFacade)
  private readonly route = inject(ActivatedRoute)
  readonly products = this.productFacade.products
  readonly filters = this.productFacade.filters

  readonly title = computed(() => {
    const data = this.filters()

    const brandFromType = extractBrand(data.selectedTypeKey)
    if (brandFromType) return brandFromType

    const brandFromStyle = extractBrand(data.selectedStyleKey)
    if (brandFromStyle) return brandFromStyle

    return data.selectedCategory ?? 'All'
  })

  readonly titleSuffix = computed(() => {
    const data = this.filters()
    if (data.selectedStyleKey) return 'Style'

    return 'Clothing'
  })

  private readonly queryParams = toSignal(
    this.route.queryParams.pipe(
      map((p: Params) => JSON.stringify(p)),
      distinctUntilChanged(),
      map((s) => JSON.parse(s) as Params)
    ),
    { initialValue: {} as Params }
  )

  constructor() {
    effect(() => {
      this.productFacade.restoreFiltersFromUrl(this.queryParams())
    })
    effect(() => {
      if (!this.authState.isAuthenticated()) return
      const ids = this.products().map((p) => p.id)
      if (ids.length) this.wishListFacade.syncContains(ids)
    })
  }

  isInWishlist(productId: string): boolean {
    return this.wishListFacade.isInWishList()(productId)
  }

  toggleWishlist(productId: string): void {
    this.wishListFacade.toggleLikeProduct(productId)
  }

  readonly itemsTableBestPrice: TableBestPriceInterface[] = [
    {
      title: 'Pick Any 4- Womens Plain T-shirt Combo',
      price: 1099,
      link: '/#',
    },
    {
      title: 'Pick Any 4 - Plain Womens Boxer Combo',
      price: 1099,
      link: '/#',
    },
    {
      title: 'Pick Any 4 - Women Plain Full Sleeve T-shirt Combo',
      price: 1399,
      link: '/#',
    },
    {
      title: 'Multicolor Checkered Long Casual Shirts for Women',
      price: 499,
      link: '/#',
    },
    {
      title: 'Pick Any 2: Plain Boxy Casual Shirts for Women Combo',
      price: 799,
      link: '/#',
    },
  ]
}

