import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

/**
 * Тип документа продукта
 */
export type ProductDocument = HydratedDocument<Product>;

/**
 * Денормализованные агрегаты рейтинга продукта
 * Используются для быстрых сортировок и отображения в каталоге
 */
@Schema({ _id: false })
export class ProductRatingStats {
  /** Средний рейтинг (0..5), округление до 0.1 */
  @Prop({ type: Number, default: 0, min: 0, max: 5 })
  public avg: number;

  /** Количество опубликованных отзывов */
  @Prop({ type: Number, default: 0, min: 0 })
  public count: number;

  /** Сумма рейтингов (для инкрементальных пересчетов) */
  @Prop({ type: Number, default: 0, min: 0 })
  public sum: number;

  /** Распределение по звездам (1..5) */
  @Prop({
    type: Object,
    default: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  })
  public distribution: Record<1 | 2 | 3 | 4 | 5, number>;

  /** Дата последнего обновления агрегатов */
  @Prop({ type: Date, default: null })
  public updatedAt: Date | null;
}

/**
 * Схема продукта для MongoDB
 * Определяет структуру документа продукта в базе данных
 */
@Schema({
  timestamps: true,
  versionKey: false, // Убираем поле __v из документов
  toJSON: {
    virtuals: true,
    // Настройка сериализации в JSON
    transform: (_doc, ret: any) => {
      if (ret._id) {
        ret.id = ret._id.toString(); // Добавляем поле id
      }
      delete ret._id; // Удаляем _id
      
      // Переименовываем поля для публичного API
      if (ret.color) {
        ret.colors = ret.color;
        delete ret.color;
      }
      if (ret.size) {
        ret.sizes = ret.size;
        delete ret.size;
      }
      // image удаляется (устаревшее поле, используем images)
      delete ret.image;
      
      return ret;
    },
  },
  toObject: {
    virtuals: true,
    transform: (_doc, ret: any) => {
      if (ret._id) {
        ret.id = ret._id.toString();
      }
      delete ret._id;
      
      // Переименовываем поля для публичного API
      if (ret.color) {
        ret.colors = ret.color;
        delete ret.color;
      }
      if (ret.size) {
        ret.sizes = ret.size;
        delete ret.size;
      }
      // image удаляется (устаревшее поле, используем images)
      delete ret.image;
      
      return ret;
    },
  },
})
export class Product {
  /**
   * Название продукта
   * @example "Футболка Nike Air"
   */
  @Prop({ required: true, type: String })
  public title: string;

  /**
    * Рейтинг продукта от 0 до 5 (avg, legacy поле для совместимости)
   * @example 4.5
   */
  @Prop({ required: true, type: Number, min: 0, max: 5, default: 0 })
  public rating: number;

    /**
    * Денормализованные агрегаты отзывов
    * Источник истины для avg/count/distribution
    */
    @Prop({ type: ProductRatingStats, default: () => ({}) })
    public ratingStats: ProductRatingStats;

  /**
   * Бренд/производитель продукта
   * @example "Nike"
   */
  @Prop({ required: true, type: String, index: true })
  public brand: string;

  /**
   * Массив путей к изображениям продукта (до 3 изображений)
   * @example ["/images/products/nike-air-shirt-1.jpg", "/images/products/nike-air-shirt-2.jpg"]
   */
  @Prop({ required: true, type: [String], validate: [(val: string[]) => val.length <= 3, 'Maximum 3 images allowed'] })
  public images: string[];

  /**
   * Цена продукта
   * @example 1999.99
   */
  @Prop({ required: true, type: Number, min: 0, index: true })
  public price: number;

  /**
   * Краткий комментарий или описание
   * @example "Удобная спортивная футболка"
   */
  @Prop({ required: true, type: String })
  public comment: string;

  /**
   * Категория продукта
   * @example "Men"
   */
  @Prop({ required: true, type: String, index: true })
  public category: string;

  /**
   * Тип товара для фильтрации
   * @example "Printed T-shirts"
   */
  @Prop({ required: true, type: String, index: true })
  public productType: string;

  /**
   * Стиль одежды
   * @example "Casual"
   */
  @Prop({ required: true, type: String, index: true })
  public dressStyle: string;

  /**
   * Доступные цвета продукта
   * @example ["Black", "White", "Red"]
   */
  @Prop({ required: true, type: [String], index: true })
  public color: string[];

  /**
   * Доступные размеры продукта
   * @example ["S", "M", "L", "XL"]
   */
  @Prop({ required: true, type: [String], index: true })
  public size: string[];

  /**
   * Подробное описание продукта
   * @example "Спортивная футболка из высококачественного материала..."
   */
  @Prop({ required: true, type: String })
  public description: string;

  /**
   * Тип ткани
   * @example "Cotton"
   */
  @Prop({ type: String, default: 'N/A' })
  public fabric: string;

  /**
   * Узор/паттерн
   * @example "Solid"
   */
  @Prop({ type: String, default: 'N/A' })
  public pattern: string;

  /**
   * Посадка/крой
   * @example "Regular Fit"
   */
  @Prop({ type: String, default: 'N/A' })
  public fit: string;

  /**
   * Тип выреза
   * @example "Round Neck"
   */
  @Prop({ type: String, default: 'N/A' })
  public neck: string;

  /**
   * Тип рукава
   * @example "Short Sleeve"
   */
  @Prop({ type: String, default: 'N/A' })
  public sleeve: string;

  /**
   * Массив ID пользователей, которые добавили продукт в избранное (лайкнули)
   */
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }], default: [] })
  public likedBy: string[];

  /** Дата создания записи (автоматически добавляется Mongoose) */
  public createdAt: Date;

  /** Дата последнего обновления записи (автоматически добавляется Mongoose) */
  public updatedAt: Date;
}

/**
 * Создание схемы Mongoose на основе класса Product
 */
export const ProductSchema = SchemaFactory.createForClass(Product);

// Виртуальное поле id для стабильного DX (id вместо _id)
ProductSchema.virtual('id').get(function (this: { _id: { toString: () => string } }) {
  return this._id.toString();
});

/**
 * Создание составных индексов для оптимизации фильтрации и facets
 * Эти индексы критичны для производительности preview facets при hover
 */

// Базовые индексы для фильтрации
ProductSchema.index({ category: 1, productType: 1 });
ProductSchema.index({ category: 1, dressStyle: 1 });
ProductSchema.index({ category: 1, brand: 1 });
ProductSchema.index({ productType: 1, brand: 1 });
ProductSchema.index({ dressStyle: 1, brand: 1 });

// Индексы для фильтрации по цене
ProductSchema.index({ price: 1 });
ProductSchema.index({ category: 1, price: 1 });

// Индексы для сортировки
ProductSchema.index({ rating: -1 });
ProductSchema.index({ 'ratingStats.avg': -1 });
ProductSchema.index({ 'ratingStats.count': -1 });
ProductSchema.index({ createdAt: -1 });

// Индексы для фильтрации по цвету и размеру
ProductSchema.index({ color: 1 });
ProductSchema.index({ size: 1 }); // Multikey index для массива размеров

// Полнотекстовый поиск
ProductSchema.index({ title: 'text', description: 'text' });

// Комплексные индексы для частых комбинаций фильтров
ProductSchema.index({ category: 1, productType: 1, brand: 1 });
ProductSchema.index({ category: 1, dressStyle: 1, brand: 1 });
ProductSchema.index({ category: 1, color: 1, brand: 1 });
ProductSchema.index({ productType: 1, color: 1, brand: 1 });
