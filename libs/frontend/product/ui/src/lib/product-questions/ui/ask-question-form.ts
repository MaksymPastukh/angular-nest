import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core'
import { form, FormField, maxLength, minLength, required } from '@angular/forms/signals'
import { ButtonModule } from 'primeng/button'
import { AskQuestionModelInterface } from '@marketplace/frontend-product-util'

@Component({
  selector: 'app-ask-question-form',
  standalone: true,
  imports: [FormField, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rounded-lg border border-gray-200 bg-white p-6">
      <p class="mt-1 font-family text-base text-gray-600">
        You can ask one question about the product. After deteling it, you can create a new one
      </p>

      <div class="mt-3">
        <textarea
          [rows]="4"
          class="w-full resize-none bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
          [formField]="formAsk.question"
          placeholder="Write you quewstion (3–500 words)"
        ></textarea>

        <div class="mt-2 flex items-center justify-between text-xs text-gray-500">
          <div>
            @if (formAsk.question().touched() && formAsk.question().invalid()) {
              @if (formAsk.question().errors().length > 0) {
                <span class="text-red-600">{{ formAsk.question().errors()[0].message }}</span>
              }
            }
          </div>

          <div>{{ length() }}/500</div>
        </div>

        <div class="mt-3 flex justify-end gap-2">
          <button
            type="submit"
            [disabled]="isSubmitting() || formAsk.question().invalid()"
            (click)="onSubmit()"
            class="bg-purple-600 rounded-lg cursor-pointer font-bold text-lg px-5 py-2 text-sm font-medium text-white transition hover:bg-purple-800 active:scale-95 disabled:bg-purple-300 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  `,
})
export class AskQuestionForm {
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
    this.formModel.set({ question: '' })
    this.formAsk.question().reset()
  }
}
