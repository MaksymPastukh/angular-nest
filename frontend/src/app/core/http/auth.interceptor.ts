import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http'
import { inject } from '@angular/core'
import { catchError, Observable, switchMap, throwError } from 'rxjs'
import { AuthService } from '../../features/auth/data-access/auth.api'
import { TokenRefreshService } from '../../features/auth/data-access/token-refresh.api'
import { CurrentUserResponseInterface } from '../../features/auth/domain/interfaces/current-user.interface'
import { GetTokensInterface } from '../../features/auth/domain/interfaces/get-tokens.interface'
import { AuthStore } from '../../features/auth/store/auth.store'

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const authStore = inject(AuthStore)
  const tokenRefreshService = inject(TokenRefreshService)

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
      const shouldRefreshToken =
        error.status === 401 &&
        !req.url.includes('/login') &&
        !req.url.includes('/register') &&
        !req.url.includes('/refresh')

      if (shouldRefreshToken) {
        return handle401Error(req, next, authService, authStore, tokenRefreshService)
      }

      return throwError(() => error)
    })
  )
}

function handle401Error(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  authService: AuthService,
  authStore: InstanceType<typeof AuthStore>,
  tokenRefreshService: TokenRefreshService
): Observable<HttpEvent<unknown>> {
  return tokenRefreshService.refreshToken(authService).pipe(
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
      tokenRefreshService.reset()
      authStore.logout()
      return throwError(() => err)
    })
  )
}
