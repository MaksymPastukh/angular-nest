import { Component, output, inject, OnInit } from '@angular/core';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Slider } from 'primeng/slider';
import { TieredMenu } from 'primeng/tieredmenu';
import { FormsModule } from '@angular/forms';
import { ProductFilterStore } from '../../services/product-filter.store';
import type { SelectedFilters } from '../../types/filter.types';

/**
 * Компонент фильтрации продуктов
 *
 * Использует NgRx Signal Store для управления состоянием фильтров
 * Загружает данные с Backend и предоставляет UI для фильтрации
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
    FormsModule
  ],
  templateUrl: './products-filter.html',
  styleUrl: './products-filter.scss',
})
export class ProductFilterComponent implements OnInit {
  /** Инжектируем стор фильтров */
  readonly filterStore = inject(ProductFilterStore);

  /** Output событие для эмиссии изменений фильтров */
  readonly filterChange = output<SelectedFilters>();

  // ========== Константы ==========
  /** Минимальная цена в фильтре */
  readonly MIN_PRICE = 0;
  /** Максимальная цена в фильтре */
  readonly MAX_PRICE = 400;

  // ========== Свойства для ngModel ==========
  /** Значения диапазона цен для slider */
  priceRangeValues: number[] = [70, 270];
  /** Минимальная цена для slider */
  min = this.MIN_PRICE;
  /** Максимальная цена для slider */
  max = this.MAX_PRICE;

  /** Открытые панели аккордеона */
  openedPanels: string[] = ['0', '1', '2', '3', '4'];

  /**
   * Инициализация компонента
   * Синхронизирует начальные значения с стором
   */
  ngOnInit(): void {
    // Синхронизируем начальный диапазон цен
    const currentFilters = this.filterStore.selectedFilters();
    this.priceRangeValues = currentFilters.priceRange;
  }

  /**
   * Обработчик изменения состояния аккордеона
   * Гарантирует что панель "Filter" (0) всегда открыта
   */
  onAccordionChange(nextValues: string[] | string | number | number[] | null | undefined): void {
    if (!nextValues) return;

    const values = Array.isArray(nextValues)
      ? nextValues.map(v => String(v))
      : [String(nextValues)];

    if (!values.includes('0')) {
      this.openedPanels = ['0', ...values.filter(v => v !== '0')];
    } else {
      this.openedPanels = values;
    }
  }

  /**
   * Обработчик выбора/отмены выбора цвета
   * @param color - название цвета
   */
  selectColor(color: string): void {
    this.filterStore.toggleColor(color);
    this.emitFilterChange();
  }

  /**
   * Обработчик выбора/отмены выбора размера
   * @param size - размер одежды
   */
  toggleSize(size: string): void {
    this.filterStore.toggleSize(size);
    this.emitFilterChange();
  }

  /**
   * Обработчик изменения диапазона цен через slider
   * @param value - новый диапазон цен [min, max]
   */
  onPriceChange(value: number[] | undefined): void {
    if (!value) return;
    this.priceRangeValues = value;
    this.filterStore.setPriceRange(value);
    this.emitFilterChange();
  }

  /**
   * Обработчик ввода минимальной цены в input
   */
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
    this.emitFilterChange();
  }

  /**
   * Обработчик ввода максимальной цены в input
   */
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
    this.emitFilterChange();
  }

  /**
   * Валидирует диапазон цен при потере фокуса input
   */
  validatePriceRange(): void {
    if (this.priceRangeValues[0] > this.priceRangeValues[1]) {
      const temp = this.priceRangeValues[0];
      this.priceRangeValues[0] = this.priceRangeValues[1];
      this.priceRangeValues[1] = temp;
    }

    this.priceRangeValues[0] = Math.max(this.MIN_PRICE, Math.min(this.priceRangeValues[0], this.MAX_PRICE));
    this.priceRangeValues[1] = Math.max(this.MIN_PRICE, Math.min(this.priceRangeValues[1], this.MAX_PRICE));

    this.filterStore.setPriceRange([...this.priceRangeValues]);
    this.emitFilterChange();
  }

  /**
   * Эмитирует изменения фильтров родительскому компоненту
   * Вызывается только если стор инициализирован (данные загружены)
   */
  private emitFilterChange(): void {
    if (!this.filterStore.isInitialized()) {
      return; // Не эмитируем до загрузки данных
    }

    this.filterChange.emit(this.filterStore.selectedFilters());
  }

  /**
   * Сбрасывает все фильтры к начальным значениям
   */
  resetFilters(): void {
    this.filterStore.resetFilters();
    this.priceRangeValues = [70, 270];
    this.emitFilterChange();
  }

  /**
   * Перезагружает данные фильтров с сервера
   */
  reloadFilterData(): void {
    this.filterStore.loadFilterData();
  }

  /**
   * Показывает меню с брендами для выбранной категории
   * @param event - событие клика/наведения
   * @param categoryItem - объект категории с брендами
   */
  showCategoryBrands(event: Event, categoryItem: any): void {
    // Метод будет вызываться при клике на категорию
    // TieredMenu автоматически покажет подменю с брендами
    console.log('Category selected:', categoryItem.label);
  }
}

