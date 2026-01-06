import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError, of } from 'rxjs';
import { forkJoin } from 'rxjs';
import { ProductService } from '../services/product.service';
import type { ColorOption, FilterData, SelectedFilters } from '../types/filter.types';
import type { MenuItem } from 'primeng/api';

/**
 * Интерфейс состояния фильтров
 */
interface FilterState {
  /** Данные фильтров с Backend */
  filterData: FilterData | null;

  /** Обработанные цвета с hex значениями */
  colors: ColorOption[];

  /** Меню для категорий (для PrimeNG TieredMenu) */
  categoryMenu: MenuItem[];
  subCategoryMenu: MenuItem[];

  /** Меню для стилей (для PrimeNG TieredMenu) */
  styleMenu: MenuItem[];
  subStyleMenu: MenuItem[];

  /** Выбранные фильтры */
  selectedFilters: SelectedFilters;

  /** Текущая выбранная категория (для связи с брендом) */
  currentCategory: string | null;

  /** Текущий выбранный стиль (для связи с брендом) */
  currentStyle: string | null;

  /** Флаг загрузки данных */
  isLoading: boolean;

  /** Текст ошибки */
  error: string | null;

  /** Флаг инициализации */
  isInitialized: boolean;
}

/**
 * Начальное состояние фильтров
 */
const initialState: FilterState = {
  filterData: null,
  colors: [],
  categoryMenu: [],
  subCategoryMenu: [],
  styleMenu: [],
  subStyleMenu: [],
  selectedFilters: {
    priceRange: [70, 270],
    selectedSizes: [],
    selectedColors: [],
    selectedCategories: [],
    selectedStyles: [],
  },
  currentCategory: null,
  currentStyle: null,
  isLoading: false,
  error: null,
  isInitialized: false,
};

/**
 * Словарь соответствия названий цветов и их hex значений
 */
const COLOR_MAP: Record<string, string> = {
  'Purple': '#8e44ad',
  'Black': '#000000',
  'Red': '#e74c3c',
  'Orange': '#e67e22',
  'Navy': '#2980b9',
  'Blue': '#00bcd4',
  'White': '#ffffff',
  'Brown': '#d35400',
  'Broom': '#d35400',
  'Green': '#2ecc71',
  'Yellow': '#f1c40f',
  'Grey': '#bdc3c7',
  'Gray': '#bdc3c7',
  'Pink': '#e91e63',
  'Beige': '#f5f5dc',
  'Indigo': '#4b0082',
  'Violet': '#8b00ff',
  'Cyan': '#00ffff',
  'Magenta': '#ff00ff',
  'Lime': '#00ff00',
  'Maroon': '#800000',
  'Olive': '#808000',
  'Teal': '#008080',
};

/**
 * Signal Store для управления фильтрами продуктов
 *
 * Загружает данные фильтров с Backend API и управляет состоянием выбранных фильтров
 */
export const ProductFilterStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => ({
    /**
     * Проверяет, загружены ли данные фильтров
     */
    hasFilterData: computed(() => store.filterData() !== null),

    /**
     * Возвращает список размеров
     */
    sizes: computed(() => store.filterData()?.sizes ?? []),

    /**
     * Возвращает список категорий (только названия, без брендов)
     */
    categoryNames: computed(() => {
      const menu = store.categoryMenu();
      return menu.map(item => item.label || '');
    }),

    /**
     * Возвращает список стилей (только названия, без брендов)
     */
    styleNames: computed(() => {
      const menu = store.styleMenu();
      return menu.map(item => item.label || '');
    }),

    /**
     * Проверяет, есть ли выбранные фильтры
     */
    hasSelectedFilters: computed(() => {
      const filters = store.selectedFilters();
      return (
        filters.selectedSizes.length > 0 ||
        filters.selectedColors.length > 0 ||
        filters.selectedCategories.length > 0 ||
        filters.selectedStyles.length > 0 ||
        filters.priceRange[0] !== 70 ||
        filters.priceRange[1] !== 270
      );
    }),
  })),

  withMethods((store, productService = inject(ProductService)) => ({
    /**
     * Загружает данные фильтров с Backend API
     * Использует forkJoin для параллельной загрузки всех данных
     */
    loadFilterData: rxMethod<void>(
      pipe(
        tap(() => {
          patchState(store, { isLoading: true, error: null });
        }),
        switchMap(() =>
          forkJoin({
            categories: productService.getCategories(),
            productTypes: productService.getProductTypes(),
            dressStyles: productService.getDressStyles(),
            brands: productService.getBrands(),
            colors: productService.getColors(),
            sizes: productService.getSizes(),
          }).pipe(
            tap((data) => {
              console.log('Loaded filter data from Backend:', data);

              // Преобразуем цвета в ColorOption
              const colors = mapColorsToOptions(data.colors);

              // Строим меню для категорий (productTypes)
              const categoryMenu = buildMenuItems(
                data.productTypes,
                data.brands,
                'category',
                (productType: string, brand: string) => {
                  const key = `${productType}:${brand}`;
                  const current = store.selectedFilters();
                  const categories = new Set(current.selectedCategories);

                  if (categories.has(key)) {
                    categories.delete(key);
                  } else {
                    categories.add(key);
                  }

                  patchState(store, {
                    selectedFilters: {
                      ...current,
                      selectedCategories: Array.from(categories),
                    },
                  });
                }
              );

              // Строим меню брендов (для TieredMenu)
              const subCategoryMenu = data.brands.map(brand => ({
                label: brand,
                command: () => {
                  console.log('Brand selected:', brand);
                  const currentCat = store.currentCategory();
                  if (currentCat) {
                    // Если есть текущая категория, создаем ключ "Category:Brand"
                    const key = `${currentCat}:${brand}`;
                    const current = store.selectedFilters();
                    const categories = new Set(current.selectedCategories);

                    if (categories.has(key)) {
                      categories.delete(key);
                    } else {
                      categories.add(key);
                    }

                    patchState(store, {
                      selectedFilters: {
                        ...current,
                        selectedCategories: Array.from(categories),
                      },
                    });
                  }
                }
              }));

              // Строим меню для стилей
              const styleMenu = buildMenuItems(
                data.dressStyles,
                data.brands,
                'style',
                (style: string, brand: string) => {
                  const key = `${style}:${brand}`;
                  const current = store.selectedFilters();
                  const styles = new Set(current.selectedStyles);

                  if (styles.has(key)) {
                    styles.delete(key);
                  } else {
                    styles.add(key);
                  }

                  patchState(store, {
                    selectedFilters: {
                      ...current,
                      selectedStyles: Array.from(styles),
                    },
                  });
                }
              );

              // Строим меню брендов для стилей (для TieredMenu)
              const subStyleMenu = data.brands.map(brand => ({
                label: brand,
                command: () => {
                  console.log('Style Brand selected:', brand);
                  const currentSt = store.currentStyle();
                  if (currentSt) {
                    // Если есть текущий стиль, создаем ключ "Style:Brand"
                    const key = `${currentSt}:${brand}`;
                    const current = store.selectedFilters();
                    const styles = new Set(current.selectedStyles);

                    if (styles.has(key)) {
                      styles.delete(key);
                    } else {
                      styles.add(key);
                    }

                    patchState(store, {
                      selectedFilters: {
                        ...current,
                        selectedStyles: Array.from(styles),
                      },
                    });
                  }
                }
              }));

              patchState(store, {
                filterData: data,
                colors,
                categoryMenu,
                subCategoryMenu,
                styleMenu,
                subStyleMenu,
                isLoading: false,
                isInitialized: true,
              });
            }),
            catchError((error) => {
              patchState(store, {
                isLoading: false,
                error: 'Не удалось загрузить данные фильтров',
              });
              console.error('Error loading filter data:', error);
              return of(null);
            })
          )
        )
      )
    ),

    /**
     * Устанавливает диапазон цен
     * @param priceRange - новый диапазон [min, max]
     */
    setPriceRange(priceRange: number[]) {
      const current = store.selectedFilters();
      patchState(store, {
        selectedFilters: { ...current, priceRange },
      });
    },

    /**
     * Переключает выбор размера
     * @param size - размер для переключения
     */
    toggleSize(size: string) {
      const current = store.selectedFilters();
      const sizes = current.selectedSizes;
      const index = sizes.indexOf(size);

      const newSizes = index > -1
        ? sizes.filter((_, i) => i !== index)
        : [...sizes, size];

      patchState(store, {
        selectedFilters: { ...current, selectedSizes: newSizes },
      });
    },

    /**
     * Переключает выбор цвета
     * @param color - название цвета для переключения
     */
    toggleColor(color: string) {
      const current = store.selectedFilters();
      const colors = current.selectedColors;
      const index = colors.indexOf(color);

      const newColors = index > -1
        ? colors.filter((_, i) => i !== index)
        : [...colors, color];

      patchState(store, {
        selectedFilters: { ...current, selectedColors: newColors },
      });
    },

    /**
     * Переключает выбор категории
     * @param productType - тип продукта
     * @param brand - бренд
     */
    toggleCategory(productType: string, brand: string) {
      const key = `${productType}:${brand}`;
      const current = store.selectedFilters();
      const categories = current.selectedCategories;
      const index = categories.indexOf(key);

      const newCategories = index > -1
        ? categories.filter((_, i) => i !== index)
        : [...categories, key];

      patchState(store, {
        selectedFilters: { ...current, selectedCategories: newCategories },
      });
    },

    /**
     * Переключает выбор стиля
     * @param style - стиль одежды
     * @param brand - бренд
     */
    toggleStyle(style: string, brand: string) {
      const key = `${style}:${brand}`;
      const current = store.selectedFilters();
      const styles = current.selectedStyles;
      const index = styles.indexOf(key);

      const newStyles = index > -1
        ? styles.filter((_, i) => i !== index)
        : [...styles, key];

      patchState(store, {
        selectedFilters: { ...current, selectedStyles: newStyles },
      });
    },

    /**
     * Сбрасывает все фильтры к начальным значениям
     */
    resetFilters() {
      console.log('🔄 ProductFilterStore: Resetting filters to initial state');
      console.log('   Before:', store.selectedFilters());

      patchState(store, {
        selectedFilters: { ...initialState.selectedFilters }, // Создаем новый объект
      });

      console.log('   After:', store.selectedFilters());
    },

    /**
     * Очищает состояние стора
     */
    clearStore() {
      patchState(store, initialState);
    },

    /**
     * Устанавливает текущую категорию (для связи с брендом)
     * @param category - название категории
     */
    setCurrentCategory(category: string | null) {
      patchState(store, { currentCategory: category });
    },

    /**
     * Устанавливает текущий стиль (для связи с брендом)
     * @param style - название стиля
     */
    setCurrentStyle(style: string | null) {
      patchState(store, { currentStyle: style });
    },

    /**
     * Возвращает меню с брендами для конкретной категории
     * @param categoryName - название категории (например "Printed T-shirts")
     * @returns MenuItem[] с брендами для этой категории
     */
    getBrandsForCategory(categoryName: string): MenuItem[] {
      const menu = store.categoryMenu();
      const category = menu.find(item => item.label === categoryName);
      return category?.items || [];
    },

    /**
     * Возвращает меню с брендами для конкретного стиля
     * @param styleName - название стиля (например "Casual")
     * @returns MenuItem[] с брендами для этого стиля
     */
    getBrandsForStyle(styleName: string): MenuItem[] {
      const menu = store.styleMenu();
      const style = menu.find(item => item.label === styleName);
      return style?.items || [];
    },
  })),

  withHooks({
    /**
     * Хук инициализации - загружает данные фильтров при создании стора
     */
    onInit(store) {
      console.log('ProductFilterStore initialized');
      store.loadFilterData();
    },

    /**
     * Хук уничтожения стора
     */
    onDestroy(_store) {
      console.log('ProductFilterStore destroyed');
    },
  })
);

/**
 * Преобразует массив названий цветов в ColorOption с hex значениями
 * @param colorNames - массив названий цветов
 * @returns массив ColorOption
 */
function mapColorsToOptions(colorNames: string[]): ColorOption[] {
  return colorNames.map(name => ({
    name,
    value: COLOR_MAP[name] || generateColorHex(name),
  }));
}

/**
 * Генерирует hex цвет на основе названия
 * @param name - название цвета
 * @returns hex значение
 */
function generateColorHex(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = (hash & 0x00FFFFFF).toString(16).toUpperCase();
  return '#' + '00000'.substring(0, 6 - color.length) + color;
}

/**
 * Строит структуру меню для PrimeNG TieredMenu
 * @param categories - список категорий/стилей
 * @param brands - список брендов
 * @param type - тип меню
 * @param onSelect - callback при выборе элемента
 * @returns массив MenuItem
 */
function buildMenuItems(
  categories: string[],
  brands: string[],
  type: 'category' | 'style',
  onSelect: (category: string, brand: string) => void
): MenuItem[] {
  return categories.map(category => ({
    label: category,
    items: brands.map(brand => ({
      label: brand,
      command: () => onSelect(category, brand),
    })),
  }));
}

