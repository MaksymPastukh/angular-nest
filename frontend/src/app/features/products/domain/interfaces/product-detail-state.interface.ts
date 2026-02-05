import { ProductInterface } from './product.interface'

export interface ProductDetailStateInterface {
  product: ProductInterface | null
  isLoading: boolean
  error: string | null
}
