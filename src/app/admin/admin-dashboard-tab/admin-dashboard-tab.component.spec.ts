import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardTabComponent } from './admin-dashboard-tab.component';

describe('AdminDashboardTabComponent', () => {
  let component: AdminDashboardTabComponent;
  let fixture: ComponentFixture<AdminDashboardTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboardTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
