export interface CommentInterface {
  _id: string
  productId: string
  userId: string
  userName: string
  text: string
  likedBy?: string[]
  likesCount?: number
  isLiked?: boolean
  createdAt: string
  updatedAt: string
}

export type CommentEntity = CommentInterface & {
  _id: string // Гарантируем что после маппинга id всегда есть
  createdAtTs: number
}
