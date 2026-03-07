import { ReviewResponseInterface } from './reviews-response.interface'
import { ReviewsSummaryInterface } from './reviews-summary'

export interface ReviewsPaginatedResponseInterface {
  items: ReviewResponseInterface[]
  page: number
  pageSize: number
  total: number
  summary: ReviewsSummaryInterface
}
