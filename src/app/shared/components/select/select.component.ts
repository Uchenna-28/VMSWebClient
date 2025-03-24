import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-select',
  imports: [CommonModule,ImageComponent],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  standalone: true
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = 'Select';
  @Input() icon: string = '';
  @Input() options: Array<string | { label: string; value: string }> = [];
  @Input() width: string = '100%';
  @Input() height: string = '40px';
  @Input() margin: string = '0';
  @Input() fontFamily: string = 'Helvetica Neue LT Com';
  @Input() imageSrc: string = '';

  value: string = '';
  isDisabled = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setValue(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  isObjectOption(option: any): option is { label: string; value: string } {
    return typeof option === 'object' && option !== null && 'value' in option && 'label' in option;
  }
  
  onSelectChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.setValue(value);
  }
}

