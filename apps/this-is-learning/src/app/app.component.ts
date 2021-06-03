import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';

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

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule],
})
export class AppScam {}
