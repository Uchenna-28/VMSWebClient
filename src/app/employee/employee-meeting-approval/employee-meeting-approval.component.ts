import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingInvitesCardComponent } from '../../shared/components/meeting-invites-card/meeting-invites-card.component';

@Component({
  selector: 'app-employee-meeting-approval',
  imports: [CommonModule,MeetingInvitesCardComponent],
  templateUrl: './employee-meeting-approval.component.html',
  styleUrl: './employee-meeting-approval.component.css'
})
export class EmployeeMeetingApprovalComponent {
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
    
  ];

  openMeetingDetails(meeting: any) {
    this.selectedRow = [
      { icon: 'assets/images/pen.png', label: 'Title', value: meeting.title },
      { icon: 'assets/images/list.png', label: 'Agenda', value: meeting.agenda || 'No agenda specified' },
      { icon: 'assets/images/calendar.png', label: 'Date', value: meeting.date },
      { icon: 'assets/images/clock.png', label: 'Time', value: meeting.time },
      { icon: 'assets/images/meeting room.png', label: 'Room', value: meeting.location },
      { icon: 'assets/images/user.png', label: 'Organizer', value: meeting.organizer?.name || 'Unknown' },
      {
        icon: 'assets/images/participants.png',
        label: 'Participants',
        value: meeting.participants.map((p: any) => p.name).join(', ') || 'No participants'
      }
    ];
    this.isViewModalOpen = true;
  }
}
