import { CommonModule, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { email, Field, form, required, submit } from '@angular/forms/signals'
import { RouterLink } from '@angular/router'
import { MessageService } from 'primeng/api'
import { Toast } from 'primeng/toast'
import { LoginDataInterface } from '../../domain/interfaces/loginData.interface'
import { AuthFacade } from '../../store/auth.facade'

@Component({
  selector: 'app-login',
  imports: [CommonModule, NgOptimizedImage, RouterLink, Field, Toast],
  providers: [MessageService],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  private readonly authFacade = inject(AuthFacade)

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

    submit(this.loginForm, () => {
      const formModel: LoginDataInterface = this.loginModel()
      const loginData: LoginDataInterface = {
        email: formModel.email,
        password: formModel.password,
      }

      this.authFacade.login(loginData)

      return Promise.resolve(undefined)
    }).catch(console.error)
  }
}
