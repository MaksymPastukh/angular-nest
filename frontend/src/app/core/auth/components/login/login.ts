import {
  ChangeDetectionStrategy,
  Component,
  signal,
  inject,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { email, Field, form, required } from '@angular/forms/signals';
import { AuthService } from '../../services/auth.service';
import { LoginDataInterface } from '../../types/loginData.interface';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    Toast,
    Field,
  ],
  providers: [MessageService],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  loginModel = signal<LoginDataInterface>({
    email: '',
    password: '',
  })

  loginForm = form(this.loginModel, (controlSchema) => {
    email(controlSchema.email, {message: 'Please enter a valid email address.'})
    required(controlSchema.email, {message: 'Email is required.'})
    required(controlSchema.password, {message: 'Password is required.'})
  } )

  isPasswordVisible = signal(false)

  login(): void {
    if (!this.loginForm().valid()) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please fill out the form correctly',
      });
      return
    }

    const formModel: LoginDataInterface = this.loginModel();
    const loginData: LoginDataInterface = {
      email: formModel.email,
      password: formModel.password
    };

  }
}
