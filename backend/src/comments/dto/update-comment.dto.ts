import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';

/**
 * DTO для обновления комментария
 */
export class UpdateCommentDto extends PartialType(CreateCommentDto) {}
