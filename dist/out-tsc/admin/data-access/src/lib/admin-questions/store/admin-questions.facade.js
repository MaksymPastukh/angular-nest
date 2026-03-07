import { __decorate } from "tslib";
import { Injectable, inject } from '@angular/core';
import { AdminQuestionsStore } from '../store/admin-questions.store';
let AdminQuestionsFacade = class AdminQuestionsFacade {
    store = inject(AdminQuestionsStore);
    items = this.store.items;
    total = this.store.total;
    page = this.store.page;
    pageSize = this.store.pageSize;
    filter = this.store.filter;
    isLoading = this.store.isLoading;
    isSubmitting = this.store.isSubmitting;
    error = this.store.error;
    isEmpty = this.store.isEmpty;
    setContext(productId) {
        this.store.setContext({ productId });
    }
    setStatus(status) {
        this.store.setFilter({ status });
        this.store.load();
    }
    setProductId(productId) {
        this.store.setFilter({ productId });
        this.store.load();
    }
    load() {
        this.store.load();
    }
    goToPage(change) {
        this.store.goToPage(change);
    }
    answerQuestion(id, answer) {
        this.store.answer({ id, answer });
    }
    changePageFromPrime(event) {
        const pageIndex = event.page ?? 0;
        const rows = event.rows ?? this.pageSize();
        this.goToPage({ page: pageIndex + 1, pageSize: rows });
    }
};
AdminQuestionsFacade = __decorate([
    Injectable({ providedIn: 'root' })
], AdminQuestionsFacade);
export { AdminQuestionsFacade };
//# sourceMappingURL=admin-questions.facade.js.map