import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDeclineModalComponent } from './accept-decline-modal.component';

describe('AcceptDeclineModalComponent', () => {
  let component: AcceptDeclineModalComponent;
  let fixture: ComponentFixture<AcceptDeclineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptDeclineModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptDeclineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
