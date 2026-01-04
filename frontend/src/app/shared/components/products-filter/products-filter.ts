import { Component, Output, EventEmitter, signal, effect } from '@angular/core';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';
import {Slider} from 'primeng/slider';
import {TieredMenu} from 'primeng/tieredmenu';
import {FormsModule} from '@angular/forms';
import type { MenuItem } from 'primeng/api';
import type { ColorOption, FilterState } from '../../types/products-filter.types';

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
export class ProductFilterComponent {
  // Outputs для передачи данных фильтрации
  @Output() filterChange = new EventEmitter<FilterState>();

  // Константы
  readonly MIN_PRICE = 0;
  readonly MAX_PRICE = 400;
  readonly SIZES: readonly string[] = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'] as const;

  // Signals для реактивности (PrimeNG 21 хорошо работает с signals)
  priceRange = signal<number[]>([70, 270]);
  selectedSizes = signal<string[]>([]);
  selectedColors = signal<string[]>([]); // Изменено на массив для множественного выбора

  // Обычные свойства (для compatibility с ngModel)
  priceRangeValues: number[] = [70, 270];
  min = this.MIN_PRICE;
  max = this.MAX_PRICE;
  sizes = this.SIZES;
  selectorColor: string | null = null; // Удалим позже, используем selectedColors

  readonly colors: readonly ColorOption[] = [
    {name: 'Purple', value: '#8e44ad'},
    {name: 'Black', value: '#000000'},
    {name: 'Red', value: '#e74c3c'},
    {name: 'Orange', value: '#e67e22'},
    {name: 'Navy', value: '#2980b9'},
    {name: 'White', value: '#ffffff'},
    {name: 'Broom', value: '#d35400'},
    {name: 'Green', value: '#2ecc71'},
    {name: 'Yellow', value: '#f1c40f'},
    {name: 'Grey', value: '#bdc3c7'},
    {name: 'Pink', value: '#e91e63'},
    {name: 'Blue', value: '#00bcd4'},
  ] as const;


  readonly items: MenuItem[] = [
    {
      label: 'Tops',
      items: [
        {label: 'Brand A', command: () => this.onCategorySelect('Tops', 'Brand A')},
        {label: 'Brand B', command: () => this.onCategorySelect('Tops', 'Brand B')},
        {label: 'Brand C', command: () => this.onCategorySelect('Tops', 'Brand C')}
      ],
    },
    {
      label: 'Printed T-shirts',
      items: [
        {label: 'Brand A', command: () => this.onCategorySelect('Printed T-shirts', 'Brand A')},
        {label: 'Brand B', command: () => this.onCategorySelect('Printed T-shirts', 'Brand B')},
        {label: 'Brand C', command: () => this.onCategorySelect('Printed T-shirts', 'Brand C')}
      ],
    },
    {
      label: 'Plain T-shirts',
      items: [
        {label: 'Brand A', command: () => this.onCategorySelect('Plain T-shirts', 'Brand A')},
        {label: 'Brand B', command: () => this.onCategorySelect('Plain T-shirts', 'Brand B')},
        {label: 'Brand C', command: () => this.onCategorySelect('Plain T-shirts', 'Brand C')}
      ],
    },
    {
      label: 'Kurti',
      items: [
        {label: 'Brand A', command: () => this.onCategorySelect('Kurti', 'Brand A')},
        {label: 'Brand B', command: () => this.onCategorySelect('Kurti', 'Brand B')},
        {label: 'Brand C', command: () => this.onCategorySelect('Kurti', 'Brand C')}
      ],
    },
    {
      label: 'Boxers',
      items: [
        {label: 'Brand A', command: () => this.onCategorySelect('Boxers', 'Brand A')},
        {label: 'Brand B', command: () => this.onCategorySelect('Boxers', 'Brand B')},
        {label: 'Brand C', command: () => this.onCategorySelect('Boxers', 'Brand C')}
      ],
    },
    {
      label: 'Full sleeve T-shirts',
      items: [
        {label: 'Brand A', command: () => this.onCategorySelect('Full sleeve T-shirts', 'Brand A')},
        {label: 'Brand B', command: () => this.onCategorySelect('Full sleeve T-shirts', 'Brand B')},
        {label: 'Brand C', command: () => this.onCategorySelect('Full sleeve T-shirts', 'Brand C')}
      ],
    },
    {
      label: 'Joggers',
      items: [
        {label: 'Brand A', command: () => this.onCategorySelect('Joggers', 'Brand A')},
        {label: 'Brand B', command: () => this.onCategorySelect('Joggers', 'Brand B')},
        {label: 'Brand C', command: () => this.onCategorySelect('Joggers', 'Brand C')}
      ],
    },
    {
      label: 'Payjamas',
      items: [
        {label: 'Brand A', command: () => this.onCategorySelect('Payjamas', 'Brand A')},
        {label: 'Brand B', command: () => this.onCategorySelect('Payjamas', 'Brand B')},
        {label: 'Brand C', command: () => this.onCategorySelect('Payjamas', 'Brand C')}
      ],
    },
    {
      label: 'Jeans',
      items: [
        {label: 'Brand A', command: () => this.onCategorySelect('Jeans', 'Brand A')},
        {label: 'Brand B', command: () => this.onCategorySelect('Jeans', 'Brand B')},
        {label: 'Brand C', command: () => this.onCategorySelect('Jeans', 'Brand C')}
      ],
    },
  ];

  readonly itemsStyle: MenuItem[] = [
    {
      label: 'Classic',
      items: [
        {label: 'Brand A', command: () => this.onStyleSelect('Classic', 'Brand A')},
        {label: 'Brand B', command: () => this.onStyleSelect('Classic', 'Brand B')},
        {label: 'Brand C', command: () => this.onStyleSelect('Classic', 'Brand C')}
      ],
    },
    {
      label: 'Casual',
      items: [
        {label: 'Brand A', command: () => this.onStyleSelect('Casual', 'Brand A')},
        {label: 'Brand B', command: () => this.onStyleSelect('Casual', 'Brand B')},
        {label: 'Brand C', command: () => this.onStyleSelect('Casual', 'Brand C')}
      ],
    },
    {
      label: 'Business',
      items: [
        {label: 'Brand A', command: () => this.onStyleSelect('Business', 'Brand A')},
        {label: 'Brand B', command: () => this.onStyleSelect('Business', 'Brand B')},
        {label: 'Brand C', command: () => this.onStyleSelect('Business', 'Brand C')}
      ],
    },
    {
      label: 'Sport',
      items: [
        {label: 'Brand A', command: () => this.onStyleSelect('Sport', 'Brand A')},
        {label: 'Brand B', command: () => this.onStyleSelect('Sport', 'Brand B')},
        {label: 'Brand C', command: () => this.onStyleSelect('Sport', 'Brand C')}
      ],
    },
    {
      label: 'Elegant',
      items: [
        {label: 'Brand A', command: () => this.onStyleSelect('Elegant', 'Brand A')},
        {label: 'Brand B', command: () => this.onStyleSelect('Elegant', 'Brand B')},
        {label: 'Brand C', command: () => this.onStyleSelect('Elegant', 'Brand C')}
      ],
    },
    {
      label: 'Formal (evening)',
      items: [
        {label: 'Brand A', command: () => this.onStyleSelect('Formal (evening)', 'Brand A')},
        {label: 'Brand B', command: () => this.onStyleSelect('Formal (evening)', 'Brand B')},
        {label: 'Brand C', command: () => this.onStyleSelect('Formal (evening)', 'Brand C')}
      ],
    },
  ];


  openedPanels: string[] = ['0', '1', '2', '3', '4'];

  // Приватные поля для хранения выбранных значений
  private selectedCategories = new Set<string>();
  private selectedStyles = new Set<string>();

  constructor() {
    // Эффект для автоматической эмиссии изменений фильтра
    effect(() => {
      this.emitFilterChange();
    });
  }

  onAccordionChange(nextValues: string[] | string | number | number[] | null | undefined): void {
    if (!nextValues) return;

    // Преобразуем все значения в строки
    const values = Array.isArray(nextValues)
      ? nextValues.map(v => String(v))
      : [String(nextValues)];

    // Панель 0 (Filter) всегда должна быть открыта - нельзя закрыть
    // Панель 4 (Dress Style) открыта по умолчанию, но можно закрыть
    if (!values.includes('0')) {
      this.openedPanels = ['0', ...values.filter(v => v !== '0')];
    } else {
      this.openedPanels = values;
    }
  }

  selectColor(color: string): void {
    const colors = this.selectedColors();
    const index = colors.indexOf(color);

    if (index > -1) {
      // Убираем цвет из выбранных
      this.selectedColors.set([...colors.slice(0, index), ...colors.slice(index + 1)]);
    } else {
      // Добавляем цвет к выбранным
      this.selectedColors.set([...colors, color]);
    }
    this.emitFilterChange();
  }

  toggleSize(size: string): void {
    const sizes = this.selectedSizes();
    const index = sizes.indexOf(size);

    if (index > -1) {
      this.selectedSizes.set([...sizes.slice(0, index), ...sizes.slice(index + 1)]);
    } else {
      this.selectedSizes.set([...sizes, size]);
    }
    this.emitFilterChange();
  }

  onPriceChange(value: number[] | undefined): void {
    if (!value) return;
    this.priceRangeValues = value;
    this.priceRange.set(value);
    this.emitFilterChange();
  }

  // Обработка ввода минимальной цены
  onMinPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value, 10);

    // Валидация: не меньше MIN_PRICE и не больше максимальной цены
    if (isNaN(value)) {
      value = this.MIN_PRICE;
    } else if (value < this.MIN_PRICE) {
      value = this.MIN_PRICE;
    } else if (value > this.priceRangeValues[1]) {
      value = this.priceRangeValues[1];
    }

    this.priceRangeValues[0] = value;
    this.priceRange.set([...this.priceRangeValues]);
    this.emitFilterChange();
  }

  // Обработка ввода максимальной цены
  onMaxPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value, 10);

    // Валидация: не больше MAX_PRICE и не меньше минимальной цены
    if (isNaN(value)) {
      value = this.MAX_PRICE;
    } else if (value > this.MAX_PRICE) {
      value = this.MAX_PRICE;
    } else if (value < this.priceRangeValues[0]) {
      value = this.priceRangeValues[0];
    }

    this.priceRangeValues[1] = value;
    this.priceRange.set([...this.priceRangeValues]);
    this.emitFilterChange();
  }

  // Валидация диапазона цен при потере фокуса
  validatePriceRange(): void {
    // Убедимся, что минимальная цена не больше максимальной
    if (this.priceRangeValues[0] > this.priceRangeValues[1]) {
      const temp = this.priceRangeValues[0];
      this.priceRangeValues[0] = this.priceRangeValues[1];
      this.priceRangeValues[1] = temp;
    }

    // Убедимся, что значения в допустимых пределах
    this.priceRangeValues[0] = Math.max(this.MIN_PRICE, Math.min(this.priceRangeValues[0], this.MAX_PRICE));
    this.priceRangeValues[1] = Math.max(this.MIN_PRICE, Math.min(this.priceRangeValues[1], this.MAX_PRICE));

    this.priceRange.set([...this.priceRangeValues]);
    this.emitFilterChange();
  }

  onCategorySelect(category: string, brand: string): void {
    const key = `${category}:${brand}`;
    if (this.selectedCategories.has(key)) {
      this.selectedCategories.delete(key);
    } else {
      this.selectedCategories.add(key);
    }
    this.emitFilterChange();
  }

  onStyleSelect(style: string, brand: string): void {
    const key = `${style}:${brand}`;
    if (this.selectedStyles.has(key)) {
      this.selectedStyles.delete(key);
    } else {
      this.selectedStyles.add(key);
    }
    this.emitFilterChange();
  }

  private emitFilterChange(): void {
    const filterState: FilterState = {
      priceRange: this.priceRange(),
      selectedSizes: this.selectedSizes(),
      selectedColors: this.selectedColors(), // Изменено
      selectedCategories: Array.from(this.selectedCategories),
      selectedStyles: Array.from(this.selectedStyles),
    };
    this.filterChange.emit(filterState);
  }

  // Метод для сброса всех фильтров (можно вызвать из родительского компонента)
  resetFilters(): void {
    this.priceRangeValues = [70, 270];
    this.priceRange.set([70, 270]);
    this.selectedSizes.set([]);
    this.selectedColors.set([]); // Изменено
    this.selectorColor = null;
    this.selectedCategories.clear();
    this.selectedStyles.clear();
    this.emitFilterChange();
  }
}
