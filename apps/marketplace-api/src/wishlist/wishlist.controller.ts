import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ParseObjectIdPipe } from '../common/pipes/parse-objectid.pipe';
import { AddWishlistItemDto } from './dto/add-wishlist-item.dto';
import { ContainsQueryDto } from './dto/contains-query.dto';
import { GetWishlistQueryDto } from './dto/get-wishlist-query.dto';
import {
  IAddWishlistItemResponse,
  IContainsResponse,
  IGetWishlistResponse,
  IWishlistCountResponse,
} from './interfaces/wishlist.interface';
import { WishlistService } from './wishlist.service';

/**
 * Контроллер для управления wishlist (избранное)
 * Все эндпоинты требуют авторизации (JWT)
 */
@Controller('wishlist')
@UseGuards(JwtAuthGuard)
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  /**
   * Получить wishlist текущего пользователя с пагинацией
   * GET /wishlist?cursor=...&limit=20
   * @param userId - ID текущего пользователя (из JWT)
   * @param query - Параметры пагинации
   * @returns Список товаров в wishlist с обогащением данными
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  public async getWishlist(
    @CurrentUser('id') userId: string,
    @Query() query: GetWishlistQueryDto,
  ): Promise<IGetWishlistResponse> {
    return await this.wishlistService.getWishlist(
      userId,
      query.cursor,
      query.limit,
    );
  }

  /**
   * Добавить товар в wishlist (идемпотентная операция)
   * PUT /wishlist/items/:productId
   * @param userId - ID текущего пользователя (из JWT)
   * @param productId - ID продукта
   * @param dto - Дополнительные данные (source, note)
   * @returns Информация о добавленном товаре
   */
  @Put('items/:productId')
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { limit: 30, ttl: 60000 } }) // 30 добавлений в минуту
  public async addItem(
    @CurrentUser('id') userId: string,
    @Param('productId', ParseObjectIdPipe) productId: string,
    @Body() dto: AddWishlistItemDto,
  ): Promise<IAddWishlistItemResponse> {
    const result = await this.wishlistService.addItem(userId, productId, dto);
    // Возвращаем 201 Created для новых записей, 200 OK для существующих
    return result;
  }

  /**
   * Удалить товар из wishlist (идемпотентная операция)
   * DELETE /wishlist/items/:productId
   * @param userId - ID текущего пользователя (из JWT)
   * @param productId - ID продукта
   */
  @Delete('items/:productId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @Throttle({ default: { limit: 30, ttl: 60000 } }) // 30 удалений в минуту
  public async removeItem(
    @CurrentUser('id') userId: string,
    @Param('productId', ParseObjectIdPipe) productId: string,
  ): Promise<void> {
    await this.wishlistService.removeItem(userId, productId);
  }

  /**
   * Очистить весь wishlist
   * DELETE /wishlist
   * @param userId - ID текущего пользователя (из JWT)
   */
  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 очисток в минуту
  public async clearWishlist(@CurrentUser('id') userId: string): Promise<void> {
    await this.wishlistService.clearWishlist(userId);
  }

  /**
   * Проверить наличие товаров в wishlist (батч-операция)
   * GET /wishlist/contains?ids=productId1,productId2,...
   * Используется для отображения "сердечек" на листинге каталога
   * @param userId - ID текущего пользователя (из JWT)
   * @param query - Массив ID продуктов для проверки
   * @returns Map с результатами проверки для каждого продукта
   */
  @Get('contains')
  @HttpCode(HttpStatus.OK)
  public async containsProducts(
    @CurrentUser('id') userId: string,
    @Query() query: ContainsQueryDto,
  ): Promise<IContainsResponse> {
    return await this.wishlistService.containsProducts(userId, query.ids);
  }

  /**
   * Получить количество товаров в wishlist
   * GET /wishlist/count
   * @param userId - ID текущего пользователя (из JWT)
   * @returns Количество товаров
   */
  @Get('count')
  @HttpCode(HttpStatus.OK)
  public async getCount(@CurrentUser('id') userId: string): Promise<IWishlistCountResponse> {
    return await this.wishlistService.getCount(userId);
  }
}
