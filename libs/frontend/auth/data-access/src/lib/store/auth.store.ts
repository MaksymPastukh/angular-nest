import { computed, inject } from '@angular/core'
import { tapResponse } from '@ngrx/operators'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { RxMethod, rxMethod } from '@ngrx/signals/rxjs-interop'
import { firstValueFrom, pipe, switchMap, tap } from 'rxjs'
import { AuthService } from '../data-access/auth.api'
import {
  AuthEventConstantsMessages,
  AuthEventConstantsType,
} from '../domain/constants/auth-event.constants'
import { UserRole } from '../domain/enums/user-role.enum'
import { AuthEventInterface } from '../domain/interfaces/auth-event.interface'
import { AuthState } from '../domain/interfaces/auth-state.interface'
import { CurrentUserResponseInterface } from '../domain/interfaces/current-user.interface'
import { LoadSessionInterface } from '../domain/interfaces/get-tokens.interface'
import { LoginDataInterface } from '../domain/interfaces/loginData.interface'
import { RegisterDataInterface } from '../domain/interfaces/registerData.interface'
import { AuthErrorType, AuthSuccessType } from '../domain/types/auth-event.type'
import { LoginSubmitResult } from '../domain/types/login-submit-result.type'
import { RegisterSubmitResult } from '../domain/types/register-submit-result.type'
import {
  mapLoginHttpErrorToSubmitResult,
  mapRegisterHttpErrorToSubmitResult,
} from '../utils/auth-submit-error.mapper'

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

    const setFailure = (message: string, type: AuthErrorType, emitEvent = true): void => {
      patchState(store, {
        error: { message },
        isAuthenticated: false,
        user: null,
        event: emitEvent ? errorEvent(type, message) : null,
      })
    }

    const setSuccess = (
      response: CurrentUserResponseInterface,
      success: { type: AuthSuccessType; message: string },
      emitEvent = true
    ): void => {
      patchState(store, {
        user: response,
        isAuthenticated: true,
        error: null,
        event: emitEvent ? successEvent(success.type, success.message, response.user.firstName) : null,
      })
    }

    const getRegisterErrorMessage = (error: unknown): string =>
      mapRegisterHttpErrorToSubmitResult(error).message

    const getLoginErrorMessage = (error: unknown): string =>
      mapLoginHttpErrorToSubmitResult(error).message

    const registerForSubmit = async (
      data: RegisterDataInterface
    ): Promise<RegisterSubmitResult> => {
      setPending()

      try {
        const response = await firstValueFrom(authService.register(data))

        setSuccess(
          response,
          {
            type: AuthEventConstantsType.REGISTER_SUCCESS,
            message: AuthEventConstantsMessages.REGISTER_SUCCESS_MESSAGE,
          },
          false
        )

        return { ok: true }
      } catch (error) {
        const submitResult = mapRegisterHttpErrorToSubmitResult(error)
        setFailure(submitResult.message, AuthEventConstantsType.REGISTER_ERROR, false)

        return submitResult
      } finally {
        stop()
      }
    }

    const loginForSubmit = async (data: LoginDataInterface): Promise<LoginSubmitResult> => {
      setPending()

      try {
        const response = await firstValueFrom(authService.login(data))

        setSuccess(
          response,
          {
            type: AuthEventConstantsType.LOGIN_SUCCESS,
            message: AuthEventConstantsMessages.LOGIN_SUCCESS_MESSAGE,
          },
          false
        )

        return { ok: true }
      } catch (error) {
        const submitResult = mapLoginHttpErrorToSubmitResult(error)
        setFailure(submitResult.message, AuthEventConstantsType.LOGIN_ERROR, false)

        return submitResult
      } finally {
        stop()
      }
    }

    // Legacy flow: keep rxMethod submit handlers until all auth pages are migrated.
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
              error: (e) =>
                setFailure(getRegisterErrorMessage(e), AuthEventConstantsType.REGISTER_ERROR),
              finalize: () => stop(),
            })
          )
        )
      )
    )

    // Legacy flow: keep rxMethod submit handlers until all auth pages are migrated.
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
              error: (e) => setFailure(getLoginErrorMessage(e), AuthEventConstantsType.LOGIN_ERROR),
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
      registerForSubmit,
      loginForSubmit,
      register,
      login,
      hydrateSession,
      resetState,
      clearEvent,
    }
  })
)
