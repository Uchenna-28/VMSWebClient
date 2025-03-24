import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FullCalendarModule, FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-full-calender',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './full-calender.component.html',
  styleUrl: './full-calender.component.css'
})
export class FullCalenderComponent implements OnInit {
  @Input() events: any[] = [];
  @Input() allowedViews: string[] = ['dayGridMonth', 'timeGridWeek', 'timeGridDay']; 
  @Input() initialView: string = 'dayGridMonth';
  @Input() editable: boolean = true;
  @Input() selectable: boolean = true;
  @Input() startDate: Date = new Date(); // Ensure it starts with today's date
  @Input() showToolbar: boolean = true;
  @Input() buttonText: any = {
    prev: '‹',
    next: '›',
    today: 'Today',
    month: 'Month',
    week: 'Week',
    day: 'Day'
  };
  @Input() headerToolbar: any = null;

  @Output() dateClick = new EventEmitter<any>();

  @ViewChild(FullCalendarComponent) calendar!: FullCalendarComponent;

  calendarOptions!: CalendarOptions;

  ngOnInit() {
    this.calendarOptions = {
      initialView: this.initialView,
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      events: this.events,
      editable: this.editable,
      selectable: this.selectable,
      buttonText: this.buttonText,
      initialDate: this.startDate, // Start with today's date
      headerToolbar: this.headerToolbar !== null
        ? this.headerToolbar 
        : this.showToolbar
        ? { left: this.allowedViews.join(','), center: 'title', right: 'prev,next' }
        : false,
      dateClick: this.handleDateClick.bind(this) 
    };
  }

  handleDateClick(arg: any) {
    console.log('Date clicked:', arg.date);
    this.dateClick.emit(arg);
  }

  changeView(viewType: string, date: Date) {
    if (this.calendar) {
      this.calendar.getApi().changeView(viewType, date);
    }
  }
}
