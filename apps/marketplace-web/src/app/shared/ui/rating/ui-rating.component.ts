import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Rating } from 'primeng/rating'
import { RatingValueType } from './ui-rating.type'

@Component({
  selector: 'app-ui-rating',
  standalone: true,
  imports: [FormsModule, Rating],
  template: `
    <p-rating
      [(ngModel)]="value"
      [readonly]="readonly()"
      [disabled]="disabled()"
      [stars]="stars()"
      [iconOnStyle]="{ color: '#facc15' }"
      [iconOffStyle]="{ color: '#d1d5db' }"
      (onRate)="rateCommitted.emit(value())"
      (onCancel)="cancelCommitted.emit()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiRatingComponent {
  value = model<RatingValueType>(null)

  stars = input<number>(5)
  readonly = input<boolean>(false)
  disabled = input<boolean>(false)

  rateCommitted = output<RatingValueType>()
  cancelCommitted = output<void>()
}
