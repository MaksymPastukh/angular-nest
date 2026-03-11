import { Type } from 'class-transformer';
import {
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min,
    MinLength,
    ValidateNested,
} from 'class-validator';

class CreateProductImageDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsString()
  @IsNotEmpty()
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
 * DTO для создания нового продукта
 * Используется при добавлении продукта в базу данных
 */
export class CreateProductDto {
  /**
   * Название продукта
   * @example "Футболка Nike Air"
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  /**
   * Рейтинг продукта от 0 до 5
   * @example 4.5
   */
  @IsNumber()
  @Min(0)
  @Max(5)
  @Type(() => Number)
  rating: number;

  /**
   * Бренд/производитель продукта
   * @example "Nike"
   */
  @IsString()
  @IsNotEmpty()
  brand: string;

  /**
   * Массив путей к изображениям продукта (минимум 3, максимум 10)
   * @example ["/images/products/nike-air-shirt-1.jpg", "/images/products/nike-air-shirt-2.jpg"]
   */
  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(10)
  @ValidateNested({ each: true })
  @Type(() => CreateProductImageDto)
  images: CreateProductImageDto[];

  /**
   * Цена продукта
   * @example 1999.99
   */
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  price: number;

  /**
   * Краткий комментарий или описание
   * @example "Удобная спортивная футболка"
   */
  @IsString()
  @IsNotEmpty()
  comment: string;

  /**
   * Категория продукта
   * @example "Men"
   */
  @IsString()
  @IsNotEmpty()
  category: string;

  /**
   * Тип товара
   * @example "Printed T-shirts"
   */
  @IsString()
  @IsNotEmpty()
  productType: string;

  /**
   * Стиль одежды
   * @example "Casual"
   */
  @IsString()
  @IsNotEmpty()
  dressStyle: string;

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
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  description: string;

  /**
   * Тип ткани
   * @example "Cotton"
   */
  @IsString()
  fabric?: string;

  /**
   * Узор/паттерн
   * @example "Solid"
   */
  @IsString()
  pattern?: string;

  /**
   * Посадка/крой
   * @example "Regular Fit"
   */
  @IsString()
  fit?: string;

  /**
   * Тип выреза
   * @example "Round Neck"
   */
  @IsString()
  neck?: string;

  /**
   * Тип рукава
   * @example "Short Sleeve"
   */
  @IsString()
  sleeve?: string;
}
