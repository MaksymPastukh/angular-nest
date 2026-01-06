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
  protected readonly title = signal('Euphoria')
  private messageService = inject(MessageService)

  constructor() {
    effect(() => {
      const event = this.authStore.event();
      console.log('Auth Event:', event);
      if (!event) return;

      switch (event.type) {
        case 'loginSuccess':
        case 'registerSuccess':
          this.messageService.add({
            severity: 'success',
            summary: event.type === 'loginSuccess' ? 'Login Successful' : 'Registration Successful',
            detail: `Welcome, ${event.userName}!`
          });
          break;

        case 'loginError':
        case 'registerError':
          this.messageService.add({
            severity: 'error',
            summary: event.type === 'loginError' ? 'Login Failed' : 'Registration Failed',
            detail: event.message
          });
          break;

        case 'logout':
          this.messageService.add({
            severity: 'info',
            summary: 'Logged Out',
            detail: 'You have been logged out successfully.'
          });
          break;
      }

      // Очищаем event после обработки
      this.authStore.clearEvent()
    })
  }

  ngOnInit() {
    this.authStore.rehydrate()
  }
}
