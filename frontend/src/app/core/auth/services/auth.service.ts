import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { catchError, map, Observable, throwError } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { DefaultResponseInterface } from '../../../shared/types/default-response.interface'
import { AUTHORIZATION_STATE } from '../types/authorization.constants'
import { CurrentUserResponseInterface } from '../types/current-user.interface'
import { GetTokensInterface } from '../types/get-tokens.interface'
import { LoginDataInterface } from '../types/loginData.interface'
import { RegisterDataInterface } from '../types/registerData.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly http = inject(HttpClient)

  register(registerData: RegisterDataInterface): Observable<CurrentUserResponseInterface> {
    const url = `${environment.api}auth/register`
    return this.http
      .post<CurrentUserResponseInterface | DefaultResponseInterface>(url, registerData)
      .pipe(
        map((response: CurrentUserResponseInterface | DefaultResponseInterface) => {
          if ((response as DefaultResponseInterface).message !== undefined) {
            throw new Error((response as DefaultResponseInterface).message)
          }

          const loginResponse: CurrentUserResponseInterface =
            response as CurrentUserResponseInterface
          if (!loginResponse.access_token || !loginResponse.user.id) {
            throw new Error('Error during registration. Please try again.')
          }

          return loginResponse
        }),
        catchError((error: HttpErrorResponse) => {
          const errorMessage =
            (error?.error as { message?: string })?.message ??
            'Error during registration. Please try again.'
          return throwError(() => new Error(errorMessage))
        })
      )
  }

  login(loginData: LoginDataInterface): Observable<CurrentUserResponseInterface> {
    const url = `${environment.api}auth/login`
    return this.http
      .post<CurrentUserResponseInterface | DefaultResponseInterface>(url, loginData)
      .pipe(
        map((response: CurrentUserResponseInterface | DefaultResponseInterface) => {
          if ((response as DefaultResponseInterface).message !== undefined) {
            throw new Error((response as DefaultResponseInterface).message)
          }

          const loginResponse: CurrentUserResponseInterface =
            response as CurrentUserResponseInterface
          if (!loginResponse.access_token || !loginResponse.user.id) {
            throw new Error('Error during login. Please try again.')
          }

          return loginResponse
        }),
        catchError((error: HttpErrorResponse) => {
          const errorMessage =
            (error?.error as { message?: string })?.message ??
            'Error during login. Please try again.'
          return throwError(() => new Error(errorMessage))
        })
      )
  }

  setItem(key: string, value: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error('Error saving to localStorage', e)
    }
  }

  public getTokens(): {
    accessToken: string | null
    refreshToken: string | null
  } {
    return {
      accessToken: localStorage.getItem(AUTHORIZATION_STATE.authAccessTokenKey),
      refreshToken: localStorage.getItem(AUTHORIZATION_STATE.authRefreshTokenKey),
    }
  }

  refreshToken(): Observable<CurrentUserResponseInterface> {
    const token: GetTokensInterface = this.getTokens()
    const url: string = `${environment.api}refresh`

    if (!token?.refreshToken) {
      throw new Error('No refresh token available.')
    }

    return this.http
      .post<DefaultResponseInterface | CurrentUserResponseInterface>(url, {
        refreshToken: token.refreshToken,
      })
      .pipe(
        map((response: CurrentUserResponseInterface | DefaultResponseInterface) => {
          if ((response as DefaultResponseInterface).message !== undefined) {
            throw new Error((response as DefaultResponseInterface).message)
          }

          const refreshResponse: CurrentUserResponseInterface =
            response as CurrentUserResponseInterface
          if (!refreshResponse.access_token) {
            throw new Error('Error during token refresh. Please try again.')
          }

          return refreshResponse
        })
      )
  }
}
