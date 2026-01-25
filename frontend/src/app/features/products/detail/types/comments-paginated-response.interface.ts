import { CommentInterface } from './comment.interface'

export interface CommentsPaginatedResponse {
  items: CommentInterface[]
  total: number
}
