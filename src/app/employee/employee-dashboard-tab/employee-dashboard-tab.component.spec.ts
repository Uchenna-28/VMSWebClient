import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDashboardTabComponent } from './employee-dashboard-tab.component';

describe('EmployeeDashboardTabComponent', () => {
  let component: EmployeeDashboardTabComponent;
  let fixture: ComponentFixture<EmployeeDashboardTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDashboardTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDashboardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
