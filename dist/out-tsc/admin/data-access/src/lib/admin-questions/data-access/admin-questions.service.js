import { __decorate } from "tslib";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config';
let AdminQuestionsService = class AdminQuestionsService {
    http = inject(HttpClient);
    apiUrl = `${FRONTEND_CONFIG.api}questions`;
    getQuestions(params) {
        let httpParams = new HttpParams()
            .set('page', String(params.page))
            .set('pageSize', String(params.pageSize))
            .set('status', params.status);
        if (params.productId)
            httpParams = httpParams.set('productId', params.productId);
        return this.http.get(this.apiUrl, {
            params: httpParams,
        });
    }
    answerQuestion(id, body) {
        return this.http.patch(`${this.apiUrl}/${id}/answer`, body);
    }
};
AdminQuestionsService = __decorate([
    Injectable({ providedIn: 'root' })
], AdminQuestionsService);
export { AdminQuestionsService };
//# sourceMappingURL=admin-questions.service.js.map