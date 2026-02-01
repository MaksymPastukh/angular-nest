import type { Params } from '@angular/router'
import { ParsedUrlParamsInterface } from '../domain/interfaces/parsed-url-params.interface'

export function parseUrlParams(params: Params): ParsedUrlParamsInterface {
  return {
    // Цена
    minPrice:
      params['minPrice'] && typeof params['minPrice'] === 'string'
        ? parseInt(params['minPrice'])
        : undefined,
    maxPrice:
      params['maxPrice'] && typeof params['maxPrice'] === 'string'
        ? parseInt(params['maxPrice'])
        : undefined,

    // Размеры (может быть строка или массив)
    sizes:
      params['size'] && typeof params['size'] === 'string'
        ? Array.isArray(params['size'])
          ? params['size']
          : [params['size']]
        : [],

    // Цвета (может быть строка или массив)
    colors:
      params['color'] && typeof params['color'] === 'string'
        ? Array.isArray(params['color'])
          ? params['color']
          : [params['color']]
        : [],

    // Категория (Men, Women, Combos, Joggers)
    category:
      params['category'] && typeof params['category'] === 'string' ? params['category'] : undefined,

    // Подкатегория + Бренд
    productType:
      params['productType'] && typeof params['productType'] === 'string'
        ? params['productType']
        : undefined,
    dressStyle:
      params['dressStyle'] && typeof params['dressStyle'] === 'string'
        ? params['dressStyle']
        : undefined,
    brand: params['brand'] && typeof params['brand'] === 'string' ? params['brand'] : undefined,

    // Поиск
    search: params['search'] && typeof params['search'] === 'string' ? params['search'] : undefined,

    // Пагинация
    page:
      params['page'] && typeof params['page'] === 'string' ? parseInt(params['page']) : undefined,
    limit:
      params['limit'] && typeof params['limit'] === 'string'
        ? parseInt(params['limit'])
        : undefined,

    // Сортировка (с type assertion для строгих типов)
    sortBy: params['sortBy'] as 'price' | 'rating' | 'title' | 'createdAt' | undefined,
    order: params['order'] as 'asc' | 'desc' | undefined,
  }
}
