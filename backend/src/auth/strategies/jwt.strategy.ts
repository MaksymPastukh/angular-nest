import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';

/**
 * Интерфейс для полезной нагрузки (payload) JWT токена
 * Определяет, какие данные хранятся в токене
 */
export interface JwtPayload {
  sub: string; // ID пользователя (subject)
  email: string; // Email пользователя
  role: string; // Роль пользователя (user/admin)
}

/**
 * JWT стратегия для проверки токенов
 * Используется для защиты приватных роутов
 * Passport автоматически извлекает и проверяет JWT токен из заголовка Authorization
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Конструктор стратегии
   * @param configService - Сервис конфигурации для получения секретного ключа
   * @param usersService - Сервис пользователей для получения данных пользователя
   */
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      // Извлекаем JWT токен из заголовка Authorization как Bearer token
      // Формат: "Authorization: Bearer <токен>"
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      // ignoreExpiration: false означает, что истёкшие токены будут отклонены
      ignoreExpiration: false,

      // Секретный ключ для проверки подписи токена (из .env файла)
      secretOrKey: configService.get<string>('JWT_SECRET') || 'fallback-secret',
    });
  }

  /**
   * Метод валидации JWT токена
   * Вызывается автоматически после успешной проверки подписи токена
   * @param payload - Расшифрованные данные из JWT токена
   * @returns Объект пользователя, который будет доступен в req.user
   * @throws UnauthorizedException - если пользователь не найден или неактивен
   */
  async validate(payload: JwtPayload) {
    // Получаем полные данные пользователя из БД по ID из токена
    const user = await this.usersService.findById(payload.sub);

    // Проверяем, существует ли пользователь и активен ли его аккаунт
    if (!user || !user.isActive) {
      throw new UnauthorizedException('Пользователь не найден или деактивирован');
    }

    // Возвращаем данные пользователя, которые будут доступны в req.user
    // во всех защищённых контроллерах
    return {
      id: payload.sub,
      ...user,
    };
  }
}
