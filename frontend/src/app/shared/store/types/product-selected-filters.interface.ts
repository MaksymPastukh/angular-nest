export interface SelectedFilters {
  /** Диапазон цен [min, max] */
  priceRange: number[];
  /** Выбранные размеры */
  selectedSizes: string[];
  /** Выбранные цвета */
  selectedColors: string[];
  /** Выбранная основная категория (Men, Women, Combos, Joggers) */
  selectedCategory: string | null;
  /** Выбранные подкатегории/типы продуктов (формат: "ProductType:Brand") */
  selectedCategories: string[];
  /** Выбранные стили (формат: "Style:Brand") */
  selectedStyles: string[];
  /** Поисковый запрос */
  searchQuery: string;
}
