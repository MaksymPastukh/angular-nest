import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

/**
 * Статус отзыва
 */
export enum ReviewStatus {
  PUBLISHED = 'published',
  HIDDEN = 'hidden',
  DELETED = 'deleted',
}

/**
 * Тип документа отзыва
 */
export type ReviewDocument = HydratedDocument<Review>;

/**
 * Схема отзыва для MongoDB
 * Определяет структуру документа отзыва в базе данных
 */
@Schema({
  timestamps: true,
  versionKey: false,
  toJSON: {
    transform: (_doc, ret: any) => {
      ret.id = ret._id.toString();
      delete ret._id;
      return ret;
    },
  },
  toObject: {
    transform: (_doc, ret: any) => {
      ret.id = ret._id.toString();
      delete ret._id;
      return ret;
    },
  },
})
export class Review {
  /**
   * ID продукта, к которому относится отзыв
   */
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Product', index: true })
  public productId: string;

  /**
   * ID пользователя, оставившего отзыв
   */
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User', index: true })
  public userId: string;

  /**
   * Имя пользователя (snapshot на момент создания отзыва)
   * Сохраняется как snapshot для стабильности отображения, даже если пользователь изменит имя позже
   * Это стандартная практика для отзывов (как в Amazon, Rozetka и других маркетплейсах)
   */
  @Prop({ required: true, type: String })
  public userName: string;

  /**
   * Рейтинг продукта (1-5 звезд)
   */
  @Prop({ required: true, type: Number, min: 1, max: 5 })
  public rating: number;

  /**
   * Текст отзыва
   */
  @Prop({ required: true, type: String, minlength: 3, maxlength: 1000 })
  public text: string;

  /**
   * Статус отзыва
   */
  @Prop({ 
    type: String, 
    enum: Object.values(ReviewStatus), 
    default: ReviewStatus.PUBLISHED,
    index: true 
  })
  public status: ReviewStatus;

  /**
   * Количество лайков (денормализовано для производительности)
   * Обновляется при добавлении/удалении лайков из коллекции review_likes
   */
  @Prop({ type: Number, default: 0, min: 0 })
  public likesCount: number;

  /** Дата создания отзыва */
  public createdAt: Date;

  /** Дата обновления отзыва */
  public updatedAt: Date;
}

/**
 * Создание схемы Mongoose на основе класса Review
 */
export const ReviewSchema = SchemaFactory.createForClass(Review);

/**
 * Создание индексов для оптимизации поиска
 * Важно: индексы должны соответствовать частым запросам
 */
ReviewSchema.index({ productId: 1, createdAt: -1 });
ReviewSchema.index({ productId: 1, status: 1, rating: -1 });
ReviewSchema.index({ userId: 1 });

/**
 * Индекс для сортировки MOST_LIKED (по количеству лайков)
 * Критически важен для производительности при большом количестве отзывов
 */
ReviewSchema.index({ productId: 1, status: 1, likesCount: -1, createdAt: -1 });

/**
 * Уникальный индекс: один пользователь может оставить только один активный отзыв на продукт
 * Partial index применяется только к published и hidden отзывам,
 * позволяя создавать новый отзыв после удаления старого
 * Это предотвращает спам и улучшает UX (как в Amazon/Rozetka)
 */
ReviewSchema.index(
  { productId: 1, userId: 1 }, 
  { 
    unique: true,
    partialFilterExpression: { 
      status: { 
        $in: [ReviewStatus.PUBLISHED, ReviewStatus.HIDDEN] 
      } 
    }
  }
);
