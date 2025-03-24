import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = 'Modal Title'; // Modal title
  @Input() width: string = '600px'; // Default modal width
  @Input() isVisible: boolean = false; // Control modal visibility
  @Input() position: 'center' | 'left' | 'right' | 'top' = 'center';
  @Input() height: string = '400px'; // Default modal height

  @Output() close = new EventEmitter<void>(); // Emit close event

  closeModal() {
    this.isVisible = false;
    this.close.emit(); // Emit event to parent
  }

  onOverlayClick(event: MouseEvent) {
    // Check if the click was directly on the overlay
    // and not on any of its children (the modal content)
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}

