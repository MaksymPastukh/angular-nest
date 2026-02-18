import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsMongoId, IsOptional, Max, Min } from 'class-validator';
import { QuestionStatus } from '../schemas/question.schema';

/**
 * DTO для фильтрации вопросов
 */
export class FilterQuestionsDto {
  /**
   * ID продукта для фильтрации
   */
  @IsMongoId({ message: 'Некорректный ID продукта' })
  public productId: string;

  /**
   * Номер страницы (начиная с 1)
   */
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt({ message: 'Номер страницы должен быть целым числом' })
  @Min(1, { message: 'Минимальный номер страницы - 1' })
  public page?: number = 1;

  /**
   * Размер страницы (количество вопросов на странице)
   */
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt({ message: 'Размер страницы должен быть целым числом' })
  @Min(1, { message: 'Минимальный размер страницы - 1' })
  @Max(50, { message: 'Максимальный размер страницы - 50' })
  public pageSize?: number = 10;

  /**
   * Фильтр по статусу вопроса
   * По умолчанию только ANSWERED (для публичного списка)
   */
  @IsOptional()
  @IsEnum(QuestionStatus, { message: 'Некорректный статус вопроса' })
  public status?: QuestionStatus;
}
