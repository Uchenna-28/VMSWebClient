import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../../shared/components/tab/tab.component';
import { EmployeeTodayMeetingsComponent } from '../employee-today-meetings/employee-today-meetings.component';
import { EmployeeVisitorsComponent } from '../employee-visitors/employee-visitors.component';
import { EmployeeDashboardMeetingsComponent } from '../employee-dashboard-meetings/employee-dashboard-meetings.component';
import { EmployeeMeetingApprovalComponent } from '../employee-meeting-approval/employee-meeting-approval.component';
import { EmployeeMeetingInvitesComponent } from '../employee-meeting-invites/employee-meeting-invites.component';
@Component({
  selector: 'app-employee-dashboard-tab',
  imports: [
    CommonModule,
    EmployeeMeetingApprovalComponent,
    EmployeeMeetingInvitesComponent,
    EmployeeDashboardMeetingsComponent,
    TabComponent,
    EmployeeTodayMeetingsComponent,
    EmployeeVisitorsComponent,
  ],
  templateUrl: './employee-dashboard-tab.component.html',
  styleUrl: './employee-dashboard-tab.component.css',
})
export class EmployeeDashboardTabComponent {
  tabsList = [
    'Todays Meetings',
    'Visitors',
    'Meetings',
    'Meeting Invites',
    'Meeting Approvals',
    'Meeting Rooms',
  ]; // Define available tabs
  activeTab = this.tabsList[0]; // Default tab

  // Function to handle tab change
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}
