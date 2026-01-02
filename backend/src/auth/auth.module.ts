import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

/**
 * Модуль аутентификации
 * Отвечает за регистрацию, вход и проверку JWT токенов
 */
@Module({
  imports: [
    // Импортируем UsersModule для доступа к UsersService
    UsersModule,

    // Настраиваем Passport для использования JWT стратегии по умолчанию
    PassportModule.register({ defaultStrategy: 'jwt' }),

    // Настраиваем JWT модуль
    // Используем async конфигурацию для получения секрета из .env
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          // Секретный ключ для подписи токенов (из .env файла)
          secret: configService.get<string>('JWT_SECRET') || 'fallback-secret',

          // Опции подписи токена
          signOptions: {
            // Срок действия токена (из .env файла, по умолчанию 7 дней)
            expiresIn: '7d' as const,
          },
        };
      },
    }),
  ],

  // Контроллеры модуля
  controllers: [AuthController],

  // Провайдеры (сервисы и стратегии)
  providers: [
    AuthService, // Бизнес-логика аутентификации
    LocalStrategy, // Стратегия для проверки email/password
    JwtStrategy, // Стратегия для проверки JWT токенов
  ],

  // Экспортируем AuthService для использования в других модулях
  exports: [AuthService],
})
export class AuthModule {}
