import type { Params } from '@angular/router';
import type { ParsedUrlParams } from '../../views/types/parsed-url-params.type';

/**
 * Парсит query параметры из URL в типизированный объект
 * Обрабатывает массивы и числа
 */
export function parseUrlParams(params: Params): ParsedUrlParams {
  return {
    // Цена
    minPrice: params['minPrice'] ? parseInt(params['minPrice']) : undefined,
    maxPrice: params['maxPrice'] ? parseInt(params['maxPrice']) : undefined,

    // Размеры (может быть строка или массив)
    sizes: params['size']
      ? Array.isArray(params['size'])
        ? params['size']
        : [params['size']]
      : [],

    // Цвета (может быть строка или массив)
    colors: params['color']
      ? Array.isArray(params['color'])
        ? params['color']
        : [params['color']]
      : [],

    // Категория (Men, Women, Combos, Joggers)
    category: params['category'] || undefined,

    // Подкатегория + Бренд
    productType: params['productType'] || undefined,
    dressStyle: params['dressStyle'] || undefined,
    brand: params['brand'] || undefined,

    // Поиск
    search: params['search'] || undefined,

    // Пагинация
    page: params['page'] ? parseInt(params['page']) : undefined,
    limit: params['limit'] ? parseInt(params['limit']) : undefined,

    // Сортировка (с type assertion для строгих типов)
    sortBy: params['sortBy'] as 'price' | 'rating' | 'title' | 'createdAt' | undefined,
    order: params['order'] as 'asc' | 'desc' | undefined,
  };
}

