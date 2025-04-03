import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCalendarComponent } from './main-calender.component';

describe('MainCalenderComponent', () => {
  let component: MainCalendarComponent;
  let fixture: ComponentFixture<MainCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
