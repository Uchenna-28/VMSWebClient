import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, OnChanges {
  @Input() tabs: string[] = [];
  @Input() activeTab: string = ''; // 🔑 Accept active tab from parent
  @Output() tabChanged = new EventEmitter<string>();

  ngOnInit() {
    if (!this.activeTab && this.tabs.length) {
      this.activeTab = this.tabs[0];
      this.tabChanged.emit(this.activeTab);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeTab'] && changes['activeTab'].currentValue) {
      this.activeTab = changes['activeTab'].currentValue;
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.tabChanged.emit(tab);
  }
}
