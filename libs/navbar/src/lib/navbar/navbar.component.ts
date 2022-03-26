import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'til-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
