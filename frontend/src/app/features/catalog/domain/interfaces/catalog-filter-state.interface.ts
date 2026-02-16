import { CatalogSelectedFiltersInterface } from './catalog-selected-filters.interface'
import { CatalogFilterDataInterface } from './product-response-filter.interface'

export interface CatalogFilterState {
  filterData: CatalogFilterDataInterface | null
  selected: CatalogSelectedFiltersInterface
  isLoading: boolean
  error: string | null
  initialized: boolean
}
