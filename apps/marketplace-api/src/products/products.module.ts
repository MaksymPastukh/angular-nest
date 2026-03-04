import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductRatingService } from './product-rating.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './schemas/product.schema';

/**
 * Модуль продуктов
 * Объединяет все компоненты для работы с продуктами
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [ProductsController],
  providers: [ProductsService, ProductRatingService],
  exports: [ProductsService, ProductRatingService],
})
export class ProductsModule {}
