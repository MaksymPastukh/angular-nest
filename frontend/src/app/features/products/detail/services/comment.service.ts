import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../../../environments/environment'
import { CommentCreateInterface } from '../types/comment-create.interface'
import { CommentResponse } from '../types/comment-response.interface'

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = `${environment.api}comments`

  /**
   * Получить комментарии продукта
   * @param productId - ID продукта
   * @param comment - Комментарий
   */
  createComment(productId: string, comment: CommentCreateInterface): Observable<CommentResponse> {
    return this.http.post<CommentResponse>(`${this.apiUrl}/${productId}`, comment)
  }

  /**
   * Получить все комментарии продукта
   */
  getProductComments(productId: string): Observable<CommentResponse[]> {
    return this.http.get<CommentResponse[]>(`${this.apiUrl}/product/${productId}`)
  }

  /**
   * Получить комментарий по ID
   */
  getCommentById(commentId: string): Observable<CommentResponse> {
    return this.http.get<CommentResponse>(`${this.apiUrl}/${commentId}`)
  }

  /**
   * Обновить комментарий
   */
  updateComment(commentId: string, upComment: CommentCreateInterface): Observable<CommentResponse> {
    return this.http.patch<CommentResponse>(`${this.apiUrl}/${commentId}`, upComment)
  }

  /**
   * Удалить комментарий
   */
  deleteComment(commentId: string): Observable<CommentResponse> {
    return this.http.delete<CommentResponse>(`${this.apiUrl}/${commentId}`)
  }

  /**
   * Лайкнуть/убрать лайк с комментария
   */
  toggleLike(commentId: string): Observable<CommentResponse> {
    return this.http.post<CommentResponse>(`${this.apiUrl}/${commentId}/like`, {})
  }
}
