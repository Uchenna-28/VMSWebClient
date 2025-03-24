import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDashboardMeetingsComponent } from './employee-dashboard-meetings.component';

describe('EmployeeDashboardMeetingsComponent', () => {
  let component: EmployeeDashboardMeetingsComponent;
  let fixture: ComponentFixture<EmployeeDashboardMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDashboardMeetingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDashboardMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
