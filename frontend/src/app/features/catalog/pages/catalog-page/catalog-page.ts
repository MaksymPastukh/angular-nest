import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { ProductStore } from '../../../products/store/products.store'
import { ProductCardComponent } from '../../../products/ui/product-card/product-card'
import { TableBestPriceInterface } from '../../domain/interfaces/table-best-price.interface'
import { ProductFilterStore } from '../../store/catalog-filter.store'
import { CatalogFilterComponent } from '../../ui/catalog-filter/catalog-filter'
import { TableBestPrice } from '../../ui/table-best-price/table-best-price'
import { mapToApiFilters } from '../../utils/mapToApiFilters.util'

@Component({
  selector: 'app-catalog',
  imports: [ProductCardComponent, TableBestPrice, CatalogFilterComponent],
  templateUrl: './catalog-page.html',
  styleUrls: ['./catalog-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPage implements OnInit, OnDestroy {
  /** Стор UI фільтрів */
  readonly filterStore = inject(ProductFilterStore)

  /** Стор продуктів */
  readonly productStore = inject(ProductStore)

  /** Route для получения query params при инициализации */
  private readonly route = inject(ActivatedRoute)

  /** Subscription на query params для корректной отписки */
  private queryParamsSubscription?: Subscription

  /** Computed: фільтри для відображення */
  readonly filters = computed(() => this.filterStore.selectedFilters())

  /** Computed: продукти для відображення */
  readonly products = computed(() => this.productStore.products())

  /** Computed: пагінація */
  readonly pagination = computed(() => this.productStore.pagination())

  /** Данные для таблицы лучших цен */
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

  /**
   * Инициализация компонента
   * Подписывается на изменения query params для обработки навигации между категориями
   */
  ngOnInit(): void {
    // Подписываемся на изменения query params
    // Это необходимо для обновления продуктов при переходе Men → Women и т.д.
    this.queryParamsSubscription = this.route.queryParams.subscribe((params) => {
      if (Object.keys(params).length > 0) {
        // Есть параметры в URL → восстанавливаем фильтры
        this.filterStore.restoreFromQueryParams(params)
        // Конвертируем UI фильтры в API фильтры и загружаем продукты
        const selectedFilters = this.filterStore.selectedFilters()
        const apiFilters = mapToApiFilters(selectedFilters)
        this.productStore.setFilters(apiFilters)
      } else {
        // Нет параметров → сбрасываем фильтры (показываем все продукты)
        this.filterStore.resetFilters()
      }
    })
  }

  ngOnDestroy(): void {
    // Отписываемся от queryParams
    this.queryParamsSubscription?.unsubscribe()

    // Сбрасываем фильтры при уходе со страницы
    this.filterStore.resetFilters()
  }

  /** Геттер для заголовка категории на основе активных фільтров */
  get titleCategory(): string {
    const selected = this.filterStore.selectedFilters()

    // Приоритет 1: Основная категория (Men, Women, Combos, Joggers)
    if (selected.selectedCategory) {
      return selected.selectedCategory
    }

    // Приоритет 2: Подкатегория (Product Type)
    if (selected.selectedCategories.length > 0) {
      const [raw] = selected.selectedCategories
      const [productType] = raw.split(':')
      return productType ?? 'All'
    }

    // Приоритет 3: Стиль
    if (selected.selectedStyles.length > 0) {
      const [raw] = selected.selectedStyles
      const [style] = raw.split(':')
      return style ?? 'All'
    }

    return 'All'
  }
}
