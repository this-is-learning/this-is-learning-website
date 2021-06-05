import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
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
    <p>Render time: {{ now | date: 'long' }}</p>
  `,
})
export class HelloComponent {
  now = new Date();
}

@NgModule({
  declarations: [HelloComponent],
  imports: [CommonModule],
})
export class HelloScam {}
