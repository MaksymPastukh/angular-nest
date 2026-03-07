import { PaginatorState } from 'primeng/paginator';
import type { AdminQuestionsPageChangeInterface } from '../domain/interfaces/admin-questions-page-change.interface';
export declare class AdminQuestionsFacade {
    private readonly store;
    readonly items: import("@angular/core").Signal<import("../../../../../../product/util/src").ProductQuestionInterface[]>;
    readonly total: import("@angular/core").Signal<number>;
    readonly page: import("@angular/core").Signal<number>;
    readonly pageSize: import("@angular/core").Signal<number>;
    readonly filter: import("@ngrx/signals").DeepSignal<import("../../..").AdminQuestionsFilterInterface>;
    readonly isLoading: import("@angular/core").Signal<boolean>;
    readonly isSubmitting: import("@angular/core").Signal<boolean>;
    readonly error: import("@angular/core").Signal<{
        message: string;
    } | null>;
    readonly isEmpty: import("@angular/core").Signal<boolean>;
    setContext(productId: string | null): void;
    setStatus(status: 'PENDING' | 'ANSWERED' | 'HIDDEN' | 'DELETED'): void;
    setProductId(productId: string | null): void;
    load(): void;
    goToPage(change: AdminQuestionsPageChangeInterface): void;
    answerQuestion(id: string, answer: string): void;
    changePageFromPrime(event: PaginatorState): void;
}
//# sourceMappingURL=admin-questions.facade.d.ts.map