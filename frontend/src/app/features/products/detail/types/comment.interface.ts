/**
 * Интерфейс комментария к продукту
 */
export interface CommentInterface {
  /** ID комментария */
  _id?: string

  /** ID пользователя */
  userId: string

  /** Имя пользователя */
  userName: string

  /** Текст комментария */
  text: string

  /** Рейтинг (0-5) */
  rating: number

  /** Массив ID пользователей, которые лайкнули комментарий */
  likedBy?: string[]

  /** Дата создания */
  createdAt?: Date

  /** Дата обновления */
  updatedAt?: Date
}
