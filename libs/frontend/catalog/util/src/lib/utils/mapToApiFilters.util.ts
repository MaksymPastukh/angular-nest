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

  // Category - всегда устанавливаем (undefined если не выбрано)
  params.category = filters.selectedCategory ?? undefined

  // Search
  const search = filters.searchQuery.trim()
  params.search = search || undefined

  // Price
  const [minPrice, maxPrice] = filters.priceRange
  if (minPrice !== DEFAULT_MIN_PRICE) params.minPrice = minPrice
  if (maxPrice !== DEFAULT_MAX_PRICE) params.maxPrice = maxPrice

  // Всегда устанавливаем size и color, даже если undefined
  // Это важно для корректного удаления фильтров
  const size = arrayToStringOrArray(filters.selectedSizes)
  params.size = size

  const color = arrayToStringOrArray(filters.selectedColors)
  params.color = color

  // ProductType/Brand или DressStyle/Brand
  if (filters.selectedTypeKey) {
    const { value: productType, brand } = parseKey(filters.selectedTypeKey)
    params.productType = productType || undefined
    params.brand = brand ?? undefined
    // Явно сбрасываем dressStyle если выбран productType
    params.dressStyle = undefined
    return params
  }

  if (filters.selectedStyleKey) {
    const { value: dressStyle, brand } = parseKey(filters.selectedStyleKey)
    params.dressStyle = dressStyle || undefined
    params.brand = brand ?? undefined
    // Явно сбрасываем productType если выбран dressStyle
    params.productType = undefined
    return params
  }

  // Если ничего не выбрано - явно устанавливаем undefined
  params.productType = undefined
  params.dressStyle = undefined
  params.brand = undefined

  return params
}
