import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptionistDashboardTabComponent } from './receiptionist-dashboard-tab.component';

describe('ReceiptionistDashboardTabComponent', () => {
  let component: ReceiptionistDashboardTabComponent;
  let fixture: ComponentFixture<ReceiptionistDashboardTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptionistDashboardTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptionistDashboardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
