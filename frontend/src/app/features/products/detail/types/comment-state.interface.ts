import { CommentInterface } from './comment.interface'

export interface CommentStateInterface {
  comments: CommentInterface[]
  productId: string | null
  isLoading: boolean
  isSubmitting: boolean
  error: string | null
  total: number
}
