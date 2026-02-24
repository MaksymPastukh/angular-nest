import { DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { PaginatorModule } from 'primeng/paginator'
import { Select, SelectChangeEvent } from 'primeng/select'
import { TableModule } from 'primeng/table'

import { ProductQuestionInterface } from '../../../../product-questions/domain/interfaces/product-question.interface'
import { AdminQuestionsFacade } from '../../store/admin-questions.facade'
import { AnswerQuestionDialogComponent } from '../../ui/answer-question-dialog'

@Component({
  selector: 'app-admin-questions-page',
  standalone: true,
  imports: [
    TableModule,
    PaginatorModule,
    ButtonModule,
    Select,
    FormsModule,
    DatePipe,
    AnswerQuestionDialogComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './admin-questions-page.html',
})
export class AdminQuestionsPageComponent implements OnInit {
  public readonly facade = inject(AdminQuestionsFacade)

  public readonly answerDialogOpen = signal<boolean>(false)
  public readonly selectedQuestion = signal<ProductQuestionInterface | null>(null)

  public readonly statusOptions: Array<{
    label: string
    value: 'PENDING' | 'ANSWERED' | 'HIDDEN' | 'DELETED'
  }> = [
    { label: 'Ожидают ответа', value: 'PENDING' },
    { label: 'Отвеченные', value: 'ANSWERED' },
    { label: 'Скрытые', value: 'HIDDEN' },
    { label: 'Удаленные', value: 'DELETED' },
  ]

  ngOnInit(): void {
    // Загружаем все вопросы при инициализации страницы
    // productId = null означает "показать все вопросы"
    this.facade.setContext(null)
    this.facade.load()
  }

  public onStatusChange(event: SelectChangeEvent): void {
    this.facade.setStatus(event.value as 'PENDING' | 'ANSWERED' | 'HIDDEN' | 'DELETED')
  }

  public onDialogVisibleChange(visible: boolean): void {
    this.answerDialogOpen.set(visible)
  }

  public openAnswer(q: ProductQuestionInterface): void {
    this.selectedQuestion.set(q)
    this.answerDialogOpen.set(true)
  }

  public onSubmitAnswer(payload: { id: string; answer: string }): void {
    this.facade.answerQuestion(payload.id, payload.answer)
    this.answerDialogOpen.set(false)
    this.selectedQuestion.set(null)
  }
}
