import {
  ChangeDetectionStrategy,
  Component, inject,
  OnDestroy, signal,
} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import {
  catchError,
  EMPTY, firstValueFrom,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {HttpErrorResponse} from '@angular/common/http';
import {RegisterDataInterface} from '../../types/registerData.interface';
import {debounce, email, Field, form, minLength, pattern, required, submit, validate} from '@angular/forms/signals';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    ReactiveFormsModule,
    ToastModule,
    Field,
  ],
  providers: [MessageService],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register implements OnDestroy {
  private authService = inject(AuthService)
  private messageService = inject(MessageService)
  private router = inject(Router)
  private destroy$ = new Subject<void>()
  private subscription: Subscription | null = null
  isPasswordVisible = signal(false)
  isConfirmPasswordVisible = signal(false)
  registerModel = signal<RegisterDataInterface>({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeToNewsletter: false,
  })

  registerForm = form(this.registerModel, (controlSchema) => {
    required(controlSchema.firstName, {message: 'Name is required.'})
    minLength(controlSchema.firstName, 3, {message: 'Name must be at least 3 characters long.'})

    debounce(controlSchema.email, 300)
    required(controlSchema.email, {message: 'Email is required.'})
    email(controlSchema.email, {message: 'Please enter a valid email address.'})

    required(controlSchema.password, {message: 'Password is required.'})
    minLength(controlSchema.password, 6, {message: 'Password must be at least 6 characters long.'})
    pattern(controlSchema.password, /^(?=.*[A-Z])(?=.*\d)/, {message: 'Password must contain at least one uppercase letter and one number.'})
    required(controlSchema.confirmPassword, {message: 'Please confirm your password.'})

    validate(controlSchema.confirmPassword, ({value, valueOf}) => {
      const confirmPassword: string = value()
      const password: string = valueOf(controlSchema.password)

      if (confirmPassword !== password) {
        return {
          kind: 'passwordMismatch',
          message: 'Passwords do not match.'
        }
      }
      return null
    })
    required(controlSchema.agreeToTerms, {message: 'You must agree to the terms and conditions.'})
  })

  register(event: Event): void {
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

      try {
        await firstValueFrom(
          this.authService.register(registerData).pipe(takeUntil(this.destroy$))
        )

        this.messageService.add({
          severity: 'success',
          summary: 'Registration Successful',
          detail: 'You have registered successfully.',
        });
        await this.router.navigate(['/']);
        return undefined;
      } catch (error: unknown) {
        let errorMessage = 'An unknown error occurred. Please try again later.';
        if (error instanceof HttpErrorResponse && error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error instanceof Error) {
          errorMessage = error.message;
        }

        this.messageService.add({
          severity: 'error',
          summary: 'Registration Failed',
          detail: errorMessage,
        });
        return undefined;
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
