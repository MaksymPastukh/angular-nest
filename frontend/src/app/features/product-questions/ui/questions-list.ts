import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { PaginatorModule, PaginatorState } from 'primeng/paginator'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import type { ProductQuestionInterface } from '../domain/interfaces/product-question.interface'
import { QuestionsPageChangeInterface } from '../domain/interfaces/question-page-change.interface'

@Component({
  selector: 'app-questions-list',
  standalone: true,
  imports: [PaginatorModule, ProgressSpinnerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rounded-2xl border p-4 shadow-sm">
      <div class="flex items-center justify-between">
        <h3 class="text-base font-semibold">Ответы на вопросы</h3>
      </div>

      @if (isLoading()) {
        <div class="flex items-center justify-center py-10">
          <p-progressSpinner ariaLabel="loading"></p-progressSpinner>
        </div>
      } @else {
        @if (items().length === 0) {
          <div class="py-8 text-sm text-gray-600">Пока нет ответов на вопросы.</div>
        } @else {
          <ul class="mt-4 space-y-4">
            @for (q of items(); track q.id) {
              <li class="rounded-xl bg-gray-50 p-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-sm text-gray-500">{{ q.userName }}</p>
                    <p class="mt-1 whitespace-pre-wrap font-medium">{{ q.question }}</p>
                  </div>
                  @if (q.isMine) {
                    <span class="shrink-0 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700"
                      >ваш</span
                    >
                  }
                </div>

                <div class="mt-3 border-l-2 border-gray-200 pl-3">
                  <p class="text-sm text-gray-500">Ответ</p>
                  <p class="mt-1 whitespace-pre-wrap">{{ q.answer }}</p>
                </div>
              </li>
            }
          </ul>

          @if (total() > pageSize()) {
            <div class="mt-4">
              <p-paginator
                [rows]="pageSize()"
                [totalRecords]="total()"
                [first]="(page() - 1) * pageSize()"
                (onPageChange)="onPrimePageChange($event)"
              />
            </div>
          }
        }
      }
    </div>
  `,
})
export class QuestionsListComponent {
  public readonly items = input<ProductQuestionInterface[]>([])
  public readonly total = input<number>(0)
  public readonly page = input<number>(1)
  public readonly pageSize = input<number>(10)
  public readonly isLoading = input<boolean>(false)

  public readonly pageChange = output<QuestionsPageChangeInterface>()

  public onPrimePageChange(event: PaginatorState): void {
    const pageIndex = event.page ?? 0
    const rows = event.rows ?? this.pageSize()
    this.pageChange.emit({ page: pageIndex + 1, pageSize: rows })
  }
}
