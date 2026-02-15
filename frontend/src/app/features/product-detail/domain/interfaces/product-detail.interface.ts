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

export interface RatingStatsInterface {
  avg: 0
  count: 0
  distribution: {
    '1': 0
    '2': 0
    '3': 0
    '4': 0
    '5': 0
  }
  updatedAt: null
}
