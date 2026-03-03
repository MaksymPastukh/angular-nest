import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';

/**
 * DTO для обновления отзыва
 * Все поля опциональны (можно обновить rating и/или text)
 */
export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
