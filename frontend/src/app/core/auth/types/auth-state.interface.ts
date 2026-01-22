import { CurrentUserResponseInterface } from './current-user.interface'
import { AuthErrorMessage } from './auth-error-message'
import { AuthEventInterface } from './auth-event.interface'

export interface AuthState {
  user: CurrentUserResponseInterface | null
  isLoading: boolean
  error: AuthErrorMessage | null
  isAuthenticated: boolean
  event: AuthEventInterface | null
}
