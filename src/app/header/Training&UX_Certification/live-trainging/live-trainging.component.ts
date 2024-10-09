import { Component } from '@angular/core';

@Component({
  selector: 'app-live-trainging',
  templateUrl: './live-trainging.component.html',
  styleUrl: './live-trainging.component.css'
})
export class LiveTraingingComponent {
  isLeadershipOpen = false;

  // Function to toggle the collapse on mobile screens
  toggleLeadership() {
    // This will toggle the collapse state
    this.isLeadershipOpen = !this.isLeadershipOpen;
  }


  isCourseOpen = false;

  // Function to toggle the collapse on mobile screens
  toggleCourse() {
    // This will toggle the collapse state
    this. isCourseOpen = !this.isCourseOpen;
  }

  isCertificateOpen = false;

  // Function to toggle the collapse on mobile screens
  toggleCertificate() {
    // This will toggle the collapse state
    this.isCertificateOpen = !this.isCertificateOpen;
  }

  isAttentOpen = false;

  // Function to toggle the collapse on mobile screens
  toggleAttent(){
    // This will toggle the collapse state
    this.isAttentOpen = !this.isAttentOpen;
  }
}
