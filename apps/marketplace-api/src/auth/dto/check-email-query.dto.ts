import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CheckEmailQueryDto {
  @ApiProperty({ example: 'max@example.com' })
  @IsEmail()
  @IsNotEmpty()
  public email: string;
}
