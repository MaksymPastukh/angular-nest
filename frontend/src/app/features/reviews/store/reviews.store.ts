import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { tapResponse } from '@ngrx/operators'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { RxMethod, rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, concatMap, exhaustMap, filter, map, of, pipe, switchMap, tap } from 'rxjs'

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
import { LoadKindType } from '../../../shared/domain/types/load-kind.type'

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
    const setPending = (kind: LoadKindType = 'list'): void => {
      if (kind === 'list') patchState(store, { isLoading: true, error: null })
      if (kind === 'submit') patchState(store, { isSubmitting: true, error: null })
      if (kind === 'my') patchState(store, { isLoadingMy: true })
    }

    const stop = (kind: LoadKindType = 'list'): void => {
      if (kind === 'list') patchState(store, { isLoading: false })
      if (kind === 'submit') patchState(store, { isSubmitting: false })
      if (kind === 'my') patchState(store, { isLoadingMy: false })
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
        error: null,
      })
    }

    const setMySuccess = (myReview: ReviewResponseInterface | null): void => {
      patchState(store, { myReview })
    }

    const setFailure = (message: string): void => {
      patchState(store, { error: { message } })
    }

    const getErrorMessage = (error: unknown): string => {
      if (!(error instanceof HttpErrorResponse)) return `An unknown error occurred.`

      const apiMessage: unknown = (error.error as { message?: unknown })?.message
      if (typeof apiMessage === 'string') return apiMessage
      if (Array.isArray(apiMessage)) return apiMessage.join(' ')

      return error.message ?? `Request failed with status ${error.status}.`
    }

    const hasProductId = <T>(x: {
      data: T
      productId: string | null
    }): x is { data: T; productId: string } =>
      typeof x.productId === 'string' && x.productId.length > 0

    const requireProductId = <T>() =>
      pipe(
        map((data: T) => ({ data, productId: store.productId() })),
        tap((x) => {
          if (!x.productId) setFailure('productId is missing')
        }),
        filter(hasProductId)
      )

    const load: RxMethod<void> = rxMethod<void>(
      pipe(
        requireProductId<void>(),
        tap(() => setPending('list')),
        switchMap(({ productId }) =>
          reviewsService
            .getReviews({
              productId,
              page: 1,
              pageSize: store.pageSize(),
              sortBy: store.sortBy(),
              rating: store.ratingFilter() ?? undefined,
            })
            .pipe(
              tapResponse({
                next: (response) => setListSuccess(response, 'replace'),
                error: (e) => setFailure(getErrorMessage(e)),
                finalize: () => stop('list'),
              })
            )
        )
      )
    )

    const loadMore: RxMethod<void> = rxMethod<void>(
      pipe(
        requireProductId<void>(),
        filter(() => store.canLoadMore()),
        tap(() => setPending('list')),
        switchMap(({ productId }) =>
          reviewsService
            .getReviews({
              productId,
              page: store.page() + 1,
              pageSize: store.pageSize(),
              sortBy: store.sortBy(),
              rating: store.ratingFilter() ?? undefined,
            })
            .pipe(
              tapResponse({
                next: (response) => setListSuccess(response, 'append'),
                error: (e) => setFailure(getErrorMessage(e)),
                finalize: () => stop('list'),
              })
            )
        )
      )
    )

    // domain-valid fallback: myReview can be null
    const loadMyReview: RxMethod<void> = rxMethod<void>(
      pipe(
        requireProductId<void>(),
        tap(() => setPending('my')),
        switchMap(({ productId }) =>
          reviewsService.getMyReview(productId).pipe(
            catchError(() => of(null)),
            tapResponse({
              next: setMySuccess,
              error: () => {},
              finalize: () => stop('my'),
            })
          )
        )
      )
    )

    const goToPage: RxMethod<ReviewsPageChangeInterface> = rxMethod<ReviewsPageChangeInterface>(
      pipe(
        requireProductId<ReviewsPageChangeInterface>(),
        tap(({ data }) => {
          patchState(store, { page: data.page, pageSize: data.pageSize })
          setPending('list')
        }),
        switchMap(({ data, productId }) =>
          reviewsService
            .getReviews({
              productId,
              page: data.page,
              pageSize: data.pageSize,
              sortBy: store.sortBy(),
              rating: store.ratingFilter() ?? undefined,
            })
            .pipe(
              tapResponse({
                next: (response) => setListSuccess(response, 'replace'),
                error: (e) => setFailure(getErrorMessage(e)),
                finalize: () => stop('list'),
              })
            )
        )
      )
    )

    const createReview: RxMethod<CreateReviewInterface> = rxMethod<CreateReviewInterface>(
      pipe(
        requireProductId<CreateReviewInterface>(),
        tap(() => setPending('submit')),
        exhaustMap(({ data, productId }) =>
          reviewsService.create({ productId, rating: data.rating, text: data.text }).pipe(
            tapResponse({
              next: () => {
                patchState(store, { page: 1 })
                load()
                loadMyReview()
              },
              error: (e) => setFailure(getErrorMessage(e)),
              finalize: () => stop('submit'),
            })
          )
        )
      )
    )

    const updateReview: RxMethod<UpdateReviewInterface> = rxMethod<UpdateReviewInterface>(
      pipe(
        requireProductId<UpdateReviewInterface>(),
        tap(() => setPending('submit')),
        exhaustMap(({ data }) =>
          reviewsService.update(data.id, { rating: data.rating, text: data.text }).pipe(
            tapResponse({
              next: () => {
                patchState(store, { page: 1 })
                load()
                loadMyReview()
              },
              error: (e) => setFailure(getErrorMessage(e)),
              finalize: () => stop('submit'),
            })
          )
        )
      )
    )

    const remove: RxMethod<{ id: string }> = rxMethod<{ id: string }>(
      pipe(
        requireProductId<{ id: string }>(),
        tap(() => setPending('submit')),
        exhaustMap(({ data }) =>
          reviewsService.remove(data.id).pipe(
            tapResponse({
              next: () => {
                patchState(store, { myReview: null, page: 1 })
                load()
              },
              error: (e) => setFailure(getErrorMessage(e)),
              finalize: () => stop('submit'),
            })
          )
        )
      )
    )

    const toggleLike: RxMethod<{ id: string }> = rxMethod<{ id: string }>(
      pipe(
        // toggleLike does not strictly need productId; if you want to prevent usage without context,
        // keep requireProductId. It also ensures consistent "product must be set" behavior.
        requireProductId<{ id: string }>(),
        concatMap(({ data }) =>
          reviewsService.toggleLike(data.id).pipe(
            tapResponse({
              next: (updated) => {
                patchState(store, {
                  items: store.items().map((r) => (r.id === updated.id ? updated : r)),
                  myReview: store.myReview()?.id === updated.id ? updated : store.myReview(),
                })
              },
              error: () => {},
            })
          )
        )
      )
    )

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
