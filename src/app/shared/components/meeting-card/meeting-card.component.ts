import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meeting-card',
  imports: [CommonModule],
  templateUrl: './meeting-card.component.html',
  styleUrl: './meeting-card.component.css'
})
export class MeetingCardComponent {
  @Input() meeting: any;
}
