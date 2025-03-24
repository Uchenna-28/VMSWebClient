import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardMeetingComponent } from './admin-dashboard-meeting.component';

describe('AdminDashboardMeetingComponent', () => {
  let component: AdminDashboardMeetingComponent;
  let fixture: ComponentFixture<AdminDashboardMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboardMeetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
