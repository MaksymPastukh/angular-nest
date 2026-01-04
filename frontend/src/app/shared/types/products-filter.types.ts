export interface ColorOption {
  name: string;
  value: string;
}

export interface FilterState {
  priceRange: number[];
  selectedSizes: string[];
  selectedColors: string[]; // Изменено с selectedColor на selectedColors (массив)
  selectedCategories: string[];
  selectedStyles: string[];
}

export interface CategoryFilter {
  category: string;
  brand: string;
}

export interface StyleFilter {
  style: string;
  brand: string;
}

