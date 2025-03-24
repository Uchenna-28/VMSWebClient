import { Component } from '@angular/core';
import { SearchInputComponent } from '../../../shared/components/search-input/search-input.component';
import { MeetingButtonComponent } from '../../../shared/components/meeting-button/meeting-button.component';
import { TableComponent } from '../../../shared/components/table/table.component';
import { ViewMeetingDetailsComponent } from '../view-meeting-details/view-meeting-details.component';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { EditMeetingComponent } from '../edit-meeting/edit-meeting.component';
import { FilterFormComponent } from '../filter-form/filter-form.component';
import { ImageComponent } from '../../../shared/components/image/image.component';
@Component({
  selector: 'app-receiptionist-total-meetings',
  imports: [
    SearchInputComponent,
    MeetingButtonComponent,
    TableComponent,
    ViewMeetingDetailsComponent,
    ModalComponent,
    EditMeetingComponent,
    FilterFormComponent,
    ImageComponent
  ],
  templateUrl: './receiptionist-total-meetings.component.html',
  styleUrl: './receiptionist-total-meetings.component.css',
})
export class ReceiptionistTotalMeetingsComponent {
  selectedRow: any = null;
  isViewModalOpen = false;
  isEditModalOpen = false;
  isDeleteModalOpen = false;
  isFilterModalOpen = false;
  filteredMeetings: any[] = [];
  isEditProfileModalOpen = false; // ⬅️ Track edit modal state
  selectedMeeting: any = null;
  columns: string[] = [
    'Title',
    'Agenda',
    'Date',
    'Time',
    'Room',
    'Category',
    'Organizer',
    'Participants',
  ];
  handleSearch(value: string) {
    console.log('Search Query:', value);
  }
  constructor() {
    this.filteredMeetings = [...this.tableData];
  }
  tableData = [
    {
      Title: 'Quarterly Sales Planning',
      Agenda: 'Discuss departmental achievements and set objectives for Q2.',
      Date: 'Jan 12, 2025',
      Time: '2:00 PM',
      Room: 'Board Room',
      Category: 'Approved',
      Organizer: { initials: 'JD', name: 'John Doe' },
      Participants: [
        { initials: 'JD', name: 'John Doe' },
        { initials: 'JS', name: 'Jane Smith' },
        { initials: 'SI', name: 'Sam Idowu' },
      ],
    },
    // Add more rows as needed
  ];

  onRowAction(event: { row: any; action: string }) {
    if (event.action === 'view') {
      this.viewMeeting(event.row);
    }
  }
  
  viewMeeting(row: any) {
    this.selectedMeeting = [
      { icon: '/assets/images/pen.png', label: 'Title', value: row['Title'] },
      { icon: '/assets/images/list.png', label: 'Agenda', value: row['Agenda'] },
      { icon: '/assets/images/calendar.png', label: 'Date', value: row['Date'] },
      { icon: '/assets/images/clock.png', label: 'Time', value: row['Time'] },
      { icon: '/assets/images/meeting room.png', label: 'Room', value: row['Room'] },
      { icon: '/assets/images/user.png', label: 'Organizer', value: row['Organizer'].name },
      {
        icon: '/assets/images/participants.png',
        label: 'Participants',
        value: row['Participants'].map((p: any) => p.name).join(', '),
      },
    ];
    this.isViewModalOpen = true;
  }
  

  closeViewModal() {
    this.isViewModalOpen = false;
    this.selectedMeeting = null;
  }

  openEditModal(meeting: any) {
    this.selectedMeeting = meeting;
    this.isEditModalOpen = true;
  }
  editMeetingFromView(meeting: any) {
    this.isViewModalOpen = false;  // ✅ Close View Modal
    this.selectedMeeting = meeting;
    this.isEditModalOpen = true;   // ✅ Open Edit Modal
  }
  
  closeEditModal() {
    this.isEditModalOpen = false;
  }
  // Open Edit Profile Modal from View Details
  // editMeetingFromView(meeting: any) {
  //   this.selectedMeeting = meeting;
  //   this.isEditProfileModalOpen = true;
  // }

  updateMeeting(updatedMeeting: any) {
    const index = this.tableData.findIndex(meeting => meeting.Title === updatedMeeting.Title);
    if (index !== -1) {
      this.tableData[index] = updatedMeeting;
      console.log("✅ Meeting Updated Successfully:", updatedMeeting);
    }
    this.closeEditModal();
  }
  openDeleteModal(meeting: any) {
    this.selectedMeeting = meeting;
    this.isDeleteModalOpen = true;  // ✅ Open Delete Confirmation Modal
  }
  confirmDelete() {
    if (!this.selectedMeeting) return;

    // Remove meeting from tableData
    this.tableData = this.tableData.filter(meeting => meeting !== this.selectedMeeting);

    // ✅ Update local storage (if needed)
    localStorage.setItem('meetings', JSON.stringify(this.tableData));

    console.log('✅ Meeting Deleted:', this.selectedMeeting);

    // Close both modals
    this.isDeleteModalOpen = false;
    this.isViewModalOpen = false;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
  }

  openFilterModal() {
    this.isFilterModalOpen = true;
  }

  closeFilterModal() {
    this.isFilterModalOpen = false;
  }

  applyFilters(filterValues: any) {
    const { date, startTime, endTime, room, sortByDate } = filterValues;

    this.filteredMeetings = this.tableData.filter(meeting => {
      let matches = true;

      if (date && meeting.Date !== date) matches = false;
      if (startTime && meeting.Time < startTime) matches = false;
      if (endTime && meeting.Time > endTime) matches = false;
      if (room && meeting.Room !== room) matches = false;

      return matches;
    });

    if (sortByDate) {
      this.filteredMeetings.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());
    }

    this.isFilterModalOpen = false;
  }

  resetFilters() {
    this.filteredMeetings = [...this.tableData];
  }
}
