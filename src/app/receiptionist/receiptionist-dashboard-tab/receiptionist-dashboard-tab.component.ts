import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptionistVisitorsComponent } from '../visitors/receiptionist-visitors/receiptionist-visitors.component';
import {ReceiptionistTotalMeetingsComponent} from '../total-meetings/receiptionist-total-meetings/receiptionist-total-meetings.component';
import { TabComponent } from '../../shared/components/tab/tab.component';
@Component({
  selector: 'app-receiptionist-dashboard-tab',
  imports: [ReceiptionistVisitorsComponent, ReceiptionistTotalMeetingsComponent, TabComponent, CommonModule],
  templateUrl: './receiptionist-dashboard-tab.component.html',
  styleUrl: './receiptionist-dashboard-tab.component.css'
})
export class ReceiptionistDashboardTabComponent {
  tabsList = [
    'Todays Meetings',
    'Visitors'
  ]; // Define available tabs
  activeTab = this.tabsList[0]; // Default tab

  // Function to handle tab change
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}
