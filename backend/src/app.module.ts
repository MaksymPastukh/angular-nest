import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { CommentsModule } from './comments/comments.module';
import { ProductsModule } from './products/products.module';
import { StaticModule } from './static/static.module';
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
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/online-shop'),

    // Подключаем модули приложения
    StaticModule, // Модуль раздачи статических файлов (изображения)
    UsersModule, // Модуль управления пользователями
    AuthModule, // Модуль аутентификации и авторизации
    ProductsModule, // Модуль управления продуктами магазина
    CommentsModule, // Модуль управления комментариями
    CartModule, // Модуль корзины покупок
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
