import { QuestionStatus } from '../schemas/question.schema';

/**
 * Интерфейс ответа с данными вопроса о продукте
 */
export interface ProductQuestionResponse {
  /** Уникальный идентификатор вопроса */
  id: string;

  /** ID продукта, к которому относится вопрос */
  productId: string;

  /** ID пользователя, задавшего вопрос */
  userId: string;

  /** Имя пользователя (snapshot на момент создания) */
  userName: string;

  /** Текст вопроса */
  question: string;

  /** Текст ответа администратора (null если еще не отвечен) */
  answer: string | null;

  /** Статус вопроса */
  status: QuestionStatus;

  /** Дата создания вопроса */
  createdAt: string;

  /** Дата последнего обновления */
  updatedAt: string;

  /** Принадлежит ли вопрос текущему пользователю (опционально, если пользователь авторизован) */
  isMine?: boolean;
}

/**
 * Интерфейс пагинированного ответа со списком вопросов
 */
export interface ProductQuestionsPaginatedResponse {
  /** Массив вопросов */
  items: ProductQuestionResponse[];

  /** Текущая страница */
  page: number;

  /** Размер страницы */
  pageSize: number;

  /** Общее количество вопросов */
  total: number;

  /** Общее количество страниц */
  totalPages: number;
}

/**
 * Интерфейс ответа при конфликте (вопрос уже существует)
 */
export interface QuestionConflictResponse {
  /** HTTP статус код */
  statusCode: 409;

  /** Тип ошибки */
  error: 'Conflict';

  /** Сообщение об ошибке */
  message: string;

  /** Код ошибки для фронтенда */
  code: 'QUESTION_ALREADY_EXISTS';

  /** ID существующего вопроса */
  existingQuestionId: string;
}
