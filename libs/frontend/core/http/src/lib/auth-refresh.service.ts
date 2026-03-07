import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { CurrentUserResponseInterface } from '@marketplace/frontend-core-auth'
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config'
import { AuthSessionService } from '@marketplace/frontend-core-auth'
import { finalize, Observable, shareReplay } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthRefreshService {
  private readonly http = inject(HttpClient)
  private readonly session = inject(AuthSessionService)
  private inFlightRequest$: Observable<CurrentUserResponseInterface> | null = null
  private readonly baseUrl: string = FRONTEND_CONFIG.api

  refresh(): Observable<CurrentUserResponseInterface> {
    if (this.inFlightRequest$) {
      return this.inFlightRequest$
    }

    const refreshToken = this.session.getRefreshToken()
    if (!refreshToken) {
      throw new Error('No refresh token available')
    }

    this.inFlightRequest$ = this.http
      .post<CurrentUserResponseInterface>(`${this.baseUrl}auth/refresh`, {
        refresh_token: refreshToken,
      })
      .pipe(
        shareReplay(1),
        finalize(() => {
          this.inFlightRequest$ = null
        })
      )

    return this.inFlightRequest$
  }
}
