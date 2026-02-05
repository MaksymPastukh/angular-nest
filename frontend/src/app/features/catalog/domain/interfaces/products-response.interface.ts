import { FacetItemInterface } from './catalog-facets.interface'
import { ProductInterface } from './product.interface'

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
