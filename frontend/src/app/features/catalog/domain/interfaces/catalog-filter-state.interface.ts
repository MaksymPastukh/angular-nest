import { CatalogFilterDataInterface } from '../../../products/domain/interfaces/product-response-filter.interface'
import { CatalogSelectedFiltersInterface } from './catalog-selected-filters.interface'

export interface CatalogFilterState {
  filterData: CatalogFilterDataInterface | null
  selected: CatalogSelectedFiltersInterface
  isLoading: boolean
  error: string | null
  initialized: boolean
}
