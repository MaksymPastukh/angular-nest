import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

/**
 * Статус вопроса
 */
export enum QuestionStatus {
  PENDING = 'PENDING',
  ANSWERED = 'ANSWERED',
  HIDDEN = 'HIDDEN',
  DELETED = 'DELETED',
}

/**
 * Тип документа вопроса
 */
export type ProductQuestionDocument = HydratedDocument<ProductQuestion>;

/**
 * Схема вопроса для MongoDB
 * Определяет структуру документа вопроса о продукте в базе данных
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
export class ProductQuestion {
  /**
   * ID продукта, к которому относится вопрос
   */
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Product', index: true })
  public productId: string;

  /**
   * ID пользователя, задавшего вопрос
   */
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User', index: true })
  public userId: string;

  /**
   * Имя пользователя (snapshot на момент создания вопроса)
   * Сохраняется как snapshot для стабильности отображения
   */
  @Prop({ required: true, type: String })
  public userName: string;

  /**
   * Текст вопроса (3-500 символов)
   */
  @Prop({ required: true, type: String, minlength: 3, maxlength: 500 })
  public question: string;

  /**
   * Текст ответа администратора (до 1000 символов)
   * null если ответ еще не дан
   */
  @Prop({ type: String, maxlength: 1000, default: null })
  public answer: string | null;

  /**
   * Статус вопроса
   */
  @Prop({
    required: true,
    type: String,
    enum: Object.values(QuestionStatus),
    default: QuestionStatus.PENDING,
    index: true,
  })
  public status: QuestionStatus;

  /** Дата создания вопроса */
  public createdAt: Date;

  /** Дата обновления вопроса */
  public updatedAt: Date;
}

/**
 * Создание схемы Mongoose на основе класса ProductQuestion
 */
export const ProductQuestionSchema = SchemaFactory.createForClass(ProductQuestion);

/**
 * Составной индекс для быстрой выборки вопросов по продукту с фильтрацией по статусу
 */
ProductQuestionSchema.index({ productId: 1, status: 1, createdAt: -1 });

/**
 * Уникальный индекс для обеспечения "один вопрос на товар от пользователя"
 * Partial index применяется только к активным статусам (не DELETED)
 * Это позволяет пользователю задать новый вопрос после удаления предыдущего
 */
ProductQuestionSchema.index(
  { productId: 1, userId: 1 },
  {
    unique: true,
    partialFilterExpression: {
      status: { $in: [QuestionStatus.PENDING, QuestionStatus.ANSWERED, QuestionStatus.HIDDEN] },
    },
  }
);
