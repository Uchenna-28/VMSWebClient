import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/components/input/input.component';
import { MeetingButtonComponent } from '../../shared/components/meeting-button/meeting-button.component';
import { DateTimeInputComponent } from '../../shared/components/date-time-input/date-time-input.component';
import { ImageComponent } from '../../shared/components/image/image.component';
import { SelectComponent } from '../../shared/components/select/select.component';
@Component({
  selector: 'app-filter-meeting-form',
  imports: [ReactiveFormsModule,InputComponent,MeetingButtonComponent,DateTimeInputComponent,ImageComponent,SelectComponent],
  templateUrl: './filter-meeting-form.component.html',
  styleUrl: './filter-meeting-form.component.css'
})
export class FilterMeetingFormComponent {
meetingRoomsOptions = [{ label: 'Board Room', value: 'Board Room' }];
filterForm = new FormGroup({
    startDate: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    meetingRoom: new FormControl('', Validators.required),
    sort: new FormControl('', Validators.required),
  });

  sortOptions = [
    { label: 'Ascending', value: 'Ascending' },
    { label: 'Descending', value: 'Descending' }
  ];

  submitFilterForm(){}
}
