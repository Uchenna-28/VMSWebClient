import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-meeting-card',
  imports: [CommonModule],
  templateUrl: './upcoming-meeting-card.component.html',
  styleUrl: './upcoming-meeting-card.component.css'
})
export class UpcomingMeetingCardComponent {
  @Input() meeting: any;
}
