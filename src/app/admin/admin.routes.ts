import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin/admin-dashboard/admin-dashboard.component';
import { AdminMeetingsComponent } from '../admin/admin-meetings/admin-meetings.component';
import { HomeComponent } from './home/home.component';
import { AdminCalenderComponent } from '../admin/admin-calender/admin-calender.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminDashboardComponent },
  {
    path: 'layout',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'meetings', component: AdminMeetingsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'calender', component: AdminCalenderComponent },
    ]
  }
];