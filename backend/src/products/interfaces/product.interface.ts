import { Document } from 'mongoose';
import { IProductFacets } from './facet.interface';

/**
 * Интерфейс для продукта
 * Описывает структуру данных продукта в магазине
 */
export interface IProduct {
  /** Название продукта */
  title: string;

  /** Рейтинг продукта (0-5) */
  rating: number;

  /** Денормализованные агрегаты рейтинга продукта */
  ratingStats?: IProductRatingStats;

  /** Бренд/производитель продукта */
  brand: string;

  /** Массив путей к изображениям продукта */
  images: string[];

  /** Цена продукта */
  price: number;

  /** Комментарий или краткое описание */
  comment: string;

  /** Категория продукта (Shop All, Men, Women, Combos, Joggers) */
  category: string;

  /** Тип товара для фильтрации (Tops, Printed T-shirts, и т.д.) */
  productType: string;

  /** Стиль одежды (Classic, Casual, Business, и т.д.) */
  dressStyle: string;

  /** Доступные цвета продукта */
  color: string[];

  /** Доступные размеры продукта */
  size: string[];

  /** Подробное описание продукта */
  description: string;

  /** Тип ткани */
  fabric: string;

  /** Узор/паттерн */
  pattern: string;

  /** Посадка/крой */
  fit: string;

  /** Тип выреза */
  neck: string;

  /** Тип рукава */
  sleeve: string;

  /** ID пользователей, которые добавили в избранное */
  likedBy: string[];
}

/**
 * Денормализованные агрегаты рейтинга продукта
 * Используются для быстрого каталога и карточек
 */
export interface IProductRatingStats {
  avg: number;
  count: number;
  sum: number;
  distribution: IRatingDistribution;
  updatedAt: Date | null;
}

/**
 * Распределение рейтинга по звездам
 */
export interface IRatingDistribution {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

/**
 * Интерфейс для документа продукта в MongoDB
 * Расширяет IProduct и добавляет функциональность Mongoose Document
 */
export interface IProductDocument extends IProduct, Document {
  /** Дата создания записи */
  createdAt: Date;

  /** Дата последнего обновления записи */
  updatedAt: Date;
}

/**
 * Интерфейс для ответа продукта с информацией о лайке текущего пользователя
 */
export interface IProductResponse extends IProductDocument {
  /** Лайкнул ли текущий пользователь этот продукт */
  isLiked?: boolean;
}

/**
 * Параметры фильтрации продуктов
 */
export interface IProductFilter {
  /** Фильтр по категории */
  category?: string;

  /** Фильтр по типу товара */
  productType?: string;

  /** Фильтр по стилю одежды */
  dressStyle?: string;

  /** Фильтр по бренду */
  brand?: string;

  /** Минимальная цена */
  minPrice?: number;

  /** Максимальная цена */
  maxPrice?: number;

  /** Минимальный рейтинг */
  minRating?: number;

  /** Фильтр по цвету */
  color?: string;

  /** Фильтр по размеру */
  size?: string;

  /** Поиск по названию */
  search?: string;
}

/**
 * Параметры сортировки продуктов
 */
export interface IProductSort {
  /** Поле для сортировки */
  sortBy?: 'price' | 'rating' | 'title' | 'createdAt';

  /** Направление сортировки */
  order?: 'asc' | 'desc';
}

/**
 * Параметры пагинации
 */
export interface IPagination {
  /** Номер страницы (начиная с 1) */
  page?: number;

  /** Количество элементов на странице */
  limit?: number;
}

/**
 * Ответ с пагинированным списком продуктов
 */
export interface IProductsResponse {
  /** Список продуктов */
  products: IProductDocument[];

  /** Общее количество продуктов */
  total: number;

  /** Общее количество страниц */
  totalPages: number;

  /** Фасеты (facets) для фильтрации продуктов */
  facets: IProductFacets;
}
