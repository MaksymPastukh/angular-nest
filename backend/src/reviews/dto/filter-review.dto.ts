import { Transform } from 'class-transformer';
import { IsEnum, IsMongoId, IsNumberString, IsOptional } from 'class-validator';

/**
 * Варианты сортировки отзывов
 */
export enum ReviewSortBy {
  NEWEST = 'newest',
  OLDEST = 'oldest',
  RATING_DESC = 'rating_desc',
  RATING_ASC = 'rating_asc',
  MOST_LIKED = 'most_liked',
}

/**
 * DTO для фильтрации, пагинации и сортировки отзывов
 */
export class FilterReviewDto {
  /**
   * ID продукта (обязательный параметр)
   */
  @IsMongoId({ message: 'Некорректный ID продукта' })
  productId: string;

  /**
   * Номер страницы (начиная с 1)
   * Валидация: должно быть числом >= 1
   */
  @IsOptional()
  @IsNumberString()
  @Transform(({ value }) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num < 1) return '1';
    return num.toString();
  })
  page?: string = '1';

  /**
   * Количество отзывов на странице (максимум 50)
   * Валидация: должно быть числом от 1 до 50
   * Защита от NaN и отрицательных значений
   */
  @IsOptional()
  @IsNumberString()
  @Transform(({ value }) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num < 1) return '20';
    return Math.min(num, 50).toString();
  })
  pageSize?: string = '20';

  /**
   * Сортировка отзывов
   */
  @IsOptional()
  @IsEnum(ReviewSortBy)
  sortBy?: ReviewSortBy = ReviewSortBy.NEWEST;

  /**
   * Фильтр по рейтингу (опционально, например: '5' или '4')
   */
  @IsOptional()
  @IsNumberString()
  rating?: string;
}
