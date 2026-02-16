/**
 * Интерфейс для ответа с одним отзывом
 * Используется при создании, обновлении и получении отзыва
 */
export interface ReviewResponse {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  text: string;
  likesCount: number;
  isLiked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Распределение рейтингов по звездам
 */
export interface RatingDistribution {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

/**
 * Суммарная статистика отзывов для продукта
 */
export interface ReviewsSummary {
  /** Средний рейтинг (например, 4.6) */
  avg: number;
  /** Общее количество отзывов */
  count: number;
  /** Распределение по звездам (сколько отзывов на каждую оценку) */
  distribution: RatingDistribution;
}

/**
 * Интерфейс для пагинированного ответа с отзывами
 */
export interface ReviewsPaginatedResponse {
  /** Массив отзывов на текущей странице */
  items: ReviewResponse[];
  /** Текущая страница */
  page: number;
  /** Размер страницы */
  pageSize: number;
  /** Общее количество отзывов */
  total: number;
  /** Суммарная статистика рейтингов */
  summary: ReviewsSummary;
}
