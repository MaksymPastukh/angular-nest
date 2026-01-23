import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../../../environments/environment'
import { CommentCreateInterface } from '../types/comment-create.interface'
import { CommentsPaginatedResponse } from '../types/comments-paginated-response.interface'
import { CommentInterface } from '../types/comment.interface'

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
  createComment(productId: string, comment: CommentCreateInterface): Observable<CommentInterface> {
    return this.http.post<CommentInterface>(`${this.apiUrl}/product/${productId}`, comment)
  }

  /**
   * Получить все комментарии продукта с пагинацией
   */
  getProductComments(
    productId: string | null,
    page: number = 1,
    pageSize: number = 20
  ): Observable<CommentsPaginatedResponse> {
    const params = new HttpParams()
      .set('productId', productId as string)
      .set('page', page.toString())
      .set('pageSize', pageSize.toString())

    return this.http.get<CommentsPaginatedResponse>(this.apiUrl, { params })
  }

  /**
   * Получить комментарий по ID
   */
  getCommentById(commentId: string): Observable<CommentInterface> {
    return this.http.get<CommentInterface>(`${this.apiUrl}/${commentId}`)
  }

  /**
   * Обновить комментарий
   */
  updateComment(
    commentId: string,
    upComment: CommentCreateInterface
  ): Observable<CommentInterface> {
    return this.http.patch<CommentInterface>(`${this.apiUrl}/${commentId}`, upComment)
  }

  /**
   * Удалить комментарий
   */
  deleteComment(commentId: string): Observable<CommentInterface> {
    return this.http.delete<CommentInterface>(`${this.apiUrl}/${commentId}`)
  }

  /**
   * Лайкнуть/убрать лайк с комментария
   */
  toggleLike(commentId: string): Observable<CommentInterface> {
    return this.http.post<CommentInterface>(`${this.apiUrl}/${commentId}/like`, {})
  }
}
