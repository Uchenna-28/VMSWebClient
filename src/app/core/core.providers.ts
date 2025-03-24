import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';

export const CORE_PROVIDERS = [
  provideHttpClient(), // ✅ Correct: No need for importProvidersFrom()
  AuthService
];
