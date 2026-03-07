import { ColorOptionInterface } from '../interfaces/color-option.interface'
import { FormSelectOptionInterface } from '../interfaces/form-select-option.interface'

export const CATEGORIES: FormSelectOptionInterface[] = [
  { label: 'Men', value: 'Men' },
  { label: 'Women', value: 'Women' },
  { label: 'Combos', value: 'Combos' },
  { label: 'Joggers', value: 'Joggers' },
] as const

export const PRODUCT_TYPES: FormSelectOptionInterface[] = [
  // Tops
  { label: 'T-Shirts', value: 't_shirts' },
  { label: 'Printed T-Shirts', value: 'printed_t_shirts' },
  { label: 'Longsleeves', value: 'longsleeves' },
  { label: 'Tank Tops', value: 'tank_tops' },
  { label: 'Polo Shirts', value: 'polo_shirts' },
  { label: 'Shirts', value: 'shirts' },
  { label: 'Overshirts', value: 'overshirts' },
  { label: 'Blouses', value: 'blouses' },
  { label: 'Bodysuits', value: 'bodysuits' },
  { label: 'Sweaters', value: 'sweaters' },
  { label: 'Cardigans', value: 'cardigans' },
  { label: 'Sweatshirts', value: 'sweatshirts' },
  { label: 'Hoodies', value: 'hoodies' },

  // Outerwear
  { label: 'Jackets', value: 'jackets' },
  { label: 'Denim Jackets', value: 'denim_jackets' },
  { label: 'Leather Jackets', value: 'leather_jackets' },
  { label: 'Bomber Jackets', value: 'bomber_jackets' },
  { label: 'Coats', value: 'coats' },
  { label: 'Trench Coats', value: 'trench_coats' },
  { label: 'Puffer Jackets', value: 'puffer_jackets' },
  { label: 'Vests', value: 'vests' },

  // Bottoms
  { label: 'Jeans', value: 'jeans' },
  { label: 'Trousers', value: 'trousers' },
  { label: 'Chinos', value: 'chinos' },
  { label: 'Cargo Pants', value: 'cargo_pants' },
  { label: 'Leggings', value: 'leggings' },
  { label: 'Joggers', value: 'joggers' },
  { label: 'Sweatpants', value: 'sweatpants' },
  { label: 'Shorts', value: 'shorts' },
  { label: 'Skirts', value: 'skirts' },

  // Dresses / One-pieces (взрослые)
  { label: 'Dresses', value: 'dresses' },
  { label: 'Mini Dresses', value: 'mini_dresses' },
  { label: 'Midi Dresses', value: 'midi_dresses' },
  { label: 'Maxi Dresses', value: 'maxi_dresses' },
  { label: 'Jumpsuits', value: 'jumpsuits' },
  { label: 'Playsuits', value: 'playsuits' },

  // Active / Swim
  { label: 'Sportswear', value: 'sportswear' },
  { label: 'Sports Tops', value: 'sports_tops' },
  { label: 'Sports Bottoms', value: 'sports_bottoms' },
  { label: 'Swimwear', value: 'swimwear' },

  // Underwear / Home
  { label: 'Underwear', value: 'underwear' },
  { label: 'Socks', value: 'socks' },
  { label: 'Sleepwear', value: 'sleepwear' },
  { label: 'Loungewear', value: 'loungewear' },

  // Tailoring / Sets
  { label: 'Suits', value: 'suits' },
  { label: 'Blazers', value: 'blazers' },
  { label: 'Waistcoats', value: 'waistcoats' },
  { label: 'Sets', value: 'sets' },

  // Accessories (если это тоже “product type” у тебя в домене)
  { label: 'Caps & Hats', value: 'caps_hats' },
  { label: 'Scarves', value: 'scarves' },
  { label: 'Gloves', value: 'gloves' },
  { label: 'Belts', value: 'belts' },
  { label: 'Bags', value: 'bags' },
] as const

export const DRESS_STYLE_GROUPS = {
  core: 'Core',
  smart: 'Smart',
  street: 'Street',
  outdoor: 'Outdoor',
  occasion: 'Occasion',
  aesthetic: 'Aesthetic',
  home: 'Home',
  special: 'Special',
} as const

export const DRESS_STYLES: FormSelectOptionInterface[] = [
  // Core
  { group: 'core', label: 'Casual', value: 'casual' },
  { group: 'core', label: 'Formal', value: 'formal' },
  { group: 'core', label: 'Party', value: 'party' },
  { group: 'core', label: 'Gym', value: 'gym' },

  // Smart / Office
  { group: 'smart', label: 'Smart Casual', value: 'smart_casual' },
  { group: 'smart', label: 'Business', value: 'business' },
  { group: 'smart', label: 'Business Casual', value: 'business_casual' },
  { group: 'smart', label: 'Office', value: 'office' },

  // Street / Sport
  { group: 'street', label: 'Streetwear', value: 'streetwear' },
  { group: 'street', label: 'Sporty', value: 'sporty' },
  { group: 'street', label: 'Athleisure', value: 'athleisure' },

  // Outdoor / Seasonal
  { group: 'outdoor', label: 'Outdoor', value: 'outdoor' },
  { group: 'outdoor', label: 'Hiking', value: 'hiking' },
  { group: 'outdoor', label: 'Ski / Snow', value: 'ski_snow' },
  { group: 'outdoor', label: 'Summer', value: 'summer' },
  { group: 'outdoor', label: 'Winter', value: 'winter' },

  // Occasion
  { group: 'occasion', label: 'Wedding', value: 'wedding' },
  { group: 'occasion', label: 'Cocktail', value: 'cocktail' },
  { group: 'occasion', label: 'Evening', value: 'evening' },
  { group: 'occasion', label: 'Date Night', value: 'date_night' },

  // Aesthetic / fashion
  { group: 'aesthetic', label: 'Minimalist', value: 'minimalist' },
  { group: 'aesthetic', label: 'Classic', value: 'classic' },
  { group: 'aesthetic', label: 'Vintage', value: 'vintage' },
  { group: 'aesthetic', label: 'Retro', value: 'retro' },
  { group: 'aesthetic', label: 'Boho', value: 'boho' },
  { group: 'aesthetic', label: 'Preppy', value: 'preppy' },
  { group: 'aesthetic', label: 'Romantic', value: 'romantic' },
  { group: 'aesthetic', label: 'Glam', value: 'glam' },
  { group: 'aesthetic', label: 'Punk', value: 'punk' },
  { group: 'aesthetic', label: 'Grunge', value: 'grunge' },

  // Home
  { group: 'home', label: 'Homewear', value: 'homewear' },
  { group: 'home', label: 'Loungewear', value: 'loungewear' },
  { group: 'home', label: 'Sleepwear', value: 'sleepwear' },

  // Special
  { group: 'special', label: 'Beach', value: 'beach' },
  { group: 'special', label: 'Travel', value: 'travel' },
] as const

export const COLORS: ColorOptionInterface[] = [
  // Neutrals (ядро)
  { id: 'black', name: 'Black', hex: '#000000' },
  { id: 'white', name: 'White', hex: '#FFFFFF' },
  { id: 'off-white', name: 'Off White', hex: '#F5F5F0' },
  { id: 'cream', name: 'Cream', hex: '#FFF1D6' },
  { id: 'beige', name: 'Beige', hex: '#F5F5DC' },
  { id: 'sand', name: 'Sand', hex: '#DCC9A1' },
  { id: 'camel', name: 'Camel', hex: '#C19A6B' },
  { id: 'tan', name: 'Tan', hex: '#D2B48C' },
  { id: 'brown', name: 'Brown', hex: '#6B3F2A' },
  { id: 'chocolate', name: 'Chocolate', hex: '#3B2417' },
  { id: 'gray', name: 'Gray', hex: '#808080' },
  { id: 'light-gray', name: 'Light Gray', hex: '#D3D3D3' },
  { id: 'charcoal', name: 'Charcoal', hex: '#36454F' },
  { id: 'navy', name: 'Navy', hex: '#0B1B3A' },

  // Blues
  { id: 'blue', name: 'Blue', hex: '#1E40AF' },
  { id: 'sky-blue', name: 'Sky Blue', hex: '#87CEEB' },
  { id: 'light-blue', name: 'Light Blue', hex: '#A7C7E7' },
  { id: 'denim', name: 'Denim', hex: '#2B4C7E' },
  { id: 'teal', name: 'Teal', hex: '#0F766E' },
  { id: 'turquoise', name: 'Turquoise', hex: '#40E0D0' },

  // Greens
  { id: 'green', name: 'Green', hex: '#16A34A' },
  { id: 'forest', name: 'Forest Green', hex: '#0B3D2E' },
  { id: 'olive', name: 'Olive', hex: '#556B2F' },
  { id: 'khaki', name: 'Khaki', hex: '#BDB76B' },
  { id: 'mint', name: 'Mint', hex: '#A8E6CF' },

  // Reds / Oranges / Yellows
  { id: 'red', name: 'Red', hex: '#DC2626' },
  { id: 'burgundy', name: 'Burgundy', hex: '#6D0F1B' },
  { id: 'maroon', name: 'Maroon', hex: '#800000' },
  { id: 'rust', name: 'Rust', hex: '#B7410E' },
  { id: 'orange', name: 'Orange', hex: '#F97316' },
  { id: 'coral', name: 'Coral', hex: '#FF7F50' },
  { id: 'mustard', name: 'Mustard', hex: '#D4A017' },
  { id: 'yellow', name: 'Yellow', hex: '#FACC15' },

  // Pinks / Purples
  { id: 'pink', name: 'Pink', hex: '#EC4899' },
  { id: 'blush', name: 'Blush', hex: '#F4C2C2' },
  { id: 'rose', name: 'Rose', hex: '#E11D48' },
  { id: 'lavender', name: 'Lavender', hex: '#C4B5FD' },
  { id: 'purple', name: 'Purple', hex: '#7C3AED' },
  { id: 'plum', name: 'Plum', hex: '#5B2C6F' },

  // “Металлики/прочее” (часто в обуви/аксессуарах)
  { id: 'silver', name: 'Silver', hex: '#C0C0C0' },
  { id: 'gold', name: 'Gold', hex: '#D4AF37' },
] as const

export const SIZES: FormSelectOptionInterface[] = [
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
  { label: 'XXL', value: 'XXL' },
] as const
