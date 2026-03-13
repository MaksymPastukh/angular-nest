import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

class UpdateProductImageDto {
  @IsString()
  key: string;

  @IsString()
  alt: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  width?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  height?: number;
}

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
   * Массив путей к изображениям продукта (максимум 3)
   * @example ["/images/products/nike-air-shirt-1.jpg", "/images/products/nike-air-shirt-2.jpg"]
   */
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @ValidateNested({ each: true })
  @Type(() => UpdateProductImageDto)
  images?: UpdateProductImageDto[];

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
   * Доступные цвета продукта
   * @example ["Black", "White"]
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  colors?: string[];

  /**
   * Доступные размеры продукта
   * @example ["S", "M", "L", "XL"]
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  sizes?: string[];

  /**
   * Подробное описание продукта
   * @example "Спортивная футболка из высококачественного материала..."
   */
  @IsOptional()
  @IsString()
  @MinLength(10)
  description?: string;
}
