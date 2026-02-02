export const AUTH_MESSAGES = {
  loginSuccess: {
    summary: 'Login Successful',
    detail: (userName: string) => `Welcome, ${userName}!`,
  },
  registerSuccess: {
    summary: 'Registration Successful',
    detail: (userName: string) => `Welcome, ${userName}!`,
  },
  loginError: {
    summary: 'Login Failed',
    detail: (message: string) => message,
  },
  registerError: {
    summary: 'Registration Failed',
    detail: (message: string) => message,
  },
  logout: {
    summary: 'Logged Out',
    detail: 'You have been logged out successfully.',
  },
} as const
