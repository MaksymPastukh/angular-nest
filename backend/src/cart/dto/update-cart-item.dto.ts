import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

/**
 * DTO для обновления элемента корзины
 */
export class UpdateCartItemDto {
  /**
   * ID продукта
   */
  @IsString()
  @IsNotEmpty()
  public productId: string;

  /**
   * Размер (для идентификации конкретного элемента)
   */
  @IsString()
  @IsNotEmpty()
  public size: string;

  /**
   * Новое количество
   */
  @IsNumber()
  @Min(1)
  public quantity: number;
}
