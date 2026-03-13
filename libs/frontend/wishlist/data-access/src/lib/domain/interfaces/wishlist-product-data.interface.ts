import { ProductImageInterface } from '@marketplace/frontend-shared-types'

export interface WishlistProductData {
  _id: string
  title: string
  brand: string
  price: number
  rating: number
  images: ProductImageInterface[]
  category: string
  isHidden: boolean
  inStock: boolean
}
