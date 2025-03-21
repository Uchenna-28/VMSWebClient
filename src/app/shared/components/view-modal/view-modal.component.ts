import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-view-modal',
  standalone: true,
  imports: [CommonModule,ImageComponent],
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent {
  @Input() record: { icon: string; value: any }[] = [];
  objectKeys = Object.keys;
}
