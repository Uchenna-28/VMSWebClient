import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputComponent } from '../../shared/components/input/input.component';
import { MeetingButtonComponent } from '../../shared/components/meeting-button/meeting-button.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { ImageComponent } from '../../shared/components/image/image.component';
import { SelectComponent } from '../../shared/components/select/select.component';
import { DateTimeInputComponent } from '../../shared/components/date-time-input/date-time-input.component';
@Component({
  selector: 'app-edit-meeting',
  imports: [
    InputComponent,
    MeetingButtonComponent,
    ReactiveFormsModule,
    TextareaComponent,
    ImageComponent,
    SelectComponent,
    DateTimeInputComponent
  ],
  standalone: true,
  templateUrl: './edit-meeting.component.html',
  styleUrl: './edit-meeting.component.css',
})
export class EditMeetingComponent {
  @Input() selectedMeeting: any;
  @Output() meetingUpdated = new EventEmitter<any>();
  @Output() closeEdit = new EventEmitter<void>();

  editMeetingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editMeetingForm = this.fb.group({
      title: ['', Validators.required], // ✅ Matches formControlName in template
      agenda: ['', Validators.required], // ✅ Matches formControlName in template
      startDate: ['', Validators.required], // ✅ Matches formControlName in template
      startTime: ['', Validators.required], // ✅ Matches formControlName in template
      endTime: ['', Validators.required], // ✅ Matches formControlName in template
      meetingRoom: ['', Validators.required], // ✅ Matches formControlName in template
      participants: ['', Validators.required], // ✅ Matches formControlName in template
    });
  }

  ngOnChanges() {
    if (this.selectedMeeting && Array.isArray(this.selectedMeeting)) {
      const meetingData = this.selectedMeeting.reduce((acc, item) => {
        acc[item.label.toLowerCase()] = item.value; // ✅ Convert labels to lowercase
        return acc;
      }, {} as any);

      console.log('📌 Transformed Meeting Data:', meetingData);

      this.editMeetingForm.patchValue({
        title: meetingData['title'] || '',
        agenda: meetingData['agenda'] || '',
        startDate: meetingData['date'] || '',
        startTime: meetingData['start time'] || '',
        endTime: meetingData['end time'] || '',
        meetingRoom: meetingData['meeting room'] || '',
        participants: meetingData['participants'] || '',
      });
    }
  }
  meetingRoomsOptions = [{ label: 'Board Room', value: 'Board Room' }];
  submitEdit() {
    this.meetingUpdated.emit(this.editMeetingForm.value);
    this.closeEdit.emit();
  }
}
