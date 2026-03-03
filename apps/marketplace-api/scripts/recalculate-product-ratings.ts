import 'dotenv/config';
import mongoose, { Types } from 'mongoose';
import { ProductSchema } from '../src/products/schemas/product.schema';
import { ReviewSchema, ReviewStatus } from '../src/reviews/schemas/review.schema';

interface RatingDistribution {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/online-shop';

const ProductModel = mongoose.model('Product', ProductSchema);
const ReviewModel = mongoose.model('Review', ReviewSchema);

const emptyDistribution = (): RatingDistribution => ({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

const roundAvg = (sum: number, count: number): number => {
  if (count <= 0) {
    return 0;
  }
  return Math.round((sum / count) * 10) / 10;
};

const buildStats = async (productId: Types.ObjectId) => {
  const agg = await ReviewModel.aggregate([
    {
      $match: {
        productId,
        status: ReviewStatus.PUBLISHED,
      },
    },
    {
      $group: {
        _id: '$rating',
        count: { $sum: 1 },
        sum: { $sum: '$rating' },
      },
    },
  ]).exec();

  const distribution = emptyDistribution();
  let totalCount = 0;
  let totalSum = 0;

  agg.forEach((row: { _id: number; count: number; sum: number }) => {
    const rating = row._id as 1 | 2 | 3 | 4 | 5;
    distribution[rating] = row.count;
    totalCount += row.count;
    totalSum += row.sum;
  });

  return {
    avg: roundAvg(totalSum, totalCount),
    count: totalCount,
    sum: totalSum,
    distribution,
  };
};

const main = async () => {
  await mongoose.connect(MONGODB_URI);

  const products = await ProductModel.find({}, { _id: 1 }).lean();

  for (const product of products) {
    const stats = await buildStats(product._id as Types.ObjectId);

    await ProductModel.updateOne(
      { _id: product._id },
      {
        $set: {
          rating: stats.avg,
          ratingStats: {
            ...stats,
            updatedAt: new Date(),
          },
        },
      },
    ).exec();
  }

  await mongoose.disconnect();
};

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Recalculate product ratings failed:', error);
  process.exit(1);
});
