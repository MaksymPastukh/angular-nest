import { SelectedFilters } from '../types/filter.types';
import { ProductFilterParams } from '../../views/types/product.type';

/* ==========================================
   CONSTANTS (вынесены наружу)
========================================== */

const DEFAULT_MIN_PRICE = 70;
const DEFAULT_MAX_PRICE = 270;

/* ==========================================
   HELPERS
========================================== */

/**
 * Конвертирует массив в строку или массив в зависимости от длины
 * Используется для size и color (одно значение = строка, несколько = массив)
 */
function arrayToStringOrArray(items: string[]): string | string[] | undefined {
  if (items.length === 0) return undefined;
  return items.length === 1 ? items[0] : items;
}

/**
 * Парсит строку формата "value:brand" и возвращает кортеж
 */
function parseCategoryBrand(value: string): [string, string] {
  const [category, brand = ''] = value.split(':');
  return [category, brand];
}

/* ==========================================
   MAIN FUNCTION
========================================== */

/**
 * Конвертирует UI фильтры в API параметры
 *
 * Приоритет фильтрации:
 * 1. Category (productType) - высший приоритет
 * 2. Style (dressStyle) - применяется только если НЕТ категории
 *
 * Brand может быть у категории ИЛИ стиля, но не у обоих одновременно
 */
export function mapToApiFilters(
  filters: SelectedFilters
): ProductFilterParams {
  const params: ProductFilterParams = {
    page: 1,
    limit: 20,
  };

  /* ---------- PRICE ---------- */

  if (filters.priceRange) {
    // Добавляем только если отличается от дефолта
    if (filters.priceRange[0] !== DEFAULT_MIN_PRICE) {
      params.minPrice = filters.priceRange[0];
    }
    if (filters.priceRange[1] !== DEFAULT_MAX_PRICE) {
      params.maxPrice = filters.priceRange[1];
    }
  }

  /* ---------- SIZE & COLOR ---------- */

  // Всегда добавляем size и color в params
  // Если пусто → undefined явно удалит фильтр в setFilters
  params.size = arrayToStringOrArray(filters.selectedSizes);
  params.color = arrayToStringOrArray(filters.selectedColors);

  /* ---------- CATEGORY + BRAND (приоритет 1) ---------- */

  if (filters.selectedCategories.length > 0) {
    const [category, brand] = parseCategoryBrand(filters.selectedCategories[0]);

    params.productType = category;
    if (brand) params.brand = brand;

    // Ранний выход - категория имеет приоритет над стилем
    return params;
  }

  /* ---------- STYLE + BRAND (приоритет 2) ---------- */

  if (filters.selectedStyles.length > 0) {
    const [style, brand] = parseCategoryBrand(filters.selectedStyles[0]);

    params.dressStyle = style;
    if (brand) params.brand = brand;
  }

  return params;
}
