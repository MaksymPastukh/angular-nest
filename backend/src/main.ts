import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { existsSync } from 'fs';
import { AppModule } from './app.module';

/**
 * Главная функция запуска приложения
 * Инициализирует NestJS приложение и настраивает middleware
 */
async function bootstrap() {
  // Создаём экземпляр NestJS приложения
  const app = await NestFactory.create(AppModule);

  /**
   * Настройка CORS (Cross-Origin Resource Sharing)
   * Разрешает запросы с фронтенда (Angular) на другом домене/порту
   */
  app.enableCors({
    origin: ['http://localhost:4200', 'http://localhost:3000'], // Разрешённые домены
    credentials: true, // Разрешить отправку cookies и заголовков авторизации
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // Разрешённые HTTP методы
    allowedHeaders: ['Content-Type', 'Authorization'], // Разрешённые заголовки
  });

  /**
   * Глобальный pipe для автоматической валидации
   * Проверяет все входящие данные согласно DTO с декораторами class-validator
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Автоматически удаляет свойства, которых нет в DTO
      forbidNonWhitelisted: true, // Выбрасывает ошибку, если в запросе есть лишние свойства
      transform: true, // Автоматически преобразует типы (например, строки в числа)
      transformOptions: {
        enableImplicitConversion: true, // Включает неявное преобразование типов
      },
    }),
  );

  /**
   * Устанавливаем глобальный префикс для всех роутов API
   * Теперь все API эндпоинты будут начинаться с /api
   * Статические файлы остаются без префикса благодаря ServeStaticModule
   */
  app.setGlobalPrefix('api');

  // Логирование пути к статическим файлам для отладки
  const publicPath = join(__dirname, '..', '..', 'public');
  console.log('📁 Static files directory:', publicPath);
  console.log('📁 __dirname:', __dirname);
  console.log('✅ Public directory exists:', existsSync(publicPath));

  const imagesPath = join(publicPath, 'images', 'products');
  console.log('✅ Images directory exists:', existsSync(imagesPath));

  const testImage = join(imagesPath, 'image-1768148517389-118165552.png');
  console.log('✅ Test image exists:', existsSync(testImage));

  // Запускаем сервер на порту из .env или 3000 по умолчанию
  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`
  🚀 Сервер успешно запущен!
  📡 URL: http://localhost:${port}
  🔗 API: http://localhost:${port}/api
  🖼️  Static files: http://localhost:${port}/images/products/
  📝 Документация endpoints:
     - POST   /api/auth/register - Регистрация
     - POST   /api/auth/login    - Вход
     - GET    /api/auth/profile  - Профиль (требуется JWT)
     - GET    /api/auth/me       - Проверка токена
     - POST   /api/products/upload-image - Загрузка изображения
  `);
}

// Запускаем приложение
bootstrap().catch((error) => {
  console.error('❌ Ошибка при запуске приложения:', error);
  process.exit(1);
});
