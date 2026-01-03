import { ChangeDetectionStrategy, Component, signal, inject, OnDestroy } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Router, RouterLink } from '@angular/router'
import { Toast } from 'primeng/toast'
import { MessageService } from 'primeng/api'
import { email, Field, form, required, submit } from '@angular/forms/signals'
import { AuthService } from '../../services/auth.service'
import { LoginDataInterface } from '../../types/loginData.interface'
import { firstValueFrom, Subject, takeUntil } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-login',
  imports: [CommonModule, NgOptimizedImage, RouterLink, Field],
  providers: [MessageService],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login implements OnDestroy {
  private authService = inject(AuthService)
  private router = inject(Router)
  private messageService = inject(MessageService)
  private destroy$ = new Subject<void>()

  loginModel = signal<LoginDataInterface>({
    email: '',
    password: '',
  })

  loginForm = form(this.loginModel, (controlSchema) => {
    email(controlSchema.email, { message: 'Please enter a valid email address.' })
    required(controlSchema.email, { message: 'Email is required.' })
    required(controlSchema.password, { message: 'Password is required.' })
  })

  isPasswordVisible = signal(false)

  login(event: Event): void {
    event.preventDefault()

    submit(this.loginForm, async () => {
      const formModel: LoginDataInterface = this.loginModel()
      const loginData: LoginDataInterface = {
        email: formModel.email,
        password: formModel.password,
      }

      try {
        await firstValueFrom(this.authService.login(loginData).pipe(takeUntil(this.destroy$)))

        this.messageService.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: 'You have login successfully.',
        })
        await this.router.navigate(['/'])
        return undefined
      } catch (error: unknown) {
        let errorMessage = 'An unknown error occurred. Please try again later.'
        if (error instanceof HttpErrorResponse && error.error && error.error.message) {
          errorMessage = error.error.message
        } else if (error instanceof Error) {
          errorMessage = error.message
        }

        this.messageService.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: errorMessage,
        })
        return undefined
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
