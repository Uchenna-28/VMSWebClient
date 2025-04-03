import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingInvitesCardComponent } from '../../shared/components/meeting-invites-card/meeting-invites-card.component';
import { MeetingInviteDetailsComponent } from '../meeting-invite-details/meeting-invite-details.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-employee-meeting-invites',
  imports: [MeetingInvitesCardComponent,ModalComponent,MeetingInviteDetailsComponent, CommonModule],
  templateUrl: './employee-meeting-invites.component.html',
  styleUrl: './employee-meeting-invites.component.css'
})
export class EmployeeMeetingInvitesComponent {
  selectedRow: any = [];
  isViewModalOpen = false;
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
    },
  ];
  trackByFn(index: number, item: any): any {
    return item.title; // Or any unique identifier
  }
  
  openMeetingDetails(meeting: any) {
    this.selectedRow = [
      { icon: 'assets/svgimages/pen.svg', label: 'Title', value: meeting.title },
      { icon: 'assets/svgimages/list.svg', label: 'Agenda', value: meeting.agenda || 'No agenda specified' },
      { icon: 'assets/svgimages/calendar.svg', label: 'Date', value: meeting.date },
      { icon: 'assets/svgimages/clock.svg', label: 'Time', value: meeting.time },
      { icon: 'assets/svgimages/meeting room.svg', label: 'Room', value: meeting.location },
      { icon: 'assets/svgimages/user.svg', label: 'Organizer', value: meeting.organizer?.name || 'Unknown' },
      {
        icon: 'assets/svgimages/participants.svg',
        label: 'Participants',
        value: meeting.participants.map((p: any) => p.name).join(', ') || 'No participants'
      }
    ];
    this.isViewModalOpen = true;
  }
}
