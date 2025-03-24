import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../image/image.component';
import { MeetingButtonComponent } from '../meeting-button/meeting-button.component';
@Component({
  selector: 'app-accept-decline-modal',
  standalone: true,
  imports: [CommonModule,ImageComponent,MeetingButtonComponent],
  templateUrl: './accept-decline-modal.component.html',
  styleUrl: './accept-decline-modal.component.css'
})
export class AcceptDeclineModalComponent {
  @Input() record: { icon: string; value: any }[] = [];
  objectKeys = Object.keys;
}
