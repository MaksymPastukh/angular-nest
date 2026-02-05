import { User } from './current-user.interface'

export interface LoadSessionInterface {
  accessToken: string | null
  refreshToken: string | null
  user: User
}
