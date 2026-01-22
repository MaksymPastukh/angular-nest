/**
 * Интерфейс для элемента корзины
 */
export interface ICartItem {
  /** ID продукта */
  productId: string;

  /** Название продукта (для быстрого отображения) */
  productTitle: string;

  /** Изображение продукта */
  productImage: string;

  /** Цена продукта на момент добавления */
  price: number;

  /** Количество единиц товара */
  quantity: number;

  /** Выбранный размер */
  size: string;

  /** Цвет продукта */
  color: string;

  /** Дата добавления в корзину */
  addedAt: Date;
}

/**
 * Интерфейс для корзины пользователя
 */
export interface ICart {
  /** ID корзины */
  id?: string;

  /** ID пользователя */
  userId: string;

  /** Список товаров в корзине */
  items: ICartItem[];

  /** Общая стоимость всех товаров */
  totalPrice: number;

  /** Общее количество товаров */
  totalItems: number;

  /** Дата создания корзины */
  createdAt: Date;

  /** Дата последнего обновления */
  updatedAt: Date;
}

/**
 * Интерфейс для ответа с корзиной
 */
export interface ICartResponse extends Omit<ICart, 'userId'> {
  /** Флаг пустой корзины */
  isEmpty: boolean;
}
