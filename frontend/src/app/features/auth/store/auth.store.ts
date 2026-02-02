import { HttpErrorResponse } from '@angular/common/http'
import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, EMPTY, Observable, pipe, switchMap, tap } from 'rxjs'
import { AuthService } from '../data-access/auth.api'

import {
  AuthEventConstantsMessages,
  AuthEventConstantsType,
} from '../domain/constants/auth-event.constants'
import { UserRole } from '../domain/enums/user-role.enum'
import { AuthEventInterface } from '../domain/interfaces/auth-event.interface'
import { AuthState } from '../domain/interfaces/auth-state.interface'
import { CurrentUserResponseInterface } from '../domain/interfaces/current-user.interface'
import { LoginDataInterface } from '../domain/interfaces/loginData.interface'
import { RegisterDataInterface } from '../domain/interfaces/registerData.interface'
import { AuthErrorType, AuthSuccessType } from '../domain/types/auth-event.type'
import { DefaultResponseInterface } from '../domain/interfaces/default-response.interface'

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
  withState(initialState),
  withComputed((store) => {
    const user = computed(() => store.user()?.user ?? null)

    return {
      userName: computed(() => user()?.firstName ?? UserRole.GUEST),
      userRole: computed(() => user()?.role ?? UserRole.GUEST),
      isAdmin: computed(() => user()?.role === UserRole.ADMIN),
      isUser: computed(() => user()?.role === UserRole.USER),
      userId: computed(() => user()?.id ?? null),
    }
  }),

  withMethods((store) => {
    const authService = inject(AuthService)

    const setPending = () => {
      patchState(store, { isLoading: true, error: null, event: null })
    }

    const setAuthSuccess = (
      response: CurrentUserResponseInterface,
      message: string,
      type: AuthSuccessType
    ) => {
      patchState(store, {
        user: response,
        isAuthenticated: true,
        isLoading: false,
        error: null,
        event: successEvent(type, message, response.user.firstName),
      })
    }

    const setAuthFailure = (message: string, type: AuthErrorType) => {
      patchState(store, {
        error: { message },
        isLoading: false,
        isAuthenticated: false,
        user: null,
        event: errorEvent(type, message),
      })
    }

    const getErrorMessage = (error: unknown): string => {
      if (!(error instanceof HttpErrorResponse)) return `An unknown error occurred.`

      const apiMessage = (error.error as DefaultResponseInterface)?.message

      if (typeof apiMessage === 'string') return apiMessage
      if (Array.isArray(apiMessage)) return apiMessage.join(' ')

      return error.message ?? `Request failed with status ${error.status}.`
    }

    const authCommand = <InP>(
      request: (data: InP) => Observable<CurrentUserResponseInterface>,
      success: { type: AuthSuccessType; message: string },
      failure: { type: AuthErrorType }
    ) =>
      pipe(
        tap<InP>(() => setPending()),
        switchMap((data: InP) =>
          request(data).pipe(
            tap((response) => setAuthSuccess(response, success.message, success.type)),
            catchError((error) => {
              setAuthFailure(getErrorMessage(error), failure.type)
              return EMPTY
            })
          )
        )
      )

    return {
      register: rxMethod<RegisterDataInterface>(
        authCommand<RegisterDataInterface>(
          (registerData: RegisterDataInterface) => authService.register(registerData),
          {
            type: AuthEventConstantsType.REGISTER_SUCCESS,
            message: AuthEventConstantsMessages.REGISTER_SUCCESS_MESSAGE,
          },
          { type: AuthEventConstantsType.REGISTER_ERROR }
        )
      ),

      login: rxMethod<LoginDataInterface>(
        authCommand<LoginDataInterface>(
          (loginData: LoginDataInterface) => authService.login(loginData),
          {
            type: AuthEventConstantsType.LOGIN_SUCCESS,
            message: AuthEventConstantsMessages.LOGIN_SUCCESS_MESSAGE,
          },
          { type: AuthEventConstantsType.LOGIN_ERROR }
        )
      ),
      resetState: () => {
        patchState(store, initialState)
      },
      clearEvent: () => {
        patchState(store, { event: null })
      },
    }
  })
)
