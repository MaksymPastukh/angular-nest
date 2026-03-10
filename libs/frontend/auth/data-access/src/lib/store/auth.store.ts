import { computed, inject } from '@angular/core'
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { firstValueFrom } from 'rxjs'
import { AuthService } from '../data-access/auth.api'
import { UserRole } from '../domain/enums/user-role.enum'
import { AuthState } from '../domain/interfaces/auth-state.interface'
import { CurrentUserResponseInterface } from '../domain/interfaces/current-user.interface'
import { LoadSessionInterface } from '../domain/interfaces/get-tokens.interface'
import { LoginDataInterface } from '../domain/interfaces/loginData.interface'
import { RegisterDataInterface } from '../domain/interfaces/registerData.interface'
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
}

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
      patchState(store, { isLoading: true, error: null })
    }

    const stop = (): void => {
      patchState(store, { isLoading: false })
    }

    const setFailure = (message: string): void => {
      patchState(store, {
        error: { message },
        isAuthenticated: false,
        user: null,
      })
    }

    const setSuccess = (response: CurrentUserResponseInterface): void => {
      patchState(store, {
        user: response,
        isAuthenticated: true,
        error: null,
      })
    }

    const registerForSubmit = async (
      data: RegisterDataInterface
    ): Promise<RegisterSubmitResult> => {
      setPending()

      try {
        const response = await firstValueFrom(authService.register(data))
        setSuccess(response)
        return { ok: true }
      } catch (error) {
        const submitResult: RegisterSubmitResult = mapRegisterHttpErrorToSubmitResult(error)
        if (!submitResult.ok) {
          setFailure(submitResult.message)
        }
        return submitResult
      } finally {
        stop()
      }
    }

    const loginForSubmit = async (data: LoginDataInterface): Promise<LoginSubmitResult> => {
      setPending()

      try {
        const response = await firstValueFrom(authService.login(data))
        setSuccess(response)
        return { ok: true }
      } catch (error) {
        const submitResult = mapLoginHttpErrorToSubmitResult(error)
        if (!submitResult.ok) {
          setFailure(submitResult.message)
        }
        return submitResult
      } finally {
        stop()
      }
    }

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
      })
    }

    const resetState = (): void => {
      patchState(store, initialState)
    }

    return {
      registerForSubmit,
      loginForSubmit,
      hydrateSession,
      resetState,
    }
  })
)
