import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalenderComponent } from '../../shared/components/full-calender/full-calender.component';
@Component({
  selector: 'app-receiptionist-calender',
  imports: [FullCalenderComponent, CommonModule],
  templateUrl: './receiptionist-calender.component.html',
  styleUrl: './receiptionist-calender.component.css'
})
export class ReceiptionistCalenderComponent {
  myEvents = [
    { title: 'Check VMS', date: '2025-03-12' },
    { title: 'Deploy DMS', date: '2025-03-15' },
  ];
}
