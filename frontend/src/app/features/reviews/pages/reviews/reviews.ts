import { UiRatingComponent } from '@/shared/ui'
import { UiIconComponent } from '@/shared/ui/ui-icon'
import { DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Select } from 'primeng/select'
import { AuthStateService } from '../../../../core/auth/http/auth-state.service'
import { CreateReviewInterface } from '../../domain/interfaces/create-review.interface'
import { SelectOption } from '../../domain/interfaces/reviews-sort-select.interface'
import { ReviewsSummaryInterface } from '../../domain/interfaces/reviews-summary'
import { UpdateReviewInterface } from '../../domain/interfaces/update-review.interface'
import { RatingFilterType } from '../../domain/types/reviews-rating.type'
import { ReviewSortByType } from '../../domain/types/reviews-sortBy.type'
import { ReviewsFacade } from '../../store/reviews.facade'
import { ReviewFormComponent } from '../../ui/reviews-form/review-form'
@Component({
  selector: 'app-ui-reviews',
  imports: [DatePipe, ReviewFormComponent, UiRatingComponent, UiIconComponent, Select, FormsModule],
  templateUrl: './reviews.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reviews {
  readonly facade = inject(ReviewsFacade)
  readonly authState = inject(AuthStateService)
  productId = input<string>('')
  initialSummary = input<ReviewsSummaryInterface>()

  constructor() {
    effect(() => {
      if (!this.productId()) return
      this.facade.init({
        productId: this.productId(),
        initialSummary: this.initialSummary(),
      })
    })
  }

  readonly sortOptions: SelectOption<ReviewSortByType>[] = [
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
    { label: 'Rating: high → low', value: 'rating_desc' },
    { label: 'Rating: low → high', value: 'rating_asc' },
    { label: 'Most liked', value: 'most_liked' },
  ]

  readonly ratingFilterOptions: SelectOption<RatingFilterType>[] = [
    { label: 'All ratings', value: null },
    { label: '5 stars', value: 5 },
    { label: '4 stars', value: 4 },
    { label: '3 stars', value: 3 },
    { label: '2 stars', value: 2 },
    { label: '1 star', value: 1 },
  ]

  onLoadMore(): void {
    this.facade.loadMore()
  }

  onSortChange(sortBy: ReviewSortByType): void {
    this.facade.setSortBy(sortBy)
  }

  onRatingFilterChange(rating: RatingFilterType): void {
    this.facade.setRatingFilter(rating)
  }

  onCreateReview(data: CreateReviewInterface): void {
    this.facade.createReview(data)
  }

  onUpdateReview(data: UpdateReviewInterface): void {
    this.facade.updateReview(data)
  }

  onDeleteReview(reviewId: string): void {
    // Проверяем права: либо это мой отзыв, либо я администратор
    const myReview = this.facade.myReview()
    const isMyReview = myReview?.id === reviewId
    const isAdmin = this.facade.isAdmin()

    if (!isMyReview && !isAdmin) return

    this.facade.removeReview(reviewId)
  }
}
