import { MarketplaceImageLoaderParams } from './image.types'

export const imagePresets = {
  productCard: { fit: 'cover', q: 80, fmt: 'webp' },
  productThumb: { fit: 'cover', q: 75, fmt: 'webp' },
  productGallery: { fit: 'contain', q: 82, fmt: 'webp' },
  hero: { fit: 'cover', q: 82, fmt: 'webp' },
} as const satisfies Record<string, MarketplaceImageLoaderParams>
