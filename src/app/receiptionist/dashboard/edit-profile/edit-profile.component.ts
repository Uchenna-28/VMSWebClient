import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../shared/components/input/input.component';
import { SelectComponent } from '../../../shared/components/select/select.component';
import { MeetingButtonComponent } from '../../../shared/components/meeting-button/meeting-button.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  imports: [
    InputComponent,
    CommonModule,
    ReactiveFormsModule,
    SelectComponent,
    MeetingButtonComponent,
  ],
  standalone: true,
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  @Output() profileUpdated = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<void>();
  profileForm: FormGroup;
  previewImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      location: ['', Validators.required],
      profilePicture: [null],
    });
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.convertToBase64(file);
    }
  }

  // Convert image to Base64 for preview
  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImage = reader.result;
      this.profileForm.patchValue({ profilePicture: this.previewImage });
    };
    reader.readAsDataURL(file);
  }

  // Drag & Drop Handlers
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer!.dropEffect = 'copy';
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer?.files[0];
    if (file) {
      this.convertToBase64(file);
    }
  }
  genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];
  branchOptions = [
    { label: 'Lagos Branch', value: 'Lagos Branch' },
    { label: 'Abuja Branch', value: 'Abuja Branch' }
  ];
  // Submit Form
  onSubmit(): void {
    
      this.profileUpdated.emit(this.profileForm.value);
      this.closeModal.emit();
    
  }
}
