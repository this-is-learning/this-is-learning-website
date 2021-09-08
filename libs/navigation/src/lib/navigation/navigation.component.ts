import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'til-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navbarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }
  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
