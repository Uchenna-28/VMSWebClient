import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTodayMeetingComponent } from './admin-today-meeting.component';

describe('AdminTodayMeetingComponent', () => {
  let component: AdminTodayMeetingComponent;
  let fixture: ComponentFixture<AdminTodayMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTodayMeetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTodayMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
