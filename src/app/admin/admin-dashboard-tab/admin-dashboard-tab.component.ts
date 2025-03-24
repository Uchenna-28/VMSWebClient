import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../../shared/components/tab/tab.component';
import { AdminTodayMeetingComponent } from '../admin-today-meeting/admin-today-meeting.component';
import { AdminMeetingApprovalsComponent } from '../admin-meeting-approvals/admin-meeting-approvals.component';
import { AdminVisitorsComponent } from '../admin-visitors/admin-visitors.component';
import { AdminDashboardMeetingComponent } from '../admin-dashboard-meeting/admin-dashboard-meeting.component';
import { AdminMeetingInvitesComponent } from '../admin-meeting-invites/admin-meeting-invites.component';
// import { AdminMeetingsComponent } from '../admin-meetings/admin-meetings.component';
import { AdminEmployeesComponent } from '../admin-employees/admin-employees.component';

@Component({
  selector: 'app-admin-dashboard-tab',
  imports: [
    TabComponent,
    CommonModule,
    AdminTodayMeetingComponent,
    AdminEmployeesComponent,
    AdminMeetingApprovalsComponent,
    AdminMeetingInvitesComponent,
    AdminVisitorsComponent,
    AdminDashboardMeetingComponent
    // AdminMeetingsComponent,
  ],
  templateUrl: './admin-dashboard-tab.component.html',
  styleUrl: './admin-dashboard-tab.component.css',
})
export class AdminDashboardTabComponent {
  tabsList = [
    'Todays Meetings',
    'Visitors',
    'Meetings',
    'Meeting Invites',
    'Meeting Approvals',
    'Employees',
    'Meeting Rooms',
  ]; // Define available tabs
  activeTab = this.tabsList[0]; // Default tab

  // Function to handle tab change
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}
