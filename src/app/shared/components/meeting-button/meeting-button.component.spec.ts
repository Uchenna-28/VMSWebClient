import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingButtonComponent } from './meeting-button.component';

describe('MeetingButtonComponent', () => {
  let component: MeetingButtonComponent;
  let fixture: ComponentFixture<MeetingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
