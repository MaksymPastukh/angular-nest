/**
 * Публичный API модуля questions
 * Экспортирует основные типы, интерфейсы и enum
 */

// Schemas & Types
export { ProductQuestion } from './schemas/question.schema';
export type { ProductQuestionDocument, QuestionStatus } from './schemas/question.schema';

// DTOs
export { AnswerQuestionDto } from './dto/answer-question.dto';
export { CreateQuestionDto } from './dto/create-question.dto';
export { FilterQuestionsDto } from './dto/filter-questions.dto';

// Interfaces
export type {
  ProductQuestionResponse,
  ProductQuestionsPaginatedResponse,
  QuestionConflictResponse
} from './interfaces/question-response.interface';

// Module
export { QuestionsModule } from './questions.module';

// Service (для использования в других модулях)
export { QuestionsService } from './questions.service';
