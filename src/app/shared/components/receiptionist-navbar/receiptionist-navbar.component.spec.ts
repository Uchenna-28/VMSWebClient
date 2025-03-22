import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptionistNavbarComponent } from './receiptionist-navbar.component';

describe('ReceiptionistNavbarComponent', () => {
  let component: ReceiptionistNavbarComponent;
  let fixture: ComponentFixture<ReceiptionistNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptionistNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptionistNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
