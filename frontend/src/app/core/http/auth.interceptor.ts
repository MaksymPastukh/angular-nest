import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { catchError, switchMap, throwError } from 'rxjs'
import { CurrentUserResponseInterface } from '../../features/auth/domain/interfaces/current-user.interface'
import { AuthSessionService } from './auth.session.service'
import { AuthService } from '../../features/auth/data-access/auth.api'

const AUTH_ENDPOINTS = ['/auth/login', '/auth/register', '/auth/refresh'] as const

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const session = inject(AuthSessionService)
  const authService = inject(AuthService)
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

      return authService.refresh().pipe(
        switchMap((response: CurrentUserResponseInterface) => {
          session.saveAuthResponse(response)
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
