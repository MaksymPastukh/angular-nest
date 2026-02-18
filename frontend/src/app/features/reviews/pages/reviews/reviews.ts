import { Paginator, PaginatorState, Select, UiRatingComponent } from '@/shared/ui'
import { UiIconComponent } from '@/shared/ui/ui-icon'
import { DatePipe } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  signal,
  ViewChild,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
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
  imports: [
    DatePipe,
    ReviewFormComponent,
    UiRatingComponent,
    UiIconComponent,
    Select,
    FormsModule,
    Paginator,
  ],
  templateUrl: './reviews.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reviews {
  readonly facade = inject(ReviewsFacade)
  readonly authState = inject(AuthStateService)
  productId = input.required<string>()
  initialSummary = input<ReviewsSummaryInterface>()
  @ViewChild('reviewsTop', { read: ElementRef })
  private readonly reviewsTop?: ElementRef<HTMLElement>
  private readonly pendingScroll = signal<boolean>(false)
  private readonly lastProductId = signal<string | null>(null)
  constructor() {
    effect(() => {
      const prodId = this.productId()
      if (!prodId) return

      if (this.lastProductId() === prodId) return
      this.lastProductId.set(prodId)

      this.facade.init({
        productId: prodId,
        initialSummary: this.initialSummary() ?? undefined,
      })
    })

    effect(() => {
      if (!this.pendingScroll()) return
      if (this.facade.isLoading()) return

      this.pendingScroll.set(false)
      this.reviewsTop?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
    this.pendingScroll.set(true)
    this.facade.setSortBy(sortBy)
  }

  onRatingFilterChange(rating: RatingFilterType): void {
    this.pendingScroll.set(true)
    this.facade.setRatingFilter(rating)
  }

  onCreateReview(data: CreateReviewInterface): void {
    this.facade.createReview(data)
  }

  onUpdateReview(data: UpdateReviewInterface): void {
    this.facade.updateReview(data)
  }

  onReviewsPageChange(event: PaginatorState): void {
    const pageIndex = event.page ?? 0
    const rows = event.rows ?? this.facade.pageSize()

    this.facade.goToPage({
      page: pageIndex + 1,
      pageSize: rows,
    })

    this.pendingScroll.set(true)
    this.facade.goToPage({ page: pageIndex + 1, pageSize: rows })
  }

  onDeleteReview(reviewId: string): void {
    const myReview = this.facade.myReview()
    const isMyReview = myReview?.id === reviewId
    const isAdmin = this.facade.isAdmin()

    if (!isMyReview && !isAdmin) return

    this.facade.removeReview(reviewId)
  }
}
