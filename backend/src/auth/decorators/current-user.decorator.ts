import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Декоратор для получения текущего пользователя из запроса
 * Извлекает объект пользователя, добавленный JwtAuthGuard в req.user
 *
 * @param data - Опциональное имя поля пользователя для извлечения
 * @param ctx - Контекст выполнения
 * @returns Объект пользователя или конкретное поле
 *
 * Примеры использования:
 *
 * // Получить весь объект пользователя
 * @Get('profile')
 * getProfile(@CurrentUser() user) {
 *   return user; // { id, email, role, firstName, lastName, ... }
 * }
 *
 * // Получить только ID пользователя
 * @Get('my-orders')
 * getMyOrders(@CurrentUser('id') userId: string) {
 *   return this.ordersService.findByUserId(userId);
 * }
 *
 * // Получить только email
 * @Get('settings')
 * getSettings(@CurrentUser('email') email: string) {
 *   return { email };
 * }
 */
export const CurrentUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    // Получаем объект запроса
    const request = ctx.switchToHttp().getRequest();

    // Извлекаем пользователя из req.user
    const user = request.user;

    // Если указано конкретное поле, возвращаем его значение
    // Иначе возвращаем весь объект пользователя
    return data ? user?.[data] : user;
  },
);
