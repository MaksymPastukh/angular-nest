import { WishlistButton } from '@/features/wishlist/ui/wishlist-toggle-button'
import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core'
import { Router } from '@angular/router'
import { ProductInterface } from '@marketplace/frontend-shared-types'
import { WISHLIST_ITEM_SOURCE } from '../../../wishlist/domain/constants/wishlist-item-sourse.constants'
import { ImageUrlPipe } from '@marketplace/frontend-shared-util'

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, WishlistButton, ImageUrlPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  readonly product = input.required<ProductInterface>()
  readonly router: Router = inject(Router)
  readonly WishlistItemSource = WISHLIST_ITEM_SOURCE
  private readonly imageErrorHandled = signal(false)

  onImageError(event: Event): void {
    if (this.imageErrorHandled()) return // Предотвращаем бесконечный цикл

    const img = event.target as HTMLImageElement
    // Серый placeholder как data URI (1x1 серый квадрат SVG)
    img.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E'
    this.imageErrorHandled.set(true)
  }

  navigateToDetail(): void {
    const product = this.product()
    if (product?.id) {
      void this.router.navigate(['/product', product.id])
    } else {
      console.error('Product or product ID is undefined', product)
    }
  }
}

