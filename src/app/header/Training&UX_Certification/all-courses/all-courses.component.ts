import { Component } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  faCalendar = faCalendar;
  // icons = [
  //   'https://media.nngroup.com/media/courses/icons/Analyzing_Qual_Data.svg', // Add the class name or path of the image/icon
  //   'icon-qualitative', // Add the class name or path of the image/icon
  //   'icon-app-design', // Add the class name or path of the image/icon
  //   'icon-assessing' // Add the class name or path of the image/icon
  // ];

  images = [
    'https://media.nngroup.com/media/courses/icons/Analyzing_Qual_Data.svg', // Paths to your images
    'https://media.nngroup.com/media/courses/icons/Analytics_and_UX.svg',
    'https://media.nngroup.com/media/courses/icons/App_Design_for_Web.svg',
    'https://media.nngroup.com/media/courses/icons/Assessing_UX_Designs.svg',
    'https://media.nngroup.com/media/courses/icons/Becoming_a_UX_Coach.svg',
    'https://media.nngroup.com/media/courses/icons/Director.svg',
    'https://media.nngroup.com/media/courses/icons/Becoming_UX_Strategist.svg',
    'https://media.nngroup.com/media/courses/icons/Content_Strategy_and_Governance.svg',
    'https://media.nngroup.com/media/courses/icons/Customer_Journey_Management.svg',
    'https://media.nngroup.com/media/courses/icons/Design_Systems_and_Pattern_Libraries.svg',
    'https://media.nngroup.com/media/courses/icons/Generating_Big_Ideas.svg',
    'https://media.nngroup.com/media/courses/icons/Generating_Big_Ideas.svg',
    'https://media.nngroup.com/media/courses/icons/Design_Tradeoffs.svg',
    
  ];

  titles = [
    'Analytics and User Experience User Experience',
    'Analyzing Qualitative UX Data and Reporting Insights',
    'Application Design for Web and Desktop and this just write for ',
    'Assessing UX Designs Using Proven Principles',
    'Becoming a UX Coach',
    'Becoming a UX Executive',
    'Becoming a UX Strategist',
    'Content Strategy and Governance',
    'Customer-Journey Management',
    'Design Systems and Pattern',
    'Design Thinking Essentials',
    'Design Tradeoffs and UX Decision',
    
  ];

  descriptions = [
    'Study your users’ real-life behaviors and make data-informed design decisions',
    'Apply systematic analyses to uncover themes and user insights',
    'Components, design patterns, workflows, and ways of interacting with',
    'Analyze user experiences using heuristics and assessments',
    'Study your users’ real-life behaviors and make data-informed design decisions',
    'Apply systematic analyses to uncover themes and user insights',
    'Components, design patterns, workflows, and ways of interacting with',
    'Analyze user experiences using heuristics and assessments',
    'Study your users’ real-life behaviors and make data-informed design decisions',
    'Apply systematic analyses to uncover themes and user insights',
    'Components, design patterns, workflows, and ways of interacting with',
    'Analyze user experiences using heuristics and assessments',
 
  ];

  labels = [
    { text: 'RESEARCH', color: 'purple' },
    { text: 'RESEARCH', color: 'purple' },
    { text: 'INTERACTION', color: 'yellow' },
    { text: 'RESEARCH', color: 'purple' },
    { text: 'MANAGEMENT', color: 'green' },
    { text: 'MANAGEMENT', color: 'green' },
    { text: 'MANAGEMENT', color: 'green' },
    { text: 'MANAGEMENT', color: 'green' },
    { text: 'MANAGEMENT', color: 'green' },
    { text: 'MANAGEMENT', color: 'green' },
    { text: 'INTERACTION', color: 'yellow' },
    { text: 'MANAGEMENT', color: 'green' },
  ];
  
}
