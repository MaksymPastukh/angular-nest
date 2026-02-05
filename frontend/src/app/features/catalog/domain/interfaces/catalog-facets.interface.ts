export interface FacetItemInterface {
  value: string
  count: number
}

export interface FacetsResponseInterface {
  brands: FacetItemInterface[]
  productTypes: FacetItemInterface[]
  dressStyles: FacetItemInterface[]
  sizes: FacetItemInterface[]
  colors: FacetItemInterface[]
}
