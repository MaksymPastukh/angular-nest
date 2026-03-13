import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { MediaCacheService } from './media-cache.service';

@Module({
  controllers: [MediaController],
  providers: [MediaService, MediaCacheService],
  exports: [MediaService],
})
export class MediaModule {}
