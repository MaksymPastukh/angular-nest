/**
 * Типы для распарсенных URL параметров
 * Используется в parseUrlParams для возврата типизированного объекта
 */
export interface ParsedUrlParams {
  minPrice?: number;
  maxPrice?: number;
  sizes: string[];
  colors: string[];
  productType?: string;
  dressStyle?: string;
  brand?: string;
  page?: number;
  limit?: number;
  sortBy?: 'price' | 'rating' | 'title' | 'createdAt';
  order?: 'asc' | 'desc';
}

