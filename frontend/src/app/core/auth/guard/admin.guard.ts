import { CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core'
import { AuthStore } from '../store/auth.store'
import { UserRole } from '../types/user-role.enum'

/**
 * Guard для защиты административных маршрутов
 * Проверяет:
 * 1. Авторизован ли пользователь
 * 2. Имеет ли роль 'admin' (UserRole.ADMIN)
 *
 * Если нет — перенаправляет на соответствующую страницу
 */
export const adminGuard: CanActivateFn = (route, state) => {
  const authStore = inject(AuthStore)
  const router = inject(Router)

  // Проверяем авторизацию
  if (!authStore.isAuthenticated()) {
    return router.createUrlTree(['/login'], {
      queryParams: { returnUrl: state.url },
    })
  }

  // Проверяем роль администратора через computed свойство
  if (authStore.isAdmin()) {
    return true
  }

  // Альтернативный способ через метод hasRole
  // if (authStore.hasRole(UserRole.ADMIN)) {
  //   return true
  // }

  // Если не админ — редирект на главную
  return router.createUrlTree(['/'])
}
