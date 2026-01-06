import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { IconField } from 'primeng/iconfield'
import { InputIcon } from 'primeng/inputicon'
import { FloatLabel } from 'primeng/floatlabel'
import { FormsModule } from '@angular/forms'
import { InputText } from 'primeng/inputtext'
import { Select } from 'primeng/select'
import { AuthStore } from '../../../core/auth/store/auth.store'

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    IconField,
    InputIcon,
    FloatLabel,
    FormsModule,
    InputText,
    RouterLinkActive,
    Select,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  /**
   * ИНЖЕКТИМ AuthStore
   *
   * Теперь вместо сервиса используем store для получения данных пользователя
   * Все данные доступны через signals - они автоматически обновляются
   */
  readonly authStore = inject(AuthStore)

  searchQuery: string = ''

  /**
   * ИСПОЛЬЗОВАНИЕ ДАННЫХ ИЗ STORE
   *
   * В template мы можем напрямую использовать:
   * - authStore.isAuthenticated() - авторизован ли пользователь
   * - authStore.user() - данные пользователя
   * - authStore.userName() - имя пользователя (computed signal)
   * - authStore.isLoading() - идет ли загрузка
   *
   * Нет необходимости:
   * - Создавать подписки (subscribe)
   * - Управлять lifecycle (ngOnInit, ngOnDestroy)
   * - Хранить локальные копии данных
   *
   * Все автоматически обновляется благодаря signals!
   */

  languages = [
    { label: 'English (United States)', value: 'en-US' },
    { label: 'Russian (Russia)', value: 'ru-RU' },
  ]

  selectedLanguage = 'en-US'
}
