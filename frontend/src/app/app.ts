import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MessageService } from 'primeng/api'
import { Toast } from 'primeng/toast'
import { CreateProductStore } from './features/admin/store/create.store'
import { AuthStore } from './features/auth/store/auth.store'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  protected readonly authStore = inject(AuthStore)
  protected readonly productStore = inject(CreateProductStore)
  protected readonly title = signal('Euphoria')
  private readonly messageService = inject(MessageService)

  constructor() {
    // Effect для обработки событий аутентификации
    effect(() => {
      const event = this.authStore.event()
      if (!event) return

      switch (event.type) {
        case 'loginSuccess':
        case 'registerSuccess':
          this.messageService.add({
            severity: 'success',
            summary: event.type === 'loginSuccess' ? 'Login Successful' : 'Registration Successful',
            detail: `Welcome, ${event.userName}!`,
          })
          break

        case 'loginError':
        case 'registerError':
          this.messageService.add({
            severity: 'error',
            summary: event.type === 'loginError' ? 'Login Failed' : 'Registration Failed',
            detail: event.message,
          })
          break

        case 'logout':
          this.messageService.add({
            severity: 'info',
            summary: 'Logged Out',
            detail: 'You have been logged out successfully.',
          })
          break
      }

      // Очищаем event после обработки
      this.authStore.clearEvent()
    })

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

  ngOnInit() {
    this.authStore.rehydrate()
  }
}
