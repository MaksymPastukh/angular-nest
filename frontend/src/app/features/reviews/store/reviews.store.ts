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
  Observable,
  pipe,
  switchMap,
  tap,
} from 'rxjs'
import { ReviewsService } from '../data-access/reviews.service'
import { CreateReviewInterface } from '../domain/interfaces/create-review.interface'
import { ReviewsPageChangeInterface } from '../domain/interfaces/reviews-page-change.interface'
import { ReviewsPaginatedResponseInterface } from '../domain/interfaces/reviews-paginated-response.interface'
import { ReviewResponseInterface } from '../domain/interfaces/reviews-response.interface'
import { ReviewsStateInterface } from '../domain/interfaces/reviews-state.interface'
import { ReviewsSummaryInterface } from '../domain/interfaces/reviews-summary'
import { UpdateReviewInterface } from '../domain/interfaces/update-review.interface'
import { RatingFilterType } from '../domain/types/reviews-rating.type'
import { ReviewSortByType } from '../domain/types/reviews-sortBy.type'

const initialState: ReviewsStateInterface = {
  productId: null,
  items: [],
  total: 0,
  page: 1,
  pageSize: 10,
  sortBy: 'newest',
  ratingFilter: null,
  summary: null,
  myReview: null,
  isLoading: false,
  isSubmitting: false,
  isLoadingMy: false,
  error: null,
}

export const ReviewsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    hasProduct: computed(() => !!store.productId()),
    hasMore: computed(() => store.items().length < store.total()),
    canLoadMore: computed(
      () => !!store.productId() && !store.isLoading() && store.items().length < store.total()
    ),
    isEmpty: computed(() => !store.isLoading() && store.items().length === 0),
    avg: computed(() => store.summary()?.avg ?? 0),
    count: computed(() => store.summary()?.count ?? 0),
    distribution: computed(
      () =>
        store.summary()?.distribution ?? {
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 0,
          '5': 0,
        }
    ),
  })),
  withMethods((store, reviewsService = inject(ReviewsService)) => {
    const setPending = (kind: 'list' | 'submit' | 'my' = 'list'): void => {
      if (kind === 'list') patchState(store, { isLoading: true, error: null })
      if (kind === 'submit') patchState(store, { isSubmitting: true, error: null })
      if (kind === 'my') patchState(store, { isLoadingMy: true })
    }

    const setListSuccess = (
      response: ReviewsPaginatedResponseInterface,
      mode: 'replace' | 'append'
    ): void => {
      patchState(store, {
        items: mode === 'replace' ? response.items : [...store.items(), ...response.items],
        total: response.total,
        page: response.page,
        pageSize: response.pageSize,
        summary: response.summary,
        isLoading: false,
        error: null,
      })
    }

    const setMySuccess = (myReview: ReviewResponseInterface | null): void => {
      patchState(store, { myReview, isLoadingMy: false })
    }

    const setSubmitSuccess = (): void => {
      patchState(store, { isSubmitting: false })
    }

    const setFailure = (message: string): void => {
      patchState(store, {
        error: { message },
        isLoading: false,
        isSubmitting: false,
        isLoadingMy: false,
      })
    }

    const getErrorMessage = (error: unknown): string => {
      if (!(error instanceof HttpErrorResponse)) return `An unknown error occurred.`

      const apiMessage = (error.error as { message?: unknown })?.message

      if (typeof apiMessage === 'string') return apiMessage
      if (Array.isArray(apiMessage)) return apiMessage.join(' ')

      return error.message ?? `Request failed with status ${error.status}.`
    }

    const requireProductId = <T>() => pipe(filter<T>(() => !!store.productId()))

    const loadCommand = (mode: 'replace' | 'append') =>
      pipe(
        requireProductId<void>(),
        tap<void>(() => setPending('list')),
        switchMap(() =>
          reviewsService
            .getReviews({
              productId: store.productId() as string,
              page: mode === 'replace' ? 1 : store.page() + 1,
              pageSize: store.pageSize(),
              sortBy: store.sortBy(),
              rating: store.ratingFilter() ?? undefined,
            })
            .pipe(
              tap((response) => setListSuccess(response, mode)),
              catchError((error) => {
                setFailure(getErrorMessage(error))
                return EMPTY
              })
            )
        )
      )

    const myReviewCommand = () =>
      pipe(
        requireProductId<void>(),
        tap<void>(() => setPending('my')),
        switchMap(() =>
          reviewsService.getMyReview(store.productId() as string).pipe(
            tap((myReview) => setMySuccess(myReview)),
            catchError(() => {
              setMySuccess(null)
              return EMPTY
            })
          )
        )
      )

    const submitCommand = <T>(
      request: (data: T) => Observable<unknown>,
      afterSuccess: () => void
    ) =>
      pipe(
        tap<T>(() => setPending('submit')),
        exhaustMap((data: T) =>
          request(data).pipe(
            tap(() => {
              setSubmitSuccess()
              afterSuccess()
            }),
            catchError((error) => {
              setFailure(getErrorMessage(error))
              return EMPTY
            })
          )
        )
      )

    const likeCommand = () =>
      pipe(
        concatMap<{ id: string }, Observable<ReviewResponseInterface>>(({ id }) =>
          reviewsService.toggleLike(id).pipe(
            tap((updated) => {
              patchState(store, {
                items: store.items().map((r) => (r.id === updated.id ? updated : r)),
                myReview: store.myReview()?.id === updated.id ? updated : store.myReview(),
              })
            }),
            catchError(() => EMPTY)
          )
        )
      )

    const loadPageCommand = () =>
      pipe(
        requireProductId<ReviewsPageChangeInterface>(),
        tap(() => setPending('list')),
        switchMap(({ page, pageSize }) =>
          reviewsService
            .getReviews({
              productId: store.productId() as string,
              page,
              pageSize,
              sortBy: store.sortBy(),
              rating: store.ratingFilter() ?? undefined,
            })
            .pipe(
              tap((response) => setListSuccess(response, 'replace')),
              catchError((error) => {
                setFailure(getErrorMessage(error))
                return EMPTY
              })
            )
        )
      )

    const load = rxMethod<void>(loadCommand('replace'))
    const loadMore = rxMethod<void>(
      pipe(
        requireProductId<void>(),
        filter(() => store.canLoadMore()),
        loadCommand('append')
      )
    )

    const loadMyReview = rxMethod<void>(myReviewCommand())

    const createReview = rxMethod<CreateReviewInterface>(
      pipe(
        requireProductId<CreateReviewInterface>(),
        submitCommand<CreateReviewInterface>(
          (data) =>
            reviewsService.create({
              productId: store.productId() as string,
              rating: data.rating,
              text: data.text,
            }),
          () => {
            patchState(store, { page: 1 })
            load()
            loadMyReview()
          }
        )
      )
    )

    const updateReview = rxMethod<UpdateReviewInterface>(
      pipe(
        requireProductId<UpdateReviewInterface>(),
        submitCommand<UpdateReviewInterface>(
          (data) => reviewsService.update(data.id, { rating: data.rating, text: data.text }),
          () => {
            patchState(store, { page: 1 })
            load()
            loadMyReview()
          }
        )
      )
    )

    const remove = rxMethod<{ id: string }>(
      pipe(
        requireProductId<{ id: string }>(),
        submitCommand<{ id: string }>(
          ({ id }) => reviewsService.remove(id),
          () => {
            patchState(store, { myReview: null, page: 1 })
            load()
          }
        )
      )
    )

    const toggleLike = rxMethod<{ id: string }>(likeCommand())

    const setContext = (params: {
      productId: string
      initialSummary?: ReviewsSummaryInterface
    }): void => {
      patchState(store, {
        productId: params.productId,
        items: [],
        total: 0,
        page: 1,
        error: null,
        summary: params.initialSummary ?? store.summary(),
      })
    }

    const goToPage = rxMethod<ReviewsPageChangeInterface>(loadPageCommand())

    const setSortBy = (sortBy: ReviewSortByType): void => {
      patchState(store, { sortBy, page: 1 })
      goToPage({ page: 1, pageSize: store.pageSize() })
    }

    const setRatingFilter = (rating: RatingFilterType): void => {
      patchState(store, { ratingFilter: rating, page: 1 })
      goToPage({ page: 1, pageSize: store.pageSize() })
    }

    return {
      setContext,
      setSortBy,
      setRatingFilter,
      load,
      loadMore,
      loadMyReview,
      createReview,
      updateReview,
      remove,
      toggleLike,
      goToPage,
    }
  })
)
