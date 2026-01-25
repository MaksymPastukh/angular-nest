import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

/**
 * Тип документа комментария
 */
export type CommentDocument = HydratedDocument<Comment>;

/**
 * Схема комментария для MongoDB
 * Определяет структуру документа комментария в базе данных
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
export class Comment {
  /**
   * ID продукта, к которому относится комментарий
   */
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Product', index: true })
  public productId: string;

  /**
   * ID пользователя, оставившего комментарий
   */
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User', index: true })
  public userId: string;

  /**
   * Имя пользователя
   */
  @Prop({ required: true, type: String })
  public userName: string;

  /**
   * Текст комментария
   */
  @Prop({ required: true, type: String })
  public text: string;

  /**
   * Массив ID пользователей, которые лайкнули комментарий
   */
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }], default: [] })
  public likedBy: string[];

  /** Дата создания комментария */
  public createdAt: Date;

  /** Дата обновления комментария */
  public updatedAt: Date;
}

/**
 * Создание схемы Mongoose на основе класса Comment
 */
export const CommentSchema = SchemaFactory.createForClass(Comment);

/**
 * Создание индексов для оптимизации поиска
 */
CommentSchema.index({ productId: 1, createdAt: -1 });
CommentSchema.index({ userId: 1 });
