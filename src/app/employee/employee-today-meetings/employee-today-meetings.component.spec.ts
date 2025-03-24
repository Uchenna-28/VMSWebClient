import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTodayMeetingsComponent } from './employee-today-meetings.component';

describe('EmployeeTodayMeetingsComponent', () => {
  let component: EmployeeTodayMeetingsComponent;
  let fixture: ComponentFixture<EmployeeTodayMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeTodayMeetingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTodayMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
