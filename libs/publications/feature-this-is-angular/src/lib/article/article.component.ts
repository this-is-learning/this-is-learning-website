import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { DevCommunityRssItem } from '../dev-community-rss-parser.token';

const selector = '[til-article]';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector,
  template: `
    <h2>
      <a [href]="rssItem?.link" target="_blank" rel="nofollow noopener">{{
        rssItem?.title
      }}</a>
    </h2>

    <footer>
      <p>
        By {{ rssItem?.author }}<br />
        <time [dateTime]="rssItem?.isoDate">{{
          rssItem?.isoDate | date: 'long'
        }}</time
        ><br />
        <span *ngFor="let tag of rssItem?.categories">#{{ tag }} </span>
      </p>
    </footer>

    <p>{{ rssItem?.contentSnippet | tilTruncate }}</p>

    <a [href]="rssItem?.link" target="_blank" rel="nofollow noopener"
      >Read article</a
    >
  `,
})
export class ArticleComponent {
  @Input()
  rssItem: DevCommunityRssItem | null = null;
}
