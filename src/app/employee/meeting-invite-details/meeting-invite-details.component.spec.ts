import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingInviteDetailsComponent } from './meeting-invite-details.component';

describe('MeetingInviteDetailsComponent', () => {
  let component: MeetingInviteDetailsComponent;
  let fixture: ComponentFixture<MeetingInviteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingInviteDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingInviteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
