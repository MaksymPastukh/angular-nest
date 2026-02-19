export interface ProductQuestionError {
  statusCode: number
  message: string
  error: string
  code?: string
  existingQuestionId?: string
}
