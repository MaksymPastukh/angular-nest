import { IsNumberString, IsOptional, IsString } from 'class-validator';

/**
 * DTO для фильтрации и пагинации комментариев
 */
export class FilterCommentDto {
  @IsString()
  productId: string;

  @IsOptional()
  @IsNumberString()
  page?: string = '1';

  @IsOptional()
  @IsNumberString()
  pageSize?: string = '20';
}
