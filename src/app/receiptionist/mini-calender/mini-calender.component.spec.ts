import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCalenderComponent } from './mini-calender.component';

describe('MiniCalenderComponent', () => {
  let component: MiniCalenderComponent;
  let fixture: ComponentFixture<MiniCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniCalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
