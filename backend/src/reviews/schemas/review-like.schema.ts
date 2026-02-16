import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';

/**
 * Тип документа лайка отзыва
 */
export type ReviewLikeDocument = HydratedDocument<ReviewLike>;

/**
 * Схема лайка отзыва для MongoDB
 * Вынесена в отдельную коллекцию для масштабируемости
 */
@Schema({
  timestamps: true,
  versionKey: false,
  collection: 'review_likes',
})
export class ReviewLike {
  /**
   * ID отзыва (хранится как ObjectId в MongoDB)
   */
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Review', index: true })
  public reviewId: Types.ObjectId;

  /**
   * ID пользователя, который поставил лайк (хранится как ObjectId в MongoDB)
   */
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User', index: true })
  public userId: Types.ObjectId;

  /** Дата создания лайка */
  public createdAt: Date;

  /** Дата обновления */
  public updatedAt: Date;
}

/**
 * Создание схемы Mongoose на основе класса ReviewLike
 */
export const ReviewLikeSchema = SchemaFactory.createForClass(ReviewLike);

/**
 * Уникальный индекс: один пользователь может лайкнуть отзыв только один раз
 */
ReviewLikeSchema.index({ reviewId: 1, userId: 1 }, { unique: true });
