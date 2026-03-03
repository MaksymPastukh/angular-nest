import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { WishlistItemSource } from '../schemas/wishlist-item.schema';

/**
 * DTO для добавления товара в wishlist
 */
export class AddWishlistItemDto {
  /** Источник добавления товара */
  @IsOptional()
  @IsEnum(WishlistItemSource, {
    message: 'source must be one of: catalog, product, recommendation',
  })
  public source?: WishlistItemSource;

  /** Заметка пользователя */
  @IsOptional()
  @IsString()
  @MaxLength(500, { message: 'note must not exceed 500 characters' })
  public note?: string;
}
