export type AuthEvent =
  | { type: 'loginSuccess'; userName: string }
  | { type: 'registerSuccess'; userName: string }
  | { type: 'loginError'; message: string }
  | { type: 'registerError'; message: string }
  | { type: 'logout' }

export type AuthSuccessType = 'loginSuccess' | 'registerSuccess'
export type AuthErrorType = 'loginError' | 'registerError'
