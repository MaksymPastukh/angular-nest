import {FilterData, SelectedFilters} from '../types/filter.types';
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import {catchError, forkJoin, of, switchMap, tap} from 'rxjs';
import {computed, inject} from '@angular/core';
import {ProductService} from '../services/product.service';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {MenuItem} from 'primeng/api';
import {parseUrlParams} from '../services/parseUrlParams';
import type {Params} from '@angular/router';

/* ==========================================
   CONSTANTS
========================================== */

const PRICE_DEFAULT = { min: 70, max: 270 } as const;

/* ==========================================
   TYPES
========================================== */

type CompositeFilterKey = 'selectedCategories' | 'selectedStyles';

interface FilterState {
  filterData: FilterData | null;

  selected: SelectedFilters;

  ui: {
    currentCategory: string | null;
    currentStyle: string | null;
  };

  isLoading: boolean;
  error: string | null;
  initialized: boolean;
}

const initialState: FilterState = {
  filterData: null,

  selected: {
    priceRange: [PRICE_DEFAULT.min, PRICE_DEFAULT.max],
    selectedSizes: [],
    selectedColors: [],
    selectedCategories: [],
    selectedStyles: [],
  },

  ui: {
    currentCategory: null,
    currentStyle: null,
  },

  isLoading: false,
  error: null,
  initialized: false,
};

/**
 * NOTE: Если в будущем initialState нужно вычислять динамически
 * (например, из конфигурации), можно использовать:
 *
 * withState(() => initialStateFactory())
 *
 * См. https://ngrx.io/guide/signals/signal-store#creating-a-store
 */

/* ==========================================
   HELPERS
========================================== */

function toggle(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter(v => v !== value)
    : [...list, value];
}

function buildMenu(
  items: string[],
  brands: string[],
  onSelect: (item: string, brand: string) => void
): MenuItem[] {
  return items.map(item => ({
    label: item,
    items: brands.map(brand => ({
      label: brand,
      command: () => onSelect(item, brand),
    })),
  }));
}

/**
 * Универсальная функция для toggle category/style
 * Избегаем дублирования логики
 */
function createCompositeToggle(
  key: CompositeFilterKey,
  value: string,
  resetKey: CompositeFilterKey,
  currentState: SelectedFilters
): SelectedFilters {
  const prefix = value.split(':')[0];
  const existing = currentState[key].find(item => item.startsWith(`${prefix}:`));

  // Если кликнули на уже выбранный → снимаем выбор
  if (existing === value) {
    return {
      ...currentState,
      [key]: [],
      [resetKey]: [],
    };
  }

  // Иначе → выбираем (заменяя старый, если был)
  return {
    ...currentState,
    [key]: [value],
    [resetKey]: [],
  };
}


export const ProductFilterStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),


  /* =======================
     METHODS
  ======================= */

  withMethods((store, productService = inject(ProductService)) => {
    /* ---------- API ---------- */

    const loadFilterData = rxMethod<void>((source$) =>
      source$.pipe(
        tap(() =>
          patchState(store, { isLoading: true, error: null })
        ),
        switchMap(() =>
          forkJoin({
            categories: productService.getCategories(),
            productTypes: productService.getProductTypes(),
            dressStyles: productService.getDressStyles(),
            brands: productService.getBrands(),
            colors: productService.getColors(),
            sizes: productService.getSizes(),
          }).pipe(
            tap((data) =>
              patchState(store, {
                filterData: data,
                isLoading: false,
                initialized: true,
              })
            ),
            catchError((error) => {
              // Логируем ошибку для отладки/мониторинга
              console.error('[ProductFilterStore] Failed to load filter data:', error);

              patchState(store, {
                isLoading: false,
                error: 'Не удалось загрузить фильтры',
              });

              // Возвращаем null чтобы не прерывать stream
              return of(null);
            })
          )
        )
      )
    );

    /* ---------- GENERIC FILTER UPDATE ---------- */

    function updateSelected(
      updater: (current: SelectedFilters) => SelectedFilters
    ) {
      patchState(store, {
        selected: updater(store.selected()),
      });
    }

    /* ---------- FILTER ACTIONS ---------- */

    function setPriceRange(priceRange: number[]) {
      updateSelected(f => ({ ...f, priceRange }));
    }

    /**
     * Универсальная функция для toggle полей-массивов
     */
    function toggleArrayField<K extends keyof SelectedFilters>(
      key: K,
      value: string
    ) {
      updateSelected(f => ({
        ...f,
        [key]: toggle(f[key] as string[], value),
      }));
    }

    function toggleSize(size: string) {
      toggleArrayField('selectedSizes', size);
    }

    function toggleColor(color: string) {
      toggleArrayField('selectedColors', color);
    }

    /**
     * Toggle категории (убрана дублированная логика)
     */
    function toggleCategory(category: string, brand: string) {
      const key = `${category}:${brand}`;
      updateSelected(f =>
        createCompositeToggle('selectedCategories', key, 'selectedStyles', f)
      );
    }

    /**
     * Toggle стиля (убрана дублированная логика)
     */
    function toggleStyle(style: string, brand: string) {
      const key = `${style}:${brand}`;
      updateSelected(f =>
        createCompositeToggle('selectedStyles', key, 'selectedCategories', f)
      );
    }

    function resetFilters() {
      patchState(store, {
        selected: initialState.selected,
        ui: initialState.ui,
      });
    }

    /**
     * Устанавливает текущую категорию для UI (показ меню брендов)
     * Это временное состояние для popup меню, не влияет на фильтрацию
     */
    function setCurrentCategory(category: string | null) {
      patchState(store, {
        ui: { ...store.ui(), currentCategory: category },
      });
    }

    /**
     * Устанавливает текущий стиль для UI (показ меню брендов)
     * Это временное состояние для popup меню, не влияет на фильтрацию
     */
    function setCurrentStyle(style: string | null) {
      patchState(store, {
        ui: { ...store.ui(), currentStyle: style },
      });
    }

    /**
     * Восстанавливает фильтры из URL параметров
     * Детерминированно, без side-effects - один patchState
     */
    function restoreFromQueryParams(params: Params) {
      const parsed = parseUrlParams(params);

      // Формируем полное состояние фильтров
      const selectedCategories: string[] = parsed.productType
        ? [`${parsed.productType}:${parsed.brand || ''}`]
        : [];

      const selectedStyles: string[] = !parsed.productType && parsed.dressStyle
        ? [`${parsed.dressStyle}:${parsed.brand || ''}`]
        : [];

      // Один детерминированный update
      patchState(store, {
        selected: {
          priceRange: [
            parsed.minPrice ?? PRICE_DEFAULT.min,
            parsed.maxPrice ?? PRICE_DEFAULT.max,
          ],
          selectedSizes: parsed.sizes,
          selectedColors: parsed.colors,
          selectedCategories,
          selectedStyles,
        },
      });
    }

    return {
      loadFilterData,

      setPriceRange,
      toggleSize,
      toggleColor,
      toggleCategory,
      toggleStyle,
      resetFilters,
      restoreFromQueryParams,

      setCurrentCategory,
      setCurrentStyle,
    };
  }),

  /* =======================
     COMPUTED (после методов, чтобы использовать их)
  ======================= */

  withComputed((store) => {
    // Выносим методы в переменные - чище чем (store as any)
    const toggleCategory = store.toggleCategory;
    const toggleStyle = store.toggleStyle;

    return {
      sizes: computed(() => store.filterData()?.sizes ?? []),

      colors: computed(() =>
        (store.filterData()?.colors ?? []).map(name => ({
          name,
          value: COLOR_MAP[name] ?? generateColorHex(name),
        }))
      ),

      // Имена категорий для кнопок в фильтре
      categoryNames: computed(() => store.filterData()?.productTypes ?? []),

      // Имена стилей для кнопок в фильтре
      styleNames: computed(() => store.filterData()?.dressStyles ?? []),

      // Меню брендов для текущей категории (выбранной для показа popup)
      // Использует ui.currentCategory - временное состояние при клике на кнопку
      brandsMenuForCurrentCategory: computed<MenuItem[]>(() => {
        const data = store.filterData();
        const currentCategory = store.ui().currentCategory;

        if (!data || !currentCategory) return [];

        return data.brands.map(brand => ({
          label: brand,
          command: () => toggleCategory(currentCategory, brand)
        }));
      }),

      // Меню брендов для текущего стиля (выбранного для показа popup)
      // Использует ui.currentStyle - временное состояние при клике на кнопку
      brandsMenuForCurrentStyle: computed<MenuItem[]>(() => {
        const data = store.filterData();
        const currentStyle = store.ui().currentStyle;

        if (!data || !currentStyle) return [];

        return data.brands.map(brand => ({
          label: brand,
          command: () => toggleStyle(currentStyle, brand)
        }));
      }),

      // Вычисляемые значения - что сейчас выбрано в фильтрах
      currentCategory: computed(() =>
        store.selected().selectedCategories[0]?.split(':')[0] ?? null
      ),

      currentStyle: computed(() =>
        store.selected().selectedStyles[0]?.split(':')[0] ?? null
      ),

      // Модель для TieredMenu по категориям: productType -> brands
      subCategoryMenu: computed<MenuItem[]>(() => {
        const data = store.filterData();
        if (!data) return [];
        return buildMenu(
          data.productTypes,
          data.brands,
          toggleCategory
        );
      }),


      // Удобный доступ к selected-фильтрам в шаблоне
      selectedFilters: computed(() => store.selected()),
    };
  }),

  withHooks({
    onInit(store) {
      store.loadFilterData();
    },
  })
);

const COLOR_MAP: Record<string, string> = {
  Purple: '#8e44ad',
  Black: '#000000',
  Red: '#e74c3c',
  Orange: '#e67e22',
  Navy: '#2980b9',
  Blue: '#00bcd4',
  White: '#ffffff',
  Brown: '#d35400',
  Broom: '#d35400',
  Green: '#2ecc71',
  Yellow: '#f1c40f',
  Grey: '#bdc3c7',
  Gray: '#bdc3c7',
  Pink: '#e91e63',
  Beige: '#f5f5dc',
  Indigo: '#4b0082',
  Violet: '#8b00ff',
  Cyan: '#00ffff',
  Magenta: '#ff00ff',
  Lime: '#00ff00',
  Maroon: '#800000',
  Olive: '#808000',
  Teal: '#008080',
};

function generateColorHex(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = (hash & 0x00ffffff).toString(16).toUpperCase();
  return '#' + '00000'.substring(0, 6 - color.length) + color;
}
