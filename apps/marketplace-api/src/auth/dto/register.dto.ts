import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

/**
 * DTO (Data Transfer Object) для регистрации пользователя
 * Определяет структуру данных и правила валидации для запроса регистрации
 */
export class RegisterDto {
  /**
   * Имя пользователя
   * @IsString - должно быть строкой
   * @IsNotEmpty - не должно быть пустым
   */
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя обязательно' })
  firstName: string;

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
   * @MinLength(8) - минимум 8 символов
   * @IsNotEmpty - не должен быть пустым
   */
  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(8, { message: 'Пароль должен содержать минимум 8 символов' })
  @IsNotEmpty({ message: 'Пароль обязателен' })
  password: string;

  /**
   * Подтверждение пароля
   * @IsString - должно быть строкой
   * @IsNotEmpty - не должно быть пустым
   */
  @IsString({ message: 'Подтверждение пароля должно быть строкой' })
  @IsNotEmpty({ message: 'Подтверждение пароля обязательно' })
  confirmPassword: string;

  /**
   * Согласие с условиями использования
   * @IsBoolean - должно быть булевым значением
   * @IsNotEmpty - обязательное поле
   */
  @IsBoolean({ message: 'Согласие с условиями должно быть булевым значением' })
  @IsNotEmpty({ message: 'Необходимо согласие с условиями использования' })
  agreeToTerms: boolean;

  /**
   * Подписка на рассылку (опционально)
   * @IsOptional - поле необязательное
   * @IsBoolean - если заполнено, должно быть булевым значением
   */
  @IsOptional()
  @IsBoolean({ message: 'Подписка на рассылку должна быть булевым значением' })
  subscribeToNewsletter?: boolean;
}
