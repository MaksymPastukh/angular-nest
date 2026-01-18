import { IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO для добавления ответа на вопрос
 */
export class AddAnswerDto {
  /**
   * Текст ответа
   */
  @IsString()
  @IsNotEmpty()
  public text: string;
}
