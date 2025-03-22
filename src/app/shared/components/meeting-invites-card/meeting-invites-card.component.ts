import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingButtonComponent } from '../meeting-button/meeting-button.component';
@Component({
  selector: 'app-meeting-invites-card',
  imports: [CommonModule, MeetingButtonComponent],
  templateUrl: './meeting-invites-card.component.html',
  styleUrl: './meeting-invites-card.component.css'
})
export class MeetingInvitesCardComponent {
  @Input() meeting: any;
  accepted = false;
  declined = false;

  acceptMeeting() {
    this.accepted = true;
    this.declined = false;
  }

  declineMeeting() {
    this.declined = true;
    this.accepted = false;
  }
}


