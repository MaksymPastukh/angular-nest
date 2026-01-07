import { Component, inject, effect } from '@angular/core';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Slider } from 'primeng/slider';
import { TieredMenu } from 'primeng/tieredmenu';
import { FormsModule } from '@angular/forms';
import { ProductFilterStore } from '../../store/product-filter.store';

/**
 * Компонент фильтрации продуктов
 *
 * Работает только с ProductFilterStore (NgRx Signal Store) и НЕ знает о HTTP/API.
 * Любое изменение фильтров → обновляет состояние стора, а дальше ProductsPageFacade
 * мапит SelectedFilters в API фильтры и триггерит загрузку продуктов.
 */
@Component({
  selector: 'products-filter',
  imports: [
    AccordionContent,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    Slider,
    TieredMenu,
    FormsModule,
  ],
  templateUrl: './products-filter.html',
  styleUrl: './products-filter.scss',
})
export class ProductFilterComponent {
  /** Инжектируем стор фильтров */
  readonly filterStore = inject(ProductFilterStore);

  /** Константы диапазона цены */
  readonly MIN_PRICE = 0;
  readonly MAX_PRICE = 400;

  /** Локальное значение для ngModel слайдера (синхронизируется со стором) */
  priceRangeValues: number[] = [70, 270];

  /** Диапазон для слайдера */
  min = this.MIN_PRICE;
  max = this.MAX_PRICE;

  /** Открытые панели аккордеона (0 – панель Filter, всегда открыта) */
  openedPanels: string[] = ['0', '1', '2', '3', '4'];

  constructor() {
    // Синхронизация локального состояния priceRangeValues со стором
    // когда фильтры сбрасываются или восстанавливаются извне
    const store = this.filterStore;



    // Нормальный Angular effect
    effect(() => {
      const storePriceRange = store.selectedFilters().priceRange;
      if (JSON.stringify(this.priceRangeValues) !== JSON.stringify(storePriceRange)) {
        this.priceRangeValues = [...storePriceRange];
      }
    });
  }

  /* ---------- Аккордеон ---------- */

  onAccordionChange(nextValues: string[] | string | number | number[] | null | undefined): void {
    if (!nextValues) return;

    const values = Array.isArray(nextValues)
      ? nextValues.map((v) => String(v))
      : [String(nextValues)];

    if (!values.includes('0')) {
      this.openedPanels = ['0', ...values.filter((v) => v !== '0')];
    } else {
      this.openedPanels = values;
    }
  }

  /* ---------- Цена ---------- */

  onPriceChange(value: number[] | undefined): void {
    if (!value) return;
    this.priceRangeValues = value;
    this.filterStore.setPriceRange(value);
  }

  onMinPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value, 10);

    if (isNaN(value)) {
      value = this.MIN_PRICE;
    } else if (value < this.MIN_PRICE) {
      value = this.MIN_PRICE;
    } else if (value > this.priceRangeValues[1]) {
      value = this.priceRangeValues[1];
    }

    this.priceRangeValues[0] = value;
    this.filterStore.setPriceRange([...this.priceRangeValues]);
  }

  onMaxPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value, 10);

    if (isNaN(value)) {
      value = this.MAX_PRICE;
    } else if (value > this.MAX_PRICE) {
      value = this.MAX_PRICE;
    } else if (value < this.priceRangeValues[0]) {
      value = this.priceRangeValues[0];
    }

    this.priceRangeValues[1] = value;
    this.filterStore.setPriceRange([...this.priceRangeValues]);
  }

  validatePriceRange(): void {
    if (this.priceRangeValues[0] > this.priceRangeValues[1]) {
      const temp = this.priceRangeValues[0];
      this.priceRangeValues[0] = this.priceRangeValues[1];
      this.priceRangeValues[1] = temp;
    }

    this.priceRangeValues[0] = Math.max(this.MIN_PRICE, Math.min(this.priceRangeValues[0], this.MAX_PRICE));
    this.priceRangeValues[1] = Math.max(this.MIN_PRICE, Math.min(this.priceRangeValues[1], this.MAX_PRICE));

    this.filterStore.setPriceRange([...this.priceRangeValues]);
  }

  /* ---------- Размеры ---------- */

  toggleSize(size: string): void {
    this.filterStore.toggleSize(size);
  }

  /* ---------- Цвета ---------- */

  selectColor(color: string): void {
    this.filterStore.toggleColor(color);
  }

  /* ---------- Категории и стили через TieredMenu ---------- */

  onCategoryClick(categoryName: string, event: Event, menu: any): void {
    this.filterStore.setCurrentCategory(categoryName);
    menu.toggle(event);
  }

  onStyleClick(styleName: string, event: Event, menu: any): void {
    this.filterStore.setCurrentStyle(styleName);
    menu.toggle(event);
  }

  /** Выбор пары Category + Brand из TieredMenu */
  onCategoryBrandSelect(category: string, brand: string): void {
    this.filterStore.toggleCategory(category, brand);
  }

  /** Выбор пары Style + Brand из TieredMenu */
  onStyleBrandSelect(style: string, brand: string): void {
    this.filterStore.toggleStyle(style, brand);
  }

  /* ---------- Сброс ---------- */

  resetFilters(): void {
    this.filterStore.resetFilters();
  }

  /** Перезагрузка справочных данных фильтра (категории, бренды и т.д.) */
  reloadFilterData(): void {
    this.filterStore.loadFilterData();
  }
}
