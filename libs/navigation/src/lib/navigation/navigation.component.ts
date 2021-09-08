import { Component } from '@angular/core';

@Component({
  selector: 'til-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navbarOpen = false;


  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
