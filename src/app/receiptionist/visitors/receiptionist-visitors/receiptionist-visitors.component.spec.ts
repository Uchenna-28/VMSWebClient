import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptionistVisitorsComponent } from './receiptionist-visitors.component';

describe('ReceiptionistVisitorsComponent', () => {
  let component: ReceiptionistVisitorsComponent;
  let fixture: ComponentFixture<ReceiptionistVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptionistVisitorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptionistVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
