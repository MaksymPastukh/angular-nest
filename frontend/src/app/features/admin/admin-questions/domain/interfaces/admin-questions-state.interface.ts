import { ProductQuestionInterface } from '../../../../product-questions/domain/interfaces/product-question.interface'
import { AdminQuestionsFilterInterface } from './admin-questions-filter.interface'

export interface AdminQuestionsStateInterface {
  items: ProductQuestionInterface[]
  total: number
  page: number
  pageSize: number

  filter: AdminQuestionsFilterInterface

  isLoading: boolean
  isSubmitting: boolean

  error: { message: string } | null
}
