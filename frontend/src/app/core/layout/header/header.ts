import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router, RouterLink, RouterLinkActive } from '@angular/router'
import { Select } from 'primeng/select'
import { AuthStateService } from '../../auth/http/auth-state.service'

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, FormsModule, RouterLinkActive, Select],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly authState = inject(AuthStateService)
  private readonly router = inject(Router)

  readonly searchQuery = signal<string>('')

  languages = [
    { label: 'English (United States)', value: 'en-US' },
    { label: 'Russian (Russia)', value: 'ru-RU' },
  ]

  selectedLanguage = 'en-US'

  constructor() {
    effect(() => {
      this.authState.bootstrap()
    })
  }
}
