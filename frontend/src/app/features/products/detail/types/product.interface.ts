import { CommentInterface } from './comment.interface'
export interface ProductType {
  _id?: string
  id?: string
  title: string
  rating: number
  brand: string
  image: string
  price: number
  comment: string
  comments?: CommentInterface[]
  category: string
  productType?: string
  dressStyle?: string
  fabric: string
  pattern: string
  fit: string
  neck: string
  sleeve: string
  color: string
  size: string[]
  description: string
  userComments: string
  questionsAnswers: string
  isLiked: boolean
  createdAt?: Date
  updatedAt?: Date
}
