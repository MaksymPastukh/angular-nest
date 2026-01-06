import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-request-reset-password',
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './request-reset-password.html',
  styleUrl: './request-reset-password.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestResetPassword {}
