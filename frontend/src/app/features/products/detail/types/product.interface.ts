export interface ProductType {
  _id?: string
  id?: string
  title: string
  rating: number
  brand: string
  image: string
  price: number
  comment: string
  category: string
  productType?: string
  dressStyle?: string
  fabric: string
  pattern: string
  fit: string
  neck: string
  sleeve: string
  color: string | string[]
  size: string[]
  description: string
  isLiked: boolean
  createdAt?: Date
  updatedAt?: Date
}
