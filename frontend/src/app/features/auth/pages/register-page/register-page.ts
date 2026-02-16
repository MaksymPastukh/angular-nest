import { CommonModule, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  debounce,
  email,
  form,
  FormField,
  minLength,
  pattern,
  required,
  submit,
  validate,
} from '@angular/forms/signals'
import { RouterLink } from '@angular/router'
import { Toast } from 'primeng/toast'
import { RegisterDataInterface } from '../../domain/interfaces/registerData.interface'
import { AuthFacade } from '../../store/auth.facade'

@Component({
  selector: 'app-register',
  imports: [CommonModule, NgOptimizedImage, RouterLink, ReactiveFormsModule, FormField, Toast],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPage {
  readonly authFacade = inject(AuthFacade)

  readonly isPasswordVisible = signal(false)
  readonly isConfirmPasswordVisible = signal(false)
  readonly registerModel = signal<RegisterDataInterface>({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeToNewsletter: false,
  })

  readonly registerForm = form(this.registerModel, (controlSchema) => {
    required(controlSchema.firstName, { message: 'Name is required.' })
    minLength(controlSchema.firstName, 3, { message: 'Name must be at least 3 characters long.' })

    debounce(controlSchema.email, 300)
    required(controlSchema.email, { message: 'Email is required.' })
    email(controlSchema.email, { message: 'Please enter a valid email address.' })

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
    required(controlSchema.agreeToTerms, { message: 'You must agree to the terms and conditions.' })
  })

  async register(event: Event): Promise<void> {
    event.preventDefault()

    await submit(this.registerForm, () => {
      const formModel = this.registerModel()

      const registerData: RegisterDataInterface = {
        firstName: formModel.firstName,
        email: formModel.email,
        password: formModel.password,
        confirmPassword: formModel.confirmPassword,
        agreeToTerms: formModel.agreeToTerms,
        subscribeToNewsletter: formModel.subscribeToNewsletter,
      }

      this.authFacade.register(registerData)

      return Promise.resolve(undefined)
    }).catch(console.error)
  }
}
