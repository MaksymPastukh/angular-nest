import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config'
import {
  ReviewsPaginatedResponseInterface,
  ReviewResponseInterface,
  ReviewSortByType,
} from '@marketplace/frontend-product-util'

@Injectable({ providedIn: 'root' })
export class ReviewsService {
  private readonly http = inject(HttpClient)
  private readonly baseUrl = `${FRONTEND_CONFIG.api}reviews`

  getReviews(option: {
    productId: string
    page: number
    pageSize: number
    sortBy: ReviewSortByType
    rating?: 1 | 2 | 3 | 4 | 5
  }): Observable<ReviewsPaginatedResponseInterface> {
    let params = new HttpParams()
      .set('productId', option.productId)
      .set('page', option.page)
      .set('pageSize', option.pageSize)
      .set('sortBy', option.sortBy)

    if (option.rating) params = params.set('rating', option.rating)
    return this.http.get<ReviewsPaginatedResponseInterface>(this.baseUrl, { params })
  }
  getMyReview(productId: string): Observable<ReviewResponseInterface> {
    return this.http.get<ReviewResponseInterface>(`${this.baseUrl}/user/product/${productId}`)
  }
  create(dto: { productId: string; rating: number; text: string }) {
    return this.http.post<ReviewResponseInterface>(this.baseUrl, dto)
  }

  update(id: string, dto: { rating?: number; text?: string }) {
    return this.http.patch<ReviewResponseInterface>(`${this.baseUrl}/${id}`, dto)
  }

  remove(id: string) {
    return this.http.delete<ReviewResponseInterface>(`${this.baseUrl}/${id}`)
  }

  toggleLike(id: string) {
    return this.http.post<ReviewResponseInterface>(`${this.baseUrl}/${id}/like`, {})
  }
}
