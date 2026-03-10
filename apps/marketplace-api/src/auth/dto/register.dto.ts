import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Max' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  public firstName: string;

  @ApiProperty({ example: 'max@example.com' })
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @ApiProperty({ example: 'StrongPass1' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  public password: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsNotEmpty()
  public agreeToTerms: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  public subscribeToNewsletter?: boolean;
}
