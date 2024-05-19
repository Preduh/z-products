import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import {
  Camera,
  Joystick,
  Laptop,
  LucideAngularModule,
  Smartphone,
  Tv2,
  Watch,
} from 'lucide-angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      LucideAngularModule.pick({
        Watch,
        Tv2,
        Laptop,
        Smartphone,
        Camera,
        Joystick,
      })
    ),
  ],
};
