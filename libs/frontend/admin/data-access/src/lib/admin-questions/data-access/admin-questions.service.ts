import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config'
import { ProductQuestionInterface, QuestionsPageInterface } from '@marketplace/frontend-product-util'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AdminQuestionsService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = `${FRONTEND_CONFIG.api}questions`

  public getQuestions(params: {
    page: number
    pageSize: number
    status: string
    productId?: string
  }): Observable<QuestionsPageInterface> {
    let httpParams = new HttpParams()
      .set('page', String(params.page))
      .set('pageSize', String(params.pageSize))
      .set('status', params.status)

    if (params.productId) httpParams = httpParams.set('productId', params.productId)

    return this.http.get<QuestionsPageInterface>(this.apiUrl, {
      params: httpParams,
    })
  }

  public answerQuestion(
    id: string,
    body: { answer: string }
  ): Observable<ProductQuestionInterface> {
    return this.http.patch<ProductQuestionInterface>(`${this.apiUrl}/${id}/answer`, body)
  }
}
