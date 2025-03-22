import { Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import {EmployeeMeetingsComponent} from './employee-meetings/employee-meetings.component';
import { EmployeeCalenderComponent } from './employee-calender/employee-calender.component';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { HomeComponent } from './home/home.component';

export const EMPLOYEE_ROUTES: Routes = [
  { path: '', component: EmployeeDashboardComponent },
  {
      path: 'layout',
      component: EmployeeLayoutComponent,
      children: [
        { path: 'dashboard', component: EmployeeDashboardComponent },
        { path: 'meetings', component: EmployeeMeetingsComponent },
        { path: 'home', component: HomeComponent },
        { path: 'calender', component: EmployeeCalenderComponent },
      ]
    }
];