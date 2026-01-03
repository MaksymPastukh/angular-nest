import {inject, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {catchError, map, Observable, throwError} from 'rxjs'
import {DefaultResponseInterface} from '../../../shared/types/default-response.interface'
import {environment} from '../../../../environments/environment'
import {CurrentUserResponseInterface} from '../types/current-user.interface'
import {LoginInterface} from '../types/login.interface'
import {RegisterDataInterface} from '../types/registerData.interface'
import {LoginDataInterface} from '../types/loginData.interface'
import {AUTHORIZATION_STATE} from '../types/authorization.constants';
import {GetTokensInterface} from '../types/get-tokens.interface';

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
        })
      )
  }

  refresh(): Observable<LoginInterface | DefaultResponseInterface> {
    const token = this.getTokens()
    if (token && token.refreshToken) {
      return this.http
        .post<LoginInterface>(`${environment.api}/auth/refresh`, {
          refreshToken: token.refreshToken,
        })
        .pipe(
          catchError((error) => {
            return throwError(() => new Error(error))
          })
        )
    }

    throw throwError(() => 'Can not use token')
  }

  setItem(key: string, value: any): void {
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
    const url: string = `${environment.api}refresh`;

    if (!token?.refreshToken) {
      throw new Error('No refresh token available.')
    }

    return this.http.post<DefaultResponseInterface | CurrentUserResponseInterface>(url, {
      refreshToken: token.refreshToken
    }).pipe(
      map((response: CurrentUserResponseInterface | DefaultResponseInterface) => {
          if ((response as DefaultResponseInterface).message !== undefined) {
            throw new Error((response as DefaultResponseInterface).message)
          }

          const refreshResponse: CurrentUserResponseInterface = response as CurrentUserResponseInterface
          if (!refreshResponse.access_token) {
            throw new Error('Error during token refresh. Please try again.')
          }

          return refreshResponse
        }
      ))
  }
}
