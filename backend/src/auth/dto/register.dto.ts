import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

/**
 * DTO (Data Transfer Object) для регистрации пользователя
 * Определяет структуру данных и правила валидации для запроса регистрации
 */
export class RegisterDto {
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
   * @MinLength(6) - минимум 6 символов
   * @IsNotEmpty - не должен быть пустым
   */
  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов' })
  @IsNotEmpty({ message: 'Пароль обязателен' })
  password: string;

  /**
   * Имя пользователя
   * @IsString - должно быть строкой
   * @IsNotEmpty - не должно быть пустым
   */
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя обязательно' })
  firstName: string;

  /**
   * Фамилия пользователя
   * @IsString - должна быть строкой
   * @IsNotEmpty - не должна быть пустой
   */
  @IsString({ message: 'Фамилия должна быть строкой' })
  @IsNotEmpty({ message: 'Фамилия обязательна' })
  lastName: string;

  /**
   * Телефон пользователя (опционально)
   * @IsOptional - поле необязательное
   * @IsString - если заполнено, должно быть строкой
   */
  @IsOptional()
  @IsString({ message: 'Телефон должен быть строкой' })
  phone?: string;
}
