import { Types } from 'mongoose';

/**
 * Интерфейс для пользователя с MongoDB _id
 */
export interface UserWithId {
  _id: Types.ObjectId;
  email: string;
  firstName: string;
  role: string;
  isActive: boolean;
  agreeToTerms: boolean;
  subscribeToNewsletter: boolean;
}

/**
 * Интерфейс для данных пользователя в ответе аутентификации
 */
export interface AuthUserData {
  id: string;
  email: string;
  firstName: string;
  role: string;
}

/**
 * Интерфейс для ответа при регистрации/входе
 */
export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: AuthUserData;
}

/**
 * Интерфейс для payload JWT токена
 */
export interface JwtPayload {
  sub: string; // ID пользователя
  email: string;
  role: string;
}
