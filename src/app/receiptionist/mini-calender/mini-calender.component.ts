import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mini-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-calender.component.html',
  styleUrls: ['./mini-calender.component.scss'],
})
export class MiniCalendarComponent {
  @Output() dateSelected = new EventEmitter<Date>();

  onDateChange(event: any) {
    this.dateSelected.emit(new Date(event.target.value));
  }
}
