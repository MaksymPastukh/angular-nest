import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Categories } from '../../types/categories'
import { ImageUrlPipe } from '../../../shared/pipes/image-url.pipe'

@Component({
  selector: 'app-categories-card',
  imports: [CommonModule, ImageUrlPipe],
  templateUrl: './categories-card.html',
  styleUrl: './categories-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesCardComponent {
  @Input() category!: Categories
}
