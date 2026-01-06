import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

/**
 * DTO для фильтрации и пагинации продуктов
 * Используется в query параметрах для получения списка продуктов
 */
export class FilterProductDto {
  /**
   * Фильтр по категории
   * @example "Men"
   */
  @IsOptional()
  @IsString()
  category?: string;

  /**
   * Фильтр по типу товара
   * @example "Printed T-shirts"
   */
  @IsOptional()
  @IsString()
  productType?: string;

  /**
   * Фильтр по стилю одежды
   * @example "Casual"
   */
  @IsOptional()
  @IsString()
  dressStyle?: string;

  /**
   * Фильтр по бренду
   * @example "Nike"
   */
  @IsOptional()
  @IsString()
  brand?: string;

  /**
   * Минимальная цена
   * @example 500
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  minPrice?: number;

  /**
   * Максимальная цена
   * @example 5000
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  maxPrice?: number;

  /**
   * Минимальный рейтинг
   * @example 4
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  @Type(() => Number)
  minRating?: number;

  /**
   * Фильтр по цвету
   * @example "Черный"
   */
  @IsOptional()
  @IsString()
  color?: string;

  /**
   * Фильтр по размеру
   * @example "M"
   */
  @IsOptional()
  @IsString()
  size?: string;

  /**
   * Поиск по названию и описанию
   * @example "футболка"
   */
  @IsOptional()
  @IsString()
  search?: string;

  /**
   * Поле для сортировки
   * @example "price"
   */
  @IsOptional()
  @IsString()
  sortBy?: 'price' | 'rating' | 'title' | 'createdAt';

  /**
   * Направление сортировки
   * @example "asc"
   */
  @IsOptional()
  @IsString()
  order?: 'asc' | 'desc';

  /**
   * Номер страницы (начиная с 1)
   * @example 1
   */
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  page?: number;

  /**
   * Количество элементов на странице
   * @example 20
   */
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit?: number;
}
