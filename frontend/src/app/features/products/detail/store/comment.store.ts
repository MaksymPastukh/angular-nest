import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, concatMap, EMPTY, exhaustMap, filter, map, pipe, switchMap, tap } from 'rxjs'
import { CommentService } from '../services/comment.service'
import { CommentCreateInterface } from '../types/comment-create.interface'
import { CommentStateInterface } from '../types/comment-state.interface'
import { CommentEntity, CommentInterface } from '../types/comment.interface'
import {
  mapAndSortComments,
  mapCommentToEntity,
  mergeComments,
} from '../utils/mapMergAndSortCommnets'

const initialState: CommentStateInterface = {
  comments: [],
  productId: null,
  page: 1,
  pageSize: 20,
  total: 0,
  hasMore: true,
  isLoading: false,
  isSubmitting: false,
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
  })),
  withMethods((store, commentsService = inject(CommentService)) => {
    const setLoading = (isLoading: boolean) =>
      patchState(store, { isLoading, error: isLoading ? null : store.error() })

    const setSubmitting = (isSubmitting: boolean) =>
      patchState(store, { isSubmitting, error: isSubmitting ? null : store.error() })

    const setError = (error: string) =>
      patchState(store, {
        isLoading: false,
        isSubmitting: false,
        error,
      })

    const handleHttpError = (error: HttpErrorResponse) => {
      const message =
        (error.error as { message?: string })?.message ?? error.message ?? 'Произошла ошибка'

      setError(String(message))
    }

    const handleInitialLoad = (items: CommentInterface[], total: number) => {
      const comments: CommentEntity[] = mapAndSortComments(items)

      patchState(store, {
        comments,
        total,
        page: 1,
        hasMore: comments.length < total,
        isLoading: false,
        error: null,
      })
    }

    const handleNextPage = (items: CommentInterface[], total: number) => {
      const merged: CommentEntity[] = mergeComments(store.comments(), items)

      patchState(store, {
        comments: merged,
        total,
        page: store.page() + 1,
        hasMore: merged.length < total,
        isLoading: false,
      })
    }

    return {
      loadComments: rxMethod<{ productId: string }>(
        pipe(
          tap(({ productId }) => {
            patchState(store, {
              ...initialState,
              productId,
              isLoading: true,
            })
          }),
          switchMap(({ productId }) => {
            return commentsService.getProductComments(productId, 1, store.pageSize()).pipe(
              tap(({ items, total }) => {
                handleInitialLoad(items, total)
              }),
              catchError((error: HttpErrorResponse) => {
                console.error('❌ API Error:', error)
                handleHttpError(error)
                return EMPTY
              })
            )
          })
        )
      ),
      /**
       * Загрузить следующую страницу комментариев
       */
      loadNextPage: rxMethod<void>(
        pipe(
          filter(() => store.hasMore() && !store.isLoading()),
          tap(() => setLoading(true)),
          switchMap(() => {
            const nextPage = store.page() + 1
            return commentsService
              .getProductComments(store.productId(), nextPage, store.pageSize())
              .pipe(
                tap(({ items, total }) => {
                  handleNextPage(items, total)
                }),
                catchError((error: HttpErrorResponse) => {
                  handleHttpError(error)
                  return EMPTY
                })
              )
          })
        )
      ),

      /**
       * Создать комментарий
       */
      createComment: rxMethod<{ productId: string; comment: CommentCreateInterface }>(
        pipe(
          tap(() => setSubmitting(true)),
          concatMap(({ productId, comment }) =>
            commentsService.createComment(productId, comment).pipe(
              tap((created) => {
                patchState(store, {
                  comments: mapAndSortComments([created, ...store.comments()]),
                  total: store.total() + 1,
                  isSubmitting: false,
                })
              }),
              catchError((error: HttpErrorResponse) => {
                handleHttpError(error)
                return EMPTY
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
          tap(() => setLoading(true)),
          exhaustMap((commentId) =>
            commentsService.deleteComment(commentId).pipe(
              tap(() => {
                patchState(store, {
                  comments: store.comments().filter((c) => c._id !== commentId),
                  total: store.total() - 1,
                  isSubmitting: false,
                })
              }),
              catchError((error: HttpErrorResponse) => {
                handleHttpError(error)
                return EMPTY
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
          exhaustMap((commentId) =>
            commentsService.toggleLike(commentId).pipe(
              map(mapCommentToEntity),
              tap((updated) => {
                patchState(store, {
                  comments: store.comments().map((c) => (c._id === updated._id ? updated : c)),
                })
              }),
              catchError((error: HttpErrorResponse) => {
                handleHttpError(error)
                return EMPTY
              })
            )
          )
        )
      ),

      reset: () => patchState(store, initialState),
      clearError: () => patchState(store, { error: null }),
    }
  })
)
