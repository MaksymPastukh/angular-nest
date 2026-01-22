import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

/**
 * Тип документа продукта
 */
export type ProductDocument = HydratedDocument<Product>;

/**
 * Схема продукта для MongoDB
 * Определяет структуру документа продукта в базе данных
 */
@Schema({
  timestamps: true,
  versionKey: false, // Убираем поле __v из документов
  toJSON: {
    // Настройка сериализации в JSON
    transform: (_doc, ret: any) => {
      ret.id = ret._id.toString(); // Добавляем поле id
      delete ret._id; // Удаляем _id
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
   * Рейтинг продукта от 0 до 5
   * @example 4.5
   */
  @Prop({ required: true, type: Number, min: 0, max: 5, default: 0 })
  public rating: number;

  /**
   * Бренд/производитель продукта
   * @example "Nike"
   */
  @Prop({ required: true, type: String })
  public brand: string;

  /**
   * Путь к изображению продукта
   * @example "/images/products/nike-air-shirt.jpg"
   */
  @Prop({ required: true, type: String })
  public image: string;

  /**
   * Цена продукта
   * @example 1999.99
   */
  @Prop({ required: true, type: Number, min: 0 })
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
   * Цвет продукта
   * @example "Черный"
   */
  @Prop({ required: true, type: String })
  public color: string;

  /**
   * Доступные размеры продукта
   * @example ["S", "M", "L", "XL"]
   */
  @Prop({ required: true, type: [String] })
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

/**
 * Создание индексов для оптимизации поиска
 */
ProductSchema.index({ category: 1, brand: 1 });
ProductSchema.index({ price: 1 });
ProductSchema.index({ rating: -1 });
ProductSchema.index({ title: 'text', description: 'text' });
