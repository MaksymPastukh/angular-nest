import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../products/schemas/product.schema';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { RemoveFromCartDto } from './dto/remove-from-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { Cart, CartDocument, CartItem } from './schemas/cart.schema';
import { ICartResponse } from './types/cart.interface';

/**
 * Сервис для работы с корзиной
 */
@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name)
    private readonly cartModel: Model<CartDocument>,
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  /**
   * Получить или создать корзину пользователя
   * @param userId - ID пользователя
   * @returns Корзина пользователя
   */
  private async getOrCreateCart(userId: string): Promise<CartDocument> {
    let cart = await this.cartModel.findOne({ userId }).exec();

    if (!cart) {
      cart = new this.cartModel({
        userId,
        items: [],
        totalPrice: 0,
        totalItems: 0,
      });
      await cart.save();
    }

    return cart;
  }

  /**
   * Пересчитать итоги корзины
   * @param cart - Документ корзины
   */
  private recalculateTotals(cart: CartDocument): void {
    cart.totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cart.totalPrice = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  /**
   * Трансформация корзины для ответа клиенту
   * @param cart - Документ корзины
   * @returns Ответ с корзиной
   */
  private transformCartResponse(cart: CartDocument): ICartResponse {
    const cartObj = cart.toObject();
    const { userId, ...rest } = cartObj;

    return {
      ...rest,
      isEmpty: cart.items.length === 0,
    };
  }

  /**
   * Получить корзину пользователя
   * @param userId - ID пользователя
   * @returns Корзина пользователя
   */
  public async getCart(userId: string): Promise<ICartResponse> {
    const cart = await this.getOrCreateCart(userId);
    return this.transformCartResponse(cart);
  }

  /**
   * Добавить товар в корзину
   * @param userId - ID пользователя
   * @param addToCartDto - Данные товара
   * @returns Обновленная корзина
   */
  public async addToCart(userId: string, addToCartDto: AddToCartDto): Promise<ICartResponse> {
    const cart = await this.getOrCreateCart(userId);

    // Получаем информацию о продукте
    const product = await this.productModel.findById(addToCartDto.productId).exec();

    if (!product) {
      throw new NotFoundException(`Продукт с ID ${addToCartDto.productId} не найден`);
    }

    // Проверяем доступность размера
    if (!product.size.includes(addToCartDto.size)) {
      throw new BadRequestException(`Размер ${addToCartDto.size} недоступен для данного продукта`);
    }

    // Проверяем, есть ли уже этот товар с таким же размером
    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === addToCartDto.productId && item.size === addToCartDto.size,
    );

    if (existingItemIndex !== -1) {
      // Увеличиваем количество существующего товара
      cart.items[existingItemIndex].quantity += addToCartDto.quantity;
    } else {
      // Добавляем новый товар
      const newItem: CartItem = {
        productId: product._id.toString(),
        productTitle: product.title,
        productImage: product.image,
        price: product.price,
        quantity: addToCartDto.quantity,
        size: addToCartDto.size,
        color: product.color,
        addedAt: new Date(),
      };

      cart.items.push(newItem as any);
    }

    this.recalculateTotals(cart);
    await cart.save();

    return this.transformCartResponse(cart);
  }

  /**
   * Обновить количество товара в корзине
   * @param userId - ID пользователя
   * @param updateDto - Данные для обновления
   * @returns Обновленная корзина
   */
  public async updateCartItem(userId: string, updateDto: UpdateCartItemDto): Promise<ICartResponse> {
    const cart = await this.getOrCreateCart(userId);

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === updateDto.productId && item.size === updateDto.size,
    );

    if (itemIndex === -1) {
      throw new NotFoundException('Товар не найден в корзине');
    }

    cart.items[itemIndex].quantity = updateDto.quantity;
    this.recalculateTotals(cart);
    await cart.save();

    return this.transformCartResponse(cart);
  }

  /**
   * Удалить товар из корзины
   * @param userId - ID пользователя
   * @param removeDto - Данные для удаления
   * @returns Обновленная корзина
   */
  public async removeFromCart(userId: string, removeDto: RemoveFromCartDto): Promise<ICartResponse> {
    const cart = await this.getOrCreateCart(userId);

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === removeDto.productId && item.size === removeDto.size,
    );

    if (itemIndex === -1) {
      throw new NotFoundException('Товар не найден в корзине');
    }

    cart.items.splice(itemIndex, 1);
    this.recalculateTotals(cart);
    await cart.save();

    return this.transformCartResponse(cart);
  }

  /**
   * Очистить всю корзину
   * @param userId - ID пользователя
   * @returns Пустая корзина
   */
  public async clearCart(userId: string): Promise<ICartResponse> {
    const cart = await this.getOrCreateCart(userId);

    cart.items = [];
    cart.totalPrice = 0;
    cart.totalItems = 0;
    await cart.save();

    return this.transformCartResponse(cart);
  }

  /**
   * Получить количество товаров в корзине
   * @param userId - ID пользователя
   * @returns Количество товаров
   */
  public async getCartItemsCount(userId: string): Promise<number> {
    const cart = await this.getOrCreateCart(userId);
    return cart.totalItems;
  }
}
