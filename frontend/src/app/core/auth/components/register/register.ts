import {
  ChangeDetectionStrategy,
  Component, inject,
  OnDestroy,
  OnInit, signal,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthorizationInterface } from '../../types/authorization.interface';
import {
  catchError,
  EMPTY,
  Subject,
  Subscription,
  switchMap,
  takeUntil,
} from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { DefaultResponseInterface } from '../../../../shared/types/default-response.interface';
import { CurrentUserInterface } from '../../types/current-user.interface';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { HttpErrorResponse } from '@angular/common/http';
import {RegisterDataInterface} from '../../types/registerData.interface';
import {debounce, email, Field, form, minLength, pattern, required, validate} from '@angular/forms/signals';

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
export class Register implements OnInit, OnDestroy {
  private authService = inject(AuthService)
  // private authState = inject(AuthState)
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

    validate(controlSchema.confirmPassword, ({ value, valueOf }) => {
      const confirmPassword: string = value()
      const password: string = valueOf(controlSchema.password)

      if(confirmPassword !== password) {
        return {
          kind: 'passwordMismatch',
          message: 'Passwords do not match.'
        }
      }
      return null
    })
    required(controlSchema.agreeToTerms, {message: 'You must agree to the terms and conditions.'})
  })

  register() : void {

    if(!this.registerForm().valid()) {
      return
    }

    const formModel = this.registerModel()

    const registerData: RegisterDataInterface = {
      firstName: formModel.firstName,
      email: formModel.email,
      password: formModel.password,
      confirmPassword: formModel.confirmPassword,
      agreeToTerms: formModel.agreeToTerms,
      subscribeToNewsletter: formModel.subscribeToNewsletter,
    }
  }




  public formRegister!: FormGroup;
  private destroy$ = new Subject<void>();

  get controls(): any {
    return this.formRegister.controls;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.formRegister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^[a-z0-9]{8,}$'),
        ],
      ],
      agreePrivate: [false, [Validators.requiredTrue]],
      agreeSubscribe: [false],
    });
  }

  onSubmit(): void {
    if (!this.formRegister.valid || !this.formRegister.value.agreePrivate) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail:
          'You must accept the privacy policy and fill out the form correctly',
      });
      return;
    }

    const { email, password } = this.formRegister.value;
    const newUser: AuthorizationInterface = { email, password };

    this.authService
      .register(newUser)
      .pipe(
        switchMap((data: CurrentUserInterface | DefaultResponseInterface) => {
          if ('message' in data) {
            this.messageService.add({
              severity: 'error',
              summary: 'Error!',
              detail: data.message,
            });
            return EMPTY;
          }

          const registerResponse = data as CurrentUserInterface;
          if (!registerResponse._id) {
            this.messageService.add({
              severity: 'danger',
              summary: 'Error!',
              detail: 'Ошибка при регистрации',
            });
            return EMPTY;
          }

          this.messageService.add({
            severity: 'success',
            summary: 'Success!',
            detail: 'You have successfully registered',
          });
          return this.router.navigate(['/auth/verification']);
        }),
        catchError((err: HttpErrorResponse) => {
          const errorMessage = err.error?.message || 'Register error';
          this.messageService.add({
            severity: 'error',
            summary: 'Error!',
            detail: errorMessage,
          });
          return EMPTY;
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
