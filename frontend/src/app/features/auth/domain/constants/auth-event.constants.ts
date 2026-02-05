export const AuthEventConstantsType = {
  LOGIN_SUCCESS: 'loginSuccess',
  REGISTER_SUCCESS: 'registerSuccess',
  LOGIN_ERROR: 'loginError',
  REGISTER_ERROR: 'registerError',
  LOGOUT: 'logout',
} as const

export const AuthEventConstantsMessages = {
  LOGIN_SUCCESS_MESSAGE: 'Login Successful',
  REGISTER_SUCCESS_MESSAGE: 'Registration Successful',
} as const
