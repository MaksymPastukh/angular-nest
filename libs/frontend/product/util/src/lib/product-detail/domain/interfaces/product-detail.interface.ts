import { ProductImageInterface, RatingStatsInterface } from '@marketplace/frontend-shared-types'

export interface ProductDetailInterface {
  images: ProductImageInterface[]
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

