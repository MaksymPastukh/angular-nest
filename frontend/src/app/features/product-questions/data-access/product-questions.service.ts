import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { CreateQuestionInterface } from '../domain/interfaces/create-questin.inteface'
import { ProductQuestionInterface } from '../domain/interfaces/product-question.interface'
import { QuestionsPageInterface } from '../domain/interfaces/question-page.interface'

@Injectable({ providedIn: 'root' })
export class ProductQuestionService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = `${environment.api}questions`

  public create(body: CreateQuestionInterface): Observable<ProductQuestionInterface> {
    return this.http.post<ProductQuestionInterface>(`${this.apiUrl}`, body)
  }

  public getPublic(params: {
    productId: string
    page: number
    pageSize: number
  }): Observable<QuestionsPageInterface> {
    return this.http.get<QuestionsPageInterface>(`${this.apiUrl}`, { params })
  }

  public getMy(productId: string): Observable<ProductQuestionInterface | null> {
    return this.http.get<ProductQuestionInterface>(`${this.apiUrl}/user/product/${productId}`)
  }
  public delete(id: string): Observable<ProductQuestionInterface> {
    return this.http.delete<ProductQuestionInterface>(`${this.apiUrl}${id}`)
  }
}
