import { Component } from '@angular/core';

@Component({
  selector: 'app-articles-videos',
  templateUrl: './articles-videos.component.html',
  styleUrl: './articles-videos.component.css'
})
export class ArticlesVideosComponent {
  // Initial topics
  topics: string[] = [
    'Agile', 'Artificial Intelligence', 'Design Process', 'Ecommerce',
    'Intranets', 'Navigation', 'Psychology and UX', 'Research Methods',
    'Study Guides', 'User Testing', 'Web Usability', 'Writing for the Web'
  ];
  
  myTopics: string[] =["10 Usability Heuristics for User Interface Design","Empathy Mapping: The First Step in Design Thinking","When to Use Which User-Experience Research Methods","Service Blueprints: Definition","Journey Mapping 101","The Four Dimensions of Tone of Voice","Between-Subjects vs. Within-Subjects Study Design","UX Research Cheat Sheet","Usability 101: Introduction to Usability","Usability Testing 101"];

  
  Author: string[] =["Bruce Tognazzini","Don Norman","Jakob Nielsen"];

  addAuthor: string[] =["Mobile Development",
  "  Cloud Computing",
   " Blockchain",
    "Data Science",
   " Cybersecurity",
   " DevOps"
  ,"Don Norman","Jakob Nielsen"];


  // Additional topics to display when "See all topics" is clicked
  additionalTopics: string[] = [
    'Mobile Development', 'Cloud Computing', 'Blockchain', 'Data Science',
    'Cybersecurity', 'DevOps', 'Machine Learning', 'IoT', 'Big Data'
  ];

  // Boolean to track the visibility of additional topics
  showMore: boolean = false;

  // Toggle function to show/hide additional topics
  toggleTopics() {
    this.showMore = !this.showMore;
  }
}