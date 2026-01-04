import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core'
import {provideRouter, withInMemoryScrolling, withViewTransitions} from '@angular/router'

import {routes} from './app.routes'
import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {AuthInterceptor} from './core/auth/services/auth.interceptor'
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async'
import {providePrimeNG} from 'primeng/config'
import {MessageService} from 'primeng/api'
import {AuraLight} from '../assets/theme/aura-light';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      })),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      overlayAppendTo: 'body',
      theme: {
        preset: AuraLight,
        options: {
          prefix: 'p',
          darkModeSelector: false, // Отключаем темный режим
          cssLayer: false,
        }
      }
    }),
    MessageService,
  ],
}
