import { Routes } from '@angular/router';
import { ReceiptionistDashboardComponent } from './dashboard/receiptionist-dashboard/receiptionist-dashboard.component';
import { ReceiptionistCalenderComponent } from '../receiptionist/receiptionist-calender/receiptionist-calender.component';
import { ReceiptionistLayoutComponent } from './receiptionist-layout/receiptionist-layout.component';

export const RECEPTIONIST_ROUTES: Routes = [
  { path: '', component: ReceiptionistDashboardComponent },
  {
        path: 'layout',
        component: ReceiptionistLayoutComponent,
        children: [
          { path: 'dashboard', component: ReceiptionistDashboardComponent },         
          { path: 'calender', component: ReceiptionistCalenderComponent },
        ]
      }
];
