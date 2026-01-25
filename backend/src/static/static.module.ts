import { Module } from '@nestjs/common';
import { StaticController } from './static.controller';

/**
 * Модуль для раздачи статических файлов
 */
@Module({
  controllers: [StaticController],
})
export class StaticModule {}
