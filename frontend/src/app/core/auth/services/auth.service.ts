import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map, Observable, Subject, tap, throwError } from 'rxjs'
import { DefaultResponseInterface } from '../../../shared/types/default-response.interface'
import { environment } from '../../../../environments/environment'
import { CurrentUserResponseInterface } from '../types/current-user.interface'
import { LoginInterface } from '../types/login.interface'
import { ProfileInterface } from '../types/profile.interface'
import { RegisterDataInterface } from '../types/registerData.interface'
import { LoginDataInterface } from '../types/loginData.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static accessTokenKey = 'accessToken'
  static refreshTokenKey = 'refreshToken'

  public isLogged$: Subject<boolean> = new Subject<boolean>()
  public isLogged = false

  constructor(private http: HttpClient) {
    this.isLogged = !!localStorage.getItem(AuthService.accessTokenKey)
  }

  public getLoggedIn(): boolean {
    return this.isLogged
  }

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
        .post<LoginInterface>(`${environment.api}auth/refresh`, {
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

  setToken(accessToken: string, refreshToken: string): void {
    try {
      localStorage.setItem(AuthService.accessTokenKey, accessToken)
      localStorage.setItem(AuthService.refreshTokenKey, refreshToken)
      this.isLogged = true
      this.isLogged$.next(true)
    } catch (e) {
      console.error('Error saving to localStorage', e)
    }
  }

  public getTokens(): {
    accessToken: string | null
    refreshToken: string | null
  } {
    return {
      accessToken: localStorage.getItem(AuthService.accessTokenKey),
      refreshToken: localStorage.getItem(AuthService.refreshTokenKey),
    }
  }

  removeToken(): void {
    localStorage.removeItem(AuthService.accessTokenKey)
    this.isLogged = false
    this.isLogged$.next(false)
  }

  getUser(): Observable<ProfileInterface> {
    return this.http.get<ProfileInterface>(`${environment.api}auth/profile`).pipe(
      catchError((error) => {
        return throwError(() => new Error(error))
      })
    )
  }
}
