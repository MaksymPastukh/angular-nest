import { IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO для обновления токенов
 */
export class RefreshTokenDto {
  /**
   * Refresh токен
   */
  @IsNotEmpty({ message: 'Refresh токен обязателен' })
  @IsString({ message: 'Refresh токен должен быть строкой' })
  refresh_token: string;
}
