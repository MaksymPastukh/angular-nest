import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { Router } from '@angular/router'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, EMPTY, Observable, pipe, switchMap, tap } from 'rxjs'
import { AuthService } from '../data-access/auth.service'
import { AUTHORIZATION_STATE } from '../domain/constants/authorization.constants'
import { UserRole } from '../domain/enums/user-role.enum'
import { AuthEventInterface } from '../domain/interfaces/auth-event.interface'
import { AuthState } from '../domain/interfaces/auth-state.interface'
import { CurrentUserResponseInterface, User } from '../domain/interfaces/current-user.interface'
import { LoginDataInterface } from '../domain/interfaces/loginData.interface'
import { RegisterDataInterface } from '../domain/interfaces/registerData.interface'

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  event: null,
}

export const AuthStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),
  withComputed((store) => ({
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

  withMethods((store) => {
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
      localStorage.setItem(AUTHORIZATION_STATE.authAccessTokenKey, response.access_token)
      localStorage.setItem(AUTHORIZATION_STATE.authRefreshTokenKey, response.refresh_token)
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

      void router.navigate(['/'])
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
          const user: User = JSON.parse(userJson) as User

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

      hasRole: (role: UserRole | string): boolean => {
        return store.userRole() === role
      },

      register: rxMethod<RegisterDataInterface>(
        pipe(
          tap(() => {
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
                tap((response) =>
                  handleAuthSuccess(response, 'Registration Successful', 'registerSuccess')
                ),

                catchError((error: HttpErrorResponse): Observable<null> => {
                  const message =
                    (error.error as { message?: string })?.message ??
                    error.message ??
                    'Произошла ошибка'

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

                  return EMPTY
                })
              )
          )
        )
      ),

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
                  const message =
                    (error.error as { message?: string })?.message ??
                    error.message ??
                    'Произошла ошибка'

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

                  return EMPTY
                })
              )
          )
        )
      ),

      logout: () => {
        localStorage.removeItem(AUTHORIZATION_STATE.authAccessTokenKey)
        localStorage.removeItem(AUTHORIZATION_STATE.authRefreshTokenKey)
        localStorage.removeItem(AUTHORIZATION_STATE.currentUserKey)

        patchState(store, {
          ...initialState,
          event: { type: 'logout' },
        })

        void router.navigate(['/login'])
      },

      clearError: () => {
        patchState(store, { error: null })
      },

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
