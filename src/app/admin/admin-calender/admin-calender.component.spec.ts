import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCalenderComponent } from './admin-calender.component';

describe('AdminCalenderComponent', () => {
  let component: AdminCalenderComponent;
  let fixture: ComponentFixture<AdminCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
