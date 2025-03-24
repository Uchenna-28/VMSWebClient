import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AcceptDeclineModalComponent } from '../../shared/components/accept-decline-modal/accept-decline-modal.component';
@Component({
  selector: 'app-meeting-invite-details',
  imports: [AcceptDeclineModalComponent],
  templateUrl: './meeting-invite-details.component.html',
  styleUrl: './meeting-invite-details.component.css'
})
export class MeetingInviteDetailsComponent {
  @Input() selectedRow: any; // Receives structured meeting details
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
