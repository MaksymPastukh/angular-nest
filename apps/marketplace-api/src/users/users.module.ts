import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';

/**
 * Модуль пользователей
 * Отвечает за всю логику работы с пользователями
 */
@Module({
  imports: [
    // Регистрируем схему User в Mongoose
    // Это создаст коллекцию 'users' в MongoDB
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  // Экспортируем UsersService, чтобы другие модули могли его использовать
  // Например, модуль Auth будет использовать этот сервис для проверки пользователей
  exports: [UsersService],
})
export class UsersModule {}
