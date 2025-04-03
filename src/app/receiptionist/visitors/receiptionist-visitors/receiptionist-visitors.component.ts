import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { WebcamModule } from 'ngx-webcam';
import { WebcamImage, WebcamUtil } from 'ngx-webcam';
import { SearchInputComponent } from '../../../shared/components/search-input/search-input.component';
import { MeetingButtonComponent } from '../../../shared/components/meeting-button/meeting-button.component';
import { FilterFormComponent } from '../filter-form/filter-form.component';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ViewVisitorDetailsComponent } from '../view-visitor-details/view-visitor-details.component';
import { EditVisitorComponent } from '../edit-visitor/edit-visitor.component';
import { TableComponent } from '../../../shared/components/table/table.component';
@Component({
  selector: 'app-receiptionist-visitors',
  imports: [
    SearchInputComponent,
    MeetingButtonComponent,
    FilterFormComponent,
    ModalComponent,
    ViewVisitorDetailsComponent,
    EditVisitorComponent,
    TableComponent,
    WebcamModule,
    CommonModule
  ],
  templateUrl: './receiptionist-visitors.component.html',
  styleUrl: './receiptionist-visitors.component.css',
})
export class ReceiptionistVisitorsComponent {
  isPrintBadgeModalOpen = false;
  isSelfieModalOpen = false;
  capturedImage: string | null = null; 
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage | null = null;
    public showWebcam = true;
    public multipleWebcamsAvailable = false;
  selectedRow: any = null;
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
  handleSearch(value: string) {
    console.log('Search Query:', value);
  }
  constructor() {
    WebcamUtil.getAvailableVideoInputs().then((mediaDevices) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
    this.filteredVisitor = [...this.tableData];
  }

  onRowAction(event: { row: any; action: string }) {
    if (event.action === 'view') {
      this.viewVisitor(event.row);
    }
  }
  triggerSnapshot() {
    if (this.capturedImage) {
      // ✅ If already captured, retake the image
      this.capturedImage = null;
      this.showWebcam = true;
    } else {
      // ✅ Capture the image
      this.trigger.next();
    }
  }

  captureAndOpenPrintBadge(): void {
    this.trigger.next(); // Trigger the webcam to take a snapshot
    setTimeout(() => {
      if (this.capturedImage) {
        console.log("Captured Image", this.capturedImage);
        this.isSelfieModalOpen = false;
        this.isPrintBadgeModalOpen = true;
      }
    }, 500); // Small delay to ensure image is captured
  }

  handleImage(image: WebcamImage): void {
    this.capturedImage = image.imageAsDataUrl;
    console.log("Captured Image", this.capturedImage);
  }

  closeSelfieModal(): void {
    this.isSelfieModalOpen = false;
    this.capturedImage = null;
  }
  viewVisitor(row: any) {
    this.selectedVisitor = [
      { icon: '/assets/svgimages/pen.svg', label: 'FullName', value: row['FullName'] },
      { icon: '/assets/svgimages/Email.svg', label: 'Email', value: row['Email'] },
      { icon: '/assets/svgimages/phone.svg', label: 'PhoneNumber', value: row['PhoneNumber'] },
      { icon: '/assets/svgimages/user.svg', label: 'Gender', value: row['Gender'] },
      { icon: '/assets/svgimages/job title.svg', label: 'Branch', value: row['Branch'] },
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
  retakeImage(): void {
    this.capturedImage = null; // ✅ Clear previous image
    this.webcamImage = null; // ✅ Clear webcam image reference
    this.showWebcam = false; // ✅ Force webcam reset
    this.isPrintBadgeModalOpen = false;
  
    // ✅ Small timeout to ensure webcam resets properly
    setTimeout(() => {
      this.showWebcam = true;
      this.isSelfieModalOpen = true;
    }, 50);
  }
  openBadgeModal(meeting: any) {
    console.log(meeting);
    this.selectedVisitor = meeting;
    this.isPrintBadgeModalOpen = true; // ✅ Open Delete Confirmation Modal
  }
  closePrintBadgeModal(): void {
    this.isPrintBadgeModalOpen = false;
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

  
  
  printBadge(){

  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
