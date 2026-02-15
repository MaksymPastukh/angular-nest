import { UiRatingComponent } from '@/shared/ui'
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core'
import {
  form,
  FormField,
  max,
  maxLength,
  min,
  minLength,
  required,
  submit,
} from '@angular/forms/signals'
import { CreateReviewInterface } from '../../domain/interfaces/create-review.interface'
import { ReviewResponseInterface } from '../../domain/interfaces/reviews-response.interface'
import { UpdateReviewInterface } from '../../domain/interfaces/update-review.interface'

@Component({
  selector: 'app-review-ui-form',
  templateUrl: './review-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UiRatingComponent, FormField],
})
export class ReviewFormComponent {
  isAuthenticated = input<boolean>(false)
  isSubmitting = input<boolean>(false)
  myReview = input<ReviewResponseInterface | null>(null)
  create = output<CreateReviewInterface>()
  update = output<UpdateReviewInterface>()
  delete = output<string>()
  readonly isEditMode = computed(() => !!this.myReview())

  reviewsModel = signal<{ text: string; rating: number }>({
    text: '',
    rating: 5,
  })

  reviewsForm = form(this.reviewsModel, (controlSchema) => {
    required(controlSchema.text, { message: 'Текст обязателен.' })
    minLength(controlSchema.text, 3, { message: 'Минимум 3 символа.' })
    maxLength(controlSchema.text, 1000, { message: 'Максимум 1000 символов.' })
    required(controlSchema.rating, { message: 'Поставьте оценку от 1 до 5.' })
    min(controlSchema.rating, 1, { message: 'Минимальная оценка - 1.' })
    max(controlSchema.rating, 5, { message: 'Максимальная оценка - 5.' })
  })

  constructor() {
    effect(() => {
      const review = this.myReview()
      if (!review) {
        this.reviewsModel.set({ text: '', rating: 5 })
        return
      }

      this.reviewsModel.set({
        text: review.text,
        rating: review.rating,
      })
    })
  }

  setRating(rating: number): void {
    this.reviewsForm.rating().value.set(rating)
    this.reviewsForm.rating().markAsTouched()
  }

  resetRating(): void {
    this.reviewsForm.rating().value.set(5)
    this.reviewsForm.rating().markAsTouched()
  }

  async submitForm(event?: Event): Promise<void> {
    event?.preventDefault()

    if (!this.isAuthenticated() || this.isSubmitting()) return

    await submit(this.reviewsForm, (form) => {
      const value = form().value()

      const text = value.text.trim()
      const { rating } = value

      if (this.isEditMode()) {
        const review = this.myReview()
        if (review) this.update.emit({ id: review.id, text, rating })
      } else {
        this.create.emit({ text, rating })
      }

      return Promise.resolve(undefined)
    })
  }

  deleteReview(): void {
    const review = this.myReview()
    if (!review) return
    this.delete.emit(review.id)
  }
}
