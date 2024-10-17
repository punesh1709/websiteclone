import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { faMagnifyingGlass,faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {
  faBars = faBars;
  faXmark = faXmark;
  isOpen = false;
  faTimes = faTimes; //
  faMagnifyingGlass = faMagnifyingGlass; 
  showBackground: boolean = false;
  showHeading: boolean = false;
  isHomeRoute: boolean = false;
  constructor(private router: Router) {}
  toggleNavbaar() {
    this.isOpen = !this.isOpen;
  }
  activeItem: string = '';  // Track the active item
  //isHomeRoute = false; // Example condition for route-specific classes

  setActiveItem(item: string) {
    this.activeItem = item;
  }



  imageLoaded = false; // Flag to prevent reloading the image

  
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const isHome = event.url === '/home' || event.url === '/';
        
        this.showBackground = isHome;
        this.showHeading = isHome;
        this.isHomeRoute = isHome;
  
        // Load the image only once for the home route
        if (isHome && !this.imageLoaded) {
          this.loadImage();
          this.imageLoaded = true; // Ensure it's only loaded once
        }
      }
    });
  }
  
  // Method to load the image
  loadImage() {
    const img = new Image();
    img.src = 'assets/your-image-path.jpg'; // Replace with your image path
    img.onload = () => {
      console.log('Image preloaded');
    };
  }
  

  isNavbarOpen: boolean = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
  const body = document.body;
  if (this.isMenuOpen) {
    body.classList.add('menu-open');
  } else {
    body.classList.remove('menu-open');
  }
}

closeMenu() {
  this.isMenuOpen = false;
  document.body.classList.remove('menu-open');
}
changeBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}

}
