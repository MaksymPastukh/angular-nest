import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OptionalJwtAuthGuard } from '../auth/guards/optional-jwt-auth.guard';
import { CreateReviewDto } from './dto/create-review.dto';
import { FilterReviewDto, ReviewSortBy } from './dto/filter-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import type {
  RequestWithOptionalUser,
  RequestWithUser,
} from './interfaces/request-user.interface';
import {
  ReviewResponse,
  ReviewsPaginatedResponse,
  ReviewsSummary,
} from './interfaces/review-response.interface';
import { ReviewsService } from './reviews.service';

/**
 * Контроллер для управления отзывами и рейтингами продуктов
 */
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  /**
   * Создание нового отзыва
   * POST /reviews
   * Тело запроса: { productId, rating, text }
   * Rate limit: 10 запросов в минуту для предотвращения спама
   * @param createReviewDto - Данные отзыва (productId, rating 1-5, text 3-1000 символов)
   * @param req - Запрос с данными авторизованного пользователя
   * @returns Созданный отзыв
   * @throws ConflictException если пользователь уже оставил отзыв на этот продукт
   */
  @Post()
  @UseGuards(JwtAuthGuard)
  @Throttle({ default: { limit: 10, ttl: 60000 } }) // 10 запросов в минуту
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Body() createReviewDto: CreateReviewDto,
    @Request() req: RequestWithUser,
  ): Promise<ReviewResponse> {
    const userId = req.user.id;
    const userName = req.user.firstName ?? req.user.email;
    return await this.reviewsService.create(userId, userName, createReviewDto);
  }

  /**
   * Получение отзывов для продукта с пагинацией, фильтрацией и статистикой
   * GET /reviews?productId=xxx&page=1&pageSize=20&sortBy=newest&rating=5
   * @param filterDto - Параметры фильтрации и пагинации
   * @param req - Запрос с опциональными данными пользователя
   * @returns Объект с отзывами, пагинацией и summary (avg rating, count, distribution)
   */
  @Get()
  @UseGuards(OptionalJwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async findByProduct(
    @Query() filterDto: FilterReviewDto,
    @Request() req?: RequestWithOptionalUser,
  ): Promise<ReviewsPaginatedResponse> {
    const userId = req?.user?.id;
    const page = parseInt(filterDto.page || '1', 10);
    const pageSize = parseInt(filterDto.pageSize || '20', 10);
    const sortBy = filterDto.sortBy || ReviewSortBy.NEWEST;
    const ratingFilter = filterDto.rating
      ? parseInt(filterDto.rating, 10)
      : undefined;

    return await this.reviewsService.findByProductIdWithPagination(
      filterDto.productId,
      page,
      pageSize,
      userId,
      sortBy,
      ratingFilter,
    );
  }

  /**
   * Получение суммарной статистики отзывов для продукта
   * GET /reviews/product/:productId/summary
   * @param productId - ID продукта
   * @returns Статистика: средний рейтинг, количество отзывов, распределение по звездам
   */
  @Get('product/:productId/summary')
  @HttpCode(HttpStatus.OK)
  public async getProductSummary(
    @Param('productId') productId: string,
  ): Promise<ReviewsSummary> {
    return await this.reviewsService.getReviewsSummary(productId);
  }

  /**
   * Получение отзыва пользователя для конкретного продукта
   * GET /reviews/user/product/:productId
   * Используется для проверки существования отзыва и его редактирования
   * @param productId - ID продукта
   * @param req - Запрос с данными авторизованного пользователя
   * @returns Отзыв пользователя или null если не существует
   */
  @Get('user/product/:productId')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async getUserReview(
    @Param('productId') productId: string,
    @Request() req: RequestWithUser,
  ): Promise<ReviewResponse | null> {
    const userId = req.user.id;
    return await this.reviewsService.getUserReviewForProduct(productId, userId);
  }

  /**
   * Получение отзыва по ID
   * GET /reviews/:id
   * @param id - ID отзыва
   * @param req - Запрос с опциональными данными пользователя
   * @returns Отзыв с полем isLiked (всегда присутствует, false для неавторизованных)
   */
  @Get(':id')
  @UseGuards(OptionalJwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async findOne(
    @Param('id') id: string,
    @Request() req?: RequestWithOptionalUser,
  ): Promise<ReviewResponse> {
    const userId = req?.user?.id;
    return await this.reviewsService.getPublicReview(id, userId);
  }

  /**
   * Обновление отзыва
   * PATCH /reviews/:id
   * @param id - ID отзыва
   * @param updateReviewDto - Данные для обновления (rating и/или text)
   * @param req - Запрос с данными авторизованного пользователя
   * @returns Обновленный отзыв
   * @throws ForbiddenException если пользователь не является автором отзыва
   */
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async update(
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto,
    @Request() req: RequestWithUser,
  ): Promise<ReviewResponse> {
    const userId = req.user.id;
    return await this.reviewsService.update(id, userId, updateReviewDto);
  }

  /**
   * Удаление отзыва (soft delete - изменение статуса на DELETED)
   * DELETE /reviews/:id
   * @param id - ID отзыва
   * @param req - Запрос с данными авторизованного пользователя
   * @returns Удаленный отзыв
   * @throws ForbiddenException если пользователь не автор и не админ
   */
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public async remove(
    @Param('id') id: string,
    @Request() req: RequestWithUser,
  ): Promise<ReviewResponse> {
    const userId = req.user.id;
    const isAdmin = req.user.role === 'admin';
    return await this.reviewsService.remove(id, userId, isAdmin);
  }

  /**
   * Лайк/дизлайк отзыва (toggle)
   * POST /reviews/:id/like
   * Rate limit: 30 запросов в минуту для предотвращения злоупотреблений
   * @param id - ID отзыва
   * @param req - Запрос с данными авторизованного пользователя
   * @returns Обновленный отзыв с likesCount и isLiked
   */
  @Post(':id/like')
  @UseGuards(JwtAuthGuard)
  @Throttle({ default: { limit: 30, ttl: 60000 } }) // 30 запросов в минуту
  @HttpCode(HttpStatus.OK)
  public async toggleLike(
    @Param('id') id: string,
    @Request() req: RequestWithUser,
  ): Promise<ReviewResponse> {
    const userId = req.user.id;
    return await this.reviewsService.toggleLike(id, userId);
  }
}
