import { FacetItemInterface } from './catalog-facets.interface'

export interface CatalogFacetsStateInterface {
  activeKey: string | null
  brands: FacetItemInterface[] | null
  isLoading: boolean
  error: string | null
}
