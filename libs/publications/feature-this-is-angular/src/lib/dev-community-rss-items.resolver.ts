import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { DevCommunityRssItems, DevCommunityRssParser, devCommunityRssParserToken } from './dev-community-rss-parser.token';

@Injectable({
  providedIn: 'root',
})
export class DevCommunityRssItemsResolver
  implements Resolve<DevCommunityRssItems> {
  constructor(
    @Inject(devCommunityRssParserToken) private rssParser: DevCommunityRssParser
  ) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<DevCommunityRssItems> {
    const feed = await this.rssParser.parseURL(route.data.rssUrl);

    return feed.items;
  }
}
