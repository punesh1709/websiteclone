import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {
  showBanner: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // List of routes where the banner should not be displayed
        const hiddenRoutes = ['/other-route', '/another-route']; // Update with your actual routes

        // Hide the banner if the current route is in the hiddenRoutes array
        this.showBanner = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}