import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeetingApprovalsComponent } from './admin-meeting-approvals.component';

describe('AdminMeetingApprovalsComponent', () => {
  let component: AdminMeetingApprovalsComponent;
  let fixture: ComponentFixture<AdminMeetingApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMeetingApprovalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMeetingApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
