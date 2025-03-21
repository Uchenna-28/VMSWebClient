import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  imports: [ImageComponent],
  standalone: true
})
export class SearchInputComponent {
  @Input() placeholder: string = 'Search...';  // Dynamic placeholder
  @Input() imageSrc: string = '';
  @Output() search = new EventEmitter<string>(); // Emits search value

  onSearch(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.search.emit(inputValue);
  }
}

