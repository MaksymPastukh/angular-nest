import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * Тип документа пользователя для TypeScript
 * Расширяет стандартный Document из Mongoose
 */
export type UserDocument = User & Document;

/**
 * Схема пользователя для MongoDB
 * Описывает структуру документа пользователя в базе данных
 */
@Schema({
  // Автоматически добавляет поля createdAt и updatedAt
  timestamps: true,
})
export class User {
  /**
   * Email пользователя
   * Используется как уникальный идентификатор для входа
   * @required - обязательное поле
   * @unique - должно быть уникальным в коллекции
   */
  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  /**
   * Хешированный пароль пользователя
   * Никогда не храним пароли в открытом виде!
   * Используем bcrypt для хеширования
   * @required - обязательное поле
   */
  @Prop({ required: true })
  password: string;

  /**
   * Имя пользователя
   * @required - обязательное поле
   */
  @Prop({ required: true, trim: true })
  firstName: string;

  /**
   * Фамилия пользователя
   * @required - обязательное поле
   */
  @Prop({ required: true, trim: true })
  lastName: string;

  /**
   * Номер телефона пользователя
   * @optional - необязательное поле
   */
  @Prop({ trim: true })
  phone?: string;

  /**
   * Роль пользователя в системе
   * user - обычный покупатель
   * admin - администратор с расширенными правами
   * @default 'user' - по умолчанию создаётся обычный пользователь
   */
  @Prop({ default: 'user', enum: ['user', 'admin'] })
  role: string;

  /**
   * Статус активности аккаунта
   * Можно использовать для временной блокировки пользователей
   * @default true - по умолчанию аккаунт активен
   */
  @Prop({ default: true })
  isActive: boolean;

  /**
   * Адрес доставки (опционально)
   * Можно расширить до массива адресов
   */
  @Prop({ type: Object })
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

/**
 * Создаём Mongoose схему из класса User
 * Эта схема будет использоваться для создания модели
 * Индекс email создаётся автоматически благодаря опции unique: true в декораторе @Prop
 */
export const UserSchema = SchemaFactory.createForClass(User);
