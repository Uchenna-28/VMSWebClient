import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-main-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './main-calender.component.html',
  styleUrls: ['./main-calender.component.scss'],
})
export class MainCalendarComponent implements OnChanges {
  @Input() selectedDate!: Date;
  @Input() currentView!: 'dayGridMonth' | 'timeGridWeek' | 'dayGridDay';

  calendarOptions: any = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    initialDate: new Date(),
    events: [],
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedDate'] && this.selectedDate) {
      this.calendarOptions = {
        ...this.calendarOptions,
        initialDate: this.selectedDate,
      };
    }

    if (changes['currentView'] && this.currentView) {
      this.calendarOptions = {
        ...this.calendarOptions,
        initialView: this.currentView,
      };
    }
  }
}
