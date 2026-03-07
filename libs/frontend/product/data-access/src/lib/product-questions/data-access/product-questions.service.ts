import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config'
import {
  CreateQuestionInterface,
  ProductQuestionInterface,
  QuestionsPageInterface,
} from '@marketplace/frontend-product-util'

@Injectable({ providedIn: 'root' })
export class ProductQuestionService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = `${FRONTEND_CONFIG.api}questions`

  public createQuestion(body: CreateQuestionInterface): Observable<ProductQuestionInterface> {
    return this.http.post<ProductQuestionInterface>(`${this.apiUrl}`, body)
  }

  public getAllQuestions(params: {
    productId: string
    page: number
    pageSize: number
  }): Observable<QuestionsPageInterface> {
    return this.http.get<QuestionsPageInterface>(`${this.apiUrl}`, { params })
  }

  public getMyQuestion(productId: string): Observable<ProductQuestionInterface | null> {
    return this.http.get<ProductQuestionInterface>(`${this.apiUrl}/user/product/${productId}`)
  }
  public removeQuestion(id: string): Observable<ProductQuestionInterface> {
    return this.http.delete<ProductQuestionInterface>(`${this.apiUrl}/${id}`)
  }
}
