import { Controller, Get, Header, Param, Query, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ResizeImageQueryDto } from './dto/resize-image-query.dto';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  public constructor(private readonly mediaService: MediaService) {}

  @Get('*key')
  @Header('Cross-Origin-Resource-Policy', 'cross-origin')
  @Header('Access-Control-Allow-Origin', '*')
  public async getMedia(
    @Param('key') keyParam: string | string[],
    @Query() query: ResizeImageQueryDto,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const key = Array.isArray(keyParam) ? keyParam.join('/') : keyParam;
    const variant = await this.mediaService.serveVariant(key, query);

    res.setHeader('Content-Type', variant.contentType);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('ETag', variant.etag);

    if (req.headers['if-none-match'] === variant.etag) {
      res.status(304).end();
      return;
    }

    res.status(200).send(variant.buffer);
  }
}
