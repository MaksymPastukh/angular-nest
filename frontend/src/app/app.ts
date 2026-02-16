import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MessageService } from 'primeng/api'
import { Toast } from 'primeng/toast'
import { AuthStateService } from './core/auth/http/auth-state.service'
import { CreateProductStore } from './features/admin/store/create.store'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly productStore = inject(CreateProductStore)
  protected readonly title = signal('Euphoria')
  private readonly messageService = inject(MessageService)
  private readonly authState = inject(AuthStateService)

  constructor() {
    // Восстанавливаем сессию пользователя из localStorage при старте приложения
    this.authState.bootstrap()
    // Effect для обработки событий создания продукта
    effect(() => {
      const event = this.productStore.event()
      if (!event) return

      switch (event.type) {
        case 'productCreated':
          this.messageService.add({
            severity: 'success',
            summary: 'Продукт создан!',
            detail: `Продукт "${event.productTitle}" успешно создан`,
            life: 3000,
          })
          break

        case 'productCreateError':
          this.messageService.add({
            severity: 'error',
            summary: 'Ошибка создания',
            detail: event.message,
            life: 3000,
          })
          break

        case 'imageUploaded':
          this.messageService.add({
            severity: 'success',
            summary: 'Изображение загружено',
            detail: 'Изображение успешно загружено на сервер',
            life: 2000,
          })
          break

        case 'imageUploadError':
          this.messageService.add({
            severity: 'error',
            summary: 'Ошибка загрузки',
            detail: event.message,
            life: 3000,
          })
          break
      }

      // Очищаем event после обработки
      this.productStore.clearEvent()
    })
  }
}
