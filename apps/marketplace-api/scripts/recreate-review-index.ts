import { NestFactory } from '@nestjs/core';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppModule } from '../src/app.module';
import { Review } from '../src/reviews/schemas/review.schema';

/**
 * Скрипт для пересоздания уникального индекса отзывов с partial filter
 * Это необходимо для того, чтобы пользователи могли создавать новые отзывы после удаления старых
 */
async function recreateReviewIndex() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const reviewModel = app.get<Model<Review>>(getModelToken(Review.name));

    console.log('🔍 Проверка существующих индексов...');
    const indexes = await reviewModel.collection.getIndexes();
    console.log('Текущие индексы:', Object.keys(indexes));

    // Удаляем старый уникальный индекс если он существует
    const oldIndexName = 'productId_1_userId_1';
    if (indexes[oldIndexName]) {
      console.log(`🗑️  Удаление старого индекса: ${oldIndexName}`);
      await reviewModel.collection.dropIndex(oldIndexName);
      console.log('✅ Старый индекс удален');
    } else {
      console.log('ℹ️  Старый индекс не найден, продолжаем...');
    }

    // Создаем новый partial index
    console.log('🔨 Создание нового partial index...');
    await reviewModel.collection.createIndex(
      { productId: 1, userId: 1 },
      {
        unique: true,
        partialFilterExpression: { 
          status: { 
            $in: ['published', 'hidden'] 
          } 
        },
      },
    );
    console.log('✅ Новый partial index создан успешно!');

    // Проверяем результат
    const newIndexes = await reviewModel.collection.getIndexes();
    console.log('\n📋 Финальные индексы:', Object.keys(newIndexes));
    console.log('\n✨ Миграция индекса завершена успешно!');
    console.log('Теперь пользователи могут создавать новые отзывы после удаления старых.');
  } catch (error) {
    console.error('❌ Ошибка при пересоздании индекса:', error);
    process.exit(1);
  } finally {
    await app.close();
  }
}

recreateReviewIndex();
