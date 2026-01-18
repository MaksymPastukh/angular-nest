/**
 * Типы для query параметров URL
 * Все поля опциональные, так как могут отсутствовать в URL
 */
export interface QueryParams {
  productType?: string
  category?: string
  dressStyle?: string
  brand?: string
  color?: string | string[]
  size?: string | string[]
  minPrice?: number
  maxPrice?: number
  minRating?: number
  sortBy?: string
  order?: 'asc' | 'desc'
  page?: number
  limit?: number
  search?: string
}
