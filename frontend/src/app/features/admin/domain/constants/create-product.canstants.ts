import { ColorOptionInterface } from '../interfaces/color-option.interface'
import { FormSelectOptionInterface } from '../interfaces/form-select-option.interface'

export const CATEGORIES: FormSelectOptionInterface[] = [
  { label: 'Men', value: 'Men' },
  { label: 'Women', value: 'Women' },
  { label: 'Combos', value: 'Combos' },
  { label: 'Joggers', value: 'Joggers' },
] as const

export const PRODUCT_TYPES: FormSelectOptionInterface[] = [
  { label: 'T-shirts', value: 'T-shirts' },
  { label: 'Printed T-shirts', value: 'Printed T-shirts' },
  { label: 'Hoodies', value: 'Hoodies' },
  { label: 'Shorts', value: 'Shorts' },
  { label: 'Jeans', value: 'Jeans' },
] as const

export const DRESS_STYLES: FormSelectOptionInterface[] = [
  { label: 'Casual', value: 'Casual' },
  { label: 'Formal', value: 'Formal' },
  { label: 'Party', value: 'Party' },
  { label: 'Gym', value: 'Gym' },
] as const

export const COLORS: ColorOptionInterface[] = [
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
] as const

export const SIZES: FormSelectOptionInterface[] = [
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
  { label: 'XXL', value: 'XXL' },
] as const
