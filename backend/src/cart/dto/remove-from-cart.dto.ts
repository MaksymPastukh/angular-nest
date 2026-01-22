import { IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO для удаления товара из корзины
 */
export class RemoveFromCartDto {
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
}
