import { Transform } from 'class-transformer';
import { IsArray, IsMongoId } from 'class-validator';

/**
 * DTO для батч-проверки наличия товаров в wishlist
 */
export class ContainsQueryDto {
  /** Массив ID товаров для проверки */
  @Transform(({ value }) => {
    // Позволяем передавать как массив, так и строку с разделителем запятой
    if (typeof value === 'string') {
      return value.split(',').map((id) => id.trim());
    }
    return value;
  })
  @IsArray({ message: 'ids must be an array or comma-separated string' })
  @IsMongoId({ each: true, message: 'each id must be a valid MongoDB ObjectId' })
  public ids: string[];
}
