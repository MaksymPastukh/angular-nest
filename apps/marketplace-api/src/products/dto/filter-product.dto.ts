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
  public category?: string;

  /**
   * Фильтр по типу товара
   * @example "Printed T-shirts"
   */
  @IsOptional()
  @IsString()
  public productType?: string;

  /**
   * Фильтр по стилю одежды
   * @example "Casual"
   */
  @IsOptional()
  @IsString()
  public dressStyle?: string;

  /**
   * Фильтр по бренду
   * @example "Nike"
   */
  @IsOptional()
  @IsString()
  public brand?: string;

  /**
   * Минимальная цена
   * @example 500
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  public minPrice?: number;

  /**
   * Максимальная цена
   * @example 5000
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  public maxPrice?: number;

  /**
   * Минимальный рейтинг
   * @example 4
   */
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  @Type(() => Number)
  public minRating?: number;

  /**
   * Фильтр по цвету (может быть несколько)
   * @example ["Черный", "Белый"]
   */
  @IsOptional()
  @IsString({ each: true })
  public color?: string | string[];

  /**
   * Фильтр по размеру (может быть несколько)
   * @example ["M", "L", "XL"]
   */
  @IsOptional()
  @IsString({ each: true })
  public size?: string | string[];

  /**
   * Поиск по названию и описанию
   * @example "футболка"
   */
  @IsOptional()
  @IsString()
  public search?: string;

  /**
   * Поле для сортировки
   * @example "price"
   */
  @IsOptional()
  @IsString()
  public sortBy?: 'price' | 'rating' | 'title' | 'createdAt';

  /**
   * Направление сортировки
   * @example "asc"
   */
  @IsOptional()
  @IsString()
  public order?: 'asc' | 'desc';

  /**
   * Номер страницы (начиная с 1)
   * @example 1
   */
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  public page?: number;

  /**
   * Количество элементов на странице
   * @example 20
   */
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  public limit?: number;

  /**
   * Preview параметр для типа товара
   * Используется для получения facets при hover на определенный тип товара
   * @example "T-shirts"
   */
  @IsOptional()
  @IsString()
  public previewProductType?: string;

  /**
   * Preview параметр для стиля одежды
   * Используется для получения facets при hover на определенный стиль
   * @example "Casual"
   */
  @IsOptional()
  @IsString()
  public previewDressStyle?: string;
}
