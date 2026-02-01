import {
  CATEGORIES,
  COLORS,
  DRESS_STYLES,
  PRODUCT_TYPES,
  SIZES,
} from '../constants/create-product.canstants'

export interface CreateProductStoreStateInterface {
  options: CreateProductOptionsInterface
  uploadedImagePath: string | null
  isUploadingImage: boolean
  isLoading: boolean
  error: string | null
  success: boolean
  event: { type: string; message?: string; productTitle?: string } | null
}

export interface CreateProductOptionsInterface {
  categories: typeof CATEGORIES
  productTypes: typeof PRODUCT_TYPES
  dressStyles: typeof DRESS_STYLES
  colors: typeof COLORS
  sizes: typeof SIZES
}
