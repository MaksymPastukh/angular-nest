import { CommentResponse } from './comment-response.interface'

export interface CommentStateInterface {
  comments: CommentResponse[]
  currentProductId: string | null
  isLoading: boolean
  error: string | null
}
