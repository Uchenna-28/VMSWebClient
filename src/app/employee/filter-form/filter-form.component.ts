import { Component,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../../shared/components/select/select.component';
import { MeetingButtonComponent } from '../../shared/components/meeting-button/meeting-button.component';
@Component({
  selector: 'app-filter-form',
  imports: [ReactiveFormsModule,SelectComponent,MeetingButtonComponent],
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.css'
})
export class FilterFormComponent {
  @Output() applyFilters = new EventEmitter<any>();
    constructor() {   
    }

    filterForm = new FormGroup({
      category: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      sort: new FormControl('', Validators.required),
    });
  genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }
  ];

  categoryOptions = [
    { label: 'Staff', value: 'Staff' },
    { label: 'Admin', value: 'Admin' }
  ];

  sortOptions = [
    { label: 'Ascending', value: 'Ascending' },
    { label: 'Descending', value: 'Descending' }
  ];

  submitFilterForm(){}
}
