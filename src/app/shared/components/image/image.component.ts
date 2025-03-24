import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  @Input() src: string = ''; // Image source (URL or local path)
  @Input() alt: string = 'Image'; // Alternative text for accessibility
  @Input() width: string = '50px'; // Image width
  @Input() height: string = '50px'; // Image height
  @Input() borderRadius: string = '8px'; // Border radius for rounded images
  @Input() objectFit: string = 'cover'; // Image fit style (cover, contain, etc.)
  @Input() color: string = 'transparent';
  @Input() marginBottom: string = '0px'; // ✅ Custom margin-top
  // @Input() marginBottom: string = '';
}
