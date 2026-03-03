import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';

interface ProductRatingDistribution {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

interface ProductRatingSnapshot {
  avg: number;
  count: number;
  sum: number;
  distribution: ProductRatingDistribution;
}

/**
 * Сервис синхронизации рейтинга продуктов с отзывами
 * Обновляет денормализованные агрегаты для быстрого каталога
 */
@Injectable()
export class ProductRatingService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  public async onReviewCreated(productId: string, rating: number): Promise<void> {
    await this.productModel
      .updateOne(
        { _id: productId },
        {
          $inc: {
            'ratingStats.sum': rating,
            'ratingStats.count': 1,
            [`ratingStats.distribution.${rating}`]: 1,
          },
        },
      )
      .exec();

    await this.updateAverage(productId);
  }

  public async onReviewRatingChanged(
    productId: string,
    oldRating: number,
    newRating: number,
  ): Promise<void> {
    if (oldRating === newRating) {
      return;
    }

    await this.productModel
      .updateOne(
        { _id: productId },
        {
          $inc: {
            'ratingStats.sum': newRating - oldRating,
            [`ratingStats.distribution.${oldRating}`]: -1,
            [`ratingStats.distribution.${newRating}`]: 1,
          },
        },
      )
      .exec();

    await this.updateAverage(productId);
  }

  public async onReviewUnpublished(productId: string, rating: number): Promise<void> {
    await this.productModel
      .updateOne(
        { _id: productId, 'ratingStats.count': { $gt: 0 } },
        {
          $inc: {
            'ratingStats.sum': -rating,
            'ratingStats.count': -1,
            [`ratingStats.distribution.${rating}`]: -1,
          },
        },
      )
      .exec();

    await this.updateAverage(productId);
  }

  public async onReviewPublished(productId: string, rating: number): Promise<void> {
    await this.onReviewCreated(productId, rating);
  }

  public async setRatingSnapshot(
    productId: string,
    snapshot: ProductRatingSnapshot,
  ): Promise<void> {
    await this.productModel
      .updateOne(
        { _id: productId },
        {
          $set: {
            rating: snapshot.avg,
            ratingStats: {
              ...snapshot,
              updatedAt: new Date(),
            },
          },
        },
      )
      .exec();
  }

  private async updateAverage(productId: string): Promise<void> {
    const product = await this.productModel
      .findById(productId)
      .select('ratingStats.sum ratingStats.count')
      .exec();

    if (!product) {
      throw new NotFoundException(`Продукт с ID ${productId} не найден`);
    }

    const sum = product.ratingStats?.sum ?? 0;
    const count = product.ratingStats?.count ?? 0;
    const avg = count > 0 ? Math.round((sum / count) * 10) / 10 : 0;

    await this.productModel
      .updateOne(
        { _id: productId },
        {
          $set: {
            'ratingStats.avg': avg,
            rating: avg, // legacy поле для сортировок/совместимости
            'ratingStats.updatedAt': new Date(),
          },
        },
      )
      .exec();
  }
}
