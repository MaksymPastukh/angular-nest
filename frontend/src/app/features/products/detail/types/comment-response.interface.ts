export interface CommentResponse {
  id: string
  productId: string
  userId: string
  userName: string
  text: string
  likedBy: string[]
  likesCount?: number
  isLiked?: boolean
  createdAt: string
  updatedAt: string
}
