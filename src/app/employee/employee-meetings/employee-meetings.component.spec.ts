import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMeetingsComponent } from './employee-meetings.component';

describe('EmployeeMeetingsComponent', () => {
  let component: EmployeeMeetingsComponent;
  let fixture: ComponentFixture<EmployeeMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeMeetingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
