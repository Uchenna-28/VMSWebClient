import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImageComponent } from '../image/image.component';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  imports: [CommonModule, ImageComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() icon: string = '';
  @Input() width: string = '100%';
  @Input() height: string = '40px';
  @Input() fontSize: string = '14px';
  @Input() borderColor: string = '#ccc';
  @Input() borderRadius: string = '5px';
  @Input() backgroundColor: string = '#fff';
  @Input() color: string = '#000';
  @Input() disabled: boolean = false;
  @Input() imageSrc: string = '';
  @Input() margin: string = '0px';
  @Input() fontFamily: string = 'Arial, sans-serif'; // Default font family
  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Called by Angular when writing a value to the input
  writeValue(value: string): void {
    this.value = value;
  }

  // Registers a callback for when the value changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Registers a callback for when the input is touched
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Handles user input and updates Angular's form model
  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.onChange(inputValue); // Notify Angular's form model
  }
}
