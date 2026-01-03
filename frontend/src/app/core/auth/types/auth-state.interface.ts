import { CurrentUserResponseInterface } from './current-user.interface'
import {AuthErrorMessage} from './auth-error-message';
import {AuthEvent} from './auth-event.type';

export interface AuthState {
  user: CurrentUserResponseInterface | null
  isLoading: boolean
  error: AuthErrorMessage | null
  isAuthenticated: boolean
  event: AuthEvent | null
}
