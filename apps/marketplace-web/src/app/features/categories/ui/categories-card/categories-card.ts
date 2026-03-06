import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ImageUrlPipe } from '@marketplace/frontend-shared-util'
import { CategoriesInterface } from '../../domain/interfaces/categories.interface'

@Component({
  selector: 'app-categories-card',
  imports: [CommonModule, ImageUrlPipe],
  templateUrl: './categories-card.html',
  styleUrl: './categories-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesCardComponent {
  @Input() category!: CategoriesInterface
}

