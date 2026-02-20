import { ProductQuestionInterface } from './product-question.interface'

export interface ProductQuestionStateInterface {
  productId: string | null
  items: ProductQuestionInterface[]
  total: number
  page: number
  pageSize: number
  myQuestion: ProductQuestionInterface | null
  isLoading: boolean
  isLoadingMy: boolean
  isSubmitting: boolean
  error: { message: string } | null
  existingQuestionId: string | null
}
