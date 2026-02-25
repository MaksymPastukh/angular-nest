import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute, Params } from '@angular/router'
import { distinctUntilChanged, map } from 'rxjs'
import { AuthState } from '../../../../core/auth/http/auth-state.service'
import { WISHLIST_ITEM_SOURCE } from '../../../wishlist/domain/constants/wishlist-item-sourse.constants'
import { WishListFacade } from '../../../wishlist/store/wishlist.facade'
import { TableBestPriceInterface } from '../../domain/interfaces/table-best-price.interface'
import { CatalogFilterFacade } from '../../store/catalog-filter.facade'
import { ProductsPageFacade } from '../../store/products.facade'
import { CatalogFilterComponent } from '../../ui/catalog-filter/catalog-filter'
import { ProductCardComponent } from '../../ui/product-card/product-card'
import { TableBestPrice } from '../../ui/table-best-price/table-best-price'
import { extractBrand } from '../../utils/extract-brand'

@Component({
  selector: 'app-catalog',
  imports: [ProductCardComponent, TableBestPrice, CatalogFilterComponent],
  templateUrl: './catalog-page.html',
  styleUrls: ['./catalog-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPage {
  private readonly wishListFacade = inject(WishListFacade)
  private readonly authState = inject(AuthState)
  readonly productFacade = inject(ProductsPageFacade)
  private readonly route = inject(ActivatedRoute)
  private readonly catalogFilterFacade = inject(CatalogFilterFacade)
  readonly WishlistItemSource = WISHLIST_ITEM_SOURCE
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
