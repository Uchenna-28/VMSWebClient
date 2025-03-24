import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMeetingRoomsComponent } from './employee-meeting-rooms.component';

describe('EmployeeMeetingRoomsComponent', () => {
  let component: EmployeeMeetingRoomsComponent;
  let fixture: ComponentFixture<EmployeeMeetingRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeMeetingRoomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeMeetingRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
