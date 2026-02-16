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
  avg: number
  count: number
  distribution: {
    '1': number
    '2': number
    '3': number
    '4': number
    '5': number
  }
  updatedAt: string | null
}
