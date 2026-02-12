import { ProductInterface } from '../../../../shared/domain/interfaces/product.interface'
import { CatalogFilterParamsInterface } from './catalog-filter-params.interface'
import { ProductsFacets } from './products-response.interface'

export interface ShopStateInterface {
  products: ProductInterface[]
  filters: CatalogFilterParamsInterface
  isLoading: boolean
  error: string | null
  total: number
  totalPages: number
  facets: ProductsFacets | null
}
