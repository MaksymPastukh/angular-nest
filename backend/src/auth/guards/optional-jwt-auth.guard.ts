import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guard для опциональной JWT аутентификации
 * Не требует обязательной авторизации, но если токен есть - валидирует его
 * Используется для endpoints, которые работают как для авторизованных, так и для неавторизованных пользователей
 */
@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('jwt') {
  /**
   * Переопределяем метод handleRequest чтобы не выбрасывать ошибку если токен отсутствует
   * @param err - Ошибка, если произошла во время аутентификации
   * @param user - Пользователь, если токен валидный
   * @returns Пользователь или null
   */
  handleRequest(err: any, user: any) {
    // Если есть пользователь - возвращаем его
    // Если нет - возвращаем null (без ошибки)
    return user || null;
  }
}
