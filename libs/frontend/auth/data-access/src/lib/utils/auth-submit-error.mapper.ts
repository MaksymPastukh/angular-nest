import { HttpErrorResponse } from '@angular/common/http'
import { DefaultResponseInterface } from '../domain/interfaces/default-response.interface'
import { LoginSubmitResult } from '../domain/types/login-submit-result.type'
import { RegisterSubmitResult } from '../domain/types/register-submit-result.type'

interface ApiErrorResponse extends DefaultResponseInterface {
  code?: string
  statusCode?: number
}

const AUTH_ERROR_CODES = {
  EMAIL_TAKEN: 'EMAIL_TAKEN',
  WEAK_PASSWORD: 'WEAK_PASSWORD',
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
} as const

const DEFAULT_REGISTER_ERROR_MESSAGE = 'Unable to complete registration. Please try again.'
const DEFAULT_LOGIN_ERROR_MESSAGE = 'Unable to sign in. Please try again.'

const normalizeMessage = (message: string | string[] | undefined): string | null => {
  if (typeof message === 'string') {
    const normalized = message.trim()
    return normalized.length > 0 ? normalized : null
  }

  if (Array.isArray(message)) {
    const normalized = message.join(' ').trim()
    return normalized.length > 0 ? normalized : null
  }

  return null
}

const getHttpErrorBody = (error: unknown): ApiErrorResponse | null => {
  if (!(error instanceof HttpErrorResponse)) return null
  if (!error.error || typeof error.error !== 'object') return null

  return error.error as ApiErrorResponse
}

const getApiErrorMessage = (error: unknown, fallbackMessage: string): string => {
  const httpBody = getHttpErrorBody(error)
  const fromBody = normalizeMessage(httpBody?.message)
  if (fromBody) return fromBody

  if (error instanceof HttpErrorResponse) {
    const fromHttp = normalizeMessage(error.message)
    if (fromHttp) return fromHttp
  }

  if (error instanceof Error) {
    const fromError = normalizeMessage(error.message)
    if (fromError) return fromError
  }

  return fallbackMessage
}

export const extractApiErrorCode = (error: unknown): string | null => {
  const code = getHttpErrorBody(error)?.code
  return typeof code === 'string' ? code : null
}

const messageContainsAny = (message: string, fragments: readonly string[]): boolean => {
  const normalized = message.toLowerCase()
  return fragments.some((fragment) => normalized.includes(fragment))
}

const registerFieldFromMessage = (message: string): 'email' | 'password' | null => {
  if (
    messageContainsAny(message, [
      'email already',
      'email exists',
      'email taken',
      'user with this email already exists',
    ])
  ) {
    return 'email'
  }

  if (
    messageContainsAny(message, [
      'weak password',
      'password must',
      'password is too weak',
      'password should',
    ])
  ) {
    return 'password'
  }

  return null
}

const loginFieldFromMessage = (message: string): 'email' | 'password' | null => {
  if (messageContainsAny(message, ['invalid credentials', 'invalid password', 'wrong password'])) {
    return 'password'
  }

  if (messageContainsAny(message, ['invalid email', 'email not found'])) {
    return 'email'
  }

  return null
}

export const mapRegisterHttpErrorToSubmitResult  = (error: unknown): RegisterSubmitResult => {
  const message = getApiErrorMessage(error, DEFAULT_REGISTER_ERROR_MESSAGE)
  const code = extractApiErrorCode(error)

  if (code === AUTH_ERROR_CODES.EMAIL_TAKEN) {
    return { ok: false, kind: 'field', field: 'email', message }
  }

  if (code === AUTH_ERROR_CODES.WEAK_PASSWORD) {
    return { ok: false, kind: 'field', field: 'password', message }
  }

  if (code === AUTH_ERROR_CODES.VALIDATION_ERROR) {
    const field = registerFieldFromMessage(message)
    if (field) {
      return { ok: false, kind: 'field', field, message }
    }
  }

  // TODO: remove message-based fallback once backend always returns stable error codes.
  const inferredField = registerFieldFromMessage(message)
  if (inferredField) {
    return { ok: false, kind: 'field', field: inferredField, message }
  }

  return { ok: false, kind: 'form', message }
}

export const mapLoginHttpErrorToSubmitResult = (error: unknown): LoginSubmitResult => {
  const message = getApiErrorMessage(error, DEFAULT_LOGIN_ERROR_MESSAGE)
  const code = extractApiErrorCode(error)

  if (code === AUTH_ERROR_CODES.INVALID_CREDENTIALS) {
    return { ok: false, kind: 'field', field: 'password', message }
  }

  if (code === AUTH_ERROR_CODES.VALIDATION_ERROR) {
    const field = loginFieldFromMessage(message)
    if (field) {
      return { ok: false, kind: 'field', field, message }
    }
  }

  // TODO: remove message-based fallback once backend always returns stable error codes.
  const inferredField = loginFieldFromMessage(message)
  if (inferredField) {
    return { ok: false, kind: 'field', field: inferredField, message }
  }

  return { ok: false, kind: 'form', message }
}
