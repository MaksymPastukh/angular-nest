import { computed, inject, Injectable } from '@angular/core'
import { AuthStateService } from '../../../core/auth/http/auth-state.service'
import { CreateReviewInterface } from '../domain/interfaces/create-review.interface'
import { ReviewsSummaryInterface } from '../domain/interfaces/reviews-summary'
import { UpdateReviewInterface } from '../domain/interfaces/update-review.interface'
import { RatingFilterType } from '../domain/types/reviews-rating.type'
import { ReviewSortByType } from '../domain/types/reviews-sortBy.type'
import { ReviewsStore } from './reviews.store'

@Injectable({
  providedIn: 'root',
})
export class ReviewsFacade {
  private readonly store = inject(ReviewsStore)
  private readonly authState = inject(AuthStateService)

  readonly productId = this.store.productId
  readonly items = this.store.items
  readonly total = this.store.total
  readonly page = this.store.page
  readonly pageSize = this.store.pageSize
  readonly sortBy = this.store.sortBy
  readonly ratingFilter = this.store.ratingFilter
  readonly summary = this.store.summary
  readonly myReview = this.store.myReview

  readonly isLoading = this.store.isLoading
  readonly isSubmitting = this.store.isSubmitting
  readonly isLoadingMy = this.store.isLoadingMy
  readonly error = computed(() => this.store.error()?.message ?? null)

  readonly hasProduct = this.store.hasProduct
  readonly hasMore = this.store.hasMore
  readonly canLoadMore = this.store.canLoadMore
  readonly isEmpty = this.store.isEmpty

  readonly avg = this.store.avg
  readonly count = this.store.count
  readonly distribution = this.store.distribution

  readonly isAuthenticated = this.authState.isAuthenticated
  readonly isAdmin = this.authState.isAdmin

  init(params: { productId: string; initialSummary?: ReviewsSummaryInterface }): void {
    this.store.setContext(params)
    this.store.load()

    if (this.authState.isAuthenticated()) {
      this.store.loadMyReview()
    }
  }

  refresh(): void {
    this.store.load()
    if (this.authState.isAuthenticated()) {
      this.store.loadMyReview()
    }
  }

  loadMore(): void {
    if (!this.store.canLoadMore()) return
    this.store.loadMore()
  }

  setSortBy(sortBy: ReviewSortByType): void {
    this.store.setSortBy(sortBy)
  }

  setRatingFilter(rating: RatingFilterType): void {
    this.store.setRatingFilter(rating)
  }

  createReview(data: CreateReviewInterface): void {
    this.store.createReview(data)
  }

  updateReview(data: UpdateReviewInterface): void {
    this.store.updateReview(data)
  }

  removeReview(id: string): void {
    this.store.remove({ id })
  }

  toggleLike(id: string): void {
    this.store.toggleLike({ id })
  }
}
