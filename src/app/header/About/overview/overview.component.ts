import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  isLeadershipOpen = false;

  // Function to toggle the collapse on mobile screens
  toggleLeadership() {
    // This will toggle the collapse state
    this.isLeadershipOpen = !this.isLeadershipOpen;
  }
  leadership = [
    {
      img: 'https://media.nngroup.com/media/people/photos/_DSC4987-2.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Kara Pernice',
      position: 'President and CEO'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/20211213_Vegas-22.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Sarah Gibbons',
      position: 'Vice President'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/hoa-portrait-2023.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Hoa Loranger',
      position: 'Vice President'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/Kate-Headshot-2022.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Kate Moran',
      position: 'Vice President'
    }
  ];
}
