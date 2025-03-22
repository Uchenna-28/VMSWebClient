import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeNavbarComponent } from '../../shared/components/employee-navbar/employee-navbar.component';

@Component({
  selector: 'app-employee-layout',
  imports: [EmployeeNavbarComponent, RouterModule],
  templateUrl: './employee-layout.component.html',
  styleUrl: './employee-layout.component.css'
})
export class EmployeeLayoutComponent {

}
