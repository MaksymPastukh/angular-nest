import { CatalogSelectedFiltersInterface } from '../domain/interfaces/catalog-selected-filters.interface'
import { ParsedUrlParamsInterface } from '../domain/interfaces/parsed-url-params.interface'

const DEFAULT_MIN_PRICE = 70
const DEFAULT_MAX_PRICE = 270

export function parsedToSelected(
  parsed: ParsedUrlParamsInterface
): CatalogSelectedFiltersInterface {
  const min = parsed.minPrice ?? DEFAULT_MIN_PRICE
  const max = parsed.maxPrice ?? DEFAULT_MAX_PRICE

  const selectedTypeKey = parsed.productType ? `${parsed.productType}:${parsed.brand ?? ''}` : null

  // style применяется только если НЕТ productType (как и в mapToApiFilters)
  const selectedStyleKey =
    !parsed.productType && parsed.dressStyle ? `${parsed.dressStyle}:${parsed.brand ?? ''}` : null

  return {
    priceRange: [min, max],
    selectedSizes: parsed.sizes ?? [],
    selectedColors: parsed.colors ?? [],
    selectedCategory: parsed.category ?? null,
    selectedTypeKey,
    selectedStyleKey,
    searchQuery: parsed.search ?? '',
  }
}
