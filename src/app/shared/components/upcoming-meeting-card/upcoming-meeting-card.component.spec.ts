import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMeetingCardComponent } from './upcoming-meeting-card.component';

describe('UpcomingMeetingCardComponent', () => {
  let component: UpcomingMeetingCardComponent;
  let fixture: ComponentFixture<UpcomingMeetingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingMeetingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingMeetingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
