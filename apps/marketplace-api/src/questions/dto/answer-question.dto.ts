import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

/**
 * DTO для ответа на вопрос (только администратор)
 */
export class AnswerQuestionDto {
  /**
   * Текст ответа администратора (1-1000 символов)
   * Автоматически обрезаются пробелы по краям
   */
  @IsString({ message: 'Ответ должен быть строкой' })
  @IsNotEmpty({ message: 'Текст ответа не может быть пустым' })
  @MinLength(1, { message: 'Минимальная длина ответа - 1 символ' })
  @MaxLength(1000, { message: 'Максимальная длина ответа - 1000 символов' })
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  public answer: string;
}
