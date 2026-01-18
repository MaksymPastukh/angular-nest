/**
 * Основной тип продукта согласно backend API
 */
export interface ProductType {
  /** Уникальный идентификатор продукта (MongoDB _id) */
  _id?: string

  /** Уникальный идентификатор продукта (возвращается как id в API) */
  id?: string

  /** Название продукта */
  title: string

  /** Рейтинг продукта (0-5) */
  rating: number

  /** Бренд производитель */
  brand: string

  /** Путь к изображению продукта */
  image: string

  /** Цена продукта в рублях */
  price: number

  /** Комментарий или краткое описание */
  comment: string

  /** Категория товара (Shop All, Men, Women, Combos, Joggers) */
  category: string

  /** Тип товара (Tops, Printed T-shirts, Plain T-shirts, и т.д.) */
  productType?: string

  /** Стиль одежды (Classic, Casual, Business, Sport, Elegant, Formal) */
  dressStyle?: string

  fabric: string
  pattern: string
  fit: string
  neck: string
  sleeve: string

  /** Цвет товара */
  color: string

  /** Доступные размеры */
  size: string[]

  /** Полное описание продукта */
  description: string

  userComments: string
  questionsAnswers: string
  /** Дата создания */
  createdAt?: Date

  isLiked: boolean

  /** Дата обновления */
  updatedAt?: Date
}

/**
 * Интерфейс параметров фильтрации для API запросов
 */
export interface ProductFilterParams {
  /** Категория товара */
  category?: string

  /** Тип товара */
  productType?: string

  /** Стиль одежды */
  dressStyle?: string

  /** Бренд */
  brand?: string

  /** Минимальная цена */
  minPrice?: number

  /** Максимальная цена */
  maxPrice?: number

  /** Минимальный рейтинг */
  minRating?: number

  /** Цвет (может быть массив для множественного выбора) */
  color?: string | string[]

  /** Размер (может быть массив для множественного выбора) */
  size?: string | string[]

  /** Поисковый запрос по названию и описанию */
  search?: string

  /** Поле для сортировки (price, rating, title, createdAt) */
  sortBy?: 'price' | 'rating' | 'title' | 'createdAt'

  /** Направление сортировки (asc, desc) */
  order?: 'asc' | 'desc'

  /** Номер страницы */
  page?: number

  /** Количество элементов на странице */
  limit?: number
}

/**
 * Ответ API при получении списка продуктов с пагинацией
 */
export interface ProductsResponse {
  /** Массив продуктов */
  products: ProductType[]

  /** Общее количество продуктов */
  total: number

  /** Текущая страница */
  page: number

  /** Количество элементов на странице */
  limit: number

  /** Общее количество страниц */
  totalPages: number
}
