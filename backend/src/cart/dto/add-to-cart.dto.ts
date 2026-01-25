import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

/**
 * DTO для добавления товара в корзину
 */
export class AddToCartDto {
  /**
   * ID продукта
   */
  @IsString()
  @IsNotEmpty()
  public productId: string;

  /**
   * Выбранный размер
   */
  @IsString()
  @IsNotEmpty()
  public size: string;

  /**
   * Количество (по умолчанию 1)
   */
  @IsNumber()
  @Min(1)
  public quantity: number = 1;
}
