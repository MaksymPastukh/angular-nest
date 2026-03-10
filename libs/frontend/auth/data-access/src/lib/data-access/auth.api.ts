import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config'
import { finalize, map, Observable, shareReplay } from 'rxjs'
import { AuthSessionService } from '@marketplace/frontend-core-auth'
import { CurrentUserResponseInterface } from '../domain/interfaces/current-user.interface'
import { LoginDataInterface } from '../domain/interfaces/loginData.interface'
import { RegisterDataInterface } from '../domain/interfaces/registerData.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient)
  private readonly session = inject(AuthSessionService)
  private inFlightRequest$: Observable<CurrentUserResponseInterface> | null = null
  private readonly baseUrl: string = FRONTEND_CONFIG.api

  register(registerData: RegisterDataInterface): Observable<CurrentUserResponseInterface> {
    const registerPayload = {
      firstName: registerData.firstName,
      email: registerData.email,
      password: registerData.password,
      agreeToTerms: registerData.agreeToTerms,
      subscribeToNewsletter: registerData.subscribeToNewsletter,
    }

    return this.http
      .post<CurrentUserResponseInterface>(`${this.baseUrl}auth/register`, registerPayload)
      .pipe(map(this.validateAuthResponse('registration')))
  }

  login(loginData: LoginDataInterface): Observable<CurrentUserResponseInterface> {
    return this.http
      .post<CurrentUserResponseInterface>(`${this.baseUrl}auth/login`, loginData)
      .pipe(map(this.validateAuthResponse('login')))
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
}

