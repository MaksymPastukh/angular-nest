import { ChangeDetectionStrategy, Component, signal, inject, OnDestroy } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router'
import { MessageService } from 'primeng/api'
import { email, Field, form, required, submit } from '@angular/forms/signals'
import { LoginDataInterface } from '../../types/loginData.interface'
import { AuthStore } from '../../store/auth.store'

@Component({
  selector: 'app-login',
  imports: [CommonModule, NgOptimizedImage, RouterLink, Field],
  providers: [MessageService],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private readonly authStore = inject(AuthStore)

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

      this.authStore.login(loginData)
    }).catch(console.error)
  }
}
