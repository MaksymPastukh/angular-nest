import { Transform } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

/**
 * DTO для создания вопроса о продукте
 */
export class CreateQuestionDto {
  /**
   * ID продукта, к которому относится вопрос
   */
  @IsMongoId({ message: 'Некорректный ID продукта' })
  @IsNotEmpty({ message: 'ID продукта обязателен' })
  public productId: string;

  /**
   * Текст вопроса (3-500 символов)
   * Автоматически обрезаются пробелы по краям
   */
  @IsString({ message: 'Вопрос должен быть строкой' })
  @IsNotEmpty({ message: 'Текст вопроса не может быть пустым' })
  @MinLength(3, { message: 'Минимальная длина вопроса - 3 символа' })
  @MaxLength(500, { message: 'Максимальная длина вопроса - 500 символов' })
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  public question: string;
}
