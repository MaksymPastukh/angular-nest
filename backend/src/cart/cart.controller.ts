import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { RemoveFromCartDto } from './dto/remove-from-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { ICartResponse } from './types/cart.interface';

/**
 * Контроллер для управления корзиной
 */
@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  /**
   * Получить корзину текущего пользователя
   * GET /cart
   * @param req - Запрос с данными пользователя
   * @returns Корзина пользователя
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  public async getCart(@Request() req: any): Promise<ICartResponse> {
    const userId = req.user.id as string;
    return await this.cartService.getCart(userId);
  }

  /**
   * Получить количество товаров в корзине
   * GET /cart/count
   * @param req - Запрос с данными пользователя
   * @returns Количество товаров
   */
  @Get('count')
  @HttpCode(HttpStatus.OK)
  public async getCartCount(@Request() req: any): Promise<{ count: number }> {
    const userId = req.user.id as string;
    const count = await this.cartService.getCartItemsCount(userId);
    return { count };
  }

  /**
   * Добавить товар в корзину
   * POST /cart
   * @param req - Запрос с данными пользователя
   * @param addToCartDto - Данные товара для добавления
   * @returns Обновленная корзина
   */
  @Post()
  @HttpCode(HttpStatus.OK)
  public async addToCart(
    @Request() req: any,
    @Body() addToCartDto: AddToCartDto,
  ): Promise<ICartResponse> {
    const userId = req.user.id as string;
    return await this.cartService.addToCart(userId, addToCartDto);
  }

  /**
   * Обновить количество товара в корзине
   * PATCH /cart/item
   * @param req - Запрос с данными пользователя
   * @param updateDto - Данные для обновления
   * @returns Обновленная корзина
   */
  @Patch('item')
  @HttpCode(HttpStatus.OK)
  public async updateCartItem(
    @Request() req: any,
    @Body() updateDto: UpdateCartItemDto,
  ): Promise<ICartResponse> {
    const userId = req.user.id as string;
    return await this.cartService.updateCartItem(userId, updateDto);
  }

  /**
   * Удалить товар из корзины
   * DELETE /cart/item
   * @param req - Запрос с данными пользователя
   * @param removeDto - Данные для удаления
   * @returns Обновленная корзина
   */
  @Delete('item')
  @HttpCode(HttpStatus.OK)
  public async removeFromCart(
    @Request() req: any,
    @Body() removeDto: RemoveFromCartDto,
  ): Promise<ICartResponse> {
    const userId = req.user.id as string;
    return await this.cartService.removeFromCart(userId, removeDto);
  }

  /**
   * Очистить всю корзину
   * DELETE /cart
   * @param req - Запрос с данными пользователя
   * @returns Пустая корзина
   */
  @Delete()
  @HttpCode(HttpStatus.OK)
  public async clearCart(@Request() req: any): Promise<ICartResponse> {
    const userId = req.user.id as string;
    return await this.cartService.clearCart(userId);
  }
}
