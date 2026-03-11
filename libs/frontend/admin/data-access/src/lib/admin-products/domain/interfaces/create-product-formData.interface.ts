import { ProductImageInterface } from '@marketplace/frontend-shared-types'

export interface CreateProductFormDataInterface {
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
  fabric: string
  fit: string
  neck: string
  pattern: string
  sleeve: string
  colors: string[]
  sizes: string[]
}
