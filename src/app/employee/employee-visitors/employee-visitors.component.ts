import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from '../../shared/components/search-input/search-input.component';
import { MeetingButtonComponent } from '../../shared/components/meeting-button/meeting-button.component';
import { FilterFormComponent } from '../../admin/filter-form/filter-form.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ViewVisitorDetailsComponent } from '../view-visitor-details/view-visitor-details.component';
import { EditVisitorComponent } from '../../admin/edit-visitor/edit-visitor.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { SelectComponent } from '../../shared/components/select/select.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-visitors',
  imports: [
      CommonModule,
        SearchInputComponent,
        MeetingButtonComponent,
        FilterFormComponent,
        ModalComponent,
        ViewVisitorDetailsComponent,
        EditVisitorComponent,
        TableComponent,
        ReactiveFormsModule,
        InputComponent,
        SelectComponent
      ],
  templateUrl: './employee-visitors.component.html',
  styleUrl: './employee-visitors.component.css'
})
export class EmployeeVisitorsComponent {
selectedRow: any = null;
  isModalOpen = false;
  isViewModalOpen = false;
  isEditModalOpen = false;
  isDeleteModalOpen = false;
  isFilterModalOpen = false;
  filteredVisitor: any[] = [];
  isEditProfileModalOpen = false; // ⬅️ Track edit modal state
  selectedVisitor: any = null;
  columns: string[] = [
    'FullName',
    'Email',
    'PhoneNumber',
    'Gender',
    'Branch',
    'Category',
  ];
  tableData = [
    {
      FullName: 'John Doe',
      Email: 'johndoe@verraki.com',
      PhoneNumber: '080912345678',
      Gender: 'Male',
      Branch: 'Ikoyi',
      Category: 'Visitor',
    },
    {
      FullName: 'John Doe',
      Email: 'johndoe@verraki.com',
      PhoneNumber: '080912345678',
      Gender: 'Male',
      Branch: 'Ikoyi',
      Category: 'Visitor',
    },
    {
      FullName: 'John Doe',
      Email: 'johndoe@verraki.com',
      PhoneNumber: '080912345678',
      Gender: 'Male',
      Branch: 'Ikoyi',
      Category: 'Visitor',
    },
  ];
  addEmployeeForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    branch: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    status: new FormControl('Active', Validators.required)
  });
  handleSearch(value: string) {
    console.log('Search Query:', value);
  }
  constructor() {
    this.filteredVisitor = [...this.tableData];
  }

  onRowAction(event: { row: any; action: string }) {
    if (event.action === 'view') {
      this.viewVisitor(event.row);
    }
  }
  closeAddModal(){
    this.isModalOpen = false;
  }
  viewVisitor(row: any) {
    this.selectedVisitor = [
      { icon: '📝', label: 'FullName', value: row['FullName'] },
      { icon: '📄', label: 'Email', value: row['Email'] },
      { icon: '📅', label: 'PhoneNumber', value: row['PhoneNumber'] },
      { icon: '⏰', label: 'Gender', value: row['Gender'] },
      { icon: '🏢', label: 'Branch', value: row['Branch'] },
      { icon: '📌', label: 'Category', value: row['Category'] },
    ];
    this.isViewModalOpen = true;
  }

  closeViewModal() {
    this.isViewModalOpen = false;
    this.selectedVisitor = null;
  }

  openEditModal(meeting: any) {
    this.selectedVisitor = meeting;
    console.log(this.selectedVisitor)
    this.isEditModalOpen = true;
  }
  editVisitorFromView(meeting: any) {
    this.isViewModalOpen = false; // ✅ Close View Modal
    this.selectedVisitor = meeting;
    this.isEditModalOpen = true; // ✅ Open Edit Modal
  }

  closeEditModal() {
    this.isEditModalOpen = false;
  }

  updateVisitor(updatedVisitor: any) {
    const index = this.tableData.findIndex(
      (visitor) => visitor.FullName === updatedVisitor.FullName
    );
    if (index !== -1) {
      this.tableData[index] = updatedVisitor;
      console.log('✅ Meeting Updated Successfully:', updatedVisitor);
    }
    this.closeEditModal();
  }
  openDeleteModal(meeting: any) {
    console.log(meeting);
    this.selectedVisitor = meeting;
    this.isDeleteModalOpen = true; // ✅ Open Delete Confirmation Modal
  }
  confirmDelete() {
    if (!this.selectedVisitor) return;

    // Remove meeting from tableData
    this.tableData = this.tableData.filter(
      (visitor) => visitor !== this.selectedVisitor
    );

    // ✅ Update local storage (if needed)
    localStorage.setItem('meetings', JSON.stringify(this.tableData));

    console.log('✅ Meeting Deleted:', this.selectedVisitor);

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

    this.filteredVisitor = this.tableData.filter((meeting) => {
      let matches = true;

      // if (date && meeting.Date !== date) matches = false;
      // if (startTime && meeting.Time < startTime) matches = false;
      // if (endTime && meeting.Time > endTime) matches = false;
      // if (room && meeting.Room !== room) matches = false;

      return matches;
    });

    if (sortByDate) {
      // this.filteredMeetings.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());
    }

    this.isFilterModalOpen = false;
  }

  resetFilters() {
    // this.filteredMeetings = [...this.tableData];
  }
  genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }
  ];
  roleOptions = [
    { label: 'employee', value: 'employee' },
    { label: 'visitor', value: 'visitor' }
  ];
  branchOptions = [
    { label: 'Lagos Branch', value: 'Lagos Branch' },
    { label: 'Abuja Branch', value: 'Abuja Branch' }
  ];
  categoryOptions = [
    { label: 'Staff', value: 'Staff' },
    { label: 'Admin', value: 'Admin' }
  ];
  onButtonClick() {
    this.isModalOpen = true;
  }

  submitNewEmployee() {
    // Retrieve existing employees from local storage
    const storedEmployees = localStorage.getItem('employees');
    let employees = storedEmployees ? JSON.parse(storedEmployees) : [];
  
    // Get values from the form
    const formValues = this.addEmployeeForm.value;
    const newEmployee = {
      'Full Name': formValues.fullName, // Ensure correct field mapping
      'Email': formValues.email,
      'Phone Number': formValues.phone,
      'Gender': formValues.gender,
      'Branch': formValues.branch,
      'Last Login': 'N/A', // Set default for now
      'Status': 'Active',
    };
  
    // ✅ Add new employee to the array
    employees.push(newEmployee);
  
    // ✅ Save updated employees list to local storage
    localStorage.setItem('employees', JSON.stringify(employees));
  
    // ✅ Update tableData to reflect new employee
    this.tableData = employees;
  
    console.log('✅ New Employee Created and Saved:', newEmployee);
  
    // ✅ Close the Add Modal
    this.closeAddModal();
  }
}
