import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { FullCalenderComponent } from '../../shared/components/full-calender/full-calender.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { DateTimeInputComponent } from '../../shared/components/date-time-input/date-time-input.component';
import { SelectComponent } from '../../shared/components/select/select.component';
import { MeetingButtonComponent } from '../../shared/components/meeting-button/meeting-button.component';
@Component({
  selector: 'app-admin-calender',
  imports: [
    FullCalenderComponent,
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    ModalComponent,
    InputComponent,
    TextareaComponent,
    DateTimeInputComponent,
    SelectComponent,
    MeetingButtonComponent
  ],
  templateUrl: './admin-calender.component.html',
  styleUrl: './admin-calender.component.css'
})
export class AdminCalenderComponent {
  isAddMeetingModalOpen = false;
  meetingRoomsOptions = [{ label: 'Board Room', value: 'Board Room' }];
  scheduleMeetingForm = new FormGroup({
    title: new FormControl('', Validators.required),
    agenda: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    meetingRoom: new FormControl('', Validators.required),
    participants: new FormControl([], Validators.required),
  });
  onButtonClick() {
    this.scheduleMeetingForm.reset();
    this.isAddMeetingModalOpen = true;
  }
  onScheduleMeeting() {
    this.scheduleMeetingForm.reset();
    this.isAddMeetingModalOpen = true;
  }
  closeAddMeetingModal() {
    this.isAddMeetingModalOpen = false;
  }
  submitMeeting() {
    if (this.scheduleMeetingForm.valid) {
      const newMeeting = this.scheduleMeetingForm.value;
      console.log('New Meeting:', newMeeting);

      // Optional: Add to tableData here
      // this.tableData.push(newMeeting);

      this.closeAddMeetingModal();
    }
  }
}
