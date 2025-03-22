import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-button',
  standalone: true, // ✅ Standalone component
  templateUrl: './button.component.html',
  imports: [CommonModule],
  styleUrls: ['./button.component.css'] // ✅ Uses CSS instead of SCSS
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';  // ✅ Custom Button Text
  @Input() bgColor: string = '#ff7f00';  // ✅ Default Background Color
  @Input() textColor: string = '#ffffff';  // ✅ Default Text Color
  @Input() isLoading: boolean = false;  // ✅ Loading State
  
  @Output() clicked = new EventEmitter<void>();  // ✅ Click Event

  onClick() {
    if (!this.isLoading) {
      this.clicked.emit();
    }
  }
}
