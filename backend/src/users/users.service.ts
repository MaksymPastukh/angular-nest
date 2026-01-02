import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

/**
 * Сервис для работы с пользователями
 * Содержит всю бизнес-логику по управлению пользователями
 */
@Injectable()
export class UsersService {
  /**
   * Конструктор сервиса
   * @param userModel - Модель пользователя из Mongoose, инжектируется автоматически
   */
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * Создание нового пользователя
   * Используется при регистрации
   * @param email - Email пользователя
   * @param password - Пароль в открытом виде (будет захеширован)
   * @param firstName - Имя пользователя
   * @param agreeToTerms - Согласие с условиями использования
   * @param subscribeToNewsletter - Подписка на рассылку (опционально)
   * @returns Созданный пользователь без поля пароля
   * @throws ConflictException - если email уже существует
   */
  async create(
    email: string,
    password: string,
    firstName: string,
    agreeToTerms: boolean,
    subscribeToNewsletter?: boolean,
  ): Promise<User> {
    // Проверяем, не существует ли уже пользователь с таким email
    const existingUser = await this.userModel.findOne({ email }).exec();
    if (existingUser) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    // Хешируем пароль с помощью bcrypt
    // 10 - это salt rounds (количество раундов хеширования)
    // Чем больше число, тем безопаснее, но медленнее
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаём нового пользователя
    const user = new this.userModel({
      email,
      password: hashedPassword,
      firstName,
      agreeToTerms,
      subscribeToNewsletter: subscribeToNewsletter || false,
    });

    // Сохраняем в базу данных
    const savedUser = await user.save();

    // Возвращаем пользователя без пароля (для безопасности)
    return this.sanitizeUser(savedUser);
  }

  /**
   * Поиск пользователя по email
   * Используется при входе в систему
   * @param email - Email для поиска
   * @returns Найденный пользователь или null
   */
  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  /**
   * Поиск пользователя по ID
   * @param id - ID пользователя в MongoDB
   * @returns Найденный пользователь без пароля
   * @throws NotFoundException - если пользователь не найден
   */
  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    return this.sanitizeUser(user);
  }

  /**
   * Получение всех пользователей (для админки)
   * @returns Массив всех пользователей без паролей
   */
  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users.map((user) => this.sanitizeUser(user));
  }

  /**
   * Обновление данных пользователя
   * @param id - ID пользователя
   * @param updateData - Объект с данными для обновления
   * @returns Обновлённый пользователь без пароля
   * @throws NotFoundException - если пользователь не найден
   */
  async update(id: string, updateData: Partial<User>): Promise<User> {
    // Если в данных для обновления есть пароль, нужно его захешировать
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('Пользователь не найден');
    }

    return this.sanitizeUser(updatedUser);
  }

  /**
   * Удаление пользователя (мягкое удаление через деактивацию)
   * @param id - ID пользователя
   * @returns Результат операции
   */
  async delete(id: string): Promise<{ message: string }> {
    const user = await this.userModel.findById(id).exec();

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    // Вместо физического удаления, деактивируем пользователя
    user.isActive = false;
    await user.save();

    return { message: 'Пользователь успешно деактивирован' };
  }

  /**
   * Проверка пароля пользователя
   * Сравнивает введённый пароль с хешированным паролем в БД
   * @param plainPassword - Пароль в открытом виде
   * @param hashedPassword - Хешированный пароль из БД
   * @returns true если пароли совпадают, false если нет
   */
  async comparePasswords(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  /**
   * Удаление пароля из объекта пользователя
   * Используется перед отправкой данных клиенту
   * @param user - Документ пользователя из БД
   * @returns Объект пользователя без поля password
   */
  private sanitizeUser(user: UserDocument): User {
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
  }
}
