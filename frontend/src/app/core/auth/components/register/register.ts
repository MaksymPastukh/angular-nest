import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { RegisterDataInterface } from '../../types/registerData.interface'
import {
  debounce,
  email,
  Field,
  form,
  minLength,
  pattern,
  required,
  submit,
  validate,
} from '@angular/forms/signals'
import { AuthStore } from '../../store/auth.store'

@Component({
  selector: 'app-register',
  imports: [CommonModule, NgOptimizedImage, RouterLink, ReactiveFormsModule, Field],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
  readonly authStore = inject(AuthStore)

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

    validate(controlSchema.confirmPassword, ({ value, valueOf }) => {
      const confirmPassword: string = value()
      const password: string = valueOf(controlSchema.password)

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

  protected register(event: Event): void {
    event.preventDefault()

    submit(this.registerForm, async () => {
      const formModel = this.registerModel()

      const registerData: RegisterDataInterface = {
        firstName: formModel.firstName,
        email: formModel.email,
        password: formModel.password,
        confirmPassword: formModel.confirmPassword,
        agreeToTerms: formModel.agreeToTerms,
        subscribeToNewsletter: formModel.subscribeToNewsletter,
      }

      this.authStore.register(registerData)

      console.log('📝 [Register Component] Данные отправлены в AuthStore')
      return undefined
    }).catch(console.error)
  }
}
