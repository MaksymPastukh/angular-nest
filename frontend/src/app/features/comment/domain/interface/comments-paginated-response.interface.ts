import { CommentInterface } from './comment.interface'

export interface CommentsPaginatedResponseInterface {
  items: CommentInterface[]
  total: number
}
