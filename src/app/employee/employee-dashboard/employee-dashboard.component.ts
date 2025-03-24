import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardTabComponent } from '../employee-dashboard-tab/employee-dashboard-tab.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
// import { ImageComponent } from '../../shared/components/image/image.component';

@Component({
  selector: 'app-employee-dashboard',
  imports: [CardComponent, CommonModule, EmployeeDashboardTabComponent,ModalComponent,EditProfileComponent],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent {
  isEditProfileModalOpen = false;
  profileImage: string = 'assets/images/webImage.png'; 
  summaryCards = [
    { imageSrc: '/assets/IconImages/calendar.png', title: 'Total No. of Meetings', value: '63', subtitle: 'Total meeting this month' },
    { imageSrc: '/assets/IconImages/Past meetings.png', title: 'No. of Past Meetings', value: '32', subtitle: 'Past meetings completed this month' },
    { imageSrc: '/assets/IconImages/meeting room.png', title: 'Most Frequently Used Meeting Room', value: 'Board Room', subtitle: 'Your go-to meeting spot this month' },
    { imageSrc: '/assets/IconImages/duration.png', title: 'Average Meeting Duration', value: '32 mins', subtitle: 'Average meeting minutes this month' },
    { imageSrc: '/assets/IconImages/user check-in.png', title: 'Meeting Attendance Rate', value: '70%', subtitle: 'Participation rate this month' },
    { imageSrc: '/assets/IconImages/clock.png', title: 'Peak Meeting Time', value: '1:30 pm', subtitle: 'Busiest hour for meetings this month' }
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
