import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import type { ProductQuestionInterface } from '../domain/interfaces/product-question.interface'

@Component({
  selector: 'app-my-question-card',
  standalone: true,
  imports: [ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rounded-lg border border-gray-200 bg-white p-6">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="text-xl font-family font-semibold">Your question</h3>
          <p class="mt-1 font-family text-base text-gray-600">
            Status:
            <span
              class="font-medium "
              [class.text-green-700]="question().status === 'ANSWERED'"
              [class.text-amber-700]="question().status === 'PENDING'"
            >
              {{ statusLabel(question().status) }}
            </span>
          </p>
        </div>

        <button
          type="submit"
          [disabled]="isSubmitting()"
          (click)="remove.emit(question().id)"
          class="bg-purple-600 rounded-lg cursor-pointer font-bold text-lg px-5 py-2 text-sm font-medium text-white transition hover:bg-purple-800 active:scale-95 disabled:bg-purple-300 disabled:cursor-not-allowed"
        >
          Delete
        </button>
      </div>

      <div class="mt-3 space-y-3">
        <div>
          <p class="font-family text-sm text-gray-500">Question</p>
          <p class="mt-1 whitespace-pre-wrap">{{ question().question }}</p>
        </div>

        @if (question().status === 'ANSWERED' && question().answer) {
          <div>
            <p class="font-family text-sm text-gray-500">Answer admin</p>
            <p class="mt-1 whitespace-pre-wrap">{{ question().answer }}</p>
          </div>
        } @else {
          <div class="font-family text-sm text-gray-600">
            As soon as the administator responds, you will see the answer here
          </div>
        }
      </div>
    </div>
  `,
})
export class MyQuestionCardComponent {
  public readonly question = input.required<ProductQuestionInterface>()
  public readonly isSubmitting = input<boolean>(false)

  public readonly remove = output<string>()

  public statusLabel(status: ProductQuestionInterface['status']): string {
    switch (status) {
      case 'PENDING':
        return 'awating a response'
      case 'ANSWERED':
        return 'answered'
      case 'HIDDEN':
        return 'hiden'
      case 'DELETED':
        return 'deleted'
      default:
        return status
    }
  }
}
