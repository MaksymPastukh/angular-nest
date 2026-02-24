import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../products/schemas/product.schema';
import { WishlistItem, WishlistItemSchema } from './schemas/wishlist-item.schema';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';

/**
 * Модуль для управления wishlist (избранное)
 * Реализует user-centric "saved items" с упором на производительность и надежность
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WishlistItem.name, schema: WishlistItemSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  controllers: [WishlistController],
  providers: [WishlistService],
  exports: [WishlistService],
})
export class WishlistModule {}
