import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TableComponent } from '../../shared/components/table/table.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { SearchInputComponent } from '../../shared/components/search-input/search-input.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ViewModalComponent } from '../../shared/components/view-modal/view-modal.component';
import { MeetingButtonComponent } from '../../shared/components/meeting-button/meeting-button.component';
import { DateTimeInputComponent } from '../../shared/components/date-time-input/date-time-input.component';
import { SelectComponent } from '../../shared/components/select/select.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { ImageComponent } from '../../shared/components/image/image.component';
import { FilterMeetingFormComponent } from '../filter-meeting-form/filter-meeting-form.component';
@Component({
  selector: 'app-employee-today-meetings',
  imports: [
    TableComponent,
    InputComponent,
    SearchInputComponent,
    ModalComponent,
    ViewModalComponent,
    MeetingButtonComponent,
    ReactiveFormsModule,
    DateTimeInputComponent,
    SelectComponent,
    TextareaComponent,
    ImageComponent,
    FilterMeetingFormComponent
  ],
  templateUrl: './employee-today-meetings.component.html',
  styleUrl: './employee-today-meetings.component.css'
})
export class EmployeeTodayMeetingsComponent {
  isAddMeetingModalOpen = false;
  isEditModalOpen = false;
  isModalViewOpen = false;
  selectedRow: any = null;
  isFilterModalOpen = false;
  meetingRoomsOptions = [{ label: 'Board Room', value: 'Board Room' }];
  scheduleMeetingForm = new FormGroup({
    title: new FormControl('', Validators.required),
    agenda: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    meetingRoom: new FormControl('', Validators.required),
    participants: new FormControl([], Validators.required),
  });

  editMeetingForm = new FormGroup({
    title: new FormControl('', Validators.required),
    agenda: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    meetingRoom: new FormControl('', Validators.required),
    participants: new FormControl([], Validators.required),
  });

  columns: string[] = [
    'Title',
    'Agenda',
    'Date',
    'Time',
    'Room',
    'Category',
    'Organizer',
    'Participants'
  ];

  summaryCards = [
    {
      icon: 'icon-clock',
      title: 'Total Meetings Today',
      value: '63',
      subtitle: 'Meetings scheduled',
    },
    {
      icon: 'icon-location',
      title: 'Ongoing Meetings',
      value: '32',
      subtitle: 'Active meetings now',
    },
    {
      icon: 'icon-timer',
      title: 'Most Used Meeting Room',
      value: '13',
      subtitle: 'Most used spot',
    },
  ];

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
      ]
    },
    // Add more rows as needed
  ];

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

  handleSearch(value: string) {
    console.log('Search Query:', value);
  }

  onRowAction(event: { row: any; action: string }) {
    switch (event.action) {
      case 'view':
        this.viewMeeting(event.row);
        break;
      // case 'edit':
      //   this.editMeeting(event.row);
      //   break;
      case 'delete':
        this.deleteMeeting(event.row);
        break;
      default:
        console.warn('No action defined for:', event.row);
    }
  }

  viewMeeting(row: any) {
    this.selectedRow = [
      { icon: '/assets/svgimages/pen.svg', label: 'Title', value: row['Title'] },
      { icon: 'assets/svgimages/list.svg', label: 'Agenda', value: row['Agenda'] },
      { icon: 'assets/svgimages/calendar.svg', label: 'Date', value: row['Date'] },
      { icon: 'assets/svgimages/clock.svg', label: 'Time', value: row['Time'] },
      { icon: 'assets/svgimages/meeting room.svg', label: 'Room', value: row['Room'] },
      { icon: 'assets/svgimages/user.svg', label: 'Organizer', value: row['Organizer'].name },
      {
        icon: 'assets/svgimages/participants.svg',
        label: 'Participants',
        value: row['Participants'].map((p: any) => p.name).join(', '),
      },
    ];
    this.isModalViewOpen = true;
  }

  closeViewModal() {
    this.isModalViewOpen = false;
  }
  openFilterModal() {
    this.isFilterModalOpen = true;
  }

  closeFilterModal() {
    this.isFilterModalOpen = false;
  }
  handleEditFromView() {
    this.closeViewModal();
    this.openEditModal(this.selectedRow);
  }
  onButtonClick() {
    this.scheduleMeetingForm.reset();
    this.isAddMeetingModalOpen = true;
  }
  openEditModal(row: any) {
    this.editMeetingForm.patchValue({
      title: row['Title'],
      agenda: row['Agenda'],
      startDate: row['Date'],
      startTime: row['Start Time'],
      endTime: row['End Time'],
      meetingRoom: row['Room'],
      participants: row['Participants'],
    });
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
  }

  submitEdit() {
    if (this.editMeetingForm.valid) {
      console.log('Updated Meeting:', this.editMeetingForm.value);
      this.closeEditModal();
      // Optional: Update the tableData with edited meeting here
    }
  }

  deleteMeeting(row: any) {
    console.log('Deleting meeting:', row);
    // Optional: remove from tableData here
  }
  
}
