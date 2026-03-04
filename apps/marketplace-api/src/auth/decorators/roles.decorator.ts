import { SetMetadata } from '@nestjs/common';

/**
 * Ключ для хранения метаданных ролей
 * Используется RolesGuard для извлечения требуемых ролей
 */
export const ROLES_KEY = 'roles';

/**
 * Декоратор для указания требуемых ролей для доступа к роуту
 * Работает вместе с RolesGuard
 *
 * @param roles - Список ролей, которым разрешён доступ
 * @returns Декоратор, который устанавливает метаданные ролей
 *
 * Пример использования:
 * @UseGuards(JwtAuthGuard, RolesGuard)
 * @Roles('admin', 'manager')
 * @Get('admin-data')
 * getAdminData() { return 'Only for admin and manager'; }
 */
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
