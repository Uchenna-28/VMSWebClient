import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { AUTH_ROUTES } from './authentication/authentication.routes';
import { EMPLOYEE_ROUTES } from './employee/employee.routes';
import { RECEPTIONIST_ROUTES } from './receiptionist/receiptionist.routes';
import { ADMIN_ROUTES } from './admin/admin.routes';

export const appRoutes: Routes = [
    { 
      path: 'auth', 
      loadChildren: () => import('./authentication/authentication.routes').then(m => m.AUTH_ROUTES) 
    },
    { 
      path: 'employee', 
      loadChildren: () => import('./employee/employee.routes').then(m => m.EMPLOYEE_ROUTES) 
    },
    { 
        path: 'admin',
        loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
      },
      { 
        path: 'receptionist',
        loadChildren: () => import('./receiptionist/receiptionist.routes').then(m => m.RECEPTIONIST_ROUTES) 
      },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard' } // Fallback Route
  ];
