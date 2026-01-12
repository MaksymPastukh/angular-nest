import {CATEGORIES, COLORS, DRESS_STYLES, PRODUCT_TYPES, SIZES} from './create-product.constants';

export interface CreateProductStoreState {
  /** Опции для селектов (статические данные) */
  options: {
    categories: typeof CATEGORIES;
    productTypes: typeof PRODUCT_TYPES;
    dressStyles: typeof DRESS_STYLES;
    colors: typeof COLORS;
    sizes: typeof SIZES;
  };

  /** Путь к загруженному изображению */
  uploadedImagePath: string | null;

  /** Состояние загрузки изображения */
  isUploadingImage: boolean;

  /** Состояние создания продукта */
  isLoading: boolean;

  /** Сообщение об ошибке */
  error: string | null;

  /** Успешное создание */
  success: boolean;
}
