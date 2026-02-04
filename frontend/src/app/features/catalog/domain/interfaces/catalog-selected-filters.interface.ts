export interface CatalogSelectedFiltersInterface {
  priceRange: [number, number]
  selectedSizes: string[]
  selectedColors: string[]
  selectedCategory: string | null
  selectedTypeKey: string | null
  selectedStyleKey: string | null
  searchQuery: string
}
