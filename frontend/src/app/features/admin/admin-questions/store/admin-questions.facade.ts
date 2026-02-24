import { Injectable, inject } from '@angular/core'
import { PaginatorState } from 'primeng/paginator'
import type { AdminQuestionsPageChangeInterface } from '../domain/interfaces/admin-questions-page-change.interface'
import { AdminQuestionsStore } from '../store/admin-questions.store'

@Injectable({ providedIn: 'root' })
export class AdminQuestionsFacade {
  private readonly store = inject(AdminQuestionsStore)

  public readonly items = this.store.items
  public readonly total = this.store.total
  public readonly page = this.store.page
  public readonly pageSize = this.store.pageSize
  public readonly filter = this.store.filter

  public readonly isLoading = this.store.isLoading
  public readonly isSubmitting = this.store.isSubmitting
  public readonly error = this.store.error

  public readonly isEmpty = this.store.isEmpty

  public setContext(productId: string | null): void {
    this.store.setContext({ productId })
  }

  public setStatus(status: 'PENDING' | 'ANSWERED' | 'HIDDEN' | 'DELETED'): void {
    this.store.setFilter({ status })
    this.store.load()
  }

  public setProductId(productId: string | null): void {
    this.store.setFilter({ productId })
    this.store.load()
  }

  public load(): void {
    this.store.load()
  }

  public goToPage(change: AdminQuestionsPageChangeInterface): void {
    this.store.goToPage(change)
  }

  public answerQuestion(id: string, answer: string): void {
    this.store.answer({ id, answer })
  }

  public changePageFromPrime(event: PaginatorState): void {
    const pageIndex = event.page ?? 0
    const rows = event.rows ?? this.pageSize()
    this.goToPage({ page: pageIndex + 1, pageSize: rows })
  }
}
