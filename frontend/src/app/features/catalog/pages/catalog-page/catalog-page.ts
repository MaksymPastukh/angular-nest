import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute, Params } from '@angular/router'
import { distinctUntilChanged, map } from 'rxjs'
import { ProductsPageFacade } from '../../../products/store/products.facade'
import { ProductCardComponent } from '../../../products/ui/product-card/product-card'
import { TableBestPriceInterface } from '../../domain/interfaces/table-best-price.interface'
import { CatalogFilterComponent } from '../../ui/catalog-filter/catalog-filter'
import { TableBestPrice } from '../../ui/table-best-price/table-best-price'

@Component({
  selector: 'app-catalog',
  imports: [ProductCardComponent, TableBestPrice, CatalogFilterComponent],
  templateUrl: './catalog-page.html',
  styleUrls: ['./catalog-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPage {
  readonly productFacade = inject(ProductsPageFacade)
  private readonly route = inject(ActivatedRoute)

  readonly products = this.productFacade.products
  readonly filters = this.productFacade.filters

  readonly titleCategory = computed(() => this.filters().selectedCategory ?? 'All')

  private readonly queryParams = toSignal(
    this.route.queryParams.pipe(
      // простая защита от дублей
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
