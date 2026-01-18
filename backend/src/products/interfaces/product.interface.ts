import { Document } from 'mongoose';

/**
 * Интерфейс для комментария пользователя
 */
export interface IUserComment {
  /** ID пользователя */
  userId: string;

  /** Имя пользователя */
  userName: string;

  /** Текст комментария */
  text: string;

  /** Рейтинг (0-5) */
  rating: number;

  /** Дата создания */
  createdAt: Date;

  /** Дата обновления */
  updatedAt: Date;
}

/**
 * Интерфейс для ответа на вопрос
 */
export interface IAnswer {
  /** ID пользователя */
  userId: string;

  /** Имя пользователя */
  userName: string;

  /** Текст ответа */
  text: string;

  /** Дата создания */
  createdAt: Date;

  /** Дата обновления */
  updatedAt: Date;
}

/**
 * Интерфейс для вопроса и ответов
 */
export interface IQuestionAnswer {
  /** ID пользователя, задавшего вопрос */
  userId: string;

  /** Имя пользователя */
  userName: string;

  /** Текст вопроса */
  question: string;

  /** Массив ответов */
  answers: IAnswer[];

  /** Дата создания */
  createdAt: Date;

  /** Дата обновления */
  updatedAt: Date;
}

/**
 * Интерфейс для продукта
 * Описывает структуру данных продукта в магазине
 */
export interface IProduct {
  /** Название продукта */
  title: string;

  /** Рейтинг продукта (0-5) */
  rating: number;

  /** Бренд/производитель продукта */
  brand: string;

  /** Путь к изображению продукта */
  image: string;

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

  /** Цвет продукта */
  color: string;

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

  /** Комментарии пользователей */
  userComments: IUserComment[];

  /** Вопросы и ответы */
  questionsAnswers: IQuestionAnswer[];

  /** ID пользователей, которые добавили в избранное */
  likedBy: string[];
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

  /** Текущая страница */
  page: number;

  /** Количество элементов на странице */
  limit: number;

  /** Общее количество страниц */
  totalPages: number;
}
