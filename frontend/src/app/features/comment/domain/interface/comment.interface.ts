export interface CommentInterface {
  id: string
  productId: string
  userId: string
  userName: string
  text: string
  likesCount: number
  isLiked: boolean
  createdAt: string
  updatedAt: string
}

export type CommentEntity = CommentInterface & {
  createdAtTs: number
}
