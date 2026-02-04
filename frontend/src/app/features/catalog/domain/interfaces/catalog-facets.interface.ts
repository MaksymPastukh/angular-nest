export interface FacetItemInterface {
  value: string
  count: number
}

export interface FacetsResponseInterface {
  brands: FacetItemInterface[]
  productTypes: FacetItemInterface[]
  dressStyless: FacetItemInterface[]
  sizes: FacetItemInterface[]
  colors: FacetItemInterface[]
}
