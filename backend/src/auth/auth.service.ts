import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../users/schemas/user.schema';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthResponse, JwtPayload, UserWithId } from './interfaces/auth-response.interface';

/**
 * Сервис аутентификации
 * Отвечает за регистрацию, вход и генерацию JWT токенов
 */
@Injectable()
export class AuthService {
  /**
   * Конструктор сервиса
   * @param usersService - Сервис для работы с пользователями
   * @param jwtService - Сервис для работы с JWT токенами
   */
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  /**
   * Генерация пары токенов (access и refresh)
   * @param user - Документ пользователя
   * @returns Объект с access_token, refresh_token и данными пользователя
   */
  private generateTokens(user: UserWithId): AuthResponse {
    const payload: JwtPayload = {
      sub: user._id.toString(),
      email: user.email,
      role: user.role,
    };

    // Access токен с коротким сроком действия (15 минут)
    const access_token = this.jwtService.sign(payload, {
      expiresIn: '15m',
    });

    // Refresh токен с длительным сроком действия (7 дней)
    const refresh_token = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });

    return {
      access_token,
      refresh_token,
      user: {
        id: user._id.toString(),
        email: user.email,
        firstName: user.firstName,
        role: user.role,
      },
    };
  }

  /**
   * Регистрация нового пользователя
   * Создаёт нового пользователя в БД и возвращает JWT токены
   * @param registerDto - Данные для регистрации (firstName, email, password, confirmPassword, agreeToTerms, subscribeToNewsletter)
   * @returns Объект с access_token, refresh_token и данными пользователя
   * @throws UnauthorizedException - если пароли не совпадают
   */
  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    // Проверяем, что пароли совпадают
    if (registerDto.password !== registerDto.confirmPassword) {
      throw new UnauthorizedException('Пароли не совпадают');
    }

    // Создаём пользователя через UsersService
    // Пароль будет автоматически захеширован внутри сервиса
    const user = await this.usersService.create(
      registerDto.email,
      registerDto.password,
      registerDto.firstName,
      registerDto.agreeToTerms,
      registerDto.subscribeToNewsletter,
    );

    // Генерируем пару токенов для нового пользователя
    return this.generateTokens(user);
  }

  /**
   * Вход пользователя в систему
   * Проверяет учётные данные и возвращает JWT токены
   * @param loginDto - Данные для входа (email, password)
   * @returns Объект с access_token, refresh_token и данными пользователя
   * @throws UnauthorizedException - если email или пароль неверны
   */
  async login(loginDto: LoginDto): Promise<AuthResponse> {
    // Проверяем учётные данные пользователя
    const user = await this.validateUser(loginDto.email, loginDto.password);

    if (!user) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    // Генерируем пару токенов для пользователя
    return this.generateTokens(user);
  }

  /**
   * Проверка учётных данных пользователя
   * Используется локальной стратегией Passport
   * @param email - Email пользователя
   * @param password - Пароль в открытом виде
   * @returns Объект пользователя если данные верны, null если нет
   */
  async validateUser(email: string, password: string): Promise<UserDocument | null> {
    // Ищем пользователя по email
    const user = await this.usersService.findByEmail(email);

    // Если пользователь не найден
    if (!user) {
      return null;
    }

    // Проверяем, активен ли аккаунт
    if (!user.isActive) {
      return null;
    }

    // Сравниваем введённый пароль с хешем из БД
    const isPasswordValid = await this.usersService.comparePasswords(password, user.password);

    // Если пароль неверный
    if (!isPasswordValid) {
      return null;
    }

    // Возвращаем пользователя (пароль будет удалён в контроллере)
    return user;
  }

  /**
   * Обновление access токена с помощью refresh токена
   * @param refreshToken - Refresh токен пользователя
   * @returns Новая пара токенов
   * @throws UnauthorizedException - если refresh токен невалиден или пользователь не найден
   */
  async refreshTokens(refreshToken: string): Promise<AuthResponse> {
    try {
      // Проверяем refresh токен
      const payload = this.jwtService.verify<JwtPayload>(refreshToken);

      // Получаем пользователя из БД
      const user = await this.usersService.findById(payload.sub);

      if (!user || !user.isActive) {
        throw new UnauthorizedException('Пользователь не найден или неактивен');
      }

      // Генерируем новую пару токенов
      return this.generateTokens(user);
    } catch (error) {
      throw new UnauthorizedException('Невалидный refresh токен');
    }
  }

  /**
   * Получение профиля текущего пользователя
   * Используется для защищённых роутов
   * @param userId - ID пользователя из JWT токена
   * @returns Данные пользователя без пароля
   */
  async getProfile(userId: string) {
    return this.usersService.findById(userId);
  }
}
