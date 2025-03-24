import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptionistDashboardComponent } from './receiptionist-dashboard.component';

describe('ReceiptionistDashboardComponent', () => {
  let component: ReceiptionistDashboardComponent;
  let fixture: ComponentFixture<ReceiptionistDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptionistDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptionistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
