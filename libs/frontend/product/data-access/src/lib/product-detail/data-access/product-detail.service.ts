import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config'
import { ProductDetailInterface } from '@marketplace/frontend-product-util'

@Injectable({
  providedIn: 'root',
})
export class ProductsDetailService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = `${FRONTEND_CONFIG.api}products`

  getProductById(id: string): Observable<ProductDetailInterface> {
    return this.http.get<ProductDetailInterface>(`${this.apiUrl}/${id}`)
  }
}
