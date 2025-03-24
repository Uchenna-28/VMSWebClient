import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMeetingInvitesComponent } from './employee-meeting-invites.component';

describe('EmployeeMeetingInvitesComponent', () => {
  let component: EmployeeMeetingInvitesComponent;
  let fixture: ComponentFixture<EmployeeMeetingInvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeMeetingInvitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeMeetingInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
