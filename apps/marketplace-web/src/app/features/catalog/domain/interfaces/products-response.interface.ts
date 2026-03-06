import { ProductInterface } from '@marketplace/frontend-shared-types'
import { FacetItemInterface } from './catalog-facets.interface'

export interface ProductsFacets {
  brands: FacetItemInterface[]
  productTypes: FacetItemInterface[]
  dressStyles: FacetItemInterface[]
  sizes: FacetItemInterface[]
  colors: FacetItemInterface[]
}

export interface ProductsResponseInterface {
  products: ProductInterface[]
  total: number
  totalPages: number
  facets?: ProductsFacets
}

