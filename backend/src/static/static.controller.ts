import { Controller, Get, Header, NotFoundException, Param, Res } from '@nestjs/common';
import type { Response } from 'express';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

/**
 * Контроллер для раздачи статических файлов (изображений)
 * Используется вместо ServeStaticModule для лучшего контроля над CORS заголовками
 */
@Controller()
export class StaticController {
  private readonly publicPath = join(process.cwd(), 'public');

  /**
   * Раздача изображений продуктов
   * GET /images/products/:filename
   */
  @Get('images/products/:filename')
  @Header('Cross-Origin-Resource-Policy', 'cross-origin')
  @Header('Access-Control-Allow-Origin', '*')
  async getProductImage(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(this.publicPath, 'images', 'products', filename);

    // Проверяем существование файла
    if (!existsSync(filePath)) {
      throw new NotFoundException(`Image ${filename} not found`);
    }

    // Определяем MIME-тип
    const ext = filename.split('.').pop()?.toLowerCase();
    const mimeTypes: Record<string, string> = {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'webp': 'image/webp',
      'svg': 'image/svg+xml',
    };

    const contentType = mimeTypes[ext || ''] || 'application/octet-stream';

    // Устанавливаем все необходимые заголовки
    res.setHeader('Content-Type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // Кэш на 1 год

    // Отправляем файл через stream
    const stream = createReadStream(filePath);
    stream.pipe(res);
  }

  /**
   * Раздача других изображений (если нужно)
   * GET /images/:folder/:filename
   */
  @Get('images/:folder/:filename')
  @Header('Cross-Origin-Resource-Policy', 'cross-origin')
  @Header('Access-Control-Allow-Origin', '*')
  async getImage(
    @Param('folder') folder: string,
    @Param('filename') filename: string,
    @Res() res: Response,
  ) {
    const filePath = join(this.publicPath, 'images', folder, filename);

    if (!existsSync(filePath)) {
      throw new NotFoundException(`Image ${folder}/${filename} not found`);
    }

    const ext = filename.split('.').pop()?.toLowerCase();
    const mimeTypes: Record<string, string> = {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'webp': 'image/webp',
      'svg': 'image/svg+xml',
    };

    const contentType = mimeTypes[ext || ''] || 'application/octet-stream';

    res.setHeader('Content-Type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    res.setHeader('Cache-Control', 'public, max-age=31536000');

    const stream = createReadStream(filePath);
    stream.pipe(res);
  }
}
