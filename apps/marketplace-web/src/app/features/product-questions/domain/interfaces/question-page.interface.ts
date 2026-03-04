import { ProductQuestionInterface } from './product-question.interface'

export interface QuestionsPageInterface {
  items: ProductQuestionInterface[]
  page: number
  pageSize: number
  total: number
  totalPages: number
}
