import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject, Observable } from 'rxjs';
import { WebcamModule } from 'ngx-webcam';
import { WebcamImage, WebcamUtil } from 'ngx-webcam';
import { CardComponent } from '../../../shared/components/card/card.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { MeetingButtonComponent } from '../../../shared/components/meeting-button/meeting-button.component';
import { ReceiptionistDashboardTabComponent } from '../../receiptionist-dashboard-tab/receiptionist-dashboard-tab.component';
import { SvgIconComponent } from '../../../shared/svg-icon/svg-icon.component';
import { CheckboxComponent } from '../../../shared/components/checkbox/checkbox.component';
// import { ImageComponent } from '../../../shared/components/image/image.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { ImageComponent } from '../../../shared/components/image/image.component';
@Component({
  selector: 'app-receiptionist-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ReceiptionistDashboardTabComponent,
    ReactiveFormsModule,
    InputComponent,
    MeetingButtonComponent,
    ModalComponent,
    WebcamModule,
    SvgIconComponent,
    CheckboxComponent,
    ImageComponent,
    EditProfileComponent
  ],
  templateUrl: './receiptionist-dashboard.component.html',
  styleUrl: './receiptionist-dashboard.component.css',
})
export class ReceiptionistDashboardComponent {
  isAddMeetingModalOpen = false;
  isConfirmModalOpen = false;
  isSelfieModalOpen = false;
  isPrintBadgeModalOpen = false;
  profileImage: string = 'assets/images/webImage.png'; 
  capturedImage: string | null = null; // Store captured image
  imagePath = 'assets/images/save.png';
  isEditProfileModalOpen = false;
  // Webcam properties
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage | null = null;
  public showWebcam = true;
  public multipleWebcamsAvailable = false;
  summaryCards = [
    {
      imageSrc: 'assets/IconImages/calendar.png',
      title: 'Total Meetings Today',
      value: '63',
      subtitle: 'Total meetings this month',
    },
    {
      imageSrc: 'assets/IconImages/end time.png',
      title: 'No. of Approved meetings',
      value: '32',
      subtitle: 'Total approved meetings this month',
    },
    {
      imageSrc: 'assets/IconImages/participants 3.png',
      title: 'Total No. of Visitors',
      value: '13',
      subtitle: 'Total visitors this month',
    },
    {
      imageSrc: 'assets/IconImages/meeting room.png',
      title: 'No. of Declined Meetings',
      value: '63',
      subtitle: 'Total declined meeting this month',
    },
  ];
  
  details = [
    { icon: 'assets/IconImages/user.png', title: 'Who To See', value: 'Daniel Ibeto (Senior Developer)' },
    { icon: 'assets/IconImages/meeting room.png', title: 'Meeting Venue', value: '3rd Floor, Anderseen Place' },
    { icon: 'assets/IconImages/calendar.png', title: 'Meeting Date', value: '5th March, 2025'},
    { icon: 'assets/IconImages/clock.png', title: 'Meeting Time', value: '2:00 PM'},
  ];
  
  constructor() {
    // Check if multiple webcams are available
    WebcamUtil.getAvailableVideoInputs().then((mediaDevices) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }
// Form controls
scheduleMeetingForm = new FormGroup({
  otp: new FormControl('', Validators.required),
});
confirmDetailsForm = new FormGroup({
  fullName: new FormControl('John', Validators.required),
  email: new FormControl('john@verraki', Validators.required),
  phone: new FormControl('0914567890', Validators.required),
});
  // Trigger the webcam snapshot
  // triggerSnapshot(){
  //   this.trigger.next();
  // }

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

  // Handle captured image
  // handleImage(webcamImage: WebcamImage) {
  //   if (webcamImage) {
  //     console.log("Captured Image", webcamImage);
  //     this.webcamImage = webcamImage;
  //     this.capturedImage = webcamImage.imageAsDataUrl; // Store the image as base64
  //   }
  // }
  handleImage(image: WebcamImage): void {
    this.capturedImage = image.imageAsDataUrl;
    console.log("Captured Image", this.capturedImage);
  }
  // handleImage(image: WebcamImage) {
  //   this.capturedImage = image.imageAsDataUrl;
  //   this.showWebcam = false; // ✅ Hide webcam after capture
  // }
 // Close the "Take a Picture" modal
 closeSelfieModal(): void {
  this.isSelfieModalOpen = false;
  this.capturedImage = null;
}
  closeConfirmModal(){
    this.isConfirmModalOpen = false;
  }

  // Close selfie modal
  // closeSelfieModal(): void {
  //   this.isSelfieModalOpen = false;
  //   this.capturedImage = null;
  //   this.showWebcam = true; // ✅ Reset webcam when closing modal
  // }

  // Close the "Print Badge" modal
  closePrintBadgeModal(): void {
    this.isPrintBadgeModalOpen = false;
  }

  // Retake Image (Reopen "Take a Picture" Modal)
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
  

  // Print Badge Functionality
  printBadge(): void {
  if (this.capturedImage) {
    const printWindow = window.open('', '_blank');

    const badgeHTML = `
      <html>
      <head>
        <title>Print Badge</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
          }
          .badge-container {
            width: 300px;
            border: 2px solid black;
            padding: 15px;
            text-align: center;
          }
          .badge-header {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .badge-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .profile-image {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid #000;
            margin-bottom: 10px;
          }
          .badge-photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .details p {
            margin: 5px 0;
            font-size: 14px;
          }
          .details span {
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="badge-container">
          <div class="badge-header">Andersen Consulting</div>
          <div class="badge-content">
            <div class="profile-image">
              <img src="${this.capturedImage}" class="badge-photo" />
            </div>
            <div class="details">
              <p>Name: <span>John Doe</span></p>
              <p>Who To See: <span>Jane Smith</span></p>
              <p>Floor: <span>2nd Floor</span></p>
            </div>
          </div>
        </div>
        <script>
          window.onload = function () {
            window.print();
            window.close();
          };
        </script>
      </body>
      </html>
    `;

    printWindow?.document.open();
    printWindow?.document.write(badgeHTML);
    printWindow?.document.close();
  }
}


  // get triggerObservable(): Observable<void> {
  //   return this.trigger.asObservable();
  // }
  onButtonClick() {
    this.isAddMeetingModalOpen = true;
  }
  // Observable for triggering snapshot
  
  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  closeAddMeetingModal(){
    this.isAddMeetingModalOpen = false;
  }
  confirmDetails() {
    // if (this.confirmDetailsForm.valid) {
      // const newMeeting = this.confirmDetailsForm.value;
      // console.log('New Meeting:', newMeeting);

      // Optional: Add to tableData here
      // this.tableData.push(newMeeting);
      this.isConfirmModalOpen = false;
      this.isSelfieModalOpen = true;
      // this.closeAddMeetingModal();
    // }
  }
  submitMeeting() {
    if (this.scheduleMeetingForm.valid) {
      const newMeeting = this.scheduleMeetingForm.value;
      console.log('New Meeting:', newMeeting);

      // Optional: Add to tableData here
      // this.tableData.push(newMeeting);

      this.closeAddMeetingModal();
      setTimeout(() => {
        this.showWebcam = true;
        this.isConfirmModalOpen = true;
      }, 50);
      // this.isConfirmModalOpen = true;
    }
  }
  // Submit form with image
  submitSelfieDetails(): void {
    if (this.capturedImage) {
      console.log("Submitting image:", this.capturedImage);
      alert("Image captured successfully!");
      this.closeSelfieModal();
    } else {
      alert("Please take a picture before submitting.");
    }
  }

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
