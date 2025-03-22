import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMeetingDetailsComponent } from './view-meeting-details.component';

describe('ViewMeetingDetailsComponent', () => {
  let component: ViewMeetingDetailsComponent;
  let fixture: ComponentFixture<ViewMeetingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMeetingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMeetingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
