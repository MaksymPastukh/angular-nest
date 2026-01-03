import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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
   * Переопределяем метод canActivate для добавления дополнительной логики
   * @param context - Контекст выполнения запроса
   * @returns Promise<boolean> - результат проверки аутентификации
   */
  canActivate(context: ExecutionContext) {
    // Вызываем стандартную логику AuthGuard('jwt')
    // Это запустит процесс проверки JWT токена через JwtStrategy
    return super.canActivate(context);
  }

  /**
   * Обрабатывает результат аутентификации
   * Вызывается после того, как JWT токен был проверен и validate() выполнен
   * @param err - Ошибка, если произошла во время аутентификации
   * @param user - Объект пользователя, возвращённый из validate()
   * @param info - Дополнительная информация об ошибке (например, jwt expired)
   * @param context - Контекст выполнения запроса
   * @param status - Статус HTTP ответа
   * @returns Объект пользователя или выбрасывает исключение
   */
  handleRequest<TUser = any>(
    err: any,
    user: TUser | false | null,
    info: any,
  ): TUser {
    // Если произошла ошибка или пользователь не найден, выбрасываем исключение
    if (err || !user) {
      // info может содержать сообщение от стратегии (например, "jwt expired")
      const message: string =
        info && typeof info === 'object' && 'message' in info
          ? String((info as { message: unknown }).message)
          : 'Неверный или истёкший токен';

      throw err || new UnauthorizedException(message);
    }

    // Возвращаем пользователя, который будет добавлен в req.user
    return user as TUser;
  }
}
