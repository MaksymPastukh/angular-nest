import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { Router } from '@angular/router'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, Observable, of, pipe, switchMap, tap } from 'rxjs'
import { AuthService } from '../services/auth.service'
import { AuthEventInterface } from '../types/auth-event.interface'
import { AuthState } from '../types/auth-state.interface'
import { AUTHORIZATION_STATE } from '../types/authorization.constants'
import { CurrentUserResponseInterface } from '../types/current-user.interface'
import { LoginDataInterface } from '../types/loginData.interface'
import { RegisterDataInterface } from '../types/registerData.interface'
import { UserRole } from '../types/user-role.enum'

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  event: null,
}

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
    userName: computed(() => {
      const currentUser: CurrentUserResponseInterface | null = store.user()
      return currentUser?.user?.firstName ?? 'Guest'
    }),

    // Получаем роль пользователя
    userRole: computed(() => store.user()?.user?.role ?? UserRole.GUEST),

    // Проверка является ли пользователь администратором
    isAdmin: computed(() => store.user()?.user?.role === UserRole.ADMIN),

    // Проверка является ли пользователь обычным пользователем
    isUser: computed(() => store.user()?.user?.role === UserRole.USER),
    userId: computed(() => store.user()?.user?.id ?? null),
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

    /**
     * Вспомогательная функция для обработки успешной аутентификации
     * Убирает дублирование кода между register и login
     */
    const handleAuthSuccess = (
      response: CurrentUserResponseInterface,
      message: string,
      type: 'loginSuccess' | 'registerSuccess'
    ) => {
      // Сохраняем токены напрямую (они строки)
      localStorage.setItem(AUTHORIZATION_STATE.authAccessTokenKey, response.access_token)
      localStorage.setItem(AUTHORIZATION_STATE.authRefreshTokenKey, response.refresh_token)
      // User объект через authService.setItem (он сделает stringify)
      authService.setItem(AUTHORIZATION_STATE.currentUserKey, response.user)

      patchState(store, {
        user: response,
        isAuthenticated: true,
        isLoading: false,
        error: null,
        event: {
          type,
          userName: response.user.firstName,
        } as AuthEventInterface,
      })

      // Перенаправляем на главную
      router.navigate(['/']).catch(console.error)
    }

    return {
      rehydrate: () => {
        const accessToken = localStorage.getItem(AUTHORIZATION_STATE.authAccessTokenKey)
        const refreshToken = localStorage.getItem(AUTHORIZATION_STATE.authRefreshTokenKey)
        const userJson = localStorage.getItem(AUTHORIZATION_STATE.currentUserKey)

        if (!accessToken || !refreshToken || !userJson) {
          return
        }

        try {
          const user = JSON.parse(userJson)

          patchState(store, {
            user: {
              access_token: accessToken,
              refresh_token: refreshToken,
              user,
            },
            isAuthenticated: true,
          })
        } catch {
          localStorage.removeItem(AUTHORIZATION_STATE.authAccessTokenKey)
          localStorage.removeItem(AUTHORIZATION_STATE.authRefreshTokenKey)
          localStorage.removeItem(AUTHORIZATION_STATE.currentUserKey)
          patchState(store, initialState)
        }
      },

      /**
       * Проверка наличия конкретной роли у пользователя
       * @param role - роль для проверки (UserRole enum или string)
       */
      hasRole: (role: UserRole | string): boolean => {
        return store.userRole() === role
      },

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
            // patchState - функция для обновления части state
            // Мерджит новые значения с текущим state
            patchState(store, {
              isLoading: true,
              error: null,
            })
          }),
          switchMap(
            (
              registerData: RegisterDataInterface
            ): Observable<CurrentUserResponseInterface | null> =>
              authService.register(registerData).pipe(
                // Обрабатываем успешный ответ
                tap((response) =>
                  handleAuthSuccess(response, 'Registration Successful', 'registerSuccess')
                ),

                // Обрабатываем ошибки
                catchError((error: HttpErrorResponse): Observable<null> => {
                  const message = error?.error?.message ?? error?.message ?? 'Something went wrong.'

                  patchState(store, {
                    error: { message },
                    isLoading: false,
                    isAuthenticated: false,
                    user: null,
                    event: {
                      type: 'registerError',
                      message,
                    } as AuthEventInterface,
                  })

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

      login: rxMethod<LoginDataInterface>(
        pipe(
          tap(() => {
            patchState(store, {
              isLoading: true,
              error: null,
            })
          }),
          switchMap(
            (loginData: LoginDataInterface): Observable<CurrentUserResponseInterface | null> =>
              authService.login(loginData).pipe(
                tap((response) => handleAuthSuccess(response, 'Login Successful', 'loginSuccess')),
                catchError((error: HttpErrorResponse): Observable<null> => {
                  const message = error?.error?.message ?? error?.message ?? 'Something went wrong.'

                  patchState(store, {
                    error: { message },
                    isLoading: false,
                    isAuthenticated: false,
                    user: null,
                    event: {
                      type: 'loginError',
                      message,
                    } as AuthEventInterface,
                  })

                  return of(null)
                })
              )
          )
        )
      ),

      /**
       * МЕТОД: logout
       *
       * Простой синхронный метод для выхода из системы
       * Очищает state и localStorage
       */
      logout: () => {
        // Очищаем localStorage
        localStorage.removeItem(AUTHORIZATION_STATE.authAccessTokenKey)
        localStorage.removeItem(AUTHORIZATION_STATE.authRefreshTokenKey)
        localStorage.removeItem(AUTHORIZATION_STATE.currentUserKey)

        // Сбрасываем state к начальному состоянию
        patchState(store, {
          ...initialState,
          event: { type: 'logout' },
        })

        // Перенаправляем на страницу логина
        void router.navigate(['/login'])
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

      /**
       * МЕТОД: updateAfterRefresh
       *
       * Обновляет state после обновления токенов через refresh
       * Используется в AuthInterceptor при 401 ошибке
       */
      updateAfterRefresh: (response: CurrentUserResponseInterface) => {
        // Сохраняем токены напрямую (они строки)
        localStorage.setItem(AUTHORIZATION_STATE.authAccessTokenKey, response.access_token)
        localStorage.setItem(AUTHORIZATION_STATE.authRefreshTokenKey, response.refresh_token)
        // User объект через setItem (он сделает stringify один раз)
        authService.setItem(AUTHORIZATION_STATE.currentUserKey, response.user)

        // Обновляем state с новыми данными
        patchState(store, {
          user: response,
          isAuthenticated: true,
          error: null,
        })
      },

      clearEvent: () => {
        patchState(store, { event: null })
      },
    }
  })
)
