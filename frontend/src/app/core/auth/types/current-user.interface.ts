import { UserRole } from './user-role.enum'

export interface CurrentUserResponseInterface {
  access_token: string
  refresh_token: string
  user: User
}

export interface User {
  id: string
  firstName: string
  email: string
  role: UserRole | string // поддерживаем как enum, так и string для совместимости
}
