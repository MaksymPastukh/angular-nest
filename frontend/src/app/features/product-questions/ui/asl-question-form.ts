import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core'
import { form, FormField, maxLength, minLength, required } from '@angular/forms/signals'
import { ButtonModule } from 'primeng/button'
import { AskQuestionModelInterface } from '../domain/interfaces/ask-question-model.interface'

@Component({
  selector: 'app-ask-question-form',
  standalone: true,
  imports: [FormField, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rounded-2xl border p-4 shadow-sm">
      <h3 class="text-base font-semibold">Задать вопрос</h3>
      <p class="mt-1 text-sm text-gray-600">
        Можно задать один вопрос по товару. После удаления — можно создать новый.
      </p>

      <div class="mt-3">
        <textarea
          pInputTextarea
          class="w-full"
          [rows]="4"
          [formField]="formAsk.question"
          placeholder="Напишите ваш вопрос (3–500 символов)"
        ></textarea>

        <div class="mt-2 flex items-center justify-between text-xs text-gray-500">
          <span>{{ length() }}/500</span>

          @if (formAsk.question().touched() && formAsk.question().invalid()) {
            <div>{{ formAsk.question().errors()[0].message }}</div>
          }
        </div>

        @if (errorMessage()) {
          <p class="mt-2 text-sm text-red-600">{{ errorMessage() }}</p>
        }

        <div class="mt-3 flex gap-2">
          <button
            pButton
            type="button"
            label="Отправить"
            [disabled]="isSubmitting() || formAsk.question().invalid()"
            (click)="onSubmit()"
          ></button>

          <button
            pButton
            type="button"
            label="Очистить"
            severity="secondary"
            [disabled]="isSubmitting()"
            (click)="onReset()"
          ></button>
        </div>
      </div>
    </div>
  `,
})
export class AskQiuestionForm {
  public readonly isSubmitting = input<boolean>(false)
  public readonly errorMessage = input<string | null>(null)
  public readonly submitQuestion = output<string>()
  private readonly formModel = signal<AskQuestionModelInterface>({ question: '' })

  public readonly formAsk = form(this.formModel, (controlSchema) => {
    required(controlSchema.question, { message: 'Введите вопрос' })
    minLength(controlSchema.question, 3, { message: 'Минимум 3 символа' })
    maxLength(controlSchema.question, 500, { message: 'Максимум 500 символов' })
  })

  public readonly length = computed(() => this.formAsk.question().value().length)

  public onSubmit(): void {
    const field = this.formAsk.question()
    field.markAsTouched()
    const value = field.value().trim()
    if (value.length < 3) return

    this.submitQuestion.emit(value)
  }

  public onReset(): void {
    this.formModel.set({ question: '' })
    this.formAsk.question().reset()
  }
}
