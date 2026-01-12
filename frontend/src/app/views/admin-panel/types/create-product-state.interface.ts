import {CATEGORIES, COLORS, DRESS_STYLES, PRODUCT_TYPES, SIZES} from './create-product.constants';
import { CreateProductEventInterface } from './create-product-event.interface';

export interface CreateProductStoreState {
  options: {
    categories: typeof CATEGORIES;
    productTypes: typeof PRODUCT_TYPES;
    dressStyles: typeof DRESS_STYLES;
    colors: typeof COLORS;
    sizes: typeof SIZES;
  };
  uploadedImagePath: string | null;
  isUploadingImage: boolean;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  event: CreateProductEventInterface | null;
}
