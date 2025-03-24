import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-table',
  imports: [CommonModule, NgxPaginationModule],
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() rows: any[] = [];
  @Input() enableCheckbox: boolean = false;

  currentPage: number = 1;
  @Output() rowAction = new EventEmitter<{ row: any, action: string }>();

  handleRowAction(row: any) {
    this.rowAction.emit({ row, action: row.action });
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  getType(value: any): string {
    if (Array.isArray(value)) return 'array';
    if (value !== null && typeof value === 'object') return 'object';
    return 'primitive';
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  isObject(value: any): boolean {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }
}
