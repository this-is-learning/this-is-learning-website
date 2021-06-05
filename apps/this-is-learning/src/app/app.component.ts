import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'til-app',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      til-app {
        display: block;
      }
    `,
  ],
})
export class AppComponent {}
