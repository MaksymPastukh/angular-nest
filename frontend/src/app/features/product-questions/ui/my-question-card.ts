import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import type { ProductQuestionInterface } from '../domain/interfaces/product-question.interface'

@Component({
  selector: 'app-my-question-card',
  standalone: true,
  imports: [ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rounded-2xl border p-4 shadow-sm">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="text-base font-semibold">Ваш вопрос</h3>
          <p class="mt-1 text-sm text-gray-600">
            Статус:
            <span
              class="font-medium"
              [class.text-green-700]="question().status === 'ANSWERED'"
              [class.text-amber-700]="question().status === 'PENDING'"
            >
              {{ statusLabel(question().status) }}
            </span>
          </p>
        </div>

        <button
          pButton
          type="button"
          label="Удалить"
          severity="danger"
          [disabled]="isSubmitting()"
          (click)="remove.emit(question().id)"
        ></button>
      </div>

      <div class="mt-3 space-y-3">
        <div>
          <p class="text-sm text-gray-500">Вопрос</p>
          <p class="mt-1 whitespace-pre-wrap">{{ question().question }}</p>
        </div>

        @if (question().status === 'ANSWERED' && question().answer) {
          <div>
            <p class="text-sm text-gray-500">Ответ администратора</p>
            <p class="mt-1 whitespace-pre-wrap">{{ question().answer }}</p>
          </div>
        } @else {
          <div class="text-sm text-gray-600">
            Как только администратор ответит — вы увидите ответ здесь.
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
        return 'ожидает ответа'
      case 'ANSWERED':
        return 'отвечен'
      case 'HIDDEN':
        return 'скрыт'
      case 'DELETED':
        return 'удален'
      default:
        return status
    }
  }
}
