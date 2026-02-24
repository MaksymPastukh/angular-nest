import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { tapResponse } from '@ngrx/operators'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { RxMethod, rxMethod } from '@ngrx/signals/rxjs-interop'
import { pipe, switchMap, tap } from 'rxjs'
import { AuthService } from '../data-access/auth.api'
import {
  AuthEventConstantsMessages,
  AuthEventConstantsType,
} from '../domain/constants/auth-event.constants'
import { UserRole } from '../domain/enums/user-role.enum'
import { AuthEventInterface } from '../domain/interfaces/auth-event.interface'
import { AuthState } from '../domain/interfaces/auth-state.interface'
import { CurrentUserResponseInterface } from '../domain/interfaces/current-user.interface'
import { DefaultResponseInterface } from '../domain/interfaces/default-response.interface'
import { LoadSessionInterface } from '../domain/interfaces/get-tokens.interface'
import { LoginDataInterface } from '../domain/interfaces/loginData.interface'
import { RegisterDataInterface } from '../domain/interfaces/registerData.interface'
import { AuthErrorType, AuthSuccessType } from '../domain/types/auth-event.type'

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  event: null,
}

const successEvent = (
  type: AuthSuccessType,
  message: string,
  userName: string
): AuthEventInterface => ({
  type,
  message,
  userName,
})

const errorEvent = (type: AuthErrorType, message: string): AuthEventInterface => ({
  type,
  message,
})

export const AuthStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed((store) => {
    const user = computed(() => store.user()?.user ?? null)

    return {
      userName: computed(() => user()?.firstName ?? 'Guest'),
      userRole: computed(() => user()?.role ?? UserRole.GUEST),
      isAdmin: computed(() => user()?.role === UserRole.ADMIN),
      isUser: computed(() => user()?.role === UserRole.USER),
      userId: computed(() => user()?.id ?? null),
    }
  }),

  withMethods((store, authService = inject(AuthService)) => {
    const setPending = (): void => {
      patchState(store, { isLoading: true, error: null, event: null })
    }

    const stop = (): void => {
      patchState(store, { isLoading: false })
    }

    const setFailure = (message: string, type: AuthErrorType): void => {
      patchState(store, {
        error: { message },
        isAuthenticated: false,
        user: null,
        event: errorEvent(type, message),
      })
    }

    const setSuccess = (
      response: CurrentUserResponseInterface,
      success: { type: AuthSuccessType; message: string }
    ): void => {
      patchState(store, {
        user: response,
        isAuthenticated: true,
        error: null,
        event: successEvent(success.type, success.message, response.user.firstName),
      })
    }

    const getErrorMessage = (error: unknown): string => {
      if (!(error instanceof HttpErrorResponse)) return `An unknown error occurred.`

      const apiMessage: unknown = (error.error as DefaultResponseInterface)?.message
      if (typeof apiMessage === 'string') return apiMessage
      if (Array.isArray(apiMessage)) return apiMessage.join(' ')

      return error.message ?? `Request failed with status ${error.status}.`
    }

    const register: RxMethod<RegisterDataInterface> = rxMethod<RegisterDataInterface>(
      pipe(
        tap(() => setPending()),
        switchMap((data) =>
          authService.register(data).pipe(
            tapResponse({
              next: (response) =>
                setSuccess(response, {
                  type: AuthEventConstantsType.REGISTER_SUCCESS,
                  message: AuthEventConstantsMessages.REGISTER_SUCCESS_MESSAGE,
                }),
              error: (e) => setFailure(getErrorMessage(e), AuthEventConstantsType.REGISTER_ERROR),
              finalize: () => stop(),
            })
          )
        )
      )
    )

    const login: RxMethod<LoginDataInterface> = rxMethod<LoginDataInterface>(
      pipe(
        tap(() => setPending()),
        switchMap((data) =>
          authService.login(data).pipe(
            tapResponse({
              next: (response) =>
                setSuccess(response, {
                  type: AuthEventConstantsType.LOGIN_SUCCESS,
                  message: AuthEventConstantsMessages.LOGIN_SUCCESS_MESSAGE,
                }),
              error: (e) => setFailure(getErrorMessage(e), AuthEventConstantsType.LOGIN_ERROR),
              finalize: () => stop(),
            })
          )
        )
      )
    )

    const hydrateSession = (session: LoadSessionInterface): void => {
      patchState(store, {
        user: {
          access_token: session.accessToken as string,
          refresh_token: session.refreshToken as string,
          user: session.user,
        },
        isAuthenticated: true,
        isLoading: false,
        error: null,
        event: null,
      })
    }

    const resetState = (): void => {
      patchState(store, initialState)
    }

    const clearEvent = (): void => {
      patchState(store, { event: null })
    }

    return {
      register,
      login,
      hydrateSession,
      resetState,
      clearEvent,
    }
  })
)
