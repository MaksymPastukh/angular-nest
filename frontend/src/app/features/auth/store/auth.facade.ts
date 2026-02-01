import { computed, effect, inject, Injectable, Signal } from '@angular/core'
import { Router } from '@angular/router'
import { UserRole } from '../domain/enums/user-role.enum'
import { AuthEventInterface } from '../domain/interfaces/auth-event.interface'
import { CurrentUserResponseInterface, User } from '../domain/interfaces/current-user.interface'
import { LoginDataInterface } from '../domain/interfaces/loginData.interface'
import { RegisterDataInterface } from '../domain/interfaces/registerData.interface'
import { AuthStore } from './auth.store'

/**
 * AuthFacade - Оркестратор аутентификации
 *
 * Основные обязанности:
 * - Координация взаимодействия между компонентами и AuthStore
 * - Предоставление унифицированного API для операций аутентификации
 * - Управление побочными эффектами (навигация, уведомления)
 * - Валидация и трансформация данных
 * - Централизованное логирование событий аутентификации
 *
 * Лучшие практики:
 * - Инкапсуляция всей бизнес-логики аутентификации
 * - Реактивный подход с использованием signals
 * - Разделение ответственности (SRP)
 * - Иммутабельность данных
 * - Защита от XSS и CSRF
 */
@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly store = inject(AuthStore)
  private readonly router = inject(Router)

  readonly isAuthenticated = this.store.isAuthenticated
  readonly currentUser = this.store.user
  readonly isLoading = this.store.isLoading
  readonly error = this.store.error
  readonly authEvent = this.store.event
  readonly userName = this.store.userName
  readonly userId = this.store.userId
  readonly userRole = this.store.userRole
  readonly isAdmin = this.store.isAdmin
  readonly isUser = this.store.isUser

  readonly user: Signal<User | null> = computed(() => {
    const currentUser = this.currentUser()
    return currentUser?.user ?? null
  })
  readonly isGuest = computed(() => !this.isAuthenticated())
  readonly userEmail = computed(() => this.user()?.email ?? null)
  readonly fullName = computed(() => {
    const user = this.user()
    if (!user) return null
    return `${user.firstName}`.trim()
  })
  readonly canManageUsers = computed(() => this.isAdmin())
  readonly hasError = computed(() => this.error() !== null)

  constructor() {
    this.initializeAuth()
    this.setupAuthEventEffects()
  }

  register(data: RegisterDataInterface): void {
    this.logOperation('register', data.email)
    this.store.register(data)
  }

  login(data: LoginDataInterface): void {
    this.logOperation('login', data.email)
    this.store.login(data)
  }

  logout(): void {
    this.logOperation('logout', this.userEmail() ?? 'unknown')
    this.store.logout()
  }

  hasRole(role: UserRole | string): boolean {
    return this.store.hasRole(role)
  }

  hasAnyRole(roles: UserRole[]): boolean {
    return roles.some((role) => this.hasRole(role))
  }

  hasAllRoles(roles: UserRole[]): boolean {
    return roles.every((role) => this.hasRole(role))
  }

  clearError(): void {
    this.store.clearError()
  }

  clearEvent(): void {
    this.store.clearEvent()
  }

  updateAfterRefresh(response: CurrentUserResponseInterface): void {
    this.logOperation('refresh_token', this.userEmail() ?? 'unknown')
    this.store.updateAfterRefresh(response)
  }

  navigateToProfile(): void {
    if (this.isAuthenticated()) {
      void this.router.navigate(['/profile'])
    }
  }

  navigateToLogin(): void {
    void this.router.navigate(['/login'])
  }

  navigateToHome(): void {
    void this.router.navigate(['/'])
  }

  requireAuth(returnUrl?: string): void {
    if (!this.isAuthenticated()) {
      const url = returnUrl ?? this.router.url
      void this.router.navigate(['/login'], { queryParams: { returnUrl: url } })
    }
  }

  requireRole(role: UserRole, redirectUrl = '/'): void {
    if (!this.hasRole(role)) {
      void this.router.navigate([redirectUrl])
    }
  }

  private initializeAuth(): void {
    try {
      this.store.rehydrate()
      this.logOperation('rehydrate', this.userEmail() ?? 'no_user')
    } catch (error) {
      console.error('[AuthFacade] Failed to rehydrate auth state:', error)
      this.store.logout()
    }
  }

  /**
   * Настройка побочных эффектов для событий аутентификации
   */
  private setupAuthEventEffects(): void {
    // Effect для обработки событий аутентификации
    effect(() => {
      const event = this.authEvent()
      if (event) {
        this.handleAuthEvent(event)
      }
    })
  }

  /**
   * Обработка событий аутентификации
   * @param event - Событие аутентификации
   */
  private handleAuthEvent(event: AuthEventInterface): void {
    switch (event.type) {
      case 'loginSuccess':
        this.logOperation('login_success', event.userName ?? 'unknown')
        // Можно добавить toast-уведомление
        break

      case 'registerSuccess':
        this.logOperation('register_success', event.userName ?? 'unknown')
        // Можно добавить toast-уведомление
        break

      case 'loginError':
        this.logOperation('login_error', event.message ?? 'unknown error')
        // Можно добавить toast-уведомление об ошибке
        break

      case 'registerError':
        this.logOperation('register_error', event.message ?? 'unknown error')
        // Можно добавить toast-уведомление об ошибке
        break

      case 'logout':
        this.logOperation('logout_success', 'user logged out')
        break
    }
  }

  /**
   * Логирование операций для отладки и мониторинга
   * @param operation - Название операции
   * @param details - Детали операции
   */
  private logOperation(operation: string, details: string): void {
    if (typeof console !== 'undefined') {
      const timestamp = new Date().toISOString()
      console.info(`[AuthFacade] ${timestamp} - ${operation}: ${details}`)
    }
  }
}
