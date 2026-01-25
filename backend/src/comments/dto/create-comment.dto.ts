import { IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO для создания комментария
 */
export class CreateCommentDto {
  /**
   * Текст комментария
   */
  @IsString()
  @IsNotEmpty()
  public text: string;
}
