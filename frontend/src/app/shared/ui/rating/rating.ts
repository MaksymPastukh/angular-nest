import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

@Component({
  selector: 'app-rating',
  imports: [CommonModule],
  templateUrl: './rating.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rating {
  readonly rating = input.required<number>()
  readonly max = input<number>(5)
  readonly stars = computed(() => Array.from({ length: this.max() }, (_, i) => i < this.rating()))
}
