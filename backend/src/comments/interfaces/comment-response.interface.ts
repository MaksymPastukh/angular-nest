/**
 * Интерфейс для ответа с одним комментарием
 * Используется при создании, обновлении и получении комментария
 */
export interface CommentResponse {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  text: string;
  likesCount: number;
  isLiked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Интерфейс для пагинированного ответа с комментариями
 */
export interface CommentsPaginatedResponse {
  items: CommentResponse[];
  total: number;
}
