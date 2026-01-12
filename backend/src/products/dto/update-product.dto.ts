import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

/**
 * DTO для обновления продукта
 * Все поля являются опциональными
 */
export class UpdateProductDto {
  /**
   * Название продукта
   * @example "Футболка Nike Air"
   */
  @IsOptional()
  @IsString()
  @MinLength(3)
  title?: string;

  /**
   * Рейтинг продукта от 0 до 5
   * @example 4.5
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  @Type(() => Number)
  rating?: number;

  /**
   * Бренд/производитель продукта
   * @example "Nike"
   */
  @IsOptional()
  @IsString()
  brand?: string;

  /**
   * Путь к изображению продукта
   * @example "/images/products/nike-air-shirt.jpg"
   */
  @IsOptional()
  @IsString()
  image?: string;

  /**
   * Цена продукта
   * @example 1999.99
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  price?: number;

  /**
   * Краткий комментарий или описание
   * @example "Удобная спортивная футболка"
   */
  @IsOptional()
  @IsString()
  comment?: string;

  /**
   * Категория продукта
   * @example "Men"
   */
  @IsOptional()
  @IsString()
  category?: string;

  /**
   * Тип товара
   * @example "Printed T-shirts"
   */
  @IsOptional()
  @IsString()
  productType?: string;

  /**
   * Стиль одежды
   * @example "Casual"
   */
  @IsOptional()
  @IsString()
  dressStyle?: string;

  /**
   * Цвет продукта
   * @example "Черный"
   */
  @IsOptional()
  @IsString()
  color?: string;

  /**
   * Доступные размеры продукта
   * @example ["S", "M", "L", "XL"]
   */
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  size?: string[];

  /**
   * Подробное описание продукта
   * @example "Спортивная футболка из высококачественного материала..."
   */
  @IsOptional()
  @IsString()
  @MinLength(10)
  description?: string;
}
