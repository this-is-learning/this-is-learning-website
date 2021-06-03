import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'til-hello',
  styles: [
    `
      til-hello {
        display: block;
      }
    `,
  ],
  template: `<h1>Hello, TiL!</h1>`,
})
export class HelloComponent {}

@NgModule({
  declarations: [HelloComponent],
})
export class HelloScam {}
