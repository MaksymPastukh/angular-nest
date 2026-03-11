import { ImageLoader, ImageLoaderConfig } from '@angular/common'
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config'

const PLACEHOLDER_WIDTH = 30
const PLACEHOLDER_QUALITY = 40
const PLACEHOLDER_FORMAT = 'webp'

export const marketplaceImageLoader: ImageLoader = (config: ImageLoaderConfig): string => {
  if (isDirectUrl(config.src)) {
    return config.src
  }

  const encodedKey = encodeKey(config.src)
  const url = new URL(`media/${encodedKey}`, FRONTEND_CONFIG.api)

  if (config.width) {
    url.searchParams.set('w', String(config.width))
  }

  if (config.height) {
    url.searchParams.set('h', String(config.height))
  }

  const params = (config.loaderParams ?? {}) as Record<string, unknown>
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue
    url.searchParams.set(key, String(value))
  }

  if (config.isPlaceholder) {
    url.searchParams.set('w', String(Math.min(config.width ?? PLACEHOLDER_WIDTH, PLACEHOLDER_WIDTH)))
    url.searchParams.delete('h')
    url.searchParams.set('q', String(PLACEHOLDER_QUALITY))
    url.searchParams.set('fmt', PLACEHOLDER_FORMAT)
  }

  return url.toString()
}

function isDirectUrl(src: string): boolean {
  return (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('data:') ||
    src.startsWith('/assets/') ||
    src.startsWith('assets/')
  )
}

function encodeKey(src: string): string {
  const normalized = src.replace(/^\/+/, '')
  return normalized
    .split('/')
    .filter((segment) => segment.length > 0)
    .map((segment) => encodeURIComponent(segment))
    .join('/')
}
