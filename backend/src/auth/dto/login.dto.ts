import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO (Data Transfer Object) для входа пользователя
 * Определяет структуру данных и правила валидации для запроса входа
 */
export class LoginDto {
  /**
   * Email пользователя
   * @IsEmail - валидация формата email
   * @IsNotEmpty - поле не должно быть пустым
   */
  @IsEmail({}, { message: 'Некорректный формат email' })
  @IsNotEmpty({ message: 'Email обязателен' })
  email: string;

  /**
   * Пароль пользователя
   * @IsString - должен быть строкой
   * @IsNotEmpty - не должен быть пустым
   */
  @IsString({ message: 'Пароль должен быть строкой' })
  @IsNotEmpty({ message: 'Пароль обязателен' })
  password: string;
}
