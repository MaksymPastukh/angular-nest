import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

/**
 * Контроллер аутентификации
 * Обрабатывает все запросы связанные с регистрацией, входом и профилем
 * Базовый путь: /auth
 */
@Controller('auth')
export class AuthController {
  /**
   * Конструктор контроллера
   * @param authService - Сервис аутентификации
   */
  constructor(private authService: AuthService) {}

  /**
   * Регистрация нового пользователя
   * POST /auth/register
   *
   * Принимает данные нового пользователя и создаёт аккаунт
   * Автоматическая валидация данных через RegisterDto
   *
   * @param registerDto - Данные для регистрации
   * @returns JWT токен и данные пользователя
   *
   * Пример запроса:
   * POST /auth/register
   * {
   *   "email": "user@example.com",
   *   "password": "password123",
   *   "firstName": "Иван",
   *   "lastName": "Иванов",
   *   "phone": "+7 900 123 45 67"
   * }
   *
   * Пример ответа:
   * {
   *   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
   *   "user": {
   *     "id": "507f1f77bcf86cd799439011",
   *     "email": "user@example.com",
   *     "firstName": "Иван",
   *     "lastName": "Иванов",
   *     "role": "user"
   *   }
   * }
   */
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  /**
   * Вход пользователя в систему
   * POST /auth/login
   *
   * Проверяет учётные данные и выдаёт JWT токен
   * Автоматическая валидация данных через LoginDto
   *
   * @param loginDto - Email и пароль для входа
   * @returns JWT токен и данные пользователя
   *
   * Пример запроса:
   * POST /auth/login
   * {
   *   "email": "user@example.com",
   *   "password": "password123"
   * }
   *
   * Пример ответа:
   * {
   *   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
   *   "user": {
   *     "id": "507f1f77bcf86cd799439011",
   *     "email": "user@example.com",
   *     "firstName": "Иван",
   *     "lastName": "Иванов",
   *     "role": "user"
   *   }
   * }
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  /**
   * Получение профиля текущего пользователя
   * GET /auth/profile
   *
   * Защищённый роут - требуется JWT токен
   * Возвращает данные пользователя из токена
   *
   * @param user - Текущий пользователь (извлекается из JWT токена)
   * @returns Данные пользователя
   *
   * Пример запроса:
   * GET /auth/profile
   * Headers:
   *   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   *
   * Пример ответа:
   * {
   *   "id": "507f1f77bcf86cd799439011",
   *   "email": "user@example.com",
   *   "firstName": "Иван",
   *   "lastName": "Иванов",
   *   "role": "user",
   *   "isActive": true,
   *   "createdAt": "2025-12-26T10:00:00.000Z",
   *   "updatedAt": "2025-12-26T10:00:00.000Z"
   * }
   */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@CurrentUser('id') userId: string) {
    return this.authService.getProfile(userId);
  }

  /**
   * Тестовый эндпоинт для проверки JWT токена
   * GET /auth/me
   *
   * Защищённый роут - требуется JWT токен
   * Возвращает данные пользователя напрямую из токена (без запроса в БД)
   *
   * @param user - Текущий пользователь из токена
   * @returns Данные пользователя из JWT
   */
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@CurrentUser() user: any) {
    return {
      message: 'JWT токен валиден',
      user,
    };
  }
}
