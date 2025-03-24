import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptionistTotalMeetingsComponent } from './receiptionist-total-meetings.component';

describe('ReceiptionistTotalMeetingsComponent', () => {
  let component: ReceiptionistTotalMeetingsComponent;
  let fixture: ComponentFixture<ReceiptionistTotalMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptionistTotalMeetingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptionistTotalMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
