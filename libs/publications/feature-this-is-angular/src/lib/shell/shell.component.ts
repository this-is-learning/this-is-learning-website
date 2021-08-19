import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const selector = 'til-this-is-angular-shell';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector,
  styles: [
    `
      ${selector} {
        display: block;
      }
    `,
  ],
  template: `
    <h1>TiA shell</h1>

    <h2>Route data</h2>
    <pre><code>{{ route.data | async | json }}</code></pre>
  `,
})
export class ShellComponent {
  constructor(public route: ActivatedRoute) {}
}
