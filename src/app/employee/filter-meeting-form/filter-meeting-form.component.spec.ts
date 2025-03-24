import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMeetingFormComponent } from './filter-meeting-form.component';

describe('FilterMeetingFormComponent', () => {
  let component: FilterMeetingFormComponent;
  let fixture: ComponentFixture<FilterMeetingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterMeetingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterMeetingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
