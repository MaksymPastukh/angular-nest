import { Transform } from 'class-transformer';
import { IsInt, IsMongoId, IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

/**
 * DTO для создания отзыва
 */
export class CreateReviewDto {
  /**
   * ID продукта, к которому относится отзыв
   */
  @IsMongoId({ message: 'Некорректный ID продукта' })
  @IsNotEmpty({ message: 'ID продукта обязателен' })
  public productId: string;

  /**
   * Рейтинг продукта (1-5 звезд)
   */
  @IsInt({ message: 'Рейтинг должен быть целым числом' })
  @Min(1, { message: 'Минимальный рейтинг - 1 звезда' })
  @Max(5, { message: 'Максимальный рейтинг - 5 звезд' })
  public rating: number;

  /**
   * Текст отзыва (3-1000 символов)
   * Автоматически обрезаются пробелы по краям для предотвращения спама пустыми строками
   */
  @IsString()
  @IsNotEmpty({ message: 'Текст отзыва не может быть пустым' })
  @MinLength(3, { message: 'Минимальная длина отзыва - 3 символа' })
  @MaxLength(1000, { message: 'Максимальная длина отзыва - 1000 символов' })
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  public text: string;
}
