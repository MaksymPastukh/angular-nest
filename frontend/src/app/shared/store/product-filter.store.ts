import {FilterData, SelectedFilters} from '../types/filter.types';
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import {catchError, forkJoin, of, switchMap, tap} from 'rxjs';
import {computed, inject} from '@angular/core';
import {ProductService} from '../services/product.service';

import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {MenuItem} from 'primeng/api';

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
    priceRange: [70, 270],
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
              patchState(store, {
                isLoading: false,
                error: 'Не удалось загрузить фильтры',
              });
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

    function toggleSize(size: string) {
      updateSelected(f => ({
        ...f,
        selectedSizes: toggle(f.selectedSizes, size),
      }));
    }

    function toggleColor(color: string) {
      updateSelected(f => ({
        ...f,
        selectedColors: toggle(f.selectedColors, color),
      }));
    }

    function toggleCategory(category: string, brand: string) {
      const key = `${category}:${brand}`;

      updateSelected(f => {
        // Проверяем есть ли уже выбранная категория с этим же типом (но может быть другой бренд)
        const existingWithSameType = f.selectedCategories.find(item => item.startsWith(`${category}:`));

        if (existingWithSameType === key) {
          // Кликнули на уже выбранную категорию+бренд → снимаем выбор
          return {
            ...f,
            selectedCategories: [],
            selectedStyles: [],
          };
        } else if (existingWithSameType) {
          // Кликнули на тот же тип категории, но другой бренд → заменяем
          return {
            ...f,
            selectedCategories: [key],
            selectedStyles: [],
          };
        } else {
          // Кликнули на новую категорию → выбираем
          return {
            ...f,
            selectedCategories: [key],
            selectedStyles: [],
          };
        }
      });
    }

    function toggleStyle(style: string, brand: string) {
      const key = `${style}:${brand}`;

      updateSelected(f => {
        // Проверяем есть ли уже выбранный стиль с этим же типом (но может быть другой бренд)
        const existingWithSameType = f.selectedStyles.find(item => item.startsWith(`${style}:`));

        if (existingWithSameType === key) {
          // Кликнули на уже выбранный стиль+бренд → снимаем выбор
          return {
            ...f,
            selectedStyles: [],
            selectedCategories: [],
          };
        } else if (existingWithSameType) {
          // Кликнули на тот же тип стиля, но другой бренд → заменяем
          return {
            ...f,
            selectedStyles: [key],
            selectedCategories: [],
          };
        } else {
          // Кликнули на новый стиль → выбираем
          return {
            ...f,
            selectedStyles: [key],
            selectedCategories: [],
          };
        }
      });
    }

    function resetFilters() {
      patchState(store, {
        selected: initialState.selected,
        ui: initialState.ui, // Также сбрасываем UI состояние
      });
    }

    /* ---------- UI ---------- */

    function setCurrentCategory(category: string | null) {
      patchState(store, {
        ui: { ...store.ui(), currentCategory: category },
      });
    }

    function setCurrentStyle(style: string | null) {
      patchState(store, {
        ui: { ...store.ui(), currentStyle: style },
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

      setCurrentCategory,
      setCurrentStyle,
    };
  }),

  /* =======================
     COMPUTED (после методов, чтобы использовать их)
  ======================= */

  withComputed((store) => ({
    sizes: computed(() => store.filterData()?.sizes ?? []),

    colors: computed(() =>
      (store.filterData()?.colors ?? []).map(name => ({
        name,
        value: COLOR_MAP[name] ?? generateColorHex(name),
      }))
    ),

    // Имена категорий для кнопок в фильтре
    categoryNames: computed(() => store.filterData()?.productTypes ?? []),

    // Имена стилей для кнопок в фильтре (просто массив строк)
    styleNames: computed(() => store.filterData()?.dressStyles ?? []),

    // Меню брендов для текущего выбранного стиля (для TieredMenu popup)
    brandsMenuForCurrentStyle: computed<MenuItem[]>(() => {
      const data = store.filterData();
      const currentStyle = store.ui().currentStyle;

      if (!data || !currentStyle) return [];

      // Возвращаем только список брендов для выбранного стиля
      return data.brands.map(brand => ({
        label: brand,
        command: () => {
          (store as any).toggleStyle(currentStyle, brand);
        }
      }));
    }),

    // Модель для TieredMenu по категориям: productType -> brands
    subCategoryMenu: computed<MenuItem[]>(() => {
      const data = store.filterData();
      if (!data) return [];
      return buildMenu(data.productTypes, data.brands, (category, brand) => {
        (store as any).toggleCategory(category, brand);
      });
    }),

    // Меню брендов для текущей выбранной категории (для TieredMenu popup)
    brandsMenuForCurrentCategory: computed<MenuItem[]>(() => {
      const data = store.filterData();
      const currentCategory = store.ui().currentCategory;

      if (!data || !currentCategory) return [];

      // Возвращаем только список брендов для выбранной категории
      return data.brands.map(brand => ({
        label: brand,
        command: () => {
          (store as any).toggleCategory(currentCategory, brand);
        }
      }));
    }),

    // Удобный доступ к selected-фильтрам в шаблоне
    selectedFilters: computed(() => store.selected()),
  })),

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
