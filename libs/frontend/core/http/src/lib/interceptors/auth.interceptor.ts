import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { catchError, switchMap, throwError } from 'rxjs'
import { AuthRefreshService } from '../auth-refresh.service'
import { AuthState } from '@marketplace/frontend-core-auth'
import { AuthSessionService } from '@marketplace/frontend-core-auth'
import { CurrentUserResponseInterface } from '@marketplace/frontend-core-auth'

const AUTH_ENDPOINTS = ['/auth/login', '/auth/register', '/auth/refresh'] as const

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const session = inject(AuthSessionService)
  const authRefreshService = inject(AuthRefreshService)
  const authState = inject(AuthState)
  const router = inject(Router)

  const isAuthEndpoint = AUTH_ENDPOINTS.some((endpoint) => req.url.includes(endpoint))

  const accessToken = session.getAccessToken()

  const authReq =
    accessToken && !isAuthEndpoint
      ? req.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
      : req

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      const shouldRefresh = error.status === 401 && !isAuthEndpoint && !!session.getRefreshToken()

      if (!shouldRefresh) {
        return throwError(() => error)
      }

      return authRefreshService.refresh().pipe(
        switchMap((response: CurrentUserResponseInterface) => {
          session.saveAuthResponse(response)
          authState.applyAuthResponse(response)
          const retryReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${response.access_token}`,
            },
          })
          return next(retryReq)
        }),
        catchError((refreshError: HttpErrorResponse) => {
          session.clear()
          void router.navigate(['/auth/login'])
          return throwError(() => refreshError)
        })
      )
    })
  )
}

