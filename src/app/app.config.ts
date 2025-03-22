// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
// };

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { appRoutes } from './app.routes';
// import { AuthInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // ✅ Optimizes Zone.js performance
    provideRouter(appRoutes), // ✅ Registers app-wide routing
    // provideHttpClient(withInterceptors([AuthInterceptor])), // ✅ Registers HttpClient with JWT interceptor
    provideAnimations(), // ✅ Enables animations globally
  //   providePrimeNG({
  //     theme: {
  //         preset: Aura
  //     }
  // })
  ]
};


