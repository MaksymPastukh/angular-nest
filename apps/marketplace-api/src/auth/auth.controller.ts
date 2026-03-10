import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { CheckEmailResponse } from './contracts/check-email-response.interface';
import { CurrentUser } from './decorators/current-user.decorator';
import { CheckEmailQueryDto } from './dto/check-email-query.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthResponse } from './interfaces/auth-response.interface';
import type { AuthenticatedUser } from './interfaces/request-with-user.interface';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @Throttle({ default: { limit: 8, ttl: 60000 } })
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({
    status: 201,
    description: 'User registered successfully',
    schema: {
      example: {
        access_token: 'access-token',
        refresh_token: 'refresh-token',
        user: {
          id: '67cefe98379b80e6f2ab96d2',
          email: 'max@example.com',
          firstName: 'Max',
          role: 'user',
        },
      },
    },
  })
  @ApiResponse({
    status: 409,
    description: 'Email already taken',
    schema: {
      example: {
        statusCode: 409,
        code: 'EMAIL_TAKEN',
        message: 'User with this email already exists',
        timestamp: '2026-03-10T12:00:00.000Z',
        path: '/api/auth/register',
      },
    },
  })
  @ApiResponse({
    status: 422,
    description: 'Weak password',
    schema: {
      example: {
        statusCode: 422,
        code: 'WEAK_PASSWORD',
        message: 'Password must contain at least 8 chars, 1 uppercase letter and 1 digit',
        timestamp: '2026-03-10T12:00:00.000Z',
        path: '/api/auth/register',
      },
    },
  })
  public async register(@Body() registerDto: RegisterDto): Promise<AuthResponse> {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @ApiOperation({ summary: 'Authenticate user and return token pair' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'User authenticated successfully',
    schema: {
      example: {
        access_token: 'access-token',
        refresh_token: 'refresh-token',
        user: {
          id: '67cefe98379b80e6f2ab96d2',
          email: 'max@example.com',
          firstName: 'Max',
          role: 'user',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials',
    schema: {
      example: {
        statusCode: 401,
        code: 'INVALID_CREDENTIALS',
        message: 'Invalid credentials',
        timestamp: '2026-03-10T12:00:00.000Z',
        path: '/api/auth/login',
      },
    },
  })
  public async login(@Body() loginDto: LoginDto): Promise<AuthResponse> {
    return this.authService.login(loginDto);
  }

  @Get('check-email')
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { limit: 20, ttl: 60000 } })
  @ApiOperation({ summary: 'Check if email is available' })
  @ApiQuery({ name: 'email', required: true, type: String })
  @ApiResponse({
    status: 200,
    description: 'Email availability status',
    schema: {
      examples: {
        available: {
          summary: 'Email is available',
          value: { available: true },
        },
        notAvailable: {
          summary: 'Email is already taken',
          value: { available: false },
        },
      },
    },
  })
  public async checkEmail(@Query() query: CheckEmailQueryDto): Promise<CheckEmailResponse> {
    return this.authService.checkEmailAvailability(query.email);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh access and refresh tokens' })
  @ApiBody({ type: RefreshTokenDto })
  @ApiResponse({
    status: 200,
    description: 'Token pair refreshed',
    schema: {
      example: {
        access_token: 'new-access-token',
        refresh_token: 'new-refresh-token',
        user: {
          id: '67cefe98379b80e6f2ab96d2',
          email: 'max@example.com',
          firstName: 'Max',
          role: 'user',
        },
      },
    },
  })
  public async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto): Promise<AuthResponse> {
    return this.authService.refreshTokens(refreshTokenDto.refresh_token);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout user and clear refresh token hash' })
  @ApiResponse({ status: 204, description: 'Logged out successfully' })
  public async logout(@CurrentUser('id') userId: string): Promise<void> {
    await this.authService.logout(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  public async getProfile(@CurrentUser('id') userId: string) {
    return this.authService.getProfile(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Check JWT and return current user payload' })
  public getMe(@CurrentUser() user: AuthenticatedUser): {
    message: string;
    user: AuthenticatedUser;
  } {
    return {
      message: 'JWT token is valid',
      user,
    };
  }
}
