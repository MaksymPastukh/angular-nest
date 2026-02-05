import { CatalogSelectedFiltersInterface } from '../domain/interfaces/catalog-selected-filters.interface'
import { QueryParamsFacets } from '../domain/types/facets-preview-request.type'
import { mapToApiFilters } from './mapToApiFilters.util'

export const buildBaseFacetsParams = (
  selected: CatalogSelectedFiltersInterface
): QueryParamsFacets => {
  const api = mapToApiFilters(selected)

  const base: QueryParamsFacets = {}

  // category - ВАЖНО: учитываем для разделения Men/Women
  if (api.category) {
    base['category'] = api.category
  }

  // price - опционально, можно учитывать ценовой диапазон
  if (api.minPrice !== undefined) {
    base['minPrice'] = api.minPrice
  }
  if (api.maxPrice !== undefined) {
    base['maxPrice'] = api.maxPrice
  }

  return base
}
