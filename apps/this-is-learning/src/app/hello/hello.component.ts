import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

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
  template: `
    <h1>Hello, Scully!</h1>
    <p>Build time: {{ now | date: long }}</p>
  `,
})
export class HelloComponent {
  now = new Date();
}
