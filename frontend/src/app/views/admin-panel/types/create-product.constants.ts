import { ColorOption, FormSelectOption } from './create-product.interface';

/**
 * Константы для опций селектов
 * Используются в store и компоненте
 */

/** Доступные категории */
export const CATEGORIES: FormSelectOption[] = [
  { label: 'Men', value: 'Men' },
  { label: 'Women', value: 'Women' },
  { label: 'Combos', value: 'Combos' },
  { label: 'Joggers', value: 'Joggers' },
] as const;

/** Типы продуктов */
export const PRODUCT_TYPES: FormSelectOption[] = [
  { label: 'T-shirts', value: 'T-shirts' },
  { label: 'Printed T-shirts', value: 'Printed T-shirts' },
  { label: 'Hoodies', value: 'Hoodies' },
  { label: 'Shorts', value: 'Shorts' },
  { label: 'Jeans', value: 'Jeans' },
] as const;

/** Стили одежды */
export const DRESS_STYLES: FormSelectOption[] = [
  { label: 'Casual', value: 'Casual' },
  { label: 'Formal', value: 'Formal' },
  { label: 'Party', value: 'Party' },
  { label: 'Gym', value: 'Gym' },
] as const;

/** Доступные цвета */
export const COLORS: ColorOption[] = [
  { name: 'Red', value: '#FF0000' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Green', value: '#00FF00' },
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Yellow', value: '#FFFF00' },
  { name: 'Purple', value: '#800080' },
  { name: 'Orange', value: '#FFA500' },
  { name: 'Pink', value: '#FFC0CB' },
  { name: 'Gray', value: '#808080' },
] as const;

/** Доступные размеры */
export const SIZES: FormSelectOption[] = [
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
  { label: 'XXL', value: 'XXL' },
] as const;
