import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-verification',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './verification.html',
  styleUrl: './verification.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Verification {}
