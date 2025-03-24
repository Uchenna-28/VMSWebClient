import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FullCalenderComponent } from '../../shared/components/full-calender/full-calender.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { DateTimeInputComponent } from '../../shared/components/date-time-input/date-time-input.component';
import { SelectComponent } from '../../shared/components/select/select.component';
import { MeetingButtonComponent } from '../../shared/components/meeting-button/meeting-button.component';

@Component({
  selector: 'app-admin-calender',
  standalone: true,
  imports: [
    FullCalenderComponent,
    CommonModule,
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
export class AdminCalenderComponent implements AfterViewInit {
  isAddMeetingModalOpen = false;
  meetingRoomsOptions = [{ label: 'Board Room', value: 'Board Room' }];
  today: Date = new Date(); // Store today's date

  @ViewChild('mainCalendar') mainCalendar!: FullCalenderComponent;

  scheduleMeetingForm = new FormGroup({
    title: new FormControl('', Validators.required),
    agenda: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    meetingRoom: new FormControl('', Validators.required),
    participants: new FormControl([], Validators.required),
  });

  ngAfterViewInit() {
    if (this.mainCalendar) {
      // Ensure the second calendar starts in "Week View" at today's date
      this.mainCalendar.changeView('timeGridWeek', this.today);
    }
  }

  onDateSelected(event: any) {
    console.log('Selected Date:', event.date);
    if (this.mainCalendar) {
      this.mainCalendar.changeView('timeGridWeek', event.date); // Update second calendar
    }
  }
  onButtonClick() {
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
      this.closeAddMeetingModal();
    }
  }
}
