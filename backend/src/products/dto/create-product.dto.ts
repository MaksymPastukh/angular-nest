import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

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
   * Путь к изображению продукта
   * @example "/images/products/nike-air-shirt.jpg"
   */
  @IsString()
  @IsNotEmpty()
  image: string;

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
   * Цвет продукта
   * @example "Черный"
   */
  @IsString()
  @IsNotEmpty()
  color: string;

  /**
   * Доступные размеры продукта
   * @example ["S", "M", "L", "XL"]
   */
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  size: string[];

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
