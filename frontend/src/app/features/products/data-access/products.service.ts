import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { FacetsResponseInterface } from '../../catalog/domain/interfaces/catalog-facets.interface'
import { CatalogFilterParamsInterface } from '../../catalog/domain/interfaces/catalog-filter-params.interface'
import { ProductInterface } from '../domain/interfaces/product.interface'
import { ProductsResponseInterface } from '../domain/interfaces/products-response.interface'
import { toHttpParams } from '../utils/to-http-params.util'
import { QueryParamsFacets } from '../../catalog/domain/types/facets-preview-request.type'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = `${environment.api}products`

  getAllProducts(): Observable<ProductsResponseInterface> {
    return this.http.get<ProductsResponseInterface>(this.apiUrl)
  }

  getFacets(params: QueryParamsFacets) {
    return this.http.get<FacetsResponseInterface>(`${this.apiUrl}/facets`, {
      params: toHttpParams(params),
    })
  }

  getFilteredProducts(
    filters: CatalogFilterParamsInterface
  ): Observable<ProductsResponseInterface> {
    // Создаем параметры запроса, исключая пустые значения
    let params = new HttpParams()

    // Добавляем параметры только если они определены
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        // Если значение это массив - добавляем каждый элемент отдельно
        if (Array.isArray(value)) {
          value.forEach((item: string) => {
            params = params.append(key, item.toString())
          })
        } else {
          params = params.append(key, String(value))
        }
      }
    })

    return this.http.get<ProductsResponseInterface>(this.apiUrl, { params })
  }

  getProductById(id: string): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`${this.apiUrl}/${id}`)
  }

  updateProduct(id: string, product: Partial<ProductInterface>): Observable<ProductInterface> {
    return this.http.patch<ProductInterface>(`${this.apiUrl}/${id}`, product)
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/categories`)
  }

  getProductTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/product-types`)
  }

  getDressStyles(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/dress-styles`)
  }

  getBrands(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/brands`)
  }

  getColors(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/colors`)
  }

  getSizes(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/filters/sizes`)
  }

  searchProducts(
    searchQuery: string,
    additionalFilters?: Partial<CatalogFilterParamsInterface>
  ): Observable<ProductsResponseInterface> {
    const filters: CatalogFilterParamsInterface = {
      search: searchQuery,
      ...(additionalFilters ?? {}),
    }
    return this.getFilteredProducts(filters)
  }

  getTopRatedProducts(
    minRating: number = 4.5,
    limit: number = 20
  ): Observable<ProductsResponseInterface> {
    return this.getFilteredProducts({
      minRating,
      sortBy: 'rating',
      order: 'desc',
      limit,
    })
  }

  getNewArrivals(limit: number = 15): Observable<ProductsResponseInterface> {
    return this.getFilteredProducts({
      sortBy: 'createdAt',
      order: 'desc',
      limit,
    })
  }

  getProductsByPriceRange(
    minPrice: number,
    maxPrice: number,
    additionalFilters?: Partial<CatalogFilterParamsInterface>
  ): Observable<ProductsResponseInterface> {
    return this.getFilteredProducts({
      minPrice,
      maxPrice,
      ...additionalFilters,
    })
  }

  getCheapProducts(
    maxPrice: number = 2000,
    limit: number = 10
  ): Observable<ProductsResponseInterface> {
    return this.getFilteredProducts({
      maxPrice,
      sortBy: 'price',
      order: 'asc',
      limit,
    })
  }

  toggleLike(productId: string): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(`${this.apiUrl}/${productId}/like`, {})
  }

  getLikedProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`${this.apiUrl}/liked/me`)
  }
}
