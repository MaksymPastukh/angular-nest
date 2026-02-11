import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { Accordion, AccordionContent, AccordionHeader, AccordionPanel, Slider } from '@/shared/ui'
import { CatalogFilterFacade } from '../../store/catalog-filter.facade'
import { BrandsDropdownComponent } from '../brands-dropdown/brands-dropdown'

type DropdownType = 'category' | 'style'

@Component({
  selector: 'app-catalog-filter',
  imports: [
    FormsModule,
    BrandsDropdownComponent,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    Slider,
  ],
  templateUrl: './catalog-filter.html',
  styleUrl: './catalog-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogFilterComponent {
  readonly filterFacade = inject(CatalogFilterFacade)

  readonly MIN_PRICE = 0
  readonly MAX_PRICE = 400

  min = this.MIN_PRICE
  max = this.MAX_PRICE

  priceRangeValues: [number, number] = [70, 270]
  openedPanels: string[] = ['0']

  readonly openCategoryDropdown = signal<string | null>(null)
  readonly openStyleDropdown = signal<string | null>(null)

  readonly categoryAnchor = signal<HTMLElement | null>(null)
  readonly styleAnchor = signal<HTMLElement | null>(null)

  private closeTimer: Record<DropdownType, ReturnType<typeof setTimeout> | null> = {
    category: null,
    style: null,
  }

  constructor() {
    this.filterFacade.ensureLoaded()
    const [min, max] = this.filterFacade.selected().priceRange
    this.priceRangeValues = [min, max]
  }

  private clampPrice(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max))
  }

  onAccordionValueChange(next: string | string[] | number | number[] | null | undefined): void {
    if (!next) return

    const values = Array.isArray(next) ? next.map(String) : [String(next)]

    // гарантируем, что панель "0" всегда открыта
    const normalized = values.includes('0') ? values : ['0', ...values.filter((v) => v !== '0')]

    this.openedPanels = normalized

    // если вдруг "0" закрылась — закрываем dropdown'ы
    if (!normalized.includes('0')) {
      this.forceClose('category')
      this.forceClose('style')
    }
  }

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

  // --- Dropdown helpers ---
  private clearCloseTimer(type: DropdownType): void {
    const t = this.closeTimer[type]
    if (t) clearTimeout(t)
    this.closeTimer[type] = null
  }

  private scheduleClose(type: DropdownType, delayMs: number): void {
    this.clearCloseTimer(type)
    this.closeTimer[type] = setTimeout(() => {
      this.forceClose(type)
      this.closeTimer[type] = null
    }, delayMs)
  }

  private forceClose(type: DropdownType): void {
    this.clearCloseTimer(type)
    if (type === 'category') this.openCategoryDropdown.set(null)
    else this.openStyleDropdown.set(null)
  }

  onCategoryHover(categoryName: string, buttonElement: HTMLElement): void {
    this.clearCloseTimer('category')

    if (this.filterFacade.activeCategory() !== categoryName) {
      this.filterFacade.setActiveCategory(categoryName)
    }

    this.categoryAnchor.set(buttonElement)
    this.openCategoryDropdown.set(categoryName)

    this.openStyleDropdown.set(null)
    this.clearCloseTimer('style')
  }

  onCategoryLeave(): void {
    this.scheduleClose('category', 250)
  }

  onStyleHover(styleName: string, buttonElement: HTMLElement): void {
    this.clearCloseTimer('style')

    if (this.filterFacade.activeStyle() !== styleName) {
      this.filterFacade.setActiveStyle(styleName)
    }

    this.styleAnchor.set(buttonElement)
    this.openStyleDropdown.set(styleName)

    this.openCategoryDropdown.set(null)
    this.clearCloseTimer('category')
  }

  onStyleLeave(): void {
    this.scheduleClose('style', 250)
  }

  onDropdownEnter(type: DropdownType): void {
    this.clearCloseTimer(type)
  }

  onDropdownLeave(type: DropdownType): void {
    this.scheduleClose(type, 100)
  }

  onBrandSelect(category: string | null, brand: string): void {
    this.forceClose('category')
    if (brand && category) {
      this.filterFacade.toggleType(category, brand)
    }
  }

  onStyleBrandSelect(style: string | null, brand: string): void {
    this.forceClose('style')
    if (brand && style) {
      this.filterFacade.toggleStyle(style, brand)
    }
  }

  reloadFilterData(): void {
    this.filterFacade.reloadFilterData()
  }
}
