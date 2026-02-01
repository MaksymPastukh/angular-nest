export interface ParsedUrlParamsInterface {
  minPrice?: number
  maxPrice?: number
  sizes: string[]
  colors: string[]
  category?: string
  productType?: string
  dressStyle?: string
  brand?: string
  search?: string
  page?: number
  limit?: number
  sortBy?: 'price' | 'rating' | 'title' | 'createdAt'
  order?: 'asc' | 'desc'
}
