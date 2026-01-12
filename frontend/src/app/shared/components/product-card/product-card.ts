import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductType } from '../../../views/types/product.type'
import {Router} from '@angular/router';
import {ImageUrlPipe} from '../../pipes/image-url.pipe';

@Component({
  selector: 'product-card',
  imports: [CommonModule, ImageUrlPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input('product') productIn!: ProductType
  readonly router: Router = inject(Router)

  liked: boolean = false
  private imageErrorHandled: boolean = false // Флаг для предотвращения бесконечного цикла

  toggleLike() {
    this.liked = !this.liked
  }


  onImageError(event: Event): void {
    if (this.imageErrorHandled) return; // Предотвращаем бесконечный цикл

    const img = event.target as HTMLImageElement;
    // Серый placeholder как data URI (1x1 серый квадрат SVG)
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
    this.imageErrorHandled = true;
  }

  navigateToDetail(): void {
    this.router.navigate(['/product', this.productIn.id]).catch(error => console.log(error));
  }
}
