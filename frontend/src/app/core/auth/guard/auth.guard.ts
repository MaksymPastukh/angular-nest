import { CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core'
import { AuthStore } from '../store/auth.store'

/**
 * Guard для защиты маршрутов, требующих авторизации
 * Проверяет только авторизацию пользователя (любая роль)
 *
 * Использование:
 * - Страницы профиля
 * - Страницы заказов
 * - Личный кабинет
 *
 * Если не авторизован — перенаправляет на /login
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authStore = inject(AuthStore)
  const router = inject(Router)

  // Проверяем авторизацию
  if (authStore.isAuthenticated()) {
    return true
  }

  // Если не авторизован — редирект на логин с возвратом на текущую страницу
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url },
  })
}
