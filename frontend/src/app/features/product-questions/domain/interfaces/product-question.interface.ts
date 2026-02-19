import { QuestionStatusType } from '../types/question-status.type'

export interface ProductQuestionInterface {
  id: string
  productId: string
  userId: string
  userName: string
  question: string
  answer: string | null
  status: QuestionStatusType
  createdAt: string
  updatedAt: string
  isMine?: boolean
}
