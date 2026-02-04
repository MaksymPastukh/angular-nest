import { CatalogSelectedFiltersInterface } from '../domain/interfaces/catalog-selected-filters.interface'
import { QueryParamsFacets } from '../domain/types/facets-preview-request.type'
import { mapToApiFilters } from './mapToApiFilters.util'

export const buildBaseFacetsParams = (
  selected: CatalogSelectedFiltersInterface
): QueryParamsFacets => {
  const api = mapToApiFilters(selected)
  const { page, limit, sortBy, order, ...rest } = api

  const base: QueryParamsFacets = {}

  // category
  if (rest.category) base['category'] = rest.category

  // price
  if (rest.minPrice !== undefined) base['minPrice'] = rest.minPrice
  if (rest.maxPrice !== undefined) base['maxPrice'] = rest.maxPrice

  // size / color (string | string[] -> подходит под QueryValue)
  if (rest.size !== undefined) base['size'] = rest.size
  if (rest.color !== undefined) base['color'] = rest.color

  // search
  if (rest.search) base['search'] = rest.search

  /**
   * ВАЖНО:
   * - НЕ передаём brand
   * - НЕ передаём productType / dressStyle
   * preview задаёт их отдельно
   */
  return base
}
