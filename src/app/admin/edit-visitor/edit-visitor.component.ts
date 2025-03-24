import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/components/input/input.component';
import { MeetingButtonComponent } from '../../shared/components/meeting-button/meeting-button.component';
// import { ImageComponent } from '../../../shared/components/image/image.component';
import { SelectComponent } from '../../shared/components/select/select.component';
@Component({
  selector: 'app-edit-visitor',
  imports: [InputComponent,MeetingButtonComponent,SelectComponent,ReactiveFormsModule],
  templateUrl: './edit-visitor.component.html',
  styleUrl: './edit-visitor.component.css'
})
export class EditVisitorComponent {
  @Input() selectedVisitor: any;
  @Output() visitorUpdated = new EventEmitter<any>();
  @Output() closeEdit = new EventEmitter<void>();

  editVisitorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editVisitorForm = this.fb.group({
      fullName: ['', Validators.required],         // ✅ Matches formControlName in template
      email: ['', Validators.required],        // ✅ Matches formControlName in template
      phone: ['', Validators.required],          // ✅ Matches formControlName in template
      gender: ['', Validators.required],     // ✅ Matches formControlName in template
      branch: ['', Validators.required],       // ✅ Matches formControlName in template
    });
  }
  

  ngOnChanges() {
    if (this.selectedVisitor && Array.isArray(this.selectedVisitor)) {
      const meetingData = this.selectedVisitor.reduce((acc, item) => {
        acc[item.label.toLowerCase()] = item.value;  // ✅ Convert labels to lowercase
        return acc;
      }, {} as any);
  
      console.log("📌 Transformed Meeting Data:", meetingData);
      
      this.editVisitorForm.patchValue({
        title: meetingData['title'] || '',
        agenda: meetingData['agenda'] || '',
        date: meetingData['date'] || '',
        startTime: meetingData['start time'] || '',
        endTime: meetingData['end time'] || '',
        meetingRoom: meetingData['meeting room'] || '',
        participants: meetingData['participants'] || ''
      });
    }
  }
  genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];
  submitEdit() {  
      this.visitorUpdated.emit(this.editVisitorForm.value);
      this.closeEdit.emit();
  }
}
