import { Component } from '@angular/core';
interface Card {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards: Card[] = [
    {
      image: 'https://media.nngroup.com/media/articles/card_covers/Timeboxing-edit_Thumbnail.jpg.120x120_q75_autocrop_crop-smart_upscale.jpg',
      title: 'Timeboxing',
      description: 'A time management technique that involves planning your day into fixed units of time.'
    },
    {
      image: 'https://media.nngroup.com/media/videos/card_covers/video_roadmaps.jpg.120x120_q75_autocrop_crop-smart_upscale.jpg',
      title: 'Roadmaps',
      description: 'Visual representation of the planned progress towards achieving your goals.'
    },
    {
      image: 'https://media.nngroup.com/media/articles/card_covers/AcceleratingResearch-AI_Thumbnail2.jpg.120x120_q75_autocrop_crop-smart_upscale.jpg',
      title: 'Accelerating Research with AI',
      description: 'Exploring how AI can streamline and enhance research processes.'
    },
    {
      image: 'https://media.nngroup.com/media/videos/card_covers/video_error-messages.jpg.120x120_q75_autocrop_crop-smart_upscale.jpg',
      title: 'Error Messages',
      description: 'Best practices for designing effective error messages in user interfaces.'
    },
    {
      image: 'https://media.nngroup.com/media/articles/card_covers/Sparkle-Icon_Thumbnail2.jpg.120x120_q75_autocrop_crop-smart_upscale.jpg',
      title: 'Sparkle Icon',
      description: 'A guide to designing engaging icons for applications.'
    },
    {
      image: 'https://media.nngroup.com/media/videos/card_covers/video_Ux-resumes.jpg.120x120_q75_autocrop_crop-smart_upscale.jpg',
      title: 'UX Resumes',
      description: 'Tips for creating a standout UX designer resume.'
    }
  ];

}
