import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MeetingButtonComponent } from '../../shared/components/meeting-button/meeting-button.component';
import { ViewModalComponent } from '../../shared/components/view-modal/view-modal.component';

@Component({
  selector: 'app-view-meeting-details',
  imports: [MeetingButtonComponent, ViewModalComponent],
  standalone: true,
  templateUrl: './view-meeting-details.component.html',
  styleUrl: './view-meeting-details.component.css'
})
export class ViewMeetingDetailsComponent implements OnChanges {
  @Input() selectedRow: any;  // ⬅️ Receive meeting details
  @Output() closeModal = new EventEmitter<void>();  // ⬅️ Emit event to close modal
  @Output() editMeeting = new EventEmitter<any>(); // ⬅️ Emit event to open Edit Modal
  @Output() deleteMeeting = new EventEmitter<any>();
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedRow']) {
      console.log("🔍 Received selectedRow in ViewMeetingDetailsComponent:", this.selectedRow);
    }
  }

  // Trigger Edit Mode
  handleEditFromView() {
    this.closeModal.emit();   // ✅ Close View Modal
    this.editMeeting.emit(this.selectedRow);  // ✅ Open Edit Modal
  }
  

  // Close Modal
  close() {
    this.closeModal.emit();
  }

  handleDeleteFromView() {
    this.deleteMeeting.emit(this.selectedRow);  // ✅ Open Delete Confirmation
  }
}
