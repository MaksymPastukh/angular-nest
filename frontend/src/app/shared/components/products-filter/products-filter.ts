import { Component, output, inject, OnInit, effect } from '@angular/core';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Slider } from 'primeng/slider';
import { TieredMenu } from 'primeng/tieredmenu';
import { FormsModule } from '@angular/forms';
import { ProductFilterStore } from '../../store/product-filter.store';
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

  /** Предыдущее количество выбранных категорий (для отслеживания изменений) */
  private prevCategoriesLength = 0;
  /** Предыдущее количество выбранных стилей (для отслеживания изменений) */
  private prevStylesLength = 0;

  /** Таймер для debounce эмиссии изменений */
  private emitDebounceTimer: any = null;
  /** Время задержки debounce в миллисекундах */
  private readonly DEBOUNCE_TIME = 500;

  /** Флаг первого запуска effect (чтобы не эмитировать при инициализации) */
  private isFirstRun = true;

  constructor() {
    /**
     * Effect для отслеживания изменений selectedCategories и selectedStyles
     * Эмитирует изменения когда выбран бренд через TieredMenu
     * НЕ эмитирует при начальной загрузке
     */
    effect(() => {
      if (!this.filterStore.isInitialized()) return;

      const filters = this.filterStore.selectedFilters();
      const categoriesLength = filters.selectedCategories.length;
      const stylesLength = filters.selectedStyles.length;

      // Пропускаем первый запуск (начальная инициализация)
      if (this.isFirstRun) {
        this.isFirstRun = false;
        this.prevCategoriesLength = categoriesLength;
        this.prevStylesLength = stylesLength;
        return;
      }

      // Эмитируем только если количество изменилось (добавлен/удален элемент)
      if (categoriesLength !== this.prevCategoriesLength || stylesLength !== this.prevStylesLength) {
        this.prevCategoriesLength = categoriesLength;
        this.prevStylesLength = stylesLength;

        // Эмитируем изменения с debounce
        this.emitFilterChangeDebounced();
      }
    });

    /**
     * Effect для синхронизации priceRangeValues с priceRange из стора
     * Обновляет локальную переменную slider когда фильтры сбрасываются извне
     */
    effect(() => {
      if (!this.filterStore.isInitialized()) return;

      const storePriceRange = this.filterStore.selectedFilters().priceRange;

      // Сравниваем массивы через JSON (избегаем бесконечного цикла)
      if (JSON.stringify(this.priceRangeValues) !== JSON.stringify(storePriceRange)) {
        console.log('🔄 Effect: Syncing priceRangeValues:', this.priceRangeValues, '→', storePriceRange);
        this.priceRangeValues = [...storePriceRange];
      }
    });
  }

  /**
   * Инициализация компонента
   * Синхронизирует начальные значения с стором
   * Всегда устанавливает priceRangeValues из стора при создании компонента
   */
  ngOnInit(): void {
    // Принудительно синхронизируем диапазон цен из стора
    const currentFilters = this.filterStore.selectedFilters();
    const storePriceRange = [...currentFilters.priceRange];

    console.log('📦 ProductFilterComponent: ngOnInit');
    console.log('   Store priceRange:', storePriceRange);
    console.log('   Setting priceRangeValues to:', storePriceRange);

    // Устанавливаем значения из стора (после resetFilters они будут [70, 270])
    this.priceRangeValues = storePriceRange;
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
    this.emitFilterChangeDebounced();
  }

  /**
   * Обработчик выбора/отмены выбора размера
   * @param size - размер одежды
   */
  toggleSize(size: string): void {
    this.filterStore.toggleSize(size);
    this.emitFilterChangeDebounced();
  }

  /**
   * Обработчик изменения диапазона цен через slider
   * @param value - новый диапазон цен [min, max]
   */
  onPriceChange(value: number[] | undefined): void {
    if (!value) return;
    this.priceRangeValues = value;
    this.filterStore.setPriceRange(value);
    this.emitFilterChangeDebounced();
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
    this.emitFilterChangeDebounced();
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
    this.emitFilterChangeDebounced();
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
    this.emitFilterChangeDebounced();
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
   * Эмитирует изменения фильтров с debounce
   * Откладывает вызов на DEBOUNCE_TIME миллисекунд чтобы избежать частых запросов
   */
  private emitFilterChangeDebounced(): void {
    // Очищаем предыдущий таймер если он есть
    if (this.emitDebounceTimer) {
      clearTimeout(this.emitDebounceTimer);
    }

    // Устанавливаем новый таймер
    this.emitDebounceTimer = setTimeout(() => {
      this.emitFilterChange();
      this.emitDebounceTimer = null;
    }, this.DEBOUNCE_TIME);
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
   * Обработчик клика на категорию
   * Устанавливает текущую категорию и открывает меню брендов
   */
  onCategoryClick(categoryName: string, event: Event, menu: any): void {
    // Устанавливаем текущую категорию
    this.filterStore.setCurrentCategory(categoryName);
    // Открываем TieredMenu с брендами
    menu.toggle(event);
  }

  /**
   * Обработчик клика на стиль
   * Устанавливает текущий стиль и открывает меню брендов
   */
  onStyleClick(styleName: string, event: Event, menu: any): void {
    // Устанавливаем текущий стиль
    this.filterStore.setCurrentStyle(styleName);
    // Открываем TieredMenu с брендами
    menu.toggle(event);
  }
}

