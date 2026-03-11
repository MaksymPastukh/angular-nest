import { imagePresets } from '@marketplace/frontend-shared-util'
import { CurrencyPipe, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core'
import { Router } from '@angular/router'
import { ProductImageInterface } from '@marketplace/frontend-shared-types'
import { EnrichedWishlistItem, WishlistFacade } from '@marketplace/frontend-wishlist-data-access'

@Component({
  selector: 'app-wishlist-item',
  imports: [CurrencyPipe, NgOptimizedImage],
  templateUrl: 'wishlist-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistItem {
  readonly imageWidth = 112
  readonly imageHeightFallback = 140
  readonly router: Router = inject(Router)
  readonly item = input.required<EnrichedWishlistItem>()
  private readonly imageErrorHandled = signal(false)
  private readonly facadeWishlist = inject(WishlistFacade)
  readonly imagePresets = imagePresets
  readonly fallbackImageSrc =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E'
  readonly title = () => this.item().product?.title ?? 'Product'
  readonly brand = () => this.item().product?.brand ?? ''
  readonly price = () => this.item().product?.price
  readonly imageSrc = () => this.item().product?.images?.[0] ?? null

  remove(): void {
    this.facadeWishlist.removeItem(this.item().productId)
  }

  onImageError(event: Event): void {
    if (this.imageErrorHandled()) return
    const img = event.target as HTMLImageElement
    img.src = this.fallbackImageSrc
    this.imageErrorHandled.set(true)
  }

  navigateToDetail(): void {
    const prodId: string | undefined = this.item()?.product?._id
    if (prodId) {
      void this.router.navigate(['/product', prodId])
    } else {
      console.error('Product or product ID is undefined', prodId)
    }
  }

  getImageWidth(image: ProductImageInterface | null): number {
    if (image?.width) {
      return Math.max(1, Math.min(this.imageWidth, image.width))
    }

    return this.imageWidth
  }

  getImageHeight(image: ProductImageInterface | null): number {
    if (image?.width && image?.height) {
      const width = this.getImageWidth(image)
      return Math.max(1, Math.round((width * image.height) / image.width))
    }

    return this.imageHeightFallback
  }
}

