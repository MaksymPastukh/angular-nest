import { RatingStatsInterface } from './product-rating-stats.interface'

export interface ProductDetailInterface {
  images: string[]
  title: string
  rating: number
  brand: string
  price: number
  comment: string
  category: string
  productType: string
  dressStyle: string
  description: string
  createdAt: string
  updatedAt: string
  fabric: string
  fit: string
  neck: string
  pattern: string
  sleeve: string
  ratingStats: RatingStatsInterface
  id: string
  colors: string[]
  sizes: string[]
  isLiked: boolean
}
