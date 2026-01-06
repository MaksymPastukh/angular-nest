import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductType } from '../../product.type'

@Component({
  selector: 'product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() productIn!: ProductType

  liked: boolean = false

  toggleLike() {
    this.liked = !this.liked
  }
}
