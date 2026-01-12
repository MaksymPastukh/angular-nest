import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductType } from '../../../views/types/product.type'
import { ImageUrlPipe } from '../../../shared/pipes/image-url.pipe'

@Component({
  selector: 'product-card',
  imports: [CommonModule, ImageUrlPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input('product') productIn!: ProductType

  liked: boolean = false

  toggleLike() {
    this.liked = !this.liked
  }
}
