export interface ProductFilterParams {
  category?: string
  productType?: string
  dressStyle?: string
  brand?: string
  minPrice?: number
  maxPrice?: number
  minRating?: number
  color?: string | string[]
  size?: string | string[]
  search?: string
  sortBy?: 'price' | 'rating' | 'title' | 'createdAt'
  order?: 'asc' | 'desc'
  page?: number
  limit?: number
}
