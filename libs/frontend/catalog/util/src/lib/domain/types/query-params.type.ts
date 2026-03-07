export interface QueryParamsInterface {
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
  [key: string]: string | string[] | number | undefined
}
