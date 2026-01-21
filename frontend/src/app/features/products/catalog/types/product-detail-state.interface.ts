import { ProductType } from '../../detail/types/product.interface'

export interface ProductDetailState {
  product: ProductType | null
  isLoading: boolean
  error: string | null
}
