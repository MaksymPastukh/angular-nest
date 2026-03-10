import { CommonModule, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import {
  debounce,
  email,
  form,
  FormField,
  FormRoot,
  minLength,
  pattern,
  required,
  validate,
  validateHttp,
} from '@angular/forms/signals'
import { RouterLink } from '@angular/router'
import { FRONTEND_CONFIG } from '@marketplace/frontend-core-config'
import { Toast } from 'primeng/toast'
import { AuthFacade, RegisterDataInterface } from '@marketplace/frontend-auth-data-access'

const REGISTER_INITIAL_MODEL: RegisterDataInterface = {
  firstName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
  subscribeToNewsletter: false,
} as const

const EMAIL_TAKEN_MESSAGE = 'User with this email already exists.'

@Component({
  selector: 'app-register',
  imports: [CommonModule, NgOptimizedImage, RouterLink, FormRoot, FormField, Toast],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPage {
  readonly authFacade = inject(AuthFacade)

  readonly isPasswordVisible = signal(false)
  readonly isConfirmPasswordVisible = signal(false)
  readonly registerModel = signal<RegisterDataInterface>({ ...REGISTER_INITIAL_MODEL })

  readonly registerForm = form(
    this.registerModel,
    (controlSchema) => {
      required(controlSchema.firstName, { message: 'Name is required.' })
      minLength(controlSchema.firstName, 3, { message: 'Name must be at least 3 characters long.' })

      debounce(controlSchema.email, 300)
      required(controlSchema.email, { message: 'Email is required.' })
      email(controlSchema.email, { message: 'Please enter a valid email address.' })
      validateHttp<string, { available: boolean }>(controlSchema.email, {
        request: ({ value }) => {
          const emailValue = value()?.trim()
          if (!emailValue) return undefined

          return `${FRONTEND_CONFIG.api}auth/check-email?email=${encodeURIComponent(emailValue)}`
        },
        onSuccess: (response) => {
          if (response.available) return null

          return {
            kind: 'emailTaken',
            message: EMAIL_TAKEN_MESSAGE,
          }
        },
        onError: () => null,
      })

      required(controlSchema.password, { message: 'Password is required.' })
      minLength(controlSchema.password, 6, {
        message: 'Password must be at least 6 characters long.',
      })
      pattern(controlSchema.password, /^(?=.*[A-Z])(?=.*\d)/, {
        message: 'Password must contain at least one uppercase letter and one number.',
      })
      required(controlSchema.confirmPassword, { message: 'Please confirm your password.' })

      validate(controlSchema.confirmPassword, (helpers) => {
        const confirmPassword: string = helpers.value()
        const password: string = helpers.valueOf(controlSchema.password)

        if (confirmPassword !== password) {
          return {
            kind: 'passwordMismatch',
            message: 'Passwords do not match.',
          }
        }
        return null
      })

      required(controlSchema.agreeToTerms, {
        message: 'You must agree to the terms and conditions.',
      })
    },
    {
      submission: {
        ignoreValidators: 'none',
        action: async (field) => {
          const result = await this.authFacade.registerWithResult({ ...this.registerModel() })

          if (result.ok) {
            field().reset({ ...REGISTER_INITIAL_MODEL })
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
          if (field.firstName().invalid()) {
            field.firstName().focusBoundControl()
            return
          }

          if (field.email().invalid()) {
            field.email().focusBoundControl()
            return
          }

          if (field.password().invalid()) {
            field.password().focusBoundControl()
            return
          }

          if (field.confirmPassword().invalid()) {
            field.confirmPassword().focusBoundControl()
            return
          }

          if (field.agreeToTerms().invalid()) {
            field.agreeToTerms().focusBoundControl()
          }
        },
      },
    }
  )
}
