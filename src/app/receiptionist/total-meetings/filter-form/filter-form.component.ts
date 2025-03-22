import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';
import { SelectComponent } from '../../../shared/components/select/select.component';
import { MeetingButtonComponent } from '../../../shared/components/meeting-button/meeting-button.component';
import { DateTimeInputComponent } from '../../../shared/components/date-time-input/date-time-input.component';
@Component({
  selector: 'app-filter-form',
  imports:[ReactiveFormsModule,DateTimeInputComponent, InputComponent,SelectComponent, MeetingButtonComponent],
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent {
  filterForm: FormGroup;

  @Output() applyFilters = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      date: [''],
      startTime: [''],
      endTime: [''],
      room: [''],
      sortByDate: ['']
    });
  }
  meetingRoomsOptions = [{ label: 'Board Room', value: 'Board Room' }];
  onApply() {
    this.applyFilters.emit(this.filterForm.value);
  }

  sortOptions = [
    { label: 'Ascending', value: 'Ascending' },
    { label: 'Descending', value: 'Descending' }
  ];

  meetRoomOptions = [
    { label: 'Board room', value: 'Board room' },
    // { label: 'Descending', value: 'Descending' }
  ];
}
