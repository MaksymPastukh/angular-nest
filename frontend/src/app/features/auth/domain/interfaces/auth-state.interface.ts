import { AuthErrorMessageInterface } from './auth-error-message.interface'
import { AuthEventInterface } from './auth-event.interface'
import { CurrentUserResponseInterface } from './current-user.interface'

export interface AuthState {
  user: CurrentUserResponseInterface | null
  isLoading: boolean
  error: AuthErrorMessageInterface | null
  isAuthenticated: boolean
  event: AuthEventInterface | null
}
