import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

const selector = 'til-hello';

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
    <h1>Hello, Scully!</h1>
    <p>Render time: {{ now | date: 'long' }}</p>

    <h2>Publications</h2>

    <nav>
      <ul>
        <li>
          <a routerLink="/this-is-angular">This is Angular</a>
        </li>
      </ul>
    </nav>
  `,
})
export class HelloComponent {
  now = new Date();
}
