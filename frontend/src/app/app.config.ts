import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core'
import {provideRouter, withInMemoryScrolling, withViewTransitions} from '@angular/router'

import {routes} from './app.routes'
import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {AuthInterceptor} from './core/auth/services/auth.interceptor'
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async'
import {providePrimeNG} from 'primeng/config'
import Aura from '@primeuix/themes/aura'
import {MessageService} from 'primeng/api'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // или 'enabled'
      })),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    }),
    MessageService, // Глобальный провайдер для уведомлений
  ],
}
