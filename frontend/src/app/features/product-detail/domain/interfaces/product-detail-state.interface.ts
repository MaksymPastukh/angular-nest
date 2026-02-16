import { ProductDetailInterface } from './product-detail.interface'

export interface ProductDetailStateInterface {
  product: ProductDetailInterface | null
  isLoading: boolean
  error: string | null
  selectedSize: string | null
  selectedColor: string | null
  quantity: number
  activeImageIndex: number
}
