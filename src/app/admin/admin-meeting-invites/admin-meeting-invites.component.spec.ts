import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeetingInvitesComponent } from './admin-meeting-invites.component';

describe('AdminMeetingInvitesComponent', () => {
  let component: AdminMeetingInvitesComponent;
  let fixture: ComponentFixture<AdminMeetingInvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMeetingInvitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMeetingInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
