import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion'
import { Slider } from 'primeng/slider'
import { TieredMenu } from 'primeng/tieredmenu'
import { CatalogFilterFacade } from '../../store/catalog-filter.facade'
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
export class CatalogFilterComponent implements OnInit {
  readonly filterFacade = inject(CatalogFilterFacade)

  readonly MIN_PRICE = 0
  readonly MAX_PRICE = 400
  min = this.MIN_PRICE
  max = this.MAX_PRICE
  priceRangeValues: [number, number] = [70, 270]
  openedPanels: string[] = ['0', '1', '2', '3', '4']

  ngOnInit(): void {
    this.filterFacade.ensureLoaded()

    const [min, max] = this.filterFacade.selected().priceRange
    this.priceRangeValues = [min, max]
  }

  private clampPrice(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max))
  }

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
    const next: [number, number] = [value[0], value[1]]
    this.priceRangeValues = next
    this.filterFacade.setPriceRange(next)
  }

  onMinPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement
    let value = parseInt(input.value, 10)

    if (Number.isNaN(value)) value = this.MIN_PRICE
    value = this.clampPrice(value, this.MIN_PRICE, this.priceRangeValues[1])

    this.priceRangeValues = [value, this.priceRangeValues[1]]
    this.filterFacade.setPriceRange(this.priceRangeValues)
  }

  onMaxPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement
    let value = parseInt(input.value, 10)

    if (Number.isNaN(value)) value = this.MAX_PRICE
    value = this.clampPrice(value, this.priceRangeValues[0], this.MAX_PRICE)

    this.priceRangeValues = [this.priceRangeValues[0], value]
    this.filterFacade.setPriceRange(this.priceRangeValues)
  }

  validatePriceRange(): void {
    let [min, max] = this.priceRangeValues
    if (min > max) [min, max] = [max, min]

    min = this.clampPrice(min, this.MIN_PRICE, this.MAX_PRICE)
    max = this.clampPrice(max, this.MIN_PRICE, this.MAX_PRICE)

    this.priceRangeValues = [min, max]
    this.filterFacade.setPriceRange(this.priceRangeValues)
  }

  toggleSize(size: string): void {
    this.filterFacade.toggleSize(size)
  }

  selectColor(color: string): void {
    this.filterFacade.toggleColor(color)
  }

  onCategoryClick(categoryName: string, event: Event, menu: any): void {
    this.filterFacade.setActiveCategory(categoryName)
    menu.toggle(event)
  }

  onStyleClick(styleName: string, event: Event, menu: any): void {
    this.filterFacade.setActiveStyle(styleName)
    menu.toggle(event)
  }

  resetFilters(): void {
    this.filterFacade.resetFilters()
    // синхронизируем локальный ngModel после сброса
    const [min, max] = this.filterFacade.selected().priceRange
    this.priceRangeValues = [min, max]
  }

  reloadFilterData(): void {
    this.filterFacade.reloadFilterData()
  }
}
