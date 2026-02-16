import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ProductRatingService } from '../products/product-rating.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewSortBy } from './dto/filter-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import {
  RatingDistribution,
  ReviewResponse,
  ReviewsPaginatedResponse,
  ReviewsSummary,
} from './interfaces/review-response.interface';
import { ReviewLike, ReviewLikeDocument } from './schemas/review-like.schema';
import { Review, ReviewDocument, ReviewStatus } from './schemas/review.schema';

/**
 * Интерфейс фильтра для поиска отзывов
 */
interface ReviewFilter {
  productId: string;
  status: ReviewStatus;
  rating?: number;
}

/**
 * Сервис для работы с отзывами
 */
@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<ReviewDocument>,
    @InjectModel(ReviewLike.name)
    private readonly reviewLikeModel: Model<ReviewLikeDocument>,
    private readonly productRatingService: ProductRatingService,
  ) {}

  /**
   * Создание нового отзыва
   * @param userId - ID пользователя
   * @param userName - Имя пользователя
   * @param createReviewDto - Данные отзыва (включая productId)
   * @returns Созданный отзыв
   * @throws ConflictException если пользователь уже оставил отзыв на этот продукт
   */
  public async create(
    userId: string,
    userName: string,
    createReviewDto: CreateReviewDto,
  ): Promise<ReviewResponse> {
    // Проверяем, не оставлял ли пользователь уже отзыв на этот продукт
    const existingReview = await this.reviewModel
      .findOne({
        productId: createReviewDto.productId,
        userId,
        status: { $ne: ReviewStatus.DELETED },
      })
      .exec();

    if (existingReview) {
      throw new ConflictException({
        statusCode: 409,
        message: 'Вы уже оставили отзыв на этот продукт. Вы можете отредактировать существующий отзыв.',
        error: 'Conflict',
        code: 'REVIEW_ALREADY_EXISTS',
        existingReviewId: existingReview._id.toString(),
      });
    }

    const newReview = new this.reviewModel({
      productId: createReviewDto.productId,
      userId,
      userName,
      rating: createReviewDto.rating,
      text: createReviewDto.text,
      status: ReviewStatus.PUBLISHED,
      likesCount: 0,
    });

    const savedReview = await newReview.save();

    await this.productRatingService.onReviewCreated(
      savedReview.productId,
      savedReview.rating,
    );

    return this.mapToResponse(savedReview, false, userId);
  }

  /**
   * Получение всех опубликованных отзывов для продукта
   * @param productId - ID продукта
   * @param userId - ID текущего пользователя (для определения isLiked)
   * @returns Список отзывов
   */
  public async findByProductId(productId: string, userId?: string): Promise<ReviewResponse[]> {
    const reviews = await this.reviewModel
      .find({ productId, status: ReviewStatus.PUBLISHED })
      .sort({ createdAt: -1 })
      .exec();

    // Получаем информацию о лайках пользователя (если авторизован)
    const reviewIds = reviews.map((r) => r._id.toString());
    const likesMap = userId ? await this.checkUserLikes(reviewIds, userId) : new Map();

    return reviews.map((review) => {
      const reviewId = review._id.toString();
      const isLiked = likesMap.get(reviewId) || false;
      return this.mapToResponse(review, isLiked, userId);
    });
  }

  /**
   * Получение отзывов для продукта с пагинацией и summary
   * @param productId - ID продукта
   * @param page - Номер страницы (начиная с 1)
   * @param pageSize - Количество элементов на странице (максимум 50)
   * @param userId - ID текущего пользователя (для определения isLiked)
   * @param sortBy - Сортировка
   * @param ratingFilter - Фильтр по рейтингу (опционально)
   * @returns Объект с массивом отзывов, пагинацией и summary
   */
  public async findByProductIdWithPagination(
    productId: string,
    page: number = 1,
    pageSize: number = 20,
    userId?: string,
    sortBy: ReviewSortBy = ReviewSortBy.NEWEST,
    ratingFilter?: number,
  ): Promise<ReviewsPaginatedResponse> {
    // Ограничиваем pageSize максимум 50
    const clampedPageSize = Math.min(pageSize, 50);
    const skip = (page - 1) * clampedPageSize;

    // Базовый фильтр - только опубликованные отзывы
    const filter: ReviewFilter = { productId, status: ReviewStatus.PUBLISHED };

    // Добавляем фильтр по рейтингу если указан
    if (ratingFilter) {
      filter.rating = ratingFilter;
    }

    // Определяем сортировку
    const sortOptions = this.getSortOptions(sortBy);

    // Параллельно получаем отзывы, общее количество и summary
    const [reviews, total, summary] = await Promise.all([
      this.reviewModel.find(filter).sort(sortOptions).skip(skip).limit(clampedPageSize).exec(),
      this.reviewModel.countDocuments(filter).exec(),
      this.getReviewsSummary(productId),
    ]);

    // Получаем информацию о лайках пользователя (если авторизован)
    const reviewIds = reviews.map((r) => r._id.toString());
    const likesMap = userId ? await this.checkUserLikes(reviewIds, userId) : new Map();

    const items = reviews.map((review) => {
      const reviewId = review._id.toString();
      const isLiked = likesMap.get(reviewId) || false;
      return this.mapToResponse(review, isLiked, userId);
    });

    return {
      items,
      page,
      pageSize: clampedPageSize,
      total,
      summary,
    };
  }

  /**
   * Получение параметров сортировки на основе типа
   * @param sortBy - Тип сортировки
   * @returns Объект параметров сортировки для Mongoose
   * Важно: всегда используем tie-breaker (createdAt) для стабильности результатов
   */
  private getSortOptions(sortBy: ReviewSortBy): Record<string, 1 | -1> {
    switch (sortBy) {
      case ReviewSortBy.OLDEST:
        return { createdAt: 1 };
      case ReviewSortBy.RATING_DESC:
        // Сортировка: высокий рейтинг → новые (tie-breaker)
        return { rating: -1, createdAt: -1 };
      case ReviewSortBy.RATING_ASC:
        // Сортировка: низкий рейтинг → новые (tie-breaker)
        return { rating: 1, createdAt: -1 };
      case ReviewSortBy.MOST_LIKED:
        // Сортировка по лайкам с tie-breaker для стабильности
        return { likesCount: -1, createdAt: -1 };
      default:
        return { createdAt: -1 }; // NEWEST по умолчанию
    }
  }

  /**
   * Получение суммарной статистики отзывов для продукта
   * @param productId - ID продукта (строка)
   * @returns Статистика с avg, count и distribution
   */
  public async getReviewsSummary(productId: string): Promise<ReviewsSummary> {
    // Преобразуем строку в ObjectId для корректного сравнения в MongoDB
    const productObjectId = new Types.ObjectId(productId);

    const aggregation = await this.reviewModel.aggregate([
      { 
        $match: { 
          productId: productObjectId, 
          status: ReviewStatus.PUBLISHED 
        } 
      },
      {
        $group: {
          _id: null,
          avg: { $avg: '$rating' },
          count: { $sum: 1 },
          ratings: { $push: '$rating' }
        }
      }
    ]).exec();

    // Если отзывов нет
    if (!aggregation.length) {
      return {
        avg: 0,
        count: 0,
        distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      };
    }

    const result = aggregation[0];
    const ratings = result.ratings || [];

    // Подсчитываем распределение по звездам
    const distribution: RatingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    ratings.forEach((rating: number) => {
      if (rating >= 1 && rating <= 5) {
        distribution[rating as keyof RatingDistribution]++;
      }
    });

    return {
      avg: Math.round((result.avg || 0) * 10) / 10, // Округляем до 1 знака после запятой
      count: result.count || 0,
      distribution,
    };
  }

  /**
   * Получение отзыва по ID
   * @param id - ID отзыва
   * @param includeDeleted - Включать ли удалённые/скрытые (для админа/владельца)
   * @returns Отзыв
   */
  public async findOne(id: string, includeDeleted: boolean = false): Promise<ReviewDocument> {
    const review = await this.reviewModel.findById(id).exec();

    if (!review) {
      throw new NotFoundException(`Отзыв с ID ${id} не найден`);
    }

    // Публичный доступ - только PUBLISHED
    if (!includeDeleted && review.status !== ReviewStatus.PUBLISHED) {
      throw new NotFoundException(`Отзыв с ID ${id} не найден`);
    }

    return review;
  }

  /**
   * Получение публичного отзыва по ID с проверкой лайка
   * @param id - ID отзыва
   * @param userId - ID пользователя (опционально, для проверки isLiked)
   * @returns Отзыв с полем isLiked
   */
  public async getPublicReview(id: string, userId?: string): Promise<ReviewResponse> {
    const review = await this.findOne(id, false); // Только PUBLISHED
    
    const isLiked = userId ? await this.checkUserLiked(id, userId) : false;
    return this.mapToResponse(review, isLiked, userId);
  }

  /**
   * Обновление отзыва
   * @param id - ID отзыва
   * @param userId - ID пользователя (для проверки прав)
   * @param updateReviewDto - Данные для обновления
   * @returns Обновленный отзыв
   */
  public async update(
    id: string,
    userId: string,
    updateReviewDto: UpdateReviewDto,
  ): Promise<ReviewResponse> {
    // Получаем с includeDeleted=true чтобы проверить владельца
    const review = await this.findOne(id, true);
    const oldRating = review.rating;

    // Проверяем, что пользователь обновляет свой отзыв
    // Преобразуем userId из базы в строку для корректного сравнения
    if (review.userId.toString() !== userId) {
      throw new ForbiddenException('Вы можете редактировать только свои отзывы');
    }

    // Проверяем статус: DELETED или HIDDEN нельзя редактировать
    if (review.status === ReviewStatus.DELETED) {
      throw new ForbiddenException('Невозможно редактировать удаленный отзыв');
    }
    if (review.status === ReviewStatus.HIDDEN) {
      throw new ForbiddenException('Невозможно редактировать скрытый отзыв. Обратитесь к администратору.');
    }

    Object.assign(review, updateReviewDto);
    const savedReview = await review.save();

    if (review.status === ReviewStatus.PUBLISHED && oldRating !== savedReview.rating) {
      await this.productRatingService.onReviewRatingChanged(
        savedReview.productId,
        oldRating,
        savedReview.rating,
      );
    }
    
    // Проверяем isLiked для текущего пользователя
    const isLiked = await this.checkUserLiked(id, userId);
    return this.mapToResponse(savedReview, isLiked, userId);
  }

  /**
   * Удаление отзыва (soft delete - изменение status на DELETED)
   * @param id - ID отзыва
   * @param userId - ID пользователя (для проверки прав)
   * @param isAdmin - Является ли пользователь администратором
   * @returns Удаленный отзыв
   */
  public async remove(id: string, userId: string, isAdmin: boolean = false): Promise<ReviewResponse> {
    // Получаем с includeDeleted=true для админа/владельца
    const review = await this.findOne(id, true);
    const wasPublished = review.status === ReviewStatus.PUBLISHED;

    // Проверяем права: либо автор отзыва, либо администратор
    if (String(review.userId) !== String(userId) && !isAdmin) {
      throw new ForbiddenException('Вы можете удалять только свои отзывы');
    }

    // Soft delete - меняем статус вместо физического удаления
    review.status = ReviewStatus.DELETED;
    const savedReview = await review.save();

    if (wasPublished) {
      await this.productRatingService.onReviewUnpublished(
        savedReview.productId,
        savedReview.rating,
      );
    }
    
    const isLiked = await this.checkUserLiked(id, userId);
    return this.mapToResponse(savedReview, isLiked, userId);
  }

  /**
   * Переключение лайка отзыва (полностью атомарная операция)
   * Использует $inc для атомарного обновления likesCount без race conditions
   * @param reviewId - ID отзыва
   * @param userId - ID пользователя
   * @returns Обновленный отзыв с полями isLiked и likesCount
   */
  public async toggleLike(reviewId: string, userId: string): Promise<ReviewResponse> {
    // Получаем с includeDeleted=true для корректной обработки статусов
    const review = await this.findOne(reviewId, true);

    // Проверяем статус: можно лайкнуть только PUBLISHED
    if (review.status === ReviewStatus.DELETED) {
      throw new ForbiddenException('Невозможно лайкнуть удаленный отзыв');
    }
    if (review.status === ReviewStatus.HIDDEN) {
      throw new ForbiddenException('Невозможно лайкнуть скрытый отзыв');
    }

    let isLiked = false;

    try {
      // Пытаемся создать лайк (атомарная операция благодаря unique index)
      const newLike = new this.reviewLikeModel({ reviewId, userId });
      await newLike.save();
      
      // Атомарный инкремент через $inc (избегает race conditions)
      await this.reviewModel.updateOne(
        { _id: reviewId },
        { $inc: { likesCount: 1 } },
      ).exec();
      
      isLiked = true;
    } catch (error: any) {
      // Если duplicate key (код 11000) - лайк уже существует, удаляем его
      if (error.code === 11000) {
        await this.reviewLikeModel.deleteOne({ reviewId, userId }).exec();
        
        // Атомарный декремент с защитой от отрицательных значений
        await this.reviewModel.updateOne(
          { _id: reviewId, likesCount: { $gt: 0 } },
          { $inc: { likesCount: -1 } },
        ).exec();
        
        isLiked = false;
      } else {
        throw error;
      }
    }

    // Перечитываем отзыв для получения актуального likesCount
    const updatedReview = await this.reviewModel.findById(reviewId).exec();
    if (!updatedReview) {
      throw new NotFoundException(`Отзыв с ID ${reviewId} не найден`);
    }

    return this.mapToResponse(updatedReview, isLiked, userId);
  }

  /**
   * Проверка, лайкнул ли пользователь отзыв
   * @param reviewId - ID отзыва
   * @param userId - ID пользователя
   * @returns true если пользователь лайкнул отзыв
   */
  private async checkUserLiked(reviewId: string, userId: string): Promise<boolean> {
    const like = await this.reviewLikeModel.findOne({ reviewId, userId }).exec();
    return !!like;
  }

  /**
   * Проверка лайков для массива отзывов
   * @param reviewIds - Массив ID отзывов
   * @param userId - ID пользователя
   * @returns Map с ID отзыва и булевым значением isLiked
   */
  public async checkUserLikes(reviewIds: string[], userId: string): Promise<Map<string, boolean>> {
    const likes = await this.reviewLikeModel
      .find({
        reviewId: { $in: reviewIds },
        userId,
      })
      .exec();

    const likesMap = new Map<string, boolean>();
    reviewIds.forEach((id) => likesMap.set(id, false));
    likes.forEach((like) => likesMap.set(like.reviewId, true));

    return likesMap;
  }

  /**
   * Получение количества отзывов для продукта
   * @param productId - ID продукта
   * @returns Количество опубликованных отзывов
   */
  public async getReviewsCount(productId: string): Promise<number> {
    return await this.reviewModel
      .countDocuments({
        productId,
        status: ReviewStatus.PUBLISHED,
      })
      .exec();
  }

  /**
   * Получение отзыва пользователя для продукта
   * Используется для проверки существования отзыва и получения его для редактирования
   * @param productId - ID продукта
   * @param userId - ID пользователя
   * @returns Отзыв пользователя или null
   */
  public async getUserReviewForProduct(
    productId: string,
    userId: string,
  ): Promise<ReviewResponse | null> {
    const review = await this.reviewModel
      .findOne({
        productId,
        userId,
        status: { $ne: ReviewStatus.DELETED },
      })
      .exec();

    if (!review) {
      return null;
    }

    const isLiked = await this.checkUserLiked(review._id.toString(), userId);
    return this.mapToResponse(review, isLiked, userId);
  }

  /**
   * Преобразование документа отзыва в response объект
   * @param review - Документ отзыва
   * @param isLiked - Лайкнул ли пользователь отзыв
   * @param requestUserId - ID пользователя выполняющего запрос (опционально)
   * @returns ReviewResponse объект
   * Важно: isLiked всегда возвращается (false для неавторизованных) для стабильности контракта API
   */
  private mapToResponse(
    review: ReviewDocument,
    isLiked: boolean,
    requestUserId?: string,
  ): ReviewResponse {
    return {
      id: review._id.toString(),
      productId: review.productId,
      userId: review.userId.toString(), // Всегда преобразуем в строку
      userName: review.userName,
      rating: review.rating,
      text: review.text,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
      likesCount: review.likesCount ?? 0,
      isLiked: isLiked, // Всегда boolean, даже для неавторизованных (false)
    };
  }
}
