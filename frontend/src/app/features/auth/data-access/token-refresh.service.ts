import { Injectable, signal } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, finalize, shareReplay, tap } from 'rxjs/operators'
import { CurrentUserResponseInterface } from '../domain/interfaces/current-user.interface'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root',
})
export class TokenRefreshService {
  // Signal для отслеживания процесса обновления токена
  private readonly isRefreshing = signal<boolean>(false)

  // Текущий refresh observable (если идет процесс обновления)
  private refreshInProgress$: Observable<CurrentUserResponseInterface> | null = null

  /**
   * Получить статус обновления токена
   */
  get isTokenRefreshing(): boolean {
    return this.isRefreshing()
  }

  /**
   * Обновить токен или вернуть существующий observable, если обновление уже идет
   */
  refreshToken(authService: AuthService): Observable<CurrentUserResponseInterface> {
    // Если уже идет обновление, возвращаем существующий observable
    if (this.isRefreshing() && this.refreshInProgress$) {
      return this.refreshInProgress$
    }

    // Устанавливаем флаг обновления
    this.isRefreshing.set(true)

    // Создаем новый refresh observable
    this.refreshInProgress$ = authService.refreshToken().pipe(
      tap(() => {
        console.info('✅ Token refreshed successfully')
      }),
      catchError((error: Error) => {
        console.error('❌ Token refresh failed:', error)
        this.reset()
        return throwError(() => error)
      }),
      finalize(() => {
        // Сбрасываем флаг после завершения (успешного или нет)
        this.isRefreshing.set(false)
      }),
      // shareReplay гарантирует, что все подписчики получат один и тот же результат
      shareReplay(1)
    )

    return this.refreshInProgress$
  }

  /**
   * Сбросить состояние
   */
  reset(): void {
    this.isRefreshing.set(false)
    this.refreshInProgress$ = null
  }
}
