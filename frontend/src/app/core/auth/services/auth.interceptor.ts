import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http'
import { inject } from '@angular/core'
import { catchError, Observable, switchMap, throwError } from 'rxjs'
import { AuthStore } from '../store/auth.store'
import { CurrentUserResponseInterface } from '../types/current-user.interface'
import { GetTokensInterface } from '../types/get-tokens.interface'
import { AuthService } from './auth.service'

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const authStore = inject(AuthStore)

  const tokens: GetTokensInterface = authService.getTokens()

  const isAuthUrl: boolean =
    req.url.includes('/login') || req.url.includes('/register') || req.url.includes('/refresh')

  let modifiedReq = req

  if (tokens?.accessToken && !isAuthUrl) {
    modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    })
  }

  return next(modifiedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // Обрабатываем 401 ошибку только для защищенных маршрутов
      // НЕ обрабатываем для login/register/refresh
      const shouldRefreshToken =
        error.status === 401 &&
        !req.url.includes('/login') &&
        !req.url.includes('/register') &&
        !req.url.includes('/refresh')

      if (shouldRefreshToken) {
        return handle401Error(req, next, authService, authStore)
      }

      // Для всех остальных ошибок (включая 401 при login/register) просто пробрасываем дальше
      return throwError(() => error)
    })
  )
}

function handle401Error(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  authService: AuthService,
  authStore: InstanceType<typeof AuthStore>
): Observable<HttpEvent<unknown>> {
  return authService.refreshToken().pipe(
    switchMap((result: CurrentUserResponseInterface) => {
      authStore.updateAfterRefresh(result)

      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${result.access_token}`,
        },
      })

      return next(clonedReq)
    }),
    catchError((err: HttpErrorResponse) => {
      authStore.logout()
      return throwError(() => err)
    })
  )
}
