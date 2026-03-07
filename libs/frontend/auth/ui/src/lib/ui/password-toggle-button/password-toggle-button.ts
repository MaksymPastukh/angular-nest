import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

@Component({
  selector: 'app-password-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-toggle-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordToggleButton {
  isVisible = input.required<boolean>()
  toggles = output<void>()
}
