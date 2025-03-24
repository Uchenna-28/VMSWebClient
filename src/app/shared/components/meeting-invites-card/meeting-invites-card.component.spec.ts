import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingInvitesCardComponent } from './meeting-invites-card.component';

describe('MeetingInvitesCardComponent', () => {
  let component: MeetingInvitesCardComponent;
  let fixture: ComponentFixture<MeetingInvitesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingInvitesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingInvitesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
