import { computed, inject, Injectable } from '@angular/core'
import { PrimePaginatorEvent } from '../../../shared/domain/interfaces/prime-pagination.interface'
import { CreateQuestionInterface } from '../domain/interfaces/create-questin.inteface'
import { QuestionsPageChangeInterface } from '../domain/interfaces/question-page-change.interface'
import { ProductQuestionStore } from './product-questions.store'

@Injectable({
  providedIn: 'root',
})
export class ProductQuestionFacade {
  private readonly store = inject(ProductQuestionStore)
  public readonly productId = this.store.productId

  public readonly items = this.store.items
  public readonly total = this.store.total
  public readonly page = this.store.page
  public readonly pageSize = this.store.pageSize
  public readonly totalPages = this.store.totalPages

  public readonly myQuestion = this.store.myQuestion
  public readonly myStatus = this.store.myStatus

  public readonly isLoading = this.store.isLoading
  public readonly isLoadingMy = this.store.isLoadingMy
  public readonly isSubmitting = this.store.isSubmitting

  public readonly error = this.store.error
  public readonly existingQuestionId = this.store.existingQuestionId

  // полезный derived сигнал для UI
  public readonly hasMyQuestion = computed(() => this.myQuestion() !== null)

  public setContext(productId: string): void {
    this.store.setContext({ productId })
  }

  public load(): void {
    this.store.load()
  }

  public loadMy(): void {
    this.store.loadMy()
  }
  public goToPage(change: QuestionsPageChangeInterface): void {
    this.store.goToPage(change)
  }

  public changePageFromPrime(event: PrimePaginatorEvent): void {
    const page0 = event.page ?? 0
    const rows = event.rows ?? this.pageSize()
    this.goToPage({ page: page0 + 1, pageSize: rows })
  }

  public setPageSize(pageSize: number): void {
    this.store.setPageSize(pageSize)
  }

  public createQuestion(question: string, productId: string): void {
    const payload: CreateQuestionInterface = { question, productId }
    this.store.createQuestion(payload)
  }

  public removeQuestion(id: string): void {
    this.store.remove({ id })
  }
}
