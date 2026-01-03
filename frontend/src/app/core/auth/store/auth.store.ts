import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { pipe, tap, switchMap, catchError, of, Observable } from 'rxjs'
import { AuthService } from '../services/auth.service'
import { RegisterDataInterface } from '../types/registerData.interface'
import { CurrentUserResponseInterface } from '../types/current-user.interface'
import { Router } from '@angular/router'
import { MessageService } from 'primeng/api'
import { AuthState } from '../types/auth-state.interface'

/**
 * AUTH STORE - NgRx SignalStore
 *
 * SignalStore - это современный подход к управлению состоянием в Angular,
 * который использует signals (сигналы) для реактивности.
 *
 * Основные концепции:
 * 1. State (состояние) - данные, которые мы храним
 * 2. Computed (вычисляемые значения) - производные от state
 * 3. Methods (методы) - функции для изменения state
 */

const initialState: AuthState = (() => {
  /**
   * НАЧАЛЬНОЕ СОСТОЯНИЕ
   *
   * Проверяем localStorage при инициализации:
   * - Если есть токен и данные пользователя - восстанавливаем сессию
   * - Если нет - начинаем с пустого состояния
   */
  // Пытаемся получить токен из localStorage
  const token: string | null = localStorage.getItem('authToken')
  const userJson: string | null = localStorage.getItem('currentUser')

  // Если есть и токен, и данные пользователя - восстанавливаем состояние
  if (token && userJson) {
    try {
      const user = JSON.parse(userJson)
      return {
        user,
        isLoading: false,
        error: null,
        isAuthenticated: true,
      }
    } catch (e) {
      // Если не удалось распарсить - очищаем localStorage
      localStorage.removeItem('authToken')
      localStorage.removeItem('currentUser')
    }
  }

  // Возвращаем пустое состояние
  return {
    user: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
  }
})()

/**
 * AUTH STORE
 *
 * signalStore - это функция, которая создает store с использованием signals
 *
 * withState() - определяет начальное состояние
 * withComputed() - добавляет вычисляемые значения (computed signals)
 * withMethods() - добавляет методы для работы со state
 */

export const AuthStore = signalStore(
  // Уникальный идентификатор store (можно использовать для DevTools)
  { providedIn: 'root' },

  /**
   * ШАГ 1: Определяем STATE
   *
   * withState() - создает signals для каждого поля в initialState
   * После этого мы можем читать состояние через: store.user(), store.isLoading() и т.д.
   */
  withState(initialState),

  /**
   * ШАГ 2: Добавляем COMPUTED значения
   *
   * Computed signals - это производные значения, которые автоматически
   * пересчитываются при изменении исходных signals
   *
   * Например, userName будет автоматически обновляться при изменении user
   */
  withComputed((store) => ({
    // Получаем имя пользователя из user.firstName или возвращаем 'Guest'
    userName: computed(() => store.user()?.user?.firstName ?? 'Guest'),

    // Проверяем, есть ли у пользователя определенная роль
    hasRole: computed(() => (role: string): boolean => {
      const userRoles = store.user()?.user?.roles ?? []
      return userRoles.includes(role)
    }),
  })),

  /**
   * ШАГ 3: Добавляем METHODS
   *
   * Methods - это функции, которые могут:
   * 1. Изменять state через patchState()
   * 2. Вызывать API через rxMethod()
   * 3. Выполнять side-effects (навигация, уведомления)
   */
  withMethods((store) => {
    // Инжектим зависимости
    const authService = inject(AuthService)
    const router = inject(Router)
    const messageService = inject(MessageService)

    return {
      /**
       * МЕТОД: register
       *
       * rxMethod() - это специальный метод для работы с RxJS observable
       * Он автоматически подписывается и отписывается от observable
       *
       * Процесс регистрации:
       * 1. Устанавливаем isLoading = true
       * 2. Отправляем запрос на сервер через authService
       * 3. При успехе - сохраняем данные в state и localStorage
       * 4. При ошибке - сохраняем ошибку в state
       * 5. Всегда устанавливаем isLoading = false
       */
      register: rxMethod<RegisterDataInterface>(
        pipe(
          // tap - выполняем side-effect, не изменяя поток данных
          tap(() => {
            console.log('🔄 [AuthStore] Начинаем регистрацию...')

            // patchState - функция для обновления части state
            // Мерджит новые значения с текущим state
            patchState(store, {
              isLoading: true,
              error: null,
            })
          }),

          // switchMap - отменяет предыдущий запрос, если пришел новый
          // Вызываем API метод регистрации
          switchMap(
            (
              registerData: RegisterDataInterface
            ): Observable<CurrentUserResponseInterface | null> =>
              authService.register(registerData).pipe(
                // Обрабатываем успешный ответ
                tap((response: CurrentUserResponseInterface) => {
                  console.log('✅ [AuthStore] Регистрация успешна:', response)

                  // ВАЖНО: Сохраняем данные в localStorage
                  // Это позволит восстановить сессию после перезагрузки страницы
                  localStorage.setItem('authToken', response.access_token)
                  localStorage.setItem('currentUser', JSON.stringify(response))

                  // Обновляем state с данными пользователя
                  patchState(store, {
                    user: response,
                    isAuthenticated: true,
                    isLoading: false,
                    error: null,
                  })

                  // Показываем уведомление об успехе
                  messageService.add({
                    severity: 'success',
                    summary: 'Registration Successful',
                    detail: `Welcome, ${response.user.firstName}!`,
                  })

                  // Перенаправляем на главную страницу
                  router.navigate(['/']).catch(console.error)
                }),

                // Обрабатываем ошибки
                catchError((error: any): Observable<null> => {
                  console.error('❌ [AuthStore] Ошибка регистрации:', error)

                  // Формируем понятное сообщение об ошибке
                  const errorMessage: string =
                    error?.error?.message ||
                    error?.message ||
                    'Registration failed. Please try again.'

                  // Обновляем state с ошибкой
                  patchState(store, {
                    error: errorMessage,
                    isLoading: false,
                    isAuthenticated: false,
                    user: null,
                  })

                  // Показываем уведомление об ошибке
                  messageService.add({
                    severity: 'error',
                    summary: 'Registration Failed',
                    detail: errorMessage,
                  })

                  // Возвращаем пустой observable, чтобы не прерывать поток
                  return of(null)
                })
              )
          )
        )
      ),

      /**
       * МЕТОД: login
       *
       * Аналогичный метод для авторизации (пример для будущей реализации)
       * Вы можете реализовать его самостоятельно по аналогии с register
       */

      /**
       * МЕТОД: logout
       *
       * Простой синхронный метод для выхода из системы
       * Очищает state и localStorage
       */
      logout: () => {
        console.log('🚪 [AuthStore] Выход из системы...')

        // Очищаем localStorage
        localStorage.removeItem('authToken')
        localStorage.removeItem('currentUser')

        // Сбрасываем state к начальному состоянию
        patchState(store, {
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        })

        messageService.add({
          severity: 'info',
          summary: 'Logged Out',
          detail: 'You have been logged out successfully.',
        })

        // Перенаправляем на страницу логина
        router.navigate(['/login'])
      },

      /**
       * МЕТОД: clearError
       *
       * Очищает ошибку из state
       * Полезно для закрытия уведомлений об ошибках
       */
      clearError: () => {
        patchState(store, { error: null })
      },
    }
  })
)
