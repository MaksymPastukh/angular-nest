import { ProductType } from './product.interface'
export interface ProductsResponse {
  products: ProductType[]
  total: number
  page: number
  limit: number
  totalPages: number
}
