import { ImageUrlPipe } from '@/shared/pipes/image-url.pipe'
import { CurrencyPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core'
import { Router } from '@angular/router'
import { EnrichedWishlistItem } from '../../domain/interfaces/enriched-wishlist-item.interface'
import { WishlistFacade } from '../../store/wishlist.facade'

@Component({
  selector: 'app-wishlist-item',
  imports: [CurrencyPipe, ImageUrlPipe],
  templateUrl: 'wishlist-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistItem {
  readonly router: Router = inject(Router)
  readonly item = input.required<EnrichedWishlistItem>()
  private readonly imageErrorHandled = signal(false)
  private readonly facadeWishlist = inject(WishlistFacade)
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
    img.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E'
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
}
