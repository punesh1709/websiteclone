import { Component } from '@angular/core';

@Component({
  selector: 'app-ux-certification',
  templateUrl: './ux-certification.component.html',
  styleUrl: './ux-certification.component.css'
})
export class UxCertificationComponent {
  
    // Sample accordion data
    accordionData = [
      {
        title: 'What are the Specialty areas?',
        content: 'Each course falls into at least 1 of 3 Specialty areas: Interaction Design, Research, and Management. When you pass at least 5 courses in a Specialty area, your achievement appears on your UX Certification.'
      },
      {
        title: 'How long does it take to get UX Certified?',
        content: 'UX Certification requires over 30 hours of training, in addition to the time required to study for and pass exams. A UX Master Certification requires over 100 hours of training, usually completed over 2+ years.'
      },
      {
        title: 'Is there a deadline for completing UX Certification?',
        content: 'No, there is no deadline. However, each exam must be taken within 35 days of the course attended. Your progress is tracked in your NN/g account.'
      }
    ];
  
    // Tracks the state of each accordion item (expanded/collapsed)
    expandedItems: boolean[] = [true, false, false];
  
    // Toggle the state of a specific accordion item
    toggleIcon(index: number): void {
      this.expandedItems[index] = !this.expandedItems[index];
    }
  }