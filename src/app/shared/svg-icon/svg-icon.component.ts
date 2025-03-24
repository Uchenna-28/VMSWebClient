import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  template: `<div [innerHTML]="sanitizedSvg" [style.width.px]="size" [style.height.px]="size"></div>`,
  styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent implements OnChanges {
  @Input() icon!: string; 
  @Input() size: number = 24; 
  @Input() color: string = 'black'; 
  @Input() strokeWidth: number = 2; 

  sanitizedSvg: SafeHtml = '';

  icons: { [key: string]: string } = {
    location: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
      </svg>
    `,
    user: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm89.6 32h-179.2C57.5 288 0 345.5 0 416v32c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-32c0-70.5-57.5-128-128.4-128z"/>
      </svg>
    `,
    calendar: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"/>
    </svg>
  `,
  clock: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
  </svg>
`,
pen: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M362.7 19.3C387.1-5.1 426.9-5.1 451.3 19.3l41.4 41.4c24.4 24.4 24.4 64.2 0 88.6l-27.1 27.1L335.6 46.4l27.1-27.1zM309.5 72.5L0 382.1V512h129.9L439.5 202.5 309.5 72.5z"/>
</svg>
`,
email: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
</svg>
`,
phone: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
`
  };

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['icon'] || changes['color'] || changes['strokeWidth']) {
      const svg = this.icons[this.icon] || '';
      const styledSvg = svg.replace('<path ', `<path stroke="${this.color}" stroke-width="${this.strokeWidth}" fill="none" `);
      this.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(styledSvg);
    }
  }
}
