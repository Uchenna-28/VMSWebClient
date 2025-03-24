import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MeetingButtonComponent } from '../../../shared/components/meeting-button/meeting-button.component';
import { ViewModalComponent } from '../../../shared/components/view-modal/view-modal.component';

@Component({
  selector: 'app-view-visitor-details',
  imports: [MeetingButtonComponent,ViewModalComponent],
  templateUrl: './view-visitor-details.component.html',
  styleUrl: './view-visitor-details.component.css'
})
export class ViewVisitorDetailsComponent {
@Input() selectedRow: any;  // ⬅️ Receive meeting details
  @Output() closeModal = new EventEmitter<void>();  // ⬅️ Emit event to close modal
  @Output() editVisitor = new EventEmitter<any>(); // ⬅️ Emit event to open Edit Modal
  @Output() deleteVisitor = new EventEmitter<any>();
  @Output() printBadge = new EventEmitter<any>();
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedRow']) {
      console.log("🔍 Received selectedRow in ViewMeetingDetailsComponent:", this.selectedRow);
    }
  }

  // Trigger Edit Mode
  handleEditFromView() {
    this.closeModal.emit();   // ✅ Close View Modal
    this.editVisitor.emit(this.selectedRow);  // ✅ Open Edit Modal
  }
  

  // Close Modal
  close() {
    this.closeModal.emit();
  }

  handleDeleteFromView() {
    this.deleteVisitor.emit(this.selectedRow);  // ✅ Open Delete Confirmation
  }

  handlePrintBadgeFromView() {
    this.printBadge.emit(this.selectedRow);  // ✅ Open Delete Confirmation
  }
}
