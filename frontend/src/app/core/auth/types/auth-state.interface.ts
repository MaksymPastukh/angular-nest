import { CurrentUserResponseInterface } from './current-user.interface'

export interface AuthState {
  user: CurrentUserResponseInterface | null
  isLoading: boolean
  error: string | null
  isAuthenticated: boolean
}
