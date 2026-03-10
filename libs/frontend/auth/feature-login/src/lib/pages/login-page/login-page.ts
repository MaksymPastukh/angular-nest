import { CommonModule, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { email, form, FormField, FormRoot, required } from '@angular/forms/signals'
import { RouterLink } from '@angular/router'
import { Toast } from 'primeng/toast'
import { AuthFacade, LoginDataInterface } from '@marketplace/frontend-auth-data-access'

const LOGIN_INITIAL_MODEL: LoginDataInterface = {
  email: '',
  password: '',
} as const

@Component({
  selector: 'app-login',
  imports: [CommonModule, NgOptimizedImage, RouterLink, FormRoot, FormField, Toast],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  readonly authFacade = inject(AuthFacade)

  readonly loginModel = signal<LoginDataInterface>({ ...LOGIN_INITIAL_MODEL })

  readonly loginForm = form(
    this.loginModel,
    (controlSchema) => {
      email(controlSchema.email, { message: 'Please enter a valid email address.' })
      required(controlSchema.email, { message: 'Email is required.' })
      required(controlSchema.password, { message: 'Password is required.' })
    },
    {
      submission: {
        ignoreValidators: 'none',
        action: async (field) => {
          const result = await this.authFacade.loginWithResult({ ...this.loginModel() })

          if (result.ok) {
            field().reset({ ...LOGIN_INITIAL_MODEL })
            return null
          }

          if (result.kind === 'field') {
            return {
              kind: 'server',
              message: result.message,
              fieldTree: result.field === 'email' ? field.email : field.password,
            }
          }

          return null
        },
        onInvalid: (field) => {
          if (field.email().invalid()) {
            field.email().focusBoundControl()
            return
          }

          if (field.password().invalid()) {
            field.password().focusBoundControl()
          }
        },
      },
    }
  )

  readonly isPasswordVisible = signal(false)
}
