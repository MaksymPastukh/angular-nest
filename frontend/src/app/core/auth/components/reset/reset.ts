import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset',
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './reset.html',
  styleUrl: './reset.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetComponent {
  isResetPassword = false;
  isCreateNewPassword = true;

  isPasswordVisible = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
