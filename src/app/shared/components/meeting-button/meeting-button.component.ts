import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ImageComponent } from '../image/image.component';
@Component({
  selector: 'app-meeting-button',
  imports: [CommonModule, ImageComponent],
  templateUrl: './meeting-button.component.html',
  styleUrl: './meeting-button.component.css'
})
export class MeetingButtonComponent {
  @Input() label: string = 'Click Me'; // Button text
  @Input() icon: string = ''; // FontAwesome or other icon class
  @Input() backgroundColor: string = '#007bff'; // Default blue background
  @Input() hoverBackgroundColor: string = '#8d0c18';
  @Input() color: string = '#ffffff'; // Default white text color
  @Input() width: string = '150px'; // Default button width
  @Input() height: string = '45px'; // Default button height
  @Input() borderRadius: string = '5px'; // Default border radius
  @Input() fontFamily: string = 'Arial, sans-serif'; // Default font family
  @Input() imageSrc?: string; // 🟢 Allow undefined
  @Input() fontSize: string = '16px'; // Default font size
  @Input() fontWeight: string = '500'; // Default font weight
  @Input() border: string = '2px solid transparent'; // Default border (can be customized)
  @Input() disabled: boolean = false; // Disabled state
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Button type
  @Output() buttonClick = new EventEmitter<void>();
  @Input() padding: string = '0px 0px';
  @Input() margin: string = '0px 0px';
  handleClick() {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}
