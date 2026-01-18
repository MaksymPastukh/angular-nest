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
import { ProductType } from '../../../views/types/product.type'
import { ImageUrlPipe } from '../../pipes/image-url.pipe'
import { ProductService } from '../../services/product.service'

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

    // Оптимистическое обновление UI
    this.isLiked.update((liked) => !liked)

    this.productService.toggleLike(product._id).subscribe({
      next: (updatedProduct) => {
        // Обновляем состояние на основе ответа сервера
        this.isLiked.set(updatedProduct.isLiked || false)
      },
      error: (err) => {
        // Откатываем изменение в случае ошибки
        this.isLiked.update((liked) => !liked)
        console.error('Error toggling like:', err)
      },
    })
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
