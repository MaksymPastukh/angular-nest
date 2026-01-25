import { ProductFilterParams } from '../../detail/types/product-filter-params.interface'
import { ProductType } from '../../detail/types/product.interface'

export interface ProductState {
  products: ProductType[]
  filters: ProductFilterParams
  isLoading: boolean
  error: string | null
  total: number
  totalPages: number
}
