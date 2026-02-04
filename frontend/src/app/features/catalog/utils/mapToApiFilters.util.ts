import { CatalogFilterParamsInterface } from '../domain/interfaces/catalog-filter-params.interface'
import { CatalogSelectedFiltersInterface } from '../domain/interfaces/catalog-selected-filters.interface'
import { ParseKeyInterface } from '../domain/interfaces/parse-key.interface'

const DEFAULT_MIN_PRICE = 70
const DEFAULT_MAX_PRICE = 270

function arrayToStringOrArray(items: string[]): string | string[] | undefined {
  if (items.length === 0) return undefined
  return items.length === 1 ? items[0] : items
}

function parseKey(value: string): ParseKeyInterface {
  const [v, b] = value.split(':')
  const valueTrimmed = v?.trim() ?? ''
  const brandTrimmed = b?.trim() ?? ''

  return brandTrimmed ? { value: valueTrimmed, brand: brandTrimmed } : { value: valueTrimmed }
}

/**
 * Конвертирует UI фильтры в API параметры
 */
export function mapToApiFilters(
  filters: CatalogSelectedFiltersInterface
): CatalogFilterParamsInterface {
  const params: CatalogFilterParamsInterface = {}

  if (filters.selectedCategory) {
    params.category = filters.selectedCategory
  }

  const search = filters.searchQuery.trim()
  if (search) {
    params.search = search
  }

  const [minPrice, maxPrice] = filters.priceRange
  if (minPrice !== DEFAULT_MIN_PRICE) params.minPrice = minPrice
  if (maxPrice !== DEFAULT_MAX_PRICE) params.maxPrice = maxPrice

  const size = arrayToStringOrArray(filters.selectedSizes)
  if (size !== undefined) {
    params.size = size
  }

  const color = arrayToStringOrArray(filters.selectedColors)
  if (color !== undefined) {
    params.color = color
  }

  if (filters.selectedTypeKey) {
    const { value: productType, brand } = parseKey(filters.selectedTypeKey)
    if (productType) {
      params.productType = productType
    }

    if (brand) {
      params.brand = brand
    }
    return params
  }

  if (filters.selectedStyleKey) {
    const { value: dressStyle, brand } = parseKey(filters.selectedStyleKey)
    if (dressStyle) {
      params.dressStyle = dressStyle
    }

    if (brand) {
      params.brand = brand
    }
  }

  return params
}
