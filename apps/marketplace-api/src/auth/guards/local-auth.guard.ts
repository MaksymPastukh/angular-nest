import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guard для локальной аутентификации (вход по email/password)
 * Используется только для роута /auth/login
 * Проверяет email и пароль пользователя
 *
 * Использование в контроллере:
 * @UseGuards(LocalAuthGuard)
 * @Post('login')
 * login(@Request() req) { return this.authService.login(req.user); }
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  /**
   * Этот guard автоматически:
   * 1. Извлекает email и password из тела запроса
   * 2. Вызывает метод validate() из LocalStrategy
   * 3. Добавляет данные пользователя в req.user если вход успешен
   *
   * Если email или пароль неверны, возвращает 401 Unauthorized
   */
}
