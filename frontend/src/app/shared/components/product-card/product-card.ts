import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  InputSignal,
  signal,
} from '@angular/core'
import { Router } from '@angular/router'
import { ProductService } from '../../../features/products/catalog/services/product.service'
import { ProductType } from '../../../features/products/detail/types/product.interface'
import { ImageUrlPipe } from '../../pipes/image-url.pipe'

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, ImageUrlPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  productIn: InputSignal<ProductType> = input.required<ProductType>()
  readonly router: Router = inject(Router)
  private readonly productService = inject(ProductService)

  isLiked = signal(false)
  private readonly imageErrorHandled = signal(false)

  constructor() {
    // Синхронизируем состояние лайка с данными продукта
    effect(() => {
      this.isLiked.set(this.productIn().isLiked || false)
    })
  }

  toggleLike(event: Event) {
    event.stopPropagation()

    const product = this.productIn()
    if (!product?._id) return
  }

  onImageError(event: Event): void {
    if (this.imageErrorHandled()) return // Предотвращаем бесконечный цикл

    const img = event.target as HTMLImageElement
    // Серый placeholder как data URI (1x1 серый квадрат SVG)
    img.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E'
    this.imageErrorHandled.set(true)
  }

  navigateToDetail(): void {
    const product = this.productIn()
    if (product?._id) {
      void this.router.navigate(['/product', product._id])
    } else {
      console.error('Product or product ID is undefined', product)
    }
  }
}
