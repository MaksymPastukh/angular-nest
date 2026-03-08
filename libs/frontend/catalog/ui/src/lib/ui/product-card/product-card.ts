import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core'
import { Router } from '@angular/router'
import { ProductInterface } from '@marketplace/frontend-shared-types'
import { ImageUrlPipe } from '@marketplace/frontend-shared-util'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, ButtonModule, ImageUrlPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  readonly product = input.required<ProductInterface>()
  readonly inWishlist = input<boolean>(false)
  readonly wishlistLoading = input<boolean>(false)
  readonly wishlistDisabled = input<boolean>(false)
  readonly toggleWishlist = output<void>()
  readonly router: Router = inject(Router)
  private readonly imageErrorHandled = signal(false)

  readonly wishlistIcon = computed(() =>
    this.inWishlist() ? 'pi pi-heart-fill' : 'pi pi-heart'
  )
  readonly wishlistAriaLabel = computed(() =>
    this.inWishlist() ? 'Remove from wishlist' : 'Add to wishlist'
  )

  onToggleWishlist(event: Event): void {
    event.stopPropagation()
    if (this.wishlistDisabled()) return
    this.toggleWishlist.emit()
  }

  onImageError(event: Event): void {
    if (this.imageErrorHandled()) return 
    const img = event.target as HTMLImageElement
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
