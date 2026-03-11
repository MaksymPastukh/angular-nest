import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Product,
  ProductDocument,
  ProductImage,
} from '../products/schemas/product.schema';
import { AddWishlistItemDto } from './dto/add-wishlist-item.dto';
import {
  IAddWishlistItemResponse,
  IContainsResponse,
  IEnrichedWishlistItem,
  IGetWishlistResponse,
  IWishlistCountResponse,
  IWishlistProductData,
} from './interfaces/wishlist.interface';
import { WishlistItem, WishlistItemDocument } from './schemas/wishlist-item.schema';

type ProductImageInput =
  | string
  | {
      key?: string;
      alt?: string;
      width?: number;
      height?: number;
    };

/**
 * Сервис для работы с wishlist
 * Реализует user-centric "saved items" с упором на производительность и надежность
 */
@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(WishlistItem.name)
    private readonly wishlistItemModel: Model<WishlistItemDocument>,
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  /**
   * Добавить товар в wishlist (идемпотентная операция)
   * @param userId - ID пользователя
   * @param productId - ID продукта
   * @param dto - Дополнительные данные (source, note)
   * @returns Объект с информацией о добавленном товаре
   */
  public async addItem(
    userId: string,
    productId: string,
    dto: AddWishlistItemDto,
  ): Promise<IAddWishlistItemResponse> {
    // Проверяем существование продукта
    const productExists = await this.productModel.exists({ _id: productId }).exec();
    if (!productExists) {
      throw new NotFoundException(`Product with id ${productId} not found`);
    }

    // Пытаемся найти существующий элемент
    const existingItem = await this.wishlistItemModel
      .findOne({ userId, productId })
      .exec();

    if (existingItem) {
      // Элемент уже существует - идемпотентность
      return {
        productId: existingItem.productId,
        addedAt: existingItem.addedAt,
        isNew: false,
      };
    }

    // Создаем новый элемент
    const newItem = await this.wishlistItemModel.create({
      userId,
      productId,
      addedAt: new Date(),
      source: dto.source,
      note: dto.note,
    });

    return {
      productId: newItem.productId,
      addedAt: newItem.addedAt,
      isNew: true,
    };
  }

  /**
   * Удалить товар из wishlist (идемпотентная операция)
   * @param userId - ID пользователя
   * @param productId - ID продукта
   */
  public async removeItem(userId: string, productId: string): Promise<void> {
    // Удаляем элемент, если он существует
    // Даже если элемента нет, операция успешна (идемпотентность)
    await this.wishlistItemModel.deleteOne({ userId, productId }).exec();
  }

  /**
   * Очистить весь wishlist пользователя
   * @param userId - ID пользователя
   */
  public async clearWishlist(userId: string): Promise<void> {
    await this.wishlistItemModel.deleteMany({ userId }).exec();
  }

  /**
   * Получить wishlist с пагинацией и обогащением данными продуктов
   * @param userId - ID пользователя
   * @param cursor - Курсор для пагинации (опционально)
   * @param limit - Количество элементов на странице (по умолчанию 20)
   * @returns Обогащенный список товаров с пагинацией
   */
  public async getWishlist(
    userId: string,
    cursor?: string,
    limit: number = 20,
  ): Promise<IGetWishlistResponse> {
    // Строим запрос с учетом курсора
    const query: Record<string, unknown> = { userId };

    if (cursor) {
      // Декодируем курсор (формат: timestamp_id)
      const decodedCursor = this.decodeCursor(cursor);
      if (decodedCursor) {
        query.$or = [
          { addedAt: { $lt: decodedCursor.addedAt } },
          {
            addedAt: decodedCursor.addedAt,
            _id: { $lt: decodedCursor.id },
          },
        ];
      }
    }

    // Получаем элементы wishlist с сортировкой по дате (desc)
    // Запрашиваем limit + 1, чтобы определить наличие следующей страницы
    const wishlistItems = await this.wishlistItemModel
      .find(query)
      .sort({ addedAt: -1, _id: -1 })
      .limit(limit + 1)
      .lean()
      .exec();

    // Определяем, есть ли еще элементы
    const hasMore = wishlistItems.length > limit;
    const items = hasMore ? wishlistItems.slice(0, limit) : wishlistItems;

    // Получаем ID продуктов для обогащения
    const productIds = items.map((item) => item.productId);

    // Загружаем данные продуктов одним запросом (batch)
    const products = await this.productModel
      .find({ _id: { $in: productIds } })
      .select('_id title brand price rating images category')
      .lean()
      .exec();

    // Создаем map для быстрого доступа к продуктам
    const productsMap = new Map<string, IWishlistProductData>();
    products.forEach((product) => {
      productsMap.set(product._id.toString(), {
        _id: product._id.toString(),
        title: product.title,
        brand: product.brand,
        price: product.price,
        rating: product.rating,
        images: this.normalizeImages(product.images as ProductImageInput[]),
        category: product.category,
        isHidden: false, // Поле для будущего расширения
        inStock: true, // Поле для будущего расширения
      });
    });

    // Обогащаем элементы wishlist данными продуктов
    const enrichedItems: IEnrichedWishlistItem[] = items.map((item) => {
      const product = productsMap.get(item.productId.toString());
      return {
        productId: item.productId.toString(),
        addedAt: item.addedAt,
        source: item.source,
        note: item.note,
        product: product || null,
        status: product ? 'available' : 'deleted_or_hidden',
      };
    });

    // Получаем общее количество элементов
    const total = await this.wishlistItemModel.countDocuments({ userId }).exec();

    // Генерируем курсор для следующей страницы
    let nextCursor: string | null = null;
    if (hasMore && items.length > 0) {
      const lastItem = items[items.length - 1];
      nextCursor = this.encodeCursor(lastItem.addedAt, lastItem._id.toString());
    }

    return {
      items: enrichedItems,
      nextCursor,
      hasMore,
      total,
    };
  }

  /**
   * Проверить наличие товаров в wishlist (батч-операция)
   * Используется для отображения "сердечек" на листинге каталога
   * @param userId - ID пользователя
   * @param productIds - Массив ID продуктов для проверки
   * @returns Map с результатами проверки для каждого продукта
   */
  public async containsProducts(
    userId: string,
    productIds: string[],
  ): Promise<IContainsResponse> {
    // Находим все элементы wishlist для указанных продуктов
    const wishlistItems = await this.wishlistItemModel
      .find({
        userId,
        productId: { $in: productIds },
      })
      .select('productId')
      .lean()
      .exec();

    // Создаем Set для быстрой проверки
    const wishlistProductIds = new Set(
      wishlistItems.map((item) => item.productId.toString()),
    );

    // Формируем ответ для всех запрошенных продуктов
    const result: IContainsResponse = {};
    productIds.forEach((productId) => {
      result[productId] = wishlistProductIds.has(productId);
    });

    return result;
  }

  /**
   * Получить количество товаров в wishlist
   * @param userId - ID пользователя
   * @returns Количество товаров
   */
  public async getCount(userId: string): Promise<IWishlistCountResponse> {
    const count = await this.wishlistItemModel.countDocuments({ userId }).exec();
    return { count };
  }

  /**
   * Кодировать курсор для пагинации
   * @param addedAt - Дата добавления
   * @param id - ID документа
   * @returns Закодированный курсор
   */
  private encodeCursor(addedAt: Date, id: string): string {
    const timestamp = addedAt.getTime();
    return Buffer.from(`${timestamp}_${id}`).toString('base64url');
  }

  /**
   * Декодировать курсор пагинации
   * @param cursor - Закодированный курсор
   * @returns Декодированные данные курсора или null
   */
  private decodeCursor(cursor: string): { addedAt: Date; id: string } | null {
    try {
      const decoded = Buffer.from(cursor, 'base64url').toString('utf-8');
      const [timestamp, id] = decoded.split('_');
      return {
        addedAt: new Date(parseInt(timestamp, 10)),
        id,
      };
    } catch {
      return null;
    }
  }

  private normalizeImages(images: ProductImageInput[] | undefined): ProductImage[] {
    if (!Array.isArray(images)) {
      return [];
    }

    return images
      .map((image) => this.normalizeImage(image))
      .filter((image): image is ProductImage => image !== null);
  }

  private normalizeImage(image: ProductImageInput): ProductImage | null {
    if (typeof image === 'string') {
      const key = this.normalizeImageKey(image);
      if (!key) return null;

      return {
        key,
        alt: this.buildAltFromKey(key),
      };
    }

    if (!image || typeof image !== 'object') {
      return null;
    }

    const key = this.normalizeImageKey(image.key ?? '');
    if (!key) {
      return null;
    }

    const width = this.toPositiveInt(image.width);
    const height = this.toPositiveInt(image.height);

    return {
      key,
      alt: image.alt?.trim() || this.buildAltFromKey(key),
      ...(width ? { width } : {}),
      ...(height ? { height } : {}),
    };
  }

  private normalizeImageKey(rawKey: string): string {
    const key = rawKey.trim();
    if (!key) return '';

    if (key.startsWith('/images/products/')) {
      return key.replace('/images/products/', 'products/');
    }

    if (key.startsWith('images/products/')) {
      return key.replace('images/products/', 'products/');
    }

    return key.startsWith('/') ? key.slice(1) : key;
  }

  private buildAltFromKey(key: string): string {
    const filename = key.split('/').pop() ?? 'product-image';
    const normalized = filename.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
    return normalized.length > 0 ? normalized : 'Product image';
  }

  private toPositiveInt(value: unknown): number | undefined {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      return undefined;
    }

    const parsed = Math.trunc(value);
    return parsed > 0 ? parsed : undefined;
  }
}
