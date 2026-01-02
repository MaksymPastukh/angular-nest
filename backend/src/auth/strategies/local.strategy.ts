import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

/**
 * Локальная стратегия аутентификации
 * Используется для проверки email и пароля при входе
 * Passport автоматически вызывает метод validate() при попытке входа
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  /**
   * Конструктор стратегии
   * @param authService - Сервис аутентификации для проверки учётных данных
   */
  constructor(private authService: AuthService) {
    super({
      // Настраиваем passport использовать 'email' вместо стандартного 'username'
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  /**
   * Метод валидации пользователя
   * Вызывается автоматически Passport при попытке входа
   * @param email - Email из запроса
   * @param password - Пароль из запроса
   * @returns Объект пользователя, если аутентификация успешна
   * @throws UnauthorizedException - если email или пароль неверны
   */
  async validate(email: string, password: string): Promise<any> {
    // Вызываем метод проверки из AuthService
    const user = await this.authService.validateUser(email, password);

    // Если пользователь не найден или пароль неверный
    if (!user) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    // Возвращаем пользователя, который будет доступен в req.user
    return user;
  }
}
