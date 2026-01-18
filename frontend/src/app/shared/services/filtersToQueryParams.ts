import type { ProductFilterParams } from '../../views/types/product.type'
import type { QueryParams } from '../../views/types/query-params.type'

/**
 * Конвертирует API фильтры в query параметры для URL
 * Убирает дефолтные значения чтобы URL был чище
 */
export function filtersToQueryParams(filters: ProductFilterParams): QueryParams {
  const params: QueryParams = {}

  // Основные фильтры
  if (filters['productType']) params.productType = filters['productType']
  if (filters['category']) params.category = filters['category']
  if (filters['dressStyle']) params.dressStyle = filters['dressStyle']
  if (filters['brand']) params.brand = filters['brand']
  if (filters['color']) params.color = filters['color']
  if (filters['size']) params.size = filters['size']

  // Поиск
  if (filters['search']) params.search = filters['search']

  // Цена - только если отличается от дефолта
  if (filters['minPrice'] !== undefined && filters['minPrice'] !== 70) {
    params.minPrice = filters['minPrice']
  }
  if (filters['maxPrice'] !== undefined && filters['maxPrice'] !== 270) {
    params.maxPrice = filters['maxPrice']
  }

  // Рейтинг на будущее
  if (filters['minRating']) params.minRating = filters['minRating']

  // Сортировка - только если отличается от дефолта
  if (filters['sortBy'] && filters['sortBy'] !== 'createdAt') {
    params.sortBy = filters['sortBy']
  }
  if (filters['order'] && filters['order'] !== 'desc') {
    params.order = filters['order']
  }

  // Пагинация - только если отличается от дефолта
  if (filters['page'] && filters['page'] !== 1) params.page = filters['page']
  if (filters['limit'] && filters['limit'] !== 20) params.limit = filters['limit']

  return params
}
