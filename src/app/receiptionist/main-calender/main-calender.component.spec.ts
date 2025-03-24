import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCalenderComponent } from './main-calender.component';

describe('MainCalenderComponent', () => {
  let component: MainCalenderComponent;
  let fixture: ComponentFixture<MainCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
