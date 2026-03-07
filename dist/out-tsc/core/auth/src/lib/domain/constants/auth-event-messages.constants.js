export const AUTH_MESSAGES = {
    loginSuccess: {
        summary: 'Login Successful',
        detail: (userName) => `Welcome, ${userName}!`,
    },
    registerSuccess: {
        summary: 'Registration Successful',
        detail: (userName) => `Welcome, ${userName}!`,
    },
    loginError: {
        summary: 'Login Failed',
        detail: (message) => message,
    },
    registerError: {
        summary: 'Registration Failed',
        detail: (message) => message,
    },
    logout: {
        summary: 'Logged Out',
        detail: 'You have been logged out successfully.',
    },
};
