import { ChangeDetectionStrategy, Component, computed, Input, signal } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-rating',
  imports: [CommonModule],
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
  /**
   * Рейтинг продукта (0–5)
   */
  @Input({ required: true }) rating!: number

  /**
   * Максимальное количество звёзд
   */
  @Input() max = 5

  /**
   * Подготавливаем данные для шаблона
   * true — закрашенная звезда
   */
  readonly stars = computed(() => Array.from({ length: this.max }, (_, i) => i < this.rating))
}
