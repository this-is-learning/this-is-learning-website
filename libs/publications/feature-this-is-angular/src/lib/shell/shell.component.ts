import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DevCommunityRssItems } from '../dev-community-rss-parser.token';

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
    <h1>
      <a [href]="rssUrl$ | async" target="_blank" rel="nofollow noopener"
        >This is Angular</a
      >
    </h1>

    <article
      til-article
      *ngFor="let rssItem of (rssItems$ | async) ?? []"
      [rssItem]="rssItem"
    ></article>
  `,
})
export class ShellComponent {
  rssItems$: Observable<DevCommunityRssItems> = this.route.data.pipe(
    map((data) => data.rssItems)
  );
  rssUrl$: Observable<string> = this.route.data.pipe(
    map((data) => data.rssUrl)
  );

  constructor(private route: ActivatedRoute) {}
}
