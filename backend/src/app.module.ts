import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

/**
 * Главный модуль приложения
 * Здесь подключаются все остальные модули, настройки и конфигурация
 */
@Module({
  imports: [
    // Подключение модуля конфигурации для работы с .env файлом
    // isGlobal: true делает ConfigModule доступным во всех модулях без повторного импорта
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // Подключение к MongoDB через Mongoose
    // Используем ConfigModule для получения строки подключения из .env
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/online-shop',
    ),

    // Подключаем модули приложения
    UsersModule, // Модуль управления пользователями
    AuthModule, // Модуль аутентификации и авторизации
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
