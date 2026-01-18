import { IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO для добавления вопроса к продукту
 */
export class AddQuestionDto {
  /**
   * Текст вопроса
   */
  @IsString()
  @IsNotEmpty()
  public question: string;
}
