import { UiRatingComponent } from '@/shared/ui'
import { UiIconComponent } from '@/shared/ui/ui-icon'
import { DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core'
import { AuthStateService } from '../../../../core/auth/http/auth-state.service'
import { CreateReviewInterface } from '../../domain/interfaces/create-review.interface'
import { ReviewsSummaryInterface } from '../../domain/interfaces/reviews-summary'
import { UpdateReviewInterface } from '../../domain/interfaces/update-review.interface'
import { RatingFilterType } from '../../domain/types/reviews-rating.type'
import { ReviewSortByType } from '../../domain/types/reviews-sortBy.type'
import { ReviewsFacade } from '../../store/reviews.facade'
import { ReviewFormComponent } from '../../ui/reviews-form/review-form'
@Component({
  selector: 'app-ui-reviews',
  imports: [DatePipe, ReviewFormComponent, UiRatingComponent, UiIconComponent],
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
