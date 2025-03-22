import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeetingRoomsComponent } from './admin-meeting-rooms.component';

describe('AdminMeetingRoomsComponent', () => {
  let component: AdminMeetingRoomsComponent;
  let fixture: ComponentFixture<AdminMeetingRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMeetingRoomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMeetingRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
