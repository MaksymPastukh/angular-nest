import { ErrorResponseInterface } from '../../../../shared/domain'
import { RatingFilterType } from '../types/reviews-rating.type'
import { ReviewSortByType } from '../types/reviews-sortBy.type'
import { ReviewResponseInterface } from './reviews-response.interface'
import { ReviewsSummaryInterface } from './reviews-summary'

export interface ReviewsStateInterface {
  productId: string | null
  items: ReviewResponseInterface[]
  total: number
  page: number
  pageSize: number
  sortBy: ReviewSortByType
  ratingFilter: RatingFilterType
  summary: ReviewsSummaryInterface | null
  myReview: ReviewResponseInterface | null
  isLoading: boolean
  isSubmitting: boolean
  isLoadingMy: boolean
  error: ErrorResponseInterface | null
}
