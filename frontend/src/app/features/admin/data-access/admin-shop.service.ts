import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { ProductInterface } from '../../../shared/domain/interfaces/product.interface'

@Injectable({
  providedIn: 'root',
})
export class AdminShopService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = `${environment.api}products`

  createProduct(product: Omit<ProductInterface, 'id'>): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.apiUrl, product)
  }

  /**
   * Загружает изображение продукта на сервер
   * @param file - файл изображения
   * @returns Observable с путем к загруженному изображению
   */
  uploadImage(file: File): Observable<{ imagePath: string }> {
    const formData = new FormData()
    formData.append('image', file)

    return this.http.post<{ imagePath: string }>(`${this.apiUrl}/upload-image`, formData)
  }
}
