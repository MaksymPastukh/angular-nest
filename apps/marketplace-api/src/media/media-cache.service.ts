import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { MediaFit, MediaFormat } from './dto/resize-image-query.dto';

export interface MediaVariantCacheKey {
  key: string;
  width?: number;
  height?: number;
  fit: MediaFit;
  quality: number;
  format: MediaFormat;
}

@Injectable()
export class MediaCacheService {
  private readonly variantsRoot = join(process.cwd(), 'public', 'media', 'variants');

  public constructor() {
    this.ensureDir(this.variantsRoot);
  }

  public getVariantFilePath(cacheKey: MediaVariantCacheKey): string {
    const digest = this.createDigest(cacheKey);
    const segmentA = digest.slice(0, 2);
    const segmentB = digest.slice(2, 4);

    return join(this.variantsRoot, segmentA, segmentB, `${digest}.${cacheKey.format}`);
  }

  public getEtag(cacheKey: MediaVariantCacheKey): string {
    return `"${this.createDigest(cacheKey)}"`;
  }

  public ensureFileDir(filePath: string): void {
    this.ensureDir(dirname(filePath));
  }

  public exists(filePath: string): boolean {
    return existsSync(filePath);
  }

  private ensureDir(path: string): void {
    mkdirSync(path, { recursive: true });
  }

  private createDigest(cacheKey: MediaVariantCacheKey): string {
    return createHash('sha1').update(JSON.stringify(cacheKey)).digest('hex');
  }
}
