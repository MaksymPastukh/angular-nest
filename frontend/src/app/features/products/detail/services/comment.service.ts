import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { catchError, Observable } from 'rxjs'
import { environment } from '../../../../../environments/environment'
import { ProductType } from '../types/product.interface'
import { CommentCreateInterface } from '../types/comments-create.interface'

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = `${environment.api}products`

  /**
   * Получить комментарии продукта
   * @param productId - ID продукта
   */
  getComments(productId: string): Observable<ProductType> {
    return this.http.get<ProductType>(`${this.apiUrl}/${productId}`)
  }

  /**
   * Добавить комментарий к продукту
   * @param productId - ID продукта
   * @param comment - Данные комментария
   */
  addComment(productId: string, comment: CommentCreateInterface): Observable<ProductType> {
    return this.http.post<ProductType>(`${this.apiUrl}/${productId}/comments`, comment).pipe(
      catchError((error) => {
        throw error
      })
    )
  }

  /**
   * Удалить комментарий
   * @param productId - ID продукта
   * @param commentId - ID комментария
   */
  deleteComment(productId: string, commentId: string): Observable<ProductType> {
    return this.http.delete<ProductType>(`${this.apiUrl}/${productId}/comments/${commentId}`)
  }

  /**
   * Лайкнуть/дизлайкнуть комментарий
   * @param productId - ID продукта
   * @param commentId - ID комментария
   */
  toggleLikeComment(productId: string, commentId: string): Observable<ProductType> {
    return this.http.post<ProductType>(`${this.apiUrl}/${productId}/comments/${commentId}/like`, {})
  }
}
