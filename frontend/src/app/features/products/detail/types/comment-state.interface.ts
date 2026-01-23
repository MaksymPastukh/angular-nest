import { CommentEntity } from './comment.interface'

export interface CommentStateInterface {
  comments: CommentEntity[]
  productId: string | null
  isLoading: boolean
  error: string | null
  page: number
  pageSize: number
  total: number
  hasMore: boolean
  isSubmitting: boolean
}
