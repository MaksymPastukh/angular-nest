import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

/**
 * DTO для добавления комментария к продукту
 */
export class AddCommentDto {
  /**
   * Текст комментария
   */
  @IsString()
  @IsNotEmpty()
  public text: string;

  /**
   * Рейтинг продукта (0-5)
   */
  @IsNumber()
  @Min(0)
  @Max(5)
  public rating: number;
}
