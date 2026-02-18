import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { ProductQuestion, ProductQuestionSchema } from './schemas/question.schema';

/**
 * Модуль для управления вопросами о продуктах
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductQuestion.name, schema: ProductQuestionSchema },
    ]),
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService],
  exports: [QuestionsService],
})
export class QuestionsModule {}
