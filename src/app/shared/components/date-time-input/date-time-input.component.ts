import { Component, Input, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-date-time-input',
  templateUrl: './date-time-input.component.html',
  standalone: true,
  styleUrls: ['./date-time-input.component.css'],
  imports: [CommonModule, ImageComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimeInputComponent),
      multi: true
    }
  ]
})
export class DateTimeInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'Select Value';
  @Input() type: 'date' | 'time' = 'date'; // Accepts date or time
  @Input() width: string = '100%';
  @Input() height: string = '40px';
  @Input() fontSize: string = '14px';
  @Input() borderColor: string = '#ccc';
  @Input() borderRadius: string = '';
  @Input() backgroundColor: string = '#fff';
  @Input() color: string = '#000000';
  @Input() disabled: boolean = false;
  @Input() imageSrc: string = '';
  @Input() margin: string = '0px';

  @ViewChild('inputField', { static: false }) inputField!: ElementRef;

  value: string = '';
  inputType: string = 'text'; // Start with text to show placeholder
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
    this.inputType = value ? this.type : 'text'; // If value exists, use correct type
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.onChange(inputValue);
  }

  onFocus() {
    this.inputType = this.type; // Change to "date" or "time"
    setTimeout(() => this.inputField.nativeElement.showPicker(), 0); // Auto-open picker
  }

  onBlur() {
    if (!this.value) {
      this.inputType = 'text'; // Reset to text if no selection
    }
    this.onTouched();
  }
}
