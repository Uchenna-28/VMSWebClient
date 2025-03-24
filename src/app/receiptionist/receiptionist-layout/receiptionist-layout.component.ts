import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReceiptionistNavbarComponent } from '../../shared/components/receiptionist-navbar/receiptionist-navbar.component';

@Component({
  selector: 'app-receiptionist-layout',
  imports: [ReceiptionistNavbarComponent, RouterModule],
  templateUrl: './receiptionist-layout.component.html',
  styleUrl: './receiptionist-layout.component.css'
})
export class ReceiptionistLayoutComponent {

}
