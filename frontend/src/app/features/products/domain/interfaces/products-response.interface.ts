import { ProductInterface } from './product.interface'

export interface ProductsResponseInterface {
  products: ProductInterface[]
  total: number
  page: number
  limit: number
  totalPages: number
}
