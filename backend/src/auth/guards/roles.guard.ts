import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { RequestWithUser } from '../interfaces/request-with-user.interface';
/**
 * Guard для проверки ролей пользователя
 * Работает вместе с декоратором @Roles()
 * Проверяет, есть ли у пользователя одна из требуемых ролей
 *
 * Использование в контроллере:
 * @UseGuards(JwtAuthGuard, RolesGuard)
 * @Roles('admin')
 * @Get('admin-panel')
 * getAdminPanel() { return 'Admin only'; }
 */
@Injectable()
export class RolesGuard implements CanActivate {
  /**
   * Конструктор guard
   * @param reflector - Утилита для извлечения метаданных из декораторов
   */
  constructor(private reflector: Reflector) {}

  /**
   * Метод проверки доступа
   * Вызывается автоматически перед выполнением обработчика роута
   * @param context - Контекст выполнения, содержит информацию о запросе
   * @returns true если доступ разрешён, false или исключение если запрещён
   */
  canActivate(context: ExecutionContext): boolean {
    // Извлекаем требуемые роли из метаданных, установленных декоратором @Roles()
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(), // Метаданные из метода контроллера
      context.getClass(), // Метаданные из класса контроллера
    ]);

    // Если роли не указаны, доступ разрешён всем аутентифицированным пользователям
    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest<RequestWithUser>();

    // Проверяем, есть ли роль пользователя в списке требуемых ролей
    const hasRole = requiredRoles.some((role) => user.role === role);

    // Если роль не подходит, выбрасываем исключение
    if (!hasRole) {
      throw new ForbiddenException('У вас недостаточно прав для выполнения этого действия');
    }

    return hasRole;
  }
}
