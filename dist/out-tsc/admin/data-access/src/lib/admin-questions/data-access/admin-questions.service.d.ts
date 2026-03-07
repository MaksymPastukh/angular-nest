import { ProductQuestionInterface, QuestionsPageInterface } from '@marketplace/frontend-product-util';
import { Observable } from 'rxjs';
export declare class AdminQuestionsService {
    private readonly http;
    private readonly apiUrl;
    getQuestions(params: {
        page: number;
        pageSize: number;
        status: string;
        productId?: string;
    }): Observable<QuestionsPageInterface>;
    answerQuestion(id: string, body: {
        answer: string;
    }): Observable<ProductQuestionInterface>;
}
//# sourceMappingURL=admin-questions.service.d.ts.map