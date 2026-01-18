import { ProductType } from '../../../views/types/product.type'

export interface ProductDetailState {
  product: ProductType | null
  isLoading: boolean
  error: string | null
}
