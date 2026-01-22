import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, of, pipe, switchMap, tap } from 'rxjs'
import { CommentService } from '../services/comment.service'
import { CommentCreateInterface } from '../types/comment-create.interface'
import { CommentResponse } from '../types/comment-response.interface'
import { CommentStateInterface } from '../types/comment-state.interface'

const initialState: CommentStateInterface = {
  comments: [],
  currentProductId: null,
  isLoading: false,
  error: null,
}

export const CommentStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => ({
    /** Есть ли комментарии */
    hasComments: computed(() => store.comments().length > 0),

    /** Количество комментариев */
    commentsCount: computed(() => store.comments().length),

    /** Отсортированные комментарии (новые сверху) */
    sortedComments: computed(() => {
      return [...store.comments()].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    }),
  })),
  withMethods((store, commentsService = inject(CommentService)) => ({
    /**
     * Загрузить комментарии для продукта
     */
    loadComments: rxMethod<string>(
      pipe(
        tap((productId) => {
          patchState(store, { isLoading: true, error: null, currentProductId: productId })
        }),
        switchMap((productId: string) =>
          commentsService.getProductComments(productId).pipe(
            tap((response: CommentResponse[]) => {
              patchState(store, {
                comments: response,
                isLoading: false,
              })
            }),
            catchError((error: HttpErrorResponse) => {
              patchState(store, {
                comments: [],
                isLoading: false,
                error: (error?.error as { message?: string }).message ?? 'Failed to load comments',
              })
              return of(null)
            })
          )
        )
      )
    ),

    /**
     * Создать комментарий
     */
    createComment: rxMethod<{ productId: string; comment: CommentCreateInterface }>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap(({ productId, comment }) =>
          commentsService.createComment(productId, comment).pipe(
            tap((response: CommentResponse) => {
              const comment: CommentResponse = {
                ...response,
                likesCount: 0,
                isLiked: false,
              }
              patchState(store, {
                comments: [comment, ...store.comments()],
                isLoading: false,
              })
            }),
            catchError((error: HttpErrorResponse) => {
              patchState(store, {
                error:
                  (error?.error as { message?: string }).message ?? 'Ошибка создания комментария',
                isLoading: false,
              })
              return of(null)
            })
          )
        )
      )
    ),

    /**
     * Обновить комментарий
     */
    updateComment: rxMethod<{ commentId: string; upComment: CommentCreateInterface }>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap(({ commentId, upComment }) =>
          commentsService.updateComment(commentId, upComment).pipe(
            tap((response: CommentResponse) => {
              const comments = store
                .comments()
                .map((c) =>
                  c.id === commentId
                    ? { ...c, text: response.text, updatedAt: response.updatedAt }
                    : c
                )
              patchState(store, { comments, isLoading: false })
            }),
            catchError((error: HttpErrorResponse) => {
              patchState(store, {
                error:
                  (error?.error as { message?: string }).message ?? 'Ошибка обновления комментария',
                isLoading: false,
              })
              return of(null)
            })
          )
        )
      )
    ),

    /**
     * Удалить комментарий
     */
    deleteComment: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap((commentId) =>
          commentsService.deleteComment(commentId).pipe(
            tap(() => {
              const comments = store.comments().filter((c) => c.id !== commentId)
              patchState(store, { comments, isLoading: false })
            }),
            catchError((error: HttpErrorResponse) => {
              patchState(store, {
                error:
                  (error?.error as { message?: string }).message ?? 'Ошибка удаления комментария',
                isLoading: false,
              })
              return of(null)
            })
          )
        )
      )
    ),

    /**
     * Лайкнуть/убрать лайк
     */
    toggleLike: rxMethod<string>(
      pipe(
        switchMap((commentId) =>
          commentsService.toggleLike(commentId).pipe(
            tap((response: CommentResponse) => {
              const comments = store.comments().map((c) => (c.id === commentId ? response : c))
              patchState(store, { comments })
            }),
            catchError((error: HttpErrorResponse) => {
              patchState(store, {
                error:
                  (error?.error as { message?: string }).message ?? 'Ошибка при лайке комментария',
              })
              return of(null)
            })
          )
        )
      )
    ),

    /**
     * Очистить состояние
     */
    reset: () => patchState(store, initialState),
  }))
)
