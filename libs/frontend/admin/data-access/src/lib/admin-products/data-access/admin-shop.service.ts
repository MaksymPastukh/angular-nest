import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config'
import { ProductImageInterface, ProductInterface } from '@marketplace/frontend-shared-types'
import { Observable } from 'rxjs'
import { CreateProductFormDataInterface } from '../domain/interfaces/create-product-formData.interface'

@Injectable({
  providedIn: 'root',
})
export class AdminShopService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = `${FRONTEND_CONFIG.api}products`

  createProduct(product: CreateProductFormDataInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.apiUrl, product)
  }

  /**
   * Загружает несколько изображений продукта на сервер (до 3 штук)
   * @param files - массив файлов изображений (максимум 3)
   * @returns Observable с массивом путей к загруженным изображениям
   */
  uploadImages(files: File[]): Observable<{ imageKeys: ProductImageInterface[]; imagePaths: string[] }> {
    const formData = new FormData()

    // Добавляем все файлы в FormData с одинаковым ключом 'images'
    files.forEach((file) => {
      formData.append('images', file)
    })

    return this.http.post<{ imageKeys: ProductImageInterface[]; imagePaths: string[] }>(
      `${this.apiUrl}/upload-images`,
      formData
    )
  }
}

