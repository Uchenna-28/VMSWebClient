import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-receiptionist-navbar',
  imports: [],
  templateUrl: './receiptionist-navbar.component.html',
  styleUrl: './receiptionist-navbar.component.css'
})
export class ReceiptionistNavbarComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    // Subscribe to route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }
}
