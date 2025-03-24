import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptionistLayoutComponent } from './receiptionist-layout.component';

describe('ReceiptionistLayoutComponent', () => {
  let component: ReceiptionistLayoutComponent;
  let fixture: ComponentFixture<ReceiptionistLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptionistLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptionistLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
