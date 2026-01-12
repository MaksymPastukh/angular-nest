/**
 * Интерфейс для опции цвета
 */
export interface ColorOption {
  /** Название цвета (например, "Red", "Blue") */
  name: string;
  /** Hex значение цвета (например, "#FF0000") */
  value: string;
}

/**
 * Интерфейс данных фильтров загруженных с Backend
 */
export interface FilterData {
  /** Типы продуктов (категории) */
  productTypes: string[];
  /** Стили одежды */
  dressStyles: string[];
  /** Бренды */
  brands: string[];
  /** Цвета */
  colors: string[];
  /** Размеры */
  sizes: string[];
}

/**
 * Интерфейс состояния выбранных фильтров
 */
export interface SelectedFilters {
  /** Диапазон цен [min, max] */
  priceRange: number[];
  /** Выбранные размеры */
  selectedSizes: string[];
  /** Выбранные цвета */
  selectedColors: string[];
  /** Выбранные категории (формат: "ProductType:Brand") */
  selectedCategories: string[];
  /** Выбранные стили (формат: "Style:Brand") */
  selectedStyles: string[];
}

/**
 * Устаревший интерфейс FilterState для обратной совместимости
 * @deprecated используйте SelectedFilters
 */
export type FilterState = SelectedFilters;

/**
 * Интерфейс для структуры категории/стиля с брендами
 */
export interface CategoryFilter {
  /** Название категории */
  category: string;
  /** Бренд */
  brand: string;
}

/**
 * Интерфейс для структуры стиля с брендами
 */
export interface StyleFilter {
  /** Название стиля */
  style: string;
  /** Бренд */
  brand: string;
}

