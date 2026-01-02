import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guard для JWT аутентификации
 * Защищает роуты, требующие аутентификации
 * Проверяет наличие и валидность JWT токена в заголовке Authorization
 *
 * Использование в контроллере:
 * @UseGuards(JwtAuthGuard)
 * @Get('profile')
 * getProfile(@Request() req) { return req.user; }
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * Этот guard автоматически:
   * 1. Извлекает JWT токен из заголовка Authorization
   * 2. Проверяет подпись токена
   * 3. Проверяет срок действия токена
   * 4. Вызывает метод validate() из JwtStrategy
   * 5. Добавляет данные пользователя в req.user
   *
   * Если любая из проверок не пройдена, возвращает 401 Unauthorized
   */
}
