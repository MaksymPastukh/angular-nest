import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

/**
 * Тип документа корзины
 */
export type CartDocument = HydratedDocument<Cart>;

/**
 * Подсхема для элемента корзины
 */
@Schema({ _id: false })
export class CartItem {
  /** ID продукта */
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Product' })
  public productId: string;

  /** Название продукта */
  @Prop({ required: true, type: String })
  public productTitle: string;

  /** Изображение продукта */
  @Prop({ required: true, type: String })
  public productImage: string;

  /** Цена на момент добавления */
  @Prop({ required: true, type: Number, min: 0 })
  public price: number;

  /** Количество */
  @Prop({ required: true, type: Number, min: 1, default: 1 })
  public quantity: number;

  /** Размер */
  @Prop({ required: true, type: String })
  public size: string;

  /** Цвет */
  @Prop({ required: true, type: String })
  public color: string;

  /** Дата добавления */
  @Prop({ type: Date, default: Date.now })
  public addedAt: Date;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);

/**
 * Схема корзины для MongoDB
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
})
export class Cart {
  /**
   * ID пользователя-владельца корзины
   */
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User', unique: true })
  public userId: string;

  /**
   * Список товаров в корзине
   */
  @Prop({ type: [CartItemSchema], default: [] })
  public items: CartItem[];

  /**
   * Общая стоимость корзины
   */
  @Prop({ type: Number, default: 0, min: 0 })
  public totalPrice: number;

  /**
   * Общее количество товаров
   */
  @Prop({ type: Number, default: 0, min: 0 })
  public totalItems: number;

  /** Дата создания */
  public createdAt: Date;

  /** Дата обновления */
  public updatedAt: Date;
}

/**
 * Создание схемы Mongoose
 */
export const CartSchema = SchemaFactory.createForClass(Cart);

/**
 * Индексы для оптимизации
 */
CartSchema.index({ userId: 1 });
