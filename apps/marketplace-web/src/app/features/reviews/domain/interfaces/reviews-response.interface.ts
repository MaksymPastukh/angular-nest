export interface ReviewResponseInterface {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  text: string
  createdAt: string
  updatedAt: string
  likesCount: number
  isLiked: boolean
}
