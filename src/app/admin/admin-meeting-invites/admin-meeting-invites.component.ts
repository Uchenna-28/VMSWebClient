import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingInvitesCardComponent } from '../../shared/components/meeting-invites-card/meeting-invites-card.component';
@Component({
  selector: 'app-admin-meeting-invites',
  imports: [MeetingInvitesCardComponent, CommonModule],
  templateUrl: './admin-meeting-invites.component.html',
  styleUrl: './admin-meeting-invites.component.css'
})
export class AdminMeetingInvitesComponent {
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
}
