import { InjectionToken } from '@angular/core';
import * as RssParser from 'rss-parser';

export interface DevCommunityRssFeedCustomFields {
  readonly language: string;
}

export interface DevCommunityRssItemCustomFields {
  readonly author: string;
  readonly contentSnippet: string;
  readonly description: string;
}

export type DevCommunityRssParser = RssParser<
  DevCommunityRssFeedCustomFields,
  DevCommunityRssItemCustomFields
>;

export type DevCommunityRssItem = DevCommunityRssItemCustomFields &
  RssParser.Item;
export type DevCommunityRssItems = readonly DevCommunityRssItem[];

export function devCommunityRssParserFactory(): DevCommunityRssParser {
  return new RssParser<
    DevCommunityRssFeedCustomFields,
    DevCommunityRssItemCustomFields
  >({
    customFields: {
      feed: ['language'],
      item: ['author', 'contentSnippet', 'description'],
    },
  });
}

export const devCommunityRssParserToken = new InjectionToken<DevCommunityRssParser>(
  'DEV_Community_RSS_parser',
  {
    factory: devCommunityRssParserFactory,
    providedIn: 'root',
  }
);
