import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVisitorsComponent } from './employee-visitors.component';

describe('EmployeeVisitorsComponent', () => {
  let component: EmployeeVisitorsComponent;
  let fixture: ComponentFixture<EmployeeVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeVisitorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
