/**
 * Доступные роли пользователей в системе
 */
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  GUEST = 'guest', // для неавторизованных пользователей
}

/**
 * Проверка валидности роли
 */
export function isValidRole(role: string): role is UserRole {
  return Object.values(UserRole).includes(role as UserRole)
}

/**
 * Получение отображаемого имени роли
 */
export function getRoleDisplayName(role: UserRole | string): string {
  switch (role) {
    case UserRole.ADMIN:
      return 'Администратор'
    case UserRole.USER:
      return 'Пользователь'
    case UserRole.GUEST:
      return 'Гость'
    default:
      return 'Неизвестная роль'
  }
}

