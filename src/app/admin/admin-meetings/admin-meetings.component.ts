import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MeetingButtonComponent } from '../../shared/components/meeting-button/meeting-button.component';
import { SearchInputComponent } from '../../shared/components/search-input/search-input.component';
import { MeetingCardComponent } from '../../shared/components/meeting-card/meeting-card.component';
import { UpcomingMeetingCardComponent } from '../../shared/components/upcoming-meeting-card/upcoming-meeting-card.component';
import { Router, NavigationEnd } from '@angular/router';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { DateTimeInputComponent } from '../../shared/components/date-time-input/date-time-input.component';
import { SelectComponent } from '../../shared/components/select/select.component';
@Component({
  selector: 'app-admin-meetings',
  imports: [
    MeetingButtonComponent,
    SearchInputComponent,
    MeetingCardComponent,
    CommonModule,
    UpcomingMeetingCardComponent,
    ReactiveFormsModule,
    ModalComponent,
    InputComponent,
    TextareaComponent,
    DateTimeInputComponent,
    SelectComponent
  ],
  templateUrl: './admin-meetings.component.html',
  styleUrl: './admin-meetings.component.css',
})
export class AdminMeetingsComponent implements AfterViewInit {
  @ViewChild('meetingsList') meetingsList!: ElementRef;
  constructor(private router: Router) {}
  isAddMeetingModalOpen = false;
  meetingRoomsOptions = [{ label: 'Board Room', value: 'Board Room' }];
  meetings = [
    {
      title: 'Team Strategy Review',
      date: 'Jan 10, 2025',
      time: '10:00 AM - 11:00 AM',
      participants: 5,
      location: 'Board Room',
    },
    {
      title: 'Team Strategy Review',
      date: 'Jan 10, 2025',
      time: '10:00 AM - 11:00 AM',
      participants: 5,
      location: 'Board Room',
    },
    {
      title: 'Team Strategy Review',
      date: 'Jan 10, 2025',
      time: '10:00 AM - 11:00 AM',
      participants: 5,
      location: 'Board Room',
    },
    {
      title: 'Team Strategy Review',
      date: 'Jan 10, 2025',
      time: '10:00 AM - 11:00 AM',
      participants: 5,
      location: 'Board Room',
    },
    {
      title: 'Team Strategy Review',
      date: 'Jan 10, 2025',
      time: '10:00 AM - 11:00 AM',
      participants: 5,
      location: 'Board Room',
    },
    {
      title: 'Team Strategy Review',
      date: 'Jan 10, 2025',
      time: '10:00 AM - 11:00 AM',
      participants: 5,
      location: 'Board Room',
    },
  ];
  upcomingmeetings = [
    {
      title: 'Quarterly Sales Planning',
      date: 'Jan 12, 2025',
      time: '2:00 PM - 3:30 PM',
      location: 'Board Room',
      participants: [
        { name: 'John Doe', initials: 'JD' },
        { name: 'Jane Smith', initials: 'JS' },
        { name: 'Sam Idowu', initials: 'SI' },
        { name: 'Tunde Bello', initials: 'TB' },
        { name: 'Mark Twain', initials: 'MT' },
        { name: 'Linda Oke', initials: 'LO' }
      ]
    },
    {
      title: 'Quarterly Sales Planning',
      date: 'Jan 12, 2025',
      time: '2:00 PM - 3:30 PM',
      location: 'Board Room',
      participants: [
        { name: 'John Doe', initials: 'JD' },
        { name: 'Jane Smith', initials: 'JS' },
        { name: 'Sam Idowu', initials: 'SI' },
        { name: 'Tunde Bello', initials: 'TB' },
        { name: 'Mark Twain', initials: 'MT' },
        { name: 'Linda Oke', initials: 'LO' }
      ]
    }
  ];
  scheduleMeetingForm = new FormGroup({
        title: new FormControl('', Validators.required),
        agenda: new FormControl('', Validators.required),
        startDate: new FormControl('', Validators.required),
        startTime: new FormControl('', Validators.required),
        endTime: new FormControl('', Validators.required),
        meetingRoom: new FormControl('', Validators.required),
        participants: new FormControl([], Validators.required),
      });
  handleSearch(value: string) {
    console.log('Search Query:', value);
  }

  // onRedirectToUpcomingM() {
  //   // this.addBranchForm.reset();
  //   // this.isAddBranchModalOpen = true;
  // }

  navigateToHomeTab(tab: string) {
    this.router.navigate(['/admin/layout/home'], { queryParams: { tab } });
  }
  
  isDown = false;
  startX = 0;
  scrollLeft = 0;
  startY = 0;

  ngAfterViewInit() {
    const slider = this.meetingsList.nativeElement;

    slider.addEventListener('mousedown', (e: MouseEvent) => {
      this.isDown = true;
      slider.classList.add('active');
      this.startX = e.pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      this.isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      this.isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - this.startX) * 2; // Speed factor
      slider.scrollLeft = this.scrollLeft - walk;
    });
  }
  onButtonClick() {
    this.scheduleMeetingForm.reset();
    this.isAddMeetingModalOpen = true;
  }
  onScheduleMeeting() {
    this.scheduleMeetingForm.reset();
    this.isAddMeetingModalOpen = true;
  }
  closeAddMeetingModal() {
    this.isAddMeetingModalOpen = false;
  }
  submitMeeting() {
    if (this.scheduleMeetingForm.valid) {
      const newMeeting = this.scheduleMeetingForm.value;
      console.log('New Meeting:', newMeeting);

      // Optional: Add to tableData here
      // this.tableData.push(newMeeting);

      this.closeAddMeetingModal();
    }
  }
}
