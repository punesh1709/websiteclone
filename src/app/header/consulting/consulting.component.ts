import { Component } from '@angular/core';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.css'
})
export class ConsultingComponent {
  imageArray: string[] = [
    'https://media.nngroup.com/media/pagebits/data/images/American_express_logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/American-family-insurance-logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/best-western-logo.jpg',
    'https://media.nngroup.com/media/pagebits/data/images/Capital_One_logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/EBay_logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/Environmental_Protection_Agency_logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/Google.png',
    'https://media.nngroup.com/media/pagebits/data/images/International_Monetary_Fund_logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/National-geographic-logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/PricewaterhouseCoopers_Logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/Rand_Corporation_logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/Sony_logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/Smithsonian_logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/Verizon_logo.png',
    'https://media.nngroup.com/media/pagebits/data/images/Visa_logo.png'

  ];

  isLeadershipOpen = false;

  // Function to toggle the collapse on mobile screens
  toggleLeadership() {
    // This will toggle the collapse state
    this.isLeadershipOpen = !this.isLeadershipOpen;
  }
  
  isTrainning = false;

  // Function to toggle the collapse on mobile screens
  toggleTraining() {
    // This will toggle the collapse state
    this. isTrainning = !this. isTrainning;
  }

  isConsult = false;

  // Function to toggle the collapse on mobile screens
  toggleConsulting() {
    // This will toggle the collapse state
    this.isConsult = !this.isConsult;
  }


  isClients = false;

  // Function to toggle the collapse on mobile screens
  toggleClients() {
    // This will toggle the collapse state
    this. isClients = !this. isClients;
  }

  isNG = false;

  // Function to toggle the collapse on mobile screens
  toggleNG(){
    // This will toggle the collapse state
    this. isNG = !this. isNG;
  }
}
