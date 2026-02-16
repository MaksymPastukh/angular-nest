/**
 * Интерфейс пользователя в запросе
 */
export interface RequestUser {
  /** ID пользователя */
  id: string;
  /** Email пользователя */
  email: string;
  /** Имя пользователя */
  firstName?: string;
  /** Роль пользователя */
  role: string;
}

/**
 * Интерфейс запроса с аутентифицированным пользователем
 */
export interface RequestWithUser {
  /** Данные пользователя из JWT токена */
  user: RequestUser;
}

/**
 * Интерфейс запроса с опциональным пользователем (для Optional JWT Guard)
 */
export interface RequestWithOptionalUser {
  /** Данные пользователя из JWT токена (если авторизован) */
  user?: RequestUser;
}
