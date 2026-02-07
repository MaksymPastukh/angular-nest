import { UISelect, UISelectOption } from '@/shared/ui'
import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AuthStateService } from '../../auth/http/auth-state.service'

type Lang = 'en-US' | 'ru-RU'

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, FormsModule, RouterLinkActive, UISelect],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly authState = inject(AuthStateService)
  readonly searchQuery = signal<string>('')
  readonly selectedLanguage = signal('en-US')

  readonly languages: UISelectOption<Lang>[] = [
    { label: 'English (United States)', value: 'en-US' },
    { label: 'Russian (Russia)', value: 'ru-RU' },
  ]

  constructor() {
    effect(() => {
      this.authState.bootstrap()
    })
    effect(() => {
      const lang = this.selectedLanguage()
      localStorage.setItem('lang', lang)
    })
  }
}
