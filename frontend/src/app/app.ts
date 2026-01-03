import {Component, effect, inject, OnInit, signal} from '@angular/core'
import {Router, RouterOutlet} from '@angular/router'
import { Toast } from 'primeng/toast'
import {AuthStore} from './core/auth/store/auth.store';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly authStore = inject(AuthStore);
  protected readonly title = signal('frontend')
  private messageService = inject(MessageService)
  private router = inject(Router)

  constructor() {
    effect(() => {
      const event = this.authStore.event()
      if (!event) return

      switch (event.type) {
        case 'loginSuccess':
        case 'registerSuccess':
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `Welcome, ${event.userName}!`,
          })
          break

        case 'loginError':
        case 'registerError':
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: event.message,
          })
          break

        case 'logout':
          this.messageService.add({
            severity: 'info',
            summary: 'Logged out',
          })
          this.router.navigate(['/login'])
          break
      }

      this.authStore.clearEvent()
    })
  }

  ngOnInit() {
    this.authStore.rehydrate()
  }
}
