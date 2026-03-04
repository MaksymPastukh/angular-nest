import { WishlistItemSource } from '../schemas/wishlist-item.schema';

/**
 * Базовый интерфейс элемента wishlist
 */
export interface IWishlistItem {
  productId: string;
  addedAt: Date;
  source?: WishlistItemSource;
  note?: string;
}

/**
 * Интерфейс для обогащенного элемента wishlist (с данными продукта)
 */
export interface IEnrichedWishlistItem extends IWishlistItem {
  product: IWishlistProductData | null;
  status: 'available' | 'deleted_or_hidden';
}

/**
 * Интерфейс данных продукта для wishlist
 * Содержит только необходимые поля для отображения карточки
 */
export interface IWishlistProductData {
  _id: string;
  title: string;
  brand: string;
  price: number;
  rating: number;
  images: string[];
  category: string;
  isHidden: boolean;
  inStock: boolean;
}

/**
 * Интерфейс ответа при получении wishlist с пагинацией
 */
export interface IGetWishlistResponse {
  items: IEnrichedWishlistItem[];
  nextCursor: string | null;
  hasMore: boolean;
  total: number;
}

/**
 * Интерфейс ответа при добавлении товара в wishlist
 */
export interface IAddWishlistItemResponse {
  productId: string;
  addedAt: Date;
  isNew: boolean;
}

/**
 * Интерфейс для батч-проверки наличия товаров в wishlist
 */
export interface IContainsResponse {
  [productId: string]: boolean;
}

/**
 * Интерфейс для счетчика wishlist
 */
export interface IWishlistCountResponse {
  count: number;
}
