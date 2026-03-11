import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { readFile, stat, writeFile } from 'fs/promises';
import { isAbsolute, join, resolve, sep } from 'path';
import sharp from 'sharp';
import {
  MediaFit,
  MediaFormat,
  ResizeImageQueryDto,
} from './dto/resize-image-query.dto';
import { MediaCacheService, MediaVariantCacheKey } from './media-cache.service';

interface PreparedMediaRequest {
  cacheKey: MediaVariantCacheKey;
  contentType: string;
  originalPath: string;
}

export interface MediaVariantResult {
  buffer: Buffer;
  contentType: string;
  etag: string;
}

@Injectable()
export class MediaService {
  private readonly originalsRoot = join(process.cwd(), 'public', 'media', 'originals');
  private readonly legacyProductsRoot = join(process.cwd(), 'public', 'images', 'products');

  public constructor(private readonly mediaCacheService: MediaCacheService) {}

  public async serveVariant(key: string, query: ResizeImageQueryDto): Promise<MediaVariantResult> {
    const prepared = await this.prepareRequest(key, query);
    const cachePath = this.mediaCacheService.getVariantFilePath(prepared.cacheKey);
    const etag = this.mediaCacheService.getEtag(prepared.cacheKey);

    if (this.mediaCacheService.exists(cachePath)) {
      const buffer = await readFile(cachePath);
      return {
        buffer,
        contentType: prepared.contentType,
        etag,
      };
    }

    const buffer = await this.renderVariant(prepared);
    this.mediaCacheService.ensureFileDir(cachePath);
    await writeFile(cachePath, buffer);

    return {
      buffer,
      contentType: prepared.contentType,
      etag,
    };
  }

  private async prepareRequest(key: string, query: ResizeImageQueryDto): Promise<PreparedMediaRequest> {
    const normalizedKey = this.normalizeKey(key);
    const originalPath = await this.resolveExistingOriginalPath(normalizedKey);

    const fit: MediaFit = query.fit ?? 'cover';
    const format: MediaFormat = query.fmt ?? 'webp';
    const quality = query.q ?? 80;

    const cacheKey: MediaVariantCacheKey = {
      key: normalizedKey,
      width: query.w,
      height: query.h,
      fit,
      quality,
      format,
    };

    return {
      cacheKey,
      originalPath,
      contentType: this.mapContentType(format),
    };
  }

  private normalizeKey(rawKey: string): string {
    let decoded = rawKey;

    try {
      decoded = decodeURIComponent(rawKey);
    } catch {
      decoded = rawKey;
    }

    const key = decoded.replace(/\\/g, '/').replace(/^\/+/, '').trim();

    if (!key) {
      throw new NotFoundException('Image key is required');
    }

    if (key.includes('\u0000')) {
      throw new BadRequestException('Image key is invalid');
    }

    return key;
  }

  private async resolveExistingOriginalPath(key: string): Promise<string> {
    const mainPath = this.resolveSafePath(this.originalsRoot, key);

    if (await this.fileExists(mainPath)) {
      return mainPath;
    }

    // Backward compatibility for legacy keys mapped from /images/products/*
    const legacyPath = this.resolveSafePath(this.legacyProductsRoot, key.replace(/^products\//, ''));
    if (await this.fileExists(legacyPath)) {
      return legacyPath;
    }

    throw new NotFoundException(`Image "${key}" not found`);
  }

  private resolveSafePath(root: string, key: string): string {
    const base = resolve(root);
    const full = resolve(base, key);
    const insideRoot = full === base || full.startsWith(`${base}${sep}`);

    if (!insideRoot || isAbsolute(key) || key.includes('..')) {
      throw new BadRequestException('Image key is invalid');
    }

    return full;
  }

  private async fileExists(filePath: string): Promise<boolean> {
    try {
      const fileStat = await stat(filePath);
      return fileStat.isFile();
    } catch {
      return false;
    }
  }

  private async renderVariant(prepared: PreparedMediaRequest): Promise<Buffer> {
    const { cacheKey } = prepared;
    const image = sharp(prepared.originalPath).rotate();

    if (cacheKey.width || cacheKey.height) {
      image.resize({
        width: cacheKey.width,
        height: cacheKey.height,
        fit: cacheKey.fit,
        withoutEnlargement: true,
      });
    }

    try {
      switch (cacheKey.format) {
        case 'avif':
          return await image.avif({ quality: cacheKey.quality }).toBuffer();
        case 'jpeg':
          return await image.jpeg({ quality: cacheKey.quality }).toBuffer();
        case 'png':
          return await image.png({ quality: cacheKey.quality }).toBuffer();
        case 'webp':
        default:
          return await image.webp({ quality: cacheKey.quality }).toBuffer();
      }
    } catch {
      throw new BadRequestException('Failed to process image');
    }
  }

  private mapContentType(format: MediaFormat): string {
    switch (format) {
      case 'avif':
        return 'image/avif';
      case 'jpeg':
        return 'image/jpeg';
      case 'png':
        return 'image/png';
      case 'webp':
      default:
        return 'image/webp';
    }
  }
}
