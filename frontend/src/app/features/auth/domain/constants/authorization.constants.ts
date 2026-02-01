export const AUTHORIZATION_STATE = {
  authAccessTokenKey: 'accessToken',
  authRefreshTokenKey: 'refreshToken',
  currentUserKey: 'currentUser',
} as const

export type AuthorizationStateValue = (typeof AUTHORIZATION_STATE)[keyof typeof AUTHORIZATION_STATE]
