import { ChangeDetectionStrategy, Component, effect, input, output, signal } from '@angular/core'
import { form, FormField, maxLength, minLength, required } from '@angular/forms/signals'
import { ProductQuestionInterface } from '@marketplace/frontend-product-util'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { AnswerModelInterface } from '../domain/interfaces/admin-answer-question.interface'

@Component({
  selector: 'app-answer-question-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, FormField],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-dialog
      header="Ответить на вопрос"
      [modal]="true"
      [draggable]="false"
      [resizable]="false"
      [visible]="visible()"
      (visibleChange)="visibleChange.emit($event)"
      [style]="{ width: '40rem' }"
    >
      @if (question(); as q) {
        <div class="space-y-3">
          <div class="rounded-xl bg-gray-50 p-3">
            <div class="text-sm text-gray-500">{{ q.userName }}</div>
            <div class="mt-1 whitespace-pre-wrap font-medium">{{ q.question }}</div>
          </div>

          <textarea
            class="w-full"
            [rows]="5"
            [formField]="f.answer"
            placeholder="Введите ответ (1–1000 символов)"
          ></textarea>

          <div class="flex items-center justify-between text-xs text-gray-500">
            <span>{{ f.answer().value().length }}/1000</span>
            @if (f.answer().touched() && f.answer().invalid()) {
              <span class="text-red-600">{{ firstErrorMessage() }}</span>
            }
          </div>

          <div class="flex justify-end gap-2">
            <button
              pButton
              type="button"
              label="Отмена"
              severity="secondary"
              [disabled]="isSubmitting()"
              (click)="visibleChange.emit(false)"
            ></button>

            <button
              pButton
              type="button"
              label="Ответить"
              [disabled]="isSubmitting() || f.answer().invalid()"
              (click)="onSubmit(q.id)"
            ></button>
          </div>
        </div>
      }
    </p-dialog>
  `,
})
export class AnswerQuestionDialogComponent {
  public readonly visible = input<boolean>(false)
  public readonly question = input<ProductQuestionInterface | null>(null)
  public readonly isSubmitting = input<boolean>(false)

  public readonly visibleChange = output<boolean>()
  public readonly submitAnswer = output<{ id: string; answer: string }>()

  private readonly model = signal<AnswerModelInterface>({ answer: '' })

  public readonly f = form(this.model, (schema) => {
    required(schema.answer, { message: 'Введите ответ' })
    minLength(schema.answer, 1, { message: 'Минимум 1 символ' })
    maxLength(schema.answer, 1000, { message: 'Максимум 1000 символов' })
  })

  public readonly firstErrorMessage = () => {
    const first = this.f.answer().errors()[0]
    return typeof first?.message === 'string' ? first.message : 'Ошибка валидации'
  }

  constructor() {
    effect(() => {
      if (this.visible()) {
        this.model.set({ answer: '' })
        this.f.answer().reset()
      }
    })
  }

  public onSubmit(id: string): void {
    const field = this.f.answer()
    field.markAsTouched()
    if (field.invalid()) return

    const value = field.value().trim()
    if (!value) return

    this.submitAnswer.emit({ id, answer: value })
  }
}
