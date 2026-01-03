export interface CurrentUserResponseInterface {
  access_token: string
  user: User
}

export interface User {
  id: number
  firstName: string
  email: string
  roles: string[]
}
