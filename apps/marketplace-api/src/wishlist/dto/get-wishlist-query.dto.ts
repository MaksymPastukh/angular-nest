import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

/**
 * DTO для параметров получения wishlist с пагинацией
 */
export class GetWishlistQueryDto {
  /** Cursor для пагинации (следующая страница) */
  @IsOptional()
  @IsString()
  @MaxLength(100)
  public cursor?: string;

  /** Количество элементов на странице */
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  public limit?: number = 20;
}
