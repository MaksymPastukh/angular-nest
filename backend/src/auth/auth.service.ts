import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

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
   * Регистрация нового пользователя
   * Создаёт нового пользователя в БД и возвращает JWT токен
   * @param registerDto - Данные для регистрации (firstName, email, password, confirmPassword, agreeToTerms, subscribeToNewsletter)
   * @returns Объект с access_token и данными пользователя
   * @throws UnauthorizedException - если пароли не совпадают
   */
  async register(registerDto: RegisterDto) {
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

    // Генерируем JWT токен для нового пользователя
    const payload = {
      sub: user['_id'].toString(), // ID пользователя
      email: user.email,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user['_id'],
        email: user.email,
        firstName: user.firstName,
        role: user.role,
      },
    };
  }

  /**
   * Вход пользователя в систему
   * Проверяет учётные данные и возвращает JWT токен
   * @param loginDto - Данные для входа (email, password)
   * @returns Объект с access_token и данными пользователя
   * @throws UnauthorizedException - если email или пароль неверны
   */
  async login(loginDto: LoginDto) {
    // Проверяем учётные данные пользователя
    const user = await this.validateUser(loginDto.email, loginDto.password);

    if (!user) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    // Генерируем JWT токен для пользователя
    const payload = {
      sub: user._id.toString(),
      email: user.email,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        role: user.role,
      },
    };
  }

  /**
   * Проверка учётных данных пользователя
   * Используется локальной стратегией Passport
   * @param email - Email пользователя
   * @param password - Пароль в открытом виде
   * @returns Объект пользователя если данные верны, null если нет
   */
  async validateUser(email: string, password: string): Promise<any> {
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
    const isPasswordValid = await this.usersService.comparePasswords(
      password,
      user.password,
    );

    // Если пароль неверный
    if (!isPasswordValid) {
      return null;
    }

    // Возвращаем пользователя (пароль будет удалён в контроллере)
    return user;
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
