import { SelectedFilters } from '../types/filter.types';
import { ProductFilterParams } from '../../views/types/product.type';

export function mapToApiFilters(
  filters: SelectedFilters
): ProductFilterParams {
  const params: ProductFilterParams = {
    page: 1,
    limit: 20,
  };

  /* ---------- PRICE ---------- */
  // Дефолтные значения цены
  const DEFAULT_MIN_PRICE = 70;
  const DEFAULT_MAX_PRICE = 270;

  if (filters.priceRange) {
    // Добавляем только если отличается от дефолта
    if (filters.priceRange[0] !== DEFAULT_MIN_PRICE) {
      params.minPrice = filters.priceRange[0];
    }
    if (filters.priceRange[1] !== DEFAULT_MAX_PRICE) {
      params.maxPrice = filters.priceRange[1];
    }
  }

  /* ---------- SIZE ---------- */

  if (filters.selectedSizes.length > 0) {
    // Передаём все выбранные размеры как массив
    params.size = filters.selectedSizes.length === 1
      ? filters.selectedSizes[0]  // Если один - строка
      : filters.selectedSizes;     // Если несколько - массив
  } else {
    // Явно указываем undefined если размеры не выбраны
    params.size = undefined;
  }

  /* ---------- COLOR ---------- */

  if (filters.selectedColors.length > 0) {
    // Передаём все выбранные цвета как массив
    params.color = filters.selectedColors.length === 1
      ? filters.selectedColors[0]  // Если один - строка
      : filters.selectedColors;     // Если несколько - массив
  } else {
    // Явно указываем undefined если цвета не выбраны
    params.color = undefined;
  }

  /* ---------- CATEGORY + BRAND ---------- */
  /**
   * selectedCategories: ["Printed T-shirts:Nike"]
   * Формат: "productType:brand"
   */
  if (filters.selectedCategories.length > 0) {
    const [category, brand] = filters.selectedCategories[0].split(':');

    params.productType = category;
    if (brand) {
      params.brand = brand;
    } else {
      params.brand = undefined;
    }
  } else {
    params.productType = undefined;
    params.brand = undefined;
  }

  /* ---------- STYLE + BRAND ---------- */
  /**
   * selectedStyles: ["Casual:Adidas"]
   * Формат: "dressStyle:brand"
   *
   * ВАЖНО: Применяем только если НЕ выбрана категория
   * Иначе получится слишком узкая фильтрация (productType AND dressStyle AND brand)
   */
  if (filters.selectedStyles.length > 0 && filters.selectedCategories.length === 0) {
    const [style, brand] = filters.selectedStyles[0].split(':');

    params.dressStyle = style;
    if (brand) {
      params.brand = brand;
    } else {
      params.brand = undefined;
    }
  } else if (filters.selectedCategories.length === 0) {
    // Если нет ни категории, ни стиля - очищаем
    params.dressStyle = undefined;
    if (!params.brand) {
      params.brand = undefined;
    }
  }

  return params;
}
