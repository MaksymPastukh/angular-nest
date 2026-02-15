import { DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core'
import { ReviewsSummaryInterface } from '../../domain/interfaces/reviews-summary'
import { RatingFilterType } from '../../domain/types/reviews-rating.type'
import { ReviewSortByType } from '../../domain/types/reviews-sortBy.type'
import { ReviewsFacade } from '../../store/reviews.facade'
@Component({
  selector: 'app-ui-reviews',
  imports: [DatePipe],
  templateUrl: './reviews.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reviews {
  readonly facade = inject(ReviewsFacade)
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
}
