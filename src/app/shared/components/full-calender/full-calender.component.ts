import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-full-calender',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './full-calender.component.html',
  styleUrl: './full-calender.component.css'
})
export class FullCalenderComponent implements OnInit {
  @Input() events: any[] = [];
  @Input() allowedViews: string[] = ['dayGridMonth', 'timeGridWeek', 'timeGridDay']; // Default views
  @Input() initialView: string = 'dayGridMonth';
  @Input() editable: boolean = true;
  @Input() selectable: boolean = true;
  @Input() showToolbar: boolean = true;
  @Input() buttonText: any = {
    prev: '‹',
    next: '›',
    today: 'Today',
    month: 'Month',
    week: 'Week',
    day: 'Day'
  };
  @Input() headerToolbar: any = null; // Allow full customization of toolbar

  calendarOptions!: CalendarOptions;

  ngOnInit() {
    this.calendarOptions = {
      initialView: this.initialView,
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      events: this.events,
      editable: this.editable,
      selectable: this.selectable,
      buttonText: this.buttonText,
      headerToolbar: this.headerToolbar !== null
        ? this.headerToolbar // Use the provided toolbar configuration
        : this.showToolbar
        ? { left: this.allowedViews.join(','), center: 'title', right: 'prev,next' } // Default toolbar
        : false, // Hide toolbar if showToolbar is false
    };
  }
}
