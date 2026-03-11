import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { IMAGE_LOADER } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authInterceptor } from '@marketplace/frontend-core-http';
import { marketplaceImageLoader } from '@marketplace/frontend-shared-util';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { AuraLight } from '../assets/theme/aura-light';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'disabled', // Полностью отключаем автоматический скролл
        anchorScrolling: 'enabled',
      }),
    ),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: IMAGE_LOADER,
      useValue: marketplaceImageLoader,
    },
    provideAnimationsAsync(),
    providePrimeNG({
      overlayAppendTo: 'body',
      theme: {
        preset: AuraLight,
        options: {
          prefix: 'p',
          darkModeSelector: false, // Отключаем темный режим
          cssLayer: false,
        },
      },
    }),
    MessageService,
  ],
};
