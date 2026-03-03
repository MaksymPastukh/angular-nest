import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { ProductDetailInterface } from '../domain/interfaces/product-detail.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductsDetailService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = `${environment.api}products`

  getProductById(id: string): Observable<ProductDetailInterface> {
    return this.http.get<ProductDetailInterface>(`${this.apiUrl}/${id}`)
  }
}
