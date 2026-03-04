import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { catchError, finalize, map, Observable, shareReplay, throwError } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { AuthSessionService } from '../../../core/auth/http/auth.session.service'
import { CurrentUserResponseInterface } from '../domain/interfaces/current-user.interface'
import { DefaultResponseInterface } from '../domain/interfaces/default-response.interface'
import { LoginDataInterface } from '../domain/interfaces/loginData.interface'
import { RegisterDataInterface } from '../domain/interfaces/registerData.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient)
  private readonly session = inject(AuthSessionService)
  private inFlightRequest$: Observable<CurrentUserResponseInterface> | null = null
  private readonly baseUrl: string = environment.api

  register(registerData: RegisterDataInterface): Observable<CurrentUserResponseInterface> {
    return this.http
      .post<CurrentUserResponseInterface>(`${this.baseUrl}auth/register`, registerData)
      .pipe(
        map(this.validateAuthResponse('registration')),
        catchError((err) => throwError(() => new Error(this.getErrorMessage(err, 'registration'))))
      )
  }

  login(loginData: LoginDataInterface): Observable<CurrentUserResponseInterface> {
    return this.http
      .post<CurrentUserResponseInterface>(`${this.baseUrl}auth/login`, loginData)
      .pipe(
        map(this.validateAuthResponse('login')),
        catchError((err) => throwError(() => new Error(this.getErrorMessage(err, 'login'))))
      )
  }

  refresh(): Observable<CurrentUserResponseInterface> {
    if (this.inFlightRequest$) return this.inFlightRequest$

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

  private readonly validateAuthResponse =
    (context: 'login' | 'registration') =>
    (response: CurrentUserResponseInterface): CurrentUserResponseInterface => {
      if (!response?.access_token || !response?.user?.id) {
        throw new Error(`Error during ${context}. Please try again.`)
      }
      return response
    }

  private getErrorMessage(error: unknown, context: 'login' | 'registration'): string {
    if (!(error instanceof HttpErrorResponse)) {
      return `Error during ${context}. Please try again.`
    }

    const message = (error.error as DefaultResponseInterface)?.message

    if (typeof message === 'string') return message
    if (Array.isArray(message)) return message.join(', ')

    return error.message || `Error during ${context}. Please try again.`
  }
}
