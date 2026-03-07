import { RxMethod } from '@ngrx/signals/rxjs-interop';
import type { AdminQuestionsFilterInterface } from '../domain/interfaces/admin-questions-filter.interface';
import type { AdminQuestionsPageChangeInterface } from '../domain/interfaces/admin-questions-page-change.interface';
export declare const AdminQuestionsStore: import("@angular/core").Type<{
    items: import("@angular/core").Signal<import("@marketplace/frontend-product-util").ProductQuestionInterface[]>;
    total: import("@angular/core").Signal<number>;
    page: import("@angular/core").Signal<number>;
    pageSize: import("@angular/core").Signal<number>;
    filter: import("@ngrx/signals").DeepSignal<AdminQuestionsFilterInterface>;
    isLoading: import("@angular/core").Signal<boolean>;
    isSubmitting: import("@angular/core").Signal<boolean>;
    error: import("@angular/core").Signal<{
        message: string;
    } | null>;
    isEmpty: import("@angular/core").Signal<boolean>;
    totalPages: import("@angular/core").Signal<number>;
    hasProductFilter: import("@angular/core").Signal<boolean>;
    setContext: (ctx: {
        productId?: string | null;
    }) => void;
    setFilter: (patch: Partial<AdminQuestionsFilterInterface>) => void;
    load: RxMethod<void>;
    goToPage: RxMethod<AdminQuestionsPageChangeInterface>;
    answer: RxMethod<{
        id: string;
        answer: string;
    }>;
} & import("@ngrx/signals").StateSource<{
    items: import("@marketplace/frontend-product-util").ProductQuestionInterface[];
    total: number;
    page: number;
    pageSize: number;
    filter: AdminQuestionsFilterInterface;
    isLoading: boolean;
    isSubmitting: boolean;
    error: {
        message: string;
    } | null;
}>>;
//# sourceMappingURL=admin-questions.store.d.ts.map