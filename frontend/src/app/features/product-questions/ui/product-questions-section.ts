import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core'
import { ProductQuestionFacade } from '../store/product-questions.facade'
import { AskQuestionForm } from './ask-question-form'
import { MyQuestionCardComponent } from './my-question-card'
import { QuestionsListComponent } from './questions-list'

@Component({
  selector: 'app-product-questions-section',
  standalone: true,
  imports: [MyQuestionCardComponent, QuestionsListComponent, AskQuestionForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="mt-8 space-y-4">
      @if (facade.myQuestion(); as my) {
        <app-my-question-card
          [question]="my"
          [isSubmitting]="facade.isSubmitting()"
          (remove)="facade.removeQuestion($event)"
        />
      } @else {
        <app-ask-question-form
          [isSubmitting]="facade.isSubmitting()"
          [errorMessage]="facade.error()?.message ?? null"
          (submitQuestion)="facade.createQuestion($event, productId())"
        />
      }

      <app-questions-list
        [items]="facade.items()"
        [total]="facade.total()"
        [page]="facade.page()"
        [pageSize]="facade.pageSize()"
        [isLoading]="facade.isLoading()"
        (pageChange)="facade.goToPage($event)"
      />
    </section>
  `,
})
export class ProductQuestionsSectionComponent {
  public readonly productId = input.required<string>()
  public readonly facade = inject(ProductQuestionFacade)

  constructor() {
    effect(() => {
      const prodId = this.productId()
      if (!prodId) return
      this.facade.setContext(prodId)
      this.facade.load()
      this.facade.loadMy()
    })
  }
}
