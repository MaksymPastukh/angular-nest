export type ProductEventType =
  | 'productCreated'
  | 'productCreateError'
  | 'imageUploaded'
  | 'imageUploadError';

export interface CreateProductEventInterface {
  type: ProductEventType;
  message?: string;
  productTitle?: string;
}

