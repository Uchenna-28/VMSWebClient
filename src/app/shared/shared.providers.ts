import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
// import { CapitalizePipe } from './pipes/capitalize.pipe';

export const SHARED_PROVIDERS = [
  importProvidersFrom(CommonModule),
//   InputComponent,
  ButtonComponent
//   CapitalizePipe
];
