import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMeetingApprovalComponent } from './employee-meeting-approval.component';

describe('EmployeeMeetingApprovalComponent', () => {
  let component: EmployeeMeetingApprovalComponent;
  let fixture: ComponentFixture<EmployeeMeetingApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeMeetingApprovalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeMeetingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
