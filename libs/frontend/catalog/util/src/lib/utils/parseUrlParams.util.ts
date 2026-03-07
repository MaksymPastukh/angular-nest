import type { Params } from '@angular/router'
import { ParsedUrlParamsInterface } from '../domain/interfaces/parsed-url-params.interface'

function toIntOrUndef(v: unknown): number | undefined {
  if (typeof v !== 'string') return undefined
  const n = Number.parseInt(v, 10)
  return Number.isFinite(n) ? n : undefined
}

function toStringArray(v: unknown): string[] {
  if (typeof v === 'string') return [v]
  if (Array.isArray(v)) return v.filter((x): x is string => typeof x === 'string')
  return []
}

export function parseUrlParams(params: Params): ParsedUrlParamsInterface {
  return {
    // Цена
    minPrice: toIntOrUndef(params['minPrice']),
    maxPrice: toIntOrUndef(params['maxPrice']),

    // Размеры / Цвета
    sizes: toStringArray(params['size']),
    colors: toStringArray(params['color']),

    // Категория
    category: typeof params['category'] === 'string' ? params['category'] : undefined,

    // Подкатегория / Стиль / Бренд
    productType: typeof params['productType'] === 'string' ? params['productType'] : undefined,
    dressStyle: typeof params['dressStyle'] === 'string' ? params['dressStyle'] : undefined,
    brand: typeof params['brand'] === 'string' ? params['brand'] : undefined,

    // Поиск
    search: typeof params['search'] === 'string' ? params['search'] : undefined,

    // Пагинация
    page: toIntOrUndef(params['page']),
    limit: toIntOrUndef(params['limit']),

    // Сортировка
    sortBy: params['sortBy'] as 'price' | 'rating' | 'title' | 'createdAt' | undefined,
    order: params['order'] as 'asc' | 'desc' | undefined,
  }
}
