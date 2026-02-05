import { ProductInterface } from '../../../catalog/domain/interfaces/product.interface'

export interface ProductDetailStateInterface {
  product: ProductInterface | null
  isLoading: boolean
  error: string | null
}
