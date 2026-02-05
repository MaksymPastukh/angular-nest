export interface AuthEventInterface {
  type: 'loginSuccess' | 'registerSuccess' | 'loginError' | 'registerError' | 'logout'
  userName?: string
  message?: string
}
