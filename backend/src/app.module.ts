import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
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

    // Раздача статических файлов из папки public
    // Файлы будут доступны напрямую, например: http://localhost:3000/images/products/image.jpg
    // __dirname в compiled коде = dist/src, поэтому поднимаемся на 2 уровня вверх и идем в public
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public'),
      serveRoot: '/',
      exclude: ['/api*'], // Исключаем API роуты из статической раздачи
      serveStaticOptions: {
        // Устанавливаем правильные заголовки для статических файлов
        setHeaders: (res, path) => {
          // Определяем MIME-тип на основе расширения файла
          if (path.endsWith('.png')) {
            res.setHeader('Content-Type', 'image/png');
          } else if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
            res.setHeader('Content-Type', 'image/jpeg');
          } else if (path.endsWith('.gif')) {
            res.setHeader('Content-Type', 'image/gif');
          } else if (path.endsWith('.webp')) {
            res.setHeader('Content-Type', 'image/webp');
          } else if (path.endsWith('.svg')) {
            res.setHeader('Content-Type', 'image/svg+xml');
          }
          // CORS заголовки для изображений
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
        },
      },
    }),

    // Подключаем модули приложения
    UsersModule, // Модуль управления пользователями
    AuthModule, // Модуль аутентификации и авторизации
    ProductsModule, // Модуль управления продуктами магазина
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
