import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AllMeetingsComponent } from '../all-meetings/all-meetings.component';
import { UpcomingMeetingsComponent } from '../upcoming-meetings/upcoming-meetings.component';
// import { PastMeetingsComponent } from '../past-meetings/past-meetings.component';
import { TabComponent } from '../../shared/components/tab/tab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AllMeetingsComponent,
    UpcomingMeetingsComponent,
    // PastMeetingsComponent,
    TabComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  tabsList = ['All Meetings', 'Upcoming Meetings', 'Past Meetings'];
  activeTab = this.tabsList[0];

  private routeSub!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.routeSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveTabFromRoute();
      });

    // Also check the tab on component init
    this.setActiveTabFromRoute();
  }

  setActiveTabFromRoute() {
    const tabFromRoute = this.route.snapshot.queryParamMap.get('tab');
  
    if (tabFromRoute) {
      const matchedTab = this.tabsList.find(
        tab => tab.toLowerCase() === tabFromRoute.toLowerCase().trim()
      );
  
      if (matchedTab) {
        this.activeTab = matchedTab;
      } else {
        this.activeTab = this.tabsList[0]; // Fallback if no match
      }
    } else {
      this.activeTab = this.tabsList[0];
    }
  }
  

  onTabChange(tab: string) {
    this.activeTab = tab;
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
