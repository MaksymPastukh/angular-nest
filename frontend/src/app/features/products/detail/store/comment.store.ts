import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, of, pipe, switchMap, tap } from 'rxjs'
import { CommentService } from '../services/comment.service'
import { CommentStateInterface } from '../types/comment-state.interface'
import { CommentInterface } from '../types/comment.interface'
import { CommentCreateInterface } from '../types/comments-create.interface'
import { ProductType } from '../types/product.interface'

const initialState: CommentStateInterface = {
  comments: [],
  productId: null,
  isLoading: false,
  isSubmitting: false,
  error: null,
  total: 0,
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
      return [...store.comments()].sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0
        return dateB - dateA
      })
    }),
  })),

  withMethods((store, commentService = inject(CommentService)) => {
    /* ---------- HELPERS ---------- */

    /**
     * Установить состояние загрузки
     */
    const setLoading = (isLoading: boolean) => {
      patchState(store, { isLoading, error: isLoading ? null : store.error() })
    }

    /**
     * Установить состояние отправки
     */
    const setSubmitting = (isSubmitting: boolean) => {
      patchState(store, { isSubmitting, error: isSubmitting ? null : store.error() })
    }

    /**
     * Установить ошибку
     */
    const setError = (error: string) => {
      patchState(store, { isLoading: false, isSubmitting: false, error })
    }

    /**
     * Обработка успешного получения комментариев из продукта
     */
    const handleProductSuccess = (product: ProductType) => {
      const comments = (product.userComments ?? []) as unknown as CommentInterface[]
      patchState(store, {
        comments,
        total: comments.length,
        isLoading: false,
        isSubmitting: false,
        error: null,
      })
    }

    /**
     * Обработка ошибки HTTP
     */
    function handleError(error: HttpErrorResponse) {
      const errorMessage = error.error as { message?: string } | undefined
      const message = String(errorMessage?.message ?? error.message ?? 'Произошла ошибка')
      setError(message)
    }

    /* ---------- PUBLIC METHODS ---------- */

    return {
      loadComments: rxMethod<string>(
        pipe(
          tap((productId) => {
            setLoading(true)
            patchState(store, { productId })
          }),
          switchMap((productId: string) =>
            commentService.getComments(productId).pipe(
              tap((product: ProductType) => {
                handleProductSuccess(product)
              }),
              catchError((error: HttpErrorResponse) => {
                handleError(error)
                return of(null)
              })
            )
          )
        )
      ),

      addComment: rxMethod<{ productId: string; comment: CommentCreateInterface }>(
        pipe(
          tap(() => setSubmitting(true)),
          switchMap(({ productId, comment }) =>
            commentService.addComment(productId, comment).pipe(
              tap((product) => {
                handleProductSuccess(product)
              }),
              catchError((error: HttpErrorResponse) => {
                handleError(error)
                return of(null)
              })
            )
          )
        )
      ),

      deleteComment: rxMethod<{ productId: string; commentId: string }>(
        pipe(
          tap(() => setSubmitting(true)),
          switchMap(({ productId, commentId }) =>
            commentService.deleteComment(productId, commentId).pipe(
              tap((product) => {
                handleProductSuccess(product)
              }),
              catchError((error: HttpErrorResponse) => {
                handleError(error)
                return of(null)
              })
            )
          )
        )
      ),

      toggleLikeComment: rxMethod<{ productId: string; commentId: string }>(
        pipe(
          switchMap(({ productId, commentId }) =>
            commentService.toggleLikeComment(productId, commentId).pipe(
              tap((product) => {
                handleProductSuccess(product)
              }),
              catchError((error: HttpErrorResponse) => {
                handleError(error)
                return of(null)
              })
            )
          )
        )
      ),

      reset: () => {
        patchState(store, initialState)
      },

      clearError: () => {
        patchState(store, { error: null })
      },
    }
  })
)
