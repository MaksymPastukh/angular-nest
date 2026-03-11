export type MarketplaceImageFit = 'cover' | 'contain' | 'inside'
export type MarketplaceImageFormat = 'webp' | 'avif' | 'jpeg' | 'png'

export type MarketplaceImageLoaderParams = Partial<{
  fit: MarketplaceImageFit
  q: number
  fmt: MarketplaceImageFormat
}>
