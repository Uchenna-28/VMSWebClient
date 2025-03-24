import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, ImageComponent], 
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() svgIcon?: string; // 🟢 Allow undefined
  @Input() imageSrc?: string; // 🟢 Allow undefined
  @Input() title: string = ''; // Card title
  @Input() value: string | number = ''; // Card value
  @Input() subtitle: string = ''; // Subtitle

  // Dynamic Styling Inputs
  @Input() cardWidth: string = '220px';
  @Input() cardHeight: string = '100px';
  @Input() padding: string = '15px 20px';
  @Input() iconSize: number = 24;
  @Input() iconColor: string = '#b30000';
  @Input() iconStrokeWidth: number = 15;
  @Input() titleFontSize: string = '16px';
  @Input() valueFontSize: string = '32px';
  @Input() subtitleFontSize: string = '12px';
}
