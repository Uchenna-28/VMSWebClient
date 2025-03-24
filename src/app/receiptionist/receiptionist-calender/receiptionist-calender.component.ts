import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalenderComponent } from '../../shared/components/full-calender/full-calender.component';
@Component({
  selector: 'app-receiptionist-calender',
  imports: [FullCalenderComponent, CommonModule],
  templateUrl: './receiptionist-calender.component.html',
  styleUrl: './receiptionist-calender.component.css'
})
export class ReceiptionistCalenderComponent {
  today: Date = new Date(); // Store today's date

  ngAfterViewInit() {
    if (this.mainCalendar) {
      // Ensure the second calendar starts in "Week View" at today's date
      this.mainCalendar.changeView('timeGridWeek', this.today);
    }
  }

  onDateSelected(event: any) {
    console.log('Selected Date:', event.date);
    if (this.mainCalendar) {
      this.mainCalendar.changeView('timeGridWeek', event.date); // Update second calendar
    }
  }
  @ViewChild('mainCalendar') mainCalendar!: FullCalenderComponent;
  myEvents = [
    { title: 'Check VMS', date: '2025-03-12' },
    { title: 'Deploy DMS', date: '2025-03-15' },
  ];
}
