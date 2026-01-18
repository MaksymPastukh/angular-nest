/**
 * Интерфейс для данных формы создания продукта
 */
export interface CreateProductFormData {
  title: string
  rating: number
  brand: string
  image: string
  price: number
  comment: string
  category: string
  productType: string
  dressStyle: string
  color: string
  fabric: string
  pattern: string
  fit: string
  neck: string
  isLiked: boolean
  sleeve: string
  size: string[]
  description: string
  userComments: string
  questionsAnswers: string
}

/**
 * Интерфейс для ответа API при создании продукта
 */
export interface CreateProductResponse {
  id: string
  title: string
  brand: string
  price: number
  createdAt: string
}

/**
 * Опции для выбора в форме
 */
export interface FormSelectOption {
  label: string
  value: string
}

/**
 * Опции цветов
 */
export interface ColorOption {
  name: string
  value: string
}

/**
 * Состояние валидации формы
 */
export interface FormValidationState {
  isValid: boolean
  errors: Record<string, string[]>
}
