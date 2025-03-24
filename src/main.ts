// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { CORE_PROVIDERS } from './app/core/core.providers';
import { SHARED_PROVIDERS } from './app/shared/shared.providers';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    ...CORE_PROVIDERS,
    ...SHARED_PROVIDERS
  ]
}).catch(err => console.error(err));
