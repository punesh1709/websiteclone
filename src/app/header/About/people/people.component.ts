import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
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

  expert = [
    {
      img: 'https://media.nngroup.com/media/people/photos/Adel_Du_Toit_Headshot.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Adel Du Toit',
      position: 'Guest Instructor | Head of UX at Bentley'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/Alita_Joyce_Headshot_copy.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Alita Joyce',
      position: 'Guest Instructor | UX Researcher at Google'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/20181001_Raleigh-106.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Anna Kaley',
      position: 'Director of Consulting in google in house'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/Headshot.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Ari Zelmanow',
      position: 'Guest Instructor | Head of Product and UX Research, Twilio'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/Caleb-portrait-square.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Caleb Sponheim',
      position: 'User Experience Specialist'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/Evan_Headshot.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Evan Sunwall',
      position: 'User Experience Specialist'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/IMG_6074.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Feifei Liu',
      position: 'International UX Researcher'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/20211213_Vegas-garrett.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Garrett Goldfield',
      position: 'Senior User Experience Specialist'
    },
  ];


  reserch = [
    {
      img: 'https://media.nngroup.com/media/people/photos/Amy-Zhang-400px.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Amy Zhang',
      position: 'Research Assistant'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/Headshot_Emma_Cionca2.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Emma Cionca',
      position: 'Research Assistant'
    },
    
    {
      img: 'https://media.nngroup.com/media/people/photos/Jaivrat_Headshot_cropped1.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Jaivrat Saroha',
      position: 'Research Assistant'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/Kara_Rivenbark_Photo.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Kara Rivenbark',
      position: 'Research Assistant'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/Lola_Famulegun.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Lola Famulegun',
      position: 'Research Assistant'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/IMG_9679.jpg.1200x1200_q75_autocrop_crop-smart_upscale.jpg',
      name: 'Michael Clemens',
      position: 'Research Assistant'
    },
    {
      img: 'https://media.nngroup.com/media/people/photos/2024_Headshot.png.1200x1200_q75_autocrop_crop-smart_upscale.png',
      name: 'Rachel Banawa',
      position: 'Research Assistant'
    },
  ];
}