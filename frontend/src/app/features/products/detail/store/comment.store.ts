import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import {
  catchError,
  concatMap,
  EMPTY,
  exhaustMap,
  filter,
  map,
  Observable,
  pipe,
  switchMap,
  tap,
} from 'rxjs'
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
    hasComments: computed(() => store.comments().length > 0),
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

    const toggleLikeOptimistic = (commentId: string) => {
      patchState(store, {
        comments: store.comments().map((itemC) => {
          if (itemC.id !== commentId) return itemC

          const currentIsLiked = itemC.isLiked ?? false

          return {
            ...itemC,
            isLiked: !currentIsLiked,
            likesCount: currentIsLiked ? (itemC.likesCount ?? 0) - 1 : (itemC.likesCount ?? 0) + 1,
          }
        }),
      })
    }

    const toggleLikeRollback = (commentId: string) => {
      patchState(store, {
        comments: store.comments().map((itemC) => {
          if (itemC.id !== commentId) return itemC

          const currentIsLiked = itemC.isLiked ?? false

          return {
            ...itemC,
            isLiked: !currentIsLiked,
            likesCount: currentIsLiked ? (itemC.likesCount ?? 0) - 1 : (itemC.likesCount ?? 0) + 1,
          }
        }),
      })
    }

    const toggleLikeRx = rxMethod<string>(
      pipe(
        exhaustMap((commentId) =>
          commentsService.toggleLike(commentId).pipe(
            map(mapCommentToEntity),
            tap((updated) => {
              patchState(store, {
                comments: store.comments().map((c) => (c.id === updated.id ? updated : c)),
              })
            }),
            catchError((error: HttpErrorResponse): Observable<never> => {
              toggleLikeRollback(commentId)
              handleHttpError(error)
              return EMPTY
            })
          )
        )
      )
    )

    const toggleLike = (commentId: string) => {
      toggleLikeOptimistic(commentId)
      toggleLikeRx(commentId)
    }

    return {
      loadComments: rxMethod<{ productId: string }>(
        pipe(
          tap(({ productId }) => {
            patchState(store, {
              ...initialState,
              productId,
            })
            setLoading(true)
          }),
          switchMap(({ productId }) => {
            return commentsService.getProductComments(productId, 1, store.pageSize()).pipe(
              tap(({ items, total }) => {
                handleInitialLoad(items, total)
              }),
              catchError((error: HttpErrorResponse): Observable<never> => {
                handleHttpError(error)
                return EMPTY
              })
            )
          })
        )
      ),
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
                catchError((error: HttpErrorResponse): Observable<never> => {
                  handleHttpError(error)
                  return EMPTY
                })
              )
          })
        )
      ),
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
              catchError((error: HttpErrorResponse): Observable<never> => {
                handleHttpError(error)
                return EMPTY
              })
            )
          )
        )
      ),
      deleteComment: rxMethod<{ commentId: string }>(
        pipe(
          tap(() => setLoading(true)),
          exhaustMap(({ commentId }) =>
            commentsService.deleteComment(commentId).pipe(
              tap(() => {
                patchState(store, {
                  comments: store.comments().filter((c) => c.id !== commentId),
                  total: store.total() - 1,
                })
                setLoading(false)
                setSubmitting(false)
              }),
              catchError((error: HttpErrorResponse): Observable<never> => {
                handleHttpError(error)
                return EMPTY
              })
            )
          )
        )
      ),
      toggleLike,
      reset: () => patchState(store, initialState),
      clearError: () => patchState(store, { error: null }),
    }
  })
)
