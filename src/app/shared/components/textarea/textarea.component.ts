import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  standalone: true,
  imports: [CommonModule, ImageComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() width: string = '100%';
  @Input() height: string = '80px';
  @Input() fontSize: string = '14px';
  @Input() borderColor: string = '#ccc';
  @Input() borderRadius: string = '8px';
  @Input() backgroundColor: string = '#fff';
  @Input() color: string = '#000';
  @Input() disabled: boolean = false;
  @Input() imageSrc: string = '';
  @Input() margin: string = '0px';
  // @Input() fontFamily: string = 'Arial, sans-serif';

  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: Event) {
    const inputValue = (event.target as HTMLTextAreaElement).value;
    this.value = inputValue;
    this.onChange(inputValue);
  }
}
