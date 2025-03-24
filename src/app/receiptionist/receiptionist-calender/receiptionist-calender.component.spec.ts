import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptionistCalenderComponent } from './receiptionist-calender.component';

describe('ReceiptionistCalenderComponent', () => {
  let component: ReceiptionistCalenderComponent;
  let fixture: ComponentFixture<ReceiptionistCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptionistCalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptionistCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
