import { CatalogFilterParamsInterface } from '../../../catalog/domain/interfaces/catalog-filter-params.interface'
import { ProductInterface } from './product.interface'

export interface ShopStateInterface {
  products: ProductInterface[]
  filters: CatalogFilterParamsInterface
  isLoading: boolean
  error: string | null
  total: number
  totalPages: number
}
