import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardTabComponent } from '../admin-dashboard-tab/admin-dashboard-tab.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    CommonModule,
    AdminDashboardTabComponent,
    CardComponent,
    EditProfileComponent,
    ModalComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  isEditProfileModalOpen = false;
  profileImage: string = 'assets/svgimages/receptionist.svg'; 
  summaryCards = [
    { imageSrc: '/assets/svgimages/calendar1.svg', title: 'Total No. of Meetings', value: '63', subtitle: 'Total meeting this month' },
    { imageSrc: '/assets/svgimages/endtime.svg', title: 'No. of Past Meetings', value: '32', subtitle: 'Past meetings completed this month' },
    { imageSrc: '/assets/svgimages/meetingroom.svg', title: 'Most Frequently Used Meeting Room', value: 'Board Room', subtitle: 'Your go-to meeting spot this month' },
    { imageSrc: '/assets/svgimages/durationred.svg', title: 'Average Meeting Duration', value: '32 mins', subtitle: 'Average meeting minutes this month' },
    { imageSrc: '/assets/svgimages/usercheckred.svg', title: 'Meeting Attendance Rate', value: '70%', subtitle: 'Participation rate this month' },
    { imageSrc: '/assets/svgimages/clockred.svg', title: 'Peak Meeting Time', value: '1:30 pm', subtitle: 'Busiest hour for meetings this month' }
  ];

  onButtonEditClick() {
    this.isEditProfileModalOpen = true;
  }

  closeEditProfileModal() {
    this.isEditProfileModalOpen = false;
  }

  updateProfile(updatedData: any) {
    console.log('Profile Updated:', updatedData);
  }
}
