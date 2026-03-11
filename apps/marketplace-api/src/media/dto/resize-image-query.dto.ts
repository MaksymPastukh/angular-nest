import { Transform, Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, Max, Min } from 'class-validator';

export const MEDIA_FITS = ['cover', 'contain', 'inside'] as const;
export const MEDIA_FORMATS = ['webp', 'avif', 'jpeg', 'png'] as const;

export type MediaFit = (typeof MEDIA_FITS)[number];
export type MediaFormat = (typeof MEDIA_FORMATS)[number];

export class ResizeImageQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(4000)
  public w?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(4000)
  public h?: number;

  @IsOptional()
  @Transform(({ value }) => (typeof value === 'string' ? value.toLowerCase() : value))
  @IsIn(MEDIA_FITS)
  public fit?: MediaFit;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  public q?: number;

  @IsOptional()
  @Transform(({ value }) => (typeof value === 'string' ? value.toLowerCase() : value))
  @IsIn(MEDIA_FORMATS)
  public fmt?: MediaFormat;
}
