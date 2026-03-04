import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

/**
 * Тип документа элемента wishlist
 */
export type WishlistItemDocument = HydratedDocument<WishlistItem>;

/**
 * Источник добавления товара в wishlist
 */
export enum WishlistItemSource {
  CATALOG = 'catalog',
  PRODUCT = 'product',
  RECOMMENDATION = 'recommendation',
}

/**
 * Схема элемента wishlist для MongoDB
 * Хранит товары, сохраненные пользователями в избранное
 */
@Schema({
  collection: 'wishlist_items',
  timestamps: false,
  versionKey: false,
})
export class WishlistItem {
  /** ID пользователя */
  @Prop({
    required: true,
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
    index: true,
  })
  public userId: string;

  /** ID продукта */
  @Prop({
    required: true,
    type: MongooseSchema.Types.ObjectId,
    ref: 'Product',
    index: true,
  })
  public productId: string;

  /** Дата и время добавления в wishlist */
  @Prop({
    required: true,
    type: Date,
    default: Date.now,
    index: true,
  })
  public addedAt: Date;

  /** Источник добавления товара (опционально) */
  @Prop({
    type: String,
    enum: Object.values(WishlistItemSource),
    required: false,
  })
  public source?: WishlistItemSource;

  /** Заметка пользователя (опционально, для будущих фич) */
  @Prop({
    type: String,
    maxlength: 500,
    required: false,
  })
  public note?: string;
}

export const WishlistItemSchema = SchemaFactory.createForClass(WishlistItem);

// Создаем составной уникальный индекс для предотвращения дубликатов
WishlistItemSchema.index({ userId: 1, productId: 1 }, { unique: true });

// Создаем индекс для эффективной пагинации и сортировки
WishlistItemSchema.index({ userId: 1, addedAt: -1 });
