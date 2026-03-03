import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform<string, string> {
  public transform(value: string): string {
    if (!Types.ObjectId.isValid(value)) {
      throw new BadRequestException({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Invalid ObjectId',
        code: 'INVALID_OBJECT_ID',
        value,
      });
    }

    // Возвращаем строку как есть (валидную).
    // Если хочешь нормализовать — можно сделать: return new Types.ObjectId(value).toHexString();
    return value;
  }
}
