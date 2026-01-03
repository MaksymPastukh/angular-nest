import {HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http'
import {inject} from '@angular/core'
import {AuthService} from './auth.service'
import {catchError, Observable, switchMap, throwError} from 'rxjs'
import {GetTokensInterface} from '../types/get-tokens.interface';
import {CurrentUserResponseInterface} from '../types/current-user.interface';
import {AuthStore} from '../store/auth.store';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const authStore = inject(AuthStore)

  const tokens: GetTokensInterface = authService.getTokens()

  const isAuthUrl: boolean =
    req.url.includes('/login') ||
    req.url.includes('/register') ||
    req.url.includes('/refresh');

  if (tokens?.accessToken && !isAuthUrl) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    })
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !req.url.includes('refresh')) {
        return handle401Error(req, next, authService, authStore);
      }

      return throwError(() => error);
    })
  );
}

function handle401Error(
  req: HttpRequest<any>,
  next: HttpHandlerFn,
  authService: AuthService,
  authStore: InstanceType<typeof AuthStore>): Observable<HttpEvent<any>> {
  return authService.refreshToken().pipe(
    switchMap((result: CurrentUserResponseInterface) => {
      authStore.updateAfterRefresh(result)

      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${result.access_token}`,
        },
      })

      return next(clonedReq);
    }),
    catchError((err) => {
      authStore.logout();
      return throwError(() => err);
    })
  )
}
