import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion'
import { Slider } from 'primeng/slider'
import { TieredMenu } from 'primeng/tieredmenu'
import { ProductFilterStore } from '../../store/product-filter.store'

/**
 * Компонент фильтрации продуктов
 *
 * Работает только с ProductFilterStore (NgRx Signal Store) и НЕ знает о HTTP/API.
 * Любое изменение фильтров → обновляет состояние стора, а дальше ProductsPageFacade
 * мапит SelectedFilters в API фильтры и триггерит загрузку продуктов.
 */
@Component({
  selector: 'app-catalog-filter',
  imports: [
    AccordionContent,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    Slider,
    TieredMenu,
    FormsModule,
  ],
  templateUrl: './catalog-filter.html',
  styleUrl: './catalog-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogFilterComponent {
  /** Инжектируем стор фильтров */
  readonly filterStore = inject(ProductFilterStore)

  /** Константы диапазона цены */
  readonly MIN_PRICE = 0
  readonly MAX_PRICE = 400

  /** Локальное значение для ngModel слайдера (синхронизируется со стором) */
  priceRangeValues: number[] = [70, 270]

  /** Диапазон для слайдера */
  min = this.MIN_PRICE
  max = this.MAX_PRICE

  /** Открытые панели аккордеона (0 – панель Filter, всегда открыта) */
  openedPanels: string[] = ['0', '1', '2', '3', '4']

  constructor() {
    /**
     * Синхронизация локального состояния priceRangeValues со стором
     * Signals уже защищают от лишних перерисовок
     */
    effect(() => {
      const [min, max] = this.filterStore.selectedFilters().priceRange
      this.priceRangeValues = [min, max]
    })
  }

  /* ---------- Helpers ---------- */

  /**
   * Ограничивает значение в заданных пределах
   */
  private clampPrice(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max))
  }

  /* ---------- Аккордеон ---------- */

  onAccordionChange(nextValues: string[] | string | number | number[] | null | undefined): void {
    if (!nextValues) return

    const values = Array.isArray(nextValues)
      ? nextValues.map((v) => String(v))
      : [String(nextValues)]

    if (!values.includes('0')) {
      this.openedPanels = ['0', ...values.filter((v) => v !== '0')]
    } else {
      this.openedPanels = values
    }
  }

  /* ---------- Цена ---------- */

  onPriceChange(value: number[] | undefined): void {
    if (!value) return
    this.priceRangeValues = value
    this.filterStore.setPriceRange(value)
  }

  onMinPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement
    let value = parseInt(input.value, 10)

    if (isNaN(value)) {
      value = this.MIN_PRICE
    } else if (value < this.MIN_PRICE) {
      value = this.MIN_PRICE
    } else if (value > this.priceRangeValues[1]) {
      value = this.priceRangeValues[1]
    }

    this.priceRangeValues[0] = value
    this.filterStore.setPriceRange([...this.priceRangeValues])
  }

  onMaxPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement
    let value = parseInt(input.value, 10)

    if (isNaN(value)) {
      value = this.MAX_PRICE
    } else if (value > this.MAX_PRICE) {
      value = this.MAX_PRICE
    } else if (value < this.priceRangeValues[0]) {
      value = this.priceRangeValues[0]
    }

    this.priceRangeValues[1] = value
    this.filterStore.setPriceRange([...this.priceRangeValues])
  }

  validatePriceRange(): void {
    if (this.priceRangeValues[0] > this.priceRangeValues[1]) {
      const temp = this.priceRangeValues[0]
      this.priceRangeValues[0] = this.priceRangeValues[1]
      this.priceRangeValues[1] = temp
    }

    this.priceRangeValues[0] = this.clampPrice(
      this.priceRangeValues[0],
      this.MIN_PRICE,
      this.MAX_PRICE
    )
    this.priceRangeValues[1] = this.clampPrice(
      this.priceRangeValues[1],
      this.MIN_PRICE,
      this.MAX_PRICE
    )

    this.filterStore.setPriceRange([...this.priceRangeValues])
  }

  /* ---------- Размеры ---------- */

  toggleSize(size: string): void {
    this.filterStore.toggleSize(size)
  }

  /* ---------- Цвета ---------- */

  selectColor(color: string): void {
    this.filterStore.toggleColor(color)
  }

  /* ---------- Категории и стили через TieredMenu ---------- */

  /**
   * Открывает popup меню брендов для выбранной категории
   * Устанавливает временное UI состояние чтобы Store знал какие бренды показать
   */
  onCategoryClick(categoryName: string, event: Event, menu: any): void {
    this.filterStore.setCurrentCategory(categoryName)
    menu.toggle(event)
  }

  /**
   * Открывает popup меню брендов для выбранного стиля
   * Устанавливает временное UI состояние чтобы Store знал какие бренды показать
   */
  onStyleClick(styleName: string, event: Event, menu: any): void {
    this.filterStore.setCurrentStyle(styleName)
    menu.toggle(event)
  }

  /* ---------- Сброс ---------- */

  resetFilters(): void {
    this.filterStore.resetFilters()
  }

  /** Перезагрузка справочных данных фильтра (категории, бренды и т.д.) */
  reloadFilterData(): void {
    this.filterStore.loadFilterData()
  }
}
